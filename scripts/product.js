// Inisialisasi AOS Animation
AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic'
});

// --- Navbar Scroll Logic ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 10) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
});

// --- Mobile Menu Toggle Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// --- MULTI-LANGUAGE LOGIC ---

// Variabel penampung status bahasa (True = ID, False = EN)
let is_id = true;

const translations = {
    id: {
        "nav-home": "Beranda",
        "nav-service": "Layanan & Produk",
        "nav-gallery": "Galeri",
        "nav-contact": "Contact",
        "prod-badge": "Katalog Produk",
        "prod-title": "Solusi <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400\">Inspeksi Mutu</span> Industri",
        "prod-subtitle": "Jelajahi berbagai sistem inspeksi mesin dan Sistem Magnet Neodymium mutakhir yang dirancang khusus untuk memastikan keamanan lini produksi Anda sesuai dengan standar internasional.",
        "card1-title": "Metal Detector Conveyor &amp; Gravity-Fall",
        "card1-desc": "Sistem inspeksi logam presisi tinggi dengan teknologi sensitivitas tinggi dan performa stabil untuk produk dalam kemasan atau curah pada belt conveyor.",
        "card1-tag": "Industri FMCG, Plastik, Daur Ulang, Farmasi, dll",
        "card2-title": "X-Ray",
        "card2-desc": "Sistem inspeksi sinar-X (X-Ray) terdepan untuk mendeteksi kontaminan logam, kaca, batu, keramik, dan plastik padat pada produk akhir.",
        "card2-tag": "Industri FMCG, Farmasi, dll",
        "card3-title": "Magnet Neodymium",
        "card3-desc": "Magnet Neodymium berkualitas tinggi dari paduan tanah jarang (NdFeB) yang dibuat dengan metode produksi khusus.",
        "card3-tag": "Industri FMCG, Plastik, Daur Ulang, Farmasi, dll",
        "card4-title": "Gauss Meter",
        "card4-desc": "Alat ukur presisi tinggi untuk menguji kekuatan medan magnet pada sistem pemisah magnetik di berbagai industri.",
        "card4-tag": "Industri FMCG, Plastik, Daur Ulang, Farmasi, dll",
        "btn-detail": "Detail <i class=\"fa-solid fa-arrow-right\"></i>",
        "cta-title": "Bingung Memilih Mesin yang Tepat?",
        "cta-desc": "Konsultasikan spesifikasi lini produksi Anda. Tim engineer kami siap memberikan rekomendasi solusi inspeksi yang paling efisien dan mematuhi regulasi di industri Anda.",
        "cta-btn": "<i class=\"fa-brands fa-whatsapp text-xl text-green-500\"></i> Konsultasi Gratis via WhatsApp",
        "footer-desc": "PT Inovasi Cakrawala Solusi berkomitmen menyediakan peralatan dan jasa inspeksi mutu untuk menunjang keamanan produk yang memenuhi standar industri yang tinggi.",
        "footer-link-title": "Quick Links",
        "footer-contact-title": "Contact Us",
        "about-us": "Tentang Kami",
        "footer-txt": "&copy; 2026 PT Inovasi Cakrawala Solusi. Quality Inspection Solutions."
    },
    en: {
        "nav-home": "Home",
        "nav-service": "Services & Products",
        "nav-gallery": "Gallery",
        "nav-contact": "Contact",
        "prod-badge": "Our Product Catalog",
        "prod-title": "Industrial <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400\">Quality Inspection</span> Solutions",
        "prod-subtitle": "Explore our advanced machinery inspection systems and Neodymium Magnet Systems, specifically designed to ensure safety in your production line according to international standards.",
        "card1-title": "Metal Detector Conveyor &amp; Gravity-Fall",
        "card1-desc": "High-precision metal inspection system with high sensitivity technology and stable performance for packaged or bulk products on belt conveyors.",
        "card1-tag": "FMCG, Plastic, Recycling, Pharma Industries, etc.",
        "card2-title": "X-Ray",
        "card2-desc": "Leading X-ray inspection systems to detect metal, glass, stone, ceramic, and hard plastic contaminants in finished products.",
        "card2-tag": "FMCG, Pharma Industries, etc.",
        "card3-title": "Neodymium Magnet",
        "card3-desc": "High-quality Neodymium magnets from rare earth alloys (NdFeB) manufactured using specialized production methods.",
        "card3-tag": "FMCG, Plastic, Recycling, Pharma Industries, etc.",
        "card4-title": "Gauss Meter",
        "card4-desc": "High-precision measuring instrument to test the magnetic field strength on industrial magnetic separator systems.",
        "card4-tag": "FMCG, Plastic, Recycling, Pharma Industries, etc.",
        "btn-detail": "Details <i class=\"fa-solid fa-arrow-right\"></i>",
        "cta-title": "Confused About Choosing the Right Machine?",
        "cta-desc": "Consult with us regarding your production line specifications. Our engineering team is ready to recommend the most efficient inspection solutions that comply with your industry regulations.",
        "cta-btn": "<i class=\"fa-brands fa-whatsapp text-xl text-green-500\"></i> Free Consultation via WhatsApp",
        "footer-desc": "PT Inovasi Cakrawala Solusi is committed to providing quality inspection equipment and services to support product safety that meets high industrial standards.",
        "footer-link-title": "Quick Links",
        "footer-contact-title": "Contact Us",
        "about-us": "About Us",
        "footer-txt": "&copy; 2026 PT Inovasi Cakrawala Solusi. Quality Inspection Solutions."
    }
};

