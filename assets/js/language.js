/* Local translations: no external translation service or network request needed. */
(() => {
  'use strict';

  // Keys match visible Spanish text, with whitespace normalized. Names stay unchanged.
  const english = {
    'Idioma': 'Language',
    'Inicio': 'Home',
    'Acerca de mi': 'About me',
    'Acerca de mí': 'About me',
    'Aptitudes': 'Technical skills',
    'Mi formación': 'Education',
    'Experiencia': 'Experience',
    'Portafolio': 'Portfolio',
    'Certificaciones': 'Certifications',
    'Habilidades': 'Soft skills',
    'Contacto': 'Contact',
    'Enviar Correo': 'Send email',
    'Soy': 'I am a',
    'Ver Proyectos': 'View projects',
    'Descargar CV': 'Download CV',
    'Mi nombre es': 'My name is',
    'y actualmente me encuentro cursando el octavo semestre de la carrera de Ingeniería de Software y Sistemas Computacionales en la Universidad de La Salle Bajío. Estoy en búsqueda de oportunidades que me permitan crecer tanto a nivel laboral como personal. Me caracterizo por ser una persona altamente dedicada, comprometida y con pasión por resolver retos tecnológicos.': 'and I am currently in my eighth semester of Software Engineering and Computer Systems at Universidad de La Salle Bajío. I am looking for opportunities to grow both professionally and personally. I am highly dedicated, committed, and passionate about solving technological challenges.',
    'Promedio Académico Destacado: 9.8': 'Outstanding academic average: 9.8',
    'Estudiante de Ingeniería en Software & Desarrolladora Full Stack': 'Software Engineering Student & Full Stack Developer',
    'Búsqueda constante de crecimiento profesional y aprendizaje continuo.': 'Always pursuing professional growth and continuous learning.',
    'Universidad:': 'University:',
    'Carrera:': 'Degree:',
    'Ing. en Software y Sistemas Computacionales': 'Software Engineering and Computer Systems',
    'Ubicación:': 'Location:',
    'León, Guanajuato, México': 'León, Guanajuato, Mexico',
    'Teléfono:': 'Phone:',
    'Semestre:': 'Semester:',
    '8.º Semestre': '8th semester',
    'Correo:': 'Email:',
    'Disponibilidad:': 'Availability:',
    'Inmediata': 'Immediate',
    'Mis habilidades y tiempo de experiencia': 'My skills and years of experience',
    'Lenguajes de Programación': 'Programming languages',
    'Lenguajes de Marcado y Estilos': 'Markup and styling languages',
    'Frameworks y Tecnologías': 'Frameworks and technologies',
    'APIs REST': 'REST APIs',
    'Bases de Datos': 'Databases',
    'DevOps, Cloud y Testing': 'DevOps, Cloud and Testing',
    'APIs de IA': 'AI APIs',
    'Herramientas, Diseño & Otros': 'Tools, Design & More',
    'Redes y Conectividad': 'Networking and Connectivity',
    'Idiomas': 'Languages',
    'Español': 'Spanish',
    'Lengua materna': 'Native language',
    'Inglés': 'English',
    'Italiano': 'Italian',
    'Educacion': 'Education',
    'Universidad': 'University',
    '2023 - Actualidad': '2023 - Present',
    'Promedio Actual : 9.8': 'Current academic average: 9.8',
    'Experiencia Laboral': 'Work experience',
    'Agosto 2025 – Presente': 'August 2025 – Present',
    'Plataforma web y aplicación móvil empresarial para la gestión de colaboradores, procesos administrativos y control interno de empresas.': 'Business web platform and mobile application for employee management, administrative processes, and internal company controls.',
    'Responsabilidades': 'Responsibilities',
    'Desarrollo de plataforma web y aplicación móvil multiplataforma.': 'Development of a web platform and a cross-platform mobile application.',
    'Implementación de backend y diseño de APIs REST.': 'Backend implementation and REST API design.',
    'Gestión de autenticación, roles y permisos (Dueño, Admin, RH, Colaborador).': 'Authentication, role, and permission management (Owner, Admin, HR, Employee).',
    'Control de asistencia: entradas, descansos y salidas.': 'Attendance tracking: clock-ins, breaks, and clock-outs.',
    'Registro histórico de colaboradores y métricas empresariales.': 'Employee history records and business metrics.',
    'Asignación de documentos para firma y gestión de nómina.': 'Document assignment for signatures and payroll management.',
    'Inicio de sesión con biometría.': 'Biometric sign-in.',
    'Organización del proyecto con estructura clara (models, endpoints, schemas, hooks, assets).': 'Clear project organization (models, endpoints, schemas, hooks, assets).',
    'Stack Tecnológico': 'Technology stack',
    'Proyectos destacados de desarrollo de software': 'Featured software development projects',
    'Proyecto Django': 'Django project',
    'Web App desarrollada con Python y Django.': 'Web application built with Python and Django.',
    'Ver Código': 'View code',
    'Proyecto MAUI': 'MAUI project',
    'App multiplataforma construida con .NET MAUI.': 'Cross-platform application built with .NET MAUI.',
    'Proyecto Kotlin': 'Kotlin project',
    'App Android desarrollada nativamente con Kotlin.': 'Native Android application developed with Kotlin.',
    'Proyecto HTML/CSS': 'HTML/CSS project',
    'Página web responsiva desarrollada con HTML y CSS.': 'Responsive website built with HTML and CSS.',
    'IMÁGENES': 'IMAGES',
    'PROCESAMIENTO PYTHON': 'PYTHON PROCESSING',
    'Procesamiento de Imágenes': 'Image processing',
    'Técnicas automáticas para analizar imágenes digitales en Python.': 'Automated techniques for analyzing digital images in Python.',
    'PASTILLAS': 'PILLS',
    'DETECCIÓN DE BLISTERS': 'BLISTER PACK DETECTION',
    'Detección de Pastillas': 'Pill detection',
    'Detección de cavidades vacías mediante visión artificial en Streamlit.': 'Detection of empty blister cavities using computer vision in Streamlit.',
    'Probar App': 'Try app',
    'Galería / Demo': 'Gallery / Demo',
    'RECETARIO': 'RECIPE BOOK',
    'App Android con Jetpack Compose y Clean Architecture.': 'Android application with Jetpack Compose and Clean Architecture.',
    'Código': 'Code',
    'Galería': 'Gallery',
    'Sistema de Gestión de Tiendas': 'Store management system',
    'Sistema de gestión para tiendas utilizando Angular y .NET.': 'Store management system using Angular and .NET.',
    'Galería / Screenshots': 'Gallery / Screenshots',
    'Gestión de parques con IA, Docker y CI/CD en AWS.': 'Park management with AI, Docker, and CI/CD on AWS.',
    '🚀 Ver App': '🚀 View app',
    'Repo Front': 'Frontend repo',
    'Repo API': 'API repo',
    'Galería / Capturas': 'Gallery / Screenshots',
    'REALIDAD VR': 'VIRTUAL REALITY',
    'MODELADO 3D & VR': '3D MODELING & VR',
    'Diseño en Realidad Virtual & 3D': 'Virtual reality & 3D design',
    'Modelado tridimensional y experiencias inmersivas interactuando con Autodesk Maya, Blender y entornos VR.': '3D modeling and immersive experiences using Autodesk Maya, Blender, and VR environments.',
    'Galería & Videos': 'Gallery & Videos',
    'URBANOS': 'URBAN',
    'REPORTES CIUDADANOS': 'CITIZEN REPORTS',
    'Reportes Urbanos': 'Urban reports',
    'Plataforma para la gestión y reporte ciudadano de incidencias en infraestructura urbana.': 'Platform for managing citizen reports of urban infrastructure issues.',
    'Repositorio': 'Repository',
    'GESTIÓN VETERINARIA': 'VETERINARY MANAGEMENT',
    'Sistema de gestión para clínicas veterinarias, historial clínico de mascotas y agendamiento de citas.': 'Veterinary clinic management system with pet medical records and appointment scheduling.',
    'Certificaciones y Logros': 'Certifications and achievements',
    'Cursos, especializaciones y reconocimientos que avalan mis competencias técnicas.': 'Courses, specializations, and awards that demonstrate my technical skills.',
    'Oficial AWS Certified': 'Official AWS Certified',
    'Demuestra mi dominio en los conceptos fundamentales de la nube de AWS, arquitectura de infraestructura global, gestión de seguridad y cumplimiento normativo, servicios centrales (EC2, S3, IAM, VPC) y optimización de costos en la nube.': 'Demonstrates my knowledge of AWS cloud fundamentals, global infrastructure architecture, security and compliance management, core services (EC2, S3, IAM, VPC), and cloud cost optimization.',
    'Fecha de Emisión': 'Issue date',
    'Fecha de Caducidad': 'Expiration date',
    'ID de Credencial': 'Credential ID',
    'Ver Página de Datos en Credly ↗': 'View credential on Credly ↗',
    'Acredita mi capacidad práctica para diseñar, construir y desplegar aplicaciones en la nube dentro de entornos de laboratorios virtuales utilizando los servicios principales de arquitectura e infraestructura de AWS.': 'Certifies my practical ability to design, build, and deploy cloud applications in virtual lab environments using core AWS architecture and infrastructure services.',
    'Sin caducidad': 'No expiration',
    'Responsable': 'Responsible',
    'Dedicada': 'Dedicated',
    'Resolución de problemas': 'Problem solving',
    'Creatividad': 'Creativity',
    'Organización': 'Organization',
    'Toma de desiciones': 'Decision making',
    'Mi contacto': 'Contact me',
    'Estoy a su servicio. Muchas gracias por tomarse el tiempo de consultar mi portafolio.': 'I would be happy to hear from you. Thank you for taking the time to explore my portfolio.',
    'Galería de Multimedia': 'Multimedia gallery',
    'Demostración en Video': 'Video demonstration',
    'Contenido Multimedia en Proceso': 'Multimedia content in progress',
    'Las capturas y demostraciones en video de este proyecto se están actualizando continuamente.': 'Screenshots and video demonstrations of this project are continually being updated.',
    'Cerrar': 'Close'
  };

  const normalize = text => text.replace(/\s+/g, ' ').trim();
  function toEnglish(text) {
    if (Object.hasOwn(english, text)) return english[text];
    if (/^\d+ (años?|meses?)( \d+ meses?)?$/.test(text)) {
      return text.replace(/años/g, 'years').replace(/año/g, 'year').replace(/meses/g, 'months').replace(/mes/g, 'month');
    }
    if (text.startsWith('Galería — ')) return 'Gallery — ' + toEnglish(text.slice(10));
    if (text.startsWith('Galería ')) return 'Gallery ' + toEnglish(text.slice(8));
    return text
      .replace(/^Video (\d+) de (\d+)$/, 'Video $1 of $2')
      .replace(/^Escena (\d+)$/, 'Scene $1')
      .replace(/^Demostraciones en Video \((\d+) escenas\)$/, 'Video demonstrations ($1 scenes)')
      .replace(/^Capturas e Imágenes \((\d+)\)$/, 'Screenshots and images ($1)');
  }

  // Remember original nodes rather than replacing HTML, preserving icons and listeners.
  const originals = new WeakMap();
  const attributes = new WeakMap();
  let language = 'es';
  function translated(source) {
    return language === 'en' ? source.replace(/\S[\s\S]*\S|\S/, text => toEnglish(normalize(text))) : source;
  }
  function translate(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest('script, style, option, .typed, .typed-cursor')) continue;
      const previous = originals.get(node);
      const source = previous && node.nodeValue === previous.last ? previous.source : node.nodeValue;
      const last = translated(source);
      if (node.nodeValue !== last) node.nodeValue = last;
      originals.set(node, { source, last });
    }
    [root, ...root.querySelectorAll('[title], [alt], [aria-label]')].forEach(element => {
      const saved = attributes.get(element) || {};
      ['title', 'alt', 'aria-label'].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        const value = element.getAttribute(attribute);
        const previous = saved[attribute];
        const source = previous && value === previous.last ? previous.source : value;
        const last = translated(source);
        element.setAttribute(attribute, last);
        saved[attribute] = { source, last };
      });
      attributes.set(element, saved);
    });
  }

  const languageToggle = document.getElementById('language-toggle');
  const typed = document.querySelector('.typed');
  const spanishRoles = typed.getAttribute('data-typed-items');
  function setLanguage(value) {
    language = value === 'en' ? 'en' : 'es';
    document.documentElement.lang = language;
    document.title = language === 'en' ? 'Greys Almanza Portfolio' : 'Portafolio Greys Almanza';
    translate(document.body);
    languageToggle.textContent = language.toUpperCase();
    const toggleLabel = language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés';
    languageToggle.setAttribute('aria-label', toggleLabel);
    languageToggle.title = toggleLabel;
    typed.setAttribute('data-typed-items', language === 'en'
      ? 'Junior Full Stack Developer,Software Engineering Student,Web and Mobile App Creator'
      : spanishRoles);
    document.dispatchEvent(new Event('languagechange'));
    try { localStorage.setItem('portfolio-language', language); } catch (_) { /* Storage may be disabled. */ }
    if (window.AOS) window.AOS.refresh();
  }

  window.portfolioLanguage = { translate };
  languageToggle.addEventListener('click', () => setLanguage(language === 'es' ? 'en' : 'es'));
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('portfolio-language'); } catch (_) { /* Default to Spanish. */ }
  setLanguage(savedLanguage);
})();
