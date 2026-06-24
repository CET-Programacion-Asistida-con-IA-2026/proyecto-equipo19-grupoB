/* ════════════════════════════════════════
   AUTH — login, registro, demo, logout
   con persistencia en localStorage
   ════════════════════════════════════════ */

const SESSION_KEY = 'meinvito_session';

// ── Tabs login / registro ────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) =>
    t.classList.toggle('active', i === (tab === 'login' ? 0 : 1))
  );
  document.getElementById('login-form').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
}

// ── Login con usuario existente ──────────────────
function login() {
  const h = document.getElementById('login-user').value.replace('@', '').trim();
  if (!h) { alert('Ingresá tu usuario.'); return; }

  if (USERS[h]) {
    currentUser = USERS[h];
    guardarSesion(currentUser);
    enterApp();
  } else {
    alert('Usuario no encontrado. Probá con una cuenta demo.');
  }
}

// ── Login con cuenta demo ────────────────────────
function loginDemo(handle) {
  currentUser = USERS[handle];
  guardarSesion(currentUser);
  enterApp();
}

// ── Registro de nuevo usuario ────────────────────
function register() {
  const n = document.getElementById('reg-name').value.trim();
  const u = document.getElementById('reg-user').value.replace('@', '').trim();
  const d = document.getElementById('reg-discipline').value;

  if (!n || !u || !d) { alert('Completá todos los campos.'); return; }

  const handle = u.toLowerCase().replace(/\s+/g, '');

  if (USERS[handle]) {
    alert('Ese nombre de usuario ya está en uso. Elegí otro.');
    return;
  }

  const colores = ['#9b2335', '#2d4a6e', '#2d4a3e', '#4a2d3e', '#4a3d2d'];
  const color   = colores[Math.floor(Math.random() * colores.length)];

  currentUser = {
    name:     n,
    handle,
    role:     d,
    location: 'Argentina',
    color,
    initials: n.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase(),
    bio:      'Artista en la comunidad.',
  };

  USERS[handle] = currentUser;
  guardarSesion(currentUser);
  enterApp();
}

// ── Guardar sesión en localStorage ──────────────
function guardarSesion(usuario) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(usuario));
}

// ── Borrar sesión del localStorage ──────────────
function borrarSesion() {
  localStorage.removeItem(SESSION_KEY);
}

// ── Recuperar sesión guardada ────────────────────
function recuperarSesion() {
  const guardado = localStorage.getItem(SESSION_KEY);
  if (!guardado) return null;
  try {
    return JSON.parse(guardado);
  } catch {
    return null;
  }
}

// ── Entrar a la app ──────────────────────────────
function enterApp() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('app').style.display     = 'block';
  buildSidebar();
  buildFeed();
  buildSuggestedArtists();
  buildExplore();
}

// ── Cerrar sesión ────────────────────────────────
function logout() {
  if (!confirm('¿Querés cerrar sesión?')) return;

  borrarSesion();
  currentUser  = null;
  userProjects = [];
  tags         = [];
  posts        = [...SEED_POSTS];

  document.getElementById('app').style.display     = 'none';
  document.getElementById('landing').style.display = 'flex';

  // Limpiar campos del formulario
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  switchTab('login');
}

// ── Auto-login al cargar la página ──────────────

// Si había una sesión guardada, entra directo sin pasar por el login
(function autoLogin() {
  const sesionGuardada = recuperarSesion();
  if (!sesionGuardada) return;

  // Restaurar usuario (si era demo, ya está en USERS; si era registrado, lo agregamos)
  if (!USERS[sesionGuardada.handle]) {
    USERS[sesionGuardada.handle] = sesionGuardada;
  }
  currentUser = USERS[sesionGuardada.handle];

  // Esperar a que el DOM esté listo para entrar a la app
  document.addEventListener('DOMContentLoaded', enterApp);
})();