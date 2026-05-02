"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Star, Clock, DollarSign, Plane, Compass,
  Heart, Camera, Waves, Mountain, GraduationCap, Calendar, Shield,
  ArrowRight, Sun, Umbrella, TicketCheck, CheckCircle2, Sparkles,
  Flame, TreePine, Fish, Landmark, Ship, Binoculars, Palmtree,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/stores/navigation";
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
// Complete Destination Data (24 Destinations)
// ============================================================
interface DestinasiFull {
  nama: string;
  lokasi: string;
  deskripsi: string;
  deskripsiPanjang: string;
  image: string;
  rating: number;
  badge?: string;
  category: string;
  categoryIcon: React.ElementType;
  categoryColor: string;
  bestTime: string;
  avgCost: string;
  highlights: { icon: React.ElementType; title: string; desc: string }[];
  activities: { icon: React.ElementType; title: string }[];
  howToGet: string;
  tips: string[];
}

const ALL_DESTINASI: DestinasiFull[] = [
  // === SYURGA BIRU ===
  {
    nama: "Raja Ampat", lokasi: "Papua Barat Daya",
    deskripsi: "Biodiversitas laut #1 planet — 1.500+ spesies ikan, 600+ spesies karang.",
    deskripsiPanjang: "Raja Ampat adalah mahkota peradaban laut Indonesia — sebuah kepulauan dengan 1.500+ pulau kecil yang menyimpan kekayaan biodiversitas terbesar di planet ini. Dengan 75% spesies karang dunia dan 1.500+ spesies ikan, Raja Ampat adalah surga bagi penyelam, peneliti, dan siapa saja yang ingin menyaksikan keajaiban alam bawah laut yang tak tertandingi. Air lautnya yang kristal jernih dengan visibilitas hingga 30 meter menjadikan setiap dive session sebuah pengalaman transformatif.",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&h=500&fit=crop",
    rating: 4.9, badge: "Best Seller", category: "Syurga Biru", categoryIcon: Waves, categoryColor: "text-blue-600",
    bestTime: "Oktober - April", avgCost: "Rp 8.000.000 - 15.000.000",
    highlights: [
      { icon: Fish, title: "1.500+ Spesies Ikan", desc: "Biodiversitas laut tertinggi di dunia" },
      { icon: Sparkles, title: "600+ Spesies Karang", desc: "75% spesies karang dunia ada di sini" },
      { icon: TreePine, title: "Konservasi Alam", desc: "Kawasan marin protected area terluas Indonesia" },
      { icon: Heart, title: "Masyarakat Adat", desc: "Budaya Papua yang autentik dan ramah" },
    ],
    activities: [
      { icon: Compass, title: "Diving & Snorkeling" },
      { icon: Camera, title: "Underwater Photography" },
      { icon: Ship, title: "Island Hopping" },
      { icon: Binoculars, title: "Bird Watching" },
    ],
    howToGet: "Penerbangan dari Jakarta/ Makassar ke Sorong (3-4 jam), dilanjutkan kapal speedboat 2-3 jam ke kepulauan Raja Ampat. Tersedia juga jalur laut dari pelabuhan Sorong.",
    tips: ["Bawa underwater camera untuk mengabadikan keindahan laut", "Waktu terbaik diving: Oktober-April saat cuaca cerah", "Sewa homestay lokal untuk pengalaman autentik"],
  },
  {
    nama: "Labuan Bajo", lokasi: "Nusa Tenggara Timur",
    deskripsi: "Gerbang Pulau Komodo — destinasi super prioritas dengan resort premium.",
    deskripsiPanjang: "Labuan Bajo adalah gerbang utama menuju Taman Nasional Komodo dan destinasi super prioritas pemerintah Indonesia. Kota pelabuhan kecil ini bertransformasi menjadi hub pariwisata premium dengan resort bintang 5, marina internasional, dan bandara baru yang melayani rute langsung dari Bali dan Jakarta. Dari sini, Anda bisa menjejalkan Pulau Komodo, Pantai Pink — satu-satunya pantai merah muda di Indonesia, dan Pulau Padar dengan panorama 360 derajat yang memukau.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=500&fit=crop",
    rating: 4.8, category: "Syurga Biru", categoryIcon: Waves, categoryColor: "text-blue-600",
    bestTime: "April - November", avgCost: "Rp 5.000.000 - 20.000.000",
    highlights: [
      { icon: Flame, title: "Pulau Komodo", desc: "Habitat asli komodo — warisan dunia UNESCO" },
      { icon: Heart, title: "Pantai Pink", desc: "Satu-satunya pantai merah muda di Indonesia" },
      { icon: Sun, title: "Sunset Padar", desc: "Panorama 360° terbaik se-Asia Tenggara" },
      { icon: Ship, title: "Liveaboard Premium", desc: "Kapal pesiar mewah untuk sailing adventure" },
    ],
    activities: [
      { icon: Compass, title: "Trekking Pulau Padar" },
      { icon: Fish, title: "Diving & Snorkeling" },
      { icon: Camera, title: "Sunset Photography" },
      { icon: Ship, title: "Liveaboard Sailing" },
    ],
    howToGet: "Penerbangan langsung dari Bali (1.5 jam) atau Jakarta (2.5 jam) ke Bandara Komodo Labuan Bajo. Tersedia kapal ferry dari Bali via Pelni.",
    tips: ["Booking liveaboard minimal 3 bulan sebelumnya untuk high season", "Bawa sunblock SPF 50+ karena cuaca sangat terik", "Jangan lupa sepatu trekking untuk naik ke puncak Padar"],
  },
  {
    nama: "Bali", lokasi: "Bali",
    deskripsi: "Pulau Dewata — warisan budaya, sawah terasering, pantai ikonik.",
    deskripsiPanjang: "Bali — Pulau Dewata — adalah peradaban kecil yang sempurna dalam satu pulau. Warisan budaya Hindu yang melekat dalam setiap aspek kehidupan, dari pura-pura megah di tebing laut hingga upacara keagamaan yang mengalir setiap hari. Sawah terasering Tegallalang menawarkan lanskap hijau emerald yang telah diwariskan turun-temurun, sementara pantai-pantai seperti Kuta, Seminyak, dan Uluwatu menyajikan sunset terbaik di dunia. Bali adalah fusion sempurna antara spiritualitas, seni, kuliner, dan petualangan alam.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop",
    rating: 4.7, category: "Syurga Biru", categoryIcon: Waves, categoryColor: "text-blue-600",
    bestTime: "April - Oktober", avgCost: "Rp 3.000.000 - 50.000.000",
    highlights: [
      { icon: Landmark, title: "Pura-Pura Ikonik", desc: "Tanah Lot, Uluwatu, Besakih — warisan spiritual" },
      { icon: TreePine, title: "Sawah Tegallalang", desc: "Terasering UNESCO — hijau emerald abadi" },
      { icon: Sparkles, title: "Kuliner Fusion", desc: "Dari warung lokal hingga fine dining internasional" },
      { icon: Camera, title: "Sunset World-Class", desc: "Uluwatu & Tanah Lot — sunset terbaik planet" },
    ],
    activities: [
      { icon: Compass, title: "Temple Tour" },
      { icon: Waves, title: "Surfing di Uluwatu" },
      { icon: Heart, title: "Yoga & Wellness Retreat" },
      { icon: Ship, title: "Nusa Penida Day Trip" },
    ],
    howToGet: "Bandara Ngurah Rai melayani penerbangan internasional dan domestik. Tersedia juga jalur laut ferry dari Java (Banyuwangi-Gilimanuk, Ketapang-Lembar).",
    tips: ["Kunjungi Uluwatu Temple untuk sunset Kecak Fire Dance", "Coba bebek betutu dan babi guling di Gianyar", "Sewa motor untuk eksplorasi bebas di Ubud & sekitarnya"],
  },
  {
    nama: "Pulau Weh", lokasi: "Aceh",
    deskripsi: "Titik paling barat Indonesia — diving spot tersembunyi.",
    deskripsiPanjang: "Pulau Weh adalah permata tersembunyi di ujung barat Indonesia — titik nol kilometer Indonesia yang menyimpan keajaiban bawah laut luar biasa. Sebagai titik paling barat kepulauan Nusantara, pulau vulkanik kecil ini menawarkan diving site yang masih pristine, air laut yang sangat jernih dengan visibilitas 20-30 meter, dan terumbu karang yang masih virgin. Ikan pari manta, hiu paus, dan penyu hijau menjadi penghuni tetap perairan Pulau Weh.",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=500&fit=crop",
    rating: 4.6, category: "Syurga Biru", categoryIcon: Waves, categoryColor: "text-blue-600",
    bestTime: "Maret - November", avgCost: "Rp 3.000.000 - 7.000.000",
    highlights: [
      { icon: Compass, title: "Titik 0 KM Indonesia", desc: "Monumen kilometer nol Indonesia" },
      { icon: Fish, title: "Diving Pristine", desc: "Coral reef masih virgin dan tak tersentuh" },
      { icon: Heart, title: "Masyarakat Aceh", desc: "Hospitalitas unik dan kuliner khas Aceh" },
      { icon: Sun, title: "Pantai Tersembunyi", desc: "Iboih & Gapang — pantai eksklusif nan tenang" },
    ],
    activities: [
      { icon: Fish, title: "Diving & Snorkeling" },
      { icon: Compass, title: "Exploring Kilometer 0" },
      { icon: Camera, title: "Sunset at Kilometer 0" },
      { icon: Heart, title: "Acehnese Culinary Tour" },
    ],
    howToGet: "Penerbangan dari Jakarta/Medan ke Banda Aceh (2.5 jam), dilanjutkan ferry 45 menit dari Pelabuhan Ulee Lheue ke Pulau Weh.",
    tips: ["Bawa perlengkapan diving sendiri karena rental terbatas", "Coba kopi sanger dan mie Aceh di warung lokal", "Hormati adat dan budaya Islam yang kuat di Aceh"],
  },
  {
    nama: "Wakatobi", lokasi: "Sulawesi Tenggara",
    deskripsi: "Taman Nasional Laut — 942 spesies ikan dan 750 spesies karang.",
    deskripsiPanjang: "Wakatobi — akronim dari Wangi-wangi, Kaledupa, Tomia, Binongko — adalah Taman Nasional Laut yang terletak di jantung Segitiga Karang Dunia. Dengan 942 spesies ikan dan 750 spesies karang tercatat, Wakatobi merupakan salah satu pusat biodiversitas laut terpenting di planet ini. Perairannya yang tenang dan jernih menjadikannya surga bagi penyelam pemula maupun profesional, sementara daratannya menyimpan budaya Bajo yang unik — suku pelaut yang telah hidup di atas laut selama berabad-abad.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop",
    rating: 4.7, category: "Syurga Biru", categoryIcon: Waves, categoryColor: "text-blue-600",
    bestTime: "Maret - November", avgCost: "Rp 5.000.000 - 12.000.000",
    highlights: [
      { icon: Fish, title: "942 Spesies Ikan", desc: "Biodiversitas laut kelas dunia" },
      { icon: Ship, title: "Kampung Bajo", desc: "Suku pelaut tradisional di atas laut" },
      { icon: TreePine, title: "Taman Nasional Laut", desc: "Kawasan konservasi terlindungi UNESCO" },
      { icon: Sparkles, title: "House Reef Resort", desc: "Dive langsung dari depan resort" },
    ],
    activities: [
      { icon: Fish, title: "Wall Diving" },
      { icon: Ship, title: "Kampung Bajo Visit" },
      { icon: Camera, title: "Underwater Macro Photography" },
      { icon: Compass, title: "Island Hopping 4 Pulau" },
    ],
    howToGet: "Penerbangan dari Jakarta/Makassar ke Wangi-wangi (Wakatobi) via Kendari. Tersedia juga jalur laut dari Bau-Bau.",
    tips: ["Pilih resort dengan house reef untuk akses diving 24/7", "Bawa wetsuit 3mm karena air cukup dingin di kedalaman", "Kunjungi Kampung Bajo di Kaledupa untuk cultural experience"],
  },
  {
    nama: "Derawan", lokasi: "Kalimantan Timur",
    deskripsi: "Danau ubur-ubur tak menyengat, penyu hijau, dan reef manta.",
    deskripsiPanjang: "Kepulauan Derawan di Kalimantan Timur menyimpan keajaiban alam yang hanya bisa ditemukan di sedikit tempat di dunia. Danau Kakaban menyimpan ubur-ubur tanpa sengatan — fenomena langka di mana ribuan ubur-ubur telah berevolusi tanpa racun karena terisolasi dari predator. Pulau Sangalaki menjadi tempat bertelur penyu hijau, sementara channel Maratua menawarkan pertemuan dengan reef manta yang menakjubkan. Perairan Derawan adalah petualangan underwater yang tidak terlupakan.",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=500&fit=crop",
    rating: 4.5, category: "Syurga Biru", categoryIcon: Waves, categoryColor: "text-blue-600",
    bestTime: "April - Oktober", avgCost: "Rp 4.000.000 - 10.000.000",
    highlights: [
      { icon: Sparkles, title: "Danau Kakaban", desc: "Ubur-ubur tanpa sengat — fenomena langka dunia" },
      { icon: Heart, title: "Penyu Hijau", desc: "Tempat bertelur penyu di Pulau Sangalaki" },
      { icon: Fish, title: "Reef Manta", desc: "Channel Maratua — pertemuan manta raksasa" },
      { icon: TreePine, title: "Konservasi Aktif", desc: "Program turtle conservation berjalan" },
    ],
    activities: [
      { icon: Fish, title: "Jellyfish Lake Swimming" },
      { icon: Compass, title: "Manta Ray Diving" },
      { icon: Camera, title: "Turtle Conservation Tour" },
      { icon: Ship, title: "Island Hopping" },
    ],
    howToGet: "Penerbangan dari Jakarta/Balikpapan ke Berau (2-3 jam), dilanjutkan speedboat 2-3 jam ke Derawan Islands.",
    tips: ["Snorkeling di Kakaban saat pagi hari untuk air paling jernih", "Hindari menyentuh ubur-ubur meskipun tak menyengat", "Tinggal di cottage derawan untuk sunrise terbaik"],
  },
  // === SYURGA KETINGGIAN ===
  {
    nama: "Gunung Bromo", lokasi: "Jawa Timur",
    deskripsi: "Lanskap lunar Indonesia — lautan pasir, kawah aktif, sunrise terbaik.",
    deskripsiPanjang: "Gunung Bromo adalah lanskap luar biasa yang seolah dari planet lain — sebuah kawah aktif yang dikelilingi oleh Lautan Pasir (Sea of Sand) yang membentang luas. Sunrise dari Penanjakan Viewpoint di ketinggian 2.770 mdpl menawarkan panorama yang menakjubkan: Gunung Bromo mengeluarkan asap putih ke langit oranye-pink, dengan Gunung Semeru menjulang di latar belakang. Pengalaman menaiki kuda melintasi lautan pasir menuju bibir kawah adalah salah satu momen paling ikonik di Indonesia.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=500&fit=crop",
    rating: 4.8, category: "Syurga Ketinggian", categoryIcon: Mountain, categoryColor: "text-emerald-600",
    bestTime: "April - Oktober", avgCost: "Rp 1.500.000 - 4.000.000",
    highlights: [
      { icon: Sun, title: "Sunrise Legendaris", desc: "Viewpoint Penanjakan — sunrise terbaik se-Asia" },
      { icon: Flame, title: "Kawah Aktif", desc: "Kawah Bromo dengan asap putih mengepul" },
      { icon: Mountain, title: "Lautan Pasir", desc: "Sea of Sand — lanskap lunar Indonesia" },
      { icon: Camera, title: "Milky Way", desc: "Spot astrophotography kelas dunia" },
    ],
    activities: [
      { icon: Compass, title: "Sunrise Trekking" },
      { icon: Camera, title: "Astrophotography" },
      { icon: Heart, title: "Jeep Tour Lautan Pasir" },
      { icon: Sparkles, title: "Cultural Tengger Visit" },
    ],
    howToGet: "Penerbangan ke Surabaya, dilanjutkan perjalanan darat 3-4 jam ke Probolinggo/Cemoro Lawang. Tersedia juga kereta dari Surabaya ke Probolinggo.",
    tips: ["Berangkat jam 3 pagi untuk sunrise di Penanjakan", "Bawa jaket tebal — suhu bisa 5°C sebelum fajar", "Sewa jeep lokal untuk pengalaman lautan pasir terbaik"],
  },
  {
    nama: "Danau Toba", lokasi: "Sumatera Utara",
    deskripsi: "Danau vulkanik terbesar di dunia — kekayaan budaya Batak.",
    deskripsiPanjang: "Danau Toba adalah danau vulkanik terbesar di dunia, terbentuk dari letusan super-vulkan terbesar dalam 25 juta tahun terakhir. Dengan panjang 100 km dan lebar 30 km, danau ini menyimpan Pulau Samosir di tengahnya — pulau vulkanik yang menjadi jantung budaya Batak. Di sini, tradisi adat Batak masih hidup kuat, dari arsitektur rumah bolon yang megah, gondang sabangunan (musik tradisional), hingga upacara adat yang sakral. Danau Toba adalah fusion sempurna antara keajaiban geologi dan peradaban manusia.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop",
    rating: 4.7, category: "Syurga Ketinggian", categoryIcon: Mountain, categoryColor: "text-emerald-600",
    bestTime: "Mei - September", avgCost: "Rp 2.000.000 - 6.000.000",
    highlights: [
      { icon: Mountain, title: "Super Volcano", desc: "Danau vulkanik terbesar di dunia — 100 km panjangnya" },
      { icon: Heart, title: "Budaya Batak", desc: "Rumah Bolon, gondang, dan upacara adat" },
      { icon: Compass, title: "Pulau Samosir", desc: "Pulau di tengah danau — jantung budaya Batak" },
      { icon: Sparkles, title: "Geopark UNESCO", desc: "Global Geopark Network UNESCO 2025" },
    ],
    activities: [
      { icon: Compass, title: "Pulau Samosir Exploration" },
      { icon: Heart, title: "Batak Cultural Tour" },
      { icon: Ship, title: "Lake Cruise" },
      { icon: Camera, title: "Hot Spring & Waterfall" },
    ],
    howToGet: "Penerbangan dari Jakarta/Medan ke Silangit Airport (1-2 jam), hanya 45 menit dari Danau Toba. Jalur darat dari Medan 4-5 jam.",
    tips: ["Tinggal di Pulau Samosir untuk pengalaman budaya terbaik", "Coba saksang dan arsik — masakan khas Batak", "Kunjungi Tomok untuk melihat makam raja Batak kuno"],
  },
  {
    nama: "Dieng Plateau", lokasi: "Jawa Tengah",
    deskripsi: "Dataran tinggi mistis — candi kuno, telaga warna, embun pagi.",
    deskripsiPanjang: "Dieng Plateau adalah dataran tinggi vulkanik di ketinggian 2.000 mdpl yang menyimpan warisan peradaban Hindu tertua di Jawa. Kompleks Candi Arjuna yang berdiri sejak abad ke-8 merupakan bukti bahwa peradaban maju telah berkembang di tempat ini ribuan tahun lalu. Telaga Warna yang berubah warna secara ajaib, embun pagi yang membeku di dedaunan — Golden Sunrise — dan udara sejuk pegunungan menciptakan suasana yang benar-benar magis dan mistis.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop",
    rating: 4.5, category: "Syurga Ketinggian", categoryIcon: Mountain, categoryColor: "text-emerald-600",
    bestTime: "Juli - September", avgCost: "Rp 800.000 - 2.500.000",
    highlights: [
      { icon: Landmark, title: "Candi Arjuna", desc: "Warisan Hindu tertua di Jawa — abad ke-8" },
      { icon: Sparkles, title: "Telaga Warna", desc: "Danau yang berubah warna secara ajaib" },
      { icon: Sun, title: "Golden Sunrise", desc: "Embun pagi yang membeku — fenomena unik" },
      { icon: Flame, title: "Sikidang Crater", desc: "Kawah aktif dengan semburan gas vulkanik" },
    ],
    activities: [
      { icon: Compass, title: "Golden Sunrise Trekking" },
      { icon: Camera, title: "Candi Complex Tour" },
      { icon: Heart, title: "Telaga Warna Visit" },
      { icon: TreePine, title: "Tobacco & Potato Farm Tour" },
    ],
    howToGet: "Dari Yogyakarta/Semarang, perjalanan darat 3-4 jam ke Wonosobo, dilanjutkan 30 menit ke Dieng. Tersedia shuttle bus dari Wonosobo.",
    tips: ["Berangkat jam 4 pagi untuk Golden Sunrise — embun beku hanya muncul sebelum jam 7", "Bawa jaket dan sarung tangan — suhu bisa 5°C", "Coba carica — buah khas Dieng yang dibuat manisan"],
  },
  {
    nama: "Rinjani", lokasi: "Nusa Tenggara Barat",
    deskripsi: "Gunung tertinggi kedua — Danau Segara Anak di kawah puncak.",
    deskripsiPanjang: "Gunung Rinjani (3.726 mdpl) adalah gunung tertinggi kedua di Indonesia dan salah satu trekking kelas dunia. Perjalanan 2 hari menuju puncak melewati hutan tropis, savana, dan bukit vulkanik yang dramatis. Hadiah utamanya: Danau Segara Anak — sebuah danau kawah biru kehijauan yang terletak di ketinggian 2.000 mdpl, dikelilingi dinding kawah curam. Penduduk setempat Suku Sasak memandang Rinjani sebagai gunung suci dan tempat spiritual yang menyimpan kekuatan gaib.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    rating: 4.8, category: "Syurga Ketinggian", categoryIcon: Mountain, categoryColor: "text-emerald-600",
    bestTime: "April - November", avgCost: "Rp 2.000.000 - 5.000.000",
    highlights: [
      { icon: Mountain, title: "3.726 mdpl", desc: "Gunung tertinggi kedua Indonesia" },
      { icon: Sparkles, title: "Danau Segara Anak", desc: "Danau kawah biru kehijauan di puncak" },
      { icon: Flame, title: "New Crater", desc: "Kawah aktif yang masih mengeluarkan gas" },
      { icon: Heart, title: "Suku Sasak", desc: "Budaya dan spiritualitas masyarakat setempat" },
    ],
    activities: [
      { icon: Compass, title: "Summit Trekking (2D1N/3D2N)" },
      { icon: Camera, title: "Milky Way Photography" },
      { icon: Fish, title: "Danau Segara Anak Camping" },
      { icon: TreePine, title: "Sendang Gile Waterfall" },
    ],
    howToGet: "Penerbangan ke Lombok (Bandara Internasional Lombok), dilanjutkan perjalanan 2 jam ke Sembalun atau Senaru — base camp utama.",
    tips: ["Gunakan jasa porter lokal untuk trekking — mendukung ekonomi desa", "Persiapan fisik minimal 1 bulan sebelum pendakian", "Bawa sleeping bag rating 5°C dan raincoat"],
  },
  {
    nama: "Puncak Jayawijaya", lokasi: "Papua",
    deskripsi: "Salju abadi di khatulistiwa — tujuh puncak benua.",
    deskripsiPanjang: "Puncak Jayawijaya (4.884 mdpl) — atau Piramida Carstensz — adalah satu-satunya tempat di khatulistiwa yang memiliki salju abadi. Sebagai salah satu dari Seven Summits of the World, pendakiannya merupakan pencapaian mountaineering paling bergengsi. Perjalanan menuju puncak melewati hutan hujan tropis, lereng batu karang, dan tebing es — sebuah transisi dramatis dari iklim tropis ke kutub dalam hitungan jam. Wilayah ini juga menjadi habitat suku Dani dan Lani yang masih mempertahankan tradisi kuno.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    rating: 4.9, category: "Syurga Ketinggian", categoryIcon: Mountain, categoryColor: "text-emerald-600",
    bestTime: "Juni - September", avgCost: "Rp 50.000.000 - 100.000.000",
    highlights: [
      { icon: Mountain, title: "4.884 mdpl", desc: "Salju abadi di khatulistiwa — fenomena unik planet" },
      { icon: Sparkles, title: "Seven Summits", desc: "Salah satu dari 7 puncak benua dunia" },
      { icon: Heart, title: "Suku Dani", desc: "Budaya tradisional yang masih terjaga" },
      { icon: TreePine, title: "Tebing Es", desc: "Glacier tropis yang semakin langka" },
    ],
    activities: [
      { icon: Compass, title: "Summit Expedition (7-10 hari)" },
      { icon: Camera, title: "High Altitude Photography" },
      { icon: Heart, title: "Dani Cultural Village Visit" },
      { icon: Binoculars, title: "Baliem Valley Trekking" },
    ],
    howToGet: "Penerbangan dari Jakarta/Timika ke Wamena. Expedition dimulai dari Ilaga atau Sugapa. Diperlukan izin khusus dari pemerintah daerah.",
    tips: ["Wajib menggunakan operator expedition berpengalaman", "Perlu persiapan fisik minimal 6 bulan", "Bawa equipment mountaineering lengkap termasuk crampons dan ice axe"],
  },
  {
    nama: "Air Terjun Moramo", lokasi: "Sulawesi Tenggara",
    deskripsi: "Ratusan tingkat air terjun bertingkat — tersembunyi di hutan tropis.",
    deskripsiPanjang: "Air Terjun Moramo adalah keajaiban alam yang tersembunyi di jantung Taman Nasional Rawa Aopa Watumohai, Sulawesi Tenggara. Ratusan tingkat air terjun bertingkat mengalir dari tebing batu kapur, membentuk kaskade spektakuler yang membelah hutan tropis primer. Air jernih yang mengalir dari pegunungan karst menciptakan kolam-kolam alami yang sempurna untuk berenang. Sebagai destinasi yang masih relatif belum dikenal, Moramo menawarkan pengalaman wilderness yang autentik dan jauh dari keramaian turis.",
    image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8855?w=800&h=500&fit=crop",
    rating: 4.6, category: "Syurga Ketinggian", categoryIcon: Mountain, categoryColor: "text-emerald-600",
    bestTime: "Mei - Oktober", avgCost: "Rp 1.000.000 - 3.000.000",
    highlights: [
      { icon: Sparkles, title: "100+ Tingkat", desc: "Ratusan kaskade air terjun bertingkat" },
      { icon: TreePine, title: "Hutan Primer", desc: "Taman Nasional Rawa Aopa Watumohai" },
      { icon: Compass, title: "Off-the-Beaten-Path", desc: "Destinasi tersembunyi — masih virgin" },
      { icon: Heart, title: "Kolam Alami", desc: "Natural infinity pool di setiap tingkat" },
    ],
    activities: [
      { icon: Compass, title: "Waterfall Trekking" },
      { icon: Fish, title: "Natural Pool Swimming" },
      { icon: Camera, title: "Nature Photography" },
      { icon: TreePine, title: "Jungle Exploration" },
    ],
    howToGet: "Penerbangan ke Kendari, dilanjutkan perjalanan darat 3-4 jam ke Desa Moramo, Sulawesi Tenggara. Perlu izin masuk taman nasional.",
    tips: ["Bawa sepatu trekking water-resistant untuk trekking ke air terjun", "Sewa guide lokal — jalur tidak ditandai dengan baik", "Bawa bekal dan air minum karena tidak ada warung di area air terjun"],
  },
  // === SYURGA WAKTU ===
  {
    nama: "Candi Borobudur", lokasi: "Jawa Tengah",
    deskripsi: "Candi Buddha terbesar di dunia — warisan UNESCO.",
    deskripsiPanjang: "Candi Borobudur adalah mahakarya arsitektur peradaban Buddha terbesar di dunia — monumen batu yang terdiri dari 2.672 panel relief, 504 arca Buddha, dan 72 stupa yang menjulang di puncaknya. Dibangun pada abad ke-9 oleh Dinasti Syailendra, Borobudur bukan sekadar candi, tapi sebuah buku batu raksasa yang menyimpan ajaran Buddha dalam relief 3D. Sunrise di Borobudur — dengan Gunung Merapi dan Merbabu di latar belakang — adalah salah satu pengalaman spiritual dan visual terbaik di Asia.",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&h=500&fit=crop",
    rating: 4.9, badge: "UNESCO", category: "Syurga Waktu", categoryIcon: Landmark, categoryColor: "text-amber-600",
    bestTime: "April - Oktober", avgCost: "Rp 500.000 - 3.000.000",
    highlights: [
      { icon: Landmark, title: "UNESCO World Heritage", desc: "Warisan peradaban dunia sejak 1991" },
      { icon: Sparkles, title: "2.672 Panel Relief", desc: "Buku batu raksasa ajaran Buddha" },
      { icon: Sun, title: "Borobudur Sunrise", desc: "Sunrise terbaik di Asia — di atas awan" },
      { icon: Heart, title: "Waisak Festival", desc: "Upacara keagamaan Buddha terbesar di Indonesia" },
    ],
    activities: [
      { icon: Compass, title: "Sunset & Sunrise Tour" },
      { icon: Camera, title: "Relief Exploration" },
      { icon: Heart, title: "Waisak Ceremony" },
      { icon: Sparkles, title: "Borobudur Village Cycling" },
    ],
    howToGet: "Dari Yogyakarta, perjalanan darat 1.5 jam ke Borobudur. Tersedia shuttle bus dari Yogyakarta Airport.",
    tips: ["Sunset ticket (jam 4 sore) lebih sepi dan cahaya lebih indah", "Sewa guide resmi untuk memahami makna relief", "Coba sunrise Manohara — booking minimal 1 minggu sebelumnya"],
  },
  {
    nama: "Candi Prambanan", lokasi: "Jawa Tengah",
    deskripsi: "Kompleks candi Hindu terbesar — relief Ramayana.",
    deskripsiPanjang: "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia dan salah satu yang terbesar di Asia Tenggara. Dibangun pada abad ke-9, kompleks ini terdiri dari 240 candi dengan candi utama Siwa setinggi 47 meter yang menjulang megah. Relief Ramayana yang menghiasi dinding candi menceritakan epik Hindu terbesar dalam batu, dan setiap malam bulan purnama, pertunjukan Ramayana Ballet dijadwalkan di panggung terbuka dengan latar belakang candi yang disinari — sebuah pengalaman seni dan spiritual yang tak terlupakan.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=500&fit=crop",
    rating: 4.8, badge: "UNESCO", category: "Syurga Waktu", categoryIcon: Landmark, categoryColor: "text-amber-600",
    bestTime: "April - Oktober", avgCost: "Rp 300.000 - 2.500.000",
    highlights: [
      { icon: Landmark, title: "Candi Siwa 47m", desc: "Candi Hindu tertinggi di Indonesia" },
      { icon: Heart, title: "Ramayana Ballet", desc: "Pertunjukan seni di panggung terbuka" },
      { icon: Sparkles, title: "240 Candi", desc: "Kompleks candi Hindu terbesar di Asia Tenggara" },
      { icon: Camera, title: "Full Moon Performance", desc: "Ramayana Ballet saat bulan purnama — magical" },
    ],
    activities: [
      { icon: Compass, title: "Candi Complex Tour" },
      { icon: Heart, title: "Ramayana Ballet Show" },
      { icon: Camera, title: "Photography Session" },
      { icon: Sparkles, title: "Hindu Cultural Learning" },
    ],
    howToGet: "Dari Yogyakarta/Solo, hanya 30 menit perjalanan darat. Sangat mudah dijangkau dengan taksi, bus, atau rental motor.",
    tips: ["Datang sore hari untuk sunset dan Ramayana Ballet", "Beli combo ticket Borobudur + Prambanan untuk hemat", "Hari Selasa wage — hari libur — ballet show paling ramai"],
  },
  {
    nama: "Liang Bua", lokasi: "Nusa Tenggara Timur",
    deskripsi: "Gua Homo floresiensis — saksi evolusi manusia 50.000 tahun.",
    deskripsiPanjang: "Liang Bua adalah gua bersejarah di Flores yang mengubah pemahaman dunia tentang evolusi manusia. Pada tahun 2003, para arkeolog menemukan fosil Homo floresiensis — spesies manusia kerdil yang hidup 50.000 tahun lalu — di gua ini. Dijuluki 'Hobbit Flores' oleh media internasional, penemuan ini membuka babak baru dalam studi paleoantropologi. Liang Bua adalah jendela waktu yang membawa kita 50.000 tahun ke belakang, melihat langsung tempat di mana spesies manusia misterius ini pernah hidup.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
    rating: 4.6, badge: "UNESCO", category: "Syurga Waktu", categoryIcon: Landmark, categoryColor: "text-amber-600",
    bestTime: "April - November", avgCost: "Rp 1.500.000 - 4.000.000",
    highlights: [
      { icon: Sparkles, title: "Homo floresiensis", desc: "Hobbit Flores — spesies manusia 50.000 tahun lalu" },
      { icon: Landmark, title: "Situs Arkeologi", desc: "Gua bersejarah yang mengubah ilmu pengetahuan" },
      { icon: Heart, title: "Suku Manggarai", desc: "Budaya asli Flores yang masih terjaga" },
      { icon: Compass, title: "Ruteng Pu'u", desc: "Desa adat Lingko — warisan peradaban kuno" },
    ],
    activities: [
      { icon: Compass, title: "Cave Exploration" },
      { icon: Heart, title: "Manggarai Cultural Tour" },
      { icon: Camera, title: "Archaeological Site Tour" },
      { icon: TreePine, title: "Spider Web Rice Field" },
    ],
    howToGet: "Penerbangan dari Bali/Kupang ke Labuan Bajo atau Ende, dilanjutkan perjalanan darat 1.5 jam ke Ruteng. Liang Bua 14 km dari Ruteng.",
    tips: ["Sewa guide dari Balai Arkeologi untuk penjelasan ilmiah", "Kunjungi Lingko Spider Web Rice Field saat bersamaan", "Bawa senter untuk eksplorasi dalam gua"],
  },
  {
    nama: "Sangiran", lokasi: "Jawa Tengah",
    deskripsi: "Situs manusia purba — fosil Jawa Man 1,7 juta tahun.",
    deskripsiPanjang: "Sangiran adalah situs arkeologi paling penting di Asia Tenggara — tempat di mana fosil Java Man (Homo erectus) berusia 1,7 juta tahun ditemukan. Terletak di lembah Sungai Solo, Sangiran telah menghasilkan lebih dari 100 fosil hominid yang membentuk pemahaman kita tentang migrasi manusia purba dari Afrika ke Asia. Situs seluas 56 km² ini adalah UNESCO World Heritage Site yang menampilkan museum fosil, area penggalian, dan lanskap purba yang membawa pengunjung kembali ke era es.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&h=500&fit=crop",
    rating: 4.7, badge: "UNESCO", category: "Syurga Waktu", categoryIcon: Landmark, categoryColor: "text-amber-600",
    bestTime: "April - Oktober", avgCost: "Rp 500.000 - 2.000.000",
    highlights: [
      { icon: Sparkles, title: "1,7 Juta Tahun", desc: "Fosil Java Man — manusia purba tertua di Asia" },
      { icon: Landmark, title: "UNESCO Heritage", desc: "Situs warisan dunia — 56 km² area fosil" },
      { icon: Camera, title: "100+ Fosil Hominid", desc: "Koleksi fosil manusia purba terlengkap di Asia" },
      { icon: Heart, title: "Museum Fosil", desc: "Museum modern dengan replika dan fosil asli" },
    ],
    activities: [
      { icon: Compass, title: "Fossil Site Tour" },
      { icon: Camera, title: "Museum Exploration" },
      { icon: Heart, title: "Educational Workshop" },
      { icon: Sparkles, title: "Paleontology Learning Center" },
    ],
    howToGet: "Dari Solo/Surakarta, perjalanan darat 1 jam ke Sangiran. Tersedia angkutan umum dari Solo.",
    tips: ["Kunjungi hari kerja untuk guided tour dari balai arkeologi", "Museum Sangiran baru sangat informatif — alokasikan 2 jam", "Bawa buku catatan untuk educational notes"],
  },
  {
    nama: "Keraton Yogyakarta", lokasi: "Yogyakarta",
    deskripsi: "Istana Kesultanan yang masih berdiri — pusat kebudayaan Jawa.",
    deskripsiPanjang: "Keraton Yogyakarta adalah istana kesultanan yang telah berdiri sejak 1755 dan masih berfungsi sebagai pusat kebudayaan dan politik hingga hari ini. Sri Sultan yang memerintah tidak hanya sebagai raja, tetapi juga sebagai gubernur daerah istimewa. Di dalam kompleks keraton yang luas, pengunjung bisa menyaksikan pertunjukan gamelan, tari Jawa klasik, wayang kulit, dan upacara keraton yang masih dipertahankan turun-temurun. Keraton adalah jantung Jawa yang berdetak — living heritage yang menghubungkan masa lalu dan masa kini.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=500&fit=crop",
    rating: 4.7, category: "Syurga Waktu", categoryIcon: Landmark, categoryColor: "text-amber-600",
    bestTime: "Sepanjang Tahun", avgCost: "Rp 300.000 - 2.000.000",
    highlights: [
      { icon: Landmark, title: "Istana Berdiri 1755", desc: "Kesultanan yang masih aktif dan berdaulat" },
      { icon: Heart, title: "Pertunjukan Seni", desc: "Gamelan, tari Jawa, wayang kulit setiap hari" },
      { icon: Sparkles, title: "Living Heritage", desc: "Warisan budaya hidup — bukan museum mati" },
      { icon: Camera, title: "Arsitektur Jawa", desc: "Paviliun dan bangunan Jawa klasik" },
    ],
    activities: [
      { icon: Compass, title: "Palace Tour" },
      { icon: Heart, title: "Traditional Performance" },
      { icon: Camera, title: "Batik Workshop" },
      { icon: Sparkles, title: "Royal Culinary Tour" },
    ],
    howToGet: "Di pusat kota Yogyakarta, 10 menit dari Malioboro. Tersedia becak, taksi, dan jalan kaki dari hotel-hotel sekitar.",
    tips: ["Datang pagi untuk pertunjukan gamelan dan tari klasik", "Kunjungi Pasar Beringharjo dan Malioboro bersamaan", "Coba gudeg dan wedang ronde — kuliner keraton klasik"],
  },
  {
    nama: "Tana Toraja", lokasi: "Sulawesi Selatan",
    deskripsi: "Tradisi kematian unik — tongkonan, tau-tau, upacara adat megah.",
    deskripsiPanjang: "Tana Toraja adalah tanah di mana kematian bukan akhir, tetapi perjalanan spiritual. Suku Toraja memiliki tradisi pemakaman yang paling unik dan megah di dunia — mayat bisa disimpan bertahun-tahun sebelum upacara pemakaman yang melibatkan ribuan orang, kerbau kurban, dan tarian adat selama berminggu-minggu. Tongkonan — rumah adat berbentuk perahu terbalik — menjulang dengan ukiran rumit dan tanduk kerbau di atapnya, sementara tau-tau (patung kayu penjaga kuburan) berdiri menjaga tebing kuburan batu yang dramatis.",
    image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&h=500&fit=crop",
    rating: 4.8, category: "Syurga Waktu", categoryIcon: Landmark, categoryColor: "text-amber-600",
    bestTime: "Juli - September", avgCost: "Rp 2.000.000 - 6.000.000",
    highlights: [
      { icon: Heart, title: "Upacara Adat", desc: "Tradisi pemakaman terunik di dunia" },
      { icon: Landmark, title: "Tongkonan", desc: "Rumah adat perahu terbalik — arsitektur ikonik" },
      { icon: Sparkles, title: "Tau-tau", desc: "Patung kayu penjaga kuburan di tebing" },
      { icon: Camera, title: "Kuburan Batu", desc: "Cliff burial sites yang dramatis" },
    ],
    activities: [
      { icon: Compass, title: "Cultural Village Tour" },
      { icon: Heart, title: "Funeral Ceremony Visit" },
      { icon: Camera, title: "Cliff Burial Photography" },
      { icon: TreePine, title: "Lemo & Ke'te Kesu Visit" },
    ],
    howToGet: "Penerbangan dari Jakarta/Makassar ke Toraja (2 jam via Makassar). Jalur darat dari Makassar 8-10 jam.",
    tips: ["Respect local customs — minta izin sebelum mengambil foto upacara", "Gunakan guide lokal untuk memahami makna setiap ritual", "Kunjungi Ke'te Kesu' — tongkonan terbaik dan kuburan batu terdekat"],
  },
  // === SYURGA EDUKASI ===
  {
    nama: "Museum Nasional", lokasi: "Jakarta",
    deskripsi: "200.000+ artefak — perjalanan peradaban Nusantara.",
    deskripsiPanjang: "Museum Nasional Indonesia (Museum Gajah) adalah museum terbesar dan terlengkap di Asia Tenggara, menyimpan lebih dari 200.000 artefak yang menceritakan perjalanan peradaban Nusantara dari prasejarah hingga era modern. Patung gajah perunggu di halaman menjadi ikon museum ini. Koleksinya mencakup fosil manusia purba, keramik dari dinasti China, emas-canting dari era Hindu-Buddha, hingga etnografi dari seluruh suku bangsa Indonesia. Sebuah tempat wajib bagi siapa saja yang ingin memahami akar peradaban Indonesia.",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
    rating: 4.6, category: "Syurga Edukasi", categoryIcon: GraduationCap, categoryColor: "text-violet-600",
    bestTime: "Sepanjang Tahun", avgCost: "Rp 50.000 - 200.000",
    highlights: [
      { icon: Landmark, title: "200.000+ Artefak", desc: "Koleksi peradaban terlengkap di Asia Tenggara" },
      { icon: Sparkles, title: "Fosil Prasejarah", desc: "Java Man dan fosil purba lainnya" },
      { icon: Heart, title: "Emas Canting", desc: "Koleksi emas kerajaan Hindu-Buddha" },
      { icon: Camera, title: "Etnografi Nusantara", desc: "Budaya 38 provinsi dalam satu tempat" },
    ],
    activities: [
      { icon: Compass, title: "Museum Tour" },
      { icon: Heart, title: "Educational Workshop" },
      { icon: Camera, title: "Photography Tour" },
      { icon: Sparkles, title: "Temporary Exhibition Visit" },
    ],
    howToGet: "Di jantung Jakarta, dekat Monas. Akses mudah dengan MRT, TransJakarta, atau taksi. 20 menit dari airport.",
    tips: ["Alokasikan minimal 3 jam untuk mengeksplorasi semua lantai", "Kunjungi hari Rabu — biasanya lebih sepi", "Beli tiket combo untuk akses ruangan khusus"],
  },
  {
    nama: "Museum Angkut", lokasi: "Jawa Timur",
    deskripsi: "Museum transportasi terbesar di Asia Tenggara.",
    deskripsiPanjang: "Museum Angkut di Batu, Malang adalah museum transportasi terbesar di Asia Tenggara — sebuah taman edukasi masif yang mengajarkan sejarah transportasi dari kereta kuda hingga pesawat terbang, dari mobil klasik Eropa hingga becak Indonesia. Museum ini dirancang dengan konsep edutainment yang luar biasa — setiap zona menampilkan era transportasi berbeda dengan diorama, replika, dan kendaraan asli. Zona Sunda Kelapa menampilkan pelabuhan Batavia kuno, sementara zona Education Park menawarkan interaktif learning untuk anak-anak.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    rating: 4.5, category: "Syurga Edukasi", categoryIcon: GraduationCap, categoryColor: "text-violet-600",
    bestTime: "Sepanjang Tahun", avgCost: "Rp 100.000 - 300.000",
    highlights: [
      { icon: Sparkles, title: "10+ Zona Tematik", desc: "Dari era kereta kuda hingga pesawat jet" },
      { icon: Camera, title: "Koleksi Kendaraan Asli", desc: "Mobil klasik, becak, pesawat, kapal — original" },
      { icon: Heart, title: "Edutainment", desc: "Belajar sambil bermain — cocok untuk keluarga" },
      { icon: Landmark, title: "Diorama Sejarah", desc: "Rekonstruksi pelabuhan Batavia kuno" },
    ],
    activities: [
      { icon: Compass, title: "Museum Exploration" },
      { icon: Camera, title: "Vintage Car Photo" },
      { icon: Heart, title: "Interactive Learning" },
      { icon: Sparkles, title: "Simulator Ride" },
    ],
    howToGet: "Dari Malang, perjalanan darat 1 jam ke Batu. Tersedia shuttle dari Malang atau Surabaya.",
    tips: ["Alokasikan 4-5 jam — museum sangat luas", "Beli tiket online untuk skip queue", "Kunjungi hari kerja untuk pengalaman lebih personal"],
  },
  {
    nama: "Ancol Dream World", lokasi: "Jakarta",
    deskripsi: "Taman impian — oceanarium, pantai, hiburan edukasi keluarga.",
    deskripsiPanjang: "Taman Impian Jaya Ancol adalah kompleks wisata terpadu terbesar di Indonesia — sebuah kota dalam kota yang menawarkan segalanya dari oceanarium hingga pantai, dari wahana ekstrem hingga galeri seni. Sea World Ancol menyimpan ribuan spesies laut, Dunia Fantasi (Dufan) menghadirkan wahana roller coaster kelas dunia, dan Pantai Ancol menawarkan sunset Jakarta terbaik. Ancol adalah destinasi keluarga yang menyediakan hiburan, edukasi, dan relaksasi dalam satu lokasi strategis.",
    image: "https://images.unsplash.com/photo-1503220317266-8e5b70a21ed6?w=800&h=500&fit=crop",
    rating: 4.4, category: "Syurga Edukasi", categoryIcon: GraduationCap, categoryColor: "text-violet-600",
    bestTime: "Sepanjang Tahun", avgCost: "Rp 200.000 - 1.000.000",
    highlights: [
      { icon: Fish, title: "Sea World Ancol", desc: "Oceanarium terbesar di Indonesia" },
      { icon: Sparkles, title: "Dunia Fantasi", desc: "Theme park dengan 30+ wahana" },
      { icon: Sun, title: "Pantai Ancol", desc: "Pantai terbaik di Jakarta — sunset city view" },
      { icon: Heart, title: "Galeri & Museum", desc: "Museum Seni Rupa dan Art Market" },
    ],
    activities: [
      { icon: Fish, title: "Sea World Visit" },
      { icon: Compass, title: "Dufan Rides" },
      { icon: Camera, title: "Beach Sunset Walk" },
      { icon: Heart, title: "Art Market Shopping" },
    ],
    howToGet: "Di utara Jakarta, akses mudah dengan tol dalam kota, TransJakarta, atau taksi. 30 menit dari airport.",
    tips: ["Beli annual pass untuk hemat jika sering berkunjung", "Weekday lebih sepi — hindari Saturday-Sunday", "Coba food court di area pantai untuk kuliner seafood"],
  },
  {
    nama: "Galeri Nasional", lokasi: "Jakarta",
    deskripsi: "Rumah seni rupa Indonesia — pameran kontemporer & tradisional.",
    deskripsiPanjang: "Galeri Nasional Indonesia adalah rumah seni rupa terkemuka yang menampilkan karya seni dari pelukis-pelukis terbaik Indonesia, mulai dari Raden Saleh dan Affandi hingga seniman kontemporer muda. Bangunan galeri yang elegan di jantung Jakarta menjadi tempat di mana tradisi dan modernitas seni rupa Indonesia bertemu. Pameran rotatif menampilkan karya lukis, patung, instalasi, dan seni media baru dari seluruh Nusantara.",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=500&fit=crop",
    rating: 4.5, category: "Syurga Edukasi", categoryIcon: GraduationCap, categoryColor: "text-violet-600",
    bestTime: "Sepanjang Tahun", avgCost: "Gratis - Rp 50.000",
    highlights: [
      { icon: Camera, title: "Karya Masterpiece", desc: "Lukisan Raden Saleh, Affandi, Basoeki Abdullah" },
      { icon: Sparkles, title: "Pameran Rotatif", desc: "Exhibition baru setiap bulan" },
      { icon: Heart, title: "Seni Kontemporer", desc: "Instalasi, media baru, seni digital" },
      { icon: Landmark, title: "Arsitektur Gallery", desc: "Bangunan heritage yang elegan" },
    ],
    activities: [
      { icon: Compass, title: "Gallery Tour" },
      { icon: Camera, title: "Art Photography" },
      { icon: Heart, title: "Art Workshop" },
      { icon: Sparkles, title: "Opening Night Events" },
    ],
    howToGet: "Di Medan Merdeka Barat, dekat Monas dan Istana Negara. Akses mudah dengan TransJakarta atau jalan kaki dari area Monas.",
    tips: ["Gratis masuk — pastikan membawa KTP", "Cek jadwal pameran terbaru di website resmi", "Cafe di lantai atas cocok untuk diskusi seni"],
  },
  {
    nama: "Taman Mini Indonesia Indah", lokasi: "Jakarta",
    deskripsi: "Miniatur Indonesia — 38 paviliun provinsi, museum, taman budaya.",
    deskripsiPanjang: "Taman Mini Indonesia Indah (TMII) adalah miniatur Indonesia dalam satu taman luas 150 hektar — menampilkan 38 paviliun yang merepresentasikan setiap provinsi Indonesia dengan arsitektur tradisional asli. Di sini, pengunjung bisa mengelilingi Nusantara dalam sehari — dari rumah adat Joglo Jawa, Honai Papua, hingga Rumah Gadang Minangkabau. Museum-museum tematik seperti Museum Indonesia, Museum Komodo, dan Museum Keprajuritan menambah kedalaman edukasi.",
    image: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=800&h=500&fit=crop",
    rating: 4.6, category: "Syurga Edukasi", categoryIcon: GraduationCap, categoryColor: "text-violet-600",
    bestTime: "Sepanjang Tahun", avgCost: "Rp 100.000 - 300.000",
    highlights: [
      { icon: Landmark, title: "38 Paviliun Provinsi", desc: "Arsitektur tradisional asli seluruh Indonesia" },
      { icon: Heart, title: "Museum Nusantara", desc: "10+ museum tematik dalam satu kompleks" },
      { icon: Sparkles, title: "Taman Budaya", desc: "Pertunjukan seni dan budaya setiap hari" },
      { icon: Camera, title: "Sky Lift", desc: "Pemandangan aerial seluruh kompleks" },
    ],
    activities: [
      { icon: Compass, title: "Paviliun Hopping" },
      { icon: Heart, title: "Cultural Performance" },
      { icon: Camera, title: "Traditional House Tour" },
      { icon: Sparkles, title: "Museum Exploration" },
    ],
    howToGet: "Di Jakarta Timur, 30 menit dari pusat kota via tol. Tersedia TransJakarta dan shuttle bus dari area Cililitan.",
    tips: ["Sewa sepeda atau shuttle internal untuk efisiensi", "Alokasikan 5-6 jam — area sangat luas", "Weekday lebih sepi dan paviliun bisa dimasuki lebih leluasa"],
  },
  {
    nama: "Saung Angklung Udjo", lokasi: "Jawa Barat",
    deskripsi: "Pusat pelestarian angklung — pertunjukan interaktif.",
    deskripsiPanjang: "Saung Angklung Udjo adalah pusat pelestarian angklung — alat musik tradisional Indonesia yang diakui UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity. Didirikan oleh Udjo Ngalagena pada 1966, Saung Angklung Udjo bukan sekadar pertunjukan seni, tetapi pengalaman budaya yang imersif. Pengunjung diajak bermain angklung bersama, belajar membuat alat musik, dan menikmati pertunjukan kolaborasi ratusan angklung yang menghasilkan harmoni magis.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop",
    rating: 4.7, category: "Syurga Edukasi", categoryIcon: GraduationCap, categoryColor: "text-violet-600",
    bestTime: "Sepanjang Tahun", avgCost: "Rp 100.000 - 250.000",
    highlights: [
      { icon: Heart, title: "UNESCO Heritage", desc: "Angklung — warisan budaya tak benda UNESCO" },
      { icon: Sparkles, title: "Pertunjukan Interaktif", desc: "Bermain angklung bersama ratusan pengunjung" },
      { icon: Camera, title: "Wayang Golek Show", desc: "Pertunjukan wayang kulit & golek tradisional" },
      { icon: Compass, title: "Workshop Membuat", desc: "Belajar membuat angklung dari bambu" },
    ],
    activities: [
      { icon: Heart, title: "Angklung Interactive Performance" },
      { icon: Sparkles, title: "Wayang Golek Show" },
      { icon: Compass, title: "Angklung Workshop" },
      { icon: Camera, title: "Traditional Dance Class" },
    ],
    howToGet: "Di Bandung, Jawa Barat. 30 menit dari pusat kota, 2 jam dari Jakarta via tol Cipularang.",
    tips: ["Datang untuk show sore (jam 3-5) — pertunjukan terbaik", "Booking grup untuk pengalaman interaktif yang lebih personal", "Beli angklung souvenir buatan lokal sebagai oleh-oleh"],
  },
];

