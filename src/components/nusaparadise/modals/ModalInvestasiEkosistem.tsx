"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, TrendingUp, Hotel, UtensilsCrossed, BarChart3, DollarSign,
  UserPlus, Wallet, ShoppingCart, ArrowRight, CheckCircle2, QrCode,
  Package, Truck, Store, Star, Building2, Leaf, Shield, Clock, Globe,
  Zap, CreditCard, Smartphone, Lock, History, ChevronRight, Plus,
  Users, BadgeCheck, MapPin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import SimulatorROI from "@/components/nusaparadise/SimulatorROI";

function CloseBtn({ onClose }: { onClose: () => void }) {
  return (
    <motion.button initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} onClick={onClose}
      className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6 group/btn">
      <ArrowLeft className="size-4 group-hover/btn:-translate-x-0.5 transition-transform" /><span>Kembali</span>
    </motion.button>
  );
}
function FI({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay }} className={className}>{children}</motion.div>;
}

// ============================================================
// 1. MODAL INVESTASI INFRASTRUKTUR
// ============================================================
export function ModalInvestInfra({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const proyek = [
    { nama: "Jembatan Penghubung Pulau", lokasi: "Raja Ampat", investasi: "$45M", status: "Konstruksi Q2 2025", irr: "16.5%", progress: 35 },
    { nama: "Pelabuhan Wisata Marina", lokasi: "Labuan Bajo", investasi: "$120M", status: "Perencanaan", irr: "15.8%", progress: 15 },
    { nama: "Eco-Lodge Network", lokasi: "Bali & Lombok", investasi: "$85M", status: "Desain", irr: "14.2%", progress: 10 },
    { nama: "Jalan Desa Wisata", lokasi: "38 Provinsi", investasi: "$200M", status: "Multi-tahap", irr: "12.8%", progress: 45 },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-10">
          <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" /></div>
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><TrendingUp className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Investasi Infrastruktur & Eco-Tourism</h2>
            <p className="text-sm text-blue-100/80 max-w-xl mx-auto">Pembangunan infrastruktur hijau di destinasi prioritas — jembatan, pelabuhan, eco-lodge, dan jalan desa wisata.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="grid grid-cols-3 gap-3">
          {[{ v: "$2.8T", l: "Total Investasi" }, { v: "384", l: "Proyek Aktif" }, { v: "38", l: "Provinsi" }].map((s) => (
            <Card key={s.l} className="bg-white border-blue-50 text-center"><CardContent className="p-4"><p className="text-xl font-bold text-blue-600">{s.v}</p><p className="text-[10px] text-slate-500 mt-1">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Proyek Prioritas</h3>
        <div className="space-y-3">
          {proyek.map((p, i) => (
            <motion.div key={p.nama} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }}>
              <Card className="bg-white border-blue-50 hover:border-blue-200 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div><h4 className="text-sm font-bold text-slate-900">{p.nama}</h4><p className="text-[11px] text-slate-500 flex items-center gap-1"><MapPin className="size-3" />{p.lokasi}</p></div>
                    <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">{p.status}</Badge>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2"><div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all" style={{ width: `${p.progress}%` }} /></div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3"><span className="text-[10px] text-slate-500">Investasi: <strong className="text-blue-600">{p.investasi}</strong></span><span className="text-[10px] text-slate-500">IRR: <strong className="text-emerald-600">{p.irr}</strong></span></div>
                    <span className="text-[10px] text-slate-400">{p.progress}%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FI>
      <FI delay={0.3}>
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-blue-600">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left"><h4 className="text-base font-bold text-white mb-1">Tertarik Berinvestasi?</h4><p className="text-sm text-blue-100/80">Ajukan proposal investasi infrastruktur Anda sekarang.</p></div>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shrink-0" onClick={() => { toast({ title: "Proposal Investasi Diterima", description: "Tim investasi kami akan menghubungi Anda dalam 2x24 jam untuk diskusi lebih lanjut." }); }}>Ajukan Investasi <ArrowRight className="size-4 ml-2" /></Button>
          </CardContent>
        </Card>
      </FI>
    </div>
  );
}

// ============================================================
// 2. MODAL INVESTASI HOSPITALITY
// ============================================================
export function ModalInvestHospitality({ onClose }: { onClose: () => void }) {
  const types = [
    { nama: "Hotel Bintang 5", range: "$5M–$50M", irr: "14–18%", lokasi: "Bali, Jakarta, Mandalika", icon: <Star className="size-5 text-amber-600" />, gradient: "from-amber-50 to-orange-50", border: "border-amber-100" },
    { nama: "Resort Premium", range: "$2M–$20M", irr: "13–16%", lokasi: "Raja Ampat, Lombok, Labuan Bajo", icon: <Hotel className="size-5 text-blue-600" />, gradient: "from-blue-50 to-cyan-50", border: "border-blue-100" },
    { nama: "Villa Privat", range: "$500K–$5M", irr: "12–15%", lokasi: "Bali, Ubud, Gili Islands", icon: <Building2 className="size-5 text-emerald-600" />, gradient: "from-emerald-50 to-teal-50", border: "border-emerald-100" },
    { nama: "Homestay Desa", range: "$10K–$500K", irr: "10–14%", lokasi: "6.016+ Desa Wisata", icon: <Users className="size-5 text-violet-600" />, gradient: "from-violet-50 to-purple-50", border: "border-violet-100" },
    { nama: "Hostel Digital", range: "$50K–$1M", irr: "11–15%", lokasi: "Kota Wisata, Yogyakarta, Bandung", icon: <Zap className="size-5 text-sky-600" />, gradient: "from-sky-50 to-cyan-50", border: "border-sky-100" },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 p-8 sm:p-10">
          <div className="absolute inset-0 pointer-events-none"><div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/15 rounded-full blur-[100px]" /></div>
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><Hotel className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Pendanaan Hospitality Berdaulat</h2>
            <p className="text-sm text-emerald-100/80 max-w-xl mx-auto">Seluruh rantai hospitality Indonesia — dari hotel bintang 5 hingga homestay desa wisata.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Jenis Investasi Hospitality</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {types.map((t, i) => (
            <motion.div key={t.nama} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
              <Card className={`bg-gradient-to-br ${t.gradient} border ${t.border} hover:shadow-md transition-all h-full`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/80 border border-white flex items-center justify-center shrink-0">{t.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900">{t.nama}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{t.lokasi}</p>
                      <div className="flex gap-3 mt-2"><span className="text-[10px] font-semibold text-blue-600">{t.range}</span><span className="text-[10px] font-semibold text-emerald-600">IRR {t.irr}</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FI>
      <FI delay={0.25}>
        <Card className="bg-amber-50 border-amber-100"><CardContent className="p-5"><div className="flex items-center gap-2 mb-2"><Star className="size-5 text-amber-600" /><h4 className="text-sm font-bold text-slate-900">Success Story</h4></div><p className="text-sm text-slate-600 leading-relaxed">Resort premium di Bali berhasil mencatat <strong>ROI 18%</strong> dalam 3 tahun pertama beroperasi, dengan tingkat hunian rata-rata 85% dan pendapatan per kamar naik 34% YoY. Model ini direplikasi ke 12 destinasi super prioritas lainnya.</p></CardContent></Card>
      </FI>
    </div>
  );
}

// ============================================================
// 3. MODAL INVESTASI F&B
// ============================================================
export function ModalInvestFnB({ onClose }: { onClose: () => void }) {
  const kuliner = [
    { nama: "Rendang", asal: "Sumatera Barat", desc: "Makanan terlezat di dunia versi CNN" },
    { nama: "Nasi Goreng", asal: "Jakarta", desc: "Ikon kuliner street food Indonesia" },
    { nama: "Sate Ayam", asal: "Madura/Jawa", desc: "50+ variasi di seluruh Nusantara" },
    { nama: "Soto Betawi", asal: "Jakarta", desc: "Kuah santan khas Betawi" },
    { nama: "Gado-gado", asal: "Jakarta", desc: "Salad sayur dengan bumbu kacang" },
    { nama: "Bakso", asal: "Solo/Jawa", desc: "Meatball soup legendaris" },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 p-8 sm:p-10">
          <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/15 rounded-full blur-[100px]" /></div>
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><UtensilsCrossed className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Investasi F&B Khas Nusantara</h2>
            <p className="text-sm text-orange-100/80 max-w-xl mx-auto">Cita rasa nusantara ke dunia — fine dining lokal, kafe desa, culinary tourism.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[{ v: "$47M", l: "Volume B2B/Bulan" }, { v: "12.450", l: "Transaksi/Bulan" }, { v: "8.000+", l: "Pelaku UMKM" }].map((s) => (
            <Card key={s.l} className="bg-white border-orange-50 text-center"><CardContent className="p-4"><p className="text-xl font-bold text-orange-600">{s.v}</p><p className="text-[10px] text-slate-500 mt-1">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Kuliner Nusantara Ikonik</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {kuliner.map((k, i) => (
            <motion.div key={k.nama} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.04 }}>
              <Card className="bg-white border-orange-50 hover:border-orange-200 hover:shadow-sm transition-all h-full"><CardContent className="p-4 text-center"><h4 className="text-sm font-bold text-slate-900">{k.nama}</h4><p className="text-[10px] text-orange-600 font-medium">{k.asal}</p><p className="text-[11px] text-slate-500 mt-1">{k.desc}</p></CardContent></Card>
            </motion.div>
          ))}
        </div>
      </FI>
    </div>
  );
}

// ============================================================
// 4. MODAL DASHBOARD ROI
// ============================================================
export function ModalDashboardROI({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 p-8 sm:p-10">
          <div className="relative text-center">
            <Badge className="mb-3 bg-emerald-400/20 text-emerald-200 border-emerald-400/30"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />Live Dashboard</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard ROI Investor</h2>
            <p className="text-sm text-emerald-100/80 max-w-xl mx-auto">Framework KPA-5 — Simulasi pengembalian investasi real-time dengan proyeksi 10 tahun.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { tier: "Jalur Anchor", range: "$10M–$500M", irr: "14–18%", color: "from-blue-500 to-blue-700" },
            { tier: "Jalur Pertumbuhan", range: "$1M–$10M", irr: "12–16%", color: "from-emerald-500 to-emerald-700" },
            { tier: "Jalur Komunitas", range: "$10K–$1M", irr: "10–15%", color: "from-amber-500 to-amber-700" },
          ].map((t) => (
            <Card key={t.tier} className="bg-white border-slate-100 overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${t.color}`} />
              <CardContent className="p-4 text-center">
                <h4 className="text-sm font-bold text-slate-900">{t.tier}</h4>
                <p className="text-[11px] text-slate-500 mt-1">{t.range}</p>
                <p className="text-lg font-bold text-emerald-600 mt-2">IRR {t.irr}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FI>
      <FI delay={0.2}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Simulator ROI Interaktif</h3>
        <SimulatorROI />
      </FI>
    </div>
  );
}

// ============================================================
// 5. MODAL GABUNG ANGGOTA
// ============================================================
export function ModalGabungAnggota({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState({ nama: "", email: "", hp: "", unit: "", alamat: "" });
  const units = [
    { id: "produksi", nama: "Unit Produksi Wisata", anggota: "2.450", desc: "Kerajinan, oleh-oleh, produk desa", gradient: "from-blue-500 to-blue-600" },
    { id: "jasa", nama: "Unit Jasa Wisata", anggota: "1.830", desc: "Tour guide, transportasi, hospitality", gradient: "from-emerald-500 to-emerald-600" },
    { id: "distribusi", nama: "Unit Distribusi Wisata", anggota: "1.240", desc: "Logistik berdaulat tanpa tengkulak", gradient: "from-amber-500 to-amber-600" },
    { id: "modal", nama: "Unit Modal Wisata", anggota: "890", desc: "Investasi komunitas & institusional", gradient: "from-purple-500 to-purple-600" },
    { id: "digital", nama: "Unit Digital Wisata", anggota: "606", desc: "Platform teknologi & digitalisasi", gradient: "from-cyan-500 to-cyan-600" },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Pendaftaran Berhasil!", description: `Selamat datang di Ekosistem NusaParadise sebagai anggota ${form.unit}.` });
    setForm({ nama: "", email: "", hp: "", unit: "", alamat: "" });
  };
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><UserPlus className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Gabung Anggota Ekosistem</h2>
            <p className="text-sm text-blue-100/80 max-w-xl mx-auto">Pintu masuk pendaftaran 5 Unit KKMNMP — 7.016+ anggota aktif menanti Anda.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Pilih Unit Keanggotaan</h3>
        <div className="space-y-2">
          {units.map((u) => (
            <motion.div key={u.id} whileHover={{ scale: 1.01 }} className="group flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-pointer"
              onClick={() => setForm(f => ({ ...f, unit: u.nama }))}>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${u.gradient} flex items-center justify-center text-white shrink-0`}><Users className="size-4" /></div>
              <div className="flex-1"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-800">{u.nama}</span><span className="text-[10px] text-slate-400 font-mono">{u.anggota}</span></div><p className="text-[10px] text-slate-500 mt-0.5">{u.desc}</p></div>
              <ChevronRight className="size-3 text-slate-300 group-hover:text-blue-400" />
            </motion.div>
          ))}
        </div>
      </FI>
      <FI delay={0.2}>
        <Card className="bg-white border-blue-100"><CardContent className="p-5">
          <h3 className="text-base font-bold text-slate-900 mb-4">Formulir Pendaftaran</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input placeholder="Nama Lengkap" value={form.nama} onChange={e => setForm(f => ({ ...f, nama: e.target.value }))} className="h-9 text-xs" required />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="h-9 text-xs" required />
              <Input placeholder="No. HP" value={form.hp} onChange={e => setForm(f => ({ ...f, hp: e.target.value }))} className="h-9 text-xs" />
            </div>
            <Input placeholder={form.unit || "Pilih Unit di atas..."} value={form.unit} readOnly className="h-9 text-xs bg-slate-50" />
            <Input placeholder="Alamat Desa/Kota" value={form.alamat} onChange={e => setForm(f => ({ ...f, alamat: e.target.value }))} className="h-9 text-xs" />
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-xs h-10">
              <UserPlus className="size-4 mr-2" />Daftar Sekarang
            </Button>
          </form>
        </CardContent></Card>
      </FI>
    </div>
  );
}

// ============================================================
// 6. MODAL DOMPET DIGITAL
// ============================================================
export function ModalDompetDigital({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const transactions = [
    { nama: "Booking Villa Bali", tipe: "Pengeluaran", nominal: "-Rp 2.500.000", waktu: "Hari ini, 14:30", color: "text-red-500" },
    { nama: "Top Up via QRIS", tipe: "Pemasukan", nominal: "+Rp 5.000.000", waktu: "Hari ini, 10:15", color: "text-emerald-500" },
    { nama: "Transfer Desa Toraja", tipe: "Transfer", nominal: "-Rp 750.000", waktu: "Kemarin, 18:00", color: "text-red-500" },
    { nama: "SHU Desa Bromo", tipe: "Pemasukan", nominal: "+Rp 1.200.000", waktu: "Kemarin, 09:00", color: "text-emerald-500" },
    { nama: "Bayar Homestay Raja Ampat", tipe: "Pengeluaran", nominal: "-Rp 3.800.000", waktu: "2 hari lalu", color: "text-red-500" },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-6">
          <div className="absolute top-4 right-4 w-24 h-24 border border-white/10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/5 rounded-full" />
          <div className="relative flex items-center justify-between">
            <div><div className="flex items-center gap-2 mb-1"><Wallet className="size-5 text-blue-200" /><span className="text-sm font-bold text-white">JP3 Pay</span></div><p className="text-[10px] text-blue-200">Dompet Digital Ekosistem</p></div>
            <Badge className="bg-emerald-400/20 text-emerald-200 border-emerald-400/30 text-[9px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />QRIS Ready</Badge>
          </div>
          <div className="mt-4 pt-4 border-t border-white/15">
            <p className="text-[10px] text-blue-200 uppercase tracking-wider">Saldo Anda</p>
            <p className="text-3xl font-bold text-white tabular-nums">Rp 4.750.000</p>
            <p className="text-[11px] text-blue-300 mt-0.5">≈ USD $290.12</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="grid grid-cols-5 gap-2">
          {[
            { label: "Top Up", icon: <Plus className="size-4" />, toast: () => toast({ title: "Top Up Berhasil", description: "Saldo berhasil ditambah. Rp 5.000.000 telah masuk ke JP3 Pay Anda." }) },
            { label: "Transfer", icon: <Users className="size-4" />, toast: () => toast({ title: "Transfer", description: "Fitur transfer akan segera tersedia. Silakan hubungi CS untuk transfer manual." }) },
            { label: "Bayar", icon: <QrCode className="size-4" />, toast: () => toast({ title: "Pembayaran", description: "Scan QR code di merchant untuk pembayaran. Berlaku di 6.016+ desa wisata." }) },
            { label: "Tarik", icon: <CreditCard className="size-4" />, toast: () => toast({ title: "Tarik Dana", description: "Penarikan akan diproses dalam 1x24 jam ke rekening terdaftar." }) },
            { label: "History", icon: <History className="size-4" />, toast: () => toast({ title: "Riwayat Transaksi", description: "Menampilkan 5 transaksi terakhir Anda." }) },
          ].map((a) => (
            <button key={a.label} onClick={a.toast} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all"><span className="text-blue-600">{a.icon}</span><span className="text-[10px] font-medium text-slate-600">{a.label}</span></button>
          ))}
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Riwayat Transaksi</h3>
        <div className="space-y-2">
          {transactions.map((t) => (
            <div key={t.waktu} className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100">
              <div><p className="text-xs font-semibold text-slate-800">{t.nama}</p><p className="text-[10px] text-slate-400">{t.waktu}</p></div>
              <span className={`text-sm font-bold tabular-nums ${t.color}`}>{t.nominal}</span>
            </div>
          ))}
        </div>
      </FI>
      <FI delay={0.25}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Keamanan</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: "PIN 6 Digit", icon: <Lock className="size-4 text-blue-600" /> },
            { label: "Biometrik", icon: <Smartphone className="size-4 text-emerald-600" /> },
            { label: "Enkripsi 256-bit", icon: <Shield className="size-4 text-amber-600" /> },
            { label: "OTP Verifikasi", icon: <BadgeCheck className="size-4 text-violet-600" /> },
          ].map((s) => (
            <Card key={s.label} className="bg-slate-50 border-slate-100"><CardContent className="p-3 text-center">{s.icon}<p className="text-[10px] font-medium text-slate-700 mt-1.5">{s.label}</p></CardContent></Card>
          ))}
        </div>
      </FI>
    </div>
  );
}

// ============================================================
// 7. MODAL MARKETPLACE B2B
// ============================================================
export function ModalMarketplace({ onClose }: { onClose: () => void }) {
  const suppliers = [
    { nama: "Koperasi Desa Borobudur", lokasi: "Jawa Tengah", produk: "Kerajinan Batik, Oleh-oleh", rating: 4.8, verified: true },
    { nama: "UMKM Raja Ampat", lokasi: "Papua Barat Daya", produk: "Hasil Laut, Kerajinan Nusifor", rating: 4.9, verified: true },
    { nama: "Petani Organik Bali", lokasi: "Bali", produk: "Kopi, Bumbu, Buah-buahan", rating: 4.7, verified: true },
    { nama: "Kuliner Toraja Heritage", lokasi: "Sulawesi Selatan", produk: "Kopi Toraja, Pa'piong, Katemak", rating: 4.8, verified: false },
    { nama: "Kerajinan Yogyakarta", lokasi: "Yogyakarta", produk: "Perak, Batik, Wayang Kulit", rating: 4.6, verified: true },
    { nama: "Hasil Bumi Kalimantan", lokasi: "Kalimantan Timur", produk: "Rotan, Dammar, Madu Hutan", rating: 4.5, verified: true },
  ];
  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />
      <FI>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 p-8 sm:p-10">
          <div className="relative text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4"><ShoppingCart className="size-7 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Marketplace Rantai Pasok B2B</h2>
            <p className="text-sm text-amber-100/80 max-w-xl mx-auto">Menghubungkan hotel dengan petani dan supplier desa — rantai pasok berdaulat tanpa tengkulak.</p>
          </div>
        </div>
      </FI>
      <FI delay={0.1}>
        <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100 mb-2">
          <div className="flex items-center gap-2"><Package className="size-4 text-emerald-600" /><span className="text-xs font-semibold text-slate-700">Petani & UMKM Desa</span></div>
          <ArrowRight className="size-3 text-slate-400" />
          <div className="flex items-center gap-2"><Truck className="size-4 text-blue-600" /><span className="text-xs font-semibold text-slate-700">Logistik</span></div>
          <ArrowRight className="size-3 text-slate-400" />
          <div className="flex items-center gap-2"><Store className="size-4 text-amber-600" /><span className="text-xs font-semibold text-slate-700">Hotel & Restoran</span></div>
        </div>
      </FI>
      <FI delay={0.15}>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Supplier Terdaftar</h3>
        <div className="space-y-2">
          {suppliers.map((s, i) => (
            <motion.div key={s.nama} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.04 }}>
              <Card className="bg-white border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0"><Store className="size-4 text-amber-600" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2"><h4 className="text-xs font-bold text-slate-900">{s.nama}</h4>{s.verified && <BadgeCheck className="size-3.5 text-blue-500" />}</div>
                      <p className="text-[10px] text-slate-500">{s.lokasi} · {s.produk}</p>
                    </div>
                    <div className="text-right shrink-0"><div className="flex items-center gap-1"><Star className="size-3 text-amber-400 fill-amber-400" /><span className="text-xs font-bold text-slate-800">{s.rating}</span></div></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FI>
      <FI delay={0.3}>
        <div className="grid grid-cols-3 gap-3">
          {[{ v: "12.450", l: "Transaksi/Bulan" }, { v: "Rp 47M", l: "Volume B2B" }, { v: "3.200", l: "Supplier Aktif" }].map((s) => (
            <Card key={s.l} className="bg-white border-amber-50 text-center"><CardContent className="p-4"><p className="text-xl font-bold text-amber-600">{s.v}</p><p className="text-[10px] text-slate-500 mt-1">{s.l}</p></CardContent></Card>
          ))}
        </div>
      </FI>
    </div>
  );
}
