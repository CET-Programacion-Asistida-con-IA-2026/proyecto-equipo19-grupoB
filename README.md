## Grupo B - Equipo 19
_Curso de Programación Asistida con IA - Chicas en Tecnología_ 🚀

En este repositorio se presenta el sitio web realizado durante el curso de programación frontend de CET.

🚀 Link del proyecto en vivo: https://cet-programacion-asistida-con-ia-2026.github.io/proyecto-equipo19-grupoB/

---

## 🧩Problemática

El mundo del arte carece de un espacio digital profesional pensado específicamente para artistas. Las redes existentes (LinkedIn, Instagram) no combinan en un solo lugar la posibilidad de mostrar portafolio, conectar con pares y acceder a convocatorias reales. Los artistas quedan dispersos entre plataformas que no entienden sus necesidades.

---

## 📋 One Page Plan

| | |
|---|---|
| **PROBLEMA** | La falta de conectividad entre artistas con ganas de crear o con escasez de recursos. El problema surge en facultades de arte y también en profesionales ya graduados sin conexiones o contactos directos en el medio audiovisual y artístico. |

| **PÚBLICO OBJETIVO** | **SOLUCIÓN** | **FUNCIONALIDADES CLAVE** |
|---|---|---|
| Estudiantes de carreras artísticas, artistas independientes y trabajadores del medio audiovisual (actores, equipo de producción, servicios). Cualquier persona que quiera conectar con otros del mismo rubro para crear proyectos colaborativos. | Reunir en una sola plataforma a personas del mismo rubro para colaborar en proyectos audiovisuales y artísticos con gente especializada en el medio, facilitando el contacto directo y la visibilidad del trabajo de cada una. | • Sistema de reseñas y puntaje · • Mensajes directos entre usuarios · • Publicación de proyectos y portafolio con filtros por disciplina |

---

## Objetivos de Desarrollo Sostenible (ODS) 🎯

Nuestro proyecto se relaciona directamente con:

- **ODS 8 — Trabajo decente y crecimiento económico:** Promovemos el acceso a oportunidades laborales y convocatorias para artistas, fomentando el crecimiento económico inclusivo y el empleo en el sector cultural.
- **ODS 9 — Industria, innovación e infraestructura:** Construimos una infraestructura digital innovadora que conecta a artistas con el ecosistema profesional y cultural.
- **ODS 10 — Reducción de las desigualdades:** Democratizamos el acceso a convocatorias y redes de contacto para artistas de todo el país, independientemente de su ubicación o trayectoria.

---

## Implementación de la problemática

La solución fue implementar una red profesional estilo LinkedIn pero exclusiva para artistas, donde puedan conectar con pares, mostrar su portafolio y postularse a convocatorias abiertas. La plataforma se llama **"Luz, camára, ¡ACCIÓN! 🎬"** y ofrece:

- **Landing page con autenticación** simulada (login, registro y usuarios demo)
- **Feed de publicaciones** donde los artistas comparten proyectos con imagen, disciplina y etiquetas
- **Sección Explorar** con filtros por disciplina para descubrir nuevos trabajos
- **Convocatorias** con listado de oportunidades reales y simulación de postulación
- **Perfil de usuario** editable con estadísticas, bio y grilla de proyectos propios
- **Perfiles de artistas** con modal de detalle y sistema de seguimiento
- **Búsqueda en tiempo real** de proyectos y artistas
- **Sistema de notificaciones** y toasts de feedback

---

## 🎨 Moodboard

El sistema de diseño está inspirado en revistas de arte independiente y galerías contemporáneas:

- **Color principal:** Carmesí profundo `#9b1c2e` — evoca la alfombra roja del cine y el teatro
- **Acento:** Dorado apagado `#c9a84c` — para detalles tipográficos y elementos clave
- **Fondos:** Tonos "paper" `#fefcfc / #faf5f6` — minimalismo cálido, evita el blanco puro
- **Tipografías:** Playfair Display (serif elegante para títulos) + Jost (sans-serif limpia para cuerpo)
- **Geometría:** Arcos y círculos en pseudo-elementos `::before / ::after` que rompen la rigidez ortogonal sin perder orden profesional

---

## 💻 Tecnologías utilizadas

- **HTML5** — Estructuración semántica y accesible del contenido
- **CSS3** — Variables nativas (`:root`) para tokens de diseño, Flexbox y Grid para layouts, transiciones, pseudo-elementos decorativos y diseño responsivo
- **JavaScript (Vanilla)** — Manipulación dinámica del DOM, FileReader API para previsualización de imágenes, gestión de estado global sin frameworks

---

## 📂 Arquitectura del proyecto

El repositorio mantiene una arquitectura modular separada por responsabilidades:
```
luz-camara-accion/
├── index.html            ← Solo HTML + orquestación (carga módulos)
├── css/
│   ├── variables.css     ← :root tokens, reset global
│   ├── components.css    ← Botones y campos compartidos
│   ├── landing.css       ← Landing page y formulario auth
│   ├── layout.css        ← Topbar, sidebars, navegación
│   ├── feed.css          ← Tarjetas del feed y publish box
│   ├── profile.css       ← Página de perfil y grilla de proyectos
│   ├── modal.css         ← Modal de publicación
│   └── responsive.css    ← Breakpoints
└── js/
    ├── data.js           ← USERS, SEED_POSTS, estado global
    ├── auth.js           ← login(), register(), loginDemo()
    ├── navigation.js     ← showSection()
    ├── feed.js           ← buildFeed(), makePostCard(), toggleLike()
    ├── profile.js        ← buildSidebar(), updateProfileStats(), sugeridos
    ├── explore.js        ← buildExplore(), filterExplore()
    └── modal.js          ← openModal(), publishProject(), tags 
```
---

## ▶ Cómo ejecutar este proyecto

Este proyecto usa múltiples archivos CSS y JS enlazados externamente, por lo que **no funciona abriéndolo directamente con `file:///`** en el navegador. Es necesario usar un servidor local.

**Opción A — Live Server (recomendada para VS Code):**
1. Instalar la extensión **Live Server** de Ritwick Dey en VS Code
2. Click derecho sobre `index.html` → **"Open with Live Server"**
3. El proyecto abre en `http://127.0.0.1:5500`

**Opción B — Terminal:**
```bash
npx serve .
```
Luego abrir la URL que aparece en consola (generalmente `http://localhost:3000`).

---

## Autoras 👩‍💻

| Nombre | GitHub |
|---|---|
| Hannah Chodos Breier | hannnahhon|
| Brisa Escobar | BrisaAnahiEscobar |
| Nicole González | nicolee6 |
| Maurehen Torres | Maurehen29-05 |
| Valentina Valente | valen-valente |

---

_Proyecto desarrollado en el marco del programa **Chicas en Tecnología** — 2026_
