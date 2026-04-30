"use client";

import { motion } from "framer-motion";
import { TrendingUp, Hotel, UtensilsCrossed, BarChart3, DollarSign, Users, FolderOpen, ArrowUpRight, GraduationCap, Rocket, Award, Shield, Crown, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SimulatorROI from "@/components/nusaparadise/SimulatorROI";

// ============================================================
// Investment Pathway Data
// ============================================================
const JALUR_INVESTASI = [
  {
    ikon: <TrendingUp className="size-6 text-blue-600" />,
    judul: "Jalur Anchor",
    deskripsi: "Investor institusional besar — dana pensiun, sovereign wealth fund, korporasi multinasional. Nominal mulai $10M.",
    badge: "KPA-5",
    nominal: "$10M — $500M",
    targetIRR: "14 — 18%",
    warna: "from-blue-500 to-blue-700",
  },
  {
    ikon: <Hotel className="size-6 text-emerald-600" />,
    judul: "Jalur Pertumbuhan",
    deskripsi: "Investor menengah — HNWI, family office, venture capital. Fokus hospitality & infrastruktur.",
    badge: "KPA-5",
    nominal: "$1M — $10M",
    targetIRR: "12 — 16%",
    warna: "from-emerald-500 to-emerald-700",
  },
  {
    ikon: <UtensilsCrossed className="size-6 text-amber-600" />,
    judul: "Jalur Komunitas",
    deskripsi: "Investor komunitas & UMKM — crowdfunded desa wisata, F&B lokal, UMKM wisata produksi.",
    badge: "KPA-5",
    nominal: "$10K — $1M",
    targetIRR: "10 — 15%",
    warna: "from-amber-500 to-amber-700",
  },
];

// ============================================================
// Stats Data
// ============================================================
const STATS_INVESTASI = [
  { label: "Total Investasi Tertarik", value: "$2.8 T", icon: <DollarSign className="size-5 text-blue-600" />, change: "+23.7%" },
  { label: "Jumlah Investor", value: "12.847", icon: <Users className="size-5 text-emerald-600" />, change: "+1.204 bulan ini" },
  { label: "Proyek Aktif", value: "384", icon: <FolderOpen className="size-5 text-amber-600" />, change: "38 provinsi" },
];

// ============================================================
// Program Strategis Data
// ============================================================
const PROGRAM_STRATEGIS = [
  {
    ikon: <GraduationCap className="size-6 text-white" />,
    judul: "Gerbang SDM Global",
    badge: "World-Class",
    deskripsi: "Adopsi model dual-training Jerman + SkillsFuture Singapura — sertifikasi kompetensi pariwisata berstandar internasional dengan jalur karir terstruktur dari entry hingga executive level.",
    warnaIkon: "from-blue-500 to-blue-700",
    warnaBorder: "border-blue-100",
    warnaHover: "hover:shadow-blue-50",
    warnaBadge: "bg-blue-50 text-blue-600 border-blue-100",
    metrik1: { label: "Sertifikasi", value: "120+" },
    metrik2: { label: "Negara Mitra", value: "27" },
  },
  {
    ikon: <Rocket className="size-6 text-white" />,
    judul: "Scale-Up Resort Academy",
    badge: "First in Indonesia",
    deskripsi: "Program akselerasi 12 minggu untuk scale-up perusahaan pariwisata — mentoring dari CEO global, due diligence, dan koneksi investor seri A-B-C.",
    warnaIkon: "from-emerald-500 to-emerald-700",
    warnaBorder: "border-emerald-100",
    warnaHover: "hover:shadow-emerald-50",
    warnaBadge: "bg-emerald-50 text-emerald-600 border-emerald-100",
    metrik1: { label: "Alumni", value: "340+" },
    metrik2: { label: "Funding Raised", value: "$48M" },
  },
  {
    ikon: <Award className="size-6 text-white" />,
    judul: "Sertifikasi Triple Star International",
    badge: "Global Standard",
    deskripsi: "Sistem sertifikasi tiga bintang berstandar internasional yang menggabungkan Forbes Travel Guide, Green Globe, dan Halal Tourism dalam satu badan akreditasi.",
    warnaIkon: "from-violet-500 to-violet-700",
    warnaBorder: "border-violet-100",
    warnaHover: "hover:shadow-violet-50",
    warnaBadge: "bg-violet-50 text-violet-600 border-violet-100",
    metrik1: { label: "Properti Tersertifikasi", value: "850+" },
    metrik2: { label: "Standar Terintegrasi", value: "3-in-1" },
  },
  {
    ikon: <Shield className="size-6 text-white" />,
    judul: "Akreditasi Blue Flag Nusantara",
    badge: "Eco-Certified",
    deskripsi: "Adopsi standar Blue Flag Denmark untuk pantai & marina Indonesia — sertifikasi lingkungan internasional yang meningkatkan daya tarik wisatawan Eropa 40%.",
    warnaIkon: "from-cyan-500 to-cyan-700",
    warnaBorder: "border-cyan-100",
    warnaHover: "hover:shadow-cyan-50",
    warnaBadge: "bg-cyan-50 text-cyan-600 border-cyan-100",
    metrik1: { label: "Pantai Tersertifikasi", value: "120+" },
    metrik2: { label: "Kenaikan Wisatawan", value: "+40%" },
  },
  {
    ikon: <Crown className="size-6 text-white" />,
    judul: "Executive Leadership Tourism",
    badge: "C-Suite",
    deskripsi: "Program leadership untuk C-Suite pariwisata — kursus singkat dari Cornell Hotel School & Harvard Business School, berbasis studi kasus industri hospitality global.",
    warnaIkon: "from-amber-500 to-amber-700",
    warnaBorder: "border-amber-100",
    warnaHover: "hover:shadow-amber-50",
    warnaBadge: "bg-amber-50 text-amber-600 border-amber-100",
    metrik1: { label: "C-Suite Graduates", value: "95+" },
    metrik2: { label: "Global Partner", value: "Harvard & Cornell" },
  },
  {
    ikon: <Globe className="size-6 text-white" />,
    judul: "Digital Tourism University",
    badge: "EdTech",
    deskripsi: "Universitas digital pariwisata pertama di Indonesia — micro-credentials, nano-degrees, dan sertifikasi blockchain yang diakui 50+ negara.",
    warnaIkon: "from-rose-500 to-rose-700",
    warnaBorder: "border-rose-100",
    warnaHover: "hover:shadow-rose-50",
    warnaBadge: "bg-rose-50 text-rose-600 border-rose-100",
    metrik1: { label: "Nano-Degrees", value: "45+" },
    metrik2: { label: "Negara Akreditasi", value: "50+" },
  },
];

// ============================================================
// Section 3: Gerbang Modal Nusantara — Investasi Syurga Dunia
// ============================================================
export default function SectionInvestasi() {
  return (
    <section id="investasi" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px]" />
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
              <TrendingUp className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Gerbang Modal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Gerbang Modal Nusantara: Investasi Syurga Dunia</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Tiga jalur investasi strategis untuk membangun pariwisata peradaban — dari institusional hingga komunitas desa.
          </p>
        </motion.div>

        {/* 3 Investment Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {JALUR_INVESTASI.map((jalur, index) => (
            <motion.div
              key={jalur.judul}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full overflow-hidden">
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${jalur.warna}`} />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${jalur.warna} flex items-center justify-center text-white shadow-lg shrink-0`}>
                      {jalur.ikon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-900">{jalur.judul}</h3>
                        <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">{jalur.badge}</Badge>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{jalur.deskripsi}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <div className="bg-slate-50 rounded-lg p-3 text-center">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Nominal</p>
                      <p className="font-mono text-xs font-bold text-slate-800">{jalur.nominal}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-center">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Target IRR</p>
                      <p className="font-mono text-xs font-bold text-emerald-600">{jalur.targetIRR}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Investment Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {STATS_INVESTASI.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-xl font-bold text-slate-900 tabular-nums">{stat.value}</p>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <ArrowUpRight className="size-3" />
                    <span className="text-[10px] font-semibold">{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ROI Simulator — imported component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
              <BarChart3 className="size-4 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">Dashboard ROI Investor</h3>
                <Badge className="text-[9px] bg-emerald-50 text-emerald-600 border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                  Live Dashboard
                </Badge>
              </div>
              <p className="text-xs text-slate-500">Simulasi pengembalian investasi real-time dengan proyeksi 10 tahun.</p>
            </div>
          </div>
          <SimulatorROI />
        </motion.div>

        {/* Program Strategis — 6 World-Class Innovation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-100 border border-violet-200 flex items-center justify-center">
              <Crown className="size-4 text-violet-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">Program Strategis</h3>
                <Badge className="text-[9px] bg-violet-50 text-violet-600 border-violet-100">Global Innovation</Badge>
              </div>
              <p className="text-xs text-slate-500">6 program kelas dunia yang diadaptasi dari best practice global — belum ada di Indonesia.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PROGRAM_STRATEGIS.map((program, index) => (
              <motion.div
                key={program.judul}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className={`bg-white ${program.warnaBorder} hover:shadow-lg ${program.warnaHover} hover:border-slate-200 transition-all duration-300 h-full overflow-hidden`}>
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${program.warnaIkon}`} />
                  <CardContent className="p-5 sm:p-6">
                    {/* Icon + Title + Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.warnaIkon} flex items-center justify-center shadow-lg shrink-0`}>
                        {program.ikon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="text-sm font-bold text-slate-900 truncate">{program.judul}</h4>
                          <Badge className={`text-[9px] ${program.warnaBadge}`}>{program.badge}</Badge>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{program.deskripsi}</p>
                      </div>
                    </div>

                    {/* 2 Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{program.metrik1.label}</p>
                        <p className="font-mono text-xs font-bold text-slate-800">{program.metrik1.value}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{program.metrik2.label}</p>
                        <p className="font-mono text-xs font-bold text-slate-800">{program.metrik2.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
