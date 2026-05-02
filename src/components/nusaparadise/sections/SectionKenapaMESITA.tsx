"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Sparkles,
  BrainCircuit,
  Wallet,
  Gem,
  BarChart3,
  TreePine,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
  Lock,
  TrendingUp,
  Heart,
  Building2,
  Landmark,
  Handshake,
  Scale,
  Target,
  Lightbulb,
  Rocket,
  BadgeCheck,
  Crown,
  Star,
  Coins,
  ShieldCheck,
  Network,
  Store,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// DATA: 10 Super Keunggulan MESITA yang Belum Dimiliki
//       Asosiasi Wisata Manapun di Indonesia (April 2026)
// ============================================================

interface KeunggulanSuper {
  id: string;
  nomor: string;
  nama: string;
  tagline: string;
  deskripsi: string;
  icon: LucideIcon;
  warna: string;
  metrik: { value: string; label: string }[];
  belumDimiliki: string; // why no other association has this
  dampak: string; // real business impact
}

const KEUNGGULAN_SUPER: KeunggulanSuper[] = [
  {
    id: "koperasi-digital",
    nomor: "01",
    nama: "Koperasi Digital Pertama di Pariwisata Indonesia",
    tagline: "SHU Otomatis, Transparan, Real-Time",
    deskripsi:
      "MESITA mengoperasikan koperasi digital terintegrasi di mana setiap transaksi anggota menghasilkan SHU (Sisa Hasil Usaha) yang tercatat di blockchain dan dibagikan secara otomatis. Tidak ada asosiasi di Indonesia yang memiliki sistem koperasi digital terintegrasi dengan dompet digital dan pembagian SHU real-time.",
    icon: Landmark,
    warna: "blue",
    metrik: [
      { value: "Rp 2,85T", label: "Total SHU Terbagikan" },
      { value: "100K+", label: "Penerima SHU" },
      { value: "Real-Time", label: "Distribusi Otomatis" },
      { value: "Blockchain", label: "Transparansi Total" },
    ],
    belumDimiliki: "Asosiasi tradisional membagikan SHU tahunan secara manual tanpa transparansi. MESITA membagikan SHU harian secara otomatis via smart contract.",
    dampak: "Anggota menerima penghasilan pasif harian, bukan tahunan. Transparansi 100% mencegah korupsi dan membangun kepercayaan.",
  },
  {
    id: "ai-matching",
    nomor: "02",
    nama: "AI Business Matching — Pasangan Bisnis Cerdas",
    tagline: "AI Mencarikan Partner Bisnis untuk Anda",
    deskripsi:
      "Mesin AI yang menganalisis profil bisnis anggota dan mencocokkan dengan peluang kolaborasi, investor, buyer, atau supplier yang paling relevan. Sistem memproses 50M+ data point untuk menghasilkan rekomendasi dengan akurasi 91%+.",
    icon: BrainCircuit,
    warna: "violet",
    metrik: [
      { value: "91%+", label: "Akurasi Matching" },
      { value: "50M+", label: "Data Point" },
      { value: "24/7", label: "Pencarian Otomatis" },
      { value: "3.200+", label: "Partner Terhubung" },
    ],
    belumDimiliki: "Asosiasi lain mengandalkan networking manual dan event fisik. Tidak ada yang menggunakan AI untuk mencocokkan anggota dengan peluang bisnis.",
    dampak: "Anggota mendapatkan peluang bisnis baru tanpa perlu mencari sendiri. Waktu pencarian partner berkurang dari berminggu-minggu menjadi hitungan menit.",
  },
  {
    id: "profit-blockchain",
    nomor: "03",
    nama: "Profit Sharing Blockchain — Bagi Hasil Tanpa Manusia",
    tagline: "Smart Contract, Zero Korupsi",
    deskripsi:
      "Kontrak pintar (smart contract) mengotomatiskan pembagian profit dari setiap proyek wisata langsung ke dompet digital anggota. Tidak ada manusia yang menyentuh uang — kode program yang membagikan secara adil dan transparan.",
    icon: Lock,
    warna: "emerald",
    metrik: [
      { value: "0%", label: "Human Intervention" },
      { value: "100%", label: "Otomatis" },
      { value: "Immutable", label: "Tidak Bisa Dimanipulasi" },
      { value: "5-10%", label: "Profit Share Anggota" },
    ],
    belumDimiliki: "Asosiasi lain membagikan profit melalui proses manual yang rentan korupsi dan delay. MESITA menggunakan blockchain untuk transparansi absolut.",
    dampak: "Anggota menerima bagi hasil tepat waktu, tepat jumlah, tanpa potongan ilegal. Kepercayaan meningkat drastis karena sistem tidak bisa dimanipulasi.",
  },
  {
    id: "metaverse-hq",
    nomor: "04",
    nama: "Metaverse Business Center — Kantor Virtual Global",
    tagline: "Networking Tanpa Batas Geografis",
    deskripsi:
      "Kantor pusat virtual di metaverse di mana anggota bisa menghadiri trade show, melakukan pitching, menandatangani kontrak digital, dan membangun jaringan global 24/7 tanpa perlu hadir secara fisik. Pameran wisata virtual pertama di Indonesia.",
    icon: Globe,
    warna: "cyan",
    metrik: [
      { value: "24/7", label: "Akses Global" },
      { value: "∞", label: "Kapasitas Peserta" },
      { value: "VR/AR", label: "Immersive Meeting" },
      { value: "0", label: "Biaya Travel" },
    ],
    belumDimiliki: "Tidak ada asosiasi wisata di Indonesia yang memiliki presence di metaverse. Event networking masih terbatas pada lokasi fisik dan waktu tertentu.",
    dampak: "Anggota dari desa terpencil bisa menghadiri trade show internasional tanpa biaya travel. Jangkauan bisnis menjadi global secara instan.",
  },
  {
    id: "nft-membership",
    nomor: "05",
    nama: "NFT Membership — Keanggotaan yang Bernilai Investasi",
    tagline: "Keanggotaan Bisa Diperdagangkan & Naik Nilai",
    deskripsi:
      "Keanggotaan MESITA berbentuk NFT yang bisa diperdagangkan di pasar sekunder. Semakin banyak manfaat yang dihasilkan, semakin tinggi nilai NFT membership. Ini pertama kalinya keanggotaan asosiasi bisa menjadi aset investasi.",
    icon: Gem,
    warna: "amber",
    metrik: [
      { value: "Tradeable", label: "Pasar Sekunder" },
      { value: "20%", label: "Diskon Seumur Hidup" },
      { value: "5-10%", label: "Profit Share" },
      { value: "Appreciating", label: "Nilai Naik" },
    ],
    belumDimiliki: "Semua asosiasi lain memberikan kartu anggota fisik yang tidak memiliki nilai jual. NFT MESITA bisa dijual, ditransfer, dan nilainya mengikuti performa ekosistem.",
    dampak: "Keanggotaan bukan lagi biaya, melainkan investasi. Anggota awal mendapat keuntungan dari apresiasi nilai NFT saat ekosistem bertumbuh.",
  },
  {
    id: "predictive-intelligence",
    nomor: "06",
    nama: "Predictive Business Intelligence — Ramalan Bisnis Presisi",
    tagline: "Tahu Sebelum Terjadi",
    deskripsi:
      "Dashboard AI yang memprediksi tren wisata, lonjakan permintaan musiman, optimasi harga, dan peluang investasi spesifik untuk wilayah anggota. Anggota bisa mengambil keputusan bisnis berbasis data, bukan firasat.",
    icon: BarChart3,
    warna: "rose",
    metrik: [
      { value: "14 Hari", label: "Prediksi ke Depan" },
      { value: "91%+", label: "Akurasi Prediksi" },
      { value: "38", label: "Provinsi Tercover" },
      { value: "Real-Time", label: "Update Data" },
    ],
    belumDimiliki: "Asosiasi lain memberikan laporan tahunan yang sudah kedaluwarsa. MESITA memberikan prediksi real-time 14 hari ke depan dengan akurasi tinggi.",
    dampak: "Anggota bisa mempersiapkan stok, staf, dan harga jauh sebelum kompetitor. Keunggulan kompetitif yang tidak bisa ditiru tanpa akses data yang sama.",
  },
  {
    id: "supply-chain-tanpa-tengkulak",
    nomor: "07",
    nama: "Supply Chain Tanpa Tengkulak — Rantai Pasok Berdaulat",
    tagline: "Dari Petani ke Hotel, Tanpa Perantara",
    deskripsi:
      "Marketplace B2B yang menghubungkan langsung produsen desa dengan hotel dan restoran, menghilangkan 3-5 lapisan tengkulak. Petani mendapat harga 40-60% lebih tinggi, hotel mendapat bahan 20-30% lebih murah.",
    icon: Store,
    warna: "teal",
    metrik: [
      { value: "40-60%", label: "Harga Naik untuk Petani" },
      { value: "20-30%", label: "Biaya Turun untuk Hotel" },
      { value: "12.450", label: "Transaksi/Bulan" },
      { value: "3.200+", label: "Supplier Terdaftar" },
    ],
    belumDimiliki: "Tidak ada asosiasi yang membangun marketplace B2B terintegrasi. Hubungan supplier-buyer masih berbasis tengkulak dan relasi personal.",
    dampak: "Petani desa sejahtera, hotel hemat biaya, kualitas produk terjaga karena rantai pasok pendek dan terdigitalisasi.",
  },
  {
    id: "carbon-credit",
    nomor: "08",
    nama: "Carbon Credit Revenue — Konservasi Jadi Pendapatan",
    tagline: "Menjaga Alam = Menghasilkan Uang",
    deskripsi:
      "Program pertama di Indonesia di mana anggota desa wisata menghasilkan pendapatan dari kredit karbon. Setiap hektar hutan/mangrove yang dilindungi menghasilkan sertifikat karbon yang bisa diperdagangkan di pasar internasional.",
    icon: TreePine,
    warna: "green",
    metrik: [
      { value: "$15-30", label: "per Ton CO₂/ha" },
      { value: "200+", label: "Lokasi Konservasi" },
      { value: "Carbon-", label: "Target Operasi" },
      { value: "Verified", label: "Sertifikasi Global" },
    ],
    belumDimiliki: "Tidak ada asosiasi wisata yang mengubah konservasi menjadi sumber pendapatan anggota. Program lingkungan masih dilihat sebagai biaya, bukan investasi.",
    dampak: "Desa wisata yang menjaga hutannya mendapat penghasilan tambahan. Insentif ekonomi mendorong pelestarian alam, bukan perusakan.",
  },
  {
    id: "micro-investasi",
    nomor: "09",
    nama: "Micro-Investment Crowdfunding — Investasi dari Rp 100 Ribu",
    tagline: "Semua Orang Bisa Jadi Investor Wisata",
    deskripsi:
      "Platform crowdfunding pertama di Indonesia yang memungkinkan siapa saja berinvestasi di proyek wisata mulai dari Rp 100.000. Tidak lagi hanya untuk orang kaya — rakyat Indonesia bisa ikut memiliki dan mendapat bagi hasil dari resort, homestay, dan infrastruktur wisata.",
    icon: Coins,
    warna: "orange",
    metrik: [
      { value: "Rp 100K", label: "Minimal Investasi" },
      { value: "8-18%", label: "IRR" },
      { value: "300+", label: "Proyek Tersedia" },
      { value: "Blockchain", label: "Kepemilikan Terjamin" },
    ],
    belumDimiliki: "Investasi wisata di Indonesia hanya terbuka untuk investor kelas kakap. MESITA membuka akses untuk seluruh rakyat Indonesia dengan modal minimal.",
    dampak: "Mensejahterakan rakyat kecil yang selama ini hanya jadi penonton di industri wisata. Sekarang mereka bisa jadi pemilik dan mendapat bagi hasil.",
  },
  {
    id: "cross-border-payment",
    nomor: "10",
    nama: "Cross-Border Tourism Payment — Bayar Tanpa Batas Negara",
    tagline: "50.000+ Pedagang, 50+ Mata Uang, 1 Dompet",
    deskripsi:
      "Sistem pembayaran lintas negara pertama yang dirancang khusus untuk pariwisata Indonesia. Dompet digital JP3 Pay menerima 50+ mata uang, crypto, dan QRIS — biaya transaksi hanya 2% vs 3-5% kartu internasional. Wisatawan asing bisa bayar langsung tanpa menukar uang.",
    icon: Wallet,
    warna: "sky",
    metrik: [
      { value: "50+", label: "Mata Uang" },
      { value: "50.000+", label: "Pedagang" },
      { value: "2%", label: "Biaya Transaksi" },
      { value: "Instant", label: "Konversi Otomatis" },
    ],
    belumDimiliki: "Tidak ada asosiasi yang membangun sistem pembayaran terintegrasi untuk seluruh ekosistem wisata. Pembayaran masih terfragmentasi antara bank, e-wallet, dan cash.",
    dampak: "Wisatawan asing lebih mudah membayar, pedagang desa mendapat akses pembayaran global, dan seluruh transaksi tercatat untuk SHU yang lebih besar.",
  },
];

