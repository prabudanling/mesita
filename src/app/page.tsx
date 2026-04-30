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
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  const { openModal } = useNavigation();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white/90 backdrop-blur-xl">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-[11px]">NP</span>
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 tracking-tight">NusaParadise<span className="text-blue-600">.id</span></span>
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

          {/* Column 2: Navigasi */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Eksplorasi Wisata Syurga", id: "wisata" },
                { label: "NusaGo Platform", id: "nusago" },
                { label: "Mengapa Bergabung MESITA", id: "kenapa-mesita" },
                { label: "Akademi Peradaban", id: "akademi-peradaban" },
                { label: "Gerbang Modal Nusantara", id: "investasi" },
                { label: "Ekosistem Pariwisata", id: "ekosistem-pariwisata" },
                { label: "Standar & Sertifikasi", id: "sertifikasi" },
                { label: "Indeks & Media", id: "media" },
                { label: "Markas Komando", id: "kontak" },
                { label: "Struktur Pimpinan", id: "pimpinan" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors"
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
                  className="text-[10px] text-slate-400 font-medium hover:text-slate-600 transition-colors cursor-pointer"
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
// HALAMAN UTAMA
// ============================================================
export default function Home() {
  const handleNavigate = (menuId: string) => {
    const el = document.getElementById(menuId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <TopBar onNavigate={handleNavigate} />
      <main className="flex-1">
        <VideoHeroSlider />
        <SectionSHU />
        <HeroPeradaban />
        <SectionNusaGo />
        <SectionKenapaMESITA />
        <SectionAkademi />
        <SectionWisata />
        <SectionInvestasi />
        <SectionEkosistem />
        <SectionSertifikasi />
        <SectionMedia />
        <SectionKontak />
        <SectionPimpinan />
      </main>
      <Footer />
      <MasterModal />
    </div>
  );
}
