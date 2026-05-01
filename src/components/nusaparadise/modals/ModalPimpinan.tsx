"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Scale,
  Gavel,
  Plane,
  UtensilsCrossed,
  Hotel,
  Camera,
  GraduationCap,
  TreePine,
  MonitorSmartphone,
  Award,
  Building2,
  ChevronRight,
  Sparkles,
  Globe,
  Handshake,
  Target,
  BarChart3,
  Wallet,
  HeartHandshake,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================
// SHARED TYPES
// ============================================================
interface JabatanDetail {
  title: string;
  icon: React.ElementType;
  desc: string;
  color: string;
  tanggungJawab: string[];
}

// ============================================================
// DPP MODAL
// ============================================================
const DPP_STRUKTUR: JabatanDetail[] = [
  {
    title: "Ketua Umum",
    icon: Crown,
    desc: "Pucuk pimpinan tertinggi organisasi",
    color: "from-amber-400 to-amber-600",
    tanggungJawab: [
      "Memimpin kebijakan strategis nasional",
      "Mewakili MESITA di forum internasional",
      "Mengesahkan keputusan Dewan Pimpinan",
      "Koordinasi dengan Kemenparekraf RI",
    ],
  },
  {
    title: "Wakil Ketua I",
    icon: Shield,
    desc: "Bidang Organisasi & Kelembagaan",
    color: "from-blue-400 to-blue-600",
    tanggungJawab: [
      "Pengembangan keanggotaan nasional",
      "Koordinasi DPW 38 provinsi",
      "Penguatan kelembagaan organisasi",
      "Mediasi konflik internal",
    ],
  },
  {
    title: "Wakil Ketua II",
    icon: Shield,
    desc: "Bidang Usaha & Kemitraan",
    color: "from-cyan-400 to-cyan-600",
    tanggungJawab: [
      "Pengembangan unit usaha strategis",
      "Kemitraan dengan korporasi multinasional",
      "Ekspansi bisnis ekosistem pariwisata",
      "Negosiasi joint venture & investasi",
    ],
  },
  {
    title: "Sekretaris Jenderal",
    icon: FileText,
    desc: "Administrasi & Tata Kelola",
    color: "from-emerald-400 to-emerald-600",
    tanggungJawab: [
      "Pengelolaan administrasi organisasi",
      "Penyusunan laporan pertanggungjawaban",
      "Koordinasi rapat & musyawarah nasional",
      "Tata kelola & compliance organisasi",
    ],
  },
  {
    title: "Bendahara Umum",
    icon: TrendingUp,
    desc: "Keuangan & Aset Organisasi",
    color: "from-violet-400 to-violet-600",
    tanggungJawab: [
      "Pengelolaan keuangan organisasi",
      "Audit & transparansi SHU",
      "Pengelolaan aset & investasi",
      "Laporan keuangan tahunan",
    ],
  },
];

const DPP_BIDANG_DETAIL = [
  { name: "Organisasi & Keanggotaan", icon: Users, color: "bg-blue-500", desc: "Rekrutmen, pengembangan SDM & kelembagaan", kw: ["Keanggotaan", "SDM", "Kelembagaan"] },
  { name: "Usaha & Kemitraan", icon: Briefcase, color: "bg-emerald-500", desc: "Bisnis, joint venture & profit center", kw: ["Profit Center", "JV", "Revenue"] },
  { name: "Advokasi & Hukum", icon: Scale, color: "bg-violet-500", desc: "Perlindungan anggota & regulasi", kw: ["Legal", "Regulasi", "Advokasi"] },
  { name: "Digital & Teknologi", icon: MonitorSmartphone, color: "bg-cyan-500", desc: "NusaGo, JP3 Pay & platform digital", kw: ["NusaGo", "JP3 Pay", "AI"] },
  { name: "Destinasi & Produk", icon: Plane, color: "bg-amber-500", desc: "Pengembangan destinasi & tour package", kw: ["300+ Destinasi", "Tour", "Package"] },
  { name: "Hospitality & Kuliner", icon: UtensilsCrossed, color: "bg-rose-500", desc: "Hotel, restoran & culinary tourism", kw: ["Hotel", "Restoran", "Culinary"] },
  { name: "Pendidikan & Sertifikasi", icon: GraduationCap, color: "bg-indigo-500", desc: "Pelatihan, CHSE & standar global", kw: ["CHSE", "Halal", "Training"] },
  { name: "Lingkungan & ESG", icon: TreePine, color: "bg-green-500", desc: "Carbon credit & pariwisata berkelanjutan", kw: ["Carbon Credit", "ESG", "Net Zero"] },
  { name: "Humas & Branding", icon: Camera, color: "bg-pink-500", desc: "Media, branding & diplomasi wisata", kw: ["Branding", "PR", "Diplomasi"] },
  { name: "Koperasi & SHU", icon: Landmark, color: "bg-teal-500", desc: "KNBMP, bagi hasil & kesejahteraan", kw: ["SHU", "Koperasi", "Bagi Hasil"] },
];

