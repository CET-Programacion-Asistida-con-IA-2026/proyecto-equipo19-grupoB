/* ════════════════════════════════════════
   NAVEGACIÓN — cambio de secciones
   me invitó una amiga
   ════════════════════════════════════════ */

function showSection(name) {
  // Mostrar / ocultar secciones principales
  ['feed', 'explore', 'profile'].forEach(s => {
    document.getElementById('section-' + s).style.display = s === name ? 'block' : 'none';
  });

  // Marcar botón activo en topbar
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('nav-' + name);
  if (btn) btn.classList.add('active');

  // Marcar ítem activo en side-nav
  document.querySelectorAll('.side-nav-item').forEach((b, i) => {
    b.classList.toggle('active',
      (name === 'feed'    && i === 0) ||
      (name === 'profile' && i === 1)
    );
  });
}
