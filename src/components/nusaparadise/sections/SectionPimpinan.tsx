"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Landmark,
  MapPin,
  Network,
  Users,
  Crown,
  Shield,
  Briefcase,
  FileText,
  TrendingUp,
  Globe,
  Sparkles,
  ChevronRight,
  Building2,
  Scale,
  Gavel,
  HeartHandshake,
  Palette,
  Plane,
  UtensilsCrossed,
  Hotel,
  Camera,
  GraduationCap,
  TreePine,
  Zap,
  MonitorSmartphone,
  Award,
  ArrowDown,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// ORGANIZATIONAL DATA
// ============================================================

interface Jabatan {
  title: string;
  icon: React.ElementType;
  name: string;
  color: string;
}

interface Bidang {
  name: string;
  icon: React.ElementType;
  color: string;
  desc: string;
}

const DPP_JABATAN: Jabatan[] = [
  { title: "Ketua Umum", icon: Crown, name: "Pimpinan Tertinggi", color: "from-amber-400 to-amber-600" },
  { title: "Wakil Ketua I", icon: Shield, name: "Bidang Organisasi", color: "from-blue-400 to-blue-600" },
  { title: "Wakil Ketua II", icon: Shield, name: "Bidang Usaha", color: "from-cyan-400 to-cyan-600" },
  { title: "Sekretaris Jenderal", icon: FileText, name: "Administrasi & Tata Kelola", color: "from-emerald-400 to-emerald-600" },
  { title: "Bendahara Umum", icon: TrendingUp, name: "Keuangan & Aset", color: "from-violet-400 to-violet-600" },
];

const DPP_BIDANG: Bidang[] = [
  { name: "Organisasi & Keanggotaan", icon: Users, color: "bg-blue-500", desc: "Rekrutmen, pengembangan & kelembagaan" },
  { name: "Usaha & Kemitraan", icon: Briefcase, color: "bg-emerald-500", desc: "Bisnis, joint venture & profit center" },
  { name: "Advokasi & Hukum", icon: Scale, color: "bg-violet-500", desc: "Perlindungan anggota & regulasi" },
  { name: "Digital & Teknologi", icon: MonitorSmartphone, color: "bg-cyan-500", desc: "NusaGo, JP3 Pay & platform digital" },
  { name: "Destinasi & Produk", icon: Plane, color: "bg-amber-500", desc: "Pengembangan destinasi & tour package" },
  { name: "Hospitality & Kuliner", icon: UtensilsCrossed, color: "bg-rose-500", desc: "Hotel, restoran & culinary tourism" },
  { name: "Pendidikan & Sertifikasi", icon: GraduationCap, color: "bg-indigo-500", desc: "Pelatihan, CHSE & standar global" },
  { name: "Lingkungan & ESG", icon: TreePine, color: "bg-green-500", desc: "Carbon credit & pariwisata berkelanjutan" },
  { name: "Humas & Branding", icon: Camera, color: "bg-pink-500", desc: "Media, branding & diplomasi wisata" },
  { name: "Koperasi & SHU", icon: Landmark, color: "bg-teal-500", desc: "KNBMP, bagi hasil & kesejahteraan" },
];

const DPW_STRUCTURE = {
  name: "Dewan Pimpinan Wilayah",
  jabatan: [
    { title: "Ketua DPW", icon: Crown, color: "from-amber-400 to-amber-600" },
    { title: "Wakil Ketua", icon: Shield, color: "from-blue-400 to-blue-600" },
    { title: "Sekretaris", icon: FileText, color: "from-emerald-400 to-emerald-600" },
    { title: "Bendahara", icon: TrendingUp, color: "from-violet-400 to-violet-600" },
  ],
  bidang: ["Organisasi", "Usaha", "Advokasi", "Digital", "Destinasi"],
  count: 38,
  label: "Provinsi",
};

const DPC_STRUCTURE = {
  name: "Dewan Pimpinan Cabang",
  jabatan: [
    { title: "Ketua DPC", icon: Crown, color: "from-amber-400 to-amber-600" },
    { title: "Sekretaris", icon: FileText, color: "from-emerald-400 to-emerald-600" },
    { title: "Bendahara", icon: TrendingUp, color: "from-violet-400 to-violet-600" },
  ],
  bidang: ["Organisasi", "Usaha", "Destinasi"],
  count: 514,
  label: "Kabupaten/Kota",
};

