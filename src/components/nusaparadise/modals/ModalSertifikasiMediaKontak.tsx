"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, Award, FileCheck, Star, CheckCircle2, Shield, Leaf,
  Newspaper, BarChart3, Headphones, Briefcase, ArrowRight, Clock,
  TrendingUp, Phone, Mail, MapPin, Bot, MessageSquare, Globe,
  Recycle, Droplets, Zap, Users, Download, ExternalLink, ChevronDown,
  Building2, Heart, Lock, BadgeCheck, AlertTriangle, CircleDot,
  Languages, Send, BookOpen, Scale, Eye
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

function CloseBtn({ onClose }: { onClose: () => void }) {
  return (
    <motion.button initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} onClick={onClose}
      className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6 group/btn">
      <ArrowLeft className="size-4 group-hover/btn:-translate-x-0.5 transition-transform" /><span>Kembali</span>
    </motion.button>
  );
}
function FI({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay }}>{children}</motion.div>;
}

// ============================================================
// 1. MODAL CHSE & HALAL
// ============================================================
export function ModalChseHalal({ onClose }: { onClose: () => void }) {
  const categories = [
    { nama: "Cleanliness", items: ["Standar kebersihan kamar & area publik", "Protokol sanitasi harian", "Pengelolaan limbah & sampah", "Sertifikasi hygiene makanan"], progress: 92 },
    { nama: "Health", items: ["Protokol kesehatan COVID-19", "Availabilitas P3K & APAR", "Akses layanan kesehatan", "Skrining kesehatan rutin"], progress: 88 },
    { nama: "Safety", items: ["Sistem keamanan 24/7", "CCTV & monitoring", "Evakuasi darurat", "Asuransi wisatawan"], progress: 95 },
    { nama: "Environment", items: ["Pengelolaan sampah terpadu", "Konservasi energi & air", "Pelestarian biodiversitas", "Program eco-tourism"], progress: 78 },
    { nama: "Halal", items: ["Sertifikasi MUI halal", "Penyediaan makanan halal", "Prayer room & musholla", "Sensitivitas budaya Islam"], progress: 85 },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-10">
          <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" /></div>
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><Award className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Sertifikasi CHSE & Halal Tourism</h2>
            <p className="text-sm text-blue-100/80 max-w-xl mx-auto">Standar ganda untuk kepercayaan global — Cleanliness, Health, Safety, Environment + Halal.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[{ v: "2.847", l: "Destinasi Tersertifikasi" }, { v: "95%", l: "Compliance Rate" }, { v: "38", l: "Provinsi Tercover" }].map((s) => (
            <Card key={s.l} className="bg-white border-blue-50 text-center"><CardContent className="p-4"><p className="text-2xl font-bold text-blue-600">{s.v}</p><p className="text-[10px] text-slate-500 mt-1">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Kriteria CHSE + Halal</h3>
        <div className="space-y-3">
          {categories.map((c) => (
            <Card key={c.nama} className="bg-white border-slate-100">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2"><h4 className="text-sm font-bold text-slate-900">{c.nama}</h4><span className="text-[10px] text-emerald-600 font-bold">{c.progress}%</span></div>
                <Progress value={c.progress} className="h-1.5 mb-3" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{c.items.map((item) => (
                  <div key={item} className="flex items-center gap-2"><CheckCircle2 className="size-3 text-emerald-500 shrink-0" /><span className="text-[11px] text-slate-600">{item}</span></div>
                ))}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FI>
      <FI delay={0.3}>
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-blue-600"><CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left"><h4 className="text-base font-bold text-white mb-1">Ajukan Sertifikasi</h4><p className="text-sm text-blue-100/80">Proses 14 hari kerja. Biaya mulai Rp 5.000.000.</p></div>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shrink-0">Mulai Pengajuan <ArrowRight className="size-4 ml-2" /></Button>
        </CardContent></Card>
      </FI>
    </div>
  );
}

// ============================================================
// 2. MODAL PERIJINAN
// ============================================================
export function ModalPerijinan({ onClose }: { onClose: () => void }) {
  const izin = [
    { nama: "Izin Usaha Pariwisata (IUP)", status: "Aktif", desc: "Izin operasional untuk usaha pariwisata" },
    { nama: "Sertifikat CHSE", status: "Aktif", desc: "Standar kebersihan, kesehatan, keselamatan" },
    { nama: "Sertifikasi Halal Tourism", status: "Aktif", desc: "Jaminan produk dan layanan halal" },
    { nama: "Izin Mendirikan Bangunan (IMB)", status: "Aktif", desc: "Persetujuan konstruksi bangunan wisata" },
    { nama: "Perizinan Lingkungan (AMDAL)", status: "Proses", desc: "Analisis dampak lingkungan" },
    { nama: "NPWP Badan Usaha", status: "Aktif", desc: "Nomor Pokok Wajib Pajak perusahaan" },
    { nama: "SIUP Pariwisata", status: "Aktif", desc: "Surat Izin Usaha Perdagangan" },
    { nama: "Tanda Daftar Perusahaan", status: "Aktif", desc: "Registrasi legalitas badan usaha" },
  ];
  const steps = ["Pengajuan Online", "Verifikasi Dokumen", "Audit Lapangan", "Keputusan", "Sertifikat Terbit"];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><FileCheck className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Perizinan Terpadu Ekosistem</h2>
            <p className="text-sm text-emerald-100/80 max-w-xl mx-auto">Satu pintu perizinan — dari desa hingga kementerian. Proses rata-rata 14 hari.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Alur Proses Perizinan</h3>
        <div className="flex items-center gap-1 overflow-x-auto pb-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-1 shrink-0">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-100"><div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">{i + 1}</div><span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">{s}</span></div>
              {i < steps.length - 1 && <ChevronDown className="size-3 text-emerald-300 rotate-[-90deg] shrink-0" />}
            </div>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Jenis Perizinan</h3>
        <div className="space-y-2">
          {izin.map((iz) => (
            <div key={iz.nama} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-center gap-3">
                {iz.status === "Aktif" ? <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> : <CircleDot className="size-4 text-amber-500 shrink-0" />}
                <div><p className="text-xs font-semibold text-slate-800">{iz.nama}</p><p className="text-[10px] text-slate-500">{iz.desc}</p></div>
              </div>
              <Badge className={`text-[9px] shrink-0 ${iz.status === "Aktif" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"}`}>{iz.status}</Badge>
            </div>
          ))}
        </div>
      </FI>
      <FI delay={0.25}>
        <div className="grid grid-cols-2 gap-3">
          {[{ v: "14 Hari", l: "Rata-rata Proses" }, { v: "98%", l: "Approval Rate" }].map((s) => (
            <Card key={s.l} className="bg-white border-emerald-50 text-center"><CardContent className="p-4"><p className="text-2xl font-bold text-emerald-600">{s.v}</p><p className="text-[10px] text-slate-500 mt-1">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
    </div>
  );
}

// ============================================================
// 3. MODAL BINTANG 5
// ============================================================
export function ModalBintang5({ onClose }: { onClose: () => void }) {
  const levels = [
    { bintang: 5, nama: "Fasilitas Premium", items: ["Butler service personal", "Spa & wellness premium", "Fine dining international", "Infinity pool & private beach", "Concierge 24/7 multilingual", "Helipad & yacht dock"] },
    { bintang: 4, nama: "Fasilitas Superior", items: ["Room service 24/7", "Kolam renang & gym", "Restoran bintang", "Meeting room & business center", "Shuttle service bandara"] },
    { bintang: 3, nama: "Fasilitas Standar", items: ["AC & WiFi", "Sarapan kontinental", "Resepsionis 24 jam", "Parkir luas", "Laundry service"] },
    { bintang: 2, nama: "Fasilitas Dasar", items: ["Kamar bersih & rapi", "Kamar mandi dalam", "Parkir tersedia", "WiFi area publik"] },
    { bintang: 1, nama: "Fasilitas Minimal", items: ["Tempat tidur nyaman", "Kebersihan terjamin", "Air bersih", "Keamanan dasar"] },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><Star className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Standar Layanan Bintang 5 Desa</h2>
            <p className="text-sm text-amber-100/80 max-w-xl mx-auto">Framework quality control — elevasi layanan desa wisata ke standar internasional.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="space-y-3">
          {levels.map((l) => (
            <Card key={l.bintang} className="bg-white border-amber-50 hover:border-amber-200 transition-all">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`size-3.5 ${i < l.bintang ? "text-amber-400 fill-amber-400" : "text-slate-200"}`} />)}</div>
                  <span className="text-sm font-bold text-slate-900">{l.nama}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{l.items.map((item) => (
                  <div key={item} className="flex items-center gap-2"><CheckCircle2 className="size-3 text-amber-500 shrink-0" /><span className="text-[11px] text-slate-600">{item}</span></div>
                ))}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FI>
      <FI delay={0.25}>
        <div className="grid grid-cols-2 gap-3">
          {[{ v: "1.203", l: "Desa Berbintang 4+" }, { v: "3.842", l: "Desa Berbintang 3+" }].map((s) => (
            <Card key={s.l} className="bg-white border-amber-50 text-center"><CardContent className="p-4"><p className="text-2xl font-bold text-amber-600">{s.v}</p><p className="text-[10px] text-slate-500 mt-1">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
    </div>
  );
}

// ============================================================
// 4. MODAL LAPORAN TAHUNAN
// ============================================================
export function ModalLaporanTahunan({ onClose }: { onClose: () => void }) {
  const kpis = [
    { label: "Wisatawan Mancanegara", value: "14.2 Jt", change: "+18.3%", color: "text-blue-600" },
    { label: "Wisatawan Nusantara", value: "287.5 Jt", change: "+12.1%", color: "text-blue-600" },
    { label: "SHU Desa", value: "Rp 2.8 T", change: "+23.7%", color: "text-emerald-600" },
    { label: "Investasi Masuk", value: "$847 Jt", change: "+31.2%", color: "text-amber-600" },
    { label: "Desa Wisata Aktif", value: "6.016", change: "+847", color: "text-blue-600" },
    { label: "Tenaga Kerja", value: "1.2 Jt", change: "+15.8%", color: "text-emerald-600" },
  ];
  const provinsi = [
    { nama: "Bali", wisman: "4.2 Jt", growth: "+22%" },
    { nama: "DKI Jakarta", wisman: "2.8 Jt", growth: "+15%" },
    { nama: "NTB (Lombok)", wisman: "1.9 Jt", growth: "+38%" },
    { nama: "Yogyakarta", wisman: "1.5 Jt", growth: "+19%" },
    { nama: "Papua Barat Daya", wisman: "0.8 Jt", growth: "+45%" },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><BarChart3 className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Laporan Indeks Kinerja Tahunan</h2>
            <p className="text-sm text-blue-100/80 max-w-xl mx-auto">Dashboard KPI 2025 — transparansi penuh untuk seluruh stakeholder ekosistem.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {kpis.map((k) => (
            <Card key={k.label} className="bg-white border-blue-50"><CardContent className="p-4">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{k.label}</p>
              <div className="flex items-end justify-between"><p className={`text-xl font-bold ${k.color} tabular-nums`}>{k.value}</p>
                <div className="flex items-center gap-0.5 text-emerald-600"><TrendingUp className="size-3" /><span className="text-[10px] font-semibold">{k.change}</span></div></div>
            </CardContent></Card>
          ))}
        </div>
      </FI>
      <FI delay={0.2}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Top 5 Provinsi (Wisman)</h3>
        <Card className="bg-white border-slate-100"><CardContent className="p-0">
          <div className="divide-y divide-slate-100">{provinsi.map((p, i) => (
            <div key={p.nama} className="flex items-center justify-between p-3"><div className="flex items-center gap-3"><span className="text-sm font-bold text-slate-400 w-6">{i + 1}</span><span className="text-sm font-semibold text-slate-800">{p.nama}</span></div><div className="flex items-center gap-3"><span className="text-sm font-bold text-slate-800 tabular-nums">{p.wisman}</span><span className="text-[10px] text-emerald-600 font-semibold">{p.growth}</span></div></div>
          ))}</div>
        </CardContent></Card>
      </FI>
      <FI delay={0.3}>
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-blue-600"><CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left"><h4 className="text-base font-bold text-white mb-1">Unduh Laporan Lengkap 2025</h4><p className="text-sm text-blue-100/80">PDF 48 halaman — data lengkap seluruh KPI ekosistem.</p></div>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shrink-0"><Download className="size-4 mr-2" />Unduh PDF</Button>
        </CardContent></Card>
      </FI>
    </div>
  );
}

// ============================================================
// 5. MODAL ESG KARBON
// ============================================================
export function ModalEsgKarbon({ onClose }: { onClose: () => void }) {
  const metrics = [
    { label: "Emisi CO2 Terserap", value: "284.000 ton", icon: <Leaf className="size-5 text-emerald-500" />, progress: 72 },
    { label: "Energi Terbarukan", value: "43%", icon: <Zap className="size-5 text-amber-500" />, progress: 43 },
    { label: "Sampah Daur Ulang", value: "67%", icon: <Recycle className="size-5 text-blue-500" />, progress: 67 },
    { label: "Air Terjaga Kualitas", value: "89%", icon: <Droplets className="size-5 text-cyan-500" />, progress: 89 },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><Leaf className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Laporan ESG & Jejak Karbon</h2>
            <p className="text-sm text-emerald-100/80 max-w-xl mx-auto">Komitmen pariwisata berkelanjutan — target Net Zero Carbon 2045.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Environmental Metrics</h3>
        <div className="space-y-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-center justify-between mb-1.5"><div className="flex items-center gap-2">{m.icon}<span className="text-xs font-medium text-slate-700">{m.label}</span></div><span className="text-xs font-bold text-slate-800 tabular-nums">{m.value}</span></div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${m.progress}%` }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" /></div>
            </div>
          ))}
        </div>
      </FI>
      <FI delay={0.2}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Social & Governance</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[{ v: "1.2 Jt", l: "Tenaga Kerja", icon: <Users className="size-4 text-blue-500" /> }, { v: "6.016", l: "Desa Pemberdayaan", icon: <Heart className="size-4 text-rose-500" /> }, { v: "10.000", l: "Program Magang", icon: <BookOpen className="size-4 text-amber-500" /> }, { v: "52:48", l: "Gender Parity", icon: <Scale className="size-4 text-violet-500" /> }].map((s) => (
            <Card key={s.l} className="bg-white border-emerald-50 text-center"><CardContent className="p-4">{s.icon}<p className="text-lg font-bold text-slate-800 mt-2 tabular-nums">{s.v}</p><p className="text-[10px] text-slate-500">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
      <FI delay={0.3}>
        <Card className="bg-gradient-to-r from-emerald-600 to-teal-700 border-emerald-600"><CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left"><h4 className="text-base font-bold text-white mb-1">Unduh Laporan ESG 2025</h4><p className="text-sm text-emerald-100/80">Laporan komprehensif 32 halaman.</p></div>
          <Button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shrink-0"><Download className="size-4 mr-2" />Unduh ESG</Button>
        </CardContent></Card>
      </FI>
    </div>
  );
}

// ============================================================
// 6. MODAL PUSAT MEDIA
// ============================================================
export function ModalPusatMedia({ onClose }: { onClose: () => void }) {
  const berita = [
    { judul: "Raja Ampat Raih Penghargaan Destinasi Laut Terbaik Dunia 2025", kategori: "Pariwisata", waktu: "2 jam lalu", gradient: "from-cyan-400 to-blue-500" },
    { judul: "Presiden Luncurkan Program Tourism of Civilization di 38 Provinsi", kategori: "Kebijakan", waktu: "5 jam lalu", gradient: "from-blue-500 to-indigo-500" },
    { judul: "Investasi $500M Siap Masuk Mandalika — Tertinggi Sepanjang Sejarah", kategori: "Investasi", waktu: "8 jam lalu", gradient: "from-emerald-400 to-teal-500" },
    { judul: "Desa Wisata Borobudur Catat SHU Rp 12M di Kuartal Pertama", kategori: "Ekonomi", waktu: "12 jam lalu", gradient: "from-amber-400 to-orange-500" },
    { judul: "UNESCO Tetapkan 5 Situs Warisan Baru di Indonesia", kategori: "Warisan", waktu: "1 hari lalu", gradient: "from-amber-400 to-yellow-500" },
    { judul: "MESITA Luncurkan Program Magang Wisata untuk 10.000 Pemuda", kategori: "Pendidikan", waktu: "2 hari lalu", gradient: "from-blue-400 to-indigo-500" },
    { judul: "Bali Raih Peringkat Top 3 Destinasi Ramah Lingkungan Dunia", kategori: "Pariwisata", waktu: "3 hari lalu", gradient: "from-emerald-400 to-green-500" },
    { judul: "NusaParadise.id Jalin Kerjasama dengan 200+ Travel Agent Internasional", kategori: "Kemitraan", waktu: "3 hari lalu", gradient: "from-violet-400 to-purple-500" },
    { judul: "Danau Toba Masuk Daftar 10 Geopark Terbaik UNESCO Global 2025", kategori: "Warisan", waktu: "4 hari lalu", gradient: "from-teal-400 to-cyan-500" },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-purple-800 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><Newspaper className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Pusat Intelijen Media</h2>
            <p className="text-sm text-violet-100/80 max-w-xl mx-auto">Berita terkini, press release, dan dokumentasi ekosistem pariwisata peradaban.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Berita Terkini</h3>
        <div className="space-y-2">
          {berita.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.04 }}>
              <div className="group flex gap-3 p-3 rounded-xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50/30 transition-all cursor-pointer">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${b.gradient} shrink-0 mt-1.5`} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-slate-800 group-hover:text-violet-700 transition-colors line-clamp-2 leading-relaxed">{b.judul}</h4>
                  <div className="flex items-center gap-2 mt-1"><span className="text-[10px] text-blue-600 font-medium">{b.kategori}</span><div className="flex items-center gap-1 text-slate-400"><Clock className="size-2.5" /><span className="text-[10px]">{b.waktu}</span></div></div>
                </div>
                <ArrowRight className="size-3 text-slate-300 group-hover:text-violet-400 shrink-0 mt-1 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </FI>
    </div>
  );
}

// ============================================================
// 7. MODAL BANTUAN 24/7
// ============================================================
export function ModalBantuan247({ onClose }: { onClose: () => void }) {
  const faq = [
    { q: "Bagaimana cara booking destinasi wisata?", a: "Kunjungi halaman Eksplorasi Wisata, pilih destinasi, dan klik 'Book Now'. Anda bisa membayar dengan JP3 Pay, QRIS, atau transfer bank." },
    { q: "Apakah ada asuransi perjalanan?", a: "Ya! Seluruh booking melalui NusaParadise.id sudah termasuk asuransi perjalanan dasar. Upgrade premium tersedia dengan biaya tambahan Rp 50.000." },
    { q: "Bagaimana jika ada emergency di destinasi?", a: "Hubungi Hotline Darurat 24/7: +62 21 500 045. Tim kami akan merespons dalam waktu <30 detik dan mengkoordinasikan bantuan lokal." },
    { q: "Apakah bisa bayar dengan mata uang asing?", a: "Ya! Kami menerima USD, EUR, JPY, GBP, SGD, AUD, dan 15 mata uang lainnya. Konversi otomatis dengan kurs kompetitif." },
    { q: "Bagaimana cara mendapatkan refund?", a: "Refund diproses dalam 3-5 hari kerja. Buka menu 'Riwayat Booking', pilih transaksi, dan klik 'Minta Refund'. Dana dikembalikan ke metode pembayaran asli." },
    { q: "Dimana bisa menemukan pemandu wisata?", a: "Semua pemandu wisata tersertifikasi HPI tersedia di setiap destinasi. Gunakan filter 'Pemandu Wisata' saat booking atau hubungi ASITA cabang lokal." },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-rose-800 p-6">
          <div className="relative text-center">
            <Badge className="mb-3 bg-red-400/20 text-red-200 border-red-400/30"><AlertTriangle className="size-3 mr-1" />Hotline Darurat</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Pusat Bantuan Wisatawan 24/7</h2>
            <p className="text-lg font-mono font-bold text-white mt-2">+62 21 500 045</p>
            <p className="text-sm text-red-100/80 mt-1">Respons {'< 30'} detik — 20+ bahasa tersedia</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Channel Kontak</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { nama: "WhatsApp", desc: "+62 812 3456 7890", icon: <Phone className="size-5 text-emerald-600" />, bg: "bg-emerald-50 border-emerald-100" },
            { nama: "Email", desc: "help@nusaparadise.id", icon: <Mail className="size-5 text-blue-600" />, bg: "bg-blue-50 border-blue-100" },
            { nama: "AI Chatbot", desc: "20+ bahasa, respons instan", icon: <Bot className="size-5 text-violet-600" />, bg: "bg-violet-50 border-violet-100" },
          ].map((c) => (
            <Card key={c.nama} className={`${c.bg} border`}><CardContent className="p-4 text-center">{c.icon}<p className="text-xs font-bold text-slate-800 mt-2">{c.nama}</p><p className="text-[11px] text-slate-600">{c.desc}</p></CardContent></Card>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">FAQ — Pertanyaan Umum</h3>
        <Accordion type="single" collapsible className="space-y-2">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-100 rounded-xl px-4 overflow-hidden">
              <AccordionTrigger className="text-xs font-semibold text-slate-800 hover:no-underline py-3">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[12px] text-slate-600 leading-relaxed pb-3">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FI>
      <FI delay={0.25}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Dukungan Bahasa (25 Bahasa)</h3>
        <div className="flex flex-wrap gap-1.5">
          {["ID", "EN", "JP", "KR", "ZH", "AR", "FR", "DE", "ES", "PT", "RU", "TH", "HI", "MS", "NL", "IT", "TR", "SV", "PL", "CS", "VI", "TL", "MY", "BN", "DA"].map((lang) => (
            <span key={lang} className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-mono font-semibold text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">{lang}</span>
          ))}
        </div>
      </FI>
    </div>
  );
}

// ============================================================
// 8. MODAL KEMITRAAN
// ============================================================
export function ModalKemitraan({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState({ nama: "", email: "", telp: "", jenis: "", pesan: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Proposal Terkirim!", description: "Tim kemitraan kami akan menghubungi Anda dalam 2x24 jam." });
    setForm({ nama: "", email: "", telp: "", jenis: "", pesan: "" });
  };
  const partnershipTypes = [
    { nama: "Joint Venture Destinasi", desc: "Pengembangan destinasi wisata baru bersama" },
    { nama: "Sponsorship Event", desc: "Sponsorship festival & pameran pariwisata" },
    { nama: "Travel Agent Partnership", desc: "Distribusi paket wisata global" },
    { nama: "CSR Pariwisata", desc: "Program tanggung jawab sosial" },
    { nama: "Technology Partnership", desc: "Integrasi AI, VR, digital twin" },
    { nama: "Media & Content", desc: "Kolaborasi konten & dokumenter" },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><Briefcase className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Kemitraan & Kolaborasi Bisnis</h2>
            <p className="text-sm text-amber-100/80 max-w-xl mx-auto">Partnership opportunity, joint venture, sponsorship — mari bangun pariwisata peradaban bersama.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Jenis Kemitraan</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {partnershipTypes.map((p) => (
            <div key={p.nama} className="p-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all cursor-pointer"
              onClick={() => setForm(f => ({ ...f, jenis: p.nama }))}>
              <p className="text-xs font-semibold text-slate-800">{p.nama}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{p.desc}</p>
            </div>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <Card className="bg-white border-amber-100"><CardContent className="p-5">
          <h3 className="text-base font-bold text-slate-900 mb-4">Ajukan Kemitraan</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input placeholder="Nama Perusahaan" value={form.nama} onChange={e => setForm(f => ({ ...f, nama: e.target.value }))} className="h-9 text-xs" required />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Email Bisnis" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="h-9 text-xs" required />
              <Input placeholder="No. Telepon" value={form.telp} onChange={e => setForm(f => ({ ...f, telp: e.target.value }))} className="h-9 text-xs" />
            </div>
            <Input placeholder={form.jenis || "Pilih jenis kemitraan..."} value={form.jenis} readOnly className="h-9 text-xs bg-slate-50" />
            <Textarea placeholder="Ceritakan tentang kemitraan yang diinginkan..." value={form.pesan} onChange={e => setForm(f => ({ ...f, pesan: e.target.value }))} className="text-xs resize-none min-h-[60px]" required />
            <Button type="submit" className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold text-xs h-10"><Send className="size-4 mr-2" />Kirim Proposal Kemitraan</Button>
          </form>
        </CardContent></Card>
      </FI>
    </div>
  );
}
