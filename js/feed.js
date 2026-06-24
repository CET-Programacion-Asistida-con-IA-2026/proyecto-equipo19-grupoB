/* ════════════════════════════════════════
   FEED 
   ════════════════════════════════════════ */

// SVGs geométricos para placeholders sin imagen
const SHAPES = {
  circle: `<svg width="80" height="80" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <circle cx="40" cy="40" r="15" fill="currentColor" opacity="0.15"/>
  </svg>`,
  rect: `<svg width="80" height="80" viewBox="0 0 80 80">
    <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <rect x="25" y="25" width="30" height="30" fill="currentColor" opacity="0.15"/>
  </svg>`,
  triangle: `<svg width="80" height="80" viewBox="0 0 80 80">
    <polygon points="40,8 72,68 8,68" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <polygon points="40,24 60,60 20,60" fill="currentColor" opacity="0.15"/>
  </svg>`,
};

function buildFeed() {
  const container = document.getElementById('feed-posts');
  container.innerHTML = '';
  posts.forEach(p => container.appendChild(makePostCard(p)));
}

function makePostCard(p) {
  const u = USERS[p.user] || { name: p.user, initials: p.user.slice(0, 2).toUpperCase(), color: '#888', role: 'Artista' };

  const card = document.createElement('div');
  card.className = 'feed-card';

  card.innerHTML = `
    <div class="card-header">
      <div class="card-avatar" style="background:${u.color}">${u.initials}</div>
      <div class="card-author-info">
        <div class="card-author-name">${u.name}</div>
        <div class="card-author-role">${u.role} · ${p.time}</div>
      </div>
      <button class="card-menu">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="1"/>
          <circle cx="12" cy="12" r="1"/>
          <circle cx="12" cy="19" r="1"/>
        </svg>
      </button>
    </div>

    <div class="card-body">
      <div class="card-project-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="card-tags">
        <span class="card-tag discipline">${p.discipline}</span>
        ${p.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}
      </div>
    </div>

    ${p.imageUrl
      ? `<img class="card-image" src="${p.imageUrl}" alt="${p.title}">`
      : `<div class="card-placeholder" style="background:${p.color || 'var(--paper2)'}">
           <div class="card-placeholder-shape" style="color:${u.color}">
             ${SHAPES[p.shape] || SHAPES.circle}
           </div>
         </div>`
    }

    <div class="card-footer">
      <button class="card-action${p.liked ? ' liked' : ''}" onclick="toggleLike(${p.id}, this)">
        <svg viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span class="card-action-count">${p.likes}</span>
      </button>

      <button class="card-action">
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span class="card-action-count">${p.comments}</span>
      </button>

      <button class="card-action card-action-sep">
        <svg viewBox="0 0 24 24">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        Compartir
      </button>
    </div>`;

  return card;
}

function toggleLike(id, btn) {
  const p = posts.find(x => x.id === id);
  if (!p) return;

  p.liked = !p.liked;
  p.likes += p.liked ? 1 : -1;

  btn.classList.toggle('liked', p.liked);
  btn.querySelector('.card-action-count').textContent = p.likes;
}
