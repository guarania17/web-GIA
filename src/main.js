import './style.css'

const services = [
  {
    title: 'IA y Machine Learning',
    description: 'Modelos a medida para optimizar procesos y automatizar decisiones.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7l-1.35 1.1a2 2 0 0 1-2.65 0L3.65 12a2 2 0 0 0-2.65 0L1 12"/><path d="M12 22a3 3 0 0 0 3-3v-7l1.35-1.1a2 2 0 0 1 2.65 0L20.35 12a2 2 0 0 0 2.65 0L23 12"/><path d="M12 2a3 3 0 0 1 3 3v7l-1.35 1.1a2 2 0 0 0-2.65 0L9.65 12a2 2 0 0 1-2.65 0L7 12"/><path d="M12 22a3 3 0 0 1-3-3v-7l1.35-1.1a2 2 0 0 0 2.65 0L14.35 12a2 2 0 0 1 2.65 0L17 12"/><circle cx="12" cy="12" r="2"/></svg>`,
    details: [
      'Procesamiento de Lenguaje Natural (NLP): Creación de chatbots inteligentes, análisis de sentimiento en redes sociales o automatización de lectura de documentos.',
      'Visión Artificial: Reconocimiento facial, detección de objetos en líneas de producción o análisis de imágenes médicas.',
      'Modelos Predictivos: Algoritmos para predecir ventas, fuga de clientes (churn) o mantenimiento preventivo de maquinaria.',
      'Automatización Inteligente (RPA + IA): Robots de software que aprenden a tomar decisiones complejas en procesos administrativos.'
    ]
  },
  {
    title: 'BI y Data Analytics',
    description: 'Dashboards dinámicos y análisis predictivo para liderar tu mercado.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    details: [
      'Dashboards Interactivos: Creación de tableros en herramientas como Power BI, Tableau o Looker para visualizar KPIs en tiempo real.',
      'Minería de Datos: Descubrimiento de patrones ocultos en grandes volúmenes de datos históricos.',
      'Analítica Descriptiva y Diagnóstica: Informes para entender qué pasó en el negocio y por qué sucedió.',
      'Consultoría de Estrategia de Datos: Definir qué datos recolectar y cómo usarlos para ganar competitividad.'
    ]
  },
  {
    title: 'Datawarehousing',
    description: 'Cimientos de datos sólidos, escalables y seguros para tu empresa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    details: [
      'ETL (Extract, Transform, Load): Procesos para mover datos de distintas fuentes (CRMs, Excel, Web) hacia un solo lugar centralizado.',
      'Arquitectura de Nube: Implementación de bodegas de datos en AWS (Redshift), Azure (Synapse) o Google Cloud (BigQuery).',
      'Optimización de Consultas: Estructurar los datos para que las búsquedas sean rápidas y eficientes.',
      'Gobierno de Datos: Establecer políticas de limpieza, calidad y acceso a la información.'
    ]
  },
  {
    title: 'Datacenters y Servidores',
    description: 'Montaje especializado y administración de infraestructura de alto rendimiento.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    details: [
      'Migración a la Nube: Traslado de servidores físicos a entornos híbridos o 100% cloud.',
      'Virtualización: Configuración de máquinas virtuales para aprovechar al máximo el hardware.',
      'Housing y Colocation: Alquiler de espacio físico, energía y conectividad para equipos del cliente.',
      'Mantenimiento Preventivo: Monitoreo de hardware, gestión de temperatura y redundancia energética.'
    ]
  },
  {
    title: 'Arquitectura de Redes',
    description: 'Diseño de redes robustas, garantizando velocidad y estabilidad.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v8"/><path d="M12 11H5v5"/><path d="M12 11h7v5"/></svg>`,
    details: [
      'Diseño de Redes LAN/WAN: Planificación de la conectividad interna y externa de una empresa.',
      'Optimización de SD-WAN: Gestión de redes de área amplia definidas por software para mejorar la velocidad.',
      'Conectividad Inalámbrica: Despliegue de redes Wi-Fi empresariales de alta densidad y largo alcance.',
      'Soluciones de Fibra Óptica: Instalación y configuración de infraestructura de alta velocidad.'
    ]
  },
  {
    title: 'Seguridad Informática',
    description: 'Blindaje de activos digitales y auditorías de protección total.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    details: [
      'Pentesting: Pruebas de penetración para encontrar vulnerabilidades antes que los hackers.',
      'SOC (Centro de Operaciones de Seguridad): Monitoreo 24/7 para detectar y responder a amenazas.',
      'Cifrado de Datos: Protección de información sensible tanto en reposo como en tránsito.',
      'Capacitación en Phishing: Entrenar al personal para no caer en estafas digitales.'
    ]
  },
  {
    title: 'Software Development',
    description: 'Aplicaciones escalables enfocadas en UX y rendimiento técnico.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    details: [
      'Desarrollo Web y Mobile: Aplicaciones a medida (iOS/Android) y plataformas web escalables.',
      'SaaS (Software as a Service): Creación de productos de software que funcionan por suscripción.',
      'Integración de APIs: Conectar diferentes sistemas (ej. que tu ecommerce hable con tu sistema de logística).',
      'Modernización de Aplicaciones: Actualizar sistemas antiguos ("legacy") a tecnologías modernas y rápidas.'
    ]
  }
];

const grid = document.getElementById('solutions-grid');

// Function to create service cards
function createServiceCard(service, index) {
  const card = document.createElement('div');
  card.className = 'service-card animate-in';
  card.style.transitionDelay = `${index * 0.1}s`;
  card.innerHTML = `
    <div class="service-icon">${service.icon}</div>
    <h3 class="service-title">${service.title}</h3>
    <p class="service-desc">${service.description}</p>
  `;
  return card;
}

// Initialize grid
function initGrid() {
  if (!grid) return;
  services.forEach((service, index) => {
    grid.appendChild(createServiceCard(service, index));
  });
}

// Simple reveal animation on scroll using Intersection Observer
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  const targets = document.querySelectorAll('.animate-in, .animate-in-delay');
  targets.forEach(el => observer.observe(el));
}

// Initialize Service Details
function initServiceDetails() {
  const detailsGrid = document.getElementById('detailsGrid');
  if (!detailsGrid) return;

  services.forEach(service => {
    const detailItem = document.createElement('div');
    detailItem.className = 'detail-item';

    const detailsList = service.details.map(detail => `<li>${detail}</li>`).join('');

    detailItem.innerHTML = `
      <h4>${service.title}</h4>
      <ul>
        ${detailsList}
      </ul>
    `;

    detailsGrid.appendChild(detailItem);
  });
}

// Handle View More Button
function initViewMoreButton() {
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const serviceDetails = document.getElementById('serviceDetails');

  if (!viewMoreBtn || !serviceDetails) return;

  let isExpanded = false;

  viewMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      serviceDetails.classList.add('expanded');
      viewMoreBtn.textContent = 'Ver Menos';

      // Smooth scroll to details
      setTimeout(() => {
        serviceDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);
    } else {
      serviceDetails.classList.remove('expanded');
      viewMoreBtn.textContent = 'Ver Más';

      // Scroll back to button
      setTimeout(() => {
        viewMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGrid();
  initScrollReveal();
  initServiceDetails();
  initViewMoreButton();
});
