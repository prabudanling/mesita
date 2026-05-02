"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/stores/navigation";
import {
  ArrowLeft,
  Shield,
  Users,
  Building2,
  Handshake,
  Crown,
  Landmark,
  Globe,
  MapPin,
  Star,
  Waves,
  Mountain,
  Clock,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Award,
  Target,
  Wifi,
  BookOpen,
  Plane,
  Compass,
  TicketCheck,
  Briefcase,
  Scale,
  FileText,
  UTM,
  Layers,
  Palette,
  Sparkles,
  StarOff,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// ============================================================
// Shared close button
// ============================================================
function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6 group/btn"
    >
      <ArrowLeft className="size-4 group-hover/btn:-translate-x-0.5 transition-transform" />
      <span>Kembali</span>
    </motion.button>
  );
}

// ============================================================
// Shared fade-in wrapper
// ============================================================
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// 1. MODAL PRESIDEN
// ============================================================
export function ModalPresiden({ onClose }: { onClose: () => void }) {
  const stats = [
    { icon: <Globe className="size-5" />, value: "17.504", label: "Pulau" },
    { icon: <Users className="size-5" />, value: "714", label: "Suku Bangsa" },
    { icon: <Users className="size-5" />, value: "280 Jt", label: "Rakyat" },
    { icon: <MapPin className="size-5" />, value: "38", label: "Provinsi" },
  ];

  const kebijakan = [
    {
      icon: <Plane className="size-4 text-blue-600" />,
      title: "Visa-Free untuk 90+ Negara",
      desc: "Mempermudah kunjungan wisatawan mancanegara dengan kebijakan bebas visa.",
    },
    {
      icon: <CheckCircle2 className="size-4 text-blue-600" />,
      title: "CHSE Mandatori Nasional",
      desc: "Cleanliness, Health, Safety, Environment wajib bagi seluruh pelaku pariwisata.",
    },
    {
      icon: <Wifi className="size-4 text-blue-600" />,
      title: "Digitalisasi Destinasi",
      desc: "Smart destination platform dan integrasi teknologi di seluruh destinasi prioritas.",
    },
    {
      icon: <Building2 className="size-4 text-blue-600" />,
      title: "Infrastruktur Konektivitas",
      desc: "Pembangunan bandara, pelabuhan, dan jalan tol menuju destinasi wisata.",
    },
    {
      icon: <BookOpen className="size-4 text-blue-600" />,
      title: "Pemberdayaan UMKM Desa",
      desc: "Koperasi dan UMKM desa wisata sebagai fondasi ekonomi peradaban.",
    },
    {
      icon: <Globe className="size-4 text-blue-600" />,
      title: "Diplomasi Pariwisata Global",
      desc: "Kerja sama bilateral dan multilateral untuk promosi wisata Indonesia.",
    },
  ];

  const programPrioritas = [
    {
      icon: <MapPin className="size-5 text-emerald-600" />,
      title: "Desa Wisata",
      desc: "1.200+ desa wisata diberdayakan sebagai fondasi ekonomi peradaban lokal.",
      gradient: "from-emerald-50 to-teal-50",
      border: "border-emerald-100",
      stat: "1.200+",
    },
    {
      icon: <Building2 className="size-5 text-blue-600" />,
      title: "Infrastruktur",
      desc: "Bandara, pelabuhan, jalan tol, dan fasilitas pendukung destinasi super prioritas.",
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-100",
      stat: "10+ Proyek",
    },
    {
      icon: <Wifi className="size-5 text-violet-600" />,
      title: "Digitalisasi",
      desc: "Platform digital terintegrasi untuk booking, pembayaran, dan promosi wisata.",
      gradient: "from-violet-50 to-purple-50",
      border: "border-violet-100",
      stat: "100% Online",
    },
    {
      icon: <Users className="size-5 text-amber-600" />,
      title: "SDM & Sertifikasi",
      desc: "Pelatihan CHSE, bahasa asing, dan hospitality untuk 5 juta tenaga kerja.",
      gradient: "from-amber-50 to-orange-50",
      border: "border-amber-100",
      stat: "5 Jt SDM",
    },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero Banner */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-[80px]" />
            <div className="absolute top-4 left-4 w-24 h-24 border border-white/10 rounded-full" />
            <div className="absolute bottom-4 right-4 w-36 h-36 border border-white/5 rounded-full" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            {/* Presidential Avatar */}
            <div className="shrink-0 relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-300/40 to-yellow-400/0 animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none z-0" />
              <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-600 p-[3px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full rounded-[13px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex flex-col items-center justify-center gap-2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-amber-400/10 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 flex items-center justify-center ring-4 ring-yellow-300/30 shadow-inner">
                      <Landmark className="size-7 sm:size-9 text-white drop-shadow" />
                    </div>
                    <Badge className="mt-1 bg-yellow-400/90 text-amber-900 border-yellow-300 text-[9px] font-bold px-2 py-0.5 shadow-sm">
                      PATRON UTAMA
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-3 bg-yellow-400/20 text-yellow-200 border-yellow-400/30 hover:bg-yellow-400/30">
                <Crown className="size-3 mr-1" />
                Patron Utama Nasional
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Presiden Republik Indonesia
              </h2>
              <p className="text-sm sm:text-base text-blue-100/80 max-w-2xl mb-6 leading-relaxed">
                Pemimpin tertinggi ekosistem NusaParadise — pemegang visi Tourism of Civilization yang menggerakkan seluruh lapisan pemerintahan dan masyarakat untuk membangun pariwisata peradaban terbesar di dunia.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <Landmark className="size-4 text-white/70" />
                  <span className="text-xs text-white/80 font-medium">Negara Kesatuan RI</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <Shield className="size-4 text-white/70" />
                  <span className="text-xs text-white/80 font-medium">17.504 Pulau</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <Users className="size-4 text-white/70" />
                  <span className="text-xs text-white/80 font-medium">280 Jt Rakyat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Stats Row */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
            >
              <Card className="bg-white border-blue-50 text-center">
                <CardContent className="p-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-2 text-blue-600">
                    {s.icon}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900">{s.value}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* Visi Tourism of Civilization */}
      <FadeIn delay={0.2}>
        <Card className="bg-white border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Target className="size-4 text-blue-600" />
              </div>
              Visi Tourism of Civilization
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-slate-600 leading-relaxed">
              Visi <strong>Tourism of Civilization</strong> adalah paradigma baru pariwisata Indonesia yang tidak hanya mengejar jumlah kunjungan, tetapi mengangkat peradaban, kebudayaan, dan martabat bangsa. Pariwisata menjadi instrumen diplomasi budaya, pemberdayaan ekonomi rakyat, dan pelestarian lingkungan.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Diplomasi Budaya", progress: 85, desc: "Warisan peradaban sebagai soft power global" },
                { label: "Ekonomi Rakyat", progress: 72, desc: "Kesejahteraan dari desa hingga kota" },
                { label: "Pelestarian Alam", progress: 90, desc: "Sustainable tourism untuk generasi mendatang" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                    <span className="text-[10px] text-blue-600 font-bold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-1.5 mb-2" />
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Kebijakan Strategis */}
      <FadeIn delay={0.3}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
              <Scale className="size-4 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Kebijakan Strategis Pariwisata</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {kebijakan.map((k, i) => (
              <motion.div
                key={k.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
              >
                <Card className="bg-white border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        {k.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">{k.title}</h4>
                        <p className="text-[12px] text-slate-500 leading-relaxed">{k.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Program Prioritas */}
      <FadeIn delay={0.4}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <Award className="size-4 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Program Prioritas</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programPrioritas.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.45 + i * 0.06 }}
              >
                <Card className={`bg-gradient-to-br ${p.gradient} border ${p.border} hover:shadow-md transition-all duration-200`}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/80 border border-white flex items-center justify-center">
                        {p.icon}
                      </div>
                      <Badge className="text-[10px] bg-white/80 text-slate-700 border-white">{p.stat}</Badge>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h4>
                    <p className="text-[12px] text-slate-600 leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

// ============================================================
// 2. MODAL BAKORNAS
// ============================================================
export function ModalBakornas({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const struktur = [
    {
      role: "Ketua BAKORNAS KKMNMP",
      desc: "Pemimpin tertinggi badan koordinasi — menetapkan arah strategis, menandatangani kebijakan nasional, dan memimpin rapat koordinasi lintas kementerian.",
      level: "pimpinan",
    },
    {
      role: "Wakil Ketua Bidang Strategis & Kebijakan",
      desc: "Merumuskan kebijakan strategis, mengkoordinasikan perencanaan jangka menengah-panjang, serta memastikan keselarasan dengan visi Tourism of Civilization.",
      level: "wakil",
    },
    {
      role: "Sekretaris Jenderal & Operasional",
      desc: "Mengelola operasional harian BAKORNAS, mengkoordinasikan 5 komisi kerja, menyusun laporan berkala, dan mengelola administrasi organisasi.",
      level: "sekretaris",
    },
    {
      role: "Komisi I — Destinasi & Infrastruktur",
      desc: "Mengembangkan destinasi super prioritas, mengawasi pembangunan infrastruktur pendukung, dan memastikan konektivitas antar-wilayah kepulauan.",
      level: "komisi",
    },
    {
      role: "Komisi II — Investasi & Pendanaan",
      desc: "Merancang skema investasi pariwisata, mengelola dana abadi pariwisata, dan menjalin kemitraan dengan investor domestik dan internasional.",
      level: "komisi",
    },
    {
      role: "Komisi III — SDM & Sertifikasi",
      desc: "Mengembangkan program pelatihan dan sertifikasi CHSE, bahasa asing, serta hospitality untuk seluruh tenaga kerja pariwisata.",
      level: "komisi",
    },
    {
      role: "Komisi IV — Promosi & Diplomasi",
      desc: "Menyelenggarakan kampanye promosi global, mengelola paviliun Indonesia di event internasional, dan menjalankan diplomasi pariwisata bilateral.",
      level: "komisi",
    },
    {
      role: "Komisi V — Legal & Kepatuhan",
      desc: "Menyusun regulasi pariwisata, mengawasi kepatuhan CHSE dan halal certification, serta menangani sengketa hukum di sektor pariwisata.",
      level: "komisi",
    },
  ];

  const wilayah = [
    { nama: "Sumatera", provinsi: "10 Provinsi", icon: "Sumatera" },
    { nama: "Jawa & Bali", provinsi: "6 Provinsi", icon: "Jawa" },
    { nama: "Kalimantan", provinsi: "5 Provinsi", icon: "Kalimantan" },
    { nama: "Sulawesi", provinsi: "6 Provinsi", icon: "Sulawesi" },
    { nama: "Papua", provinsi: "6 Provinsi", icon: "Papua" },
    { nama: "Nusa Tenggara & Maluku", provinsi: "5 Provinsi", icon: "NT" },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative text-center">
            <Badge className="mb-4 bg-blue-400/20 text-blue-200 border-blue-400/30 hover:bg-blue-400/30">
              <Shield className="size-3 mr-1" />
              Badan Koordinasi Nasional
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              BAKORNAS KKMNMP
            </h2>
            <p className="text-sm sm:text-base text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Badan Koordinasi Nasional Kerja Sama Multilateral Nasional dan Multipihak Pariwisata — otak strategis di balik gerakan peradaban wisata Indonesia.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                <Users className="size-4 text-white/70" />
                <span className="text-xs text-white/80 font-medium">8 Struktur Inti</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                <Layers className="size-4 text-white/70" />
                <span className="text-xs text-white/80 font-medium">5 Komisi Kerja</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                <Globe className="size-4 text-white/70" />
                <span className="text-xs text-white/80 font-medium">7 Wilayah Kepulauan</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Struktur Organisasi */}
      <FadeIn delay={0.1}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
              <Layers className="size-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Struktur Organisasi</h3>
          </div>
          <div className="space-y-3">
            {struktur.map((s, i) => (
              <motion.div
                key={s.role}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
              >
                <Card className={`bg-white border-blue-50 hover:shadow-md transition-all duration-200 ${
                  s.level === "pimpinan" ? "ring-2 ring-blue-200" : ""
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                        s.level === "pimpinan" ? "bg-blue-600 size-2.5" :
                        s.level === "wakil" ? "bg-blue-500" :
                        s.level === "sekretaris" ? "bg-blue-400" :
                        "bg-blue-300"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-semibold text-slate-900">{s.role}</h4>
                          {s.level === "pimpinan" && (
                            <Badge className="text-[9px] bg-blue-600 text-white border-blue-600">PIMPINAN</Badge>
                          )}
                          {s.level === "komisi" && (
                            <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">KOMISI</Badge>
                          )}
                        </div>
                        <p className="text-[12px] text-slate-500 leading-relaxed mt-1">{s.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Wilayah Kepulauan */}
      <FadeIn delay={0.3}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <MapPin className="size-4 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Cakupan Wilayah</h3>
            <Badge className="text-[9px] bg-emerald-50 text-emerald-600 border-emerald-100">7 Wilayah</Badge>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {wilayah.map((w, i) => (
              <motion.div
                key={w.nama}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
              >
                <Card className="bg-white border-slate-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-200">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center mx-auto mb-2">
                      <MapPin className="size-4 text-emerald-600" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900">{w.nama}</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">{w.provinsi}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-blue-600">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Pelajari Program Kerja BAKORNAS</h4>
              <p className="text-sm text-blue-100/80">Rencana kerja 5 tahun untuk mewujudkan Tourism of Civilization Indonesia.</p>
            </div>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 shrink-0 font-semibold"
              onClick={() => { toast({ title: "Program Kerja BAKORNAS", description: "Dokumen Program Kerja 2025-2029 sedang diunduh. Total 120 halaman mencakup 5 komisi kerja dan 38 provinsi." }); }}>
              Pelajari Program Kerja
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// ============================================================
// 3. MODAL KEMENTRIAN
// ============================================================
export function ModalKementrian({ onClose }: { onClose: () => void }) {
  const kementerian = [
    {
      nama: "Kemenparekraf",
      singkatan: "Kementerian Pariwisata dan Ekonomi Kreatif",
      icon: <Compass className="size-5 text-blue-600" />,
      role: "Lead agency — pengembangan destinasi, promosi pariwisata, ekonomi kreatif, dan kebijakan industri wisata nasional.",
      badge: "LEAD",
    },
    {
      nama: "Kemenkop",
      singkatan: "Kementerian Koperasi dan UKM",
      icon: <Handshake className="size-5 text-emerald-600" />,
      role: "Pemberdayaan koperasi desa wisata, UMKM kuliner, dan integrasi rantai pasok pariwisata berbasis masyarakat.",
      badge: "MITRA",
    },
    {
      nama: "Kemenlu",
      singkatan: "Kementerian Luar Negeri",
      icon: <Globe className="size-5 text-violet-600" />,
      role: "Diplomasi pariwisata, kerja sama bilateral/multilateral, visa-free negosiasi, dan promosi wisata di KBRI.",
      badge: "DIPLOMASI",
    },
    {
      nama: "KLHK",
      singkatan: "Kementerian Lingkungan Hidup & Kehutanan",
      icon: <Layers className="size-5 text-green-600" />,
      role: "Pelestarian lingkungan, sertifikasi ekowisata, pengelolaan taman nasional, dan kebijakan sustainable tourism.",
      badge: "LINGKUNGAN",
    },
    {
      nama: "Kemendag",
      singkatan: "Kementerian Perdagangan",
      icon: <Briefcase className="size-5 text-amber-600" />,
      role: "Pengembangan produk wisata, regulasi impor alat kesehatan wisata, dan ekspor jasa pariwisata.",
      badge: "PERDAGANGAN",
    },
    {
      nama: "Kemenhub",
      singkatan: "Kementerian Perhubungan",
      icon: <Plane className="size-5 text-sky-600" />,
      role: "Infrastruktur transportasi — bandara, pelabuhan, jalan tol, dan konektivitas menuju destinasi wisata.",
      badge: "KONEKTIVITAS",
    },
  ];

  const statsCards = [
    { value: "3", label: "Tingkat Pemerintahan", sub: "Pusat → Provinsi → Kab/Kota" },
    { value: "38", label: "Dinas Pariwisata Provinsi", sub: "Sinergi kebijakan daerah" },
    { value: "514", label: "Dinas Pariwisata Kab/Kota", sub: "Implementasi lapangan" },
    { value: "6+", label: "Kementerian Terlibat", sub: "Koordinasi lintas sektor" },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-blue-800 to-blue-900 p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-[100px]" />
          </div>
          <div className="relative text-center">
            <Badge className="mb-4 bg-blue-400/20 text-blue-200 border-blue-400/30 hover:bg-blue-400/30">
              <Building2 className="size-3 mr-1" />
              Jaringan Pemerintahan
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Jaringan Kementerian & Dinas Pariwisata
            </h2>
            <p className="text-sm sm:text-base text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Sinergi tiga tingkat pemerintahan — Pusat, Provinsi, dan Kab/Kota — untuk mewujudkan pariwisata peradaban yang merata dan berkelanjutan.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Visual Hierarchy */}
      <FadeIn delay={0.1}>
        <Card className="bg-white border-blue-100">
          <CardHeader>
            <CardTitle className="text-base">Visual Hierarki Pemerintahan</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center">
                <Building2 className="size-5 mx-auto mb-2 text-blue-200" />
                <span className="text-sm font-bold block">Pusat</span>
                <span className="text-[11px] text-blue-200">6+ Kementerian</span>
              </div>
              <ChevronRight className="size-5 text-blue-300 hidden sm:block shrink-0" />
              <span className="text-blue-300 hidden sm:block text-lg shrink-0">&#8595;</span>
              <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 text-white text-center">
                <Landmark className="size-5 mx-auto mb-2 text-blue-100" />
                <span className="text-sm font-bold block">Provinsi</span>
                <span className="text-[11px] text-blue-100">38 Dinas Pariwisata</span>
              </div>
              <ChevronRight className="size-5 text-blue-300 hidden sm:block shrink-0" />
              <span className="text-blue-300 hidden sm:block text-lg shrink-0">&#8595;</span>
              <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 text-blue-800 text-center">
                <MapPin className="size-5 mx-auto mb-2 text-blue-600" />
                <span className="text-sm font-bold block">Kab/Kota</span>
                <span className="text-[11px] text-blue-600">514 Dinas Pariwisata</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statsCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            >
              <Card className="bg-white border-slate-100 text-center">
                <CardContent className="p-4">
                  <p className="text-2xl font-bold text-blue-600">{s.value}</p>
                  <p className="text-xs font-semibold text-slate-800 mt-1">{s.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{s.sub}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* Kementerian Grid */}
      <FadeIn delay={0.25}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
              <Building2 className="size-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Kementerian Kunci</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {kementerian.map((k, i) => (
              <motion.div
                key={k.nama}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              >
                <Card className="bg-white border-blue-50 hover:border-blue-200 hover:shadow-md transition-all duration-200 h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                        {k.icon}
                      </div>
                      <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">{k.badge}</Badge>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">{k.nama}</h4>
                    <p className="text-[10px] text-slate-400 mb-2">{k.singkatan}</p>
                    <p className="text-[12px] text-slate-500 leading-relaxed">{k.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Map Coverage */}
      <FadeIn delay={0.4}>
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="size-5 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900">Cakupan Nasional</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jaringan kementerian dan dinas pariwisata mencakup seluruh Indonesia — dari Sabang hingga Merauke, dari Miangas hingga Pulau Rote. Koordinasi lintas sektor memastikan setiap destinasi wisata mendapat dukungan penuh dari 3 tingkat pemerintahan.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Sumatera", "Jawa", "Kalimantan", "Sulawesi", "Papua", "Bali & NT", "Maluku"].map((w) => (
                <Badge key={w} className="text-[10px] bg-white/80 text-emerald-700 border-emerald-200">{w}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// ============================================================
// 4. MODAL ASITA
// ============================================================
export function ModalAsita({ onClose }: { onClose: () => void }) {
  const { openModal } = useNavigation();
  const layanan = [
    {
      icon: <TicketCheck className="size-5 text-blue-600" />,
      title: "Travel Agent",
      desc: "Agen perjalanan terlatih untuk pemesanan paket wisata domestik dan internasional.",
      count: "1.800+",
    },
    {
      icon: <Compass className="size-5 text-emerald-600" />,
      title: "Tour Operator",
      desc: "Operator tur profesional yang merancang dan menjalankan paket wisata berpengalaman.",
      count: "600+",
    },
    {
      icon: <Globe className="size-5 text-violet-600" />,
      title: "DMC (Destination Management Company)",
      desc: "Pengelola destinasi lokal yang menyediakan layanan ground handling premium.",
      count: "400+",
    },
    {
      icon: <Plane className="size-5 text-amber-600" />,
      title: "Airlines Partner",
      desc: "Mitra maskapai penerbangan untuk konektivitas domestik dan rute internasional.",
      count: "30+",
    },
  ];

  const benefits = [
    "Akses ke jaringan 3.200+ biro perjalanan terverifikasi",
    "Sertifikasi kualitas dan standar pelayanan ASITA",
    "Program pelatihan dan sertifikasi berkala",
    "Akses ke database destinasi dan paket wisata",
    "Prioritas dalam event promosi pariwisata nasional",
    "Perlindungan hukum dan mediasi sengketa",
    "Kerja sama dengan hotel, transportasi, dan restoran",
    "Akses platform digital booking terintegrasi",
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 p-[3px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full rounded-[13px] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <Handshake className="size-10 sm:size-14 text-white drop-shadow" />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-3 bg-yellow-400/20 text-yellow-200 border-yellow-400/30 hover:bg-yellow-400/30">
                <Award className="size-3 mr-1" />
                Aliansi Strategis
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                ASITA
              </h2>
              <p className="text-sm sm:text-base text-blue-100/80 max-w-2xl mb-4 leading-relaxed">
                Association of The Indonesian Tours and Travel Agencies — asosiasi tertua dan terbesar di Indonesia, didirikan pada tahun 1971. ASITA berperan sebagai mitra strategis operasional dan distribusi global ekosistem NusaParadise.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <span className="text-lg font-bold text-white">3.200+</span>
                  <span className="text-[11px] text-white/70">Biro Perjalanan</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <span className="text-lg font-bold text-white">34</span>
                  <span className="text-[11px] text-white/70">Cabang Provinsi</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <span className="text-lg font-bold text-white">53+</span>
                  <span className="text-[11px] text-white/70">Tahun Berdiri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Service Categories */}
      <FadeIn delay={0.1}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
              <Layers className="size-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Kategori Layanan</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {layanan.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
              >
                <Card className="bg-white border-blue-50 hover:border-blue-200 hover:shadow-md transition-all duration-200 h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                        {l.icon}
                      </div>
                      <Badge className="text-[10px] bg-blue-50 text-blue-600 border-blue-100">{l.count}</Badge>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{l.title}</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed">{l.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Benefits */}
      <FadeIn delay={0.25}>
        <Card className="bg-white border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                <Award className="size-4 text-amber-600" />
              </div>
              Keuntungan Keanggotaan ASITA
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.3 + i * 0.03 }}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[12px] text-slate-700 leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <Card className="bg-gradient-to-r from-amber-500 to-orange-500 border-amber-500">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Bergabung dengan ASITA</h4>
              <p className="text-sm text-amber-100/90">Jadilah bagian dari jaringan biro perjalanan terbesar di Indonesia.</p>
            </div>
            <Button className="bg-white text-amber-700 hover:bg-amber-50 shrink-0 font-semibold"
              onClick={() => openModal("gabung-anggota")}>
              Daftar Keanggotaan ASITA
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// ============================================================
// SHARED: Destination Card for Wisata Modals
// ============================================================
interface DestinasiCard {
  nama: string;
  lokasi: string;
  deskripsi: string;
  image: string;
  rating: number;
  badge?: string;
}

function DestinasiCardComponent({ dest, index }: { dest: DestinasiCard; index: number }) {
  const { openDestinasi } = useNavigation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 + index * 0.05 }}
    >
      <Card className="bg-white border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden h-full group">
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={dest.image}
            alt={dest.nama}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
            <MapPin className="size-3 text-white/90" />
            <span className="text-[11px] text-white/90 font-medium">{dest.lokasi}</span>
          </div>
          {dest.badge && (
            <div className="absolute top-3 right-3">
              <Badge className="text-[9px] bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                {dest.badge}
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-1">{dest.nama}</h4>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-3 ${i < Math.floor(dest.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`}
              />
            ))}
            <span className="text-[10px] text-slate-500 ml-1">{dest.rating}</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{dest.deskripsi}</p>
          <button onClick={() => openDestinasi(dest.nama)} className="mt-3 flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn">
            <span>Lihat Detail</span>
            <ArrowRight className="size-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// SHARED: Section Stats Row
// ============================================================
function StatsRow({ stats }: { stats: { icon: React.ReactNode; value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.08 + i * 0.04 }}
        >
          <Card className="bg-white/80 border-slate-200 text-center backdrop-blur-sm">
            <CardContent className="p-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mx-auto mb-1.5">
                {s.icon}
              </div>
              <p className="text-lg font-bold text-slate-900">{s.value}</p>
              <p className="text-[10px] text-slate-500">{s.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================
// 5. MODAL SYURGA BIRU
// ============================================================
export function ModalSyurgaBiru({ onClose }: { onClose: () => void }) {
  const destinasi: DestinasiCard[] = [
    { nama: "Raja Ampat", lokasi: "Papua Barat Daya", deskripsi: "Biodiversitas laut #1 planet — 1.500+ spesies ikan, 600+ spesies karang, surga penyelam dunia.", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&h=500&fit=crop", rating: 4.9, badge: "Best Seller" },
    { nama: "Labuan Bajo", lokasi: "Nusa Tenggara Timur", deskripsi: "Gerbang Pulau Komodo — destinasi super prioritas dengan resort premium dan pantai pink.", image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=500&fit=crop", rating: 4.8 },
    { nama: "Bali", lokasi: "Bali", deskripsi: "Pulau Dewata — warisan budaya, sawah terasering, pantai ikonik, dan kehidupan malam dunia.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop", rating: 4.7 },
    { nama: "Pulau Weh", lokasi: "Aceh", deskripsi: "Titik paling barat Indonesia — diving spot tersembunyi dengan air laut kristal jernih.", image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=500&fit=crop", rating: 4.6 },
    { nama: "Wakatobi", lokasi: "Sulawesi Tenggara", deskripsi: "Taman Nasional Laut — 942 spesies ikan dan 750 spesies karang dalam satu lokasi.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop", rating: 4.7 },
    { nama: "Derawan", lokasi: "Kalimantan Timur", deskripsi: "Danau ubur-ubur tak menyengat, penyu hijau, dan reef manta — keajaiban alam Kalimantan.", image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=500&fit=crop", rating: 4.5 },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 30%, #0ea5e9 70%, #38bdf8 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-600/20 rounded-full blur-[80px]" />
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
              <Waves className="size-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Syurga Biru Nusantara
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Laut kristal, terumbu karang spektakuler, pantai eksotis — surga bawah laut Indonesia yang mendunia.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.08}>
        <StatsRow
          stats={[
            { icon: <Globe className="size-4 text-sky-600" />, value: "17.000+", label: "Pulau Indonesia" },
            { icon: <Waves className="size-4 text-sky-600" />, value: "108.000km", label: "Garis Pantai" },
            { icon: <Star className="size-4 text-sky-600" />, value: "4.7", label: "Rating Rata-rata" },
            { icon: <Compass className="size-4 text-sky-600" />, value: "6+", label: "Destinasi Unggulan" },
          ]}
        />
      </FadeIn>

      {/* Destination Cards */}
      <FadeIn delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinasi.map((d, i) => (
            <DestinasiCardComponent key={d.nama} dest={d} index={i} />
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.3}>
        <Card className="overflow-hidden border-0">
          <div className="p-6 flex flex-col sm:flex-row items-center gap-4" style={{ background: "linear-gradient(135deg, #0c4a6e, #0284c7)" }}>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Jelajahi Semua Destinasi Biru</h4>
              <p className="text-sm text-white/80">Temukan surga bawah laut Indonesia yang belum pernah Anda kunjungi.</p>
            </div>
            <Button onClick={() => { onClose(); setTimeout(() => document.getElementById('wisata')?.scrollIntoView({ behavior: 'smooth' }), 300); }} className="bg-white text-sky-700 hover:bg-sky-50 shrink-0 font-semibold">
              Jelajahi Sekarang
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}

// ============================================================
// 6. MODAL SYURGA KETINGGIAN
// ============================================================
export function ModalSyurgaKetinggian({ onClose }: { onClose: () => void }) {
  const destinasi: DestinasiCard[] = [
    { nama: "Gunung Bromo", lokasi: "Jawa Timur", deskripsi: "Lanskap lunar Indonesia — lautan pasir, kawah aktif, dan sunrise terbaik se-Asia Tenggara.", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=500&fit=crop", rating: 4.8, badge: "Best Seller" },
    { nama: "Danau Toba", lokasi: "Sumatera Utara", deskripsi: "Danau vulkanik terbesar di dunia — kekayaan budaya Batak dan air biru yang memukau.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop", rating: 4.7 },
    { nama: "Dieng Plateau", lokasi: "Jawa Tengah", deskripsi: "Dataran tinggi mistis — candi kuno, telaga warna, dan embun pagi yang mempesona.", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop", rating: 4.5 },
    { nama: "Gunung Rinjani", lokasi: "Nusa Tenggara Barat", deskripsi: "Gunung tertinggi kedua — Danau Segara Anak di kawah puncak, trekking kelas dunia.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop", rating: 4.8 },
    { nama: "Puncak Jayawijaya", lokasi: "Papua", deskripsi: "Salju abadi di khatulistiwa — salah satu dari tujuh puncak benua, pendakian ekstrem.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop", rating: 4.9 },
    { nama: "Air Terjun Moramo", lokasi: "Sulawesi Tenggara", deskripsi: "Ratusan tingkat air terjun bertingkat — tersembunyi di hutan tropis Sulawesi.", image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8855?w=800&h=500&fit=crop", rating: 4.6 },
  ];

  const aktivitas = [
    { icon: <Mountain className="size-4" />, label: "Trekking" },
    { icon: <Compass className="size-4" />, label: "Hiking" },
    { icon: <Waves className="size-4" />, label: "Rafting" },
    { icon: <Star className="size-4" />, label: "Camping" },
    { icon: <Globe className="size-4" />, label: "Climbing" },
    { icon: <MapPin className="size-4" />, label: "Exploration" },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12" style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 30%, #047857 60%, #059669 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-600/15 rounded-full blur-[80px]" />
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
              <Mountain className="size-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Syurga Ketinggian Nusantara
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Gunung megah, danau vulkanik, dataran tinggi — surga di atas awan Indonesia yang menantang dan memukau.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.08}>
        <StatsRow
          stats={[
            { icon: <Mountain className="size-4 text-emerald-600" />, value: "127", label: "Gunung Aktif" },
            { icon: <Waves className="size-4 text-emerald-600" />, value: "500+", label: "Danau & Sungai" },
            { icon: <Star className="size-4 text-emerald-600" />, value: "4.7", label: "Rating Rata-rata" },
            { icon: <Compass className="size-4 text-emerald-600" />, value: "6+", label: "Destinasi Unggulan" },
          ]}
        />
      </FadeIn>

      {/* Activity Badges */}
      <FadeIn delay={0.12}>
        <div className="flex flex-wrap gap-2">
          {aktivitas.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.15 + i * 0.03 }}
            >
              <Badge className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border-emerald-100 text-[11px] font-medium">
                {a.icon}
                {a.label}
              </Badge>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* Destination Cards */}
      <FadeIn delay={0.18}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinasi.map((d, i) => (
            <DestinasiCardComponent key={d.nama} dest={d} index={i} />
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.3}>
        <Card className="overflow-hidden border-0">
          <div className="p-6 flex flex-col sm:flex-row items-center gap-4" style={{ background: "linear-gradient(135deg, #064e3b, #047857)" }}>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Jelajahi Semua Destinasi Ketinggian</h4>
              <p className="text-sm text-white/80">Taklukkan puncak-puncak megah dan danau-danau indah Indonesia.</p>
            </div>
            <Button onClick={() => { onClose(); setTimeout(() => document.getElementById('wisata')?.scrollIntoView({ behavior: 'smooth' }), 300); }} className="bg-white text-emerald-700 hover:bg-emerald-50 shrink-0 font-semibold">
              Mulai Petualangan
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}

// ============================================================
// 7. MODAL SYURGA WAKTU
// ============================================================
export function ModalSyurgaWaktu({ onClose }: { onClose: () => void }) {
  const destinasi: DestinasiCard[] = [
    { nama: "Candi Borobudur", lokasi: "Jawa Tengah", deskripsi: "Candi Buddha terbesar di dunia — warisan UNESCO, magnet spiritual & budaya global.", image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&h=500&fit=crop", rating: 4.9, badge: "UNESCO" },
    { nama: "Candi Prambanan", lokasi: "Jawa Tengah", deskripsi: "Kompleks candi Hindu terbesar di Indonesia — relief Ramayana dan arsitektur menjulang.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=500&fit=crop", rating: 4.8, badge: "UNESCO" },
    { nama: "Liang Bua", lokasi: "Nusa Tenggara Timur", deskripsi: "Gua tempat ditemukan Homo floresiensis — saksi evolusi manusia 50.000 tahun lalu.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop", rating: 4.6, badge: "UNESCO" },
    { nama: "Sangiran", lokasi: "Jawa Tengah", deskripsi: "Situs manusia purba — fosil Jawa Man berusia 1,7 juta tahun, warisan dunia UNESCO.", image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&h=500&fit=crop", rating: 4.7, badge: "UNESCO" },
    { nama: "Keraton Yogyakarta", lokasi: "Yogyakarta", deskripsi: "Istana Kesultanan yang masih berdiri — pusat kebudayaan Jawa yang hidup dan bersejarah.", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=500&fit=crop", rating: 4.7 },
    { nama: "Tana Toraja", lokasi: "Sulawesi Selatan", deskripsi: "Tradisi kematian yang unik di dunia — tongkonan, tau-tau, dan upacara adat megah.", image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&h=500&fit=crop", rating: 4.8 },
  ];

  const timeline = [
    { era: "Prasejarah", period: "50.000+ SM", desc: "Alat batu, gua penghunian, lukisan dinding", color: "bg-amber-500" },
    { era: "Homo Erectus", period: "1,7 Jt SM", desc: "Fosil Jawa Man di Sangiran", color: "bg-orange-500" },
    { era: "Hindu-Buddha", period: "400-1500 M", desc: "Borobudur, Prambanan, Dieng", color: "bg-red-500" },
    { era: "Islam & Kolonial", period: "1500-1945", desc: "Keraton, Masjid Kuno, Fort Belgica", color: "bg-blue-500" },
    { era: "Kemerdekaan", period: "1945-kini", desc: "Warisan perjuangan & modernisasi", color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12" style={{ background: "linear-gradient(135deg, #78350f 0%, #92400e 30%, #b45309 60%, #d97706 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-600/15 rounded-full blur-[80px]" />
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="size-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Syurga Waktu & Leluhur
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Candi kuno, situs purba, tradisi ribuan tahun — perjalanan melintasi waktu menelusuri peradaban Nusantara.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.08}>
        <StatsRow
          stats={[
            { icon: <Landmark className="size-4 text-amber-600" />, value: "9", label: "Situs UNESCO" },
            { icon: <Clock className="size-4 text-amber-600" />, value: "50.000+", label: "Tahun Sejarah" },
            { icon: <Star className="size-4 text-amber-600" />, value: "4.7", label: "Rating Rata-rata" },
            { icon: <Compass className="size-4 text-amber-600" />, value: "6+", label: "Destinasi Unggulan" },
          ]}
        />
      </FadeIn>

      {/* Historical Timeline */}
      <FadeIn delay={0.12}>
        <Card className="bg-white border-amber-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="size-4 text-amber-600" />
              Linimasa Peradaban Nusantara
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.era}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.15 + i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${t.color} shrink-0 mt-1`} />
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 h-full min-h-[20px] bg-slate-200 mt-1" />
                    )}
                  </div>
                  <div className="pb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-slate-900">{t.era}</span>
                      <Badge className="text-[9px] bg-amber-50 text-amber-600 border-amber-100">{t.period}</Badge>
                    </div>
                    <p className="text-[12px] text-slate-500 mt-0.5">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* UNESCO Badges */}
      <FadeIn delay={0.2}>
        <div className="flex flex-wrap gap-2">
          {["Borobudur", "Prambanan", "Sangiran", "Liang Bua", "Subak Bali", "Ombilin", "Borobudur NP", "Keraton", "Toraja"].map((site, i) => (
            <motion.div
              key={site}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.25 + i * 0.02 }}
            >
              <Badge className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 border-amber-100 text-[11px] font-medium">
                <Award className="size-3 text-amber-500" />
                {site}
              </Badge>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* Destination Cards */}
      <FadeIn delay={0.25}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinasi.map((d, i) => (
            <DestinasiCardComponent key={d.nama} dest={d} index={i} />
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <Card className="overflow-hidden border-0">
          <div className="p-6 flex flex-col sm:flex-row items-center gap-4" style={{ background: "linear-gradient(135deg, #78350f, #b45309)" }}>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Telusuri Warisan Peradaban</h4>
              <p className="text-sm text-white/80">Jelajahi ribuan tahun sejarah Nusantara melalui destinasi heritage.</p>
            </div>
            <Button onClick={() => { onClose(); setTimeout(() => document.getElementById('wisata')?.scrollIntoView({ behavior: 'smooth' }), 300); }} className="bg-white text-amber-700 hover:bg-amber-50 shrink-0 font-semibold">
              Lihat Semua Heritage
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}

// ============================================================
// 8. MODAL SYURGA EDUKASI
// ============================================================
export function ModalSyurgaEdukasi({ onClose }: { onClose: () => void }) {
  const destinasi: DestinasiCard[] = [
    { nama: "Museum Nasional", lokasi: "Jakarta", deskripsi: "Koleksi 200.000+ artefak — perjalanan peradaban Nusantara dari prasejarah hingga modern.", image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop", rating: 4.6 },
    { nama: "Museum Angkut", lokasi: "Jawa Timur", deskripsi: "Museum transportasi terbesar di Asia Tenggara — dari becak hingga pesawat terbang.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop", rating: 4.5 },
    { nama: "Ancol Dream World", lokasi: "Jakarta", deskripsi: "Taman impian Jaya Ancol — oceanarium, pantai, dan pusat hiburan edukasi keluarga.", image: "https://images.unsplash.com/photo-1503220317266-8e5b70a21ed6?w=800&h=500&fit=crop", rating: 4.4 },
    { nama: "Galeri Nasional", lokasi: "Jakarta", deskripsi: "Rumah seni rupa Indonesia — pameran seni kontemporer dan tradisional terkemuka.", image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=500&fit=crop", rating: 4.5 },
    { nama: "Taman Mini Indonesia Indah", lokasi: "Jakarta", deskripsi: "Miniatur Indonesia lengkap — 38 paviliun provinsi, museum, dan taman budaya.", image: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=800&h=500&fit=crop", rating: 4.6, badge: "Populer" },
    { nama: "Saung Angklung Udjo", lokasi: "Jawa Barat", deskripsi: "Pusat pelestarian angklung — pertunjukan interaktif dan workshop alat musik tradisional.", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop", rating: 4.7 },
  ];

  const aktivitas = [
    { icon: <BookOpen className="size-4" />, label: "Workshop" },
    { icon: <Compass className="size-4" />, label: "Guided Tour" },
    { icon: <Sparkles className="size-4" />, label: "Interactive" },
    { icon: <Palette className="size-4" />, label: "Seni & Budaya" },
    { icon: <GraduationCap className="size-4" />, label: "Edukasi" },
    { icon: <Users className="size-4" />, label: "Family Friendly" },
  ];

  return (
    <div className="space-y-6">
      <CloseButton onClose={onClose} />

      {/* Hero */}
      <FadeIn>
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12" style={{ background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 30%, #6d28d9 60%, #7c3aed 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-violet-400/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-600/15 rounded-full blur-[80px]" />
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="size-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Syurga Edukasi & Galeri
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Museum, galeri seni, pusat budaya — ruang edukasi yang memperkaya pengetahuan dan kreativitas.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.08}>
        <StatsRow
          stats={[
            { icon: <GraduationCap className="size-4 text-violet-600" />, value: "300+", label: "Museum Indonesia" },
            { icon: <Palette className="size-4 text-violet-600" />, value: "1.000+", label: "Galeri Seni" },
            { icon: <Star className="size-4 text-violet-600" />, value: "4.6", label: "Rating Rata-rata" },
            { icon: <Compass className="size-4 text-violet-600" />, value: "6+", label: "Destinasi Unggulan" },
          ]}
        />
      </FadeIn>

      {/* Activity Badges */}
      <FadeIn delay={0.12}>
        <div className="flex flex-wrap gap-2">
          {aktivitas.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.15 + i * 0.03 }}
            >
              <Badge className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 text-violet-700 border-violet-100 text-[11px] font-medium">
                {a.icon}
                {a.label}
              </Badge>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* Destination Cards */}
      <FadeIn delay={0.18}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinasi.map((d, i) => (
            <DestinasiCardComponent key={d.nama} dest={d} index={i} />
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.3}>
        <Card className="overflow-hidden border-0">
          <div className="p-6 flex flex-col sm:flex-row items-center gap-4" style={{ background: "linear-gradient(135deg, #4c1d95, #7c3aed)" }}>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Jelajahi Semua Destinasi Edukasi</h4>
              <p className="text-sm text-white/80">Temukan museum, galeri, dan pusat budaya terbaik Indonesia.</p>
            </div>
            <Button onClick={() => { onClose(); setTimeout(() => document.getElementById('wisata')?.scrollIntoView({ behavior: 'smooth' }), 300); }} className="bg-white text-violet-700 hover:bg-violet-50 shrink-0 font-semibold">
              Lihat Semua Edukasi
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
