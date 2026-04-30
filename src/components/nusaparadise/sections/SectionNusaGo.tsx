"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  BrainCircuit,
  QrCode,
  ScanEye,
  Gem,
  Landmark,
  MapPin,
  Waves,
  Mountain,
  TreePine,
  Compass,
  Anchor,
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Building2,
  Ship,
  Sparkles,
  ChevronRight,
  Zap,
  Shield,
  Wallet,
  Smartphone,
  Cpu,
  BarChart3,
  Trophy,
  Crown,
  Star,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// DATA: 6 Pilar Digital NusaGo
// ============================================================
interface PilarDigital {
  id: string;
  nama: string;
  tagline: string;
  deskripsi: string;
  icon: React.ElementType;
  warna: string;
  fitur: { judul: string; detail: string }[];
  metrik: { value: string; label: string }[];
}

const PILAR_DIGITAL: PilarDigital[] = [
  {
    id: "gerbang-digital",
    nama: "Gerbang Perjalanan Digital",
    tagline: "Satu Portal, Semua Layanan",
    deskripsi:
      "Platform satu atap yang mengintegrasikan penerbangan, hotel, transportasi, visa, asuransi, dan pengalaman wisata dalam satu login universal — melampaui model Nusuk Saudi Arabia.",
    icon: Plane,
    warna: "blue",
    fitur: [
      { judul: "Integrasi 30+ Maskapai", detail: "Pemesanan penerbangan real-time dengan optimasi rute AI" },
      { judul: "2.000+ Properti Terintegrasi", detail: "Dari homestay desa hingga resort bintang 5 internasional" },
      { judul: "Visa & Imigrasi Digital", detail: "Koneksi langsung sistem pemerintah — proses 80% lebih cepat" },
      { judul: "20+ Bahasa & 50+ Mata Uang", detail: "QRIS, e-wallet, crypto — pembayaran tanpa batas" },
    ],
    metrik: [
      { value: "30+", label: "Maskapai" },
      { value: "2.000+", label: "Properti" },
      { value: "20+", label: "Bahasa" },
      { value: "50+", label: "Mata Uang" },
    ],
  },
  {
    id: "ai-intelligence",
    nama: "AI Travel Intelligence",
    tagline: "Perjalanan yang Berpikir untuk Anda",
    deskripsi:
      "Mesin kecerdasan buatan yang melampaui platform perjalanan mana pun — itinerary cerdas, prediksi keramaian real-time, optimasi biaya otomatis, dan rekomendasi dengan akurasi 91%+.",
    icon: BrainCircuit,
    warna: "violet",
    fitur: [
      { judul: "Itinerary Cerdas", detail: "AI buat rencana perjalanan personal berdasarkan preferensi, cuaca, dan kepadatan" },
      { judul: "Prediksi Keramaian 14 Hari", detail: "Algoritma ML prediksi pengunjung untuk hindari crowd" },
      { judul: "Optimasi Biaya 15-30%", detail: "Bundel dinamis & perutean alternatif tanpa korbankan kualitas" },
      { judul: "91%+ Akurasi Kepuasan", detail: "Dilatih 10M+ perjalanan historis untuk rekomendasi presisi" },
    ],
    metrik: [
      { value: "91%+", label: "Akurasi" },
      { value: "10M+", label: "Data Latih" },
      { value: "15-30%", label: "Hemat Biaya" },
      { value: "14 Hari", label: "Prediksi" },
    ],
  },
  {
    id: "kode-perjalanan",
    nama: "Kode Perjalanan Digital",
    tagline: "Satu QR, Semua Akses",
    deskripsi:
      "Identitas digital terpadu — paspor, visa, asuransi, hotel, penerbangan, dan pembayaran dalam satu kode QR dinamis. Imigrasi 80% lebih cepat, check-in hotel instan, bayar di 50.000+ pedagang.",
    icon: QrCode,
    warna: "emerald",
    fitur: [
      { judul: "QR Identitas Universal", detail: "Satu kode QR terenkripsi berisi seluruh identitas wisatawan" },
      { judul: "Imigrasi Express", detail: "Lewati antrian — pencocokan biometrik 80% lebih cepat" },
      { judul: "E-Wallet Multi-Mata Uang", detail: "USD, EUR, SGD, IDR, crypto — konversi otomatis biaya terendah" },
      { judul: "50.000+ Pedagang", detail: "Bayar langsung dengan biaya 2% vs 3-5% kartu internasional" },
    ],
    metrik: [
      { value: "1", label: "QR Code" },
      { value: "80%", label: "Lebih Cepat" },
      { value: "50K+", label: "Pedagang" },
      { value: "2%", label: "Biaya Transaksi" },
    ],
  },
  {
    id: "ar-vr",
    nama: "AR & VR Experience",
    tagline: "Lihat, Rasakan, Jelajahi Sebelum Tiba",
    deskripsi:
      "Teknologi augmented & virtual reality yang mengubah cara wisatawan berinteraksi — identifikasi 1.000+ spesies laut real-time, rekonstruksi sejarah AR, simulasi diving VR, dan pengalaman romantis constellasi.",
    icon: ScanEye,
    warna: "cyan",
    fitur: [
      { judul: "Identifikasi Spesies Laut", detail: "Computer vision kenali 1.000+ spesies + info konservasi" },
      { judul: "Rekonstruksi Warisan Budaya", detail: "AR tampilkan evolusi historis situs purba secara real-time" },
      { judul: "Simulasi Diving VR", detail: "Persiapan pra-menyelam di lingkungan virtual situs tujuan" },
      { judul: "Constellation Stargazing", detail: "AR pemandu langit malam untuk pengalaman romantis" },
    ],
    metrik: [
      { value: "1.000+", label: "Spesies" },
      { value: "360°", label: "Virtual Tour" },
      { value: "35-45%", label: "Konversi Naik" },
      { value: "Real-Time", label: "Overlay" },
    ],
  },
  {
    id: "nft-metaverse",
    nama: "NFT & Metaverse Resort",
    tagline: "Kepemilikan Digital, Pengalaman Nyata",
    deskripsi:
      "Klub Pantai Digital berbasis NFT — keanggotaan eksklusif dengan profit-sharing 5-10%, voting hak, diskon 20% seumur hidup. Resort virtual di metaverse untuk tur pra-booking dengan peningkatan konversi 35-45%.",
    icon: Gem,
    warna: "amber",
    fitur: [
      { judul: "Beach Club NFT", detail: "Keanggotaan eksklusif — profit-sharing 5-10% + voting hak" },
      { judul: "Digital Twin 100 Resort", detail: "Replika virtual di Decentraland, Sandbox, Roblox" },
      { judul: "Virtual Diving Expedition", detail: "Tur bawah laut 360° berpemandu — 100 juta+ peserta potensial" },
      { judul: "Seni Digital Edisi Terbatas", detail: "NFT destinasi karya seniman ternama — royalti 70% kreator" },
    ],
    metrik: [
      { value: "5-10%", label: "Profit Share" },
      { value: "100", label: "Digital Twin" },
      { value: "20%", label: "Diskon Seumur Hidup" },
      { value: "$3B", label: "Peluang VR" },
    ],
  },
  {
    id: "portal-investasi",
    nama: "Portal Investasi Global",
    tagline: "Modal Dunia untuk Surga Indonesia",
    deskripsi:
      "Pipeline 300+ proyek pengembangan dengan due diligence lengkap — dari resort bintang 5 hingga guesthouse komunitas. Koneksi ke ADB, BlackRock, IFC, dan dana dampak global. Perizinan 30-45 hari vs 120-180 hari standar.",
    icon: Landmark,
    warna: "rose",
    fitur: [
      { judul: "300+ Proyek Terverifikasi", detail: "Tier 1-4: Resort mewah hingga guesthouse komunitas — IRR 8-18%" },
      { judul: "Koneksi Modal Global", detail: "ADB, IFC, BlackRock, dana dampak — ekuitas, utang, blended finance" },
      { judul: "Perizinan Cepat 30-45 Hari", detail: "Jalur cepat terintegrasi OSS vs 120-180 hari konvensional" },
      { judul: "Dashboard Real-Time", detail: "KPI langsung, okupansi, tren pendapatan, kepuasan tamu" },
    ],
    metrik: [
      { value: "300+", label: "Proyek" },
      { value: "8-18%", label: "IRR" },
      { value: "30-45", label: "Hari Izin" },
      { value: "4-7 Th", label: "Payback" },
    ],
  },
];

