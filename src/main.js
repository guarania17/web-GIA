import './style.css'

const services = [
  {
    title: 'IA y Machine Learning',
    description: 'Modelos a medida para optimizar procesos y automatizar decisiones.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7l-1.35 1.1a2 2 0 0 1-2.65 0L3.65 12a2 2 0 0 0-2.65 0L1 12"/><path d="M12 22a3 3 0 0 0 3-3v-7l1.35-1.1a2 2 0 0 1 2.65 0L20.35 12a2 2 0 0 0 2.65 0L23 12"/><path d="M12 2a3 3 0 0 1 3 3v7l-1.35 1.1a2 2 0 0 0-2.65 0L9.65 12a2 2 0 0 1-2.65 0L7 12"/><path d="M12 22a3 3 0 0 1-3-3v-7l1.35-1.1a2 2 0 0 0 2.65 0L14.35 12a2 2 0 0 1 2.65 0L17 12"/><circle cx="12" cy="12" r="2"/></svg>`
  },
  {
    title: 'BI y Data Analytics',
    description: 'Dashboards dinámicos y análisis predictivo para liderar tu mercado.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  },
  {
    title: 'Datawarehousing',
    description: 'Cimientos de datos sólidos, escalables y seguros para tu empresa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
  },
  {
    title: 'Datacenters y Servidores',
    description: 'Montaje especializado y administración de infraestructura de alto rendimiento.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`
  },
  {
    title: 'Arquitectura de Redes',
    description: 'Diseño de redes robustas, garantizando velocidad y estabilidad.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v8"/><path d="M12 11H5v5"/><path d="M12 11h7v5"/></svg>`
  },
  {
    title: 'Seguridad Informática',
    description: 'Blindaje de activos digitales y auditorías de protección total.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'Seguridad Electrónica',
    description: 'Monitoreo inteligente e integración de sistemas de vigilancia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    title: 'Software Development',
    description: 'Aplicaciones escalables enfocadas en UX y rendimiento técnico.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
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

document.addEventListener('DOMContentLoaded', () => {
  initGrid();
  initScrollReveal();
});
