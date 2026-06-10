/* ════════════════════════════════════════
   PERFIL — sidebar y página de perfil
   me invitó una amiga
   ════════════════════════════════════════ */

function buildSidebar() {
  const u = currentUser;

  // Avatar en topbar
  const ta = document.getElementById('topbar-avatar');
  ta.textContent = u.initials;
  ta.style.background = u.color;

  // Avatar en caja de publicación
  const pa = document.getElementById('publish-avatar');
  pa.textContent = u.initials;
  pa.style.background = u.color;

  // Tarjeta mini en sidebar izquierdo
  document.getElementById('sidebar-profile-card').innerHTML = `
    <div class="profile-card-cover"></div>
    <div class="profile-card-body">
      <div class="profile-card-avatar" style="background:${u.color}">${u.initials}</div>
      <div class="profile-card-name">${u.name}</div>
      <div class="profile-card-role">@${u.handle} · ${u.role}</div>
      <div class="profile-card-stats">
        <div class="stat-item">
          <span class="stat-num" id="sb-proj-count">${userProjects.length}</span>
          <span class="stat-label">Proyectos</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">127</span>
          <span class="stat-label">Seguidores</span>
        </div>
      </div>
    </div>`;

  // Página de perfil completa
  document.getElementById('profile-big-avatar').textContent    = u.initials;
  document.getElementById('profile-big-avatar').style.background = u.color;
  document.getElementById('profile-name-text').textContent     = u.name;
  document.getElementById('profile-role-text').textContent     = `${u.role} · @${u.handle}`;
  document.getElementById('profile-location-text').textContent = u.location;
  document.getElementById('profile-bio-text').textContent      = u.bio;

  updateProfileStats();
}

function updateProfileStats() {
  const total = userProjects.length;
  const likes = userProjects.reduce((acc, p) => acc + p.likes, 0);

  const el1 = document.getElementById('stat-projects');
  const el2 = document.getElementById('stat-likes');
  const el3 = document.getElementById('sb-proj-count');

  if (el1) el1.textContent = total;
  if (el2) el2.textContent = likes;
  if (el3) el3.textContent = total;
}

function renderProfileProjects() {
  const g = document.getElementById('profile-projects-grid');

  if (!userProjects.length) {
    g.innerHTML = `
      <div style="text-align:center;padding:2.5rem;color:var(--ink3);grid-column:1/-1;border:2px dashed var(--border);border-radius:10px">
        <div style="font-size:2rem;margin-bottom:8px;opacity:0.3">🎨</div>
        <p style="font-size:0.875rem">Aún no publicaste proyectos.</p>
        <button class="btn-accent" onclick="openModal()" style="margin-top:1rem;font-size:0.82rem;padding:0.45rem 1rem">
          Publicar primer proyecto
        </button>
      </div>`;
    return;
  }

  g.innerHTML = userProjects.map(p => `
    <div class="project-card-grid">
      <div class="project-thumb" style="background:${p.color || 'var(--paper2)'}">
        ${p.imageUrl
          ? `<img class="project-thumb-img" src="${p.imageUrl}" alt="">`
          : `<div class="project-thumb-placeholder">◯</div>`}
      </div>
      <div class="project-card-info">
        <div class="project-card-title">${p.title}</div>
        <div class="project-card-cat">${p.discipline}</div>
        <div class="project-card-likes">
          <svg viewBox="0 0 24 24" style="width:12px;height:12px;stroke:var(--crimson);fill:var(--crimson-light);stroke-width:1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          ${p.likes}
        </div>
      </div>
    </div>`).join('');
}

function buildSuggestedArtists() {
  const container = document.getElementById('suggested-artists');
  const others = Object.values(USERS)
    .filter(u => u.handle !== currentUser.handle)
    .slice(0, 3);

  container.innerHTML = others.map(u => `
    <div class="artist-suggest">
      <div class="suggest-avatar" style="background:${u.color}">${u.initials}</div>
      <div class="suggest-info">
        <div class="suggest-name">${u.name}</div>
        <div class="suggest-role">${u.role}</div>
      </div>
      <button class="btn-follow"
        onclick="this.classList.toggle('following'); this.textContent = this.classList.contains('following') ? 'Siguiendo' : 'Seguir'">
        Seguir
      </button>
    </div>`).join('');
}
