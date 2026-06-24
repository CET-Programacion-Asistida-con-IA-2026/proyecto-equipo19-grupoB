/* ════════════════════════════════════════
   NOTIFICACIONES 
   ════════════════════════════════════════ */

// ── Toast (mensaje flotante) ─────────────────────
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icons = {
    success: `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:   `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    warn:    `<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    info:    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  };

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-msg">${msg}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>`;

  container.appendChild(toast);

  // Animar entrada
  requestAnimationFrame(() => toast.classList.add('show'));

  // Auto-cerrar
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── Notificaciones en campana ────────────────────
function addNotification(msg) {
  notifications.unshift({ msg, time: 'ahora mismo', read: false });
  updateNotifBadge();
}

function updateNotifBadge() {
  const unread = notifications.filter(n => !n.read).length;
  const badge  = document.getElementById('notif-badge');
  if (!badge) return;
  badge.textContent   = unread > 9 ? '9+' : unread;
  badge.style.display = unread ? 'flex' : 'none';
}

function toggleNotifPanel() {
  const panel = document.getElementById('notif-panel');
  if (!panel) return;
  const open = panel.classList.toggle('open');

  if (open) {
    // Marcar todas como leídas
    notifications.forEach(n => n.read = true);
    updateNotifBadge();
    renderNotifPanel();
  }
}

function renderNotifPanel() {
  const list = document.getElementById('notif-list');
  if (!list) return;

  if (!notifications.length) {
    list.innerHTML = `<div class="notif-empty">No tenés notificaciones aún.</div>`;
    return;
  }

  list.innerHTML = notifications.slice(0, 10).map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}">
      <div class="notif-dot"></div>
      <div class="notif-text">
        <p>${n.msg}</p>
        <span>${n.time}</span>
      </div>
    </div>`).join('');
}

// Cerrar panel al hacer click fuera
document.addEventListener('click', e => {
  const panel = document.getElementById('notif-panel');
  if (panel && !e.target.closest('#notif-panel') && !e.target.closest('#notif-btn')) {
    panel.classList.remove('open');
  }
});
