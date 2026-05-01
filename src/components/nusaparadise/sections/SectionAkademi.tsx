"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  Rocket,
  BrainCircuit,
  Globe,
  Globe2,
  Shield,
  Leaf,
  Star,
  FileCheck,
  Store,
  TrendingUp,
  Crown,
  Users,
  Wallet,
  BookOpen,
  Target,
  RefreshCw,
  Hotel,
  Heart,
  Gem,
  ShieldCheck,
  Network,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ============================================================
// DATA: 4 Main Pillars
// ============================================================

interface PillarFeature {
  nama: string;
  icon: LucideIcon;
  deskripsi: string;
}

interface Pillar {
  id: string;
  nomor: string;
  nama: string;
  icon: LucideIcon;
  warna: string;
  tagline: string;
  deskripsi: string;
  fitur: PillarFeature[];
  metrik: { value: string; label: string }[];
}

const PILLAR_DATA: Pillar[] = [
  {
    id: "sertifikasi-global",
    nomor: "01",
    nama: "Sertifikasi & Akreditasi Global",
    icon: Award,
    warna: "blue",
    tagline: "Standar Dunia, Sertifikat Indonesia",
    deskripsi:
      "Badan akreditasi pariwisata pertama di Indonesia yang menggabungkan standar Forbes Travel Guide, Green Globe 21, Blue Flag Denmark, dan ISO 9001 dalam satu framework terintegrasi.",
    fitur: [
      { nama: "Blue Flag Nusantara", icon: Shield, deskripsi: "Sertifikasi pantai & marina standar Denmark" },
      { nama: "Green Globe 21 Certification", icon: Leaf, deskripsi: "Sertifikasi ekowisata standar global" },
      { nama: "Halal Tourism Standard", icon: Star, deskripsi: "Sertifikasi halal tourism internasional" },
      { nama: "ISO 9001:2015 Tourism", icon: FileCheck, deskripsi: "Quality management untuk hospitality" },
    ],
    metrik: [
      { value: "4 Badan", label: "Akreditasi Terintegrasi" },
      { value: "38 Provinsi", label: "Jangkauan Nasional" },
      { value: "2.847", label: "Tersertifikasi" },
      { value: "100%", label: "Proses Online" },
    ],
  },
  {
    id: "pelatihan-scaleup",
    nomor: "02",
    nama: "Pelatihan & Training Scale-Up",
    icon: Rocket,
    warna: "emerald",
    tagline: "Dari UMKM hingga Unicorn Pariwisata",
    deskripsi:
      "Program akselerasi bertingkat yang terinspirasi Y Combinator & Techstars — dari bootcamp UMKM 4 minggu hingga scale-up academy 12 minggu untuk kandidat unicorn pariwisata.",
    fitur: [
      { nama: "UMKM Bootcamp", icon: Store, deskripsi: "4 minggu intensif untuk UMKM wisata" },
      { nama: "Scale-Up Academy", icon: TrendingUp, deskripsi: "12 minggu akselerasi bisnis pariwisata" },
      { nama: "Unicorn Pathway", icon: Crown, deskripsi: "Jalur khusus kandidat unicorn hospitality" },
      { nama: "Global Mentorship", icon: Users, deskripsi: "Mentoring dari CEO hospitality dunia" },
    ],
    metrik: [
      { value: "3 Tier", label: "Level Akselerasi" },
      { value: "12 Minggu", label: "Program Terpanjang" },
      { value: "50+", label: "Mentor Global" },
      { value: "85%", label: "Success Rate" },
    ],
  },
  {
    id: "upgrade-skill",
    nomor: "03",
    nama: "Upgrade Skill Karyawan",
    icon: BrainCircuit,
    warna: "violet",
    tagline: "SkillsFuture Indonesia",
    deskripsi:
      "Terinspirasi Singapore SkillsFuture — setiap karyawan pariwisata Indonesia mendapat kredit pelatihan Rp 5 juta/tahun untuk upgrade kompetensi melalui 500+ kursus bersertifikat.",
    fitur: [
      { nama: "SkillsFuture Credits", icon: Wallet, deskripsi: "Kredit Rp 5 juta/tahun per karyawan" },
      { nama: "500+ Micro-Courses", icon: BookOpen, deskripsi: "Kursus singkat bersertifikat blockchain" },
      { nama: "Competency Mapping", icon: Target, deskripsi: "Peta kompetensi AI untuk karir terstruktur" },
      { nama: "Cross-Industry Skills", icon: RefreshCw, deskripsi: "Skill transferable lintas industri" },
    ],
    metrik: [
      { value: "Rp 5Jt", label: "Kredit/Tahun/Karyawan" },
      { value: "500+", label: "Kursus Tersedia" },
      { value: "AI-Matched", label: "Rekomendasi Cerdas" },
      { value: "Blockchain", label: "Sertifikat Verifiable" },
    ],
  },
  {
    id: "upgrade-perusahaan",
    nomor: "04",
    nama: "Upgrade Perusahaan Internasional",
    icon: Globe,
    warna: "amber",
    tagline: "Dari Lokal ke Global Player",
    deskripsi:
      "Program transformasi perusahaan pariwisata Indonesia agar siap beroperasi di pasar internasional — benchmark Swiss Hospitality, Japanese Omotenashi, dan UAE Luxury Service.",
    fitur: [
      { nama: "Swiss Hospitality Standard", icon: Hotel, deskripsi: "Benchmark kerelawanan Swiss" },
      { nama: "Japanese Omotenashi", icon: Heart, deskripsi: "Filosofi pelayanan sempurna Jepang" },
      { nama: "UAE Luxury Service", icon: Gem, deskripsi: "Standar layanan mewah UAE" },
      { nama: "International Compliance", icon: ShieldCheck, deskripsi: "Kepatuhan regulasi 50+ negara" },
    ],
    metrik: [
      { value: "3 Benchmark", label: "Standar Internasional" },
      { value: "50+", label: "Negara Terakreditasi" },
      { value: "ISO", label: "Certified Process" },
      { value: "12 Bulan", label: "Program Transformasi" },
    ],
  },
];

