"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { 
  ChevronDown, ChevronRight, ExternalLink, Globe, Sparkles, 
  Send, Menu, X, ArrowUp, MessageCircle, MapPin, TrendingUp,
  Leaf, Landmark, Wheat, Waves, Heart, Rocket, Palette, Home, Plane
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { pillars, revenues, roadmap, techStack, governance, kpiStats, destinations } from "@/lib/mesita-data";

const pillarIcons = [Leaf, Landmark, Wheat, Waves, Heart, Rocket, Palette, Home, Plane];

// ─── Animated Counter ───────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
  const prefix = target.match(/^[^0-9]*/)?.[0] || "";

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const formatNumber = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(0);
    if (n >= 1000) return (n / 1000).toFixed(0);
    if (n % 1 !== 0) return n.toFixed(1);
    return Math.floor(n).toString();
  };

  return (
    <div ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-mesita-gold-light leading-none">
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
}

// ─── Particle Background ────────────────────────────────────────────
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.05 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

// ─── Navigation ─────────────────────────────────────────────────────
function Navigation({ onSectionClick }: { onSectionClick: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Beranda" },
    { id: "pillars", label: "9 Pilar" },
    { id: "roadmap", label: "Roadmap" },
    { id: "revenue", label: "Revenue" },
    { id: "tech", label: "Tech Stack" },
    { id: "governance", label: "Governance" },
  ];

  const handleClick = (id: string) => {
    onSectionClick(id);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-glass gold-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onSectionClick("hero")}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mesita-gold to-mesita-gold-dim flex items-center justify-center text-[#060B18] font-bold text-lg">
              M
            </div>
            <div>
              <div className="text-mesita-gold-light font-bold text-lg leading-tight tracking-wider">MESITA</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Ekosistem Wisata Nusantara</div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-mesita-gold-light transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-gradient-to-r from-mesita-gold to-mesita-gold-dim text-[#060B18] font-semibold hover:shadow-lg hover:shadow-mesita-gold/20 transition-all duration-300"
              onClick={() => handleClick("chat")}
            >
              <Sparkles className="w-4 h-4 mr-1" />
              AI Concierge
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-mesita-gold">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#060B18] border-l border-mesita-gold/20 w-72">
              <div className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className="px-4 py-3 text-left text-muted-foreground hover:text-mesita-gold-light hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Separator className="my-2 bg-mesita-gold/10" />
                <Button
                  className="mx-4 bg-gradient-to-r from-mesita-gold to-mesita-gold-dim text-[#060B18] font-semibold"
                  onClick={() => { handleClick("chat"); setMobileOpen(false); }}
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  AI Concierge
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/70 via-[#060B18]/50 to-[#060B18]" />
      </motion.div>

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Badge
            variant="outline"
            className="border-mesita-gold/40 text-mesita-gold bg-mesita-gold/10 px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase"
          >
            Grand Design · Indonesia 2025–2045
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-4"
        >
          <span className="text-foreground">MESITA</span>
          <br />
          <span className="text-gold-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Nusantara</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mb-6"
        >
          Masyarakat Ekosistem Wisata Nusantara
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Asosiasi induk yang mentransformasi pariwisata Indonesia dari komoditas menjadi 
          <span className="text-mesita-gold-light font-semibold"> ekosistem hidup</span> — menghubungkan 
          teknologi, budaya, alam, dan komunitas lokal dalam satu grand architecture menuju 
          <span className="text-mesita-gold-light font-semibold"> Indonesia Tourism #1 Dunia 2045</span>.
        </motion.p>

        {/* KPI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto"
        >
          {kpiStats.slice(0, 4).map((stat, i) => (
            <div
              key={i}
              className="bg-glass-gold gold-border rounded-xl p-4 md:p-5 text-center hover:scale-105 transition-transform duration-300"
            >
              <AnimatedCounter target={stat.value} />
              <div className="text-xs text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-mesita-gold/50 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 9 Pillars Section ──────────────────────────────────────────────
function PillarsSection() {
  const [activePillar, setActivePillar] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-mesita-teal/40 text-mesita-teal bg-mesita-teal/10 mb-4">
            9 Pilar Ekosistem
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">9 Pilar Ekosistem MESITA</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Klik setiap pilar untuk melihat detail implementasi, potensi, dan model bisnis
          </p>
        </motion.div>

        {/* Pillar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 mb-10">
          {pillars.map((pillar, i) => {
            const IconComponent = pillarIcons[i];
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setActivePillar(i)}
                className={`relative p-4 rounded-xl text-center transition-all duration-300 group ${
                  activePillar === i
                    ? "bg-glass-gold gold-border gold-glow scale-105"
                    : "bg-[#0D1526] border border-white/5 hover:border-mesita-gold-dim/50 hover:bg-[#1A2332]"
                }`}
              >
                <div className={`text-3xl mb-2 transition-transform duration-300 ${activePillar === i ? "scale-110" : "group-hover:scale-110"}`}>
                  {pillar.icon}
                </div>
                <div className={`text-xs font-semibold leading-tight ${activePillar === i ? "text-mesita-gold-light" : "text-foreground/80"}`}>
                  {pillar.name}
                </div>
                {activePillar === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-mesita-gold rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Pillar Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-glass gold-border rounded-2xl overflow-hidden gold-glow"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1526]/80 md:from-transparent md:to-[#0D1526]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1526] to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <span className="text-5xl">{pillars[activePillar].icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-mesita-gold-light mb-2">
                  {pillars[activePillar].icon} {pillars[activePillar].name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{pillars[activePillar].subtitle}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Potensi Revenue</div>
                    <div className="text-sm font-semibold" style={{ color: pillars[activePillar].color }}>{pillars[activePillar].revenue}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Target Wilayah</div>
                    <div className="text-sm text-foreground/80">{pillars[activePillar].target}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Model Bisnis</div>
                    <div className="text-sm text-foreground/80">{pillars[activePillar].model}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Mengapa Indonesia?</div>
                    <div className="text-sm text-foreground/80">{pillars[activePillar].why}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">5 Terobosan Utama</div>
                  {pillars[activePillar].actions.map((action, j) => (
                    <div key={j} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                      <span className="text-mesita-gold text-xs font-bold min-w-[20px] mt-0.5">{j + 1}.</span>
                      <span className="text-sm text-foreground/80">{action}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {pillars[activePillar].tags.map((tag, j) => (
                    <Badge
                      key={j}
                      variant="outline"
                      className="border-mesita-teal/30 text-mesita-teal bg-mesita-teal/5 text-[11px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Interactive Destinations Map ───────────────────────────────────
function DestinationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredDest, setHoveredDest] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-[#080E1E] to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="border-mesita-coral/40 text-mesita-coral bg-mesita-coral/10 mb-4">
            Destinasi Prioritas
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">Destinasi Nusantara</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            12 destinasi prioritas yang akan ditransformasi menjadi ekosistem wisata futuristik
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredDest(i)}
              onMouseLeave={() => setHoveredDest(null)}
              className="relative bg-[#0D1526] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-mesita-gold/30 hover:bg-[#1A2332] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mesita-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <MapPin className="w-5 h-5 text-mesita-gold mb-2" />
                <div className="text-sm font-semibold text-foreground/90">{dest.name}</div>
                <div className="text-xs text-muted-foreground">{dest.region}</div>
                <Badge variant="outline" className="mt-2 text-[10px] border-mesita-teal/20 text-mesita-teal bg-transparent">
                  {dest.pillar}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Roadmap Section ────────────────────────────────────────────────
function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-mesita-gold/40 text-mesita-gold bg-mesita-gold/10 mb-4">
            Timeline 2025–2045
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">Roadmap 2025–2045</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tiga fase transformasi menuju Indonesia sebagai destinasi wisata nomor satu dunia
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-mesita-gold/40 via-mesita-teal/40 to-mesita-gold/20" />

          {roadmap.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex gap-4 md:gap-6 mb-8 last:mb-0"
            >
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex justify-center">
                <div
                  className="w-4 h-4 rounded-full border-2 mt-4"
                  style={{ borderColor: phase.color, backgroundColor: "#060B18" }}
                />
              </div>

              {/* Content */}
              <div className="bg-[#0D1526] border border-white/5 rounded-xl p-5 md:p-6 flex-1 hover:border-mesita-gold-dim/30 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge
                    variant="outline"
                    className="text-xs font-semibold"
                    style={{ borderColor: `${phase.color}60`, color: phase.color, backgroundColor: `${phase.color}15` }}
                  >
                    {phase.year}
                  </Badge>
                  <h3 className="text-base md:text-lg font-bold text-foreground">{phase.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{phase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-[11px] bg-white/5 border border-white/5 rounded-md px-3 py-1 text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Progress bar for visual effect */}
                <div className="mt-4">
                  <Progress value={25 * (i + 1)} className="h-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Revenue Section ────────────────────────────────────────────────
function RevenueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalRevenue = 50; // Rp 50T total

  return (
    <section id="revenue" ref={ref} className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-transparent via-[#080E1E] to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-[#4ADE80]/40 text-[#4ADE80] bg-[#4ADE80]/10 mb-4">
            Mesin Revenue
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">Mesin Revenue MESITA</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Model monetisasi berlapis yang menghasilkan pendapatan dari hulu ke hilir ekosistem pariwisata
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {revenues.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0D1526] border border-white/5 rounded-xl p-6 hover:border-mesita-gold-dim/30 hover:shadow-lg hover:shadow-mesita-gold/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{rev.icon}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{rev.name}</h3>
                </div>
                <Badge className="bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] text-[11px]">
                  {rev.potential}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{rev.desc}</p>
              <div className="space-y-2">
                {rev.streams.map((stream, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-mesita-gold flex-shrink-0" />
                    {stream}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Revenue Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 bg-glass-gold gold-border rounded-xl p-6 text-center gold-glow"
        >
          <div className="text-sm text-muted-foreground mb-2">Total Potensi Revenue Ekosistem MESITA</div>
          <div className="text-4xl md:text-5xl font-bold text-gold-gradient font-serif">Rp 420+ Triliun/tahun</div>
          <div className="text-sm text-muted-foreground mt-2">Agregat dari 9 pilar ekosistem pariwisata Nusantara</div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Tech Stack Section ─────────────────────────────────────────────
function TechSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tagColors = ["text-mesita-teal border-mesita-teal/30 bg-mesita-teal/5", "text-[#60A5FA] border-[#60A5FA]/30 bg-[#60A5FA]/5", "text-[#A78BFA] border-[#A78BFA]/30 bg-[#A78BFA]/5", "text-mesita-gold border-mesita-gold/30 bg-mesita-gold/5"];

  return (
    <section id="tech" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-[#A78BFA]/40 text-[#A78BFA] bg-[#A78BFA]/10 mb-4">
            Teknologi
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">Tech Stack MESITA</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Infrastruktur teknologi yang membangun ekosistem pariwisata masa depan Indonesia
          </p>
        </motion.div>

        {/* Tech Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-10 gold-glow-strong"
        >
          <img src="/images/tech-stack.png" alt="MESITA Tech Stack" className="w-full h-48 md:h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="text-xs text-mesita-gold tracking-[0.2em] uppercase mb-2">Powered By</div>
            <div className="text-2xl md:text-3xl font-bold text-mesita-gold-light">AI · Blockchain · AR/VR · IoT</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0D1526] border border-white/5 rounded-xl p-6 hover:border-mesita-gold-dim/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{tech.icon}</span>
                <h3 className="text-sm font-semibold text-foreground">{tech.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tech.desc}</p>
              <div className="flex flex-wrap gap-2">
                {tech.tags.map((tag, j) => (
                  <Badge key={j} variant="outline" className={`text-[11px] ${tagColors[j % tagColors.length]}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Governance Section ─────────────────────────────────────────────
function GovernanceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="governance" ref={ref} className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-transparent via-[#080E1E] to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-mesita-gold/40 text-mesita-gold bg-mesita-gold/10 mb-4">
            Arsitektur Kelembagaan
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">Governance MESITA</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Struktur kelembagaan yang mengintegrasikan pemerintah, swasta, komunitas, dan diaspora global
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {governance.map((gov, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0D1526] border border-white/5 rounded-xl p-6 hover:border-mesita-gold-dim/30 transition-colors duration-300"
            >
              <h3 className="text-base font-semibold text-mesita-gold-light mb-4">{gov.title}</h3>
              <div className="space-y-0">
                {gov.items.map((item, j) => (
                  <div key={j} className="flex gap-3 py-3 border-b border-white/5 last:border-0">
                    <span className="text-mesita-gold text-xs font-bold min-w-[24px]">{String(j + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration with KopNusa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-glass-gold gold-border rounded-2xl p-6 md:p-8"
        >
          <div className="text-center">
            <div className="text-xs text-mesita-gold tracking-[0.3em] uppercase mb-2">Sinergi Strategis</div>
            <h3 className="text-xl md:text-2xl font-bold text-mesita-gold-light mb-4">
              MESITA × KopNusa.id
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
              Integrasi dengan infrastruktur KopNusa.id yang telah menghubungkan 83.763 desa nasional, 
              memungkinkan akses langsung ke jaringan koperasi digital terbesar Indonesia.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div>
                <div className="text-2xl font-bold text-mesita-gold-light font-serif">83.763</div>
                <div className="text-[10px] text-muted-foreground">Desa Terhubung</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mesita-gold-light font-serif">125K+</div>
                <div className="text-[10px] text-muted-foreground">Anggota Koperasi</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mesita-gold-light font-serif">38</div>
                <div className="text-[10px] text-muted-foreground">Provinsi</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── AI Chat Section ────────────────────────────────────────────────
function AIChatSection() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Salam Nusantara! 🌏 Saya MESITA AI Concierge — asisten pintar ekosistem pariwisata Indonesia. Tanyakan apa saja tentang 9 pilar ekosistem, destinasi wisata, roadmap 2045, atau bagaimana Anda bisa berpartisipasi dalam transformasi pariwisata Indonesia!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response || "Maaf, terjadi kesalahan. Silakan coba lagi." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Maaf, koneksi terganggu. Silakan coba lagi nanti." }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section id="chat" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge variant="outline" className="border-mesita-coral/40 text-mesita-coral bg-mesita-coral/10 mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">MESITA AI Concierge</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tanyakan apa saja tentang ekosistem pariwisata Nusantara kepada asisten AI kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden gold-glow"
        >
          {/* Chat Header */}
          <div className="bg-glass-gold gold-border-b px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mesita-gold to-mesita-gold-dim flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#060B18]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-mesita-gold-light">MESITA AI</div>
              <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                Online — Siap Melayani
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-5 space-y-4 scrollbar-mesita">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-mesita-gold/20 text-foreground rounded-br-sm"
                      : "bg-[#1A2332] text-foreground/80 rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1A2332] rounded-2xl px-4 py-3 rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-mesita-gold animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-mesita-gold animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 rounded-full bg-mesita-gold animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-white/5 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Tanyakan tentang ekosistem wisata Nusantara..."
                className="bg-[#1A2332] border-white/10 text-foreground placeholder:text-muted-foreground focus:border-mesita-gold/50"
                disabled={loading}
              />
              <Button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-mesita-gold to-mesita-gold-dim text-[#060B18] font-semibold hover:shadow-lg hover:shadow-mesita-gold/20"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA / Footer Section ───────────────────────────────────────────
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl gold-glow-strong"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-mesita-gold/10 via-[#0D1526] to-mesita-gold/5" />
          <div className="absolute inset-0 border border-mesita-gold/20 rounded-3xl" />
          
          <div className="relative p-8 md:p-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="text-6xl mb-6">🇮🇩</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-4">
                Bersama Membangun<br />Surga Dunia
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base md:text-lg">
                17.504 pulau. 714 suku bangsa. 1.300 bahasa daerah. Satu visi — Indonesia sebagai 
                <span className="text-mesita-gold-light font-semibold"> True Paradise in the World</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-mesita-gold to-mesita-gold-dim text-[#060B18] font-bold text-base px-8 hover:shadow-xl hover:shadow-mesita-gold/30 transition-all duration-300"
                >
                  Bergabung dengan MESITA
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
                <a
                  href="https://www.nusaparadise.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-mesita-gold/30 text-mesita-gold hover:bg-mesita-gold/10 font-semibold text-base px-8"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    NusaParadise.id
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-mesita-gold/10 bg-[#050A15]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mesita-gold to-mesita-gold-dim flex items-center justify-center text-[#060B18] font-bold text-lg">
                M
              </div>
              <div>
                <div className="text-mesita-gold-light font-bold text-lg">MESITA</div>
                <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Masyarakat Ekosistem Wisata Nusantara</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Asosiasi induk yang mentransformasi pariwisata Indonesia dari komoditas menjadi ekosistem hidup — 
              menghubungkan teknologi, budaya, alam, dan komunitas lokal menuju Indonesia Emas 2045.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-mesita-gold-light mb-4">Ekosistem</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>9 Pilar Utama</div>
              <div>Roadmap 2025–2045</div>
              <div>Tech Stack</div>
              <div>Governance</div>
              <div>AI Concierge</div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-mesita-gold-light mb-4">Mitra Strategis</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><TrendingUp className="w-3 h-3 text-mesita-gold" />KopNusa.id</div>
              <a href="https://www.nusaparadise.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-mesita-gold transition-colors"><Globe className="w-3 h-3 text-mesita-gold" />NusaParadise.id</a>
              <div className="flex items-center gap-2"><Landmark className="w-3 h-3 text-mesita-gold" />Kemenparekraf</div>
              <div className="flex items-center gap-2"><Home className="w-3 h-3 text-mesita-gold" />Kemendes</div>
            </div>
          </div>
        </div>
        <Separator className="bg-mesita-gold/10 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-mesita-gold font-semibold">MESITA</span> · Masyarakat Ekosistem Wisata Nusantara · Grand Design 2025–2045
          </div>
          <div className="text-xs text-muted-foreground/60">
            Indonesia Emas Tourism Blueprint · Built with 💛 for Nusantara
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Back to Top ────────────────────────────────────────────────────
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-mesita-gold/20 border border-mesita-gold/30 flex items-center justify-center text-mesita-gold hover:bg-mesita-gold/30 transition-all duration-300 backdrop-blur-md"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────
export default function MesitaPage() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#060B18]">
      <Navigation onSectionClick={scrollToSection} />

      <main className="flex-1">
        <HeroSection />
        <PillarsSection />
        <DestinationsSection />
        <RoadmapSection />
        <RevenueSection />
        <TechSection />
        <GovernanceSection />
        <AIChatSection />
        <CTASection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
