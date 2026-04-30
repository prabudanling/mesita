"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, Wallet, ShoppingCart, ArrowRight, QrCode, Package, Truck, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// QR-like visual pattern (7x7 grid)
// ============================================================
const qrPattern: boolean[] = [
  // Row 0: top-left corner marker
  true,  true,  true,  false, true,  true,  true,
  // Row 1
  true,  false, false, true,  false, false, true,
  // Row 2
  true,  false, true,  true,  true,  false, true,
  // Row 3
  false, true,  true,  true,  false, true,  false,
  // Row 4: bottom-left / top-right corner marker
  true,  false, true,  false, true,  false, true,
  // Row 5
  true,  true,  false, true,  false, true,  true,
  // Row 6: bottom-right corner marker
  true,  true,  true,  false, true,  true,  true,
];

// ============================================================
// Unit Registration Paths
// ============================================================
const UNIT_PATHS = [
  { id: "unit-produksi", label: "Unit Produksi Wisata", deskripsi: "Pengelolaan produk wisata, kerajinan khas desa, dan oleh-oleh Nusantara untuk pasar lokal & global", warna: "from-blue-500 to-blue-600", anggota: "2.450" },
  { id: "unit-jasa", label: "Unit Jasa Wisata", deskripsi: "Tour guide bersertifikat, transportasi wisata, hospitality service, dan aktivitas pengalaman", warna: "from-emerald-500 to-emerald-600", anggota: "1.830" },
  { id: "unit-distribusi", label: "Unit Distribusi Wisata", deskripsi: "Rantai distribusi produk desa ke pasar nasional dan internasional — logistik berdaulat tanpa tengkulak", warna: "from-amber-500 to-amber-600", anggota: "1.240" },
  { id: "unit-modal", label: "Unit Modal Wisata", deskripsi: "Penghimpunan, distribusi, dan pengelolaan modal investasi dari komunitas hingga institusional", warna: "from-purple-500 to-purple-600", anggota: "890" },
  { id: "unit-digital", label: "Unit Digital Wisata", deskripsi: "Platform teknologi, aplikasi mobile, Sistem Informasi Pariwisata, dan layanan digital desa wisata", warna: "from-cyan-500 to-cyan-600", anggota: "606" },
];

// ============================================================
// Supply Chain Flow Data
// ============================================================
const RANTAI_PASOK = [
  { tahap: "Petani & UMKM Desa", icon: <Package className="size-5 text-emerald-600" />, deskripsi: "Produk segar organik, kerajinan tangan, oleh-oleh khas, dan hasil bumi desa wisata", warna: "bg-emerald-50 border-emerald-200" },
  { tahap: "Logistik & Distributor", icon: <Truck className="size-5 text-blue-600" />, deskripsi: "Rantai distribusi berdaulat — cold chain, tracking digital, pengiriman langsung tanpa perantara", warna: "bg-blue-50 border-blue-200" },
  { tahap: "Hotel, Restoran & Resort", icon: <Store className="size-5 text-amber-600" />, deskripsi: "B2B procurement langsung — penerima akhir yang terhubung dengan supplier desa via marketplace", warna: "bg-amber-50 border-amber-200" },
];