// ============================================================
// DATA: Upgrade Asosiasi
// ============================================================

interface Asosiasi {
  id: string;
  nama: string;
  icon: LucideIcon;
  warna: string;
  deskripsi: string;
}

const ASOSIASI_DATA: Asosiasi[] = [
  {
    id: "federasi-digital",
    nama: "Federasi Digital",
    icon: Network,
    warna: "cyan",
    deskripsi: "Transformasi asosiasi tradisional menjadi federasi digital dengan governance transparan, voting blockchain, dan SHU real-time.",
  },
  {
    id: "global-association",
    nama: "Global Association Network",
    icon: Globe2,
    warna: "blue",
    deskripsi: "Koneksi dengan 100+ asosiasi pariwisata internasional — WTO, UNWTO, PATA, ASTA untuk pertukaran knowledge dan market access.",
  },
  {
    id: "women-leadership",
    nama: "Women in Tourism Leadership",
    icon: Sparkles,
    warna: "rose",
    deskripsi: "Terinspirasi UN Women — program akselerasi kepemimpinan perempuan di industri pariwisata untuk mencapai 40% representasi di board level.",
  },
  {
    id: "youth-ambassador",
    nama: "Youth Tourism Ambassador",
    icon: GraduationCap,
    warna: "emerald",
    deskripsi: "Terinspirasi JET Programme Jepang — mengirim 1.000 pemuda Indonesia ke 30+ negara sebagai duta wisata budaya selama 6-12 bulan.",
  },
];

// ============================================================
// DATA: Innovative Global Programs
// ============================================================

interface GlobalProgram {
  id: string;
  bendera: string;
  nama: string;
  deskripsi: string;
}

const GLOBAL_PROGRAMS: GlobalProgram[] = [
  {
    id: "duale-ausbildung",
    bendera: "🇩🇪",
    nama: "Duale Ausbildung Pariwisata",
    deskripsi: "Model pendidikan ganda Jerman: 70% praktik di perusahaan, 30% teori di sekolah. Lulusan langsung kompeten dan dipekerjakan.",
  },
  {
    id: "skillsfuture-credits",
    bendera: "🇸🇬",
    nama: "Tourism SkillsFuture Credits",
    deskripsi: "Setiap warga negara Indonesia di industri pariwisata mendapat kredit belajar Rp 5 juta/tahun dari pemerintah — bisa dipakai seumur hidup.",
  },
  {
    id: "omotenashi-cert",
    bendera: "🇯🇵",
    nama: "Omotenashi Certification",
    deskripsi: 'Standar pelayanan sempurna ala Jepang — sertifikasi 5 level dari basic hingga master dalam filosofi pelayanan "meiwaku" (tidak merepotkan).',
  },
  {
    id: "swiss-hotel-school",
    bendera: "🇨🇭",
    nama: "Swiss Hotel School Satellite",
    deskripsi: "Kampus satelit hotel school terbaik dunia langsung di Indonesia — lulusan mendapat dual degree Swiss-Indonesia yang diakui global.",
  },
  {
    id: "blue-flag-beach",
    bendera: "🇩🇰",
    nama: "Blue Flag Beach Certification",
    deskripsi: "Sertifikasi pantai internasional asal Denmark — menjamin standar kebersihan, keselamatan, dan lingkungan yang menarik wisatawan Eropa.",
  },
  {
    id: "finland-education",
    bendera: "🇫🇮",
    nama: "Finland Education Tourism Model",
    deskripsi: "Model Finlandia — mengubah sekolah dan universitas menjadi destinasi edukasi wisata yang menghasilkan pendapatan sekaligus mencetak SDM.",
  },
];

