# CO₂nvert Architecture

## Overview

CO₂nvert is a React single-page application built with Vite, using Tailwind CSS for styling and Framer Motion for animations.

## Component Hierarchy

```
App
├── Header                    # Sticky nav, logo, links
├── Hero                      # Landing tagline + CTA
├── Calculator Section
│   ├── Calculator            # Left panel
│   │   ├── ActivityDropdown  # Searchable select
│   │   └── QuantityInput     # Slider + number
│   ├── ResultsPanel          # Right panel (single mode)
│   │   ├── ImpactContext     # Low/High indicator
│   │   ├── EquivalencyCard[] # Comparisons
│   │   ├── TimeMultiplier    # Daily/Yearly projection
│   │   └── ShareButton       # Share menu
│   ├── ComparePanel          # Compare mode layout
│   └── QuickCompare          # Preset comparisons
├── About Section             # Educational content
└── Footer                    # Data sources
```

## State Management

All state lives in `App.jsx` using React `useState`:

```javascript
// Single mode
selectedActivity: string | null  // Activity ID
quantity: number                 // User-selected quantity

// Compare mode
compareMode: boolean
compareActivity: string | null
compareQuantity: number
```

State flows down via props. No external state library needed at this scale.

## Data Flow

```
User selects activity
    ↓
ActivityDropdown calls onSelect(activity)
    ↓
App updates selectedActivity + quantity (default)
    ↓
ResultsPanel receives props
    ↓
calculateCO2(activityId, quantity) runs
    ↓
generateEquivalents(co2Grams) creates comparisons
    ↓
UI renders with animations
```

## Data Layer

### activities.js
- `ACTIVITIES` object: 10 activities with CO₂ data
- `CATEGORIES` object: 4 category definitions
- `calculateCO2(id, qty)`: Returns total grams
- `calculateCO2Range(id, qty)`: Returns [min, max]

### equivalencies.js
- `EQUIVALENCIES` object: 8 comparison types
- `generateEquivalents(grams, count)`: Smart selection
- `formatCO2(grams)`: Returns {value, unit, fullUnit}

## Key Design Decisions

### 1. No TypeScript
Kept simple for rapid development. Types documented in JSDoc comments.

### 2. Tailwind v4
Uses new CSS-first configuration via `@theme` in index.css. No tailwind.config.js needed.

### 3. Dynamic Icons
Uses `* as LucideIcons` import pattern to render icons by string name from data files.

### 4. Framer Motion
- `AnimatePresence` for enter/exit animations
- `motion.div` for smooth reveals
- Key-based re-animation on data changes

### 5. Mobile-First
All layouts start mobile, scale up with `sm:`, `lg:` breakpoints.

## File Responsibilities

| File | Purpose |
|------|---------|
| `App.jsx` | State management, layout routing |
| `Calculator.jsx` | Activity selection wrapper |
| `ActivityDropdown.jsx` | Search, filter, category grouping |
| `QuantityInput.jsx` | Slider, +/- buttons, number input |
| `ResultsPanel.jsx` | Main display, orchestrates sub-components |
| `ComparePanel.jsx` | Side-by-side comparison layout |
| `ImpactContext.jsx` | Low/Moderate/High badge |
| `TimeMultiplier.jsx` | Once/Daily/Weekly/Monthly toggle |
| `ShareButton.jsx` | Copy, Twitter, LinkedIn sharing |
| `QuickCompare.jsx` | Preset comparison cards |

## Performance Considerations

1. **Bundle Size**: ~940KB due to Lucide icons (tree-shaking not fully effective with `* as` import)
2. **Animations**: All use GPU-accelerated transforms
3. **Re-renders**: Keys on motion elements prevent unnecessary animations
4. **No SSR**: Pure client-side rendering via Vite

## Future Architecture Improvements

1. Migrate to named icon imports to reduce bundle
2. Add URL state for shareable calculation links
3. Consider localStorage for saved activities
4. Add service worker for offline support
