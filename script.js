// ========================================================
// DIGITAL CRAFT — PORTFOLIO DATA & CORE LOGIC
// ========================================================

// 1. Structured Projects Data
const projects = [
  {
    id: 'pixel-tech',
    title: 'PIXEL TECH — PC Accessories & Laptops Store',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    year: '2026',
    shortDesc: 'A high-performance e-commerce website for computer hardware, gaming peripherals, and laptops.',
    colorGradient: 'linear-gradient(135deg, #09131d, #142738)',
    accentColor: '#3882F6',
    tags: ['E-Commerce', 'Web Development', 'Hardware Store', 'Responsive'],
    client: 'Pixel Tech',
    timeline: 'Featured Project',
    services: 'UI/UX Design, Web Development, E-Commerce Integration',
    overview: 'Pixel Tech is a modern, responsive digital storefront specializing in high-performance gaming laptops, desktop PCs, and tech accessories.',
    challenge: 'Presenting a rich hardware catalog with clear specifications, intuitive category navigation, and responsive shopping features.',
    approach: 'We built a sleek, dark-themed technology store with sharp typography, responsive product grids, and smooth interactive elements.',
    result: 'A production-ready e-commerce platform delivering high performance and an engaging shopping experience.',
    liveUrl: 'https://mohamedramdani2.github.io/Pixel-tech/'
  },
  {
    id: 'spade-gym',
    title: 'SPADE GYM — Fitness Club Website',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    year: '2026',
    shortDesc: 'A bold, high-energy gym website with membership sections, class schedules, and a powerful dark visual identity.',
    colorGradient: 'linear-gradient(135deg, #0d1117, #1a1f2e)',
    accentColor: '#F59E0B',
    tags: ['Web Development', 'UI/UX Design', 'Fitness', 'Responsive'],
    client: 'Spade Gym',
    timeline: 'Featured Project',
    services: 'Web Design, Frontend Development, Responsive Layout',
    overview: 'Spade Gym is a fitness club website built to showcase a powerful gym brand with a dark, high-energy aesthetic. The site features membership sections, class offerings, and a compelling hero experience to drive client acquisition.',
    challenge: 'Creating an impactful gym website that communicates strength, energy, and professionalism while being fully responsive across all devices.',
    approach: 'We built a dark-themed, mobile-first site with bold typography, energetic visuals, and a clean information architecture that guides visitors from interest to membership enquiry.',
    result: 'A fully functional, production-ready fitness website demonstrating high-quality web craftsmanship with a strong brand presence.',
    liveUrl: 'https://islem-adis.github.io/Spade-Gym-Project/'
  },
  {
    id: 'nova-fashion',
    title: 'NOVA FASHION — E-Commerce Platform',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    year: '2026',
    shortDesc: 'A sleek, full-featured fashion e-commerce store with product listings, cart, and a modern editorial aesthetic.',
    colorGradient: 'linear-gradient(135deg, #1a0a2e, #2d1b4e)',
    accentColor: '#EC4899',
    tags: ['E-Commerce', 'Web Development', 'Fashion', 'Full-Stack'],
    client: 'Nova Fashion',
    timeline: 'Featured Project',
    services: 'UI/UX Design, Full-Stack Development, E-Commerce Integration',
    overview: 'Nova Fashion is a fully deployed fashion e-commerce platform featuring product browsing, shopping cart, and a refined editorial design language aimed at modern fashion consumers.',
    challenge: 'Building a performant, visually compelling e-commerce experience that feels editorial and luxurious while maintaining fast load times and clean UX flows.',
    approach: 'We designed a minimal yet expressive product-first layout, with smooth filtering, an intuitive cart system, and a dark-to-light colour palette that feels couture.',
    result: 'A live, production-deployed fashion store showcasing end-to-end e-commerce development capability from UI to backend.',
    liveUrl: 'https://nova-fashion-ecommerce-production.up.railway.app/'
  },
  {
    id: 'medical-learning',
    title: 'MEDLEARN — Medical Learning Platform',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    year: '2026',
    shortDesc: 'A professional medical education platform with structured course content, quizzes, and a clean clinical interface.',
    colorGradient: 'linear-gradient(135deg, #062040, #0a3260)',
    accentColor: '#22D3EE',
    tags: ['EdTech', 'Web Development', 'Medical', 'Full-Stack'],
    client: 'MedLearn Platform',
    timeline: 'Featured Project',
    services: 'UI/UX Design, Full-Stack Development, Learning Management',
    overview: 'A dedicated medical learning platform built to deliver structured educational content for healthcare students and professionals. Features include courses, quizzes, and a clean, trust-inspiring interface.',
    challenge: 'Designing an educational interface that feels authoritative and clinical while remaining approachable and easy to navigate for students of varying technical literacy.',
    approach: 'We developed a clean, high-contrast UI with a clinical blue palette, clear typographic hierarchy, structured course modules, and interactive assessment components.',
    result: 'A fully deployed edtech platform demonstrating our ability to build complex, content-rich web applications for specialised professional audiences.',
    liveUrl: 'https://medical-learning-platform.onrender.com/'
  }
];