// ============================================================
// DATA: 7 Kluster JP3 (Jaringan Pengembangan Pantai Paradise)
// ============================================================
interface KlusterJP3 {
  id: string;
  nama: string;
  destinasi: number;
  wilayah: string;
  icon: React.ElementType;
  warna: string;
  highlight: string;
  pengunjung: string;
  pendapatan: string;
  pekerjaan: string;
}

const KLUSTER_JP3: KlusterJP3[] = [
  {
    id: "bali-nusra",
    nama: "Bali & Nusa Tenggara",
    destinasi: 50,
    wilayah: "Bali, Lombok, Flores, Komodo, Sumba, Roti",
    icon: Waves,
    warna: "blue",
    highlight: "Surga Tropis Premium",
    pengunjung: "5 Juta",
    pendapatan: "USD 8 M",
    pekerjaan: "100K+",
  },
  {
    id: "segitiga-karang",
    nama: "Hub Biodiversitas Segitiga Karang",
    destinasi: 40,
    wilayah: "Raja Ampat, Bunaken, Wakatobi, Papua",
    icon: Compass,
    warna: "emerald",
    highlight: "27% Spesies Laut Dunia",
    pengunjung: "3 Juta",
    pendapatan: "USD 6 M",
    pekerjaan: "80K+",
  },
  {
    id: "budaya-pusat",
    nama: "Pariwisata Budaya Kepulauan Pusat",
    destinasi: 45,
    wilayah: "Sumba, Roti, Timor, Maluku, Banda",
    icon: Mountain,
    warna: "amber",
    highlight: "Imersi Budaya Autentik",
    pengunjung: "2 Juta",
    pendapatan: "USD 4 M",
    pekerjaan: "60K+",
  },
  {
    id: "jawa-gerbang",
    nama: "Pantai Jawa Barat & Banten Gerbang",
    destinasi: 35,
    wilayah: "Krakatau, Ujung Kulon, Seribu, Pangandaran",
    icon: Building2,
    warna: "cyan",
    highlight: "30 Menit dari Jakarta",
    pengunjung: "4 Juta",
    pendapatan: "USD 5 M",
    pekerjaan: "70K+",
  },
  {
    id: "sumatra-samudra",
    nama: "Pantai Sumatra Gerbang Samudra Hindia",
    destinasi: 50,
    wilayah: "Mentawai, Aceh, Riau, Jambi, Bengkulu",
    icon: Ship,
    warna: "teal",
    highlight: "Ibukota Selancar Dunia",
    pengunjung: "3 Juta",
    pendapatan: "USD 4,5 M",
    pekerjaan: "60K+",
  },
  {
    id: "kalimantan",
    nama: "Perbatasan Kalimantan",
    destinasi: 40,
    wilayah: "Derawan, Wetland, Sungai Orangutan",
    icon: TreePine,
    warna: "green",
    highlight: "Sanctuary Orangutan",
    pengunjung: "1,5 Juta",
    pendapatan: "USD 2 M",
    pekerjaan: "40K+",
  },
  {
    id: "sulawesi-ext",
    nama: "Sulawesi Extended",
    destinasi: 40,
    wilayah: "Bunaken, Makassar, Tenggara, Koridor Angin",
    icon: Anchor,
    warna: "sky",
    highlight: "Koridor Angin Terbaik",
    pengunjung: "2,5 Juta",
    pendapatan: "USD 3,5 M",
    pekerjaan: "50K+",
  },
];