// ============================================================
// Section 4: Ekosistem Pariwisata Nusantara
// ============================================================
export default function SectionEkosistem() {
  const { openModal } = useNavigation();
  return (
    <section id="ekosistem-pariwisata" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[100px]" />
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
              <Users className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Ekosistem Pariwisata</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Ekosistem Pariwisata Nusantara</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Mesin pencari anggota KKMNMP — pintu masuk pariwisata peradaban dengan dompet digital dan marketplace B2B.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Gabung Anggota Ekosistem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <UserPlus className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Gabung Anggota Ekosistem</h3>
                    <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100 mt-1">Daftar Sekarang</Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  Pintu masuk pendaftaran 5 Unit — Produksi, Jasa, Distribusi, Modal, dan Digital. Bergabunglah dengan 7.016+ anggota aktif.
                </p>

                {/* 5 Unit Paths */}
                <div className="flex flex-col gap-2.5">
                  {UNIT_PATHS.map((unit) => (
                    <div
                      key={unit.id}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer"
                      onClick={() => openModal("gabung-anggota")}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${unit.warna} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                        <Users className="size-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{unit.label}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{unit.anggota}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{unit.deskripsi}</p>
                      </div>
                      <ArrowRight className="size-3 text-slate-300 group-hover:text-blue-400 shrink-0 transition-colors" />
                    </div>
                  ))}
                </div>

                <button onClick={() => openModal("gabung-anggota")} className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-sm shadow-blue-500/20">
                  <UserPlus className="size-4" />
                  <span>Daftar Anggota Sekarang</span>
                </button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Dompet Digital JP3 Pay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full overflow-hidden">
              {/* Card gradient top */}
              <div className="h-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/5 rounded-full" />
                </div>
                <div className="relative p-5 flex items-center justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Wallet className="size-5 text-blue-200" />
                      <span className="text-sm font-bold text-white">JP3 Pay</span>
                    </div>
                    <p className="text-[10px] text-blue-200">Dompet Digital Ekosistem</p>
                  </div>
                  <Badge className="bg-emerald-400/20 text-emerald-200 border-emerald-400/30 hover:bg-emerald-400/30 text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />
                    QRIS Ready
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Balance Display */}
                <div className="mb-5">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Saldo JP3 Pay</p>
                  <p className="font-mono text-3xl font-bold text-slate-900 tabular-nums">Rp 4.750.000</p>
                  <p className="text-[11px] text-slate-400 mt-1">≈ USD $290.12</p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { label: "Top Up", icon: <ArrowRight className="size-4 rotate-[-45deg]" /> },
                    { label: "Transfer", icon: <Users className="size-4" /> },
                    { label: "Bayar", icon: <QrCode className="size-4" /> },
                  ].map((action) => (
                    <button key={action.label} onClick={() => openModal("dompet-digital")} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                      <span className="text-blue-600">{action.icon}</span>
                      <span className="text-[10px] font-medium text-slate-600">{action.label}</span>
                    </button>
                  ))}
                </div>

                {/* QR Code Visual */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <div className="grid grid-cols-7 gap-[2px] w-24 h-24">
                      {qrPattern.map((filled, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-full aspect-square rounded-[1px]",
                            filled ? "bg-slate-800" : "bg-white"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium mt-2">Scan QRIS</span>
                </div>

                <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400">Berlaku di 6.016+ desa wisata</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Marketplace Rantai Pasok B2B */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                    <ShoppingCart className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Marketplace Rantai Pasok B2B</h3>
                    <Badge className="text-[9px] bg-amber-50 text-amber-600 border-amber-100 mt-1">Supply Chain</Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Menghubungkan hotel dengan petani, supplier desa — rantai pasok berdaulat tanpa tengkulak.
                </p>

                {/* Flowchart Visualization */}
                <div className="flex flex-col gap-3">
                  {RANTAI_PASOK.map((item, index) => (
                    <div key={item.tahap} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-xl border ${item.warna} flex items-center justify-center shrink-0`}>
                          {item.icon}
                        </div>
                        {index < RANTAI_PASOK.length - 1 && (
                          <div className="w-px h-6 bg-gradient-to-b from-slate-200 to-slate-100 mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-800">{item.tahap}</h4>
                          {index < RANTAI_PASOK.length - 1 && (
                            <ArrowRight className="size-3 text-slate-300" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.deskripsi}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Transaction Stats */}
                <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-slate-100">
                  <div className="text-center p-3 rounded-lg bg-slate-50">
                    <p className="font-mono text-lg font-bold text-slate-900 tabular-nums">12.450</p>
                    <p className="text-[10px] text-slate-500">Transaksi/Bulan</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-slate-50">
                    <p className="font-mono text-lg font-bold text-emerald-600 tabular-nums">Rp 47M</p>
                    <p className="text-[10px] text-slate-500">Volume B2B</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
