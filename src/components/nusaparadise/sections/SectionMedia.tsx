"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Leaf, Newspaper, TrendingUp, Eye, Clock, ArrowRight, Droplets, Zap, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// KPI Data
// ============================================================
const KPI_ITEMS = [
  { label: "Wisatawan Manca Negara", value: "14.2 Jt", change: "+18.3%", color: "text-blue-600" },
  { label: "Wisatawan Nusantara", value: "287.5 Jt", change: "+12.1%", color: "text-blue-600" },
  { label: "SHU Desa Terdistribusi", value: "Rp 2.8 T", change: "+23.7%", color: "text-emerald-600" },
  { label: "Investasi Masuk", value: "$847 Jt", change: "+31.2%", color: "text-amber-600" },
  { label: "Desa Wisata Aktif", value: "6.016", change: "+847", color: "text-blue-600" },
  { label: "Tenaga Kerja Terserap", value: "1.2 Jt", change: "+15.8%", color: "text-emerald-600" },
];

// ============================================================
// ESG Metrics
// ============================================================
const ESG_METRICS = [
  { label: "Emisi CO2 Terserap", value: "284.000 ton", icon: <Leaf className="size-5 text-emerald-500" />, progress: 72 },
  { label: "Energi Terbarukan", value: "43%", icon: <Zap className="size-5 text-amber-500" />, progress: 43 },
  { label: "Sampah Daur Ulang", value: "67%", icon: <Recycle className="size-5 text-blue-500" />, progress: 67 },
  { label: "Air Terjaga Kualitas", value: "89%", icon: <Droplets className="size-5 text-cyan-500" />, progress: 89 },
];

// ============================================================
// News Data
// ============================================================
const BERITA_TERKINI = [
  {
    judul: "Raja Ampat Raih Penghargaan Destinasi Laut Terbaik Dunia 2025",
    kategori: "Pariwisata",
    waktu: "2 jam lalu",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    judul: "Presiden Luncurkan Program Tourism of Civilization di 38 Provinsi",
    kategori: "Kebijakan",
    waktu: "5 jam lalu",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    judul: "Investasi $500M Siap Masuk Mandalika — Tertinggi Sepanjang Sejarah",
    kategori: "Investasi",
    waktu: "8 jam lalu",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    judul: "Desa Wisata Borobudur Catat SHU Rp 12M di Kuartal Pertama",
    kategori: "Ekonomi",
    waktu: "12 jam lalu",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    judul: "NusaParadise.id Jalin Kerjasama dengan 200+ Travel Agent Internasional",
    kategori: "Kemitraan",
    waktu: "1 hari lalu",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    judul: "Danau Toba Masuk Daftar 10 Geopark Terbaik UNESCO Global 2025",
    kategori: "Warisan",
    waktu: "1 hari lalu",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    judul: "UNESCO Tetapkan 5 Situs Warisan Baru di Indonesia untuk 2026",
    kategori: "Warisan",
    waktu: "2 hari lalu",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    judul: "MESITA Luncurkan Program Magang Wisata untuk 10.000 Pemuda",
    kategori: "Pendidikan",
    waktu: "2 hari lalu",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    judul: "Bali Raih Peringkat Top 3 Destinasi Ramah Lingkungan Dunia 2025",
    kategori: "Pariwisata",
    waktu: "3 hari lalu",
    gradient: "from-emerald-400 to-green-500",
  },
];

// ============================================================
// Live Ticker Component
// ============================================================
function LiveTicker() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BERITA_TERKINI.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = BERITA_TERKINI[activeIndex];

  return (
    <div className="flex items-center gap-3 bg-white rounded-xl border border-blue-100 px-4 py-3 overflow-hidden">
      <Badge className="shrink-0 bg-red-500 text-white border-red-500 text-[9px] animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1" />
        LIVE
      </Badge>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="flex-1 min-w-0"
      >
        <p className="text-xs font-medium text-slate-800 truncate">{current.judul}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] text-blue-600 font-medium">{current.kategori}</span>
          <span className="text-[10px] text-slate-400">{current.waktu}</span>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================
// Section 6: Indeks & Media Peradaban
// ============================================================
export default function SectionMedia() {
  const { openModal } = useNavigation();
  return (
    <section id="media" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
              <Newspaper className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Indeks & Media</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Indeks & Media Peradaban</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Transparansi dan kebesaran platform — laporan kinerja, ESG, dan pusat media untuk seluruh ekosistem.
          </p>
        </motion.div>

        {/* Live News Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <LiveTicker />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Laporan Indeks Kinerja Tahunan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                    <BarChart3 className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">Laporan Indeks Kinerja Tahunan</h3>
                      <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">Transparan</Badge>
                    </div>
                    <p className="text-sm text-slate-500">Dashboard KPI tahunan — jumlah wisatawan, SHU desa, pertumbuhan investasi.</p>
                  </div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {KPI_ITEMS.map((kpi) => (
                    <div key={kpi.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">{kpi.label}</p>
                      <div className="flex items-end justify-between gap-2">
                        <p className={`font-mono text-xl font-bold ${kpi.color} tabular-nums`}>{kpi.value}</p>
                        <div className="flex items-center gap-0.5 text-emerald-600 shrink-0">
                          <TrendingUp className="size-3" />
                          <span className="text-[10px] font-semibold">{kpi.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => openModal("laporan-lengkap")} className="mt-5 flex items-center gap-2 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  <span>Lihat Laporan Lengkap 2025</span>
                  <ArrowRight className="size-3" />
                </button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Laporan ESG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
                    <Leaf className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">Laporan ESG & Jejak Karbon</h3>
                    </div>
                    <Badge className="text-[9px] bg-emerald-50 text-emerald-600 border-emerald-100">Net Zero</Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  Environmental, Social, Governance — komitmen pariwisata berkelanjutan dan net-zero carbon 2045.
                </p>

                {/* ESG Metrics with progress bars */}
                <div className="space-y-4">
                  {ESG_METRICS.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {metric.icon}
                          <span className="text-[11px] font-medium text-slate-700">{metric.label}</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-800 tabular-nums">{metric.value}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => openModal("laporan-esg")} className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                  <span>Unduh Laporan ESG 2025</span>
                  <ArrowRight className="size-3" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Card 3: Pusat Intelijen Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-5 sm:mt-6"
        >
          <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 shrink-0">
                  <Newspaper className="size-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">Pusat Intelijen Media</h3>
                    <button onClick={() => openModal("semua-berita")} className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Semua Berita</span>
                      <ArrowRight className="size-3" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Berita terkini, press release, dan dokumentasi ekosistem.</p>
                </div>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BERITA_TERKINI.map((berita, index) => (
                  <div
                    key={index}
                    className="group flex gap-3 p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer"
                    onClick={() => openModal("pusat-media")}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${berita.gradient} shrink-0 mt-1.5`} />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2 leading-relaxed mb-1.5">
                        {berita.judul}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-blue-600 font-medium">{berita.kategori}</span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Clock className="size-2.5" />
                          <span className="text-[10px]">{berita.waktu}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