// ============================================================
// DATA: Perbandingan MESITA vs Asosiasi Tradisional
// ============================================================

const PERBANDINGAN = [
  { fitur: "Distribusi SHU", mesita: "Harian, otomatis via blockchain", tradisional: "Tahunan, manual, tidak transparan" },
  { fitur: "Business Matching", mesita: "AI-powered, akurasi 91%+", tradisional: "Networking manual di event" },
  { fitur: "Profit Sharing", mesita: "Smart contract, zero human touch", tradisional: "Proses manual, rentan korupsi" },
  { fitur: "Kantor Virtual", mesita: "Metaverse, 24/7 global", tradisional: "Kantor fisik, jam kerja terbatas" },
  { fitur: "Keanggotaan", mesita: "NFT tradeable, appreciating value", tradisional: "Kartu fisik, tanpa nilai jual" },
  { fitur: "Data Bisnis", mesita: "Prediktif real-time 14 hari", tradisional: "Laporan tahunan, data kedaluwarsa" },
  { fitur: "Supply Chain", mesita: "Direct B2B, tanpa tengkulak", tradisional: "3-5 lapisan perantara" },
  { fitur: "Konservasi", mesita: "Pendapatan dari carbon credit", tradisional: "Biaya tanpa return" },
  { fitur: "Investasi", mesita: "Mulai Rp 100K, crowdfunding", tradisional: "Hanya untuk investor besar" },
  { fitur: "Pembayaran", mesita: "50+ mata uang, 1 dompet, 2%", tradisional: "Fragmentasi, biaya 3-5%" },
];