// 2. Render Portfolio Items
function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <article class="work-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View case study for ${p.title}">
      <div class="work-image-wrap">
        <div class="work-image-visual" style="background: ${p.colorGradient};">
          <div class="project-art">
            <div class="project-art-canvas">
              <div class="art-badge" style="color: ${p.accentColor};">${p.categoryLabel}</div>
              <div class="art-title">${p.title.split('—')[0].trim()}</div>
              <div class="art-tags-row">
                ${p.tags.slice(0, 2).map(t => `<span>${t}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="work-body">
        <div>
          <div class="work-meta">
            <span class="work-cat">${p.categoryLabel}</span>
            <div class="work-arrow">
              <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 11L11 2M11 2H4M11 2V9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <h3 class="work-title">${p.title}</h3>
          <p class="work-short-desc">${p.shortDesc}</p>
        </div>
        <div class="work-foot">
          <div class="work-tags">
            ${p.tags.slice(0, 3).map(t => `<span>#${t}</span>`).join('')}
          </div>
          <span class="work-year">${p.year}</span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click listeners to cards
  grid.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openCaseStudy(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.getAttribute('data-id');
        openCaseStudy(id);
      }
    });
  });
}

// 3. Filter Buttons Logic
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.getAttribute('data-filter');
      renderPortfolio(filter);
    });
  });
}

