/**
 * Muhammad Anfasa Umar — Portfolio Script
 * Versi: 3.0 — Data-driven Projects & Certificates
 */

/* ══════════════════════════════════════════
   DATA — Tambah project/sertifikat di sini
   ══════════════════════════════════════════ */

const PROJECTS = [
  {
    img: 'EdLink.png',
    alt: 'EdLink Integration System',
    tags: ['Frontend', 'Figma', 'Web Dev'],
    category: 'Web App',
    year: '2025',
    title: 'EdLink Management System',
    desc: 'Optimasi dan integrasi platform pembelajaran digital untuk efisiensi manajemen data akademik.',
    linkLabel: 'View Details',
    link: '#',
    featured: true
  },
  {
    img: 'MLEB.png',
    alt: 'Museum Listrik Energi Baru',
    tags: ['Tailwind CSS', 'JavaScript', 'Responsive'],
    category: 'Corporate Web',
    year: '2025',
    title: 'Museum Listrik & Energi Baru',
    desc: 'Pengembangan antarmuka website informatif untuk PT PLN menggunakan Tailwind CSS.',
    linkLabel: 'View Live Site',
    link: '#',
    featured: false
  },
  {
    img: 'Autopsy.png',
    alt: 'Digital Forensics Investigation',
    tags: ['Forensics', 'Autopsy', 'Investigation'],
    category: 'Cyber Security',
    year: '2024',
    title: 'Digital Forensics Investigation',
    desc: 'Analisis bukti digital menggunakan FTK Imager dan Autopsy untuk investigasi file terhapus.',
    linkLabel: 'View Report',
    link: '#',
    featured: false
  },
  {
    img: 'VKJ.png',
    alt: 'Network Security Virtualization',
    tags: ['MikroTik CHR', 'Ubuntu Server', 'Virtualization'],
    category: 'Network',
    year: '2024',
    title: 'Network Security Virtualization',
    desc: 'Simulasi jaringan aman menggunakan VirtualBox dan MikroTik CHR untuk pengujian firewall.',
    linkLabel: 'View Topology',
    link: '#',
    featured: false
  },
  {
    img: 'jaktrans.png',
    alt: 'Project Jakarta Trans',
    tags: ['Frontend', 'Figma', 'Web Dev'],
    category: 'Web App',
    year: '2024',
    title: 'Project Jakarta Trans (JakTrans)',
    desc: 'Rancang bangun aplikasi berbasis web untuk digitalisasi layanan transportasi umum Jakarta.',
    linkLabel: 'View Project',
    link: '#',
    featured: false
  },
  {
    img: 'Yerussolo.png',
    alt: 'Project Yerussolo',
    tags: ['Frontend', 'Backend', 'Web Dev'],
    category: 'Web App',
    year: '2026',
    title: 'Project Yerussolo',
    desc: 'Rancang bangun aplikasi berbasis web untuk digitalisasi pencarian dan pelamaran pekerjaan.',
    linkLabel: 'View Project',
    link: '#',
    featured: false
  }
  /* ── Cara menambah project baru:
  ,{
    img: 'nama-file.png',
    alt: 'Deskripsi alt gambar',
    tags: ['Tag1', 'Tag2'],
    category: 'Web App',   // Web App | Corporate Web | Cyber Security | Network | Lainnya
    year: '2026',
    title: 'Nama Project',
    desc: 'Deskripsi singkat project.',
    linkLabel: 'View Project',
    link: '#',
    featured: false
  }
  ── */
];

