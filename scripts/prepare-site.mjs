import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const sourceRoot = process.cwd();
const publishRoot = join(sourceRoot, '_site');
const publicDirectories = new Set(['fonts', 'images', 'videos']);
const publicExtensions = new Set(['.css', '.html', '.js', '.txt', '.xml']);
const publicRootFiles = new Set(['_redirects']);
const analyticsScript = '<script src="/tmn-analytics.v20260825a.js" defer></script>';

await rm(publishRoot, { recursive: true, force: true });
await mkdir(publishRoot, { recursive: true });

const entries = await readdir(sourceRoot, { withFileTypes: true });

for (const entry of entries) {
  if (entry.isDirectory() && publicDirectories.has(entry.name)) {
    await cp(join(sourceRoot, entry.name), join(publishRoot, entry.name), {
      recursive: true,
      filter: (source) => !source.includes(join('images', '_orig-backup'))
    });
    continue;
  }

  if (
    entry.isFile() &&
    (publicRootFiles.has(entry.name) || publicExtensions.has(extname(entry.name)))
  ) {
    await cp(join(sourceRoot, entry.name), join(publishRoot, entry.name));
  }
}

for (const entry of await readdir(publishRoot, { withFileTypes: true })) {
  if (!entry.isFile() || extname(entry.name) !== '.html') continue;

  const pagePath = join(publishRoot, entry.name);
  const html = await readFile(pagePath, 'utf8');

  if (html.includes(analyticsScript)) continue;
  if (!html.includes('</head>')) {
    throw new Error(`Unable to add analytics to ${entry.name}: missing </head>`);
  }

  await writeFile(pagePath, html.replace('</head>', `  ${analyticsScript}\n</head>`));
}

const published = await readdir(publishRoot);
console.log(`Prepared ${published.length} public root entries in ${publishRoot}`);
