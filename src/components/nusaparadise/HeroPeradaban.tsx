"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Users,
  MapPin,
  Building2,
  Globe,
  Handshake,
  Hotel,
  Compass,
  Tent,
  Ship,
  Mountain,
  TreePine,
  Landmark,
  Anchor,
  UtensilsCrossed,
  Music,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// Data Asosiasi & Ekosistem MESITA
// ============================================================

interface AsosiasiWisata {
  id: string;
  nama: string;
  singkatan: string;
  deskripsi: string;
  anggota: string;
  icon: React.ElementType;
  kategori: string;
  warna: string;
}

const ASOSIASI_UTAMA: AsosiasiWisata[] = [
  {
    id: "asita",
    nama: "Association of The Indonesian Tours and Travel Agencies",
    singkatan: "ASITA",
    deskripsi: "Asosiasi resmi travel agent & biro perjalanan seluruh Indonesia. Jaringan distribusi global dengan 3.200+ biro perjalanan aktif di 34 provinsi.",
    anggota: "3.200+ Member",
    icon: Globe,
    kategori: "Travel Agent",
    warna: "blue",
  },
  {
    id: "phri",
    nama: "Perhimpunan Hotel & Restoran Indonesia",
    singkatan: "PHRI",
    deskripsi: "Organisasi pengusaha hotel, restoran & jasa boga nasional. Mewakili 25.000+ akomodasi dari homestay hingga hotel bintang 5 di seluruh Indonesia.",
    anggota: "25.000+ Hotel & Restoran",
    icon: Hotel,
    kategori: "Hospitality",
    warna: "amber",
  },
  {
    id: "hpi",
    nama: "Himpunan Pramuwisata Indonesia",
    singkatan: "HPI",
    deskripsi: "Asosiasi pemandu wisata profesional berlisensi nasional. 12.000+ pemandu bersertifikat nasional siap melayani wisatawan mancanegara dan domestik.",
    anggota: "12.000+ Pemandu",
    icon: Compass,
    kategori: "Tour Guide",
    warna: "emerald",
  },
  {
    id: "bpdwisata",
    nama: "Badan Promosi Pariwisata Daerah",
    singkatan: "BPPD",
    deskripsi: "Promosi wisata daerah di seluruh 38 provinsi Indonesia. 38 badan promosi daerah bekerja sama dengan Kemenparekraf untuk promosi destinasi unggulan.",
    anggota: "38 Provinsi",
    icon: MapPin,
    kategori: "Promosi Daerah",
    warna: "rose",
  },
  {
    id: "destinasi",
    nama: "Asosiasi Pengelola Destinasi Wisata",
    singkatan: "APDWI",
    deskripsi: "Pengelola TWA, Taman Nasional & destinasi wisata alam. Mengelola Taman Wisata Alam, Taman Nasional, dan 500+ destinasi wisata alam Indonesia.",
    anggota: "500+ Destinasi",
    icon: TreePine,
    kategori: "Destinasi",
    warna: "teal",
  },
  {
    id: "perhutani",
    nama: "Ekowisata & Konservasi Alam",
    singkatan: "EKOWISATA",
    deskripsi: "Jaringan ekowisata hutan, mangrove & konservasi lingkungan. Mengelola ekowisata mangrove, hutan lindung, dan 200+ lokasi konservasi aktif.",
    anggota: "200+ Lokasi",
    icon: TreePine,
    kategori: "Ekowisata",
    warna: "green",
  },
  {
    id: "budaya",
    nama: "Dewan Kesenian & Kebudayaan Nasional",
    singkatan: "DKKN",
    deskripsi: "Pelestarian seni budaya, festival & warisan tak benda. Melestarikan 1.000+ komunitas seni, festival budaya, dan warisan tak benda Indonesia.",
    anggota: "1.000+ Komunitas",
    icon: Music,
    kategori: "Seni & Budaya",
    warna: "orange",
  },
  {
    id: "desawisata",
    nama: "Jaringan Desa Wisata Indonesia",
    singkatan: "JDI",
    deskripsi: "Konsorsium 6.016+ desa wisata di seluruh Nusantara. 6.016+ desa wisata terintegrasi dalam ekosistem pariwisata berdaulat Nusantara.",
    anggota: "6.016+ Desa Wisata",
    icon: Tent,
    kategori: "Desa Wisata",
    warna: "cyan",
  },
  {
    id: "pelayaran",
    nama: "Asosiasi Pelayaran Wisata Indonesia",
    singkatan: "INABA",
    deskripsi: "Operator kapal pesiar, ferry wisata & marine tourism. Mengoperasikan 150+ kapal pesiar, ferry wisata, dan jalur marine tourism Nusantara.",
    anggota: "150+ Operator",
    icon: Ship,
    kategori: "Marine Tourism",
    warna: "sky",
  },
  {
    id: "kuliner",
    nama: "Asosiasi Kuliner & Gastronomi Nusantara",
    singkatan: "AKGN",
    deskripsi: "Pelestarian & promosi kuliner tradisional Indonesia. 8.000+ pelaku UMKM kuliner melestarikan resep tradisional dan cita rasa daerah.",
    anggota: "8.000+ Pelaku UMKM",
    icon: UtensilsCrossed,
    kategori: "Kuliner",
    warna: "red",
  },
  {
    id: "pendidikan",
    nama: "Asosiasi Pariwisata Pendidikan Indonesia",
    singkatan: "APPI",
    deskripsi: "Lembaga pendidikan & pelatihan vokasi pariwisata. 400+ lembaga pendidikan vokasi pariwisata mencetak SDM unggul untuk industri.",
    anggota: "400+ Lembaga",
    icon: GraduationCap,
    kategori: "Pendidikan",
    warna: "indigo",
  },
];

