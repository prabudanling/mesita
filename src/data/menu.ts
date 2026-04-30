// ============================================================
// NusaParadise.id — Sitemap & Menu Configuration
// 8 Menu Utama dengan Sub-Items Lengkap
// ============================================================

import {
  Users,
  Plane,
  Waves,
  Mountain,
  Clock,
  GraduationCap,
  TrendingUp,
  Hotel,
  UtensilsCrossed,
  BarChart3,
  Wallet,
  ShoppingCart,
  UserPlus,
  Award,
  FileCheck,
  Star,
  Leaf,
  Newspaper,
  Headphones,
  Briefcase,
  Rocket,
  BrainCircuit,
  QrCode,
  ScanEye,
  Gem,
  Landmark,
  Crown,
  Sparkles,
  Lock,
  Coins,
  Globe,
  Building2,
  MapPin,
  Network,
  type LucideIcon,
} from "lucide-react";

/** Sub-item dalam menu */
export interface SubMenuItem {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

/** Konfigurasi satu menu utama */
export interface MenuUtama {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  subItems: SubMenuItem[];
}

// ============================================================
// DATA 9 MENU UTAMA
// ============================================================

export const MENU_UTAMA: MenuUtama[] = [
  // ----------------------------------------------------------
  // 1. EKSPLORASI WISATA SYURGA
  // ----------------------------------------------------------
  {
    id: "wisata",
    label: "Eksplorasi Wisata Syurga",
    description: "Empat dimensi surga dunia Indonesia — destinasi yang dikategorikan secara elegan dan komprehensif",
    icon: Plane,
    accentColor: "cyan",
    subItems: [
      {
        id: "syurga-biru",
        label: "Syurga Biru Nusantara",
        description: "Pantai eksotis, laut kristal, pulau terluar — dari Raja Ampat hingga Pulau Weh, surga bahari tanpa batas",
        icon: Waves,
        badge: "Best Seller",
      },
      {
        id: "syurga-ketinggian",
        label: "Syurga Ketinggian & Tirta",
        description: "Gunung megah, bukit hijau, danau biru, sungai jernih — dari Bromo hingga Danau Toba",
        icon: Mountain,
      },
      {
        id: "syurga-waktu",
        label: "Syurga Waktu & Leluhur",
        description: "Candi kuno, situs purba, sejarah awal manusia — Borobudur, Prambanan, Liang Bua, Sangiran",
        icon: Clock,
        badge: "UNESCO",
      },
      {
        id: "syurga-edukasi",
        label: "Syurga Edukasi & Galeri",
        description: "Museum nasional, pusat budaya, galeri seni kontemporer — Nusantara dalam satu ruang edukasi",
        icon: GraduationCap,
      },
    ],
  },

  // ----------------------------------------------------------
  // 2. KAMPUNG MODAL: INVESTASI SYURGA DUNIA
  // ----------------------------------------------------------
  {
    id: "investasi",
    label: "Kampung Modal",
    description: "Integrasi langsung KPA-5 — turis yang terinspirasi bisa langsung berinvestasi di destinasi",
    icon: TrendingUp,
    accentColor: "emerald",
    subItems: [
      {
        id: "invest-infra",
        label: "Investasi Infrastruktur & Eco-Tourism",
        description: "Pembangunan jembatan, pelabuhan, eco-lodge, dan infrastruktur hijau di destinasi prioritas",
        icon: TrendingUp,
        badge: "KPA-5",
      },
      {
        id: "invest-hospitality",
        label: "Pendanaan Hospitality Berdaulat",
        description: "Hotel bintang 5, resort premium, homestay desa — seluruh rantai hospitality Indonesia",
        icon: Hotel,
      },
      {
        id: "invest-fnb",
        label: "Investasi F&B Khas Nusantara",
        description: "Restoran fine dining lokal, kafe desa, culinary tourism — cita rasa nusantara ke dunia",
        icon: UtensilsCrossed,
      },
      {
        id: "dashboard-roi",
        label: "Dashboard ROI Investor (KPA-5)",
        description: "Real-time IRR tracking, proyeksi arus kas, laporan SHU, dan analitik portofolio investasi",
        icon: BarChart3,
        badge: "Live Dashboard",
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. EKOSISTEM PARIWISATA NUSANTARA
  // ----------------------------------------------------------
  {
    id: "ekosistem-pariwisata",
    label: "Ekosistem Pariwisata",
    description: "Mesin pencari anggota KKMNMP — pintu masuk ekosistem pariwisata peradaban dengan dompet digital",
    icon: Users,
    accentColor: "amber",
    subItems: [
      {
        id: "gabung-anggota",
        label: "Gabung Anggota Ekosistem",
        description: "Pintu masuk pendaftaran 5 Unit — Produksi, Jasa, Distribusi, Modal, dan Digital",
        icon: UserPlus,
        badge: "Daftar Sekarang",
      },
      {
        id: "dompet-digital",
        label: "Dompet Digital JP3 Pay",
        description: "Top-up saldo untuk wisata, pembayaran QRIS, transfer antar desa — satu dompet untuk seluruh ekosistem",
        icon: Wallet,
        badge: "QRIS Ready",
      },
      {
        id: "marketplace-b2b",
        label: "Marketplace Rantai Pasok B2B",
        description: "Menghubungkan hotel dengan petani, supplier desa — rantai pasok berdaulat tanpa tengkulak",
        icon: ShoppingCart,
      },
    ],
  },

  // ----------------------------------------------------------
  // 4. STANDAR & SERTIFIKASI GLOBAL
  // ----------------------------------------------------------
  {
    id: "sertifikasi",
    label: "Standar & Sertifikasi",
    description: "Menyakinkan turis internasional: destinasi aman, legal, bersertifikat, dan berstandar global",
    icon: Award,
    accentColor: "violet",
    subItems: [
      {
        id: "chse-halal",
        label: "Sertifikasi CHSE & Halal Tourism",
        description: "Cleanliness, Health, Safety, Environment + Sertifikasi Halal — standar ganda untuk kepercayaan global",
        icon: Award,
        badge: "Global Standard",
      },
      {
        id: "perijinan",
        label: "Perizinan Terpadu Ekosistem",
        description: "Satu pintu perizinan untuk seluruh rantai pariwisata — dari desa hingga kementerian",
        icon: FileCheck,
      },
      {
        id: "bintang-5",
        label: "Standar Layanan Bintang 5 Desa",
        description: "Framework quality control berbasis bintang 5 — elevasi layanan desa wisata ke standar internasional",
        icon: Star,
      },
    ],
  },

  // ----------------------------------------------------------
  // 5. INDEKS & MEDIA PERADABAN
  // ----------------------------------------------------------
  {
    id: "media",
    label: "Indeks & Media",
    description: "Transparansi dan kebesaran platform — laporan kinerja tahunan, ESG, dan pusat media ekosistem",
    icon: Newspaper,
    accentColor: "rose",
    subItems: [
      {
        id: "laporan-tahunan",
        label: "Laporan Indeks Kinerja Tahunan",
        description: "Dashboard KPI tahunan — jumlah wisatawan, SHU desa, pertumbuhan investasi, dan dampak ekonomi",
        icon: BarChart3,
        badge: "Transparan",
      },
      {
        id: "esg-karbon",
        label: "Laporan ESG & Jejak Karbon Wisata",
        description: "Environmental, Social, Governance — komitmen pariwisata berkelanjutan dan net-zero carbon",
        icon: Leaf,
        badge: "Net Zero",
      },
      {
        id: "pusat-media",
        label: "Pusat Intelijen Media",
        description: "Berita terkini, press release, galeri video, dokumentasi — satu hub media untuk seluruh ekosistem",
        icon: Newspaper,
      },
    ],
  },

  // ----------------------------------------------------------
  // 6. NUSAGO — PLATFORM DIGITAL
  // ----------------------------------------------------------
  {
    id: "nusago",
    label: "NusaGo Platform",
    description: "Ekosistem digital paling canggih di dunia — AI, AR/VR, NFT, metaverse, dan portal investasi terintegrasi untuk 300 destinasi",
    icon: Rocket,
    accentColor: "cyan",
    subItems: [
      {
        id: "nusago-gerbang",
        label: "Gerbang Perjalanan Digital",
        description: "Satu portal untuk semua layanan — 30+ maskapai, 2.000+ properti, visa digital, 20+ bahasa, 50+ mata uang",
        icon: Plane,
        badge: "Core",
      },
      {
        id: "nusago-ai",
        label: "AI Travel Intelligence",
        description: "Itinerary cerdas, prediksi keramaian 14 hari, optimasi biaya 15-30%, akurasi kepuasan 91%+",
        icon: BrainCircuit,
        badge: "AI",
      },
      {
        id: "nusago-kode",
        label: "Kode Perjalanan Digital",
        description: "Satu QR untuk semua akses — imigrasi express, check-in instan, e-wallet multi-valas, 50K+ pedagang",
        icon: QrCode,
        badge: "1 QR",
      },
      {
        id: "nusago-arvr",
        label: "AR & VR Experience",
        description: "Identifikasi spesies laut real-time, rekonstruksi warisan budaya AR, simulasi diving VR, stargazing romantis",
        icon: ScanEye,
        badge: "Immersive",
      },
      {
        id: "nusago-nft",
        label: "NFT & Metaverse Resort",
        description: "Beach Club NFT, Digital Twin 100 resort, virtual diving expedition, seni digital edisi terbatas",
        icon: Gem,
        badge: "Web3",
      },
      {
        id: "nusago-investasi",
        label: "Portal Investasi Global",
        description: "300+ proyek terverifikasi, IRR 8-18%, perizinan cepat 30-45 hari, koneksi ADB-IFC-BlackRock",
        icon: Landmark,
        badge: "USD 50B",
      },
    ],
  },

  // ----------------------------------------------------------
  // 7. MENGAPA BERGABUNG MESITA — 10 SUPER KEUNGGULAN
  // ----------------------------------------------------------
  {
    id: "kenapa-mesita",
    label: "Mengapa MESITA",
    description: "10 keunggulan super yang belum dimiliki asosiasi wisata manapun di Indonesia — mesin kemakmuran digital untuk anggota",
    icon: Crown,
    accentColor: "emerald",
    subItems: [
      {
        id: "kenapa-koperasi",
        label: "Koperasi Digital Pertama",
        description: "SHU harian otomatis via blockchain — transparansi total, pembagian real-time tanpa campur tangan manusia",
        icon: Landmark,
        badge: "Revolutionary",
      },
      {
        id: "kenapa-ai",
        label: "AI Business Matching",
        description: "Mesin AI mencarikan partner bisnis, investor, dan buyer — akurasi 91%+, 24/7 tanpa henti",
        icon: BrainCircuit,
        badge: "AI",
      },
      {
        id: "kenapa-blockchain",
        label: "Profit Sharing Blockchain",
        description: "Smart contract otomatisasi bagi hasil — zero human intervention, zero korupsi, 100% transparan",
        icon: Lock,
        badge: "Web3",
      },
      {
        id: "kenapa-metaverse",
        label: "Metaverse Business Center",
        description: "Kantor virtual global 24/7 — trade show, pitching, kontrak digital tanpa batas geografis",
        icon: Globe,
        badge: "Virtual",
      },
      {
        id: "kenapa-nft",
        label: "NFT Membership",
        description: "Keanggotaan bernilai investasi — tradeable, appreciating, dengan profit share 5-10% dan diskon 20% seumur hidup",
        icon: Gem,
        badge: "NFT",
      },
      {
        id: "kenapa-carbon",
        label: "Carbon Credit Revenue",
        description: "Menjaga alam = menghasilkan uang — sertifikat karbon dari konservasi hutan dan mangrove",
        icon: Leaf,
        badge: "Green",
      },
    ],
  },

  // ----------------------------------------------------------
  // 8. AKADEMI PERADABAN
  // ----------------------------------------------------------
  {
    id: "akademi-peradaban",
    label: "Akademi Peradaban",
    description: "Pusat unggulan SDM pariwisata dunia — sertifikasi global, pelatihan scale-up, upgrade skill, dan program inovatif dari 6 negara",
    icon: GraduationCap,
    accentColor: "violet",
    subItems: [
      {
        id: "akademi-sertifikasi",
        label: "Sertifikasi & Akreditasi Global",
        description: "Badan akreditasi pariwisata pertama di Indonesia — menggabungkan standar Forbes Travel Guide, Green Globe 21, Blue Flag, dan ISO 9001",
        icon: Award,
        badge: "Global Standard",
      },
      {
        id: "akademi-scaleup",
        label: "Pelatihan & Training Scale-Up",
        description: "Program akselerasi bertingkat terinspirasi Y Combinator & Techstars — dari bootcamp UMKM hingga unicorn pathway",
        icon: Rocket,
        badge: "3 Tier",
      },
      {
        id: "akademi-skill",
        label: "Upgrade Skill Karyawan",
        description: "SkillsFuture Indonesia — kredit Rp 5 juta/tahun per karyawan untuk upgrade kompetensi melalui 500+ kursus bersertifikat",
        icon: BrainCircuit,
        badge: "SkillsFuture",
      },
      {
        id: "akademi-perusahaan",
        label: "Upgrade Perusahaan Internasional",
        description: "Program transformasi perusahaan — benchmark Swiss Hospitality, Japanese Omotenashi, dan UAE Luxury Service",
        icon: Globe,
        badge: "International",
      },
    ],
  },

  // ----------------------------------------------------------
  // 9. PIMPINAN — STRUKTUR ORGANISASI MESITA
  // ----------------------------------------------------------
  {
    id: "pimpinan",
    label: "Pimpinan",
    description: "Struktur organisasi MESITA dari tingkat pusat hingga anak cabang — kedaulatan kepemimpinan pariwisata peradaban",
    icon: Building2,
    accentColor: "blue",
    subItems: [
      {
        id: "dpp-mesita",
        label: "DPP MESITA",
        description: "Dewan Pimpinan Pusat — pucuk komando strategis nasional, pengatur kebijakan ekosistem pariwisata peradaban",
        icon: Landmark,
        badge: "Pusat",
      },
      {
        id: "dpw-mesita",
        label: "DPW MESITA",
        description: "Dewan Pimpinan Wilayah — 38 provinsi, komando operasional tingkat provinsi dan koordinasi antar kabupaten",
        icon: MapPin,
        badge: "38 Provinsi",
      },
      {
        id: "dpc-mesita",
        label: "DPC MESITA",
        description: "Dewan Pimpinan Cabang — 514 kabupaten/kota, eksekutor lapangan dan penggerak ekonomi desa wisata",
        icon: Network,
        badge: "514 Cabang",
      },
      {
        id: "pac-mesita",
        label: "PAC MESITA",
        description: "Pengurus Anak Cabang — kecamatan & desa, basis gerak massal dan pelaksana program di akar rumput",
        icon: Users,
        badge: "Akar Rumput",
      },
    ],
  },

  // ----------------------------------------------------------
  // 10. MARKAS KOMANDO (KONTAK)
  // ----------------------------------------------------------
  {
    id: "kontak",
    label: "Markas Komando",
    description: "Kesiapan layanan 24/7 — markas komando yang siap melayani setiap wisatawan di seluruh Nusantara",
    icon: Headphones,
    accentColor: "slate",
    subItems: [
      {
        id: "bantuan-247",
        label: "Pusat Bantuan Wisatawan 24/7",
        description: "Call center multi-bahasa, AI chatbot, emergency hotline — dukungan tanpa henti untuk setiap wisatawan",
        icon: Headphones,
        badge: "24/7",
      },
      {
        id: "kemitraan",
        label: "Kemitraan & Kolaborasi Bisnis",
        description: "Partnership opportunity, joint venture, sponsorship — mari bangun pariwisata peradaban bersama",
        icon: Briefcase,
      },
    ],
  },
];

/** Helper: ambil menu berdasarkan ID */
export function getMenuById(id: string): MenuUtama | undefined {
  return MENU_UTAMA.find((m) => m.id === id);
}

/** Helper: ambil semua sub-items dalam flat list */
export function getAllSubItems(): (SubMenuItem & { parentId: string; parentLabel: string })[] {
  return MENU_UTAMA.flatMap((menu) =>
    menu.subItems.map((sub) => ({
      ...sub,
      parentId: menu.id,
      parentLabel: menu.label,
    }))
  );
}
