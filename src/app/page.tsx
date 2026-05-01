"use client";

import TopBar from "@/components/nusaparadise/TopBar";
import VideoHeroSlider from "@/components/nusaparadise/VideoHeroSlider";
import HeroPeradaban from "@/components/nusaparadise/HeroPeradaban";
import SectionSHU from "@/components/nusaparadise/sections/SectionSHU";
import SectionNusaGo from "@/components/nusaparadise/sections/SectionNusaGo";
import SectionKenapaMESITA from "@/components/nusaparadise/sections/SectionKenapaMESITA";
import SectionAkademi from "@/components/nusaparadise/sections/SectionAkademi";
import SectionWisata from "@/components/nusaparadise/sections/SectionWisata";
import SectionInvestasi from "@/components/nusaparadise/sections/SectionInvestasi";
import SectionEkosistem from "@/components/nusaparadise/sections/SectionEkosistem";
import SectionSertifikasi from "@/components/nusaparadise/sections/SectionSertifikasi";
import SectionMedia from "@/components/nusaparadise/sections/SectionMedia";
import SectionKontak from "@/components/nusaparadise/sections/SectionKontak";
import SectionPimpinan from "@/components/nusaparadise/sections/SectionPimpinan";
import MasterModal from "@/components/nusaparadise/MasterModal";
import { SectionDivider } from "@/components/nusaparadise/PremiumReveal";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useNavigation } from "@/stores/navigation";
import { motion } from "framer-motion";

// ============================================================
// FOOTER — Premium Edition
// ============================================================
function Footer() {
  const { openModal } = useNavigation();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white/90 backdrop-blur-xl relative">
      {/* Premium top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-shimmer-line" />
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20 glow-ring">
                <span className="text-white font-bold text-[11px]">NP</span>
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 tracking-tight">
                  NusaParadise<span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">.id</span>
                </span>
                <p className="text-[10px] text-slate-400 leading-tight">Portal Wisata Peradaban Terbesar di Dunia</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Digital Twin Kedaulatan Pariwisata Indonesia — membangun ekosistem peradaban wisata dari Sabang sampai Merauke.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="size-3.5 text-slate-400" />
              <span className="text-[11px] text-slate-500">info@nusaparadise.id</span>
            </div>
          </div>

          {/* Column 2: Navigasi — CONSOLIDATED 6 */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Destinasi Syurga", id: "wisata" },
                { label: "NusaGo Digital", id: "nusago" },
                { label: "Ekosistem MESITA", id: "ekosistem-mesita" },
                { label: "Investasi Wisata", id: "investasi" },
                { label: "Akademi & Sertifikasi", id: "akademi-sertifikasi" },
                { label: "Media & Kontak", id: "media-kontak" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors premium-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Ekosistem */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Ekosistem</h4>
            <div className="flex flex-col gap-2">
              {[
                "NusaGo — Digital Platform",
                "KNBMP — Koperasi Nasional",
                "JE-P3 — Jaringan Ekonomi",
                "ASITA — Travel Agents",
                "MESITA — Federasi Asosiasi",
                "PHRI — Hotel & Restoran",
                "HPI — Pemandu Wisata",
                "Kemenparekraf RI",
                "JP3 Pay — Dompet Digital",
              ].map((org) => (
                <span key={org} className="text-[11px] text-slate-500">{org}</span>
              ))}
            </div>
          </div>

          {/* Column 4: Legal & Alamat */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Kantor Pusat</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-slate-400 shrink-0" />
                <span className="text-[11px] text-slate-500">Jl. Jenderal Sudirman Kav. 52-53, Jakarta Pusat 12190</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 text-slate-400 shrink-0" />
                <span className="text-[11px] text-slate-500">+62 21 500 045</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="size-3.5 text-slate-400 shrink-0" />
                <span className="text-[11px] text-slate-500">www.nusaparadise.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[10px] text-slate-400">© 2026 NusaParadise.id — Hak Cipta Dilindungi Undang-Undang Republik Indonesia</span>
            <div className="flex items-center gap-4">
              {["Kemenparekraf", "ASITA", "PHRI", "HPI"].map((org) => (
                <button
                  key={org}
                  type="button"
                  className="text-[10px] text-slate-400 font-medium hover:text-blue-600 transition-colors cursor-pointer premium-underline"
                  onClick={() => {
                    const modalMap: Record<string, string> = {
                      "Kemenparekraf": "gabung-ekosistem-cta",
                      "ASITA": "gabung-ekosistem-cta",
                      "PHRI": "gabung-anggota",
                      "HPI": "gabung-anggota",
                    };
                    openModal(modalMap[org] as any);
                  }}
                >
                  {org}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// SPECTRUM8 — PREMIUM PAGE LAYOUT
// Section dividers, aurora backgrounds, staggered reveals
// ============================================================
export default function Home() {
  const handleNavigate = (menuId: string) => {
    const el = document.getElementById(menuId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] premium-grain">
      <TopBar onNavigate={handleNavigate} />
      <main className="flex-1">
        {/* HERO — Full viewport video */}
        <VideoHeroSlider />

        {/* SHU Dashboard — Real-time counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionSHU />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* HERO PERADABAN — MESITA ecosystem */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="aurora-blob absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/8" />
            <div className="aurora-blob-2 absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-400/6" />
          </div>
          <HeroPeradaban />
        </div>

        <SectionDivider className="my-0" />

        {/* NUSAGO — Digital Platform */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionNusaGo />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* MENGAPA MESITA — 10 Super Advantages */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="aurora-blob-3 absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-300/5" />
          </div>
          <SectionKenapaMESITA />
        </div>

        <SectionDivider className="my-0" />

        {/* WISATA — Destination explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionWisata />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* INVESTASI — Investasi Wisata */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="aurora-blob absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-400/5" />
          </div>
          <SectionInvestasi />
        </div>

        <SectionDivider className="my-0" />

        {/* AKADEMI — Education & Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionAkademi />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* EKOSISTEM — Membership & Digital Wallet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionEkosistem />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* SERTIFIKASI — Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionSertifikasi />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* MEDIA — News & Reports */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionMedia />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* KONTAK — Command HQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionKontak />
        </motion.div>

        <SectionDivider className="my-0" />

        {/* PIMPINAN — Organization Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionPimpinan />
        </motion.div>
      </main>
      <Footer />
      <MasterModal />
    </div>
  );
}