const PAC_STRUCTURE = {
  name: "Pengurus Anak Cabang",
  jabatan: [
    { title: "Ketua PAC", icon: Crown, color: "from-amber-400 to-amber-600" },
    { title: "Sekretaris", icon: FileText, color: "from-emerald-400 to-emerald-600" },
    { title: "Bendahara", icon: TrendingUp, color: "from-violet-400 to-violet-600" },
  ],
  bidang: ["Pelaksana", "Usaha"],
  count: 7234,
  label: "Kecamatan/Desa",
};

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const pulseRing = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.6, 0, 0.6],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const flowDown = {
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// ============================================================
// SUB-COMPONENTS
// ============================================================

function LevelNode({
  icon: Icon,
  label,
  sublabel,
  color,
  isTop,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  sublabel: string;
  color: string;
  isTop?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      variants={cardVariants}
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col items-center gap-2 cursor-pointer"
    >
      {/* Pulse ring for top level */}
      {isTop && (
        <motion.div
          variants={pulseRing}
          animate="animate"
          className={cn("absolute -inset-2 rounded-2xl bg-gradient-to-br opacity-30", color)}
        />
      )}

      <div className={cn(
        "relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-xl",
        color,
        isTop && "ring-2 ring-white/30 ring-offset-2 ring-offset-slate-900"
      )}>
        <Icon className="size-7 sm:size-8 text-white" />
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center">
          <Sparkles className="size-2.5 text-blue-600" />
        </div>
      </div>

      <div className="text-center">
        <span className="block text-xs sm:text-sm font-bold text-white">{label}</span>
        <span className="block text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{sublabel}</span>
      </div>
    </motion.button>
  );
}

function ConnectorLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="w-px h-8 sm:h-12 bg-gradient-to-b from-cyan-400/60 to-blue-500/60 origin-top mx-auto"
    />
  );
}

function BranchLine() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent origin-center"
    />
  );
}

function OrgCard({
  title,
  icon: Icon,
  name,
  color,
  index,
}: {
  title: string;
  icon: React.ElementType;
  name: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.04, y: -2 }}
      className="group relative rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors" />
      <div className="relative p-3 sm:p-4 flex items-center gap-3">
        <div className={cn("w-9 h-9 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0 shadow-md", color)}>
          <Icon className="size-4 text-white" />
        </div>
        <div>
          <span className="block text-[11px] sm:text-xs font-bold text-white">{title}</span>
          <span className="block text-[9px] sm:text-[10px] text-slate-400">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}

function BidangBadge({
  name,
  icon: Icon,
  color,
  desc,
}: {
  name: string;
  icon: React.ElementType;
  color: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 cursor-default"
    >
      <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors" />
      <div className="relative p-3 flex items-center gap-2.5">
        <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0", color)}>
          <Icon className="size-3.5 text-white" />
        </div>
        <div className="min-w-0">
          <span className="block text-[10px] sm:text-[11px] font-semibold text-white truncate">{name}</span>
          <span className="block text-[9px] text-slate-500 truncate">{desc}</span>
        </div>
      </div>
    </motion.div>
  );
}

