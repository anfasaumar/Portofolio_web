/**
 * Muhammad Anfasa Umar — Portfolio Script
 * Modern, Performant, and Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initTheme();
  initTypewriter();
  initMobileMenu();
  initScrollBehavior();
  initScrollSpy();
  initScrollProgress();
  initReveal();
  initModal();
  initCertFilter();
  initFormSubmit();
  initCursorGlow();
  initBackToTop();
  initImageSwitch();
  initSmoothAnchors();

  console.log(
    '%c🚀 Portfolio Online | Anfasa Umar',
    'background: linear-gradient(135deg, #3b82f6, #06b6d4); color: white; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: bold;'
  );
});

/* ── 1. THEME TOGGLE ─────────────────────────────────── */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const html = document.documentElement;

  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  function applyTheme(t) {
    html.dataset.theme = t;
    sunIcon.style.opacity = t === 'dark' ? '1' : '0';
    sunIcon.style.transform = t === 'dark' ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(-90deg)';
    moonIcon.style.opacity = t === 'dark' ? '0' : '1';
    moonIcon.style.transform = t === 'dark' ? 'translate(-50%, -50%) rotate(90deg)' : 'translate(-50%, -50%) rotate(0deg)';
  }
}

/* ── 2. TYPEWRITER ───────────────────────────────────── */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Strategic Technology.',
    'Cyber Security.',
    'Full-Stack Systems.',
    'Cloud Infrastructure.',
    'Network Engineering.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      setTimeout(type, 100);
      return;
    }

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
      }, 2500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  // Start after a brief delay
  setTimeout(type, 1000);
}

/* ── 3. MOBILE MENU ──────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu');
  const nav = document.getElementById('nav-links');
  const overlay = document.getElementById('navOverlay');
  const body = document.body;

  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('active');
    toggle.classList.add('active');
    overlay?.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    overlay?.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on overlay click
  overlay?.addEventListener('click', closeMenu);

  // Close on nav link click
  nav.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close on resize if desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && nav.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ── 4. SCROLL BEHAVIOR ──────────────────────────────── */
function initScrollBehavior() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;
  let ticking = false;

  function updateNavbar() {
    const currentScroll = window.scrollY;
    navbar.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });
}

/* ── 5. SCROLL SPY ───────────────────────────────────── */
function initScrollSpy() {
  const sections = [...document.querySelectorAll('section[id]')];
  const navItems = document.querySelectorAll('.nav-item[href^="#"]');

  if (!sections.length || !navItems.length) return;

  let ticking = false;

  function update() {
    const scrollPos = window.scrollY + 150;
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.id;
      }
    });

    navItems.forEach((item) => {
      const href = item.getAttribute('href');
      item.classList.toggle('active', href === `#${current}`);
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Initial update
  update();
}

/* ── 6. SCROLL PROGRESS ──────────────────────────────── */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  let ticking = false;

  function updateProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
}

/* ── 7. INTERSECTION OBSERVER REVEAL ─────────────────── */
function initReveal() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Also animate skill meters
        const meters = entry.target.querySelectorAll('.meter-fill');
        meters.forEach((meter) => {
          meter.style.width = meter.style.getPropertyValue('--fill');
        });
      }
    });
  }, options);

  document.querySelectorAll('.reveal-init').forEach((el) => observer.observe(el));
}

/* ── 8. MODAL (IMAGE PREVIEW) ────────────────────────── */
function initModal() {
  const modal = document.getElementById('previewModal');
  const img = document.getElementById('previewImage');
  const caption = document.getElementById('previewCaption');
  const closeBtn = modal?.querySelector('.close-modal');

  if (!modal || !img) return;

  function open(src, cap) {
    img.src = src; 
    caption.textContent = cap || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    closeBtn?.focus();
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      img.src = '';
    }, 300);
  }

  // Open on cert-card click
  document.querySelectorAll('.cert-card').forEach((card) => {
    card.addEventListener('click', () => {
      open(card.dataset.img, card.dataset.caption || '');
    });

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(card.dataset.img, card.dataset.caption || '');
      }
    });
  });

  // Open on image click (not in modal or cert-card)
  document.addEventListener('click', (e) => {
    if (
      e.target.tagName === 'IMG' &&
      !e.target.closest('.modal') &&
      !e.target.closest('.cert-card') &&
      !e.target.closest('.profile-container') &&
      !e.target.closest('nav')
    ) {
      open(e.target.src, e.target.alt || '');
    }
  });

  closeBtn?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      close();
    }
  });
}

/* ── 9. CERTIFICATE FILTER ───────────────────────────── */
function initCertFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.cert-card');

  if (!btns.length || !cards.length) return;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;

        if (show) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── 10. FORM SUBMIT ─────────────────────────────────── */
function initFormSubmit() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('.form-submit');
    const originalContent = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';

    // Reset button after submission (Formspree will redirect)
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalContent;
    }, 5000);
  });

  // Form validation enhancement
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      if (input.value.trim()) {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    });
  });
}

/* ── 11. CURSOR GLOW ─────────────────────────────────── */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || !window.matchMedia('(hover: hover)').matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Smooth follow
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;

    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(animate);
  }

  animate();
}

/* ── 12. BACK TO TOP ─────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  let ticking = false;

  function updateVisibility() {
    btn.classList.toggle('visible', window.scrollY > 500);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ── 13. IMAGE SWITCH ────────────────────────────────── */
function initImageSwitch() {
  const images = ['fotogw.png', 'foto2.png']; // Add your second image
  const heroImg = document.getElementById('hero-img');
  const dots = document.querySelectorAll('.image-dots .dot');

  if (!heroImg || !dots.length) return;

  window.changeImage = function (index) {
    if (index >= images.length) return;

    heroImg.style.opacity = '0';
    heroImg.style.transform = 'scale(0.95)';

    setTimeout(() => {
      heroImg.src = images[index];
      heroImg.style.opacity = '1';
      heroImg.style.transform = 'scale(1)';
    }, 300);

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };
}

/* ── 14. SMOOTH ANCHORS ──────────────────────────────── */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ── UTILITY: Fade In Animation ──────────────────────── */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