const WILAYAH_KEANGGOTAAN = [
  { region: "Sumatera", provinsi: 10, icon: Mountain },
  { region: "Jawa", provinsi: 6, icon: Landmark },
  { region: "Kalimantan", provinsi: 5, icon: TreePine },
  { region: "Sulawesi", provinsi: 6, icon: Compass },
  { region: "Bali & Nusa Tenggara", provinsi: 3, icon: Mountain },
  { region: "Maluku", provinsi: 2, icon: Anchor },
  { region: "Papua", provinsi: 6, icon: Globe },
];

const warnaMap: Record<string, { bg: string; border: string; text: string; badge: string; icon: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",  text: "text-blue-600",  badge: "bg-blue-100 text-blue-700",  icon: "text-blue-500" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200", text: "text-amber-600", badge: "bg-amber-100 text-amber-700", icon: "text-amber-500" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700", icon: "text-emerald-500" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200", text: "text-violet-600", badge: "bg-violet-100 text-violet-700", icon: "text-violet-500" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",   text: "text-rose-600",   badge: "bg-rose-100 text-rose-700",   icon: "text-rose-500" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",   text: "text-teal-600",   badge: "bg-teal-100 text-teal-700",   icon: "text-teal-500" },
  green:   { bg: "bg-green-50",   border: "border-green-200",  text: "text-green-600",  badge: "bg-green-100 text-green-700",  icon: "text-green-500" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200", text: "text-orange-600", badge: "bg-orange-100 text-orange-700", icon: "text-orange-500" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",   text: "text-cyan-600",   badge: "bg-cyan-100 text-cyan-700",   icon: "text-cyan-500" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",    text: "text-sky-600",    badge: "bg-sky-100 text-sky-700",    icon: "text-sky-500" },
  red:     { bg: "bg-red-50",     border: "border-red-200",    text: "text-red-600",    badge: "bg-red-100 text-red-700",     icon: "text-red-500" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200", text: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700", icon: "text-indigo-500" },
};

// ============================================================
// Kartu Asosiasi
// ============================================================
function KartuAsosiasi({ data, index }: { data: AsosiasiWisata; index: number }) {
  const c = warnaMap[data.warna] ?? warnaMap.blue;
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Card className={cn(
        "bg-white border overflow-hidden group hover:shadow-lg transition-all duration-300",
        c.border, "hover:shadow-" + data.warna + "-100/50"
      )}>
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className={cn("flex items-center justify-center w-10 h-10 rounded-xl", c.bg)}>
              <Icon className={cn("size-5", c.icon)} />
            </div>
            <span className={cn("text-[10px] font-semibold px-2 py-1 rounded-full", c.badge)}>
              {data.kategori}
            </span>
          </div>

          <h3 className="text-sm font-bold text-slate-800 mb-1 leading-tight">
            {data.nama}
          </h3>
          <p className={cn("text-[11px] font-mono font-bold mb-2", c.text)}>
            {data.singkatan}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            {data.deskripsi}
          </p>

          <div className="flex items-center gap-1.5">
            <Users className="size-3 text-slate-400" />
            <span className="text-[11px] font-semibold text-slate-600">{data.anggota}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// Kartu Wilayah
// ============================================================
function KartuWilayah({ data, index }: { data: typeof WILAYAH_KEANGGOTAAN[number]; index: number }) {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 shrink-0">
        <Icon className="size-4 text-blue-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800 truncate">{data.region}</p>
        <p className="text-[11px] text-slate-400">{data.provinsi} Provinsi</p>
      </div>
      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
    </motion.div>
  );
}

