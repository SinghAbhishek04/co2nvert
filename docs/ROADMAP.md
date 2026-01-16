# CO₂nvert Roadmap

## Current Version: 1.0.1

### Completed Features
- [x] 10 activities with adjustable quantities
- [x] Searchable activity dropdown with categories
- [x] Equivalency comparisons (driving, phone charges, etc.)
- [x] Side-by-side comparison mode
- [x] Quick preset comparisons
- [x] Impact context (Low/Moderate/High)
- [x] Time multiplier (Daily/Weekly/Monthly projections)
- [x] Share functionality (Copy, Twitter, LinkedIn)
- [x] Range tooltips
- [x] Responsive design
- [x] Smooth animations

---

## Phase 2: Enhanced Interactions

### Activity Customization
- [ ] **Driving fuel types** - Refine generic driving with specific car types:
  - Gasoline (petrol) vehicles
  - Diesel vehicles
  - Electric vehicles (with grid intensity consideration)
  - Hybrid vehicles
- [ ] Vehicle size selector (small/medium/SUV)
- [ ] Milk type for coffee (dairy/oat/soy/almond)
- [ ] Streaming quality (SD/HD/4K)
- [ ] Grid carbon intensity by country

### GWP Time Horizon
- [ ] Toggle between GWP₂₀ and GWP₁₀₀
- [ ] Show how methane-heavy activities change
- [ ] Educational explainer modal

### Improved UX
- [ ] Keyboard navigation for dropdown
- [ ] Touch-optimized slider for mobile
- [ ] Loading skeleton states
- [ ] Haptic feedback on mobile

---

## Phase 3: Advanced Features

### Daily Tracker
- [ ] Log activities throughout the day
- [ ] Persistent storage (localStorage)
- [ ] Running total with progress bar
- [ ] Daily/weekly/monthly history view
- [ ] Compare to global average goal

### Scenario Builder
- [ ] "A week of..." templates
- [ ] Compare lifestyles (vegan vs omnivore)
- [ ] Commute comparisons (car vs bike vs transit)
- [ ] Vacation carbon footprint calculator

### Export & Share
- [ ] Generate shareable URL with calculation
- [ ] Export as image card for social media
- [ ] Download personal data as JSON/CSV
- [ ] Embed widget for blogs/Substack

---

## Phase 4: Platform Growth

### More Activities (30+)
- Flights (short/medium/long haul)
- Clothing purchases
- Package deliveries
- Heating/cooling home
- Electric vs gas cooking
- Showering (water heating)
- Laundry cycles
- Smartphone/laptop production

### Internationalization
- [ ] Country-specific grid carbon factors
- [ ] Localized units (miles vs km)
- [ ] Multi-language support
- [ ] Currency for offset cost estimates

### API & Integrations
- [ ] Public API for calculations
- [ ] Browser extension
- [ ] iOS/Android app wrapper
- [ ] Notion/Obsidian widget

---

## Technical Debt

### Performance
- [ ] Tree-shake Lucide icons (named imports)
- [ ] Code-split comparison mode
- [ ] Add service worker for offline
- [ ] Optimize bundle size (<200KB)

### Code Quality
- [ ] Add TypeScript
- [ ] Unit tests for calculations
- [ ] E2E tests with Playwright
- [ ] Storybook for components

### Infrastructure
- [ ] GitHub Actions CI/CD
- [ ] Deploy to Vercel/Netlify
- [ ] Custom domain setup
- [ ] Analytics integration

---

## Contribution Ideas

### Easy (Good First Issues)
- Add new activity with sourced data
- Improve accessibility (ARIA labels)
- Add more equivalency types
- Fix mobile styling issues

### Medium
- Implement activity customization
- Add URL state for sharing
- Build daily tracker with localStorage
- Create export-to-image feature

### Advanced
- Build public API
- Add multi-language support
- Create browser extension
- Implement offline mode

---

## Success Metrics

### Usage
- [ ] 1,000 calculations/month
- [ ] 100 shares/month
- [ ] <3s time to first calculation

### Quality
- [ ] Lighthouse score >90
- [ ] Zero console errors
- [ ] <500KB bundle size

### Engagement
- [ ] Substack embed adoption
- [ ] GitHub stars
- [ ] User feedback/feature requests
