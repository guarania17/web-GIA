import './style.css'

const services = [
  {
    title: 'IA y Machine Learning',
    description: 'Modelos a medida para optimizar procesos y automatizar decisiones.',
    icon: '🧠'
  },
  {
    title: 'BI y Data Analytics',
    description: 'Dashboards dinámicos y análisis predictivo para liderar tu mercado.',
    icon: '📊'
  },
  {
    title: 'Datawarehousing',
    description: 'Cimientos de datos sólidos, escalables y seguros para tu empresa.',
    icon: '🗄️'
  },
  {
    title: 'Datacenters y Servidores',
    description: 'Montaje especializado y administración de infraestructura de alto rendimiento.',
    icon: '🖥️'
  },
  {
    title: 'Arquitectura de Redes',
    description: 'Diseño de redes robustas, garantizando velocidad y estabilidad.',
    icon: '🌐'
  },
  {
    title: 'Seguridad Informática',
    description: 'Blindaje de activos digitales y auditorías de protección total.',
    icon: '🛡️'
  },
  {
    title: 'Seguridad Electrónica',
    description: 'Monitoreo inteligente e integración de sistemas de vigilancia.',
    icon: '👁️'
  },
  {
    title: 'Software Development',
    description: 'Aplicaciones escalables enfocadas en UX y rendimiento técnico.',
    icon: '💻'
  }
];

const track = document.getElementById('service-track');

// Function to create service cards
function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card glass';
  card.innerHTML = `
    <div class="service-icon">${service.icon}</div>
    <h3 class="service-title">${service.title}</h3>
    <p class="service-desc">${service.description}</p>
    <div class="service-glow"></div>
  `;
  return card;
}

// Initialize carousel with double items for infinite loop
function initCarousel() {
  const allServices = [...services, ...services]; // Duplicate for smooth loop
  allServices.forEach(service => {
    track.appendChild(createServiceCard(service));
  });
}

// Simple reveal animation on scroll
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in, .animate-in-delay').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initScrollReveal();
});
