"use client";

import { motion } from "framer-motion";
import { Award, FileCheck, Star, CheckCircle2, Shield, Landmark, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ============================================================
// Certification & Permit Data
// ============================================================
const IZIN_TYPES = [
  { label: "Izin Usaha Pariwisata (IUP)", status: true },
  { label: "Sertifikat CHSE", status: true },
  { label: "Sertifikasi Halal Tourism", status: true },
  { label: "Izin Mendirikan Bangunan (IMB)", status: true },
  { label: "Perizinan Lingkungan (AMDAL)", status: false },
  { label: "NPWP Badan Usaha", status: true },
];

const BINTANG_CRITERIA = [
  { bintang: 5, label: "Fasilitas Premium & Pelayanan Personal", desc: "Butler service, spa premium, fine dining, infinity pool" },
  { bintang: 4, label: "Fasilitas Superior & Pelayanan Prima", desc: "Room service 24/7, kolam renang, restoran bintang" },
  { bintang: 3, label: "Fasilitas Standar & Pelayanan Baik", desc: "AC, WiFi, sarapan, resepsionis 24 jam" },
  { bintang: 2, label: "Fasilitas Dasar & Pelayanan Memadai", desc: "Kamar bersih, kamar mandi dalam, parkir" },
  { bintang: 1, label: "Fasilitas Minimal & Pelayanan Ramah", desc: "Tempat tidur nyaman, kebersihan terjamin" },
];

// ============================================================
// Section 5: Standar & Sertifikasi Global
// ============================================================
export default function SectionSertifikasi() {
  return (
    <section id="sertifikasi" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-50/30 rounded-full blur-[100px]" />
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
              <Award className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Standar & Sertifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Standar & Sertifikasi Global</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Menyakinkan turis internasional: wisata aman, legal, dan bersertifikat — kepercayaan yang membangun peradaban.
          </p>
        </motion.div>

        {/* Trust Badges Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {[
            { label: "Kemenparekraf", icon: <Landmark className="size-4" /> },
            { label: "Halal Indonesia", icon: <Globe className="size-4" /> },
            { label: "CHSE Certified", icon: <Shield className="size-4" /> },
            { label: "UNESCO Heritage", icon: <Award className="size-4" /> },
            { label: "ISO 9001:2015", icon: <FileCheck className="size-4" /> },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-100 shadow-sm">
              <span className="text-blue-500">{badge.icon}</span>
              <span className="text-xs font-semibold text-slate-700">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: CHSE & Halal Tourism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Sertifikasi CHSE & Halal Tourism</h3>
                    <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">Global Standard</Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  Cleanliness, Health, Safety, Environment + Sertifikasi Halal — standar ganda untuk kepercayaan global.
                </p>

                {/* CHSE Criteria */}
                <div className="space-y-2.5">
                  {[
                    { label: "Cleanliness — Kebersihan & Sanitasi", checked: true },
                    { label: "Health — Protokol Kesehatan", checked: true },
                    { label: "Safety — Keamanan Wisatawan", checked: true },
                    { label: "Environment — Kelestarian Alam", checked: true },
                    { label: "Halal — Sertifikasi Halal", checked: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Destinasi Tersertifikasi</span>
                    <span className="font-mono text-lg font-bold text-blue-600 tabular-nums">2.847</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Perizinan Terpadu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
                    <FileCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Perizinan Terpadu Ekosistem</h3>
                    <Badge className="text-[9px] bg-emerald-50 text-emerald-600 border-emerald-100">Satu Pintu</Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  Satu pintu perizinan untuk seluruh rantai pariwisata — dari desa hingga kementerian.
                </p>

                {/* Permit Types */}
                <div className="space-y-2">
                  {IZIN_TYPES.map((izin) => (
                    <div key={izin.label} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-blue-100 transition-colors">
                      <div className="flex items-center gap-2.5">
                        {izin.status ? (
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-200 shrink-0" />
                        )}
                        <span className="text-xs text-slate-700">{izin.label}</span>
                      </div>
                      {izin.status && (
                        <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Aktif</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Waktu Proses Rata-rata</span>
                    <span className="font-mono text-lg font-bold text-emerald-600 tabular-nums">14 Hari</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Standar Bintang 5 Desa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 shrink-0">
                    <Star className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Standar Layanan Bintang 5 Desa</h3>
                    <Badge className="text-[9px] bg-amber-50 text-amber-600 border-amber-100">Quality Framework</Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  Framework quality control berbasis bintang 5 — elevasi layanan desa wisata ke standar internasional.
                </p>

                {/* Star Rating Framework */}
                <div className="flex flex-col gap-2">
                  {BINTANG_CRITERIA.map((item) => (
                    <div key={item.bintang} className="flex items-start gap-2.5 p-2.5 rounded-lg border border-slate-100 hover:border-amber-100 transition-colors">
                      <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`size-3 ${i < item.bintang ? "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                          />
                        ))}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-slate-800">{item.label}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Desa Berbintang 4+</span>
                    <span className="font-mono text-lg font-bold text-amber-600 tabular-nums">1.203</span>
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
