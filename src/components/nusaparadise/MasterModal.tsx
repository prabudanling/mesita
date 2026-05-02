"use client";

import { useNavigation, type ModalId } from "@/stores/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Wisata
import { ModalSyurgaBiru, ModalSyurgaKetinggian, ModalSyurgaWaktu, ModalSyurgaEdukasi } from "./modals/ModalPatronWisata";
// Investasi & Ekosistem
import { ModalInvestInfra, ModalInvestHospitality, ModalInvestFnB, ModalDashboardROI, ModalGabungAnggota, ModalDompetDigital, ModalMarketplace } from "./modals/ModalInvestasiEkosistem";
// Sertifikasi, Media, Kontak
import { ModalChseHalal, ModalPerijinan, ModalBintang5, ModalLaporanTahunan, ModalEsgKarbon, ModalPusatMedia, ModalBantuan247, ModalKemitraan } from "./modals/ModalSertifikasiMediaKontak";
// Destinasi Detail & Video Vision
import { ModalDestinasiDetail } from "./modals/ModalDestinasiDetail";
import { ModalVideoVision } from "./modals/ModalVideoVision";
// Pimpinan
import { ModalDPP, ModalDPW, ModalDPC, ModalPAC } from "./modals/ModalPimpinan";

const MODAL_TITLES: Record<string, string> = {

  "syurga-biru": "Syurga Biru Nusantara",
  "syurga-ketinggian": "Syurga Ketinggian & Tirta",
  "syurga-waktu": "Syurga Waktu & Leluhur",
  "syurga-edukasi": "Syurga Edukasi & Galeri",
  "invest-infra": "Investasi Infrastruktur & Eco-Tourism",
  "invest-hospitality": "Pendanaan Hospitality Berdaulat",
  "invest-fnb": "Investasi F&B Khas Nusantara",
  "dashboard-roi": "Dashboard ROI Investor",
  "gabung-anggota": "Gabung Anggota Ekosistem KKMNMP",
  "dompet-digital": "Dompet Digital JP3 Pay",
  "marketplace-b2b": "Marketplace Rantai Pasok B2B",
  "chse-halal": "Sertifikasi CHSE & Halal Tourism",
  perijinan: "Perizinan Terpadu Ekosistem",
  "bintang-5": "Standar Layanan Bintang 5 Desa",
  "laporan-tahunan": "Laporan Indeks Kinerja Tahunan",
  "esg-karbon": "Laporan ESG & Jejak Karbon",
  "pusat-media": "Pusat Intelijen Media",
  "bantuan-247": "Pusat Bantuan Wisatawan 24/7",
  kemitraan: "Kemitraan & Kolaborasi Bisnis",
  "destinasi-detail": "Detail Destinasi Wisata",
  "gabung-ekosistem-cta": "Gabung Ekosistem NusaParadise",
  "video-vision": "Video Vision — Tourism of Civilization",
  "daftar-asosiasi": "Daftarkan Asosiasi Anda",
  "nusago-gerbang": "Gerbang Perjalanan Digital — NusaGo",
  "nusago-ai": "AI Travel Intelligence — NusaGo",
  "nusago-kode": "Kode Perjalanan Digital — NusaGo",
  "nusago-arvr": "AR & VR Experience — NusaGo",
  "nusago-nft": "NFT & Metaverse Resort — NusaGo",
  "nusago-investasi": "Portal Investasi Global — NusaGo",
  "kenapa-koperasi": "Koperasi Digital Pertama — MESITA",
  "kenapa-ai": "AI Business Matching — MESITA",
  "kenapa-blockchain": "Profit Sharing Blockchain — MESITA",
  "kenapa-metaverse": "Metaverse Business Center — MESITA",
  "kenapa-nft": "NFT Membership — MESITA",
  "kenapa-carbon": "Carbon Credit Revenue — MESITA",
  // Akademi Peradaban
  "akademi-sertifikasi": "Sertifikasi & Akreditasi Global — Akademi Peradaban",
  "akademi-scaleup": "Pelatihan & Training Scale-Up — Akademi Peradaban",
  "akademi-skill": "Upgrade Skill Karyawan — Akademi Peradaban",
  "akademi-perusahaan": "Upgrade Perusahaan Internasional — Akademi Peradaban",
  // Pimpinan
  "dpp-mesita": "DPP MESITA — Dewan Pimpinan Pusat",
  "dpw-mesita": "DPW MESITA — Dewan Pimpinan Wilayah",
  "dpc-mesita": "DPC MESITA — Dewan Pimpinan Cabang",
  "pac-mesita": "PAC MESITA — Pengurus Anak Cabang",
  "semua-berita": "Semua Berita",
  "laporan-lengkap": "Laporan Kinerja Lengkap 2025",
  "laporan-esg": "Laporan ESG 2025",
};

