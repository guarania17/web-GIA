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

// Handle Form Submission (Placeholder)
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '¡Mensaje Enviado!';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGrid();
  initScrollReveal();
  initContactForm();
});
