"use client";

import { motion } from "framer-motion";
import { Shield, Users, Building2, Handshake, ChevronRight, Crown, Landmark, BookOpen, Scale, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ============================================================
// Section Header Component
// ============================================================
function SectionHeader({ icon, label, title, description }: { icon: React.ReactNode; label: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 sm:mb-16"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">{label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
      <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  );
}

// ============================================================
// Section 1: Patron & Kepemimpinan Peradaban
// ============================================================
export default function SectionPatron() {
  return (
    <section id="patron" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={<Shield className="size-4 text-blue-600" />}
          label="Patron & Kepemimpinan"
          title="Patron & Kepemimpinan Peradaban"
          description="Kekuatan politik dan backing kenegaraan yang absolut — fondasi kokoh ekosistem pariwisata peradaban NusaParadise."
        />

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-12 lg:p-16">
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-[60px]" />
              <div className="absolute top-4 left-4 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/5 rounded-full" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Presidential Avatar */}
              <div className="shrink-0 relative">
                {/* Shimmer overlay */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-300/40 to-yellow-400/0 animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none z-0" />
                <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-600 p-[3px] shadow-lg shadow-amber-500/20">
                  <div className="w-full h-full rounded-[13px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex flex-col items-center justify-center gap-2 overflow-hidden relative">
                    {/* Subtle radial glow */}
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
                <Badge className="mb-4 bg-yellow-400/20 text-yellow-200 border-yellow-400/30 hover:bg-yellow-400/30">
                  <Crown className="size-3 mr-1" />
                  Patron Utama Nasional
                </Badge>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                  Presiden Republik Indonesia
                </h3>
                <p className="text-sm sm:text-base text-blue-100/80 max-w-xl mb-6 leading-relaxed">
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
        </motion.div>

        {/* 4 Sub-item Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Presiden Republik Indonesia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center shrink-0">
                    <Shield className="size-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900">Presiden Republik Indonesia</h3>
                      <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100 px-1.5 py-0">Patron Utama</Badge>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Patron Utama Nasional — pemimpin tertinggi ekosistem NusaParadise yang memberikan arahan strategis dan backing politik penuh.
                    </p>
                    {/* Patron avatar */}
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 p-[2px] shadow-sm shadow-amber-400/20">
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                            <Landmark className="size-5 text-amber-600" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-700">Patron Utama</p>
                        <p className="text-[11px] text-slate-400">Pemimpin Tertinggi Ekosistem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: BAKORNAS KKMNMP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center shrink-0">
                    <Users className="size-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900">Arsitek Kedaulatan & BAKORNAS</h3>
                      <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100 px-1.5 py-0">BAKORNAS</Badge>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Otak strategis di balik gerakan peradaban wisata — Badan Koordinasi Nasional KKMNMP sebagai penggerak utama.
                    </p>
                    {/* Struktur Organisasi BAKORNAS */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[11px] font-medium text-slate-700">Ketua BAKORNAS</span>
                      </div>
                      <div className="ml-4 flex flex-col gap-1">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-[10px] text-slate-700 font-medium">Wakil Ketua Bidang Strategis & Kebijakan</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          <span className="text-[10px] text-slate-600">Sekretaris Jenderal & Operasional</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          <span className="text-[10px] text-slate-600">Ketua Komisi Investasi & Pendanaan</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          <span className="text-[10px] text-slate-600">Koordinator 7 Wilayah Kepulauan</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                          <span className="text-[10px] text-slate-600">Ketua Komisi Legal & Kepatuhan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Jaringan Kementerian */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center shrink-0">
                    <Building2 className="size-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900">Jaringan Kementerian & Dinas</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Sinergi tiga tingkat pemerintahan — Pusat, Provinsi, dan Kab/Kota untuk kemakmuran desa wisata.
                    </p>
                    {/* 3-level hierarchy */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                      <div className="flex-1 px-3 py-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center">
                        <Building2 className="size-4 mx-auto mb-1 text-blue-200" />
                        <span className="text-[11px] font-semibold block">Pusat</span>
                        <span className="text-[9px] text-blue-200">Kemenparekraf</span>
                      </div>
                      <ChevronRight className="size-4 text-blue-300 hidden sm:block shrink-0" />
                      <span className="text-blue-300 hidden sm:block text-xs shrink-0">↓</span>
                      <div className="flex-1 px-3 py-2.5 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 text-white text-center">
                        <Landmark className="size-4 mx-auto mb-1 text-blue-100" />
                        <span className="text-[11px] font-semibold block">Provinsi</span>
                        <span className="text-[9px] text-blue-100">38 Dinas Pariwisata</span>
                      </div>
                      <ChevronRight className="size-4 text-blue-300 hidden sm:block shrink-0" />
                      <span className="text-blue-300 hidden sm:block text-xs shrink-0">↓</span>
                      <div className="flex-1 px-3 py-2.5 rounded-lg bg-gradient-to-br from-blue-200 to-blue-300 text-blue-800 text-center">
                        <Building2 className="size-4 mx-auto mb-1 text-blue-600" />
                        <span className="text-[11px] font-semibold block">Kab/Kota</span>
                        <span className="text-[9px] text-blue-600">514 Dinas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4: Aliansi Strategis ASITA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center shrink-0">
                    <Handshake className="size-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900">Aliansi Strategis ASITA</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Association of The Indonesian Tours and Travel Agencies — mitra operasional dan distribusi global.
                    </p>
                    {/* Partnership badges */}
                    <div className="flex flex-wrap gap-2">
                      {["ASITA Pusat", "ASITA Propinsi", "Travel Agent", "Tour Operator", "DMC", "Airlines Partner", "Hotel Association"].map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-medium text-blue-700"
                        >
                          <Handshake className="size-2.5 text-blue-400" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Fondasi Hukum & Legal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center">
              <Scale className="size-3.5 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Fondasi Hukum & Legal</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 5: UU Pariwisata */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <Card className="bg-white border-slate-100 hover:shadow-md hover:border-amber-200 hover:shadow-amber-50/50 transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <BookOpen className="size-5 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 mb-1">UU Pariwisata No. 10/2009</h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed">
                        Landasan utama pengembangan pariwisata nasional yang mengatur ekosistem industri dan kelembagaan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 6: Permenkop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              <Card className="bg-white border-slate-100 hover:shadow-md hover:border-amber-200 hover:shadow-amber-50/50 transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <Scale className="size-5 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Permenkop No. 8/2021</h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed">
                        Regulasi koperasi dan UMKM dalam ekosistem pariwisata berbasis pemberdayaan masyarakat.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 7: PP No. 50/2011 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.3 }}
            >
              <Card className="bg-white border-slate-100 hover:shadow-md hover:border-amber-200 hover:shadow-amber-50/50 transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <FileText className="size-5 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 mb-1">PP No. 50/2011 — Rencana Induk Pariwisata Nasional</h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed">
                        Blueprint nasional pengembangan destinasi dan infrastruktur pariwisata Indonesia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 8: MoU Kemenparekraf & Kemenkop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.4 }}
            >
              <Card className="bg-white border-slate-100 hover:shadow-md hover:border-amber-200 hover:shadow-amber-50/50 transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <Handshake className="size-5 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 mb-1">MoU Kemenparekraf & Kemenkop</h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed">
                        Memorandum of Understanding lintas kementerian untuk sinergi pariwisata dan koperasi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
