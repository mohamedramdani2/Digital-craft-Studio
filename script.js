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
  },
  {
    id: 'nexashop',
    title: 'NEXASHOP — Modern E-Commerce Platform',
    category: 'web',
    categoryLabel: 'Web & E-Commerce Development',
    year: '2026',
    shortDesc: 'A full-stack, responsive e-commerce platform built with modern architecture, catalog navigation, and intuitive checkout workflows.',
    colorGradient: 'linear-gradient(135deg, #091a2f, #1b3a5b)',
    accentColor: '#3882F6',
    tags: ['E-Commerce', 'Full-Stack', 'Web Development', 'GitHub Repo'],
    client: 'NexaShop Store',
    timeline: 'Featured Project',
    services: 'UI/UX Design, Frontend & Backend Development, E-Commerce Integration',
    overview: 'NexaShop is a modern, high-performance e-commerce solution designed for seamless online shopping. It features dynamic product listings, category filters, robust cart management, and a clean user-centric interface.',
    challenge: 'Developing a performant, modular e-commerce application with clean code practices, responsive layouts across devices, and structured product data handling.',
    approach: 'We architected a clean frontend with responsive grid layouts, modular component design, smooth interactive UI states, and robust codebase organization.',
    result: 'A production-ready open-source e-commerce project showcasing end-to-end full-stack development expertise and aesthetic excellence.',
    githubUrl: 'https://github.com/mohamedramdani2/NexaShop.git',
    liveUrl: 'https://github.com/mohamedramdani2/NexaShop'
  },
  {
    id: 'digital-craft-decks',
    title: 'DIGITAL CRAFT — Pitch Decks & Presentations',
    category: 'presentation',
    categoryLabel: 'Presentation & Deck Design',
    year: '2026',
    shortDesc: 'Curated collection of high-impact investor pitch decks, brand presentations, and corporate keynotes engineered for persuasive storytelling.',
    colorGradient: 'linear-gradient(135deg, #18092e, #36155e)',
    accentColor: '#A855F7',
    tags: ['Pitch Decks', 'Google Drive', 'Keynote', 'Visual Storytelling'],
    client: 'Digital Craft & Clients',
    timeline: 'Featured Collection',
    services: 'Pitch Deck Design, Visual Storytelling, Corporate Keynotes, Slide Systems',
    overview: 'A premier collection of professional presentation decks, pitch frameworks, and visual storytelling slides crafted to articulate complex business concepts and elevate brand credibility.',
    challenge: 'Structuring dense information and key business value propositions into visually captivating slides with clear typographic hierarchy and refined aesthetics.',
    approach: 'We developed consistent slide design systems utilizing dark luxury studio aesthetics, custom charts, clear data visualization, and compelling slide flow.',
    result: 'High-converting presentation assets accessible directly on Google Drive for client reviews, stakeholder meetings, and investment rounds.',
    presentationUrl: 'https://drive.google.com/drive/folders/1tYgVevU0zd8qaso7Xi8bUDyoh2Yeb0f4?usp=sharing',
    liveUrl: 'https://drive.google.com/drive/folders/1tYgVevU0zd8qaso7Xi8bUDyoh2Yeb0f4?usp=sharing'
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
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="display:inline-flex;align-items:center;gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>View GitHub Repo</span>
        </a>` : ''}
        ${project.presentationUrl ? `<a href="${project.presentationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="display:inline-flex;align-items:center;gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>View on Google Drive</span>
        </a>` : ''}
        ${project.liveUrl && !project.githubUrl && !project.presentationUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
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

// ========================================================
// 9. PROJECT INQUIRY FORM — DUAL SUBMISSION (WHATSAPP & EMAIL)
// ========================================================

/**
 * DIGITAL CRAFT CONTACT CONFIGURATION
 * IMPORTANT: Replace these placeholder values with the official Digital Craft credentials.
 * whatsapp: country code + number without '+' or spaces (e.g. "213556882629")
 * email: official receiving inquiry email (e.g. "hello@digitalcraft.dz")
 */
const CONTACT_CONFIG = {
  whatsapp: "+213556882629", // Replace with real Digital Craft WhatsApp number
  email: "digitalcraftstudio3@gmail.com", // Replace with real Digital Craft email
};

(function initInquiryForm() {
  const form = document.getElementById('project-form');
  if (!form) return;

  const nameInput = document.getElementById('f-name');
  const emailInput = document.getElementById('f-email');
  const phoneInput = document.getElementById('f-phone');
  const companyInput = document.getElementById('f-company');
  const descInput = document.getElementById('f-desc');
  const budgetSelect = document.getElementById('f-budget');
  const timelineSelect = document.getElementById('f-timeline');
  const sourceSelect = document.getElementById('f-source');
  const serviceChips = document.querySelectorAll('.service-chip');

  const btnWhatsapp = document.getElementById('btnSubmitWhatsapp');
  const btnEmail = document.getElementById('btnSubmitEmail');

  const feedbackBanner = document.getElementById('formFeedback');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackMsg = document.getElementById('feedbackMsg');
  const feedbackFallback = document.getElementById('feedbackFallback');
  const feedbackManualLink = document.getElementById('feedbackManualLink');

  // Track selected services in state
  const selectedServices = new Set();

  // Service chips toggle logic
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const service = chip.getAttribute('data-service');
      if (selectedServices.has(service)) {
        selectedServices.delete(service);
        chip.classList.remove('selected');
        chip.setAttribute('aria-pressed', 'false');
      } else {
        selectedServices.add(service);
        chip.classList.add('selected');
        chip.setAttribute('aria-pressed', 'true');
      }
      clearFieldError('services');
    });
  });

  // Clear errors when typing or changing fields
  if (nameInput) nameInput.addEventListener('input', () => clearFieldError('name'));
  if (emailInput) emailInput.addEventListener('input', () => clearFieldError('email'));
  if (phoneInput) phoneInput.addEventListener('input', () => clearFieldError('phone'));
  if (descInput) descInput.addEventListener('input', () => clearFieldError('desc'));

  function setFieldError(fieldKey, message) {
    const fieldContainer = document.getElementById(`field-${fieldKey}`);
    const errEl = document.getElementById(`err-${fieldKey}`);
    if (fieldContainer) fieldContainer.classList.add('has-error');
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('show');
    }
  }

  function clearFieldError(fieldKey) {
    const fieldContainer = document.getElementById(`field-${fieldKey}`);
    const errEl = document.getElementById(`err-${fieldKey}`);
    if (fieldContainer) fieldContainer.classList.remove('has-error');
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('show');
    }
  }

  function validateForm() {
    let isValid = true;
    let firstErrorEl = null;

    // Validate Full Name
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      setFieldError('name', 'Please enter your name.');
      if (!firstErrorEl) firstErrorEl = nameInput;
      isValid = false;
    } else {
      clearFieldError('name');
    }

    // Validate Email
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      setFieldError('email', 'Please enter a valid email address.');
      if (!firstErrorEl) firstErrorEl = emailInput;
      isValid = false;
    } else {
      clearFieldError('email');
    }

    // Validate Phone Number
    const phoneVal = phoneInput ? phoneInput.value.trim() : '';
    // Reasonable validation: allow Algerian formats (05/06/07..., +213...) & international formats, minimum 8 digits/characters
    const cleanDigits = phoneVal.replace(/[^0-9]/g, '');
    if (!phoneVal || cleanDigits.length < 8) {
      setFieldError('phone', 'Please enter a valid phone or WhatsApp number.');
      if (!firstErrorEl) firstErrorEl = phoneInput;
      isValid = false;
    } else {
      clearFieldError('phone');
    }

    // Validate Service Selection
    if (selectedServices.size === 0) {
      setFieldError('services', 'Please select at least one service you need.');
      if (!firstErrorEl) firstErrorEl = document.getElementById('field-services');
      isValid = false;
    } else {
      clearFieldError('services');
    }

    // Validate Project Description
    const descVal = descInput ? descInput.value.trim() : '';
    if (!descVal || descVal.length < 8) {
      setFieldError('desc', 'Please tell us what you need.');
      if (!firstErrorEl) firstErrorEl = descInput;
      isValid = false;
    } else {
      clearFieldError('desc');
    }

    if (!isValid && firstErrorEl) {
      firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (typeof firstErrorEl.focus === 'function') firstErrorEl.focus();
    }

    return isValid;
  }

  function getFormData() {
    return {
      name: nameInput ? nameInput.value.trim() : '',
      email: emailInput ? emailInput.value.trim() : '',
      phone: phoneInput ? phoneInput.value.trim() : '',
      company: (companyInput && companyInput.value.trim()) ? companyInput.value.trim() : '—',
      services: Array.from(selectedServices).join(', '),
      description: descInput ? descInput.value.trim() : '',
      budget: (budgetSelect && budgetSelect.value) ? budgetSelect.value : 'Not specified',
      timeline: (timelineSelect && timelineSelect.value) ? timelineSelect.value : 'Flexible',
      source: (sourceSelect && sourceSelect.value) ? sourceSelect.value : 'Direct / Other'
    };
  }

  function buildWhatsAppMessage(data) {
    return `Hello Digital Craft 👋

I would like to discuss a new project.

━━━━━━━━━━━━━━
CLIENT
━━━━━━━━━━━━━━
Name: ${data.name}
Email: ${data.email}
WhatsApp: ${data.phone}
Company: ${data.company}

━━━━━━━━━━━━━━
PROJECT
━━━━━━━━━━━━━━
Service: ${data.services}
Description: ${data.description}
Budget: ${data.budget}
Timeline: ${data.timeline}
How they found us: ${data.source}

Looking forward to hearing from you.
Thank you!`;
  }

  function buildEmailBody(data) {
    return `Hello Digital Craft Team,

I would like to discuss a new project. Here are the details:

━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Full Name: ${data.name}
• Email: ${data.email}
• WhatsApp / Phone: ${data.phone}
• Company / Brand: ${data.company}

━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Service Needed: ${data.services}
• Project Description:
${data.description}

• Estimated Budget: ${data.budget}
• Desired Timeline: ${data.timeline}
• How I Found You: ${data.source}

Looking forward to collaborating with Digital Craft.

Best regards,
${data.name}`;
  }

  function handleSubmission(channel) {
    if (!validateForm()) return;

    const data = getFormData();

    if (channel === 'whatsapp') {
      const message = buildWhatsAppMessage(data);
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodedMsg}`;

      // Update Feedback banner
      if (feedbackBanner && feedbackTitle && feedbackMsg) {
        feedbackBanner.style.display = 'block';
        feedbackTitle.textContent = 'Your inquiry is ready to send.';
        feedbackMsg.textContent = 'WhatsApp is opening with your project details.';
        if (feedbackFallback && feedbackManualLink) {
          feedbackFallback.style.display = 'block';
          feedbackManualLink.href = waUrl;
          feedbackManualLink.textContent = 'Click here to open WhatsApp directly';
        }
        feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Open WhatsApp in new tab / app
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else if (channel === 'email') {
      const subject = 'New Project Inquiry — Digital Craft';
      const body = buildEmailBody(data);
      const mailtoUrl = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Update Feedback banner
      if (feedbackBanner && feedbackTitle && feedbackMsg) {
        feedbackBanner.style.display = 'block';
        feedbackTitle.textContent = 'Your inquiry is ready to send.';
        feedbackMsg.textContent = 'Your email client is opening with your project details.';
        if (feedbackFallback && feedbackManualLink) {
          feedbackFallback.style.display = 'block';
          feedbackManualLink.href = mailtoUrl;
          feedbackManualLink.textContent = 'Click here to open your email client';
        }
        feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Trigger mailto link
      window.location.href = mailtoUrl;
    }
  }

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      handleSubmission('whatsapp');
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      handleSubmission('email');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmission('whatsapp');
  });
})();

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
