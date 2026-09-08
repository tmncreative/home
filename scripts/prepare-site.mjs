import { execFile } from 'node:child_process';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { extname, join, relative } from 'node:path';

const sourceRoot = process.cwd();
const publishRoot = join(sourceRoot, '_site');
const publicDirectories = new Set(['fonts', 'images', 'videos']);
const publicExtensions = new Set(['.css', '.html', '.js', '.txt', '.xml']);
const publicRootFiles = new Set(['_redirects']);
const analyticsScript = '<script src="/tmn-analytics.v20260825a.js" defer></script>';
const attributionVersion = '20260908a';
const execFileAsync = promisify(execFile);
const { stdout: trackedFileList } = await execFileAsync('git', ['ls-files', '-z'], {
  cwd: sourceRoot,
  encoding: 'buffer',
  maxBuffer: 8 * 1024 * 1024
});
const trackedFiles = new Set(trackedFileList.toString('utf8').split('\0').filter(Boolean));

function isTrackedPublicPath(source) {
  const sourcePath = relative(sourceRoot, source);
  if (sourcePath === 'images/_orig-backup') return false;
  return trackedFiles.has(sourcePath) || [...trackedFiles].some((file) => file.startsWith(`${sourcePath}/`));
}

await rm(publishRoot, { recursive: true, force: true });
await mkdir(publishRoot, { recursive: true });

const entries = await readdir(sourceRoot, { withFileTypes: true });

for (const entry of entries) {
  if (entry.isDirectory() && publicDirectories.has(entry.name)) {
    await cp(join(sourceRoot, entry.name), join(publishRoot, entry.name), {
      recursive: true,
      filter: isTrackedPublicPath
    });
    continue;
  }

  if (
    entry.isFile() &&
    (publicRootFiles.has(entry.name) || publicExtensions.has(extname(entry.name)))
  ) {
    if (trackedFiles.has(entry.name)) {
      await cp(join(sourceRoot, entry.name), join(publishRoot, entry.name));
    }
  }
}

for (const entry of await readdir(publishRoot, { withFileTypes: true })) {
  if (!entry.isFile() || extname(entry.name) !== '.html') continue;

  const pagePath = join(publishRoot, entry.name);
  const sourceHtml = await readFile(pagePath, 'utf8');
  const html = sourceHtml.replace(/(src="\/?tmn-attribution\.v20260503b\.js)(?:\?v=[^"\s]+)?"/g, `$1?v=${attributionVersion}"`);

  if (html.includes(analyticsScript)) {
    if (html !== sourceHtml) await writeFile(pagePath, html);
    continue;
  }
  if (!html.includes('</head>')) {
    throw new Error(`Unable to add analytics to ${entry.name}: missing </head>`);
  }

  await writeFile(pagePath, html.replace('</head>', `  ${analyticsScript}\n</head>`));
}

const published = await readdir(publishRoot);
console.log(`Prepared ${published.length} public root entries in ${publishRoot}`);
