# CO₂nvert

**Convert actions to impact.** A modern, professional CO₂ equivalence calculator that makes climate impact tangible through everyday comparisons.

## Overview

CO₂nvert transforms abstract carbon footprint numbers into relatable, everyday equivalencies. Instead of just showing "340g CO₂", it tells you "That's like driving 2.8 km" or "28 phone charges".

## Features

### Core Calculator
- **10 everyday activities** across 4 categories (Transportation, Food, Home, Digital)
- **Adjustable quantities** via slider or number input
- **Real-time calculations** with smooth animations
- **Multiple equivalencies** for each result

### Comparison Mode
- Side-by-side activity comparison
- Visual bar charts showing relative impact
- Percentage difference and multiplier insights
- Quick preset comparisons (Coffee showdown, Commute choice, etc.)

### Context & Education
- **Impact indicator** showing Low/Moderate/Significant/High vs daily average
- **Time multiplier** projecting daily/weekly/monthly habits to yearly totals
- **Progress bar** comparing to global average (6.6 tonnes/year)
- **Source citations** for all data

### Sharing
- Copy results to clipboard
- Share to Twitter/X
- Share to LinkedIn

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Quick Start

```bash
# Navigate to project
cd /Users/abhisheksingh/ClaudeRepo/Projects/co2-calculator

# Load Node.js via nvm
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
co2-calculator/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with logo
│   │   ├── Hero.jsx            # Landing section with tagline
│   │   ├── Calculator.jsx      # Activity selector + quantity
│   │   ├── ActivityDropdown.jsx # Searchable dropdown
│   │   ├── QuantityInput.jsx   # Slider + number controls
│   │   ├── ResultsPanel.jsx    # Main results display
│   │   ├── EquivalencyCard.jsx # Individual equivalency
│   │   ├── ImpactContext.jsx   # Low/High impact indicator
│   │   ├── TimeMultiplier.jsx  # Daily/Weekly/Yearly projections
│   │   ├── ShareButton.jsx     # Share menu
│   │   ├── ComparePanel.jsx    # Side-by-side comparison
│   │   ├── QuickCompare.jsx    # Preset comparison cards
│   │   └── Footer.jsx          # Data sources & info
│   ├── data/
│   │   ├── activities.js       # Activity database
│   │   └── equivalencies.js    # Equivalency calculations
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + custom styles
├── docs/
│   ├── ARCHITECTURE.md         # Technical architecture
│   ├── DATA_SOURCES.md         # CO₂ data references
│   └── ROADMAP.md              # Future improvements
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Available Activities

| Category | Activity | CO₂ per unit | Unit |
|----------|----------|--------------|------|
| Transportation | Elevator ride | 5g | floor |
| Transportation | Driving | 120g | km |
| Transportation | Metro/Subway | 14g | km |
| Food | Black coffee | 21g | cup |
| Food | Latte (dairy) | 340g | cup |
| Food | Beef burger | 3,500g | burger |
| Food | Vegetarian meal | 450g | meal |
| Home | Boiling water | 35g | liter |
| Home | Dishwasher | 770g | cycle |
| Digital | Video streaming | 55g | hour |

## Scripts

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari, Chrome Android

## License

MIT

## Acknowledgments

- Data sources: IPCC AR6, EPA, UK DEFRA, Carbon Trust, Energy Star
- Design inspiration: Linear.app, Stripe.com, Notion.so
- Built with Claude Code