function LevelDetailPanel({
  structure,
  level,
  icon: LevelIcon,
  color,
  badge,
}: {
  structure: typeof DPW_STRUCTURE;
  level: string;
  icon: React.ElementType;
  color: string;
  badge: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: level === "DPP" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-white/[0.08]"
    >
      <div className="relative">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", color)} />
        <div className="relative p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg", color)}>
                <LevelIcon className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">{structure.name}</h4>
                <span className="text-[10px] text-slate-400">MESITA — Tingkat {level}</span>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/[0.1]">
              <span className="text-[10px] font-bold text-cyan-300">{structure.count.toLocaleString("id-ID")}</span>
              <span className="text-[10px] text-slate-400 ml-1">{structure.label}</span>
            </div>
          </div>

          {/* Jabatan */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
            {structure.jabatan.map((j, i) => (
              <OrgCard
                key={j.title}
                title={j.title}
                icon={j.icon}
                name={j.title.split(" ")[0]}
                color={j.color}
                index={i}
              />
            ))}
          </div>

          {/* Bidang */}
          <div className="flex flex-wrap gap-2">
            {structure.bidang.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[10px] font-medium text-slate-300"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN SECTION COMPONENT
// ============================================================
export default function SectionPimpinan() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const { openModal } = useNavigation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleLevelClick = (id: string) => {
    openModal(id as any);
  };

  return (
    <section id="pimpinan" ref={sectionRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a1628] to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_60%)]" />

      {/* Animated mesh pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Building2 className="size-3.5 text-blue-400" />
            <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider">Struktur Organisasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Kedaulatan Kepemimpinan{" "}
            <span className="text-gradient-gold">MESITA</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Dari Dewan Pimpinan Pusat hingga Pengurus Anak Cabang — struktur komando terorganisir yang menjangkau seluruh Nusantara,
            menggerakkan roda ekonomi pariwisata peradaban dari Sabang sampai Merauke
          </p>
        </motion.div>

        {/* ===== HIERARCHY TREE VISUALIZATION ===== */}
        <div className="relative mb-12 sm:mb-16">
          {/* Level 1: DPP */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center"
          >
            <LevelNode
              icon={Landmark}
              label="DPP MESITA"
              sublabel="Dewan Pimpinan Pusat"
              color="from-cyan-400 to-blue-600"
              isTop
              onClick={() => handleLevelClick("dpp-mesita")}
            />

            {/* Connector DPP → DPW */}
            <ConnectorLine delay={0.3} />

            {/* Branch line */}
            <div className="w-full max-w-3xl relative">
              <BranchLine />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-cyan-400/30 via-blue-400/50 to-cyan-400/30"
              />
            </div>

            {/* Level 2: DPW */}
            <div className="flex flex-col items-center">
              <motion.div variants={cardVariants} whileHover={{ scale: 1.04 }} className="cursor-pointer" onClick={() => handleLevelClick("dpw-mesita")}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                  <MapPin className="size-4 text-blue-400" />
                  <span className="text-xs font-bold text-white">DPW MESITA</span>
                  <span className="text-[10px] text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded-full">38</span>
                </div>
              </motion.div>
            </div>

            {/* Connector DPW → DPC */}
            <ConnectorLine delay={0.6} />

            <div className="w-full max-w-3xl relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
              />
            </div>

            {/* Level 3: DPC */}
            <div className="flex flex-col items-center">
              <motion.div variants={cardVariants} whileHover={{ scale: 1.04 }} className="cursor-pointer" onClick={() => handleLevelClick("dpc-mesita")}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
                  <Network className="size-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">DPC MESITA</span>
                  <span className="text-[10px] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">514</span>
                </div>
              </motion.div>
            </div>

            {/* Connector DPC → PAC */}
            <ConnectorLine delay={0.9} />

            <div className="w-full max-w-3xl relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute top-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
              />
            </div>

            {/* Level 4: PAC */}
            <div className="flex flex-col items-center">
              <motion.div variants={cardVariants} whileHover={{ scale: 1.04 }} className="cursor-pointer" onClick={() => handleLevelClick("pac-mesita")}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500/20 to-violet-600/10 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300">
                  <Users className="size-4 text-violet-400" />
                  <span className="text-xs font-bold text-white">PAC MESITA</span>
                  <span className="text-[10px] text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded-full">7.2K+</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-3 flex items-center gap-2"
            >
              <CircleDot className="size-3 text-cyan-400/60" />
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">Akar Rumput — Desa & Kecamatan</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== DPP FULL STRUCTURE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Landmark className="size-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">DPP MESITA — Dewan Pimpinan Pusat</h3>
              <p className="text-[11px] text-slate-400">Pucuk komando strategis nasional ekosistem pariwisata peradaban</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-blue-500/[0.05]" />
              <div className="relative p-5 sm:p-6">
                {/* Pimpinan Inti */}
                <div className="mb-6">
                  <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider mb-3 block">Pimpinan Inti</span>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                  >
                    {DPP_JABATAN.map((j, i) => (
                      <OrgCard
                        key={j.title}
                        title={j.title}
                        icon={j.icon}
                        name={j.name}
                        color={j.color}
                        index={i}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Dewan Penasihat */}
                <div className="mb-6">
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider mb-3 block">Dewan Penasihat & Pengawas</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Dewan Penasihat", icon: Gavel, color: "from-amber-500 to-amber-700" },
                      { title: "Dewan Pengawas", icon: Shield, color: "from-slate-500 to-slate-700" },
                      { title: "Komite Etik", icon: Scale, color: "from-rose-500 to-rose-700" },
                    ].map((item, i) => (
                      <OrgCard
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        name="Penasihat & Pengawas"
                        color={item.color}
                        index={i}
                      />
                    ))}
                  </div>
                </div>

                {/* 10 Bidang */}
                <div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider mb-3 block">10 Bidang Profesional</span>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5"
                  >
                    {DPP_BIDANG.map((b) => (
                      <BidangBadge
                        key={b.name}
                        name={b.name}
                        icon={b.icon}
                        color={b.color}
                        desc={b.desc}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== DPW / DPC / PAC ACCORDION ===== */}
        <div className="space-y-4 mb-10">
          {[
            { data: DPW_STRUCTURE, level: "Wilayah", icon: MapPin, color: "from-blue-400 to-blue-600", badge: "38 Provinsi", id: "dpw-mesita" },
            { data: DPC_STRUCTURE, level: "Cabang", icon: Network, color: "from-emerald-400 to-emerald-600", badge: "514 Kab/Kota", id: "dpc-mesita" },
            { data: PAC_STRUCTURE, level: "Anak Cabang", icon: Users, color: "from-violet-400 to-violet-600", badge: "7.2K+ Desa", id: "pac-mesita" },
          ].map((item) => (
            <LevelDetailPanel
              key={item.level}
              structure={item.data}
              level={item.level}
              icon={item.icon}
              color={item.color}
              badge={item.badge}
            />
          ))}
        </div>

        {/* ===== STATISTIK JANGKAUAN ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08]"
        >
          <div className="relative p-5 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.05] to-blue-500/[0.05]" />
            <div className="relative">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="size-4 text-cyan-400" />
                Jangkauan Organisasi MESITA
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "DPP Pusat", value: "1", icon: Landmark, color: "text-cyan-400" },
                  { label: "DPW Provinsi", value: "38", icon: MapPin, color: "text-blue-400" },
                  { label: "DPC Kab/Kota", value: "514", icon: Network, color: "text-emerald-400" },
                  { label: "PAC Kec/Desa", value: "7,234+", icon: Users, color: "text-violet-400" },
                ].map((stat) => {
                  const SIcon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.04 }}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center"
                    >
                      <SIcon className={cn("size-5 mx-auto mb-2", stat.color)} />
                      <span className={cn("block text-xl sm:text-2xl font-bold font-mono tabular-nums", stat.color)}>
                        {stat.value}
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">{stat.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Chain visualization */}
              <div className="mt-5 flex items-center justify-center gap-1 sm:gap-2">
                {[
                  { label: "DPP", color: "bg-cyan-400" },
                  { label: "DPW", color: "bg-blue-400" },
                  { label: "DPC", color: "bg-emerald-400" },
                  { label: "PAC", color: "bg-violet-400" },
                ].map((link, i) => (
                  <div key={link.label} className="flex items-center gap-1 sm:gap-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                      className={cn("w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center", link.color)}
                    >
                      <span className="text-[9px] sm:text-[10px] font-bold text-white">{link.label}</span>
                    </motion.div>
                    {i < 3 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                        className="w-4 sm:w-8 h-px bg-gradient-to-r from-white/20 to-white/10 origin-left"
                      />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-center text-[10px] text-slate-500 mt-3">
                Komando terorganisir dari pusat hingga akar rumput — satu komando, satu visi, satu aksi
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => openModal("gabung-ekosistem-cta")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <Crown className="size-4" />
            Bergabung dengan Kepemimpinan MESITA
            <ChevronRight className="size-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