function ModalContent({ id, onClose }: { id: ModalId; onClose: () => void }) {
  // Wisata
  if (id === "syurga-biru") return <ModalSyurgaBiru onClose={onClose} />;
  if (id === "syurga-ketinggian") return <ModalSyurgaKetinggian onClose={onClose} />;
  if (id === "syurga-waktu") return <ModalSyurgaWaktu onClose={onClose} />;
  if (id === "syurga-edukasi") return <ModalSyurgaEdukasi onClose={onClose} />;
  // Investasi
  if (id === "invest-infra") return <ModalInvestInfra onClose={onClose} />;
  if (id === "invest-hospitality") return <ModalInvestHospitality onClose={onClose} />;
  if (id === "invest-fnb") return <ModalInvestFnB onClose={onClose} />;
  if (id === "dashboard-roi") return <ModalDashboardROI onClose={onClose} />;
  // Ekosistem
  if (id === "gabung-anggota") return <ModalGabungAnggota onClose={onClose} />;
  if (id === "dompet-digital") return <ModalDompetDigital onClose={onClose} />;
  if (id === "marketplace-b2b") return <ModalMarketplace onClose={onClose} />;
  // Sertifikasi
  if (id === "chse-halal") return <ModalChseHalal onClose={onClose} />;
  if (id === "perijinan") return <ModalPerijinan onClose={onClose} />;
  if (id === "bintang-5") return <ModalBintang5 onClose={onClose} />;
  // Media
  if (id === "laporan-tahunan") return <ModalLaporanTahunan onClose={onClose} />;
  if (id === "esg-karbon") return <ModalEsgKarbon onClose={onClose} />;
  if (id === "pusat-media") return <ModalPusatMedia onClose={onClose} />;
  if (id === "semua-berita") return <ModalPusatMedia onClose={onClose} />;
  if (id === "laporan-lengkap") return <ModalLaporanTahunan onClose={onClose} />;
  if (id === "laporan-esg") return <ModalEsgKarbon onClose={onClose} />;
  // Kontak
  if (id === "bantuan-247") return <ModalBantuan247 onClose={onClose} />;
  if (id === "kemitraan") return <ModalKemitraan onClose={onClose} />;
  // Destinasi Detail
  if (id === "destinasi-detail") return <ModalDestinasiDetail onClose={onClose} />;
  // CTA Alias
  if (id === "gabung-ekosistem-cta") return <ModalGabungAnggota onClose={onClose} />;
  if (id === "daftar-asosiasi") return <ModalGabungAnggota onClose={onClose} />;
  // NusaGo — alias ke investasi atau ekosistem
  if (id === "nusago-gerbang") return <ModalInvestInfra onClose={onClose} />;
  if (id === "nusago-ai") return <ModalDashboardROI onClose={onClose} />;
  if (id === "nusago-kode") return <ModalDompetDigital onClose={onClose} />;
  if (id === "nusago-arvr") return <ModalSyurgaBiru onClose={onClose} />;
  if (id === "nusago-nft") return <ModalInvestFnB onClose={onClose} />;
  if (id === "nusago-investasi") return <ModalInvestInfra onClose={onClose} />;
  // Mengapa MESITA — alias ke gabung anggota with context
  if (id === "kenapa-koperasi") return <ModalGabungAnggota onClose={onClose} />;
  if (id === "kenapa-ai") return <ModalDashboardROI onClose={onClose} />;
  if (id === "kenapa-blockchain") return <ModalGabungAnggota onClose={onClose} />;
  if (id === "kenapa-metaverse") return <ModalSyurgaBiru onClose={onClose} />;
  if (id === "kenapa-nft") return <ModalInvestFnB onClose={onClose} />;
  if (id === "kenapa-carbon") return <ModalEsgKarbon onClose={onClose} />;
  // Akademi Peradaban — alias ke modal yang sesuai
  if (id === "akademi-sertifikasi") return <ModalChseHalal onClose={onClose} />;
  if (id === "akademi-scaleup") return <ModalGabungAnggota onClose={onClose} />;
  if (id === "akademi-skill") return <ModalDashboardROI onClose={onClose} />;
  if (id === "akademi-perusahaan") return <ModalInvestInfra onClose={onClose} />;
  // Video Vision
  if (id === "video-vision") return <ModalVideoVision onClose={onClose} />;
  // Pimpinan
  if (id === "dpp-mesita") return <ModalDPP onClose={onClose} />;
  if (id === "dpw-mesita") return <ModalDPW onClose={onClose} />;
  if (id === "dpc-mesita") return <ModalDPC onClose={onClose} />;
  if (id === "pac-mesita") return <ModalPAC onClose={onClose} />;

  // Default fallback
  return (
    <div className="text-center py-8">
      <p className="text-slate-500">Halaman sedang dalam pengembangan.</p>
      <button onClick={onClose} className="mt-4 text-sm text-blue-600 hover:underline">Kembali</button>
    </div>
  );
}

export default function MasterModal() {
  const { activeModal, closeModal } = useNavigation();
  const isOpen = activeModal !== "null";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) closeModal(); }}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-4 sm:p-6 lg:p-8">
        <DialogHeader className="sr-only">
          <DialogTitle>{MODAL_TITLES[activeModal] || "Detail"}</DialogTitle>
        </DialogHeader>
        {isOpen && <ModalContent id={activeModal} onClose={closeModal} />}
      </DialogContent>
    </Dialog>
  );
}
