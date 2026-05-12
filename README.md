# CineVault - Galería de Películas y Series 🎬

Este proyecto es una aplicación web de alto rendimiento desarrollada para el **Laboratorio 09 de Desarrollo de Aplicaciones Web**. La aplicación combina estrategias de renderizado híbrido (**SSR y CSR**) para ofrecer una experiencia de usuario rápida, interactiva y visualmente impactante, utilizando la **OMDb API**.

## 🚀 Características Principales

### 1. Renderizado Híbrido (Arquitectura Next.js)
- **SSR (Server-Side Rendering):** Implementado en la sección de "Destacados". Los datos se obtienen en el servidor antes de enviar la página al navegador, optimizando el SEO y reduciendo el tiempo de carga inicial (LCP).
- **CSR (Client-Side Rendering):** Utilizado en el buscador interactivo. Permite realizar búsquedas en tiempo real y manejar estados complejos (como el modal de detalles) sin necesidad de recargar la página completa.

### 2. Interfaz Premium y Animaciones
- **GlowCard System:** Tarjetas interactivas con efectos de iluminación tridimensional que reaccionan al movimiento del cursor (Houdini CSS).
- **Cinematic Detail Modal:** Un panel de detalles ultra-premium que utiliza `framer-motion` para transiciones suaves, fondos cinemáticos desenfocados y un borde animado infinito mediante `GlowingShadow`.
- **Buscador Inteligente:** Barra de búsqueda animada con gradientes dinámicos y micro-interacciones.

### 3. Robustez de Datos
- **SafeImage Component:** Sistema de seguridad que detecta imágenes rotas de la API y las reemplaza automáticamente con placeholders elegantes, garantizando que la galería siempre se vea profesional.

## 🛠️ Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **API de Datos:** [OMDb API](https://www.omdbapi.com/)
- **Librería de Peticiones:** Axios

## 📦 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tecsup-labs/lab-nextjs-hybrid-rendering-dashboard.git
   cd lab-nextjs-hybrid-rendering-dashboard
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar la API Key:**
   El proyecto utiliza la API Key de OMDb. Asegúrate de tener conexión a internet para que las peticiones se realicen correctamente.

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000/movies](http://localhost:3000/movies).

## 🎓 Conclusiones del Laboratorio

El desarrollo de **CineVault** permitió profundizar en la importancia de elegir la estrategia de renderizado adecuada para cada tipo de contenido. Mientras que el SSR garantiza que el contenido principal esté disponible de inmediato, el CSR dota a la aplicación de una interactividad fluida típica de una aplicación moderna. La optimización de eventos y el manejo de errores de APIs externas fueron fundamentales para lograr un producto final estable y de alta calidad visual.

---
**Desarrollo de Aplicaciones Web - 2026**
