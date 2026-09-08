// ==========================================
// 1. Inisialisasi AOS (Animate On Scroll)
// ==========================================
AOS.init({ once: true, offset: 50, duration: 800, easing: 'ease-out-cubic' });

// ==========================================
// 2. Mobile Menu Toggle Logic
// ==========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ==========================================
// 3. 3D Tilt Logic (Hero Section)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const visualContainer = document.getElementById('hero-visual');
    const heroCard = document.getElementById('hero-card');

    if (visualContainer && heroCard && window.innerWidth >= 768) {
        visualContainer.addEventListener('mousemove', (e) => {
            const rect = visualContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            const rotateX = -(y / 25);
            const rotateY = (x / 25);
            heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        visualContainer.addEventListener('mouseleave', () => {
            heroCard.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }
});

// ==========================================
// 4. Fitur Multi-Bahasa (Language Toggle)
// ==========================================
const translations = {
    id: {
        "nav-service": "Layanan & Produk",
        "nav-gallery": "Galeri",
        "nav-contact": "Contact",
        "hero-title": "Agen Terpercaya untuk <span class=\"text-transparent bg-clip-text bg-gradient-to-l from-slate-500 via-blue-950 to-indigo-900 bg-[length:200%_auto] animate-gradient\">Inspeksi Mesin</span> <span class=\"text-slate-900 font-extrabold\">&amp;</span> <span class=\"text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-slate-600 to-cyan-500 bg-[length:200%_auto] animate-gradient\">Sistem Magnet Neodynium</span>",
        "hero-desc": "Berdiri sejak 2026, PT Inovasi Cakrawala Solusi berkomitmen menyediakan peralatan dan jasa untuk menunjang keamanan pangan yang memenuhi standar HACCP, BRC, FSSC, dll.",
        "hero-btn": "Tentang Kami",
        "hero-btn-scn": "Layanan & Produk",
        "about-title": "Mitra Andal untuk Kebutuhan Industri",
        "about-desc1": "PT Inovasi Cakrawala Solusi hadir sebagai jembatan antara kebutuhan industri yang kompleks dengan teknologi inspeksi canggih. Kami memahami bahwa suatu kegagalan produk yang lolos dapat mengurangi kepercayaan konsumen kedepanya dan kualitas pangan.",
        "about-desc2": "Oleh karena itu, kami tidak hanya menjual mesin, tetapi membantu perancangan sistem keamanan pangan, pengedalian resiko dan menjaga kualitas dalam proses produksi (Food Safety/HACCP) yang terintegrasi langsung pada lini produksi manufaktur, makanan, farmasi, dan logistik Anda.",
        "stat-exp": "Tahun Pengalaman",
        "stat-support": "Dukungan Teknis",
        "ind-title": "Apa Kategori Industri Anda?",
        "ind-desc": "Kami menyediakan teknologi deteksi kontaminan dan sortir material presisi tinggi yang disesuaikan khusus dengan karakteristik serta standar audit sektor industri Anda.",
        "food-title": "Industri Pangan & Makanan",
        "food-desc": "Solusi inspeksi kontaminan (logam, kaca, atau benda asing) untuk produk cair, bubuk, pasta, maupun kemasan. Memastikan keamanan produk konsumen serta memenuhi standar audit mutu ketat seperti HACCP, BRC, dan IFS.",
        "plastic-title": "Industri Plastik & Daur Ulang",
        "plastic-desc": "Sistem pemisah kontaminan logam dan pemurni material untuk pelet, regrind, serta flake plastik. Memproteksi mesin pencetak/ekstrusi dari kerusakan fisik dan meningkatkan kemurnian hasil daur ulang.",
        "contact-title": "Mari Diskusikan<br>Kebutuhan Anda.",
        "contact-desc": "Tim sales kami siap memberikan konsultasi gratis dan mendemonstrasikan bagaimana sistem kami menyesuaikan lini produksi spesifik Anda.",
        // Label Form
        "lbl-title": "Sapaan",
        "lbl-name": "Nama Lengkap",
        "lbl-cname": "Perusahaan",
        "lbl-city": "Kota",
        "lbl-email": "Email",
        "lbl-phone": "Phone / WhatsApp",
        "lbl-industry": "Industri",
        "lbl-needs": "Kebutuhan",
        "lbl-msg": "Additional Comment / Specific Inquiry",
        "btn-send": "Kirim Pesan Kebutuhan",
        "footer-desc": "PT Inovasi Cakrawala Solusi berkomitmen menyediakan peralatan dan jasa inspeksi mutu untuk menunjang keamanan pangan yang memenuhi standar industri tinggi.",
        "footer-link-title": "Tautan Cepat",
        "footer-contact-title": "Hubungi Kami",
        "footer-txt": "&copy; 2026 PT Inovasi Cakrawala Solusi. Quality Inspection Solutions."
    },
    en: {
        "nav-service": "Services & Products",
        "nav-gallery": "Gallery",
        "nav-contact": "Contact",
        "hero-title": "Trusted Agent for <span class=\"text-transparent bg-clip-text bg-gradient-to-l from-slate-500 via-blue-950 to-indigo-900 bg-[length:200%_auto] animate-gradient\">Machine Inspection</span> <span class=\"text-slate-900 font-extrabold\">&amp;</span> <span class=\"text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-slate-600 to-cyan-500 bg-[length:200%_auto] animate-gradient\">Neodynium Magnet Systems</span>",
        "hero-desc": "Established in 2026, PT Inovasi Cakrawala Solusi is committed to providing equipment and services to support food safety that meets HACCP, BRC, FSSC, and other standards.",
        "hero-btn": "About Us",
        "hero-btn-scn": "Services & Products",
        "about-title": "Reliable Partner for Industrial Needs",
        "about-desc1": "PT Inovasi Cakrawala Solusi serves as a bridge between complex industrial needs and cutting-edge inspection technology. We understand that an escaped product failure can reduce future consumer trust and food quality.",
        "about-desc2": "Therefore, we don't just sell machines, but help design food safety systems, risk control, and maintain quality in the production process (Food Safety/HACCP) directly integrated into your manufacturing, food, pharmaceutical, and logistics production lines.",
        "stat-exp": "Years of Experience",
        "stat-support": "Technical Support",
        "ind-title": "What is Your Industry Category?",
        "ind-desc": "We provide high-precision contaminant detection and material sorting technology tailored to the characteristics and audit standards of your industrial sector.",
        "food-title": "Food & Beverage Industry",
        "food-desc": "Contaminant inspection solutions (metal, glass, or foreign objects) for liquid, powder, paste, and packaged products. Ensuring consumer product safety and meeting strict quality audit standards such as HACCP, BRC, and IFS.",
        "plastic-title": "Plastic & Recycling Industry",
        "plastic-desc": "Metal contaminant separation systems and material purifiers for plastic pellets, regrind, and flakes. Protecting molding/extrusion machines from physical damage and improving recycling purity.",
        "contact-title": "Let's Discuss<br>Your Needs.",
        "contact-desc": "Our sales team is ready to provide free consultations and demonstrate how our systems fit your specific production line.",
        // Label Form
        "lbl-title": "Title",
        "lbl-name": "Full Name",
        "lbl-cname": "Company",
        "lbl-city": "City",
        "lbl-email": "Email",
        "lbl-phone": "Phone / WhatsApp",
        "lbl-industry": "Industry",
        "lbl-needs": "Needs",
        "lbl-msg": "Additional Comment / Specific Inquiry",
        "btn-send": "Send Quotation Request",
        "footer-desc": "PT Inovasi Cakrawala Solusi is committed to providing quality inspection equipment and services to support food safety meeting high industrial standards.",
        "footer-link-title": "Quick Links",
        "footer-contact-title": "Contact Us",
        "footer-txt": "&copy; 2026 PT Inovasi Cakrawala Solusi. Quality Inspection Solutions."
    }
};

const placeholders = {
    id: {
        "ph-name": "Contoh: Budi Santoso",
        "ph-cname": "PT Contoh Industri",
        "ph-city": "Contoh: Jakarta",
        "ph-email": "budi@perusahaan.com",
        "ph-phone": "0812xxxxxxxx",
        "ph-msg": "Tuliskan spesifikasi teknis tambahan atau detail inquiry Anda di sini..."
    },
    en: {
        "ph-name": "E.g. John Doe",
        "ph-cname": "Example Industry Inc",
        "ph-city": "E.g. Jakarta",
        "ph-email": "john@company.com",
        "ph-phone": "+62812xxxxxxxx",
        "ph-msg": "Write your additional technical specifications or inquiry details here..."
    }
};

let currentLang = 'id';

function setLanguage(lang) {
    currentLang = lang;
    
    // Ganti Teks Konten
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Ganti Placeholder
    document.querySelectorAll('[data-translate-ph]').forEach(el => {
        const key = el.getAttribute('data-translate-ph');
        if (placeholders[lang] && placeholders[lang][key]) {
            el.placeholder = placeholders[lang][key];
        }
    });

    // Ubah status tombol toggle aktif (Bold dan berwarna)
    const activeClasses = ['text-brand-600', 'font-bold'];
    ['desktop', 'mobile'].forEach(type => {
        const btnID = document.getElementById(`btn-id-${type}`);
        const btnEN = document.getElementById(`btn-en-${type}`);
        
        if (btnID && btnEN) {
            if (lang === 'id') {
                btnID.classList.add(...activeClasses);
                btnEN.classList.remove(...activeClasses);
            } else {
                btnEN.classList.add(...activeClasses);
                btnID.classList.remove(...activeClasses);
            }
        }
    });
}

const toggleLang = () => setLanguage(currentLang === 'id' ? 'en' : 'id');

const btnDesktop = document.getElementById('langToggleDesktop');
if(btnDesktop) btnDesktop.addEventListener('click', toggleLang);

const btnMobile = document.getElementById('langToggleMobile');
if(btnMobile) btnMobile.addEventListener('click', toggleLang);

// Inisialisasi bahasa default (ID)
setLanguage('id');

// ==========================================
// 5. EmailJS Form Submit Logic
// ==========================================
(function () {
    emailjs.init("bRngH4RvpyBdBK-cK"); // Public Key Anda
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = document.getElementById('submit-btn');
        const originalText = translations[currentLang]['btn-send']; // Simpan teks asli
        
        btn.innerText = currentLang === 'id' ? 'Mengirim...' : 'Sending...';

        const serviceID = 'service_vqu179e';
        const templateID = 'template_54lp4xh';

        // Mengirim data
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = currentLang === 'id' ? 'Pesan Terkirim!' : 'Message Sent!';
                alert(currentLang === 'id' ? 'Pesan penawaran berhasil dikirim ke email Anda!' : 'Quotation request successfully sent to your email!');
                contactForm.reset();
                setTimeout(() => { btn.innerText = originalText; }, 3000);
            }, (err) => {
                btn.innerText = currentLang === 'id' ? 'Gagal Mengirim' : 'Failed to Send';
                alert(currentLang === 'id' ? 'Terjadi kesalahan: ' + JSON.stringify(err) : 'An error occurred: ' + JSON.stringify(err));
                setTimeout(() => { btn.innerText = originalText; }, 3000);
            });
    });
}