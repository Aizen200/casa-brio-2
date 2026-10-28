# Casa Brio — Private Luxury Estate Buyout (NOIRÉ 1:1 Architectural Replica)

A pixel-faithful recreation of **Casa Brio** ([casa-brio-rose.vercel.app](https://casa-brio-rose.vercel.app/)) built within the exact visual design system, loading experience, motion choreography, typography, and interaction architecture of **NOIRÉ** ([noirei.framer.website](https://noirei.framer.website/)).

Built with **Next.js**, **Tailwind CSS**, and **CSS / Framer Motion**.

---

## 🏛️ Exact NOIRÉ Design & Motion Systems Replicated

1. **Horizon Hero Section**:
   - **Initial Horizon Lockup Line**: Draws across the screen at 45% screen height with `@keyframes noire-lockup-line`.
   - **Opening Brand Wordmark**: `CASA BRIO` centered at the horizon line with `@keyframes noire-logo-first` (letter-spacing settling from `.42em` to `.14em` with subtle blur fade).
   - **Aperture Camera Shutter Open**: Hero landscape photograph opens vertically from the horizon line with `@keyframes noire-horizon-open` (`clip-path: inset(45% 0 55% 0)` to `inset(0 0 0 0)`).
   - **Subtle Drift**: `@keyframes noire-drift` ambient zoom.
   - **Drawing Eyebrow Rule**: 1px champagne line scales from 0 with `@keyframes noire-rule-in` accompanied by `@keyframes noire-track-in`.
   - **Scroll Cue Dot**: Continuous sliding indicator with `@keyframes noire-cue`.
   - **Display Headline**: Boska editorial serif in fluid `clamp(36px, 5.5vw, 76px)`.

2. **Fixed Header & Auto-Hide Navigation**:
   - Full-width desktop header (not an oversized pill or floating capsule).
   - **Auto-Hide / Reveal on Scroll**: Hides on scroll down and returns smoothly on scroll up via `[data-noire-nav]` and `[data-noire-nav-hidden]`.
   - **Hover Underline Drawing**: Nav links draw a 1px champagne underline from left to right over 0.5s via `.noire-nav-link`.
   - **Rolling Letters on CTAs**: Buttons use Noirei's letter-by-letter roll effect (`data-noire-roll-root` with staggered 28ms character delays and text-shadow sliding up).

3. **Inertia-Guided NOIRÉ Cursor System**:
   - Built directly from NOIRÉ's custom cursor engine:
     - **Rest**: 14px champagne dot (`#b9966a`) with smooth exponential inertia glide (`1 - Math.exp(-dt / tau)`).
     - **Links & Small Controls**: Expands into a 42px champagne ring with faint wash.
     - **Buttons**: Expands into a 56px ring.
     - **Media / Cards / Photographs**: Transforms into a frosted-ink glass pill (`.nc-view` with `clip-path`, backdrop blur, animated rising letter spans, and champagne arrow / plus icon).
     - **Mousedown / Press**: Cursor scales down to 0.82.

4. **Section Transitions & Content Hierarchy**:
   - **The Statement / Philosophy**: Large display typography, editorial body, and 4 numeral-masked metric columns (`01 / PRIVACY`, `02 / SUITES`, `03 / NIGHTLIFE`, `04 / SERVICE`).
   - **Room Cards (Bottom Horizon Text Elevator)**: 6 signature lifestyle zones where title, category, and specifications are masked below the card's bottom edge and smoothly rise up in staggered sequence on hover.
   - **Loggia Full-Bleed Landscape**: Full-width cinematic photo break with quiet Sahyadri mountain statement.
   - **Experiences (Days that run on estate time)**: Interactive 5-step milestone timeline with synchronized crossfading photographic canvas.
   - **Curated Invitations (Offers)**: 3 wide dark cards with fine hairline borders.
   - **Estate Chronicles (Journal)**: 3 editorial cards with photography, category badge, and reading times.
   - **Testimonials Quote Stage**: Exact 19em measure (`max-width: 19em`) setting in three balanced lines with verified 5-star rating.
   - **Arrive Quietly**: Highland coordinates, drive times from Mumbai (~90 mins) and Pune (~60 mins), and Google Maps integration.
   - **Footer**: Full-width Boska watermark `CASA BRIO`, contact lines, and smooth scroll to top.

---

## 📸 Content & Assets Preserved (Casa Brio)

All 26 original high-resolution assets stored locally in `public/images/bungalow/`:
- Drone Facade & Architecture
- Sapphire Pool & Pergola (Day & Night)
- Floodlit Box Cricket Turf (All angles & night floodlit matches)
- Subterranean REVEL Speakeasy & Snooker Lounge
- Mountain Master Suites & Sahyadri Balcony Views
- Grand Double-Height Living & Dining Salon
- Italian Marble Designer Washrooms & Spa
- All 12 Curated Amenities
- Real Verified Guest Chronicles

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the next available port).

### Production Build
```bash
npm run build
npm start
```
