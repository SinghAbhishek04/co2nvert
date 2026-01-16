# Changelog

All notable changes to CO₂nvert are documented here.

## [1.0.1] - 2026-01-16

### Fixed
- **QuickCompare text overlap** - Fixed issue where ratio badges ("16× less", "9× less") were overlapping with preset titles and descriptions on the home page
  - Added `overflow-hidden` and `truncate` to text container
  - Added `shrink-0` to ratio badge to prevent it from being compressed
  - Long descriptions now truncate with ellipsis instead of overlapping

### Changed
- Removed unused `formatCO2` import from QuickCompare component

---

## [1.0.0] - 2026-01-16

### Added
- **Core Calculator**
  - 10 activities across 4 categories (Transportation, Food, Home, Digital)
  - Adjustable quantities via slider + number input
  - Real-time CO₂ calculations

- **Equivalency Engine**
  - 8 comparison types (driving, phone charges, tree hours, streaming, etc.)
  - Smart scaling to avoid awkward numbers
  - Threshold-based selection for relevance

- **Comparison Mode**
  - Side-by-side activity comparison
  - Visual progress bars
  - Percentage and multiplier insights
  - "Lower impact" badge for winner

- **Quick Compare Presets**
  - Coffee showdown (Black vs Latte)
  - Commute choice (Car vs Metro)
  - Lunch decision (Burger vs Veggie)
  - Evening activity (Streaming vs Elevator)

- **Impact Context**
  - Low/Moderate/Significant/High impact indicator
  - Comparison to daily average (18kg CO₂)
  - Color-coded badges

- **Time Multiplier**
  - Once/Daily/Weekly/Monthly projection toggle
  - Yearly total calculation
  - Progress bar vs global average (6.6t/year)
  - Contextual insight text

- **Share Functionality**
  - Copy to clipboard
  - Share to Twitter/X
  - Share to LinkedIn
  - Preview of share text

- **Educational Elements**
  - Range tooltip explaining data variability
  - Source citations for all activities
  - "Why carbon equivalencies matter" section

- **Design System**
  - Slate neutral palette + green accent
  - Inter font family
  - Framer Motion animations
  - Mobile-responsive layout

### Technical
- React 18 + Vite build system
- Tailwind CSS v4 with @theme configuration
- Lucide React icons
- No external state management needed

---

## [0.1.0] - 2026-01-16 (Initial)

### Added
- Project scaffolding with Vite
- Basic activity selection
- Simple CO₂ display
- 10 hardcoded activities

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- MAJOR: Breaking changes to data format or API
- MINOR: New features (activities, comparison modes)
- PATCH: Bug fixes, data updates, styling tweaks
