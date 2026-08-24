(() => {
  const form = document.querySelector('#credibilityScorecard');
  if (!form) return;

  const boxes = [...form.querySelectorAll('input[type="checkbox"]')];
  const groups = [...form.querySelectorAll('[data-category]')];
  const scoreValue = document.querySelector('#scoreValue');
  const mobileScore = document.querySelector('[data-mobile-score]');
  const scoreBand = document.querySelector('#scoreBand');
  const scoreMessage = document.querySelector('#scoreMessage');
  const scoreGap = document.querySelector('#scoreGap');
  const scoreAnnouncement = document.querySelector('#scoreAnnouncement');
  const resetButton = document.querySelector('#resetScore');
  const storageNote = document.querySelector('#storageNote');
  const storageKey = 'tmn-website-credibility-score-v1';
  let storageAvailable = true;

  const bands = [
    { min: 10, title: 'Easy to inspect', message: 'Most important credibility signals are visible and supported. Keep the evidence accurate and current.' },
    { min: 7, title: 'Credible foundation', message: 'The foundation is clear, but a few gaps can still create hesitation or basic follow-up questions.' },
    { min: 4, title: 'Too much context is offline', message: 'The business may be credible, but the website asks buyers to fill in important gaps.' },
    { min: 1, title: 'Trust depends on the conversation', message: 'Most proof, people, process, or ownership detail is not yet visible on the website.' },
    { min: 0, title: 'No score yet', message: 'Check each signal a buyer can verify on the live website.' }
  ];

  const gapActions = {
    Position: 'State what the business does, who it serves, and the next page to visit.',
    Proof: 'Put named, source-linked evidence beside the claims it supports.',
    People: 'Name the operators and keep the business identity and contact details consistent.',
    Process: 'Explain what happens next, including timing, scope, and common constraints.',
    Ownership: 'Publish the relevant control, privacy, support, and handoff terms.',
    'Next step': 'Give each important page one clear action that works cleanly on mobile.'
  };

  function saveState() {
    if (!storageAvailable) return;
    try {
      const checkedValues = boxes.filter((box) => box.checked).map((box) => box.value);
      window.localStorage.setItem(storageKey, JSON.stringify(checkedValues));
    } catch (error) {
      storageAvailable = false;
      storageNote.textContent = 'Your score works for this visit, but browser storage is unavailable. Nothing is submitted to TMN Creative.';
    }
  }

  function updateScore() {
    const total = boxes.filter((box) => box.checked).length;
    const band = bands.find((item) => total >= item.min);
    const firstIncomplete = groups.find((group) => group.querySelectorAll('input:checked').length < 2);
    const gapAction = firstIncomplete
      ? gapActions[firstIncomplete.dataset.category]
      : 'Keep every visible signal accurate and current.';

    scoreValue.value = String(total);
    scoreValue.textContent = String(total);
    mobileScore.textContent = String(total);
    scoreBand.textContent = band.title;
    scoreMessage.textContent = band.message;
    scoreGap.textContent = gapAction;
    scoreAnnouncement.textContent = `Score ${total} of 12. ${band.title}. ${firstIncomplete ? 'Next fix' : 'No category gaps'}: ${gapAction}`;
    resetButton.disabled = total === 0;

    boxes.forEach((box) => {
      const point = box.closest('.score-signal').querySelector('.score-point');
      point.textContent = box.checked ? '1/1' : '0/1';
    });

    saveState();
  }

  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) {
      boxes.forEach((box) => {
        box.checked = saved.includes(box.value);
      });
    }
  } catch (error) {
    storageAvailable = false;
    storageNote.textContent = 'Your score works for this visit, but browser storage is unavailable. Nothing is submitted to TMN Creative.';
  }

  boxes.forEach((box) => box.addEventListener('change', updateScore));
  resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
      box.checked = false;
    });
    if (storageAvailable) window.localStorage.removeItem(storageKey);
    updateScore();
    boxes[0].focus();
  });

  updateScore();
})();
