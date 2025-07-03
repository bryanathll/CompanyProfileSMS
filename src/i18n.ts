// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Di sini kita akan menaruh semua teks website kita
const resources = {
  en: {
    translation: {
      // Navbar
      nav_about: 'About Us',
      nav_vision: 'Vision/Mission',
      nav_services: 'Services',
      nav_clients: 'Clients',
      lang_button: 'Bahasa Indonesia',
      
      // Hero Section
      hero_title: 'Samudera Maju Sejati',
      hero_subtitle: 'Becoming a trusted and reliable partner in every situation for all shipping in Indonesia',
      hero_button: 'Contact Us',
      hero_address: 'Ruko Kara Junction Blok B No.8 Batam Centre - Riau Islands',

    // footer
    footer_nav_lang: 'Indonesian (English)',
    footer_caption: 'We invite you to contact us, to discuss your specific needs and learn how PT. Samudra Maju Sejati can be a trusted partner for all your ship agency needs.',
    footer_built_by: 'Built by IT Department Indoproff',
    footer_copyright: '© 2025 Samudera Maju Sejati',
    footer_contact: 'Contact Us',

    // about
    about_title1: 'About',
    about_title2: 'Samudera Maju Sejati',
    Description1: 'PT. Samudra Maju Sejati is an Indonesian shipping agency company, established in 2024, built on the expertise of professionals who have been dedicated to the ship agency industry for over a decade. With a strong commitment to delivering the best and most reliable services, we strive to be a trusted partner in the maritime sector',
    Description2: 'Strategically headquartered in Batam, Indonesia, we ensure comprehensive coverage and efficient operations.',

        // MisiSection{
    // MisiTitle
    misiTitle:'Our Mission',
    misiDesc:'Our mission is to be the preferred ship agency partner, exceeding expectations for both domestic and international clients.',

        // MisiCard
        // Title
    cardTitle1: 'Uncompromising Integrity',
    cardTitle2: 'Unmatched Expertise',
    cardTitle3: 'Unwavering Dedication',
    cardTitle4: 'Excellence in Service',

        // Desc
    cardDesc1:'We uphold the highest ethical standards and strive to build trust through transparency and open communication.',
    cardDesc2:'Our team of highly qualified and experienced professionals possesses deep knowledge of maritime regulations.',
    cardDesc3:'We are committed to providing personalized attention and efficient solutions tailored to each client’s unique needs.',
    cardDesc4:'Delivering exceptional service, building trust, and ensuring client satisfaction are our top priorities.',
    // }  
    
    // ImageRevealSection
    teks1:'Your Trusted Partner in Vessel Operations',
    teks2:'Amid the time pressures and complexities of port activities, we stand as the system that keeps everything moving with precision, order, and control.',

    // JasaSection{
    jasaTitle1:'Professional',
    jasaTitle2:'Maritime Solutions',
    jasaDesc:'We offer a range of professional services designed to support smooth sailing operations and efficient port activities',

    JasaTitleCard1:'Port Agency',
    JasaTitleCard2:'Vessel Agency',
    JasaTitleCard3:'Crew Handling',
    JasaTitleCard4:'Supply & Provisions',
    JasaTitleCard5:'Disbursement & Accounting',
    JasaTitleCard6:'Value-Added Services',

    // jasaDesc
    jasaDesc1:'We handle all aspects of vessel arrival, clearance, and departure procedures, ensuring smooth and efficient port operations.',
    jasaDesc2:'We act as the local representative for shipping companies, managing cargo documentation, customs clearance, and cargo handling.',
    jasaDesc3:'We provide comprehensive crew management services, including visa arrangements, immigration procedures, and transportation.',
    jasaDesc4:'We efficiently coordinate the delivery of essential supplies, provisions, and spare parts to vessels.',
    jasaDesc5:'We manage all financial transactions related to port calls, including fees, charges, and payments to local authorities.',
    jasaDesc6:'We offer dedicated 24/7 support to ensure prompt and effective solutions to unforeseen challenges.',
    // }

    // FutureSection
    titleFuture:'Sailing Into the Future',
    descFuture1:'PT. Samudra Maju Sejati is dedicated to continuous improvement and innovation, striving to remain at the forefront of Indonesia’s ship agency industry.',
    descFuture2:'We are committed to playing a vital role in facilitating global trade and driving the growth of the maritime sector in Indonesia.',


    // keunggulanSection{
    titleKeunggulan1:'Competitive',
    titleKeunggulan2:'Advantages',
    descKeunggulan:'We distinguish ourselves through key strengths that form the foundation of our approach, delivering added value in every collaboration we undertake.',

    // card
    titleKeunggulanCard1:'Client-Centered Approach',
    titleKeunggulanCard2:'Extensive Partnership Network',
    titleKeunggulanCard3:'Technology-Driven Solutions',
    
    // desc
    descKeunggulanCard1:'We uphold the highest ethical standards and strive to build trust through transparency and open communication.',
    descKeunggulanCard2:'Our established partnerships and reliable local contracts enable us to streamline logistics efficiently.',
    descKeunggulanCard3:'We leverage technology to optimize processes and deliver timely, accurate information to our clients.',
    // }

    // ClientSection
    clientTitle: 'Trusted Across the Maritime Industry',
    clientDesc: 'We take pride in being a trusted partner to many companies that continue to grow with us. Our collaborations go beyond service—they are about building long-term, mutually empowering relationships.',

    // contactSection
    contactTitle:'Contact Us If You Have Any Questions:',
    workingHoursTitle:'Working Hours',
    workingHours:'Monday to Friday, 08:30 AM – 5:00 PM',
    contact_address:'Ruko Kara Junction Blok B No.8 Batam Centre - Riau Islands',
    contactDesc:'Our team is ready to assist you with personalized solutions and prompt responses. If you have any questions about our services, we’re just a message or a phone call away!',
    contactName: 'Name *',
    contactEmail: 'Email *',
    contactPhoneNumber: 'Phone Number ',
    contactSubject: 'Subject',
    contactMessage: 'Message ',
    contactButton: 'Submit Message',
    }
  },
  id: {
    translation: {
      // Navbar
    nav_about: 'Tentang kami',
    nav_vision: 'Visi/Misi',
    nav_services: 'Layanan',
    nav_clients: 'Klien',
    lang_button: 'English',

      // Hero Section
    hero_title: 'Samudera Maju Sejati',
    hero_subtitle: 'Menjadi mitra terpercaya dan dapat diandalkan di setiap situasi untuk semua pelayaran di Indonesia',
    hero_button: 'Kontak Kami',
    hero_address: 'Ruko Kara Junction Blok B No.8 Batam Centre - Kepulauan Riau',

    //Footer
    footer_nav_lang: 'Bahasa Indonesia (Bahasa Inggris)',
    footer_caption: 'Kami mengundang anda untuk menghubungi kami, mendiskusikan kebutuhan spesifik anda dan mempelajari bagaimana PT. Samudra Maju Sejati dapat menjadi partner terpercaya untuk segala kebutuhan keagenan kapal anda.',
    footer_built_by: 'Dibangun oleh Departemen IT Indoproff',
    footer_copyright: '© 2025 Samudera Maju Sejati',
    footer_contact: 'Hubungi IT Support',

    //About
    about_title1: 'Tentang',
    about_title2: 'Samudera Maju Sejati',
    Description1: 'PT. Samudra Maju Sejati  adalah  perusahaan keagenan kapal Indonesia,  didirikan pada 2024 dengan tenaga  profesional yang telah berdedikasi  dalam bidang keagenan kapal selama  belasan tahun serta komitmen untuk  memberikan layanan yang terbaik dan  dapat diandalkan klien di industri  maritim.',
    Description2: 'Strategically headquartered in Batam, Indonesia, we ensure comprehensive coverage and efficient operations.',

    // MisiSection{
    // MisiTitle
    misiTitle:'Misi Kami',
    misiDesc:'Misi kami adalah untuk menjadi mitra keagenan kapal pilihan yang dapat melampaui harapan bagi klien domestik maupun internasional',

        // MisiCard
        // Title
    cardTitle1: 'Integritas Tanpa Kompromi',
    cardTitle2: 'Keahlian yang Tak Tertandingi',
    cardTitle3: 'Dedikasi yang Tak Tergoyahkan',
    cardTitle4: 'Pelayanan Terbaik',

        // Desc
    cardDesc1:'Kami mematuhi standar etika tertinggi dan berupaya membangun kepercayaan melalui transparansi dan komunikasi terbuka.',
    cardDesc2:'Tim kami yang terdiri dari para profesional berkualifikasi tinggi dan berpengalaman memiliki pengetahuan mendalam tentang peraturan maritim.',
    cardDesc3:'Kami berkomitmen untuk memberikan perhatian yang dipersonalisasi dan solusi efisien untuk kebutuhan unik setiap klien.',
    cardDesc4:'Memberikan pelayanan yang maksimal, membangun kepercayaan serta kepuasan klien adalah tujuan utama kami.',
    // }  
    
    // ImageRevealSection
    teks1:'Mitra Tepercaya untuk Operasional Kapal Anda',
    teks2:'Dalam tekanan waktu dan kompleksitas pelabuhan, kami berdiri sebagai sistem yang menjaga semuanya tetap bergerak akurat, teratur, dan terkendali',

    // JasaSection{
    jasaTitle1:'Jasa Yang',
    jasaTitle2:'Kami Tawarkan',
    jasaDesc:'Kami menyediakan berbagai layanan profesional yang dirancang untuk mendukung kelancaran aktivitas pelayaran dan operasional di pelabuhan.',

    JasaTitleCard1:'Agen Pelabuhan',
    JasaTitleCard2:'Agen Kapal',
    JasaTitleCard3:'Penanganan Kru',
    JasaTitleCard4:'Pasokan dan Perbekalan',
    JasaTitleCard5:'Pencairan dan Akuntansi',
    JasaTitleCard6:'Layanan Tambahan',

    // jasaDesc
    jasaDesc1:'Kami menangani semua aspek prosedur kedatangan, izin, dan keberangkatan kapal, memastikan operasi pelabuhan lancar dan efisien.',
    jasaDesc2:'Kami bertindak sebagai perwakilan lokal untuk perusahaan pelayaran kapal, mengelola dokumentasi kargo, bea cukai, dan penanganan kargo.',
    jasaDesc3:'Kami menyediakan layanan manajemen kru yang komprehensif, termasuk pengaturan visa, prosedur imigrasi, dan transportasi.',
    jasaDesc4:'Kami secara efisien mengatur pengiriman perbekalan penting, perbekalan, dan suku cadang ke kapal.',
    jasaDesc5:'Kami mengelola semua transaksi keuangan yang terkait dengan panggilan pelabuhan, termasuk biaya, ongkos, dan pembayaran kepada otoritas setempat',
    jasaDesc6:'Kami menawarkan dukungan khusus 24/7 untuk memastikan solusi cepat dan efektif terhadap tantangan yang tidak terduga',
    // }

    // FutureSection
    titleFuture:'Melihat Kedepan',
    descFuture1:'PT. Samudra Maju Sejati berdedikasi pada perbaikan dan inovasi berkelanjutan, berupaya untuk tetap menjadi yang terdepan dalam industri keagenan kapal Indonesia.',
    descFuture2:'Kami berkomitmen untuk memainkan peran penting dalam memfasilitasi perdagangan global dan mendorong pertumbuhan sektor maritim di Indonesia',

    // keunggulanSection{

    titleKeunggulan1:'Keunggulan',
    titleKeunggulan2:'Kompetitif',
    descKeunggulan:'Kami membedakan diri melalui beberapa kekuatan utama yang menjadi fondasi pendekatan kami dalam memberikan nilai lebih di setiap kolaborasi yang kami jalankan.',

    // card
    titleKeunggulanCard1:'Pendekatan yang berpusat pada klien',
    titleKeunggulanCard2:'Jaringan Kemitraan yang Luas',
    titleKeunggulanCard3:'Solusi Berbasis Teknologi',

    // desc
    descKeunggulanCard1:'Kami mematuhi standar etika tertinggi dan berupaya membangun kepercayaan melalui transparansi dan komunikasi terbuka.',
    descKeunggulanCard2:'Jaringan kemitraan kami yang mapan dan kontrak lokal yang dapat diandalkan memungkinkan kami merampingkan logistik.',
    descKeunggulanCard3:'Kami memanfaatkan teknologi untuk mengoptimalkan proses dalam memberikan informasi kepada klien kami.',
    // }

    // ClientSection
    clientTitle: 'Perusahaan yang Memilih Kami',
    clientDesc: 'Kami bangga telah menjadi mitra bagi banyak perusahaan yang terus berkembang bersama kami. Kolaborasi yang terjalin bukan hanya soal layanan, tapi juga tentang membangun hubungan jangka panjang yang saling menguatkan.',

    // contactSection
    contactTitle:'Hubungi kami jika anda mempunyai pertanyaan:',
    workingHoursTitle:'Jam Kerja',
    workingHours:'Senin sampai Jumat 08:30  – 17:00 WIB.',
    contact_address:'Ruko Kara Junction Blok B No.8 Batam Centre - Kepulauan Riau',
    contactDesc:'Tim kami siap membantu Anda dengan solusi yang dipersonalisasi dan tanggapan yang cepat. Jika Anda memiliki pertanyaan tentang layanan kami, kami hanya berjarak satu pesan atau telepon saja!',
    contactName: 'Nama *',
    contactEmail: 'Email *',
    contactPhoneNumber: 'Nomor Telepon ',
    contactSubject: 'Subjek ',
    contactMessage: 'Pesan ',
    contactButton: 'Kirim Pesan',
    }
  }
};

i18n
  .use(LanguageDetector) // Mendeteksi bahasa browser pengguna
  .use(initReactI18next) // Mengintegrasikan dengan React
  .init({
    resources,
    fallbackLng: 'id', // Bahasa default jika deteksi gagal
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS
    },
  });

export default i18n;