// ============================================================
// Modal Component
// ============================================================
export function ModalDestinasiDetail({ onClose }: { onClose: () => void }) {
  const { destinasiDetailId } = useNavigation();
  const { toast } = useToast();

  const dest = ALL_DESTINASI.find((d) => d.nama === destinasiDetailId);

  if (!dest) {
    return (
      <div className="space-y-4">
        <CloseBtn onClose={onClose} />
        <div className="text-center py-12">
          <MapPin className="size-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-700">Destinasi Tidak Ditemukan</h3>
          <p className="text-sm text-slate-500 mt-2">Silakan pilih destinasi dari halaman wisata.</p>
        </div>
      </div>
    );
  }

  const CatIcon = dest.categoryIcon;

  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />

      {/* Hero Image */}
      <FI>
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
          <img
            src={dest.image}
            alt={dest.nama}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`${dest.categoryColor} bg-white/20 text-white border-white/30 hover:${dest.categoryColor}/20 text-[9px]`}>
                <CatIcon className="size-3 mr-1" />
                {dest.category}
              </Badge>
              {dest.badge && (
                <Badge className="bg-amber-400/90 text-amber-900 border-amber-300 text-[9px]">{dest.badge}</Badge>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{dest.nama}</h2>
            <div className="flex items-center gap-3 text-white/80">
              <div className="flex items-center gap-1">
                <MapPin className="size-3" />
                <span className="text-xs">{dest.lokasi}</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-3 ${i < Math.floor(dest.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/40"}`} />
                ))}
                <span className="text-xs ml-0.5">{dest.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </FI>

      {/* Description */}
      <FI delay={0.05}>
        <p className="text-sm text-slate-600 leading-relaxed">{dest.deskripsiPanjang}</p>
      </FI>

      {/* Highlights */}
      <FI delay={0.1}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dest.highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Icon className="size-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-800">{h.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </FI>

      {/* Activities */}
      <FI delay={0.15}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Aktivitas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {dest.activities.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/50 border border-blue-100">
                <Icon className="size-4 text-blue-600 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700">{a.title}</span>
              </div>
            );
          })}
        </div>
      </FI>

      {/* Info Cards */}
      <FI delay={0.2}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Informasi Perjalanan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card className="bg-white border-slate-100">
            <CardContent className="p-4 text-center">
              <Calendar className="size-5 text-emerald-600 mx-auto mb-2" />
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Waktu Terbaik</p>
              <p className="text-xs font-bold text-slate-800 mt-1">{dest.bestTime}</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-100">
            <CardContent className="p-4 text-center">
              <DollarSign className="size-5 text-blue-600 mx-auto mb-2" />
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Estimasi Biaya</p>
              <p className="text-xs font-bold text-slate-800 mt-1">{dest.avgCost}</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-100">
            <CardContent className="p-4 text-center">
              <Plane className="size-5 text-violet-600 mx-auto mb-2" />
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Akses</p>
              <p className="text-xs font-bold text-slate-800 mt-1">{dest.lokasi}</p>
            </CardContent>
          </Card>
        </div>
      </FI>

      {/* How to Get There */}
      <FI delay={0.25}>
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Plane className="size-4 text-blue-600" />
            <h4 className="text-xs font-bold text-slate-800">Cara Menuju {dest.nama}</h4>
          </div>
          <p className="text-[12px] text-slate-600 leading-relaxed">{dest.howToGet}</p>
        </div>
      </FI>

      {/* Tips */}
      <FI delay={0.3}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Tips Traveler</h3>
        <div className="space-y-2">
          {dest.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-[12px] text-slate-600 leading-relaxed">{tip}</span>
            </div>
          ))}
        </div>
      </FI>

      {/* CTA */}
      <FI delay={0.35}>
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-blue-600">
          <CardContent className="p-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-white mb-1">Booking {dest.nama}</h4>
              <p className="text-xs text-blue-100/80">Pesan sekarang dan nikmati pengalaman peradaban terbaik.</p>
            </div>
            <Button
              onClick={() => {
                toast({
                  title: "Booking Berhasil!",
                  description: `Booking untuk ${dest.nama} berhasil ditambahkan. Cek email Anda untuk konfirmasi.`,
                });
              }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shrink-0 text-xs"
            >
              <TicketCheck className="size-4 mr-2" />
              Booking Sekarang
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </FI>
    </div>
  );
}
