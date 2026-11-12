// ?mode=good|bad で初期状態を指定できる（Notionで2つ並べて埋め込む用）
function setupModes(onChange) {
  const params = new URLSearchParams(location.search);
  let mode = params.get('mode') === 'good' ? 'good' : 'bad';
  const buttons = document.querySelectorAll('.modes button');
  function apply() {
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    document.body.classList.toggle('good', mode === 'good');
    document.body.classList.toggle('bad', mode === 'bad');
    onChange(mode);
  }
  buttons.forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; apply(); }));
  apply();
  return () => mode;
}

function say(el, text, kind) {
  el.textContent = text;
  el.className = 'log ' + (kind || '');
}
