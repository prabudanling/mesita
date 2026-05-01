"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Waves, Mountain, Clock, GraduationCap, Plane, MapPin, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// Destination Data
// ============================================================
interface Destinasi {
  nama: string;
  lokasi: string;
  deskripsi: string;
  image: string;
  rating: number;
  badge?: string;
}

const DESTINASI_BIRU: Destinasi[] = [
  { nama: "Raja Ampat", lokasi: "Papua Barat Daya", deskripsi: "Biodiversitas laut #1 planet — 1.500+ spesies ikan, 600+ spesies karang, surga penyelam dunia.", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&h=500&fit=crop", rating: 4.9, badge: "Best Seller" },
  { nama: "Labuan Bajo", lokasi: "Nusa Tenggara Timur", deskripsi: "Gerbang Pulau Komodo — destinasi super prioritas dengan resort premium dan pantai pink.", image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=500&fit=crop", rating: 4.8 },
  { nama: "Bali", lokasi: "Bali", deskripsi: "Pulau Dewata — warisan budaya, sawah terasering, pantai ikonik, dan kehidupan malam dunia.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop", rating: 4.7 },
  { nama: "Pulau Weh", lokasi: "Aceh", deskripsi: "Titik paling barat Indonesia — diving spot tersembunyi dengan air laut kristal jernih.", image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=500&fit=crop", rating: 4.6 },
  { nama: "Wakatobi", lokasi: "Sulawesi Tenggara", deskripsi: "Taman Nasional Laut — 942 spesies ikan dan 750 spesies karang dalam satu lokasi.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop", rating: 4.7 },
  { nama: "Derawan", lokasi: "Kalimantan Timur", deskripsi: "Danau ubur-ubur tak menyengat, penyu hijau, dan reef manta — keajaiban alam Kalimantan.", image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=500&fit=crop", rating: 4.5 },
];

const DESTINASI_KETINGGIAN: Destinasi[] = [
  { nama: "Gunung Bromo", lokasi: "Jawa Timur", deskripsi: "Lanskap lunar Indonesia — lautan pasir, kawah aktif, dan sunrise terbaik se-Asia Tenggara.", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=500&fit=crop", rating: 4.8 },
  { nama: "Danau Toba", lokasi: "Sumatera Utara", deskripsi: "Danau vulkanik terbesar di dunia — kekayaan budaya Batak dan air biru yang memukau.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop", rating: 4.7 },
  { nama: "Dieng Plateau", lokasi: "Jawa Tengah", deskripsi: "Dataran tinggi mistis — candi kuno, telaga warna, dan embun pagi yang mempesona.", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop", rating: 4.5 },
  { nama: "Rinjani", lokasi: "Nusa Tenggara Barat", deskripsi: "Gunung tertinggi kedua — Danau Segara Anak di kawah puncak, trekking kelas dunia.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop", rating: 4.8 },
  { nama: "Puncak Jayawijaya", lokasi: "Papua", deskripsi: "Salju abadi di khatulistiwa — salah satu dari tujuh puncak benua, pendakian ekstrem.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop", rating: 4.9 },
  { nama: "Air Terjun Moramo", lokasi: "Sulawesi Tenggara", deskripsi: "Ratusan tingkat air terjun bertingkat — tersembunyi di hutan tropis Sulawesi.", image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8855?w=800&h=500&fit=crop", rating: 4.6 },
];

const DESTINASI_WAKTU: Destinasi[] = [
  { nama: "Candi Borobudur", lokasi: "Jawa Tengah", deskripsi: "Candi Buddha terbesar di dunia — warisan UNESCO, magnet spiritual & budaya global.", image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&h=500&fit=crop", rating: 4.9, badge: "UNESCO" },
  { nama: "Candi Prambanan", lokasi: "Jawa Tengah", deskripsi: "Kompleks candi Hindu terbesar di Indonesia — relief Ramayana dan arsitektur menjulang.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=500&fit=crop", rating: 4.8, badge: "UNESCO" },
  { nama: "Liang Bua", lokasi: "Nusa Tenggara Timur", deskripsi: "Gua tempat ditemukan Homo floresiensis — saksi evolusi manusia 50.000 tahun lalu.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop", rating: 4.6, badge: "UNESCO" },
  { nama: "Sangiran", lokasi: "Jawa Tengah", deskripsi: "Situs manusia purba — fosil Jawa Man berusia 1,7 juta tahun, warisan dunia UNESCO.", image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&h=500&fit=crop", rating: 4.7, badge: "UNESCO" },
  { nama: "Keraton Yogyakarta", lokasi: "Yogyakarta", deskripsi: "Istana Kesultanan yang masih berdiri — pusat kebudayaan Jawa yang hidup dan bersejarah.", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=500&fit=crop", rating: 4.7 },
  { nama: "Tana Toraja", lokasi: "Sulawesi Selatan", deskripsi: "Tradisi kematian yang unik di dunia — tongkonan, tau-tau, dan upacara adat megah.", image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&h=500&fit=crop", rating: 4.8 },
];

const DESTINASI_EDUKASI: Destinasi[] = [
  { nama: "Museum Nasional", lokasi: "Jakarta", deskripsi: "Koleksi 200.000+ artefak — perjalanan peradaban Nusantara dari prasejarah hingga modern.", image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop", rating: 4.6 },
  { nama: "Museum Angkut", lokasi: "Jawa Timur", deskripsi: "Museum transportasi terbesar di Asia Tenggara — dari becak hingga pesawat terbang.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop", rating: 4.5 },
  { nama: "Ancol Dream World", lokasi: "Jakarta", deskripsi: "Taman impian Jaya Ancol — oceanarium, pantai, dan pusat hiburan edukasi keluarga.", image: "https://images.unsplash.com/photo-1503220317266-8e5b70a21ed6?w=800&h=500&fit=crop", rating: 4.4 },
  { nama: "Galeri Nasional", lokasi: "Jakarta", deskripsi: "Rumah seni rupa Indonesia — pameran seni kontemporer dan tradisional terkemuka.", image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=500&fit=crop", rating: 4.5 },
  { nama: "Taman Mini Indonesia Indah", lokasi: "Jakarta", deskripsi: "Miniatur Indonesia lengkap — 38 paviliun provinsi, museum, dan taman budaya.", image: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=800&h=500&fit=crop", rating: 4.6 },
  { nama: "Saung Angklung Udjo", lokasi: "Jawa Barat", deskripsi: "Pusat pelestarian angklung — pertunjukan interaktif dan workshop alat musik tradisional.", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop", rating: 4.7 },
];

// ============================================================
// Destination Card Component
// ============================================================
function KartuDestinasi({ destinasi, index, onOpenDestinasi }: { destinasi: Destinasi; index: number; onOpenDestinasi: (nama: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 overflow-hidden h-full group">
        {/* Destination image */}
        <div className="relative h-40 overflow-hidden group">
          <img
            src={destinasi.image}
            alt={destinasi.nama}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
            <MapPin className="size-3 text-white/90" />
            <span className="text-[11px] text-white/90 font-medium">{destinasi.lokasi}</span>
          </div>
          {destinasi.badge && (
            <div className="absolute top-3 right-3">
              <Badge className="text-[9px] bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                {destinasi.badge}
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-1">{destinasi.nama}</h4>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-3 ${i < Math.floor(destinasi.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`}
              />
            ))}
            <span className="text-[10px] text-slate-500 ml-1">{destinasi.rating}</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{destinasi.deskripsi}</p>
          <button onClick={() => onOpenDestinasi(destinasi.nama)} className="mt-3 flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn">
            <span>Lihat Detail</span>
            <ArrowRight className="size-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// Section 2: Eksplorasi Wisata Syurga
// ============================================================
export default function SectionWisata() {
  const { openDestinasi } = useNavigation();
  return (
    <section id="wisata" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px]" />
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
              <Plane className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Eksplorasi Wisata</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Eksplorasi Wisata Syurga</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Empat dimensi surga Nusantara — dari lautan biru kristal hingga warisan peradaban ribuan tahun. Temukan destinasi impian Anda.
          </p>
        </motion.div>

        {/* Tabs Layout */}
        <Tabs defaultValue="biru" className="w-full">
          {/* Tab Triggers — horizontal scroll on mobile */}
          <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 mb-8">
            <TabsList className="inline-flex items-center gap-1 bg-slate-100 rounded-xl p-1 w-max min-w-full sm:min-w-0">
              <TabsTrigger value="biru" className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg transition-all">
                <Waves className="size-3.5 sm:size-4" />
                <span className="hidden sm:inline">Syurga Biru</span>
                <span className="sm:hidden">Biru</span>
              </TabsTrigger>
              <TabsTrigger value="ketinggian" className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg transition-all">
                <Mountain className="size-3.5 sm:size-4" />
                <span className="hidden sm:inline">Ketinggian</span>
                <span className="sm:hidden">Tinggi</span>
              </TabsTrigger>
              <TabsTrigger value="waktu" className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg transition-all">
                <Clock className="size-3.5 sm:size-4" />
                <span className="hidden sm:inline">Waktu</span>
                <span className="sm:hidden">Waktu</span>
              </TabsTrigger>
              <TabsTrigger value="edukasi" className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg transition-all">
                <GraduationCap className="size-3.5 sm:size-4" />
                <span className="hidden sm:inline">Edukasi</span>
                <span className="sm:hidden">Edukasi</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab: Syurga Biru Nusantara */}
          <TabsContent value="biru">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Waves className="size-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Syurga Biru Nusantara</h3>
                <Badge className="text-[9px] bg-blue-50 text-blue-600 border-blue-100">Best Seller</Badge>
              </div>
              <p className="text-sm text-slate-500">Pantai eksotis, laut kristal, pulau terluar — dari Raja Ampat hingga Pulau Weh.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {DESTINASI_BIRU.map((dest, i) => (
                <KartuDestinasi key={dest.nama} destinasi={dest} index={i} onOpenDestinasi={openDestinasi} />
              ))}
            </div>
          </TabsContent>

          {/* Tab: Syurga Ketinggian */}
          <TabsContent value="ketinggian">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Mountain className="size-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Syurga Ketinggian & Tirta</h3>
              </div>
              <p className="text-sm text-slate-500">Gunung megah, bukit hijau, danau biru, sungai jernih — dari Bromo hingga Danau Toba.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {DESTINASI_KETINGGIAN.map((dest, i) => (
                <KartuDestinasi key={dest.nama} destinasi={dest} index={i} onOpenDestinasi={openDestinasi} />
              ))}
            </div>
          </TabsContent>

          {/* Tab: Syurga Waktu */}
          <TabsContent value="waktu">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="size-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Syurga Waktu & Leluhur</h3>
                <Badge className="text-[9px] bg-amber-50 text-amber-600 border-amber-100">UNESCO</Badge>
              </div>
              <p className="text-sm text-slate-500">Candi kuno, situs purba, sejarah awal manusia — Borobudur, Prambanan, Liang Bua.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {DESTINASI_WAKTU.map((dest, i) => (
                <KartuDestinasi key={dest.nama} destinasi={dest} index={i} onOpenDestinasi={openDestinasi} />
              ))}
            </div>
          </TabsContent>

          {/* Tab: Syurga Edukasi */}
          <TabsContent value="edukasi">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="size-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Syurga Edukasi & Galeri</h3>
              </div>
              <p className="text-sm text-slate-500">Museum nasional, pusat budaya, galeri seni kontemporer — Nusantara dalam satu ruang edukasi.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {DESTINASI_EDUKASI.map((dest, i) => (
                <KartuDestinasi key={dest.nama} destinasi={dest} index={i} onOpenDestinasi={openDestinasi} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