function setLanguage(isIndonesian) {
    // 1. Ganti teks pada elemen yang memiliki data-translate
    const lang = isIndonesian ? 'id' : 'en';
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. LOGIKA BARU: Tampilkan/Sembunyikan Tombol Detail (Beda Link)
    const btnDetailId = document.getElementById('detail_id');
    const btnDetailEn = document.getElementById('detail_eg');
    const btnDetailId2 = document.getElementById('detail_id2');
    const btnDetailEn2 = document.getElementById('detail_eg2');
    const btnDetailId3 = document.getElementById('detail_id3');
    const btnDetailEn3 = document.getElementById('detail_eg3');
    const btnDetailId4 = document.getElementById('detail_id4');
    const btnDetailEn4 = document.getElementById('detail_eg4');

    // Pastikan tombolnya ada di halaman sebelum diubah
    if (btnDetailId && btnDetailEn) {
        if (isIndonesian) {
            btnDetailId.classList.remove('hidden'); // Munculkan link ID
            btnDetailEn.classList.add('hidden');    // Sembunyikan link EN
            btnDetailId2.classList.remove('hidden'); // Munculkan link ID
            btnDetailEn2.classList.add('hidden');    // Sembunyikan link EN
            btnDetailId3.classList.remove('hidden'); // Munculkan link ID
            btnDetailEn3.classList.add('hidden');    // Sembunyikan link EN
            btnDetailId4.classList.remove('hidden'); // Munculkan link ID
            btnDetailEn4.classList.add('hidden');    // Sembunyikan link EN
        } else {
            btnDetailId.classList.add('hidden');    // Sembunyikan link ID
            btnDetailEn.classList.remove('hidden'); // Munculkan link EN
            btnDetailId2.classList.add('hidden');    // Sembunyikan link ID
            btnDetailEn2.classList.remove('hidden'); // Munculkan link EN
            btnDetailId3.classList.add('hidden');    // Sembunyikan link ID
            btnDetailEn3.classList.remove('hidden'); // Munculkan link EN
            btnDetailId4.classList.add('hidden');    // Sembunyikan link ID
            btnDetailEn4.classList.remove('hidden'); // Munculkan link EN
        }
    }

    // 3. Atur tampilan tombol navbar (ID / EN) ... [Kode kamu sebelumnya tetap sama]
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

// Fungsi untuk menukar (toggle) bahasa saat tombol diklik
const toggleLang = () => {
    is_id = !is_id; // Balikkan nilai is_id (true ke false, atau false ke true)

    // Memberikan log ke console
    if (is_id) {
        console.log("Berhasil mengganti bahasa: Indonesia (ID)");
        console.log("kondisi : " + is_id)
    } else {
        console.log("Berhasil mengganti bahasa: English (EN)");
        console.log("kondisi : " + is_id)
    }

    setLanguage(is_id);
};

// Event listener untuk tombol bahasa di Desktop dan Mobile
const btnDesktop = document.getElementById('langToggleDesktop');
const btnMobile = document.getElementById('langToggleMobile');

if (btnDesktop) btnDesktop.addEventListener('click', toggleLang);
if (btnMobile) btnMobile.addEventListener('click', toggleLang);

// Inisialisasi awal saat halaman dimuat (jalankan menggunakan bahasa ID)
setLanguage(is_id);