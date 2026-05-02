"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Landmark,
  ArrowUpDown,
  Users,
  Activity,
  Sparkles,
} from "lucide-react";
import type { AgregatSHU } from "@/types/nusaparadise";
import { cn } from "@/lib/utils";

// ============================================================
// Format angka Rupiah
// ============================================================
function formatSHU(nominal: number): string {
  const triliun = nominal / 1_000_000_000_000;
  if (triliun >= 1) return `Rp ${triliun.toFixed(2)} T`;
  const miliar = nominal / 1_000_000_000;
  if (miliar >= 1) return `Rp ${miliar.toFixed(1)} M`;
  const juta = nominal / 1_000_000;
  return `Rp ${juta.toFixed(0)} Jt`;
}

function formatNumber(n: number): string {
  return n.toLocaleString("id-ID");
}

// ============================================================
// Section SHU — Dashboard Real-Time Kedaulatan Desa
// ============================================================
export default function SectionSHU() {
  const [agregat, setAgregat] = useState<AgregatSHU>({
    totalSHU: 2_847_500_000_000,
    desaAktif: 6_016,
    transaksiHariIni: 1_247,
    pertumbuhanPersen: 23.7,
  });

  const animatedRef = useRef(agregat.totalSHU);
  const [animatedSHU, setAnimatedSHU] = useState(agregat.totalSHU);

  useEffect(() => {
    let rafId: number;
    let target = agregat.totalSHU;

    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 35_000_000) + 15_000_000;
      target += increment;
      setAgregat((prev) => ({
        ...prev,
        totalSHU: target,
        transaksiHariIni: prev.transaksiHariIni + Math.floor(Math.random() * 3) + 1,
      }));
    }, 3000);

    const animate = () => {
      setAgregat((current) => {
        const diff = current.totalSHU - animatedRef.current;
        if (Math.abs(diff) < 1_000_000) {
          animatedRef.current = current.totalSHU;
          setAnimatedSHU(current.totalSHU);
        } else {
          animatedRef.current += diff / 20;
          setAnimatedSHU(Math.round(animatedRef.current));
        }
        return current;
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const stats = [
    {
      icon: Landmark,
      label: "Total SHU Desa",
      value: formatSHU(animatedSHU),
      sub: "Sisa Hasil Usaha Koperasi",
      color: "from-blue-500 to-blue-700",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-300",
      pulse: true,
    },
    {
      icon: Users,
      label: "Desa Aktif",
      value: formatNumber(agregat.desaAktif),
      sub: "Desa Wisata Terintegrasi",
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-300",
      pulse: false,
    },
    {
      icon: ArrowUpDown,
      label: "Transaksi Hari Ini",
      value: formatNumber(agregat.transaksiHariIni),
      sub: "Via JP3 Pay & Ekosistem",
      color: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-300",
      pulse: false,
    },
    {
      icon: TrendingUp,
      label: "Pertumbuhan",
      value: `+${agregat.pertumbuhanPersen}%`,
      sub: "Year-over-Year Growth",
      color: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-500/20",
      iconColor: "text-violet-300",
      pulse: false,
    },
  ];

  return (
    <section id="shu-desa" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Activity className="size-3.5 text-cyan-400" />
            <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">Live Dashboard</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 counter-active" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
            Wisata Syurga Sebenarnya Terbaik di Dunia
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Transparansi real-time SHU (Sisa Hasil Usaha) dari seluruh desa wisata yang terintegrasi dalam ekosistem MESITA
          </p>
        </motion.div>

        {/* Main SHU Hero Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6 sm:mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.05] to-cyan-500/[0.07]" />

            <div className="relative px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Sparkles className="size-6 sm:size-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] sm:text-xs font-semibold text-cyan-300 uppercase tracking-wider">Total SHU Desa</span>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 counter-active" />
                  </div>
                  <div className="font-mono text-2xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums tracking-tight">
                    {formatSHU(animatedSHU)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-center sm:text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-0.5">Update</span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="size-3" />
                    Real-time
                  </span>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <div className="text-center sm:text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-0.5">Pertumbuhan YoY</span>
                  <span className="text-lg sm:text-xl font-bold text-emerald-400">+{agregat.pertumbuhanPersen}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group relative rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors duration-300" />
                <div className="relative p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", stat.iconBg)}>
                      <Icon className={cn("size-4", stat.iconColor)} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider">{stat.label}</span>
                    {stat.pulse && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 counter-active" />}
                  </div>
                  <div className="font-mono text-lg sm:text-2xl font-bold text-white tabular-nums mb-1">
                    {stat.value}
                  </div>
                  <span className="text-[10px] text-slate-500">{stat.sub}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
