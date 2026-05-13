/**
 * Muhammad Anfasa Umar - Portfolio Script
 * All features integrated: Theme Toggle, Typewriter, Modals, Animations, Mobile Menu
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initThemeToggle();
    initTypewriter();
    initMobileMenu();
    initScrollAnimations();
    initScrollSpy();
    initModals();
    initFilters();
    initNavbarScrollEffect();
    
    console.log('%c🚀 Portfolio System Online | Anfasa Umar', 
        'color: #0070f3; font-size: 16px; font-weight: bold;');
    console.log('%c📊 All systems operational - Network latency: 0ms', 
        'color: #00ff88; font-size: 12px;');
});

// 1. DARK/LIGHT THEME TOGGLE
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const body = document.body;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });
    
    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
}

// 2. TYPEWRITER EFFECT
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');
    const phrases = [
        'Strategic Technology.',
        'Cyber Security.',
        'Full-Stack Systems.',
        'Cloud Infrastructure.'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// 3. MOBILE MENU
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-item[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// 4. SCROLL ANIMATIONS
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-init').forEach(el => {
        observer.observe(el);
    });
}

// 5. NAVBAR SCROLL SPY
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// 6. MODALS (Image Preview & Certificate)
function initModals() {
    // Universal Image Preview
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && !e.target.closest('.modal')) {
            const modal = document.getElementById('previewModal');
            const previewImg = document.getElementById('previewImage');
            const previewCaption = document.getElementById('previewCaption');
            
            previewImg.src = e.target.src;
            previewCaption.textContent = e.target.alt || 'Project Preview';
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Close modals
    document.querySelectorAll('.close-preview, .close-modal').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    document.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal-preview.active, .modal.active');
        modals.forEach(modal => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    function closeAllModals() {
        document.querySelectorAll('.modal.active, .modal-preview.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
}

// 7. CERTIFICATE FILTER
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.cert-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter cards
            certCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Certificate modal functionality
    document.querySelectorAll('.cert-card[data-modal]').forEach(card => {
        card.addEventListener('click', () => {
            const modalData = JSON.parse(card.dataset.modal);
            const certModal = document.getElementById('certModal');
            const certImg = document.getElementById('certModalImg');
            const certCaption = document.getElementById('certCaption');
            
            certImg.src = modalData[0];
            certCaption.textContent = modalData[1];
            certModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}

// 8. NAVBAR SCROLL EFFECT
function initNavbarScrollEffect() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5,5,5,0.98)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.background = 'rgba(5,5,5,0.92)';
            nav.style.boxShadow = 'none';
            nav.style.padding = '1.5rem 5%';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const btn = this.querySelector('.form-submit');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
});