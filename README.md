# 🚀 Portfolio Personal - Lucía Tejedor de la Cruz

Bienvenido/a al repositorio de mi portfolio personal. Soy estudiante de 4º curso en el Grado en Ingeniería en Tecnologías de la Telecomunicación, apasionada por las redes, el IoT, la Inteligencia Artificial y el desarrollo de software.

🌍 **Visita la web en producción:** [LucíaTejedor-Portfolio](https://portfoliolucia2026.netlify.app/landing.html)

## 🛠️ Arquitectura y Tecnologías

Este proyecto está construido con un enfoque en la seguridad, el rendimiento y la experiencia de usuario (UX), demostrando conocimientos tanto de desarrollo Frontend como de integración Backend.

### Frontend (Interfaz de Usuario)
* **HTML5 & CSS3:** Diseño a medida con variables nativas, animaciones CSS avanzadas (efectos *Glassmorphism*, resplandor dinámico del ratón, barras de desplazamiento personalizadas) y diseño 100% responsivo.
* **Bootstrap 5.3:** Utilizado para el sistema de rejilla y la estructura base de componentes.
* **JavaScript Vanilla:** Lógica de interacción limpia sin frameworks pesados (efecto de máquina de escribir, notificaciones flotantes interactivas, peticiones asíncronas).
* **Librerías visuales:** Integración de `particles.js` para fondos dinámicos y `ScrollReveal` para animaciones fluidas al hacer scroll.

### Backend & Seguridad (Arquitectura Serverless)
Para el sistema de contacto, he implementado una arquitectura segura que evita la exposición de credenciales:
* **Netlify Functions (Node.js):** Actúa como un proxy seguro (*Serverless backend*) que procesa las peticiones del formulario.
* **Telegram Bot API:** El backend se comunica de forma asíncrona con un bot de Telegram diseñado por mí para enviarme notificaciones push en tiempo real al móvil.
* **Gestión de Secretos:** El *Token* de la API y el *Chat ID* están estrictamente protegidos mediante **Variables de Entorno** en el servidor de Netlify, garantizando que el código del cliente (*frontend*) sea completamente seguro y libre de vulnerabilidades.

## 📂 Estructura del Proyecto

* `landing.html` - Landing page principal (Hero, Sobre mí, Contacto).
* `cv_landing.html` - Currículum detallado con formación y experiencia.
* `habilidades.html` - Resumen de tecnologías (Data, ML, IoT, Redes, etc.).
* `proyectos.html` - Catálogo de proyectos destacados académicos y personales.
* `gracias.html` - Página de redirección tras el envío exitoso del formulario.
* `/css/landing.css` - Hoja de estilos principal con toda la personalización de la interfaz.
* `/netlify/functions/` - Directorio que contiene el código backend para el envío seguro de correos/mensajes.

## 🎓 Proyectos Destacados Incluidos

En este portfolio presento algunos de mis trabajos más representativos:
* Detección de fases del sueño mediante análisis de señales EEG y clasificación con SVM.
* Simulación y diseño de comunicaciones satelitales (LEO/GEO) seguras con MATLAB.
* Diseño de redes inalámbricas (5G NR y WiFi 6) y planificación de radioenlaces con Radio Mobile.
* Desarrollo de aplicaciones web (Django) y juegos multihilo cliente-servidor en Python.

## 📬 Contacto

Si tienes alguna propuesta, duda o simplemente quieres conectar, tienes mis buzones abiertos:
* **LinkedIn:** [Lucía Tejedor de la Cruz](https://www.linkedin.com/in/luc%C3%ADa-tejedor-de-la-cruz-9b837437a/)
* **Email:** lucia.tejedor.cruz@gmail.com