// ============================================================
// DATA: Indonesia vs Maldives Comparison
// ============================================================
const COMPARISON_DATA = [
  { dimensi: "Garis Pantai", indonesia: "108.000 km", maldives: "<1.000 km", multiplier: "100x" },
  { dimensi: "Jumlah Pulau", indonesia: "17.504", maldives: "1.190", multiplier: "14x" },
  { dimensi: "Spesies Karang", indonesia: "600+", maldives: "400", multiplier: "1,5x" },
  { dimensi: "Spesies Ikan", indonesia: "3.000+", maldives: "1.500", multiplier: "2x" },
  { dimensi: "Situs Diving", indonesia: "3.000+", maldives: "500+", multiplier: "6x" },
  { dimensi: "Bandara Internasional", indonesia: "35+", maldives: "1", multiplier: "35x" },
  { dimensi: "Kelompok Etnis", indonesia: "700+", maldives: "Terbatas", multiplier: "Jauh Lebih Kaya" },
  { dimensi: "Jenis Pantai", indonesia: "5 Tipe", maldives: "1 Tipe", multiplier: "5x" },
];

// ============================================================
// Color Maps
// ============================================================
const warnaPilarMap: Record<string, { bg: string; border: string; text: string; badge: string; icon: string; gradient: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",  text: "text-blue-600",  badge: "bg-blue-100 text-blue-700",  icon: "text-blue-500", gradient: "from-blue-500 to-blue-700" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200", text: "text-violet-600", badge: "bg-violet-100 text-violet-700", icon: "text-violet-500", gradient: "from-violet-500 to-violet-700" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700", icon: "text-emerald-500", gradient: "from-emerald-500 to-emerald-700" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",   text: "text-cyan-600",   badge: "bg-cyan-100 text-cyan-700",   icon: "text-cyan-500", gradient: "from-cyan-500 to-cyan-700" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200", text: "text-amber-600", badge: "bg-amber-100 text-amber-700", icon: "text-amber-500", gradient: "from-amber-500 to-amber-700" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",   text: "text-rose-600",   badge: "bg-rose-100 text-rose-700",   icon: "text-rose-500", gradient: "from-rose-500 to-rose-700" },
};

const warnaKlusterMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",  text: "text-blue-600",  icon: "text-blue-500" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", icon: "text-emerald-500" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200", text: "text-amber-600", icon: "text-amber-500" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",   text: "text-cyan-600",   icon: "text-cyan-500" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",   text: "text-teal-600",   icon: "text-teal-500" },
  green:   { bg: "bg-green-50",   border: "border-green-200",  text: "text-green-600",  icon: "text-green-500" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",    text: "text-sky-600",    icon: "text-sky-500" },
};

// ============================================================
// SUB-COMPONENTS
// ============================================================

/** Kartu Metrik Utama */
function KartuMetrik({ value, label, icon: Icon, delay }: { value: string; label: string; icon: React.ElementType; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-5 text-center border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 mx-auto mb-3">
        <Icon className="size-5 text-blue-600" />
      </div>
      <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-800 tabular-nums">{value}</div>
      <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

/** Pilar Selector (Desktop) */
function PilarSelector({ pilar, isActive, onClick }: { pilar: PilarDigital; isActive: boolean; onClick: () => void }) {
  const c = warnaPilarMap[pilar.warna] ?? warnaPilarMap.blue;
  const Icon = pilar.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all duration-300 w-full group",
        isActive
          ? cn(c.bg, c.border, "border shadow-sm", "scale-[1.02]")
          : "bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300",
        isActive ? cn("bg-gradient-to-br", c.gradient, "shadow-md") : "bg-slate-50 border border-slate-100"
      )}>
        <Icon className={cn("size-5", isActive ? "text-white" : "text-slate-400")} />
      </div>
      <div className="min-w-0 flex-1">
        <span className={cn(
          "text-[12px] font-bold block truncate transition-colors",
          isActive ? c.text : "text-slate-700 group-hover:text-slate-900"
        )}>
          {pilar.nama}
        </span>
        <span className="text-[10px] text-slate-400 block truncate">{pilar.tagline}</span>
      </div>
      {isActive && <ChevronRight className={cn("size-4 shrink-0", c.text)} />}
    </button>
  );
}