// ============================================================
// DATA: Business Model — Cara Anggota Mendapat Penghasilan
// ============================================================

const SUMBER_PENGHASILAN = [
  {
    id: "shu-koperasi",
    nama: "SHU Koperasi Digital",
    deskripsi: "Bagi hasil otomatis dari setiap transaksi di ekosistem — dibayarkan harian ke JP3 Pay",
    icon: Landmark,
    warna: "blue",
    potensi: "Rp 500K - 5M / bulan",
  },
  {
    id: "profit-proyek",
    nama: "Profit Sharing Proyek",
    deskripsi: "Bagi hasil 5-10% dari proyek wisata yang Anda investasikan via smart contract",
    icon: TrendingUp,
    warna: "emerald",
    potensi: "8-18% IRR / tahun",
  },
  {
    id: "carbon-credit",
    nama: "Carbon Credit Revenue",
    deskripsi: "Pendapatan dari sertifikat karbon untuk setiap hektar hutan/mangrove yang dilindungi",
    icon: TreePine,
    warna: "green",
    potensi: "$15-30 / ton CO₂ / ha",
  },
  {
    id: "marketplace-b2b",
    nama: "Marketplace B2B Revenue",
    deskripsi: "Akses langsung ke pembeli hotel/restoran tanpa tengkulak — harga jual naik 40-60%",
    icon: Store,
    warna: "amber",
    potensi: "+40-60% margin",
  },
  {
    id: "nft-appreciation",
    nama: "NFT Membership Appreciation",
    deskripsi: "Nilai NFT membership naik seiring pertumbuhan ekosistem — bisa diperdagangkan di pasar sekunder",
    icon: Gem,
    warna: "violet",
    potensi: "Value Appreciating",
  },
  {
    id: "ai-referral",
    nama: "AI Business Referral",
    deskripsi: "Sistem AI mencarikan klien, partner, dan peluang bisnis — Anda tinggal closing",
    icon: BrainCircuit,
    warna: "cyan",
    potensi: "Unlimited Leads",
  },
];

