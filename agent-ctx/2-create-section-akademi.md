---
Task ID: 2
Agent: create-section-akademi
Task: Create SectionAkademi with world-class training/certification programs

Work Log:
- Created SectionAkademi.tsx with 4 interactive pillars (Sertifikasi Global, Pelatihan Scale-Up, Upgrade Skill Karyawan, Upgrade Perusahaan Internasional)
- Added interactive sidebar + detail panel layout (same pattern as SectionKenapaMESITA)
- Added 4 association upgrade cards (Federasi Digital, Global Association Network, Women in Tourism Leadership, Youth Tourism Ambassador)
- Added innovative global programs section with dark gradient background and 6 world-first concepts (Germany, Singapore, Japan, Switzerland, Denmark, Finland)
- Imported 25+ icons from lucide-react (GraduationCap, Award, Rocket, BrainCircuit, Globe, Globe2, Shield, Leaf, Star, FileCheck, Store, TrendingUp, Crown, Users, Wallet, BookOpen, Target, RefreshCw, Hotel, Heart, Gem, ShieldCheck, Network, Sparkles, ChevronRight, CheckCircle2, Zap, ArrowRight)
- Used motion animations (whileInView, AnimatePresence) throughout
- Color-coded cards matching each pillar (blue, emerald, violet, amber)
- Dark gradient section with decorative circles, shimmer effects, and hover animations
- Added ambient blur backgrounds matching existing sections
- Updated page.tsx to include SectionAkademi after SectionKenapaMESITA
- Added menu item #8 (Akademi Peradaban) to menu.ts with 4 sub-items
- Added 4 new modal IDs to navigation.ts store (akademi-sertifikasi, akademi-scaleup, akademi-skill, akademi-perusahaan)
- Added modal title mappings and content routing to MasterModal.tsx
- Updated footer navigation to include Akademi Peradaban link
- All lint checks passed, dev server returning 200 OK

Stage Summary:
- New section file created at /home/z/my-project/src/components/nusaparadise/sections/SectionAkademi.tsx
- Section ID: akademi-peradaban
- 4 pillars with interactive sidebar + detail panel
- 4 association upgrade cards
- 6 innovative global programs with dark gradient background
- Menu now has 10 items (was 9)
- Navigation store has 4 new modal IDs
