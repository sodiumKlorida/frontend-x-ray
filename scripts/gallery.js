// --- Inisialisasi AOS ---
AOS.init({
    once: true,
    offset: 50,
});

// --- Mobile Menu Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// --- Navbar Scroll Shadow ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 10) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
});

// --- MULTI-LANGUAGE LOGIC ---
let is_id = true; 

const translations = {
    id: {
        "nav-home": "Beranda",
        "nav-about": "Tentang Kami",
        "nav-service": "Layanan & Produk",
        "nav-gallery": "Galeri",
        "nav-contact": "Contact",
        
        "gal-badge": "Dokumentasi & Portofolio",
        "gal-title": "Galeri <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400\">Instalasi & Kegiatan</span>",
        "gal-subtitle": "Lihat langsung bagaimana solusi mesin inspeksi kami diimplementasikan di berbagai lini produksi klien untuk menjaga kualitas dan keamanan produk.",
        
        "gal-tag1": "Instalasi Mesin",
        "gal-title1": "Setup RAYCON D+ X-Ray",
        "gal-desc1": "Inspeksi kontaminan pada produk farmasi kemasan botol.",
        
        "gal-tag2": "Training & Support",
        "gal-title2": "Pelatihan Operator Pabrik",
        "gal-desc2": "Tim teknis kami memberikan training operasional mesin kepada staf pabrik.",
        
        "gal-tag3": "Instalasi Mesin",
        "gal-title3": "Integrasi RAPID 5000",
        "gal-desc3": "Pemisah logam untuk bijih plastik di fasilitas daur ulang.",
        
        "gal-tag4": "Pameran",
        "gal-title4": "Expo Industri Manufaktur 2025",
        "gal-desc4": "Booth pameran teknologi inspeksi keamanan pangan terbesar di Jakarta.",

        "gal-tag5": "Instalasi Mesin",
        "gal-title5": "Integrasi RAPID 5000",
        "gal-desc5": "Pemisah logam untuk bijih plastik di fasilitas daur ulang.",
        "gal-tag6": "Instalasi Mesin",
        "gal-title6": "Integrasi RAPID 5000",
        "gal-desc6": "Pemisah logam untuk bijih plastik di fasilitas daur ulang.",
        "gal-tag7": "Instalasi Mesin",
        "gal-title7": "Integrasi RAPID 5000",
        "gal-desc7": "Pemisah logam untuk bijih plastik di fasilitas daur ulang.",
        "gal-tag8": "Instalasi Mesin",
        "gal-title8": "Integrasi RAPID 5000",
        "gal-desc8": "Pemisah logam untuk bijih plastik di fasilitas daur ulang.",
        "gal-tag9": "Instalasi Mesin",
        "gal-title9": "Integrasi RAPID 5000",
        "gal-desc9": "Pemisah logam untuk bijih plastik di fasilitas daur ulang.",

        "cta-title": "Tertarik dengan Solusi Kami?",
        "cta-desc": "Jadwalkan kunjungan ke fasilitas Anda atau konsultasikan kebutuhan sistem inspeksi Anda secara online bersama tim ahli kami.",
        "cta-btn": "<i class=\"fa-solid fa-calendar-check text-xl text-brand-600\"></i> Jadwalkan Konsultasi",
        
        "footer-desc": "PT Inovasi Cakrawala Solusi berkomitmen menyediakan peralatan dan jasa inspeksi mutu untuk menunjang keamanan pangan yang memenuhi standar industri tinggi.",
        "footer-link-title": "Quick Links",
        "footer-contact-title": "Contact Us",
        "footer-txt": "&copy; 2026 PT Inovasi Cakrawala Solusi. Quality Inspection Solutions."
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-service": "Services & Products",
        "nav-gallery": "Gallery",
        "nav-contact": "Contact",

        "gal-badge": "Documentation & Portfolio",
        "gal-title": "Installation & Activity <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400\">Gallery</span>",
        "gal-subtitle": "See firsthand how our inspection machine solutions are implemented across various client production lines to maintain product quality and safety.",
        
        "gal-tag1": "Machine Installation",
        "gal-title1": "RAYCON D+ X-Ray Setup",
        "gal-desc1": "Contaminant inspection on bottled pharmaceutical products.",
        
        "gal-tag2": "Training & Support",
        "gal-title2": "Factory Operator Training",
        "gal-desc2": "Our technical team provides machine operational training to factory staff.",
        
        "gal-tag3": "Machine Installation",
        "gal-title3": "RAPID 5000 Integration",
        "gal-desc3": "Metal separator for plastic pellets in a recycling facility.",
        
        "gal-tag4": "Exhibition",
        "gal-title4": "Manufacturing Industry Expo 2025",
        "gal-desc4": "The largest food safety inspection technology exhibition booth in Jakarta.",

        "gal-tag5": "Machine Installation",
        "gal-title5": "RAPID 5000 Integration",
        "gal-desc5": "Metal separator for plastic pellets in a recycling facility.",
        "gal-tag6": "Machine Installation",
        "gal-title6": "RAPID 5000 Integration",
        "gal-desc6": "Metal separator for plastic pellets in a recycling facility.",
        "gal-tag7": "Machine Installation",
        "gal-title7": "RAPID 5000 Integration",
        "gal-desc7": "Metal separator for plastic pellets in a recycling facility.",
        "gal-tag8": "Machine Installation",
        "gal-title8": "RAPID 5000 Integration",
        "gal-desc8": "Metal separator for plastic pellets in a recycling facility.",
        "gal-tag9": "Machine Installation",
        "gal-title9": "RAPID 5000 Integration",
        "gal-desc9": "Metal separator for plastic pellets in a recycling facility.",
        
        "cta-title": "Interested in Our Solutions?",
        "cta-desc": "Schedule a visit to your facility or consult your inspection system needs online with our expert team.",
        "cta-btn": "<i class=\"fa-solid fa-calendar-check text-xl text-brand-600\"></i> Schedule Consultation",

        "footer-desc": "PT Inovasi Cakrawala Solusi is committed to providing quality inspection equipment and services to support food safety meeting high industrial standards.",
        "footer-link-title": "Quick Links",
        "footer-contact-title": "Contact Us",
        "footer-txt": "&copy; 2026 PT Inovasi Cakrawala Solusi. Quality Inspection Solutions."
    }
};

function setLanguage(isIndonesian) {
    const lang = isIndonesian ? 'id' : 'en';
    
    // Ganti teks
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atur tampilan tombol navbar
    const activeClasses = ['text-brand-600', 'font-bold'];
    ['desktop', 'mobile'].forEach(type => {
        const btnID = document.getElementById(`btn-id-${type}`);
        const btnEN = document.getElementById(`btn-en-${type}`);
        
        if (btnID && btnEN) {
            if (isIndonesian) {
                btnID.classList.add(...activeClasses);
                btnEN.classList.remove(...activeClasses);
            } else {
                btnEN.classList.add(...activeClasses);
                btnID.classList.remove(...activeClasses);
            }
        }
    });
}

const toggleLang = () => {
    is_id = !is_id;
    console.log(`Berhasil mengganti bahasa ke: ${is_id ? 'Indonesia (ID)' : 'English (EN)'}`);
    setLanguage(is_id);
};

// Pasang Event Listener
const btnDesktop = document.getElementById('langToggleDesktop');
const btnMobile = document.getElementById('langToggleMobile');

if (btnDesktop) btnDesktop.addEventListener('click', toggleLang);
if (btnMobile) btnMobile.addEventListener('click', toggleLang);

// Inisiasi awal
setLanguage(is_id);