const CERTS = [
  {
    img: 'MUHAMMAD ANFASA UMAR (1) (1).png',
    caption: 'Project Officer DERAS 2025',
    category: 'Sertifikat',
    badge: 'star',
    issuer: 'BEM STT Terpadu Nurul Fikri',
    title: 'Project Officer DERAS 2025',
    desc: 'Bertanggung jawab penuh dalam memimpin manajemen proyek dan koordinasi antar divisi debat publik skala kampus.',
    year: '2025'
  },
  {
    img: 'sertif manpro.jpeg',
    caption: 'Most Active Student 2026',
    category: 'Sertifikat',
    badge: 'star',
    issuer: 'Prodi Teknik Informatika',
    title: 'Most Active Student',
    desc: 'Diberikan atas kontribusi aktif dan partisipasi luar biasa dalam berbagai kegiatan Akademik.',
    year: '2026'
  },
  {
    img: 'Sertifikat.K3L_page-0001.jpg',
    caption: 'Kesehatan & Keselamatan Kerja',
    category: 'Sertifikasi',
    badge: 'verified',
    issuer: 'GeoSafety Indonesia',
    title: 'Kesehatan & Keselamatan Kerja',
    desc: 'Sertifikat kompetensi K3L sesuai regulasi dan standar keamanan kerja nasional.',
    year: '2025'
  },
  {
    img: 'Anfasa Umar.png',
    caption: 'Pengabdian Mahasiswa 2025',
    category: 'Sertifikat',
    badge: 'heart',
    issuer: 'BEM STT Terpadu Nurul Fikri',
    title: 'Pengabdian Mahasiswa 2025',
    desc: 'Penghargaan atas dedikasi membangun sinergi dengan masyarakat melalui aksi pengabdian berkelanjutan.',
    year: '2025'
  },
  {
    img: 'Juara 3 Esai - M. Anfasa.png',
    caption: 'Juara 3 Lomba Menulis',
    category: 'Sertifikat',
    badge: 'winner',
    issuer: 'EHA Institute',
    title: 'Juara 3 Lomba Menulis',
    desc: 'Penghargaan atas gagasan kreatif menganalisis gaya hidup dan pola makan sehat bagi Generasi Z.',
    year: '2025'
  },
  {
    img: 'Sertifikat_magang.jpg',
    caption: 'Internship PT. PLN Persero',
    category: 'Sertifikat',
    badge: 'building',
    issuer: 'Museum Listrik dan Energi Baru',
    title: 'Internship — PT. PLN Persero Pusdiklat',
    desc: 'Pengembangan antarmuka web dan pemeliharaan infrastruktur IT untuk operasional museum.',
    year: '2025'
  },
  {
    img: 'UMAR.png',
    caption: 'Panitia Pelantikan UKM',
    category: 'Sertifikat',
    badge: 'users',
    issuer: 'BEM STT Terpadu Nurul Fikri',
    title: 'Panitia Pelantikan Kepala UKM',
    desc: 'Koordinasi teknis pelaksanaan prosesi pelantikan formal seluruh pimpinan Unit Kegiatan Mahasiswa.',
    year: '2024'
  }
  /* ── Cara menambah sertifikat baru:
  ,{
    img: 'nama-file.jpg',
    caption: 'Judul caption modal',
    category: 'Sertifikat',   // Sertifikat | Sertifikasi
    badge: 'star',            // star | verified | winner | heart | building | users | check-circle
    issuer: 'Nama Penerbit',
    title: 'Nama Sertifikat',
    desc: 'Deskripsi singkat.',
    year: '2025'
  }
  ── */
];

/* ══════════════════════════
   ICON MAP untuk badge
   ══════════════════════════ */
const BADGE_MAP = {
  star:         { cls: '',         icon: 'fa-star' },
  verified:     { cls: 'verified', icon: 'fa-check-circle' },
  winner:       { cls: 'winner',   icon: 'fa-trophy' },
  heart:        { cls: '',         icon: 'fa-heart' },
  building:     { cls: '',         icon: 'fa-building' },
  users:        { cls: '',         icon: 'fa-users' },
  'check-circle':{ cls: 'verified', icon: 'fa-check-circle' }
};

/* ══════════════════════════════════════════
   RENDER PROJECTS
   ══════════════════════════════════════════ */
const PROJECT_CATEGORIES = ['All', ...new Set(PROJECTS.map(p => p.category))];
let activeProjectFilter = 'All';
const PROJECT_CARD_GAP = 24; // harus sama dengan var(--sp-lg) dalam px
const PROJECT_CARD_W = 340;
const PROJECT_SPEED_PX_PER_SEC = 55; // semakin besar = semakin cepat

