// ============================================
//  ARABISCH FÜR KINDER – Super Fun Learning App
// ============================================

const LETTERS = [
  { id: 'alif', letter: 'ا', name: 'Alif', sound: 'langes „aa“ wie in Vater', isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا', example: 'أَسَد', translit: 'asad', meaning: '🦁 Löwe', emoji: '🦁' },
  { id: 'baa', letter: 'ب', name: 'Baa', sound: '„b“ wie in Ball', isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', example: 'بَيْت', translit: 'bayt', meaning: '🏠 Haus', emoji: '🏠' },
  { id: 'taa', letter: 'ت', name: 'Taa', sound: '„t“ wie in Topf', isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', example: 'تُفَّاح', translit: 'tuffaah', meaning: '🍎 Apfel', emoji: '🍎' },
  { id: 'thaa', letter: 'ث', name: 'Thaa', sound: 'weiches „th“ wie in think', isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', example: 'ثَعْلَب', translit: 'tha\'lab', meaning: '🦊 Fuchs', emoji: '🦊' },
  { id: 'jeem', letter: 'ج', name: 'Jeem', sound: '„j“ wie in Jam', isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', example: 'جَمَل', translit: 'jamal', meaning: '🐪 Kamel', emoji: '🐪' },
  { id: 'haa', letter: 'ح', name: 'Haa (tief)', sound: 'tiefes, hauchiges „h“ aus dem Rachen', isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', example: 'حِصَان', translit: 'hisaan', meaning: '🐴 Pferd', emoji: '🐴' },
  { id: 'khaa', letter: 'خ', name: 'Khaa', sound: '„ch“ wie in Bach / loch', isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', example: 'خُبْز', translit: 'khubz', meaning: '🍞 Brot', emoji: '🍞' },
  { id: 'daal', letter: 'د', name: 'Daal', sound: '„d“ wie in Tür', isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد', example: 'دُبّ', translit: 'dubb', meaning: '🐻 Bär', emoji: '🐻' },
  { id: 'dhaal', letter: 'ذ', name: 'Dhaal', sound: '„th“ wie in this', isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ', example: 'ذِئْب', translit: 'dhi\'b', meaning: '🐺 Wolf', emoji: '🐺' },
  { id: 'raa', letter: 'ر', name: 'Raa', sound: 'gerolltes „r“', isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر', example: 'رُمَّان', translit: 'rummaan', meaning: '🍎 Granatapfel', emoji: '🍎' },
  { id: 'zaay', letter: 'ز', name: 'Zaay', sound: '„z“ wie in Zoo', isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز', example: 'زَرَافَة', translit: 'zaraafa', meaning: '🦒 Giraffe', emoji: '🦒' },
  { id: 'seen', letter: 'س', name: 'Seen', sound: '„s“ wie in Sonne', isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', example: 'سَمَك', translit: 'samak', meaning: '🐟 Fisch', emoji: '🐟' },
  { id: 'sheen', letter: 'ش', name: 'Sheen', sound: '„sch“ wie in Schule', isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', example: 'شَمْس', translit: 'shams', meaning: '☀️ Sonne', emoji: '☀️' },
  { id: 'saad', letter: 'ص', name: 'Saad', sound: 'schweres, dunkles „s“', isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', example: 'صَقْر', translit: 'saqr', meaning: '🦅 Falke', emoji: '🦅' },
  { id: 'daad', letter: 'ض', name: 'Daad', sound: 'schweres „d“ (besonders arabisch!)', isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', example: 'ضِفْدَع', translit: 'difda\'', meaning: '🐸 Frosch', emoji: '🐸' },
  { id: 'taa_heavy', letter: 'ط', name: 'Taa (schwer)', sound: 'schweres „t“', isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', example: 'طَبْل', translit: 'tabl', meaning: '🥁 Trommel', emoji: '🥁' },
  { id: 'dhaa', letter: 'ظ', name: 'Dhaa', sound: 'schweres „th“', isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', example: 'ظَرْف', translit: 'zarf', meaning: '✉️ Briefumschlag', emoji: '✉️' },
  { id: 'ayn', letter: 'ع', name: 'Ayn', sound: 'Kehllaut (kein deutsches Äquivalent)', isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', example: 'عَيْن', translit: '\'ayn', meaning: '👁️ Auge', emoji: '👁️' },
  { id: 'ghayn', letter: 'غ', name: 'Ghayn', sound: 'wie französisches „r“ / gurgeln', isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', example: 'غَزَال', translit: 'ghazaal', meaning: '🦌 Gazelle', emoji: '🦌' },
  { id: 'faa', letter: 'ف', name: 'Faa', sound: '„f“ wie in Fisch', isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', example: 'فِيل', translit: 'fiil', meaning: '🐘 Elefant', emoji: '🐘' },
  { id: 'qaaf', letter: 'ق', name: 'Qaaf', sound: 'tiefes „k“ aus dem Rachen', isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', example: 'قَمَر', translit: 'qamar', meaning: '🌙 Mond', emoji: '🌙' },
  { id: 'kaaf', letter: 'ك', name: 'Kaaf', sound: '„k“ wie in Kamel', isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', example: 'كِتَاب', translit: 'kitaab', meaning: '📖 Buch', emoji: '📖' },
  { id: 'laam', letter: 'ل', name: 'Laam', sound: '„l“ wie in Lampe', isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', example: 'لَيْمُون', translit: 'laymuun', meaning: '🍋 Zitrone', emoji: '🍋' },
  { id: 'meem', letter: 'م', name: 'Meem', sound: '„m“ wie in Mond', isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', example: 'مَاء', translit: 'maa\'', meaning: '💧 Wasser', emoji: '💧' },
  { id: 'noon', letter: 'ن', name: 'Noon', sound: '„n“ wie in Nase', isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', example: 'نَحْلَة', translit: 'nahla', meaning: '🐝 Biene', emoji: '🐝' },
  { id: 'haa_soft', letter: 'ه', name: 'Haa (weich)', sound: 'leichtes „h“ wie in Hut', isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', example: 'هِلَال', translit: 'hilaal', meaning: '🌙 Sichelmond', emoji: '🌙' },
  { id: 'waaw', letter: 'و', name: 'Waaw', sound: '„w“ oder langes „uu“', isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو', example: 'وَرْدَة', translit: 'warda', meaning: '🌹 Rose', emoji: '🌹' },
  { id: 'yaa', letter: 'ي', name: 'Yaa', sound: '„y“ oder langes „ii“', isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', example: 'يَد', translit: 'yad', meaning: '✋ Hand', emoji: '✋' }
];

// Level definitions – groups of letters + special levels
const LEVELS = [
  { id: 1, title: 'Erste Schritte', subtitle: 'ا ب ت ث', icon: '🌱', letterIds: ['alif', 'baa', 'taa', 'thaa'] },
  { id: 2, title: 'Tiere & mehr', subtitle: 'ج ح خ د', icon: '🐪', letterIds: ['jeem', 'haa', 'khaa', 'daal'] },
  { id: 3, title: 'Weiter geht\'s', subtitle: 'ذ ر ز س', icon: '🦊', letterIds: ['dhaal', 'raa', 'zaay', 'seen'] },
  { id: 4, title: 'Sch & Schwer', subtitle: 'ش ص ض ط', icon: '☀️', letterIds: ['sheen', 'saad', 'daad', 'taa_heavy'] },
  { id: 5, title: 'Kehllaute', subtitle: 'ظ ع غ ف', icon: '👁️', letterIds: ['dhaa', 'ayn', 'ghayn', 'faa'] },
  { id: 6, title: 'Fast geschafft', subtitle: 'ق ك ل م', icon: '🌙', letterIds: ['qaaf', 'kaaf', 'laam', 'meem'] },
  { id: 7, title: 'Die letzten', subtitle: 'ن ه و ي', icon: '🌹', letterIds: ['noon', 'haa_soft', 'waaw', 'yaa'] },
  { id: 8, title: 'Buchstaben-Meister', subtitle: 'Alle 28!', icon: '🏆', letterIds: 'all', type: 'review' },
  { id: 9, title: 'Wort-Detektiv', subtitle: 'Wörter erkennen', icon: '🔍', type: 'words' },
  { id: 10, title: 'Schreib-Champion', subtitle: 'Schreibe 5 Buchstaben', icon: '✍️', type: 'writing_challenge' },
  { id: 11, title: 'Hör-Held', subtitle: 'Aussprache-Quiz', icon: '🎧', type: 'listening' },
  { id: 12, title: 'Superstar', subtitle: 'Finales Challenge', icon: '🌟', type: 'final' }
];

// State
let state = {
  stars: 0,
  completedLevels: {}, // { levelId: starsEarned }
  currentLevel: null,
  currentLetter: null,
  currentLetters: [],
  quiz: {
    questions: [],
    index: 0,
    score: 0
  },
  writingFrom: null // 'letter' or 'challenge'
};

// Load / Save
function loadProgress() {
  try {
    const saved = localStorage.getItem('arabischKidsProgress');
    if (saved) {
      const data = JSON.parse(saved);
      state.stars = data.stars || 0;
      state.completedLevels = data.completedLevels || {};
    }
  } catch (e) {}
  updateStats();
}

function saveProgress() {
  localStorage.setItem('arabischKidsProgress', JSON.stringify({
    stars: state.stars,
    completedLevels: state.completedLevels
  }));
  updateStats();
}

function updateStats() {
  document.getElementById('total-stars').textContent = state.stars;
  document.getElementById('map-stars').textContent = state.stars;
  const done = Object.keys(state.completedLevels).length;
  document.getElementById('levels-done').textContent = done;
}

function resetProgress() {
  if (confirm('Wirklich allen Fortschritt löschen und neu starten?')) {
    state.stars = 0;
    state.completedLevels = {};
    saveProgress();
    showScreen('home');
    alert('Alles zurückgesetzt! Viel Spaß beim neuen Abenteuer 🚀');
  }
}

// Navigation
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  
  if (id === 'map') renderLevels();
  if (id === 'home') updateStats();
}

// Level Map
function renderLevels() {
  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';
  
  LEVELS.forEach((lvl, idx) => {
    const isLocked = idx > 0 && !state.completedLevels[LEVELS[idx - 1].id];
    const completed = !!state.completedLevels[lvl.id];
    const stars = state.completedLevels[lvl.id] || 0;
    
    const card = document.createElement('div');
    card.className = 'level-card' + (isLocked ? ' locked' : '') + (completed ? ' completed' : '');
    card.innerHTML = `
      <div class="level-number">Level ${lvl.id}</div>
      <div class="level-icon">${lvl.icon}</div>
      <div class="level-title">${lvl.title}</div>
      <div class="level-subtitle">${lvl.subtitle}</div>
      <div class="level-stars">${completed ? '⭐'.repeat(stars) : (isLocked ? '🔒' : '○ ○ ○')}</div>
    `;
    
    if (!isLocked) {
      card.onclick = () => startLevel(lvl);
    }
    grid.appendChild(card);
  });
}

function startLevel(lvl) {
  state.currentLevel = lvl;
  
  if (lvl.type === 'review' || !lvl.type) {
    // Letter group level
    if (lvl.letterIds === 'all') {
      state.currentLetters = [...LETTERS];
    } else {
      state.currentLetters = LETTERS.filter(l => lvl.letterIds.includes(l.id));
    }
    // Start with first letter of the group
    openLetter(state.currentLetters[0]);
  } else if (lvl.type === 'words') {
    startWordQuiz();
  } else if (lvl.type === 'writing_challenge') {
    startWritingChallenge();
  } else if (lvl.type === 'listening') {
    startListeningQuiz();
  } else if (lvl.type === 'final') {
    startFinalChallenge();
  }
}

// Letter view
function openLetter(letter) {
  state.currentLetter = letter;
  document.getElementById('letter-title').textContent = letter.name;
  document.getElementById('big-letter').textContent = letter.letter;
  document.getElementById('letter-name').textContent = letter.name;
  document.getElementById('letter-sound').textContent = letter.sound;
  document.getElementById('form-isolated').textContent = letter.isolated;
  document.getElementById('form-initial').textContent = letter.initial;
  document.getElementById('form-medial').textContent = letter.medial;
  document.getElementById('form-final').textContent = letter.final;
  document.getElementById('example-arabic').textContent = letter.example;
  document.getElementById('example-translit').textContent = letter.translit;
  document.getElementById('example-meaning').textContent = letter.meaning;
  
  showScreen('letter');
  // Auto speak after short delay
  setTimeout(() => speakText(letter.letter, 'ar'), 400);
}

function speakCurrentLetter() {
  if (state.currentLetter) {
    speakText(state.currentLetter.letter, 'ar');
  }
}

function speakExample() {
  if (state.currentLetter) {
    speakText(state.currentLetter.example, 'ar');
  }
}

// Speech
function speakText(text, lang = 'ar') {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang === 'ar' ? 'ar-SA' : 'de-DE';
  utt.rate = 0.85;
  // Prefer Arabic voice if available
  const voices = speechSynthesis.getVoices();
  const arVoice = voices.find(v => v.lang.startsWith('ar'));
  if (arVoice && lang === 'ar') utt.voice = arVoice;
  speechSynthesis.speak(utt);
}

// Writing
let canvas, ctx, drawing = false, lastX, lastY;

function initCanvas() {
  canvas = document.getElementById('write-canvas');
  ctx = canvas.getContext('2d');
  // Handle high DPI
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = 320 * dpr;
  canvas.height = 320 * dpr;
  ctx.scale(dpr, dpr);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#ffd166';
  
  canvas.onmousedown = startDraw;
  canvas.onmousemove = draw;
  canvas.onmouseup = stopDraw;
  canvas.onmouseleave = stopDraw;
  
  canvas.ontouchstart = (e) => { e.preventDefault(); startDraw(e.touches[0]); };
  canvas.ontouchmove = (e) => { e.preventDefault(); draw(e.touches[0]); };
  canvas.ontouchend = stopDraw;
}

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left),
    y: (e.clientY - rect.top)
  };
}

function startDraw(e) {
  drawing = true;
  const pos = getPos(e);
  lastX = pos.x;
  lastY = pos.y;
}

function draw(e) {
  if (!drawing) return;
  const pos = getPos(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  lastX = pos.x;
  lastY = pos.y;
}

function stopDraw() {
  drawing = false;
}

function clearCanvas() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startWriting() {
  state.writingFrom = 'letter';
  document.getElementById('guide-letter').textContent = state.currentLetter.letter;
  showScreen('writing');
  setTimeout(() => {
    initCanvas();
    clearCanvas();
  }, 100);
}

function startWritingChallenge() {
  state.writingFrom = 'challenge';
  // Pick a random letter from learned ones
  const learned = LETTERS.filter(l => {
    // simplistic: any completed letter level
    return true;
  });
  state.currentLetter = learned[Math.floor(Math.random() * learned.length)];
  document.getElementById('guide-letter').textContent = state.currentLetter.letter;
  showScreen('writing');
  setTimeout(() => {
    initCanvas();
    clearCanvas();
  }, 100);
}

function backFromWriting() {
  if (state.writingFrom === 'letter') {
    showScreen('letter');
  } else {
    showScreen('map');
  }
}

function finishWriting() {
  // Always praise kids for effort!
  confetti();
  state.stars += 1;
  saveProgress();
  
  // Simple success
  if (state.writingFrom === 'challenge') {
    completeLevel(state.currentLevel, 2);
  } else {
    // Just go back with praise
    alert('Super geschrieben! ⭐ Du bist ein Schreib-Held!');
    showScreen('letter');
  }
}

// Quiz
function startQuiz() {
  // Build questions from current letter group
  const letters = state.currentLetters.length ? state.currentLetters : [state.currentLetter];
  const questions = [];
  
  // Type 1: Identify letter by name
  letters.forEach(l => {
    questions.push({
      type: 'identify',
      letter: l,
      question: `Welcher Buchstabe ist „${l.name}“?`,
      correct: l.letter
    });
  });
  
  // Type 2: What sound?
  letters.forEach(l => {
    questions.push({
      type: 'sound',
      letter: l,
      question: `Welchen Laut macht ${l.letter} ?`,
      correct: l.sound.split('„')[1]?.split('“')[0] || l.name
    });
  });
  
  // Shuffle & take 5
  shuffle(questions);
  state.quiz.questions = questions.slice(0, Math.min(5, questions.length));
  state.quiz.index = 0;
  state.quiz.score = 0;
  
  showQuizQuestion();
  showScreen('quiz');
}

function startWordQuiz() {
  // Simple word recognition using examples
  const pool = LETTERS.slice(0, 20);
  const questions = [];
  for (let i = 0; i < 5; i++) {
    const l = pool[Math.floor(Math.random() * pool.length)];
    questions.push({
      type: 'word',
      letter: l,
      question: `Was bedeutet dieses Wort?`,
      display: l.example,
      correct: l.meaning
    });
  }
  state.quiz.questions = questions;
  state.quiz.index = 0;
  state.quiz.score = 0;
  showQuizQuestion();
  showScreen('quiz');
}

function startListeningQuiz() {
  const pool = LETTERS;
  const questions = [];
  for (let i = 0; i < 5; i++) {
    const l = pool[Math.floor(Math.random() * pool.length)];
    questions.push({
      type: 'listen',
      letter: l,
      question: `Welchen Buchstaben hörst du?`,
      correct: l.letter
    });
  }
  state.quiz.questions = questions;
  state.quiz.index = 0;
  state.quiz.score = 0;
  showQuizQuestion();
  showScreen('quiz');
}

function startFinalChallenge() {
  // Mix of everything
  startQuiz(); // reuse for simplicity, but mark as final
  state.currentLevel = LEVELS.find(l => l.id === 12);
}

function showQuizQuestion() {
  const q = state.quiz.questions[state.quiz.index];
  document.getElementById('quiz-current').textContent = state.quiz.index + 1;
  document.getElementById('quiz-total').textContent = state.quiz.questions.length;
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-feedback').textContent = '';
  
  const display = document.getElementById('quiz-display');
  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = '';
  
  if (q.type === 'identify') {
    display.textContent = '?';
    display.style.fontSize = '4rem';
    // Options: 4 letters
    const opts = [q.letter];
    while (opts.length < 4) {
      const r = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      if (!opts.find(o => o.id === r.id)) opts.push(r);
    }
    shuffle(opts);
    opts.forEach(o => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option arabic';
      btn.textContent = o.letter;
      btn.onclick = () => checkAnswer(btn, o.letter === q.correct, q);
      optionsEl.appendChild(btn);
    });
  } else if (q.type === 'sound') {
    display.textContent = q.letter.letter;
    display.style.fontSize = '5.5rem';
    const opts = [q.letter.sound];
    while (opts.length < 4) {
      const r = LETTERS[Math.floor(Math.random() * LETTERS.length)].sound;
      if (!opts.includes(r)) opts.push(r);
    }
    shuffle(opts);
    opts.forEach(o => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = o.length > 30 ? o.slice(0, 28) + '…' : o;
      btn.onclick = () => checkAnswer(btn, o === q.correct, q);
      optionsEl.appendChild(btn);
    });
  } else if (q.type === 'word') {
    display.textContent = q.display;
    display.style.fontSize = '3.5rem';
    const opts = [q.correct];
    while (opts.length < 4) {
      const r = LETTERS[Math.floor(Math.random() * LETTERS.length)].meaning;
      if (!opts.includes(r)) opts.push(r);
    }
    shuffle(opts);
    opts.forEach(o => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = o;
      btn.onclick = () => checkAnswer(btn, o === q.correct, q);
      optionsEl.appendChild(btn);
    });
  } else if (q.type === 'listen') {
    display.textContent = '🔊';
    display.style.fontSize = '4rem';
    // Speak the letter
    setTimeout(() => speakText(q.letter.letter, 'ar'), 300);
    
    const opts = [q.letter];
    while (opts.length < 4) {
      const r = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      if (!opts.find(o => o.id === r.id)) opts.push(r);
    }
    shuffle(opts);
    opts.forEach(o => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option arabic';
      btn.textContent = o.letter;
      btn.onclick = () => checkAnswer(btn, o.letter === q.correct, q);
      optionsEl.appendChild(btn);
    });
    
    // Replay button
    const replay = document.createElement('button');
    replay.className = 'btn btn-speak';
    replay.textContent = '🔄 Nochmal anhören';
    replay.style.gridColumn = '1 / -1';
    replay.onclick = () => speakText(q.letter.letter, 'ar');
    optionsEl.appendChild(replay);
  }
}

function checkAnswer(btn, isCorrect, q) {
  // Disable all
  document.querySelectorAll('.quiz-option').forEach(b => b.onclick = null);
  
  if (isCorrect) {
    btn.classList.add('correct');
    document.getElementById('quiz-feedback').textContent = 'Richtig! 🎉 Super!';
    document.getElementById('quiz-feedback').style.color = '#48bb78';
    state.quiz.score++;
    confetti(30);
  } else {
    btn.classList.add('wrong');
    document.getElementById('quiz-feedback').textContent = 'Leider falsch 😅 Versuch\'s nochmal!';
    document.getElementById('quiz-feedback').style.color = '#f56565';
  }
  
  setTimeout(() => {
    state.quiz.index++;
    if (state.quiz.index >= state.quiz.questions.length) {
      finishQuiz();
    } else {
      showQuizQuestion();
    }
  }, 1200);
}

function finishQuiz() {
  const total = state.quiz.questions.length;
  const score = state.quiz.score;
  let stars = 1;
  if (score >= total) stars = 3;
  else if (score >= total * 0.6) stars = 2;
  
  state.stars += stars;
  completeLevel(state.currentLevel, stars);
}

function completeLevel(level, stars) {
  if (!level) return;
  const prev = state.completedLevels[level.id] || 0;
  if (stars > prev) {
    state.completedLevels[level.id] = stars;
  }
  saveProgress();
  
  document.getElementById('earned-stars').textContent = stars;
  document.getElementById('complete-message').textContent = 
    stars === 3 ? 'Perfekt! Du bist ein Arabisch-Superstar! 🌟' :
    stars === 2 ? 'Sehr gut gemacht! Weiter so! 💪' :
    'Gut gemacht! Übe noch ein bisschen für mehr Sterne!';
  
  confetti(80);
  showScreen('complete');
}

// Confetti
function confetti(count = 60) {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const pieces = [];
  const colors = ['#ff6b35', '#ffd166', '#00c9a7', '#7b68ee', '#ff6b9d', '#4ecdc4'];
  
  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8 + Math.random() * 8,
      h: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: -3 + Math.random() * 6,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      vr: -5 + Math.random() * 10
    });
  }
  
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.vy += 0.08;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Init
window.onload = () => {
  loadProgress();
  // Load voices
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {};
  }
};

// Make functions global for onclick
window.showScreen = showScreen;
window.startLevel = startLevel;
window.openLetter = openLetter;
window.speakCurrentLetter = speakCurrentLetter;
window.speakExample = speakExample;
window.startWriting = startWriting;
window.startQuiz = startQuiz;
window.clearCanvas = clearCanvas;
window.finishWriting = finishWriting;
window.backFromWriting = backFromWriting;
window.resetProgress = resetProgress;