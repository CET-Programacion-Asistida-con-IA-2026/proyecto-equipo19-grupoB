/* ════════════════════════════════════════
   DATA — usuarios y posts semilla
   me invitó una amiga
   ════════════════════════════════════════ */

const USERS = {
  sofiamorales: {
    name: 'Sofía Morales',
    handle: 'sofiamorales',
    role: 'Ilustradora',
    location: 'Buenos Aires',
    color: '#2d4a3e',
    initials: 'SM',
    bio: 'Ilustradora especializada en narrativa visual y books de autor. Mi trabajo mezcla técnica tradicional con herramientas digitales.',
  },
  pablorojas: {
    name: 'Pablo Rojas',
    handle: 'pablorojas',
    role: 'Fotógrafo',
    location: 'Córdoba',
    color: '#4a3d2d',
    initials: 'PR',
    bio: 'Fotógrafo documental. Exploro comunidades y territorios a través del retrato.',
  },
  marinacast: {
    name: 'Marina Castillo',
    handle: 'marinacast',
    role: 'Escultora',
    location: 'Rosario',
    color: '#3d2d4a',
    initials: 'MC',
    bio: 'Trabajo con materiales naturales — madera, piedra, barro — para crear piezas que dialogan con el espacio.',
  },
};

const SEED_POSTS = [
  {
    id: 1,
    user: 'sofiamorales',
    title: 'Serie «Memoria Botánica»',
    desc: 'Colección de 12 ilustraciones que exploran la relación entre la memoria afectiva y las plantas medicinales del noroeste argentino. Técnica mixta: tinta china y acuarela.',
    discipline: 'Ilustración',
    tags: ['tintachina', 'acuarela', 'botánica', 'identidad'],
    likes: 34, liked: false, comments: 8,
    time: 'hace 2h', color: '#d4e8e0', shape: 'circle',
  },
  {
    id: 2,
    user: 'pablorojas',
    title: 'Retrato de la Quebrada',
    desc: 'Serie documental sobre los últimos tejedores de la Quebrada de Humahuaca. Fotografía analógica en blanco y negro.',
    discipline: 'Fotografía',
    tags: ['documental', 'bnw', 'patrimonio', 'Jujuy'],
    likes: 67, liked: false, comments: 15,
    time: 'hace 5h', color: '#f5e9c8', shape: 'rect',
  },
  {
    id: 3,
    user: 'marinacast',
    title: 'Instalación «Raíz Partida»',
    desc: 'Pieza site-specific para la Trienal de Rosario. Madera de algarrobo intervenida con resina y tierra de distintas provincias.',
    discipline: 'Escultura',
    tags: ['instalación', 'madera', 'territorio'],
    likes: 89, liked: false, comments: 22,
    time: 'ayer', color: '#e8d4e8', shape: 'triangle',
  },
];

// Estado mutable de la app
let currentUser = null;
let posts       = [...SEED_POSTS];
let userProjects = [];
let tags        = [];
