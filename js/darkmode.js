/* ════════════════════════════════════════
   DARK MODE
   ════════════════════════════════════════ */

const ICON_MOON = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
const ICON_SUN  = `
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1"  x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1"  y1="12" x2="3"  y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
  <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>`;

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  updateDarkModeIcon(isDark);
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}

function updateDarkModeIcon(isDark) {
  const icon = document.getElementById('darkmode-icon');
  if (!icon) return;
  icon.innerHTML = isDark ? ICON_SUN : ICON_MOON;
  document.getElementById('darkmode-btn').title = isDark ? 'Modo claro' : 'Modo oscuro';
}

// Al cargar: respetar preferencia guardada o la del sistema operativo
(function initDarkMode() {
  const saved       = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = saved !== null ? saved === '1' : prefersDark;

  if (shouldBeDark) document.body.classList.add('dark-mode');

  document.addEventListener('DOMContentLoaded', () => updateDarkModeIcon(shouldBeDark));
})();