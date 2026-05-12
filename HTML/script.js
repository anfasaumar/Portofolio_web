/**
 * Muhammad Anfasa Umar - Portfolio Script
 * Theme: Network Infrastructure Architecture
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inisialisasi Smooth Scrolling untuk Navigasi
    initSmoothScroll();

    // 2. Animasi Muncul saat Scroll (Reveal on Scroll)
    initScrollReveal();

    // 3. Navbar Transparansi saat Scroll
    initNavbarScroll();
});

/**
 * Mengatur pergerakan halus saat mengeklik link navigasi
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('.nav-links a, .btn-cta, .btn-connect');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Pastikan link memiliki target ID internal (bukan link eksternal)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset untuk tinggi navbar
                        behavior: "smooth"
                    });
                }
            }
        });
    });
}

/**
 * Memberikan efek 'fade-in' pada elemen saat masuk ke viewport
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15 // Elemen muncul setelah 15% bagian terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Berhenti mengamati setelah elemen muncul sekali
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Daftarkan elemen yang ingin diberikan animasi
    const revealElements = document.querySelectorAll('.node, .card, .profile-grid, .stat-box');
    
    revealElements.forEach(el => {
        el.classList.add('reveal-init'); // Tambahkan class awal (hidden) via CSS
        observer.observe(el);
    });
}

/**
 * Mengubah gaya navbar saat pengguna melakukan scroll ke bawah
 */
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(5, 5, 5, 0.95)";
            nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";
            nav.style.padding = "15px 8%";
        } else {
            nav.style.background = "rgba(5, 5, 5, 0.85)";
            nav.style.boxShadow = "none";
            nav.style.padding = "25px 8%";
        }
    });
}

/**
 * Opsional: Simulasi Network Log (Sangat halus di console)
 * Menambah kesan engineer saat HRD atau Developer lain melihat inspect element
 */
console.log("%c[SYSTEM] Initializing Network Core Protocol...", "color: #0070f3; font-weight: bold;");
console.log("%c[STATUS] All routes operational. Welcome to Anfasa's Network.", "color: #00ff88;");

// Fungsi Filter Kategori
function filterCerts(category) {
    const cards = document.querySelectorAll('.cert-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update Button Active State
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Update Fungsi Modal dengan Caption
function openModal(imgSrc, title) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgModal");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = title;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

// Tutup modal jika klik di luar gambar
window.onclick = function(event) {
    const modal = document.getElementById("certModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("previewModal");
    const previewImg = document.getElementById("previewImage");
    const previewCaption = document.getElementById("previewCaption");
    const closeBtn = document.querySelector(".close-preview");

    // 1. Tangkap klik pada seluruh dokumen
    document.addEventListener("click", (e) => {
        // Cek apakah yang diklik adalah elemen IMG
        if (e.target.tagName === "IMG") {
            const imgSrc = e.target.src;
            const imgAlt = e.target.alt || "Image Preview";

            // Tampilkan Modal
            modal.style.display = "block";
            setTimeout(() => modal.classList.add("active"), 10); // Animasi smooth
            
            previewImg.src = imgSrc;
            previewCaption.innerText = imgAlt;
            
            // Kunci scroll body
            document.body.style.overflow = "hidden";
        }
    });

    // 2. Fungsi Tutup Modal
    const closeModal = () => {
        modal.classList.remove("active");
        setTimeout(() => modal.style.display = "none", 300);
        document.body.style.overflow = "auto";
    };

    // Tutup saat tombol X diklik, atau area luar gambar diklik, atau tekan ESC
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains('preview-content-wrapper')) {
            closeModal();
        }
    });
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // 1. Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("is-active");
    });

    // 2. Scroll Spy: Highlighting Navbar berdasarkan posisi scroll
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Jika scroll melewati batas atas section dikurangi sedikit offset
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
        
        // Tutup menu mobile saat scroll (user experience)
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});


        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        // Cek preferensi di Local Storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            html.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme);
        }

        themeToggle.addEventListener('click', () => {
            let currentTheme = html.getAttribute('data-theme');
            let targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateIcon(targetTheme);
        });

        function updateIcon(theme) {
            if (theme === 'dark') {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }

        const textElement = document.getElementById('typewriter');
const phrases = [
    "Strategic Technology.",
    "Cyber Security.",
    "Full-Stack Systems.",
    "Cloud Infrastructure."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 75;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Jeda saat teks selesai diketik
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

function openModal(imgSrc, altText) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgPreview");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = altText;
}

// Tutup modal saat tombol (x) diklik
document.querySelector(".close-modal").onclick = function() {
    document.getElementById("certModal").style.display = "none";
}

// Tutup modal saat user klik di luar gambar
window.onclick = function(event) {
    const modal = document.getElementById("certModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




document.addEventListener('DOMContentLoaded', type);
   