export function ModalDPP({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"pimpinan" | "bidang" | "dewan">("pimpinan");

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Landmark className="size-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">DPP MESITA</h2>
          <p className="text-xs text-slate-500">Dewan Pimpinan Pusat — Pucuk Komando Strategis Nasional</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {[
          { id: "pimpinan" as const, label: "Pimpinan Inti", icon: Crown },
          { id: "bidang" as const, label: "10 Bidang", icon: Briefcase },
          { id: "dewan" as const, label: "Dewan Pengawas", icon: Shield },
        ].map((tab) => {
          const TIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all",
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              <TIcon className="size-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "pimpinan" && (
          <motion.div
            key="pimpinan"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            {DPP_STRUKTUR.map((j, i) => {
              const JIcon = j.icon;
              return (
                <motion.div
                  key={j.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-xl border border-slate-100 hover:border-blue-200 bg-white hover:bg-blue-50/30 p-4 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0 shadow-md", j.color)}>
                      <JIcon className="size-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900">{j.title}</h4>
                      <p className="text-[11px] text-slate-500 mb-2">{j.desc}</p>
                      <div className="space-y-1">
                        {j.tanggungJawab.map((tj) => (
                          <div key={tj} className="flex items-start gap-1.5">
                            <CircleDot className="size-2.5 text-blue-400 shrink-0 mt-1" />
                            <span className="text-[11px] text-slate-600">{tj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === "bidang" && (
          <motion.div
            key="bidang"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {DPP_BIDANG_DETAIL.map((b, i) => {
              const BIcon = b.icon;
              return (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-xl border border-slate-100 hover:border-blue-200 bg-white hover:bg-blue-50/30 p-3.5 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", b.color)}>
                      <BIcon className="size-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">{b.name}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mb-2">{b.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {b.kw.map((k) => (
                      <span key={k} className="text-[9px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">{k}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === "dewan" && (
          <motion.div
            key="dewan"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            {[
              { title: "Dewan Penasihat", icon: Gavel, desc: "Para sesepuh dan tokoh senior pariwisata nasional", items: ["Memberikan nasihat strategis", "Mediasi tingkat tinggi", "Diplomasi pariwisata internasional", "Pengawasan kebijakan makro"] },
              { title: "Dewan Pengawas", icon: Shield, desc: "Pengawasan keuangan, kepatuhan, dan tata kelola", items: ["Audit keuangan internal", "Pengawasan compliance", "Review laporan SHU", "Transparansi tata kelola"] },
              { title: "Komite Etik", icon: Scale, desc: "Penegakan kode etik dan disiplin organisasi", items: ["Penegakan kode etik", "Penanganan pelanggaran", "Mediasi dispute", "Reformasi budaya organisasi"] },
            ].map((d, i) => {
              const DIcon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-slate-100 bg-white p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-md">
                      <DIcon className="size-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{d.title}</h4>
                      <p className="text-[11px] text-slate-500">{d.desc}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {d.items.map((item) => (
                      <div key={item} className="flex items-start gap-1.5">
                        <CircleDot className="size-2.5 text-slate-400 shrink-0 mt-1" />
                        <span className="text-[11px] text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// DPW MODAL
// ============================================================
const DPW_PROVINSI = [
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Jambi", "Sumatera Selatan",
  "Bengkulu", "Lampung", "Kepulauan Bangka Belitung", "Kepulauan Riau",
  "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
  "Banten", "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
  "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
  "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat",
  "Maluku", "Maluku Utara", "Papua", "Papua Barat", "Papua Selatan", "Papua Tengah", "Papua Pegunungan", "Papua Barat Daya",
];

export function ModalDPW({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
          <MapPin className="size-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">DPW MESITA</h2>
          <p className="text-xs text-slate-500">Dewan Pimpinan Wilayah — 38 Provinsi Seluruh Indonesia</p>
        </div>
      </div>

      {/* Structure */}
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
        <h4 className="text-xs font-bold text-slate-700 mb-3">Struktur DPW per Provinsi</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { title: "Ketua DPW", icon: Crown, color: "from-amber-400 to-amber-600" },
            { title: "Wakil Ketua", icon: Shield, color: "from-blue-400 to-blue-600" },
            { title: "Sekretaris", icon: FileText, color: "from-emerald-400 to-emerald-600" },
            { title: "Bendahara", icon: TrendingUp, color: "from-violet-400 to-violet-600" },
          ].map((j) => {
            const JIcon = j.icon;
            return (
              <div key={j.title} className="rounded-lg border border-slate-200 bg-white p-3 flex items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0", j.color)}>
                  <JIcon className="size-4 text-white" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700">{j.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 38 Provinces */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-700">38 Provinsi</h4>
          <span className="text-[10px] text-slate-400">Jangkauan seluruh Indonesia</span>
        </div>
        <div className="max-h-64 overflow-y-auto rounded-xl border border-slate-100 bg-white p-3 custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {DPW_PROVINSI.map((prov, i) => (
              <motion.div
                key={prov}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <MapPin className="size-3 text-blue-400 shrink-0" />
                <span className="text-[11px] text-slate-700 font-medium">{prov}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bidang */}
      <div>
        <h4 className="text-xs font-bold text-slate-700 mb-2">5 Bidang Operasional per DPW</h4>
        <div className="flex flex-wrap gap-2">
          {["Organisasi", "Usaha", "Advokasi", "Digital", "Destinasi"].map((b) => (
            <span key={b} className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-[11px] font-medium text-blue-700">{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DPC MODAL
// ============================================================
export function ModalDPC({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
          <Network className="size-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">DPC MESITA</h2>
          <p className="text-xs text-slate-500">Dewan Pimpinan Cabang — 514 Kabupaten/Kota</p>
        </div>
      </div>

      {/* Structure */}
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
        <h4 className="text-xs font-bold text-slate-700 mb-3">Struktur DPC per Kabupaten/Kota</h4>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { title: "Ketua DPC", icon: Crown, color: "from-amber-400 to-amber-600" },
            { title: "Sekretaris", icon: FileText, color: "from-emerald-400 to-emerald-600" },
            { title: "Bendahara", icon: TrendingUp, color: "from-violet-400 to-violet-600" },
          ].map((j) => {
            const JIcon = j.icon;
            return (
              <div key={j.title} className="rounded-lg border border-slate-200 bg-white p-3 flex flex-col items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center", j.color)}>
                  <JIcon className="size-4 text-white" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 text-center">{j.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Kabupaten", value: "416", icon: Building2 },
          { label: "Kota", value: "98", icon: Globe },
          { label: "Total DPC", value: "514", icon: Network },
        ].map((s) => {
          const SIcon = s.icon;
          return (
            <div key={s.label} className="rounded-xl border border-slate-100 bg-white p-4 text-center">
              <SIcon className="size-5 text-emerald-500 mx-auto mb-2" />
              <span className="block text-xl font-bold font-mono text-emerald-600">{s.value}</span>
              <span className="block text-[10px] text-slate-500">{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Role */}
      <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <h4 className="text-xs font-bold text-emerald-800 mb-2 flex items-center gap-2">
          <Target className="size-3.5" />
          Peran Strategis DPC
        </h4>
        <div className="space-y-1.5">
          {[
            "Eksekutor lapangan program MESITA",
            "Penggerak ekonomi desa wisata tingkat kabupaten",
            "Koordinasi dengan Pemda & Dinas Pariwisata",
            "Rekrutmen anggota & pengembangan usaha lokal",
            "Monitoring & evaluasi destinasi wisata",
          ].map((r) => (
            <div key={r} className="flex items-start gap-1.5">
              <CircleDot className="size-2.5 text-emerald-500 shrink-0 mt-1" />
              <span className="text-[11px] text-emerald-700">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PAC MODAL
// ============================================================
export function ModalPAC({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-lg">
          <Users className="size-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">PAC MESITA</h2>
          <p className="text-xs text-slate-500">Pengurus Anak Cabang — 7,234+ Kecamatan & Desa</p>
        </div>
      </div>

      {/* Structure */}
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
        <h4 className="text-xs font-bold text-slate-700 mb-3">Struktur PAC per Kecamatan</h4>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { title: "Ketua PAC", icon: Crown, color: "from-amber-400 to-amber-600" },
            { title: "Sekretaris", icon: FileText, color: "from-emerald-400 to-emerald-600" },
            { title: "Bendahara", icon: TrendingUp, color: "from-violet-400 to-violet-600" },
          ].map((j) => {
            const JIcon = j.icon;
            return (
              <div key={j.title} className="rounded-lg border border-slate-200 bg-white p-3 flex flex-col items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center", j.color)}>
                  <JIcon className="size-4 text-white" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 text-center">{j.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Kecamatan", value: "7,234", icon: Building2 },
          { label: "Desa Aktif", value: "6,016", icon: HeartHandshake },
          { label: "Anggota", value: "2.8M+", icon: Users },
        ].map((s) => {
          const SIcon = s.icon;
          return (
            <div key={s.label} className="rounded-xl border border-slate-100 bg-white p-4 text-center">
              <SIcon className="size-5 text-violet-500 mx-auto mb-2" />
              <span className="block text-xl font-bold font-mono text-violet-600">{s.value}</span>
              <span className="block text-[10px] text-slate-500">{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Akar Rumput */}
      <div className="rounded-xl border border-violet-100 bg-violet-50 p-4">
        <h4 className="text-xs font-bold text-violet-800 mb-2 flex items-center gap-2">
          <Sparkles className="size-3.5" />
          Basis Gerak Massal Akar Rumput
        </h4>
        <div className="space-y-1.5">
          {[
            "Pelaksana program di tingkat desa & kelurahan",
            "Penggerak UMKM wisata lokal",
            "Pelaporan data destinasi real-time",
            "Koordinasi dengan kepala desa & BUMDes",
            "Mobilisasi masyarakat untuk gotong royong wisata",
            "Penjaga tradisi & budaya lokal",
            "Frontline pelayanan wisatawan",
          ].map((r) => (
            <div key={r} className="flex items-start gap-1.5">
              <CircleDot className="size-2.5 text-violet-500 shrink-0 mt-1" />
              <span className="text-[11px] text-violet-700">{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="rounded-xl border border-slate-100 bg-white p-4">
        <h4 className="text-xs font-bold text-slate-700 mb-2">Dampak Ekonomi PAC</h4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "SHU Desa/Desa", value: "Rp 473 Jt" },
            { label: "Transaksi/Bulan", value: "12,400+" },
            { label: "Wisatawan Dilayani", value: "8.5 Jt/th" },
            { label: "UMKM Terintegrasi", value: "142,000+" },
          ].map((d) => (
            <div key={d.label} className="rounded-lg bg-slate-50 p-2.5">
              <span className="block text-xs font-bold text-slate-800">{d.value}</span>
              <span className="block text-[9px] text-slate-500">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