function buildProjectCard(p, i) {
  return `
    <article class="project-card ${p.featured && activeProjectFilter === 'All' && i === 0 ? 'featured' : ''}">
      <div class="project-img-wrap">
        <img src="${p.img}" alt="${p.alt}" loading="lazy" />
        <div class="project-overlay">
          <div class="overlay-content">
            <div class="project-tags">
              ${p.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
            <a href="${p.link}" class="project-link" ${p.link !== '#' ? 'target="_blank" rel="noopener"' : ''}>
              <i class="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-category">${p.category}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.link}" class="view-detail" ${p.link !== '#' ? 'target="_blank" rel="noopener"' : ''}>
          <span>${p.linkLabel}</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.getElementById('project-grid');
  const marquee = document.getElementById('project-marquee');
  const filterBar = document.getElementById('project-filter-bar');
  if (!grid) return;

  // Render filter buttons
  if (filterBar) {
    filterBar.innerHTML = PROJECT_CATEGORIES.map(cat => `
      <button class="filter-btn ${cat === activeProjectFilter ? 'active' : ''}" data-cat="${cat}">
        <i class="fas ${cat === 'All' ? 'fa-border-all' : getCatIcon(cat)}"></i>
        <span>${cat}</span>
      </button>
    `).join('');
    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeProjectFilter = btn.dataset.cat;
        renderProjects();
      });
    });
  }

  // Filter projects
  const filtered = activeProjectFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeProjectFilter);

  // Jika kartu terlalu sedikit untuk loop yang mulus, jangan duplikasi (hindari animasi kosong/patah)
  const needsLoop = filtered.length > 2;
  const cardsHtml = filtered.map((p, i) => buildProjectCard(p, i)).join('');
  grid.innerHTML = needsLoop ? cardsHtml + cardsHtml : cardsHtml;

  // Durasi animasi disesuaikan dengan total lebar 1 set kartu, agar kecepatan (px/detik) konsisten
  if (marquee) {
    if (needsLoop) {
      const setWidth = filtered.length * (PROJECT_CARD_W + PROJECT_CARD_GAP);
      const duration = Math.max(setWidth / PROJECT_SPEED_PX_PER_SEC, 12);
      grid.style.setProperty('--marquee-duration', `${duration}s`);
      marquee.classList.remove('paused');
    } else {
      marquee.classList.add('paused');
    }
  }

  const countEl = document.getElementById('project-count');
  if (countEl) countEl.textContent = `${filtered.length} project${filtered.length !== 1 ? 's' : ''}`;
}

function getCatIcon(cat) {
  const map = {
    'Web App': 'fa-globe',
    'Corporate Web': 'fa-building',
    'Cyber Security': 'fa-shield-halved',
    'Network': 'fa-tower-broadcast'
  };
  return map[cat] || 'fa-folder';
}

/* ══════════════════════════════════════════
   RENDER CERTIFICATES
   ══════════════════════════════════════════ */
const CERT_CATEGORIES = ['All', 'Sertifikat', 'Sertifikasi'];
let activeCertFilter = 'All';
const CERT_CARD_GAP = 24; // harus sama dengan var(--sp-lg) dalam px
const CERT_CARD_W = 320;
const CERT_SPEED_PX_PER_SEC = 50;

function buildCertCard(c, i) {
  const badge = BADGE_MAP[c.badge] || BADGE_MAP.star;
  return `
    <article
      class="cert-card"
      data-category="${c.category}"
      data-img="${c.img}"
      data-caption="${c.caption}"
      tabindex="0"
      role="button"
      aria-label="Lihat sertifikat: ${c.title}"
    >
      <div class="cert-badge ${badge.cls}">
        <i class="fas ${badge.icon}"></i>
      </div>
      <div class="cert-img-wrap">
        <img src="${c.img}" alt="${c.title}" loading="lazy" />
        <div class="cert-img-overlay">
          <i class="fas fa-expand-alt"></i>
        </div>
      </div>
      <div class="cert-info">
        <span class="cert-issuer">${c.issuer}</span>
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
        <div class="cert-footer">
          <span class="cert-date"><i class="far fa-calendar"></i> ${c.year}</span>
          <span class="cert-category-tag">${c.category}</span>
        </div>
      </div>
    </article>
  `;
}

function renderCerts() {
  const grid = document.getElementById('cert-grid');
  const marquee = document.getElementById('cert-marquee');
  const filterBar = document.getElementById('cert-filter-bar');
  const countEl = document.getElementById('cert-count');
  if (!grid) return;

  const certIcons = {
    'All': 'fa-border-all',
    'Sertifikat': 'fa-certificate',
    'Sertifikasi': 'fa-file-certificate'
  };

  if (filterBar) {
    filterBar.innerHTML = CERT_CATEGORIES.map(cat => `
      <button class="filter-btn ${cat === activeCertFilter ? 'active' : ''}" data-cat="${cat}">
        <i class="fas ${certIcons[cat] || 'fa-certificate'}"></i>
        <span>${cat}</span>
      </button>
    `).join('');
    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCertFilter = btn.dataset.cat;
        renderCerts();
      });
    });
  }

  const filtered = activeCertFilter === 'All'
    ? CERTS
    : CERTS.filter(c => c.category === activeCertFilter);

  // Jika kartu terlalu sedikit untuk loop yang mulus, jangan duplikasi
  const needsLoop = filtered.length > 2;
  const cardsHtml = filtered.map((c, i) => buildCertCard(c, i)).join('');
  grid.innerHTML = needsLoop ? cardsHtml + cardsHtml : cardsHtml;

  if (marquee) {
    if (needsLoop) {
      const setWidth = filtered.length * (CERT_CARD_W + CERT_CARD_GAP);
      const duration = Math.max(setWidth / CERT_SPEED_PX_PER_SEC, 12);
      grid.style.setProperty('--marquee-duration-cert', `${duration}s`);
      marquee.classList.remove('paused');
    } else {
      marquee.classList.add('paused');
    }
  }

  if (countEl) countEl.textContent = `${filtered.length} credential${filtered.length !== 1 ? 's' : ''}`;

  // Rebind modal events
  initModal();
}

/* ══════════════════════════════════════════
   INIT — dipanggil saat DOM ready
   ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCerts();

  initTheme();
  initTypewriter();
  initMobileMenu();
  initScrollBehavior();
  initScrollSpy();
  initScrollProgress();
  initReveal();
  initModal();
  initFormSubmit();
  initCursorGlow();
  initBackToTop();
  initImageSwitch();
  initSmoothAnchors();
  initCounterAnimation();
  initCurrentYear();

  console.log(
    '%c🚀 Portfolio v3.0 | Anfasa Umar — Data-driven Edition',
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
  const phrases = ['Strategic Technology.','Cyber Security.','Full-Stack Systems.','Cloud Infrastructure.','Network Engineering.'];
  let phraseIndex = 0, charIndex = 0, isDeleting = false, isPaused = false;
  function type() {
    const current = phrases[phraseIndex];
    if (isPaused) { setTimeout(type, 100); return; }
    el.textContent = isDeleting ? current.substring(0, charIndex - 1) : current.substring(0, charIndex + 1);
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
  const openMenu = () => { nav.classList.add('active'); toggle.classList.add('active'); overlay?.classList.add('active'); toggle.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; };
  const closeMenu = () => { nav.classList.remove('active'); toggle.classList.remove('active'); overlay?.classList.remove('active'); toggle.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };
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
    if (!ticking) { requestAnimationFrame(() => { navbar.classList.toggle('scrolled', window.scrollY > 50); ticking = false; }); ticking = true; }
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
    sections.forEach(s => { if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight) current = s.id; });
    navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${current}`));
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();
}