// ============================================================
// Color Maps
// ============================================================

const warnaMap: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    badge: string;
    icon: string;
    gradient: string;
    glow: string;
  }
> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    icon: "text-blue-500",
    gradient: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/20",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-600",
    badge: "bg-violet-100 text-violet-700",
    icon: "text-violet-500",
    gradient: "from-violet-500 to-violet-700",
    glow: "shadow-violet-500/20",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "text-emerald-500",
    gradient: "from-emerald-500 to-emerald-700",
    glow: "shadow-emerald-500/20",
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
    icon: "text-cyan-500",
    gradient: "from-cyan-500 to-cyan-700",
    glow: "shadow-cyan-500/20",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    icon: "text-amber-500",
    gradient: "from-amber-500 to-amber-700",
    glow: "shadow-amber-500/20",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
    icon: "text-rose-500",
    gradient: "from-rose-500 to-rose-700",
    glow: "shadow-rose-500/20",
  },
};

// ============================================================
// SUB-COMPONENTS
// ============================================================

/** Pillar Selector Button (Sidebar) */
function PillarSelector({
  data,
  index,
  isActive,
  onClick,
}: {
  data: Pillar;
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
      transition={{ duration: 0.4, delay: index * 0.08 }}
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
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300",
            isActive
              ? cn("bg-gradient-to-br", c.gradient, "shadow-lg", c.glow)
              : "bg-slate-50 border border-slate-100"
          )}
        >
          {isActive ? (
            <Icon className="size-5 text-white" />
          ) : (
            <span className={cn("text-xs font-bold text-slate-400")}>
              {data.nomor}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span
            className={cn(
              "text-[12px] font-bold truncate block transition-colors",
              isActive ? c.text : "text-slate-700 group-hover:text-slate-900"
            )}
          >
            {data.nama}
          </span>
          <span className="text-[10px] text-slate-400 block truncate mt-0.5">
            {data.tagline}
          </span>
        </div>
        <ChevronRight
          className={cn(
            "size-4 shrink-0 mt-2 transition-all duration-300",
            isActive ? cn(c.text, "translate-x-0.5") : "text-slate-300"
          )}
        />
      </button>
    </motion.div>
  );
}