// ============================================================
// HERO PERADABAN + MESITA
// ============================================================
export default function HeroPeradaban() {
  const { openModal } = useNavigation();

  return (
    <section className="relative overflow-hidden">
      {/* Background ambient — enhanced with particle animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-50/60 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-4s" }} />
        {/* Subtle particle decorations */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-blue-300/30 rounded-full animate-particle-1" />
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-cyan-300/25 rounded-full animate-particle-2" />
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-blue-400/20 rounded-full animate-particle-1" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Hero Copywriting */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col gap-6 items-center text-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                <Shield className="size-3.5 text-blue-600" />
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Tourism of Civilization</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                Indonesia <span className="text-gradient-gold">True Paradise</span><br />
                In The World
              </h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                Bukan sekadar marketplace — tapi{" "}
                <span className="text-slate-800 font-semibold">Digital Twin Kedaulatan</span>{" "}
                yang membawa seluruh kekayaan 17.504 pulau Indonesia menuju surga dunia yang nyata.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 w-full max-w-2xl">
              {[
                { value: "17.504", label: "Pulau", icon: "🏝️" },
                { value: "714", label: "Suku Bangsa", icon: "🤝" },
                { value: "1.300", label: "Bahasa Daerah", icon: "🗣️" },
                { value: "6.016+", label: "Desa Wisata", icon: "🏘️" },
                { value: "50 Jt", label: "Target Wisman 2045", icon: "✈️" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-xl px-3 py-3 text-center border border-slate-100 shadow-sm hover-lift cursor-default"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-blue-600 tabular-nums mt-1">{item.value}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center">
              <button onClick={() => document.getElementById('wisata')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-[1.02] hover-lift animate-gradient">
                <span className="relative z-10">Jelajahi Peradaban →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button onClick={() => openModal('video-vision')} className="rounded-xl bg-white border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-blue-200 transition-all duration-300 flex items-center gap-2 hover-lift">
                <Eye className="size-4" />
                <span>Tonton Video Vision</span>
              </button>
            </div>
          </motion.div>


        </div>

        {/* ============================================================ */}
        {/* MESITA — Masyarakat Ekosistem Wisata Nusantara              */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-28"
        >
          {/* Header MESITA */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
              <Handshake className="size-3.5 text-blue-500" />
              <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Ekosistem Nasional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              MESITA —{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Masyarakat Ekosistem Wisata Nusantara
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Wadah federasi yang mempersatukan seluruh asosiasi wisata, komunitas desa, pelaku UMKM, dan stakeholder pariwisata Indonesia — dari Sabang sampai Merauke, dari Miangas sampai Pulau Rote.
            </p>
          </div>

          {/* Statistik Ekosistem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            {[
              { value: "11+", label: "Asosiasi Utama", icon: Building2 },
              { value: "38", label: "Provinsi Tercover", icon: MapPin },
              { value: "100K+", label: "Anggota Aktif", icon: Users },
              { value: "6.016+", label: "Desa Wisata Terhubung", icon: Heart },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-xl px-4 py-5 text-center border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 hover-lift"
                >
                  <Icon className="size-5 text-blue-500 mx-auto mb-2" />
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-800 tabular-nums">{stat.value}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Grid Asosiasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
            {ASOSIASI_UTAMA.map((data, index) => (
              <KartuAsosiasi key={data.id} data={data} index={index} />
            ))}
          </div>

          {/* Wilayah Kepengurusan */}
          <div className="mb-10 sm:mb-14">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 text-center">Jangkauan Seluruh Nusantara</h3>
            <p className="text-sm text-slate-500 text-center mb-6">7 wilayah kepulauan — 38 provinsi — total terintegrasi</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {WILAYAH_KEANGGOTAAN.map((data, index) => (
                <KartuWilayah key={data.region} data={data} index={index} />
              ))}
            </div>
          </div>

          {/* CTA Bergabung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 p-8 sm:p-10 text-center animate-gradient"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 animate-particle-1" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 animate-particle-2" />
            {/* Shimmer line decoration */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-line" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-4">
                <Handshake className="size-3.5 text-white" />
                <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">Bergabung Bersama Kami</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                Satukan Langkah untuk Pariwisata Indonesia
              </h3>
              <p className="text-sm text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                MESITA membuka kesempatan bagi seluruh asosiasi, komunitas, UMKM, dan pelaku wisata untuk bergabung dalam ekosistem terbesar pariwisata Nusantara.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={() => openModal('daftar-asosiasi')} className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Daftarkan Asosiasi Anda
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => openModal('gabung-ekosistem-cta')} className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
