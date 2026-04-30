"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { MENU_UTAMA } from "@/data/menu";
import { cn } from "@/lib/utils";
import { useNavigation, type ModalId } from "@/stores/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

// ============================================================
// Framer Motion Variants — Premium Stagger
// ============================================================

/** Container variant: stagger children on mount */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

/** Individual sub-item variant for mega menu grid */
const staggerItem = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

/** Mobile drawer menu items stagger */
const mobileMenuStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

/** Individual mobile menu item */
const mobileMenuItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.15 },
  },
};

/** Mobile sub-items stagger */
const mobileSubStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

/** Individual mobile sub-item */
const mobileSubItem = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    x: 8,
    transition: { duration: 0.12 },
  },
};

// ============================================================
// Desktop Mega Menu Item (hover-triggered) — Premium
// ============================================================
function MegaMenuItem({
  menu,
  isActive,
  isOverVideo,
  onHover,
  onLeave,
}: {
  menu: typeof MENU_UTAMA[number];
  isActive: boolean;
  isOverVideo: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = menu.icon;
  return (
    <div
      className="relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200",
          isActive
            ? isOverVideo
              ? "text-cyan-300 bg-white/[0.15] shadow-sm shadow-black/10"
              : "text-white bg-white/20 shadow-sm shadow-blue-900/20"
            : isOverVideo
              ? "text-slate-200 hover:text-white hover:bg-white/[0.12]"
              : "text-blue-100 hover:text-white hover:bg-white/15"
        )}
      >
        <Icon className="size-3.5" />
        <span className="premium-underline">{menu.label}</span>
        <ChevronDown
          className={cn(
            "size-3 transition-transform duration-200",
            isActive && "rotate-180"
          )}
        />
      </button>
    </div>
  );
}

