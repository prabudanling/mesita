"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft, Play, Globe, Users, MapPin, Sparkles, Building2, Heart,
  Compass, ArrowRight, CheckCircle2, Camera, Eye,
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

const CHAPTERS = [
  { num: 1, title: "Indonesia — Kepulauan Peradaban", desc: "17.504 Pulau, 280 Juta Rakyat — peradaban maritim terbesar di dunia yang membentang dari Sabang hingga Merauke.", icon: Globe, color: "from-blue-500 to-blue-700", stats: "17.504 Pulau" },
  { num: 2, title: "Warisan Budaya Tak Ternilai", desc: "714 Suku Bangsa, 1.300 Bahasa Daerah, ribuan tradisi yang hidup dan berlanjut dari generasi ke generasi.", icon: Sparkles, color: "from-amber-500 to-amber-700", stats: "714 Suku" },
  { num: 3, title: "Desa Wisata — Fondasi Ekonomi", desc: "6.016+ Desa Wisata sebagai fondasi ekonomi peradaban lokal — koperasi, UMKM, dan kearifan lokal.", icon: Heart, color: "from-emerald-500 to-emerald-700", stats: "6.016+ Desa" },
  { num: 4, title: "Infrastruktur Masa Depan", desc: "Bandara baru, pelabuhan marina, jalan tol trans-kepulauan, dan eco-resort premium di destinasi prioritas.", icon: Building2, color: "from-cyan-500 to-cyan-700", stats: "10+ Proyek" },
  { num: 5, title: "Ekosistem Digital Berdaulat", desc: "JP3 Pay, Marketplace B2B, platform booking terintegrasi — digitalisasi pariwisata dari desa hingga global.", icon: Compass, color: "from-violet-500 to-violet-700", stats: "100% Digital" },
  { num: 6, title: "Visi 2045 — 50 Juta Wisman", desc: "Target Indonesia sebagai destinasi wisata #1 di dunia — 50 juta wisatawan mancanegara menuju Golden Indonesia 2045.", icon: Users, color: "from-rose-500 to-rose-700", stats: "50 Jt Wisman" },
];

export function ModalVideoVision({ onClose }: { onClose: () => void }) {
  const { openModal } = useNavigation();
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <CloseBtn onClose={onClose} />

      {/* Video Player Mockup */}
      <FI>
        <div
          onClick={() => toast({ title: "🎬 Video Vision", description: "Video presentasi Tourism of Civilization sedang diputar. Durasi: 4 menit 32 detik." })}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 aspect-video cursor-pointer group"
        >
          {/* Ambient effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-[60px]" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />

          {/* Play button center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
            >
              <Play className="size-8 text-white ml-1" />
            </motion.div>
          </div>

          {/* Title overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <Badge className="bg-red-500/90 text-white border-red-500 text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse" />
              VISION
            </Badge>
            <span className="text-[10px] text-white/50 font-mono">4:32</span>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Tourism of Civilization — Vision 2045</h3>
                <p className="text-[10px] text-white/50">NusaParadise.id — Official Vision Film</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 rounded-full bg-white/20 overflow-hidden">
                  <div className="w-0 h-full bg-blue-400 rounded-full" />
                </div>
                <Camera className="size-3.5 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </FI>

      {/* Description */}
      <FI delay={0.05}>
        <div className="flex items-center gap-2 mb-2">
          <Eye className="size-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900">Tentang Video Vision</h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Video Vision ini mempersembahkan visi besar <strong>Tourism of Civilization</strong> — sebuah paradigma baru pariwisata Indonesia yang mengangkat peradaban, kebudayaan, dan martabat bangsa ke panggung dunia. Film 4 menit 32 detik ini mengajak Anda menyaksikan keajaiban 17.504 pulau Indonesia yang siap menjadi destinasi wisata terbesar di planet ini.
        </p>
      </FI>

      {/* Chapters */}
      <FI delay={0.1}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Bab Film — 6 Chapter</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CHAPTERS.map((ch) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={ch.num}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-xl overflow-hidden bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer"
                onClick={() => toast({ title: `Chapter ${ch.num}: ${ch.title}`, description: ch.desc })}
              >
                <div className={`h-1 bg-gradient-to-r ${ch.color}`} />
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                      <Icon className="size-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9px] font-mono text-slate-400">CH.{ch.num}</span>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate">{ch.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{ch.desc}</p>
                    </div>
                    <Badge className="text-[9px] bg-slate-50 text-slate-600 border-slate-100 shrink-0">{ch.stats}</Badge>
                  </div>
                </CardContent>
              </motion.div>
            );
          })}
        </div>
      </FI>

      {/* Key Stats */}
      <FI delay={0.2}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: "17.504", label: "Pulau" },
            { value: "714", label: "Suku Bangsa" },
            { value: "6.016+", label: "Desa Wisata" },
            { value: "50 Jt", label: "Target Wisman 2045" },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-lg font-bold text-blue-600 tabular-nums">{s.value}</p>
              <p className="text-[10px] text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </FI>

      {/* Verified Pillars */}
      <FI delay={0.25}>
        <h3 className="text-sm font-bold text-slate-900 mb-3">Pilar Peradaban</h3>
        <div className="space-y-2">
          {[
            { title: "Diplomasi Budaya", desc: "Warisan peradaban Indonesia sebagai soft power global" },
            { title: "Ekonomi Rakyat Berdaulat", desc: "Koperasi desa, UMKM, dan rantai pasok tanpa tengkulak" },
            { title: "Sustainable Tourism", desc: "Target Net Zero Carbon 2045 dan pelestarian lingkungan" },
            { title: "Digital Sovereignty", desc: "Platform digital berdaulat — JP3 Pay, marketplace B2B" },
            { title: "SDM Unggul", desc: "5 juta tenaga kerja tersertifikasi CHSE dan hospitality" },
          ].map((p) => (
            <div key={p.title} className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
              <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-800">{p.title}</p>
                <p className="text-[11px] text-slate-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FI>

      {/* CTA */}
      <FI delay={0.3}>
        <Card className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 border-blue-600">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white mb-1">Mulai Perjalanan Peradaban Anda</h4>
              <p className="text-sm text-blue-100/80">Bergabunglah dengan 100K+ anggota ekosistem NusaParadise.</p>
            </div>
            <Button
              onClick={() => openModal("gabung-ekosistem-cta")}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shrink-0"
            >
              Gabung Sekarang
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </FI>
    </div>
  );
}
