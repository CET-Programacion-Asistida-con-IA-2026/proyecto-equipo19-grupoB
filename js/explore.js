/* ════════════════════════════════════════
   EXPLORAR — grid y filtros por disciplina
   me invitó una amiga
   ════════════════════════════════════════ */

const DISCIPLINES = [
  'Ilustración', 'Fotografía', 'Escultura', 'Pintura',
  'Arte digital', 'Cerámica', 'Diseño gráfico', 'Instalación',
];

function buildExplore() {
  document.getElementById('explore-disciplines').innerHTML =
    DISCIPLINES.map(d =>
      `<span class="disc-tag" onclick="filterExplore('${d}', this)">${d}</span>`
    ).join('');

  renderExploreGrid(posts);
}

function filterExplore(disc, el) {
  document.querySelectorAll('.disc-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderExploreGrid(posts.filter(p => p.discipline === disc));
}

function renderExploreGrid(items) {
  const g = document.getElementById('explore-grid');

  if (!items.length) {
    g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--ink3)">
      No hay proyectos en esta disciplina aún.
    </div>`;
    return;
  }

  g.innerHTML = items.map(p => {
    const u = USERS[p.user] || { color: '#888' };
    return `
      <div class="project-card-grid">
        <div class="project-thumb" style="background:${p.color || 'var(--paper2)'}">
          ${p.imageUrl
            ? `<img class="project-thumb-img" src="${p.imageUrl}" alt="">`
            : `<div class="project-thumb-placeholder" style="color:${u.color}">◯</div>`}
        </div>
        <div class="project-card-info">
          <div class="project-card-title">${p.title}</div>
          <div class="project-card-cat">${p.discipline} · ${USERS[p.user]?.name || p.user}</div>
          <div class="project-card-likes">
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            ${p.likes}
          </div>
        </div>
      </div>`;
  }).join('');
}
