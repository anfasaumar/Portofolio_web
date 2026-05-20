/**
 * Muhammad Anfasa Umar — Portfolio Script
 * Versi: 2.0 — Dioptimalkan & Diperbaiki
 */

document.addEventListener('DOMContentLoaded', () => {
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
  initCounterAnimation();
  initCurrentYear();

  console.log(
    '%c🚀 Portfolio Online | Anfasa Umar v2.0',
    'background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:bold;'
  );
});

/* ── 1. THEME ─── */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const html = document.documentElement;
  if (!btn) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  function applyTheme(t) {
    html.dataset.theme = t;
    const isDark = t === 'dark';
    sunIcon.style.opacity = isDark ? '1' : '0';
    sunIcon.style.transform = isDark ? 'translate(-50%,-50%) rotate(0deg)' : 'translate(-50%,-50%) rotate(-90deg)';
    moonIcon.style.opacity = isDark ? '0' : '1';
    moonIcon.style.transform = isDark ? 'translate(-50%,-50%) rotate(90deg)' : 'translate(-50%,-50%) rotate(0deg)';
  }
}

/* ── 2. TYPEWRITER ─── */
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

  let phraseIndex = 0, charIndex = 0, isDeleting = false, isPaused = false;

  function type() {
    const current = phrases[phraseIndex];
    if (isPaused) { setTimeout(type, 100); return; }

    el.textContent = isDeleting
      ? current.substring(0, charIndex - 1)
      : current.substring(0, charIndex + 1);

    isDeleting ? charIndex-- : charIndex++;

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      isPaused = true;
      setTimeout(() => { isPaused = false; isDeleting = true; }, 2500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }
    setTimeout(type, delay);
  }
  setTimeout(type, 1000);
}

/* ── 3. MOBILE MENU ─── */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu');
  const nav = document.getElementById('nav-links');
  const overlay = document.getElementById('navOverlay');
  if (!toggle || !nav) return;

  const openMenu = () => {
    nav.classList.add('active');
    toggle.classList.add('active');
    overlay?.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    overlay?.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => nav.classList.contains('active') ? closeMenu() : openMenu());
  overlay?.addEventListener('click', closeMenu);
  nav.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 992) closeMenu(); });
}

/* ── 4. SCROLL NAVBAR ─── */
function initScrollBehavior() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ── 5. SCROLL SPY ─── */
function initScrollSpy() {
  const sections = [...document.querySelectorAll('section[id]')];
  const navItems = document.querySelectorAll('.nav-item[href^="#"]');
  if (!sections.length || !navItems.length) return;

  let ticking = false;
  const update = () => {
    const scrollPos = window.scrollY + 150;
    let current = '';
    sections.forEach(s => {
      if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight) current = s.id;
    });
    navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${current}`));
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

/* ── 6. SCROLL PROGRESS ─── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${Math.min((window.scrollY / total) * 100, 100)}%`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ── 7. REVEAL (Intersection Observer) ─── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.meter-fill').forEach(m => {
        m.style.width = getComputedStyle(m).getPropertyValue('--fill').trim() || m.style.getPropertyValue('--fill');
      });
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-init').forEach(el => observer.observe(el));
}

/* ── 8. MODAL ─── */
function initModal() {
  const modal = document.getElementById('previewModal');
  const img = document.getElementById('previewImage');
  const caption = document.getElementById('previewCaption');
  const closeBtn = modal?.querySelector('.close-modal');
  if (!modal || !img) return;

  const openModal = (src, cap) => {
    img.src = src;
    caption.textContent = cap || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 300);
  };

  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.img, card.dataset.caption));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.img, card.dataset.caption); }
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
}

/* ── 9. CERT FILTER ─── */
function initCertFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.cert-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        if (show) card.style.animation = 'fadeIn 0.4s ease forwards';
      });
    });
  });
}

/* ── 10. FORM ─── */
function initFormSubmit() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  if (!form) return;

  // Real-time validation
  const fields = {
    name: { el: form.querySelector('#name'), msg: 'Nama tidak boleh kosong.' },
    email: { el: form.querySelector('#email'), msg: 'Email tidak valid.' },
    message: { el: form.querySelector('#message'), msg: 'Pesan tidak boleh kosong.' }
  };

  const validateField = (key) => {
    const { el, msg } = fields[key];
    if (!el) return true;
    const errEl = el.parentElement.querySelector('.field-error');
    let valid = true;
    if (key === 'email') {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    } else {
      valid = el.value.trim().length > 0;
    }
    if (errEl) errEl.textContent = valid ? '' : msg;
    el.classList.toggle('invalid', !valid);
    return valid;
  };

  Object.keys(fields).forEach(key => {
    fields[key].el?.addEventListener('blur', () => validateField(key));
    fields[key].el?.addEventListener('input', () => {
      if (fields[key].el.classList.contains('invalid')) validateField(key);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const allValid = Object.keys(fields).map(k => validateField(k)).every(Boolean);
    if (!allValid) return;

    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.reset();
        if (formSuccess) {
          formSuccess.classList.add('show');
          setTimeout(() => formSuccess.classList.remove('show'), 5000);
        }
      } else {
        alert('Gagal mengirim pesan. Coba lagi nanti.');
      }
    } catch {
      alert('Koneksi bermasalah. Periksa internet Anda.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
    }
  });
}

/* ── 11. CURSOR GLOW ─── */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || !window.matchMedia('(hover: hover)').matches) return;

  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

  (function animate() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animate);
  })();
}

/* ── 12. BACK TO TOP ─── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        btn.classList.toggle('visible', window.scrollY > 500);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 13. IMAGE SWITCH + AUTO SLIDESHOW ─── */
function initImageSwitch() {
  // ⚠️ Ganti 'foto gw 2.png' dengan nama file foto kedua kamu
  const images = ['fotogw.png', 'foto gw 2.png'];
  const heroImg = document.getElementById('hero-img');
  const dots = document.querySelectorAll('.image-dots .dot');
  if (!heroImg || !dots.length) return;

  let currentIndex = 0;
  let autoTimer = null;

  window.changeImage = function (index) {
    if (index < 0 || index >= images.length || index === currentIndex) return;
    currentIndex = index;

    heroImg.style.opacity = '0';
    heroImg.style.transform = 'scale(0.96)';

    setTimeout(() => {
      heroImg.src = images[index];
      heroImg.style.opacity = '1';
      heroImg.style.transform = 'scale(1)';
    }, 300);

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-pressed', i === index ? 'true' : 'false');
    });

    // Reset timer saat user klik manual
    clearInterval(autoTimer);
    startAutoSlide();
  };

  function startAutoSlide() {
    autoTimer = setInterval(() => {
      const next = (currentIndex + 1) % images.length;
      window.changeImage(next);
    }, 4000);
  }

  // Transisi gambar butuh CSS
  heroImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  startAutoSlide();
}

/* ── 14. SMOOTH ANCHORS ─── */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── 15. COUNTER ANIMATION ─── */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1500;
      const start = performance.now();

      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: ease-out
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(animate);
        else el.textContent = target;
      };

      requestAnimationFrame(animate);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── 16. TAHUN FOOTER ─── */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── FADE-IN KEYFRAME ─── */
const s = document.createElement('style');
s.textContent = `
  @keyframes fadeIn {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
`;
document.head.appendChild(s);