// ============================================================
// Color Maps
// ============================================================

const warnaMap: Record<string, { bg: string; border: string; text: string; badge: string; icon: string; gradient: string; glow: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",  text: "text-blue-600",  badge: "bg-blue-100 text-blue-700",  icon: "text-blue-500", gradient: "from-blue-500 to-blue-700", glow: "shadow-blue-500/20" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200", text: "text-violet-600", badge: "bg-violet-100 text-violet-700", icon: "text-violet-500", gradient: "from-violet-500 to-violet-700", glow: "shadow-violet-500/20" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700", icon: "text-emerald-500", gradient: "from-emerald-500 to-emerald-700", glow: "shadow-emerald-500/20" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",   text: "text-cyan-600",   badge: "bg-cyan-100 text-cyan-700",   icon: "text-cyan-500", gradient: "from-cyan-500 to-cyan-700", glow: "shadow-cyan-500/20" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200", text: "text-amber-600", badge: "bg-amber-100 text-amber-700", icon: "text-amber-500", gradient: "from-amber-500 to-amber-700", glow: "shadow-amber-500/20" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",   text: "text-rose-600",   badge: "bg-rose-100 text-rose-700",   icon: "text-rose-500", gradient: "from-rose-500 to-rose-700", glow: "shadow-rose-500/20" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",   text: "text-teal-600",   badge: "bg-teal-100 text-teal-700",   icon: "text-teal-500", gradient: "from-teal-500 to-teal-700", glow: "shadow-teal-500/20" },
  green:   { bg: "bg-green-50",   border: "border-green-200",  text: "text-green-600",  badge: "bg-green-100 text-green-700",  icon: "text-green-500", gradient: "from-green-500 to-green-700", glow: "shadow-green-500/20" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200", text: "text-orange-600", badge: "bg-orange-100 text-orange-700", icon: "text-orange-500", gradient: "from-orange-500 to-orange-700", glow: "shadow-orange-500/20" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",    text: "text-sky-600",    badge: "bg-sky-100 text-sky-700",    icon: "text-sky-500", gradient: "from-sky-500 to-sky-700", glow: "shadow-sky-500/20" },
};