// 4. Case Study Modal Logic
const modal = document.getElementById('caseStudyModal');
const modalContent = document.getElementById('modalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openCaseStudy(id) {
  const project = projects.find(p => p.id === id);
  if (!project || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <span class="modal-header-badge">${project.categoryLabel}</span>
    <h2 class="modal-title">${project.title}</h2>
    
    <div class="modal-meta-bar">
      <div class="modal-meta-item">
        <span>Client</span>
        <strong>${project.client}</strong>
      </div>
      <div class="modal-meta-item">
        <span>Year</span>
        <strong>${project.year}</strong>
      </div>
      <div class="modal-meta-item">
        <span>Timeline</span>
        <strong>${project.timeline}</strong>
      </div>
      <div class="modal-meta-item">
        <span>Services</span>
        <strong>${project.services}</strong>
      </div>
    </div>

    <div class="modal-hero-box" style="background: ${project.colorGradient};">
      <div class="project-art">
        <div class="project-art-canvas" style="max-width: 500px; width: 90%;">
          <div class="art-badge" style="color:${project.accentColor};">${project.categoryLabel}</div>
          <div class="art-title" style="font-size: 28px;">${project.title}</div>
          <div class="art-tags-row">
            ${project.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="modal-section-block">
      <h4>Project Overview</h4>
      <p>${project.overview}</p>
    </div>

    <div class="modal-section-block">
      <h4>The Challenge</h4>
      <p>${project.challenge}</p>
    </div>

    <div class="modal-section-block">
      <h4>Our Strategic Approach</h4>
      <p>${project.approach}</p>
    </div>

    <div class="modal-section-block">
      <h4>Measurable Impact & Results</h4>
      <p>${project.result}</p>
    </div>

    <div class="modal-section-block">
      <h4>Key Deliverables</h4>
      <div class="modal-deliverables-list">
        ${project.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-cta-box">
      <div>
        <strong style="color:#fff; font-size:16px;">Inspired by this project?</strong>
        <p style="color:var(--muted); font-size:13.5px; margin-top:2px;">Let's craft something exceptional for your brand.</p>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <span>View Live Project</span>
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>` : ''}
        <a href="#contact" class="btn btn-primary" onclick="closeCaseStudy()">
          <span>Start Your Project</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6"/></svg>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeCaseStudy);
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCaseStudy();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    closeCaseStudy();
  }
});

// 5. Header Scroll State & Active Nav Indicator
const header = document.getElementById('site-header');
const navItems = document.querySelectorAll('.nav-links .nav-item');

function updateActiveNav() {
  const scrollPosition = window.scrollY + 160;
  const sectionIds = ['contact', 'about', 'services', 'work', 'hero'];
  let current = 'hero';

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPosition) {
      current = id;
      break;
    }
  }

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === `#${current}`) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 25);
  }
  updateActiveNav();
}, { passive: true });

// 6. Mobile Menu Logic
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function toggleMobileMenu(show) {
  if (!mobileMenu) return;
  const isOpen = show !== undefined ? show : !mobileMenu.classList.contains('open');
  mobileMenu.classList.toggle('open', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  if (burger) {
    burger.setAttribute('aria-expanded', isOpen);
  }
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

if (burger) {
  burger.addEventListener('click', () => toggleMobileMenu());
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
}

if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMobileMenu(false));
  });
}

// 7. Hero Headline Reveal
requestAnimationFrame(() => {
  const heroHeadline = document.getElementById('heroHeadline');
  if (heroHeadline) {
    heroHeadline.classList.add('revealed');
  }
});

// 8. Scroll Reveal Observer
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// 9. Contact Form Validation & Submission
const projectForm = document.getElementById('project-form');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

if (projectForm) {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('f-name');
    const email = document.getElementById('f-email');
    const desc = document.getElementById('f-desc');

    if (!name.value.trim() || !email.value.trim() || !desc.value.trim()) {
      alert('Please complete all required fields.');
      return;
    }

    // Submit state simulation
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Request...</span>';
    }

    setTimeout(() => {
      if (formSuccess) {
        formSuccess.classList.add('show');
      }
      projectForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Project Request</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      }
      // Scroll smoothly to notification
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  });
}

// 10. Ambient Particle Canvas
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resizeCanvas() {
    if (!canvas) return;
    w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
    h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
  }

  function initParticles() {
    const count = Math.min(60, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2 * (window.devicePixelRatio || 1),
      vy: (Math.random() - 0.5) * 0.2 * (window.devicePixelRatio || 1),
      r: (Math.random() * 1.5 + 0.5) * (window.devicePixelRatio || 1),
      c: Math.random() > 0.5 ? '124, 58, 237' : '56, 130, 246'
    }));
  }

  function renderParticles() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c}, 0.55)`;
      ctx.fill();
    });

    if (!reduceMotion) {
      requestAnimationFrame(renderParticles);
    }
  }

  function setupCanvas() {
    resizeCanvas();
    initParticles();
    renderParticles();
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  setupCanvas();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio('all');
  initPortfolioFilters();
});
// Execute immediate render in case DOM is already ready
renderPortfolio('all');
initPortfolioFilters();