/** Pillar Detail Panel */
function PillarDetail({ data }: { data: Pillar }) {
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
            <div
              className={cn(
                "flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br shrink-0 shadow-lg",
                c.gradient,
                c.glow
              )}
            >
              <Icon className="size-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                    c.badge
                  )}
                >
                  Pilar #{data.nomor}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wider">
                  Global Standard
                </span>
              </div>
              <h3 className={cn("text-xl sm:text-2xl font-bold", c.text)}>
                {data.nama}
              </h3>
              <p className="text-sm text-slate-500 mt-1 italic">
                &ldquo;{data.tagline}&rdquo;
              </p>
            </div>
          </div>

          {/* Deskripsi */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {data.deskripsi}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {data.fitur.map((f) => {
              const FIcon = f.icon;
              return (
                <div
                  key={f.nama}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-xl border transition-all duration-300 hover:shadow-sm",
                    c.bg,
                    c.border
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-9 h-9 rounded-lg shrink-0 bg-gradient-to-br",
                      c.gradient
                    )}
                  >
                    <FIcon className="size-4 text-white" />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "text-[12px] font-bold leading-tight",
                        c.text
                      )}
                    >
                      {f.nama}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      {f.deskripsi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Metrik */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.metrik.map((m) => (
              <div
                key={m.label}
                className={cn("rounded-xl px-3 py-3 text-center", c.bg)}
              >
                <div
                  className={cn(
                    "font-mono text-lg sm:text-xl font-bold",
                    c.text
                  )}
                >
                  {m.value}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/** Asosiasi Upgrade Card */
function AsosiasiCard({
  data,
  index,
}: {
  data: Asosiasi;
  index: number;
}) {
  const c = warnaMap[data.warna] ?? warnaMap.blue;
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card className="bg-white border border-slate-100 overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-5">
          <div className="flex items-start gap-3 mb-3">
            <div
              className={cn(
                "flex items-center justify-center w-11 h-11 rounded-xl shrink-0 bg-gradient-to-br",
                c.gradient,
                "shadow-md",
                c.glow
              )}
            >
              <Icon className="size-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-800 leading-tight">
                {data.nama}
              </h4>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            {data.deskripsi}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// MAIN SECTION
// ============================================================
export default function SectionAkademi() {
  const [activePillar, setActivePillar] = useState("sertifikasi-global");
  const activeData =
    PILLAR_DATA.find((p) => p.id === activePillar) ?? PILLAR_DATA[0];

  return (
    <section
      id="akademi-peradaban"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* Ambient Blur Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] animate-float" />
        <div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-50/20 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-amber-50/25 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* SECTION HEADER */}
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
            <GraduationCap className="size-3.5 text-blue-600" />
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">
              AKADEMI PERADABAN
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Akademi Peradaban —{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
              Pusat Unggulan SDM Pariwisata Dunia
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Mengadopsi model pelatihan terbaik dari seluruh penjuru dunia —
            dari Jerman, Singapura, Swiss, Jepang, Denmark, hingga Finlandia —
            untuk mencetak{" "}
            <span className="text-slate-800 font-semibold">
              SDM pariwisata kelas dunia Indonesia
            </span>
            .
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* 4 MAIN PILLARS — Interactive Tabs */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          {/* Pillar Sub-header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 mb-4">
              <Zap className="size-3 text-violet-500" />
              <span className="text-[10px] font-semibold text-violet-600 uppercase tracking-widest">
                4 Pilar Utama Akademi
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Empat Pilar{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Akademi Peradaban
              </span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Klik setiap pilar untuk melihat detail program, fitur unggulan,
              dan metrik pencapaian — semuanya mengadopsi standar terbaik dunia.
            </p>
          </div>

          {/* Tabs + Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Sidebar: Pillar Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-2 max-h-[600px] overflow-y-auto custom-scrollbar pr-1">
              {PILLAR_DATA.map((p, i) => (
                <PillarSelector
                  key={p.id}
                  data={p}
                  index={i}
                  isActive={activePillar === p.id}
                  onClick={() => setActivePillar(p.id)}
                />
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <PillarDetail data={activeData} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* UPGRADE ASOSIASI SECTION */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-4">
              <Network className="size-3 text-cyan-500" />
              <span className="text-[10px] font-semibold text-cyan-600 uppercase tracking-widest">
                Upgrade Asosiasi
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Transformasi Asosiasi Menuju{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Era Digital Global
              </span>
            </h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Asosiasi bukan lagi sekadar wadah — ini adalah platform akselerasi
              yang menghubungkan, memperkuat, dan memperluas dampak anggota di
              kancah global.
            </p>
          </div>

          {/* Asosiasi Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ASOSIASI_DATA.map((a, i) => (
              <AsosiasiCard key={a.id} data={a} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* INNOVATIVE GLOBAL PROGRAMS — Dark Gradient Section */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12">
            {/* Decorative Circles & Shimmer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[80px]" />
              <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-amber-500/8 rounded-full blur-[80px]" />
              <div className="absolute bottom-10 left-10 w-[180px] h-[180px] bg-cyan-500/8 rounded-full blur-[70px]" />
              {/* Shimmer Lines */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -skew-x-12 animate-pulse" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="relative z-10">
              {/* Section Header */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-5">
                <Globe className="size-3.5 text-cyan-400" />
                <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">
                  Program Global Pertama di Indonesia
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                Program Inovatif yang{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Belum Ada di Indonesia
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mb-8 sm:mb-10 leading-relaxed">
                Diadaptasi dari model terbaik dunia — setiap program dirancang
                khusus untuk mengangkat SDM pariwisata Indonesia ke standar
                internasional, dengan konteks lokal yang kuat.
              </p>

              {/* Programs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {GLOBAL_PROGRAMS.map((program, i) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group"
                  >
                    <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{program.bendera}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-white leading-tight">
                            {program.nama}
                          </h4>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {program.deskripsi}
                      </p>
                      <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="size-3 text-cyan-400" />
                        <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                          Pelajari Lebih Lanjut
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA Area */}
              <div className="mt-8 sm:mt-10 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <GraduationCap className="size-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-white">
                    Daftar Akademi Peradaban
                  </span>
                  <ArrowRight className="size-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
