# Design System: YUMI DXB FASHION

## 1. Visual Theme & Atmosphere
A highly restrained, gallery-airy interface with confident asymmetric layouts and generous negative space. The atmosphere is luxurious, minimalist, and editorial, resembling a premium fashion boutique or high-end magazine.

## 2. Color Palette & Roles
- **Canvas White** (#FFFFFF) — Primary background surface.
- **Pure Surface** (#FFFFFF) — Card and container fill.
- **Off-Black Ink** (#121212) — Primary typography, borders, and main elements.
- **Soft Cream** (#F5F2EA) — Secondary background layer for hero overlay and testimonials.
- **Muted Gray** (#737373) — Secondary text, labels, and description metadata.
- **Accent Black** (#000000) — Stark black for primary CTA buttons and footer background.

## 3. Typography Rules
- **Display/Headlines**: *Bodoni Moda* — Track-tight, controlled scale, elegant serif font, weight-driven hierarchy. Used for hero headlines, section headers, and product card titles.
- **Body & Labels**: *Manrope* — Clean, highly readable sans-serif. Body text should have relaxed leading and a maximum of 65 characters per line. Labels use uppercase letters with increased tracking (`tracking-[0.1em]`).
- **Banned Typography**: `Inter` and generic serif fonts (e.g. `Times New Roman`, `Georgia`) are BANNED. Only distinctive modern serifs like *Bodoni Moda* and clean sans-serif like *Manrope* are permitted.

## 4. Component Stylings
- **Buttons**: Flat rectangular boxes with sharp corners (`rounded-none`). No shadows, elevations, or neon glows. Primary buttons are solid `#000000` with white text. Secondary/Ghost buttons use a thin 1px `#121212` border. Tactile `-1px` translation on active states.
- **Cards**: Product cards use white backgrounds, flat design (no shadow or elevation), and clean spacing. The image (3:4 aspect ratio) is the absolute focus.
- **Inputs**: Bottom-border only or thin outlines with labels positioned above in uppercase tracking. No floating labels.
- **Shapes**: Sharp (`0px` corner radius) for all buttons, containers, cards, and image blocks. No rounded corners.

## 5. Layout Principles
- No overlapping text or absolute-positioned stacking of layout modules.
- Split screen or left-aligned asymmetric spacing.
- CSS Grid/Flex layout with explicit max-width container containment (`max-w-7xl` or `1440px`).
- Section separation using clean padding and whitespace (`py-24` to `py-32`).
- Mobile-First Collapse: All multi-column layouts collapse to single column below `768px`.

## 6. Motion & Interaction
- Restrained spring physics for framer-motion transitions (e.g. `stiffness: 100, damping: 20`).
- Interactive hovers use clean opacity shifts, subtle underlines, or minimal transitions (e.g., scale `1.02` zoom on card images).
- Performance optimized transitions using `transform` and `opacity` only.

## 7. Anti-Patterns (Banned)
- No emojis anywhere.
- No rounded corners on buttons or cards (`rounded-none` always).
- No neon shadows or blue/purple glows.
- No overlapping text.
- No AI copy-writing clichés ("Elevate", "Seamless", "Unleash").
- No fake numbers, stats, or metrics.