/** Pilar Detail Panel */
function PilarDetail({ pilar }: { pilar: PilarDigital }) {
  const c = warnaPilarMap[pilar.warna] ?? warnaPilarMap.blue;
  const Icon = pilar.icon;

  return (
    <motion.div
      key={pilar.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn("border overflow-hidden", c.border)}>
        <CardContent className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={cn("flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br shrink-0 shadow-lg", c.gradient)}>
              <Icon className="size-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className={cn("text-xl sm:text-2xl font-bold", c.text)}>{pilar.nama}</h3>
              <p className="text-sm text-slate-500 mt-1">{pilar.tagline}</p>
            </div>
          </div>

          {/* Deskripsi */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">{pilar.deskripsi}</p>

          {/* Metrik */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {pilar.metrik.map((m) => (
              <div key={m.label} className={cn("rounded-xl px-3 py-3 text-center", c.bg)}>
                <div className={cn("font-mono text-lg sm:text-xl font-bold", c.text)}>{m.value}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Fitur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pilar.fitur.map((f) => (
              <div key={f.judul} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className={cn("size-4 shrink-0 mt-0.5", c.icon)} />
                <div>
                  <div className="text-[12px] font-semibold text-slate-800">{f.judul}</div>
                  <div className="text-[11px] text-slate-500 leading-relaxed">{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/** Kartu Kluster JP3 */
function KartuKluster({ kluster, index }: { kluster: KlusterJP3; index: number }) {
  const c = warnaKlusterMap[kluster.warna] ?? warnaKlusterMap.blue;
  const Icon = kluster.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Card className="bg-white border border-slate-100 overflow-hidden group hover:shadow-lg hover:border-blue-200 transition-all duration-300">
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className={cn("flex items-center justify-center w-11 h-11 rounded-xl", c.bg)}>
              <Icon className={cn("size-5", c.icon)} />
            </div>
            <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full", c.bg, c.text)}>
              {kluster.destinasi} Destinasi
            </span>
          </div>

          <h4 className="text-sm font-bold text-slate-800 mb-1 leading-tight">{kluster.nama}</h4>
          <p className="text-[11px] text-slate-500 mb-1">{kluster.wilayah}</p>
          <div className={cn("text-[10px] font-semibold mb-3", c.text)}>{kluster.highlight}</div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-50">
            <div className="text-center">
              <div className="font-mono text-xs font-bold text-slate-800">{kluster.pengunjung}</div>
              <div className="text-[9px] text-slate-400">Pengunjung</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xs font-bold text-slate-800">{kluster.pendapatan}</div>
              <div className="text-[9px] text-slate-400">Pendapatan</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xs font-bold text-slate-800">{kluster.pekerjaan}</div>
              <div className="text-[9px] text-slate-400">Pekerjaan</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/** Comparison Row */
function ComparisonRow({ item, index }: { item: typeof COMPARISON_DATA[number]; index: number }) {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors"
    >
      <td className="py-3 px-4 text-[12px] font-semibold text-slate-700">{item.dimensi}</td>
      <td className="py-3 px-4 text-[12px] font-bold text-blue-600 text-center">{item.indonesia}</td>
      <td className="py-3 px-4 text-[12px] text-slate-500 text-center">{item.maldives}</td>
      <td className="py-3 px-4 text-center">
        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">{item.multiplier}</span>
      </td>
    </motion.tr>
  );
}

// ============================================================
// MAIN SECTION: SectionNusaGo
// ============================================================
export default function SectionNusaGo() {
  const [activePilar, setActivePilar] = useState("gerbang-digital");
  const { openModal } = useNavigation();
  const activePilarData = PILAR_DIGITAL.find((p) => p.id === activePilar) ?? PILAR_DIGITAL[0];

  return (
    <section id="nusago" className="relative">
      {/* Background ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-violet-50/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* ============================================================ */}
        {/* HERO: NusaGo Brand Header */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 mb-5">
            <Rocket className="size-3.5 text-blue-600" />
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Platform Digital NusaParadise</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            NusaGo —{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Ekosistem Global Surga Indonesia
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
            Inisiatif platform pariwisata paling ambisius dan teknologi canggih di dunia — melampaui agregasi perjalanan konvensional untuk menetapkan Indonesia sebagai <span className="text-slate-800 font-semibold">destinasi surga global yang tak tertandingi</span>.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {[
              { value: "USD 50M", label: "Pendapatan 2030", icon: TrendingUp },
              { value: "300", label: "Destinasi Premium", icon: MapPin },
              { value: "1 Juta+", label: "Pekerjaan Langsung", icon: Users },
              { value: "30 Juta", label: "Target Wisman 2030", icon: Globe },
            ].map((m, i) => (
              <KartuMetrik key={m.label} {...m} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 6 PILLAR DIGITAL — Interactive Tabs */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 mb-4">
              <Cpu className="size-3 text-violet-500" />
              <span className="text-[10px] font-semibold text-violet-600 uppercase tracking-widest">6 Pilar Digital</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Arsitektur Ekosistem{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Canggih</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Melampaui Nusuk Saudi &amp; platform perjalanan mana pun — NusaGo mengintegrasikan AI, AR/VR, blockchain, dan metaverse dalam satu ekosistem pariwisata Digital 6.0.
            </p>
          </div>

          {/* Pilar Tabs + Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Sidebar: Pilar Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {PILAR_DIGITAL.map((pilar) => (
                <PilarSelector
                  key={pilar.id}
                  pilar={pilar}
                  isActive={activePilar === pilar.id}
                  onClick={() => setActivePilar(pilar.id)}
                />
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <PilarDetail pilar={activePilarData} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 7 KLUSTER JP3 — 300 Destinasi */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <Waves className="size-3 text-emerald-500" />
              <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest">JP3 Initiative</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              300 Destinasi,{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">7 Kluster Nusantara</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Inisiatif Pengembangan Pantai Paradise (JP3) — penyebaran geografis strategis 300 destinasi premium memastikan tidak ada wilayah dikecualikan, menghilangkan konsentrasi kekayaan di satu titik.
            </p>
          </div>

          {/* Total Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { value: "300", label: "Total Destinasi", icon: MapPin, color: "blue" },
              { value: "USD 33M+", label: "Total Pendapatan", icon: TrendingUp, color: "emerald" },
              { value: "460K+", label: "Total Pekerjaan", icon: Users, color: "amber" },
              { value: "21 Juta+", label: "Total Pengunjung", icon: Globe, color: "cyan" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 text-center border border-slate-700"
                >
                  <Icon className="size-5 text-cyan-400 mx-auto mb-2" />
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">{s.value}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Kluster Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {KLUSTER_JP3.map((kluster, index) => (
              <KartuKluster key={kluster.id} kluster={kluster} index={index} />
            ))}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* INDONESIA vs MALDIVES COMPARISON */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-4">
              <Trophy className="size-3 text-amber-500" />
              <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-widest">Keunggulan Kompetitif</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Indonesia vs Maladewa —{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Paradoks Pasar</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Aset alam Indonesia superior di semua dimensi, namun hanya menangkap 1-2% pasar liburan tropis mewah. NusaGo membuka peluang <span className="font-semibold text-slate-700">USD 500+ miliar</span> yang belum terealisasi.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800 to-slate-900">
                    <th className="py-3 px-4 text-left text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Dimensi</th>
                    <th className="py-3 px-4 text-center text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                      <div className="flex items-center justify-center gap-1.5">
                        <Crown className="size-3.5" />
                        Indonesia
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Maladewa</th>
                    <th className="py-3 px-4 text-center text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">Pengganda</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((item, i) => (
                    <ComparisonRow key={item.dimensi} item={item} index={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* KONSIERGE AI + DIGITAL TRAVEL CODE HIGHLIGHT */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Konsierge AI */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-violet-700 to-blue-800 p-6 sm:p-8 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-4 w-fit">
                  <Sparkles className="size-3 text-white" />
                  <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest">AI Konsierge 24/7</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Asisten Pribadi Wisatawan</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  Personalisasi perhotelan 24/7 multilingual — memproses 50M+ percakapan, terjemahan 20+ bahasa sadar konteks, bantuan proaktif sebelum diminta, dan respons darurat 2 menit.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: BrainCircuit, label: "50M+ Percakapan" },
                    { icon: Globe, label: "20+ Bahasa" },
                    { icon: Smartphone, label: "5 Rekomendasi/Hari" },
                    { icon: Shield, label: "Respons 2 Menit" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5 border border-white/10">
                      <f.icon className="size-4 text-cyan-300 shrink-0" />
                      <span className="text-[11px] font-medium text-white/90">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kode Perjalanan Digital */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-6 sm:p-8 text-white">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/3" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-4 w-fit">
                  <QrCode className="size-3 text-white" />
                  <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest">Satu Identitas Digital</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Kode Perjalanan Digital</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  Paspor, visa, asuransi, hotel, penerbangan, dan pembayaran dalam satu QR dinamis — imigrasi 80% lebih cepat, check-in instan, bayar di 50.000+ pedagang.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: QrCode, label: "1 QR Universal" },
                    { icon: Wallet, label: "E-Wallet Multi-Valas" },
                    { icon: Zap, label: "Imigrasi Express" },
                    { icon: Shield, label: "Biometrik Aman" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5 border border-white/10">
                      <f.icon className="size-4 text-emerald-300 shrink-0" />
                      <span className="text-[11px] font-medium text-white/90">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* TESIS INVESTASI — Grand CTA */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-center"
        >
          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-5">
              <Star className="size-3.5 text-amber-400" />
              <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">Tesis Investasi Strategis 2025-2030</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Peluang Pasar{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                USD 500+ Miliar
              </span>
              <br />
              Menunggu Pengembangan Sistematis
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Indonesia memiliki aset alam pariwisata superior dibanding Maladewa namun hanya menangkap 1-2% pasar liburan tropis mewah global.
              NusaGo membuka peluang ini melalui pengembangan infrastruktur sistematis, inovasi digital, dan model ekonomi berpusat komunitas.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              {[
                { value: "USD 120-150M", label: "Investasi Infrastruktur" },
                { value: "IDR 200T", label: "Pembayaran Masyarakat/th" },
                { value: "IDR 160T", label: "Penerimaan Pajak/th" },
                { value: "3 Juta", label: "Total Pekerjaan" },
              ].map((m) => (
                <div key={m.label} className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-4">
                  <div className="font-mono text-lg sm:text-xl font-bold text-white tabular-nums">{m.value}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => openModal("nusago-investasi")}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Landmark className="size-4" />
                <span>Portal Investasi NusaGo</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => openModal("gabung-ekosistem-cta")}
                className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <span>Bergabung Ekosistem</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