/* ── 6. SCROLL PROGRESS ─── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { const total = document.documentElement.scrollHeight - window.innerHeight; bar.style.width = `${Math.min((window.scrollY / total) * 100, 100)}%`; ticking = false; }); ticking = true; }
  }, { passive: true });
}

/* ── 7. REVEAL ─── */
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
    if (caption) caption.textContent = cap || '';
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

  // Rebind — remove old listeners by cloning cards first
  document.querySelectorAll('.cert-card').forEach(card => {
    const fresh = card.cloneNode(true);
    card.parentNode.replaceChild(fresh, card);
    fresh.addEventListener('click', () => openModal(fresh.dataset.img, fresh.dataset.caption));
    fresh.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(fresh.dataset.img, fresh.dataset.caption); }
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
}

/* ── 9. FORM ─── */
function initFormSubmit() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    try {
      const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{Accept:'application/json'} });
      if (res.ok) { form.reset(); alert('Pesan terkirim! Terima kasih 🎉'); }
      else alert('Gagal mengirim pesan. Coba lagi nanti.');
    } catch { alert('Koneksi bermasalah. Periksa internet Anda.'); }
    finally { btn.disabled = false; }
  });
}

/* ── 10. CURSOR GLOW ─── */
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

/* ── 11. BACK TO TOP ─── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { btn.classList.toggle('visible', window.scrollY > 500); ticking = false; }); ticking = true; }
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/* ── 12. IMAGE SWITCH ─── */
function initImageSwitch() {
  const images = ['fotogw.png', 'foto gw 2.png'];
  const heroImg = document.getElementById('hero-img');
  const dots = document.querySelectorAll('.image-dots .dot');
  if (!heroImg || !dots.length) return;
  let currentIndex = 0, autoTimer = null;
  window.changeImage = function(index) {
    if (index < 0 || index >= images.length || index === currentIndex) return;
    currentIndex = index;
    heroImg.style.opacity = '0'; heroImg.style.transform = 'scale(0.96)';
    setTimeout(() => { heroImg.src = images[index]; heroImg.style.opacity = '1'; heroImg.style.transform = 'scale(1)'; }, 300);
    dots.forEach((dot, i) => { dot.classList.toggle('active', i === index); dot.setAttribute('aria-pressed', i === index ? 'true' : 'false'); });
    clearInterval(autoTimer); startAutoSlide();
  };
  function startAutoSlide() {
    autoTimer = setInterval(() => { window.changeImage((currentIndex + 1) % images.length); }, 4000);
  }
  heroImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  startAutoSlide();
}

/* ── 13. SMOOTH ANCHORS ─── */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });
}

/* ── 14. COUNTER ANIMATION ─── */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1500, 1);
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

/* ── 15. FOOTER YEAR ─── */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── KEYFRAMES ─── */
const s = document.createElement('style');
s.textContent = `
  @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
`;
document.head.appendChild(s);