// ============================================================
// Desktop Mega Menu Panel (dropdown) — Premium + Stagger
// ============================================================
function MegaMenuPanel({
  menu,
  onSubItemClick,
}: {
  menu: typeof MENU_UTAMA[number];
  onSubItemClick: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 z-50 pt-2"
    >
      <div className="premium-shimmer bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
              <menu.icon className="size-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{menu.label}</h3>
              <p className="text-[11px] text-slate-500">{menu.description}</p>
            </div>
          </div>

          {/* Sub-items Grid — Stagger Animated */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {menu.subItems.map((sub) => {
              const SubIcon = sub.icon;
              return (
                <motion.button
                  key={sub.id}
                  variants={staggerItem}
                  onClick={() => onSubItemClick(sub.id)}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center shrink-0 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-200">
                    <SubIcon className="size-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px] font-semibold text-slate-800 group-hover:text-blue-700 transition-colors truncate">
                        {sub.label}
                      </span>
                      {sub.badge && (
                        <span className="shrink-0 text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                      {sub.description}
                    </p>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-300 group-hover:text-blue-400 shrink-0 mt-2 transition-colors" />
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// Mobile Drawer (Sheet + Accordion-style) — Premium Stagger
// ============================================================
function MobileDrawer({
  open,
  onOpenChange,
  onNavigate,
  onSubItemClick,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (menuId: string) => void;
  onSubItemClick: (id: string) => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleSubItemClick = useCallback(
    (subId: string) => {
      onOpenChange(false);
      onSubItemClick(subId);
    },
    [onOpenChange, onSubItemClick]
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[85vw] max-w-md p-0 overflow-y-auto"
      >
        {/* Header */}
        <SheetHeader className="p-5 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="glow-ring w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">NP</span>
            </div>
            <div>
              <SheetTitle className="text-sm font-bold text-slate-900">
                NusaParadise
                <span className="animate-gradient bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  .id
                </span>
              </SheetTitle>
              <SheetDescription className="text-[10px]">
                Portal Wisata Peradaban Terbesar
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Menu List — Staggered */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="mobile-menu-list"
              variants={mobileMenuStagger}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-3"
            >
              {MENU_UTAMA.map((menu) => {
                const Icon = menu.icon;
                const isExpanded = expandedId === menu.id;

                return (
                  <motion.div
                    key={menu.id}
                    variants={mobileMenuItem}
                    className="border-b border-slate-50 last:border-0"
                  >
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : menu.id)
                      }
                      className="w-full flex items-center gap-3 px-3 py-3.5 text-left hover:bg-blue-50/50 rounded-xl transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="size-3.5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-slate-800 block premium-underline">
                          {menu.label}
                        </span>
                        <span className="text-[10px] text-slate-400 line-clamp-1">
                          {menu.description}
                        </span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "size-3.5 text-slate-400 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Expanded Sub-items — Staggered */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
                              opacity: { duration: 0.25, delay: 0.05 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
                              opacity: { duration: 0.15 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            variants={mobileSubStagger}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="pl-6 pr-2 pb-3 space-y-1.5"
                          >
                            {menu.subItems.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <motion.button
                                  key={sub.id}
                                  variants={mobileSubItem}
                                  onClick={() => handleSubItemClick(sub.id)}
                                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-blue-50 transition-colors text-left group"
                                >
                                  <SubIcon className="size-3.5 text-slate-400 group-hover:text-blue-500 shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[12px] font-medium text-slate-700 group-hover:text-blue-600 truncate">
                                        {sub.label}
                                      </span>
                                      {sub.badge && (
                                        <span className="shrink-0 text-[8px] font-bold text-blue-600 bg-blue-50 px-1 py-0.5 rounded-full uppercase">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <ChevronRight className="size-3 text-slate-300 group-hover:text-blue-400 shrink-0" />
                                </motion.button>
                              );
                            })}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
}

// ============================================================
// TopBar — Main Export (Premium Enhanced)
// ============================================================
export default function TopBar({ onNavigate }: { onNavigate?: (menuId: string) => void }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(true);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleHover = useCallback((id: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(id);
  }, []);

  const handleLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  const handleNavigate = useCallback(
    (menuId: string) => {
      onNavigate?.(menuId);
      setActiveMenu(null);
      setMobileOpen(false);
    },
    [onNavigate]
  );

  // Scroll-aware transparency: transparent over video, opaque when scrolled past
  useEffect(() => {
    const handleScroll = () => {
      setIsOverVideo(window.scrollY < 200);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega-menu on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const activeMenuData = MENU_UTAMA.find((m) => m.id === activeMenu);
  const { openModal } = useNavigation();

  const handleSubItemClickGlobal = useCallback((subId: string) => {
    openModal(subId as ModalId);
    setActiveMenu(null);
    setMobileOpen(false);
  }, [openModal]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className={cn(
          "absolute inset-0 transition-all duration-500",
          isOverVideo
            ? "bg-gradient-to-r from-slate-900/95 via-blue-950/90 to-slate-900/95 backdrop-blur-xl border-b border-white/[0.1]"
            : "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 backdrop-blur-xl border-b border-blue-400/40 shadow-lg shadow-blue-900/30"
        )} />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
              {/* Logo — with glow-ring & gradient .id */}
              <div className="flex items-center gap-2.5 shrink-0">
                <div className={cn(
                  "glow-ring w-9 h-9 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500",
                  isOverVideo
                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 shadow-cyan-500/30"
                    : "bg-white/25 shadow-blue-400/30"
                )}>
                  <span className="text-white font-bold text-sm">NP</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold tracking-tight text-white">
                    NusaParadise
                    <span className={cn(
                      "animate-gradient bg-clip-text text-transparent bg-[length:200%_200%] transition-all duration-500",
                      isOverVideo
                        ? "bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300"
                        : "bg-gradient-to-r from-cyan-200 via-white to-cyan-200"
                    )}>
                      .id
                    </span>
                  </span>
                  <span className={cn(
                    "text-[10px] hidden sm:block leading-tight transition-colors duration-500",
                    isOverVideo ? "text-slate-200" : "text-blue-100"
                  )}>
                    Portal Wisata Peradaban Terbesar di Dunia
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav
                ref={navRef}
                className="hidden lg:flex items-center gap-1 flex-1 justify-center"
                onMouseLeave={handleLeave}
              >
                {MENU_UTAMA.map((menu) => (
                  <MegaMenuItem
                    key={menu.id}
                    menu={menu}
                    isActive={activeMenu === menu.id}
                    isOverVideo={isOverVideo}
                    onHover={() => handleHover(menu.id)}
                    onLeave={handleLeave}
                  />
                ))}
              </nav>

              {/* CTA + Mobile Toggle */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => openModal("gabung-ekosistem-cta")}
                  className={cn(
                    "premium-btn hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 shadow-sm",
                    isOverVideo
                      ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-cyan-500/30 hover:shadow-cyan-400/40"
                      : "bg-cyan-400 text-blue-900 hover:bg-cyan-300 shadow-cyan-500/20 font-bold"
                  )}
                >
                  <span>Gabung Ekosistem</span>
                </button>
                <button
                  onClick={() => setMobileOpen(true)}
                  className={cn(
                    "lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    isOverVideo
                      ? "border border-white/20 bg-white/[0.1] text-white hover:bg-white/[0.18] backdrop-blur-md"
                      : "border border-white/25 bg-white/15 text-white hover:bg-white/25 backdrop-blur-md"
                  )}
                >
                  <Menu className="size-4" />
                  <span className="text-xs font-medium">Menu</span>
                </button>
              </div>
            </div>
        </div>

        {/* Mega Menu Dropdown Panel — with premium-shimmer & stagger */}
        <AnimatePresence>
          {activeMenuData && (
            <div
              className="absolute top-full left-0 right-0 z-50"
              onMouseEnter={() => handleHover(activeMenuData.id)}
              onMouseLeave={handleLeave}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <MegaMenuPanel menu={activeMenuData} onSubItemClick={handleSubItemClickGlobal} />
              </div>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer — Premium stagger transitions */}
      <MobileDrawer
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        onNavigate={handleNavigate}
        onSubItemClick={handleSubItemClickGlobal}
      />
    </>
  );
}