// ============================================================
// SUB-COMPONENTS
// ============================================================

/** Kartu Keunggulan Super */
function KartuKeunggulan({ data, index, isActive, onClick }: {
  data: KeunggulanSuper;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const c = warnaMap[data.warna] ?? warnaMap.blue;
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className={cn(
          "w-full text-left flex items-start gap-3 p-4 rounded-xl transition-all duration-300 group",
          isActive
            ? cn(c.bg, c.border, "border shadow-sm scale-[1.02]")
            : "bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm"
        )}
      >
        <div className={cn(
          "flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300",
          isActive
            ? cn("bg-gradient-to-br", c.gradient, "shadow-lg", c.glow)
            : "bg-slate-50 border border-slate-100"
        )}>
          {isActive ? (
            <Icon className="size-5 text-white" />
          ) : (
            <span className={cn("text-xs font-bold", "text-slate-400")}>{data.nomor}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={cn(
              "text-[12px] font-bold truncate transition-colors",
              isActive ? c.text : "text-slate-700 group-hover:text-slate-900"
            )}>
              {data.nama}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 block truncate">{data.tagline}</span>
        </div>
        <ChevronRight className={cn(
          "size-4 shrink-0 mt-2 transition-all duration-300",
          isActive ? cn(c.text, "translate-x-0.5") : "text-slate-300"
        )} />
      </button>
    </motion.div>
  );
}

/** Detail Panel Keunggulan */
function DetailKeunggulan({ data }: { data: KeunggulanSuper }) {
  const c = warnaMap[data.warna] ?? warnaMap.blue;
  const Icon = data.icon;

  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn("border overflow-hidden", c.border)}>
        <CardContent className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={cn("flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br shrink-0 shadow-lg", c.gradient, c.glow)}>
              <Icon className="size-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider", c.badge)}>
                  Super Keunggulan #{data.nomor}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wider">
                  Belum Dimiliki Asosiasi Lain
                </span>
              </div>
              <h3 className={cn("text-xl sm:text-2xl font-bold", c.text)}>{data.nama}</h3>
              <p className="text-sm text-slate-500 mt-1">{data.tagline}</p>
            </div>
          </div>

          {/* Deskripsi */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">{data.deskripsi}</p>

          {/* Metrik */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {data.metrik.map((m) => (
              <div key={m.label} className={cn("rounded-xl px-3 py-3 text-center", c.bg)}>
                <div className={cn("font-mono text-lg sm:text-xl font-bold", c.text)}>{m.value}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Why No One Else Has This + Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-50 border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="size-4 text-red-500" />
                <span className="text-xs font-bold text-red-700">Mengapa Asosiasi Lain Tidak Punya?</span>
              </div>
              <p className="text-[11px] text-red-600/80 leading-relaxed">{data.belumDimiliki}</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <Target className="size-4 text-emerald-500" />
                <span className="text-xs font-bold text-emerald-700">Dampak Bisnis Nyata</span>
              </div>
              <p className="text-[11px] text-emerald-600/80 leading-relaxed">{data.dampak}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// MAIN SECTION
// ============================================================
export default function SectionKenapaMESITA() {
  const [activeKeunggulan, setActiveKeunggulan] = useState("koperasi-digital");
  const { openModal } = useNavigation();
  const activeData = KEUNGGULAN_SUPER.find((k) => k.id === activeKeunggulan) ?? KEUNGGULAN_SUPER[0];

  return (
    <section id="kenapa-mesita" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-50/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* SECTION HEADER — MENGAPA BERGABUNG DENGAN MESITA? */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 mb-5">
            <Crown className="size-3.5 text-blue-600" />
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">10 Super Keunggulan Pertama di Indonesia</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Mengapa Harus Bergabung<br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              dengan MESITA?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
            MESITA bukan asosiasi biasa — ini adalah{" "}
            <span className="text-slate-800 font-semibold">mesin kemakmuran digital</span>{" "}
            yang belum pernah ada di industri pariwisata Indonesia. 10 keunggulan super yang{" "}
            <span className="text-emerald-600 font-semibold">belum dimiliki asosiasi manapun</span>.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { value: "10", label: "Keunggulan Unik", icon: Sparkles },
              { value: "100K+", label: "Anggota Aktif", icon: Users },
              { value: "6 Sumber", label: "Penghasilan Anggota", icon: Coins },
              { value: "0", label: "Asosiasi Pesaing", icon: Shield },
            ].map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-xl px-4 py-5 text-center border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <Icon className="size-5 text-blue-500 mx-auto mb-2" />
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-800 tabular-nums">{m.value}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-1">{m.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 10 SUPER KEUNGGULAN — Interactive Tabs */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Sub-header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <Zap className="size-3 text-emerald-500" />
              <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest">Belum Dimiliki Asosiasi Lain di Indonesia</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              10 Keunggulan Super{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">MESITA</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Klik setiap keunggulan untuk melihat detail, metrik, dan dampak bisnis nyata — semuanya belum pernah ada di asosiasi wisata manapun di Indonesia.
            </p>
          </div>

          {/* Tabs + Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Sidebar: Keunggulan Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-2 max-h-[700px] overflow-y-auto custom-scrollbar pr-1">
              {KEUNGGULAN_SUPER.map((k, i) => (
                <KartuKeunggulan
                  key={k.id}
                  data={k}
                  index={i}
                  isActive={activeKeunggulan === k.id}
                  onClick={() => setActiveKeunggulan(k.id)}
                />
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <DetailKeunggulan data={activeData} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* PERBANDINGAN MESITA vs ASOSIASI TRADISIONAL */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-4">
              <Scale className="size-3 text-amber-500" />
              <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-widest">Perbandingan Jujur</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              MESITA vs Asosiasi Tradisional —{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Tidak Ada Tandingan</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Bandingkan fitur per fitur — MESITA menghadirkan transformasi digital yang belum pernah dilakukan asosiasi wisata manapun di Indonesia.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800 to-slate-900">
                    <th className="py-3 px-4 text-left text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Fitur</th>
                    <th className="py-3 px-4 text-center text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-1.5">
                        <Crown className="size-3.5" />
                        MESITA
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Tradisional</th>
                  </tr>
                </thead>
                <tbody>
                  {PERBANDINGAN.map((item, i) => (
                    <motion.tr
                      key={item.fitur}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="py-3 px-4 text-[12px] font-semibold text-slate-700">{item.fitur}</td>
                      <td className="py-3 px-4 text-[12px] text-emerald-600 text-center font-medium">{item.mesita}</td>
                      <td className="py-3 px-4 text-[12px] text-slate-400 text-center">{item.tradisional}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 6 SUMBER PENGHASILAN ANGGOTA */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <Coins className="size-3 text-emerald-500" />
              <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest">Super Business Model</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              6 Sumber Penghasilan{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Anggota MESITA</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Bergabung dengan MESITA bukan hanya tentang jaringan — ini tentang <span className="font-semibold text-slate-700">mensejahterakan secara nyata</span> melalui 6 aliran pendapatan yang saling menguatkan.
            </p>
          </div>

          {/* Income Sources Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SUMBER_PENGHASILAN.map((s, i) => {
              const c = warnaMap[s.warna] ?? warnaMap.blue;
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Card className="bg-white border border-slate-100 overflow-hidden group hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className={cn("flex items-center justify-center w-11 h-11 rounded-xl", c.bg)}>
                          <Icon className={cn("size-5", c.icon)} />
                        </div>
                        <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full", c.badge)}>
                          {s.potensi}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 leading-tight">{s.nama}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{s.deskripsi}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* JANJI MESITA — Manifesto */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12">
            {/* Decorative */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-5">
                <Heart className="size-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">Janji MESITA untuk Indonesia</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
                Kami Bukan Sekadar Asosiasi.<br />
                Kami Adalah{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Mesin Kemakmuran Rakyat
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    icon: Handshake,
                    judul: "Untuk Anggota",
                    poin: [
                      "6 sumber penghasilan aktif & pasif",
                      "SHU harian otomatis via blockchain",
                      "AI mencarikan peluang bisnis",
                      "NFT membership yang naik nilai",
                      "Akses metaverse business center 24/7",
                    ],
                  },
                  {
                    icon: Users,
                    judul: "Untuk Rakyat Indonesia",
                    poin: [
                      "1 juta lapangan kerja langsung",
                      "2 juta lapangan kerja tidak langsung",
                      "IDR 200 triliun pembayaran masyarakat/tahun",
                      "Investasi mulai Rp 100 ribu",
                      "Carbon credit untuk desa konservasi",
                    ],
                  },
                  {
                    icon: Building2,
                    judul: "Untuk Indonesia",
                    poin: [
                      "IDR 160 triliun penerimaan pajak/tahun",
                      "30 juta wisatawan internasional 2030",
                      "USD 50 miliar pendapatan tahunan",
                      "300 destinasi premium terintegrasi",
                      "Reposisi Indonesia sebagai surga dunia",
                    ],
                  },
                ].map((p) => {
                  const PIcon = p.icon;
                  return (
                    <div key={p.judul} className="bg-white/[0.06] border border-white/10 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <PIcon className="size-5 text-cyan-400" />
                        <span className="text-sm font-bold text-white">{p.judul}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {p.poin.map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-[11px] text-slate-300 leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => openModal("gabung-anggota")}
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
                >
                  Gabung MESITA Sekarang
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => openModal("gabung-ekosistem-cta")}
                  className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/25 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* TESTIMONI / SOCIAL PROOF */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                nama: "I Wayan Sudarma",
                peran: "Pengelola Homestay, Ubud",
                quote: "SHU harian dari JP3 Pay mengubah hidup keluarga saya. Dulu menunggu setahun, sekarang setiap hari ada tambahan penghasilan.",
                icon: BadgeCheck,
                warna: "blue",
              },
              {
                nama: "Hj. Siti Nurhaliza",
                peran: "Ketua Koperasi Wisata, Lombok",
                quote: "Marketplace B2B menghilangkan 3 lapisan tengkulak. Harga jual kerajinan desa kami naik 50% langsung.",
                icon: Store,
                warna: "emerald",
              },
              {
                nama: "Rizky Pratama",
                peran: "Investor Wisata, Jakarta",
                quote: "Dashboard prediktif membantu saya investasi di destinasi yang tepat sebelum harganya naik. IRR 16.5% di tahun pertama.",
                icon: BarChart3,
                warna: "violet",
              },
              {
                nama: "Maria Ratu Rowa",
                peran: "Pemandu Wisata, Raja Ampat",
                quote: "AI Business Matching menghubungkan saya dengan 3 operator tur internasional dalam seminggu. Sebelumnya butuh bertahun-tahun.",
                icon: BrainCircuit,
                warna: "amber",
              },
            ].map((t, i) => {
              const c = warnaMap[t.warna] ?? warnaMap.blue;
              const TIcon = t.icon;
              return (
                <motion.div
                  key={t.nama}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="bg-white border border-slate-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full">
                    <CardContent className="p-5">
                      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-3", c.bg)}>
                        <TIcon className={cn("size-4", c.icon)} />
                      </div>
                      <p className="text-[12px] text-slate-600 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                      <div className="border-t border-slate-50 pt-3">
                        <p className="text-xs font-bold text-slate-800">{t.nama}</p>
                        <p className="text-[10px] text-slate-500">{t.peran}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
