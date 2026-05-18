/**
 * Muhammad Anfasa Umar — Portfolio Script
 * Optimized: modular, efficient, no redundancy
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initMobileMenu();
  initScrollBehavior();
  initScrollSpy();
  initReveal();
  initModal();
  initCertFilter();
  initFormSubmit();

  console.log('%c🚀 Portfolio Online | Anfasa Umar', 'color:#0070f3;font-size:15px;font-weight:bold;');
});

/* ── 1. THEME TOGGLE ─────────────────────────────────── */
function initTheme() {
  const btn      = document.getElementById('themeToggle');
  const sunIcon  = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const html     = document.documentElement;

  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(t) {
    html.dataset.theme = t;
    sunIcon.style.display  = t === 'dark' ? 'block' : 'none';
    moonIcon.style.display = t === 'dark' ? 'none'  : 'block';
  }
}

/* ── 2. TYPEWRITER ───────────────────────────────────── */
function initTypewriter() {
  const el      = document.getElementById('typewriter');
  const phrases = ['Strategic Technology.', 'Cyber Security.', 'Full-Stack Systems.', 'Cloud Infrastructure.'];
  let pi = 0, ci = 0, deleting = false;

  (function loop() {
    const phrase = phrases[pi];
    el.textContent = phrase.substring(0, deleting ? --ci : ++ci);

    let delay = deleting ? 45 : 95;
    if (!deleting && ci === phrase.length)      { delay = 2000; deleting = true; }
    else if (deleting && ci === 0)              { deleting = false; pi = (pi + 1) % phrases.length; delay = 500; }

    setTimeout(loop, delay);
  })();
}

/* ── 3. MOBILE MENU ──────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu');
  const nav    = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  nav.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* ── 4. SCROLL — navbar shrink + smooth anchors ──────── */
function initScrollBehavior() {
  const navbar = document.getElementById('navbar');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Smooth scroll for all in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── 5. SCROLL SPY ───────────────────────────────────── */
function initScrollSpy() {
  const sections = [...document.querySelectorAll('section[id]')];
  const navItems = document.querySelectorAll('.nav-item[href^="#"]');

  const update = () => {
    let current = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top <= 120) current = s.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── 6. INTERSECTION OBSERVER REVEAL ─────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal-init').forEach(el => obs.observe(el));
}

/* ── 7. MODAL (image preview) ────────────────────────── */
function initModal() {
  const modal   = document.getElementById('previewModal');
  const img     = document.getElementById('previewImage');
  const caption = document.getElementById('previewCaption');
  const closeBtn = modal.querySelector('.close-modal');

  // Open on cert-card click
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => open(card.dataset.img, card.dataset.caption || ''));
  });

  // Open on any content image click (not inside modal)
  document.addEventListener('click', e => {
    if (e.target.tagName === 'IMG' && !e.target.closest('.modal') && !e.target.closest('.cert-card')) {
      open(e.target.src, e.target.alt || '');
    }
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  function open(src, cap) {
    img.src = src;
    caption.textContent = cap;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after animation
    setTimeout(() => { img.src = ''; }, 300);
  }
}

/* ── 8. CERTIFICATE FILTER ───────────────────────────── */
function initCertFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.cert-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ── 9. FORM SUBMIT ──────────────────────────────────── */
function initFormSubmit() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', () => {
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  });
}