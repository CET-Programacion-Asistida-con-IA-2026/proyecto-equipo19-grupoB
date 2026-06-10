/* ════════════════════════════════════════
   AUTH — login, registro, demo
   me invitó una amiga
   ════════════════════════════════════════ */

function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) =>
    t.classList.toggle('active', i === (tab === 'login' ? 0 : 1))
  );
  document.getElementById('login-form').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
}

function loginDemo(handle) {
  currentUser = USERS[handle];
  enterApp();
}

function login() {
  const h = document.getElementById('login-user').value.replace('@', '');
  if (USERS[h]) {
    currentUser = USERS[h];
    enterApp();
  } else if (h) {
    alert('Usuario no encontrado. Probá con una cuenta demo.');
  } else {
    alert('Ingresá tu usuario.');
  }
}

function register() {
  const n = document.getElementById('reg-name').value.trim();
  const u = document.getElementById('reg-user').value.replace('@', '').trim();
  const d = document.getElementById('reg-discipline').value;

  if (!n || !u || !d) { alert('Completá todos los campos.'); return; }

  const handle = u.toLowerCase().replace(/\s+/g, '');
  currentUser = {
    name:     n,
    handle,
    role:     d,
    location: 'Argentina',
    color:    '#' + Math.floor(Math.random() * 0x444444 + 0x222222).toString(16),
    initials: n.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase(),
    bio:      'Artista en la comunidad.',
  };
  USERS[handle] = currentUser;
  enterApp();
}

function enterApp() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('app').style.display     = 'block';
  buildSidebar();
  buildFeed();
  buildSuggestedArtists();
  buildExplore();
}
