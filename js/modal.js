/* ════════════════════════════════════════
   MODAL 
   ════════════════════════════════════════ */

function openModal() {
  document.getElementById('project-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('open');

  // Limpiar campos
  document.getElementById('proj-title').value      = '';
  document.getElementById('proj-discipline').value = '';
  document.getElementById('proj-year').value       = '';
  document.getElementById('proj-desc').value       = '';
  document.getElementById('img-preview').style.display = 'none';
  document.querySelector('.img-upload-icon').style.display = '';
  document.querySelector('.img-upload-text').style.display = '';

  tags = [];
  renderTags();
}

// ── Imagen ──────────────────────────────────────
function previewImage(input) {
  if (!input.files || !input.files[0]) return;

  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById('img-preview');
    img.src = e.target.result;
    img.style.display = 'block';
    document.querySelector('.img-upload-icon').style.display = 'none';
    document.querySelector('.img-upload-text').style.display = 'none';
  };
  reader.readAsDataURL(input.files[0]);
}

// ── Etiquetas ────────────────────────────────────
function handleTagInput(e) {
  if ((e.key === 'Enter' || e.key === ',') && e.target.value.trim()) {
    e.preventDefault();
    const val = e.target.value.trim().replace(/^#/, '').replace(/,/g, '');
    if (val && !tags.includes(val)) { tags.push(val); renderTags(); }
    e.target.value = '';
  }
  if (e.key === 'Backspace' && !e.target.value && tags.length) {
    tags.pop();
    renderTags();
  }
}

function renderTags() {
  const c     = document.getElementById('tags-container');
  const input = document.getElementById('tag-input');

  c.querySelectorAll('.tag-pill').forEach(x => x.remove());

  tags.forEach((t, i) => {
    const pill = document.createElement('div');
    pill.className = 'tag-pill';
    pill.innerHTML = `#${t} <button onclick="removeTag(${i})">×</button>`;
    c.insertBefore(pill, input);
  });
}

function removeTag(i) { tags.splice(i, 1); renderTags(); }

// ── Publicar ─────────────────────────────────────
function publishProject() {
  const title      = document.getElementById('proj-title').value.trim();
  const discipline = document.getElementById('proj-discipline').value;
  const desc       = document.getElementById('proj-desc').value.trim();
  const imgEl      = document.getElementById('img-preview');
  const hasImg     = imgEl.style.display !== 'none';

  if (!title)      { alert('Ingresá un título para el proyecto.'); return; }
  if (!discipline) { alert('Seleccioná una disciplina.'); return; }

  const COLORS = ['#d4e8e0', '#f5e9c8', '#e8d4e8', '#d4e0f5', '#f5d4d4'];
  const SHAPE_OPTS = ['circle', 'rect', 'triangle'];

  const newPost = {
    id:         Date.now(),
    user:       currentUser.handle,
    title,
    desc:       desc || 'Sin descripción.',
    discipline,
    tags:       [...tags],
    likes:      0,
    liked:      false,
    comments:   0,
    time:       'ahora mismo',
    imageUrl:   hasImg ? imgEl.src : null,
    color:      COLORS[Math.floor(Math.random() * COLORS.length)],
    shape:      SHAPE_OPTS[Math.floor(Math.random() * SHAPE_OPTS.length)],
  };

  // Agregar al estado global
  posts.unshift(newPost);
  userProjects.unshift(newPost);

  // Refrescar vistas
  buildFeed();
  buildExplore();
  updateProfileStats();
  renderProfileProjects();

  closeModal();
  showSection('feed');
}
