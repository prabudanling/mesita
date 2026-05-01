// ============================================================
// NusaParadise.id — Sitemap & Menu Configuration
// SPECTRUM8: Consolidated 10 → 7 Premium Menu
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
  Star,
  Leaf,
  Newspaper,
  Headphones,
  Rocket,
  BrainCircuit,
  QrCode,
  ScanEye,
  Gem,
  Landmark,
  Crown,
  Globe,
  MapPin,
  Network,
  Shield,
  Handshake,
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
// DATA 7 MENU UTAMA (CONSOLIDATED)
// ============================================================

export const MENU_UTAMA: MenuUtama[] = [
  // ----------------------------------------------------------
  // 1. EKSPLORASI WISATA SYURGA (CORE — unchanged)
  // ----------------------------------------------------------
  {
    id: "wisata",
    label: "Destinasi Syurga",
    description: "Empat dimensi surga dunia Indonesia — pantai, gunung, sejarah, dan edukasi",
    icon: Plane,
    accentColor: "cyan",
    subItems: [
      {
        id: "syurga-biru",
        label: "Syurga Biru Nusantara",
        description: "Pantai eksotis, laut kristal, pulau terluar — dari Raja Ampat hingga Pulau Weh",
        icon: Waves,
        badge: "Best Seller",
      },
      {
        id: "syurga-ketinggian",
        label: "Syurga Ketinggian & Tirta",
        description: "Gunung megah, danau biru, sungai jernih — dari Bromo hingga Danau Toba",
        icon: Mountain,
      },
      {
        id: "syurga-waktu",
        label: "Syurga Waktu & Leluhur",
        description: "Candi kuno, situs purba, sejarah awal manusia — Borobudur, Prambanan, Sangiran",
        icon: Clock,
        badge: "UNESCO",
      },
      {
        id: "syurga-edukasi",
        label: "Syurga Edukasi & Galeri",
        description: "Museum nasional, pusat budaya, galeri seni — Nusantara dalam satu ruang edukasi",
        icon: GraduationCap,
      },
    ],
  },

  // ----------------------------------------------------------
  // 2. NUSAGO PLATFORM (TECH — unchanged)
  // ----------------------------------------------------------
  {
    id: "nusago",
    label: "NusaGo Digital",
    description: "Platform digital terintegrasi — AI, AR/VR, NFT, dan portal investasi untuk 300 destinasi",
    icon: Rocket,
    accentColor: "cyan",
    subItems: [
      {
        id: "nusago-gerbang",
        label: "Gerbang Perjalanan Digital",
        description: "30+ maskapai, 2.000+ properti, visa digital, 20+ bahasa, 50+ mata uang",
        icon: Plane,
        badge: "Core",
      },
      {
        id: "nusago-ai",
        label: "AI Travel Intelligence",
        description: "Itinerary cerdas, prediksi keramaian, optimasi biaya 15-30%, akurasi 91%+",
        icon: BrainCircuit,
        badge: "AI",
      },
      {
        id: "nusago-kode",
        label: "Kode Perjalanan Digital",
        description: "Satu QR untuk semua akses — imigrasi express, check-in instan, e-wallet multi-valas",
        icon: QrCode,
        badge: "1 QR",
      },
      {
        id: "nusago-arvr",
        label: "AR & VR Experience",
        description: "Identifikasi spesies laut real-time, rekonstruksi budaya AR, simulasi diving VR",
        icon: ScanEye,
        badge: "Immersive",
      },
      {
        id: "nusago-nft",
        label: "NFT & Metaverse Resort",
        description: "Beach Club NFT, Digital Twin 100 resort, seni digital edisi terbatas",
        icon: Gem,
        badge: "Web3",
      },
      {
        id: "nusago-investasi",
        label: "Portal Investasi Global",
        description: "300+ proyek terverifikasi, IRR 8-18%, koneksi ADB-IFC-BlackRock",
        icon: Landmark,
        badge: "USD 50B",
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. EKOSISTEM MESITA (MERGED: Ekosistem + Mengapa MESITA)
  // ----------------------------------------------------------
  {
    id: "ekosistem-mesita",
    label: "Ekosistem MESITA",
    description: "Federasi pariwisata Nusantara — keanggotaan, keunggulan digital, dan koperasi digital",
    icon: Shield,
    accentColor: "blue",
    subItems: [
      {
        id: "gabung-anggota",
        label: "Gabung Anggota Ekosistem",
        description: "Pendaftaran 5 Unit — Produksi, Jasa, Distribusi, Modal, dan Digital",
        icon: UserPlus,
        badge: "Daftar Sekarang",
      },
      {
        id: "kenapa-koperasi",
        label: "Keunggulan Digital MESITA",
        description: "Koperasi digital, AI matching, blockchain profit sharing — 10 keunggulan super",
        icon: Crown,
        badge: "Revolutionary",
      },
      {
        id: "dompet-digital",
        label: "Dompet Digital JP3 Pay",
        description: "QRIS, transfer antar desa — satu dompet untuk seluruh ekosistem",
        icon: Wallet,
        badge: "QRIS Ready",
      },
      {
        id: "marketplace-b2b",
        label: "Marketplace Rantai Pasok B2B",
        description: "Hubungkan hotel dengan petani, supplier desa — rantai pasok berdaulat",
        icon: ShoppingCart,
      },
    ],
  },

  // ----------------------------------------------------------
  // 4. PIMPINAN (Struktur Organisasi — promoted to main menu)
  // ----------------------------------------------------------
  {
    id: "pimpinan",
    label: "Pimpinan",
    description: "Struktur organisasi dari pusat hingga akar rumput — DPP, DPW, DPC, PAC 38 provinsi",
    icon: Crown,
    accentColor: "amber",
    subItems: [
      {
        id: "dpp-mesita",
        label: "DPP — Dewan Pimpinan Pusat",
        description: "Pucuk komando strategis nasional — Ketua Umum, Sekjen, Bendahara & 10 Bidang",
        icon: Landmark,
        badge: "Nasional",
      },
      {
        id: "dpw-mesita",
        label: "DPW — Dewan Pimpinan Wilayah",
        description: "Koordinasi tingkat provinsi — 38 DPW dari Sabang hingga Merauke",
        icon: MapPin,
        badge: "38 Provinsi",
      },
      {
        id: "dpc-mesita",
        label: "DPC — Dewan Pimpinan Cabang",
        description: "Eksekutor lapangan — 514 Kabupaten/Kota seluruh Indonesia",
        icon: Network,
        badge: "514 Kab/Kota",
      },
      {
        id: "pac-mesita",
        label: "PAC — Pengurus Anak Cabang",
        description: "Basis gerak massal akar rumput — 7,234+ Kecamatan & Desa",
        icon: Users,
        badge: "7,234+",
      },
    ],
  },

  // ----------------------------------------------------------
  // 5. MODAL PERADABAN (INVESTASI)
  // ----------------------------------------------------------
  {
    id: "investasi",
    label: "Modal Peradaban",
    description: "Integrasi KPA-5 — pendanaan & investasi langsung di destinasi wisata Indonesia",
    icon: TrendingUp,
    accentColor: "emerald",
    subItems: [
      {
        id: "invest-infra",
        label: "Investasi Infrastruktur & Eco-Tourism",
        description: "Jembatan, pelabuhan, eco-lodge, infrastruktur hijau di destinasi prioritas",
        icon: TrendingUp,
        badge: "KPA-5",
      },
      {
        id: "invest-hospitality",
        label: "Pendanaan Hospitality Berdaulat",
        description: "Hotel bintang 5, resort premium, homestay desa — seluruh rantai hospitality",
        icon: Hotel,
      },
      {
        id: "invest-fnb",
        label: "Investasi F&B Khas Nusantara",
        description: "Fine dining lokal, kafe desa, culinary tourism — cita rasa nusantara ke dunia",
        icon: UtensilsCrossed,
      },
      {
        id: "dashboard-roi",
        label: "Dashboard ROI Investor",
        description: "Real-time IRR tracking, proyeksi arus kas, laporan SHU, analitik portofolio",
        icon: BarChart3,
        badge: "Live",
      },
    ],
  },

  // ----------------------------------------------------------
  // 6. AKADEMI & SERTIFIKASI (MERGED: Sertifikasi + Akademi)
  // ----------------------------------------------------------
  {
    id: "akademi-sertifikasi",
    label: "Akademi & Sertifikasi",
    description: "Standar global, sertifikasi profesional, dan pelatihan SDM pariwisata kelas dunia",
    icon: Award,
    accentColor: "violet",
    subItems: [
      {
        id: "chse-halal",
        label: "CHSE & Halal Tourism",
        description: "Standar ganda kepercayaan global — Cleanliness, Health, Safety + Halal",
        icon: Award,
        badge: "Global",
      },
      {
        id: "akademi-sertifikasi",
        label: "Sertifikasi & Akreditasi Global",
        description: "Forbes Travel Guide, Green Globe 21, Blue Flag, ISO 9001 — dalam satu badan",
        icon: Star,
        badge: "World Class",
      },
      {
        id: "akademi-scaleup",
        label: "Pelatihan Scale-Up",
        description: "Akselerasi bertingkat terinspirasi Y Combinator — dari bootcamp UMKM hingga unicorn",
        icon: Rocket,
        badge: "3 Tier",
      },
      {
        id: "akademi-skill",
        label: "Upgrade Skill Karyawan",
        description: "SkillsFuture Indonesia — kredit Rp 5 juta/tahun, 500+ kursus bersertifikat",
        icon: BrainCircuit,
        badge: "SkillsFuture",
      },
      {
        id: "akademi-perusahaan",
        label: "Upgrade Perusahaan Internasional",
        description: "Benchmark Swiss Hospitality, Japanese Omotenashi, UAE Luxury Service",
        icon: Globe,
        badge: "International",
      },
    ],
  },

  // ----------------------------------------------------------
  // 7. MEDIA & KONTAK (MERGED: Media + Kontak)
  // ----------------------------------------------------------
  {
    id: "media-kontak",
    label: "Media & Kontak",
    description: "Transparansi platform, laporan kinerja, pusat media, dan layanan 24/7",
    icon: Newspaper,
    accentColor: "rose",
    subItems: [
      {
        id: "laporan-tahunan",
        label: "Laporan Kinerja Tahunan",
        description: "Dashboard KPI — wisatawan, SHU desa, pertumbuhan investasi, dampak ekonomi",
        icon: BarChart3,
        badge: "Transparan",
      },
      {
        id: "esg-karbon",
        label: "Laporan ESG & Jejak Karbon",
        description: "Komitmen pariwisata berkelanjutan — net-zero carbon, renewable energy",
        icon: Leaf,
        badge: "Net Zero",
      },
      {
        id: "pusat-media",
        label: "Pusat Intelijen Media",
        description: "Berita terkini, press release, galeri video — satu hub media ekosistem",
        icon: Newspaper,
      },
      {
        id: "bantuan-247",
        label: "Pusat Bantuan 24/7",
        description: "Call center multi-bahasa, AI chatbot, emergency hotline — dukungan tanpa henti",
        icon: Headphones,
        badge: "24/7",
      },
      {
        id: "kemitraan",
        label: "Kemitraan & Kolaborasi",
        description: "Partnership, joint venture, sponsorship — bangun pariwisata peradaban bersama",
        icon: Handshake,
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
