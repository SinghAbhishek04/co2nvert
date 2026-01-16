# CO₂nvert Data Sources

## Activity Emissions Data

### Transportation

| Activity | CO₂/unit | Range | Source |
|----------|----------|-------|--------|
| Elevator (per floor) | 5g | 3-8g | Energy calculation: 0.005 kWh × 500g CO₂/kWh |
| Driving (per km) | 120g | 80-200g | EPA Average Vehicle Emissions (2023) |
| Metro/Subway (per km) | 14g | 10-20g | UK DEFRA Conversion Factors (2023) |

### Food & Drink

| Activity | CO₂/unit | Range | Source |
|----------|----------|-------|--------|
| Black coffee | 21g | 15-40g | Hassard et al. (2014), Int J Life Cycle Assess |
| Latte (dairy) | 340g | 250-500g | Carbon Trust (2022) |
| Beef burger | 3,500g | 2,500-5,000g | Poore & Nemecek (2018), Science |
| Vegetarian meal | 450g | 300-700g | Our World in Data (2022) |

### Home Energy

| Activity | CO₂/unit | Range | Source |
|----------|----------|-------|--------|
| Boiling water (per L) | 35g | 25-50g | Energy calculation: ~0.1 kWh × grid average |
| Dishwasher cycle | 770g | 500-1,200g | Energy Star (2023) |

### Digital

| Activity | CO₂/unit | Range | Source |
|----------|----------|-------|--------|
| Video streaming (per hr) | 55g | 36-100g | IEA / Carbon Trust (2022) |

## Equivalency Data

| Equivalency | CO₂ per unit | Source |
|-------------|--------------|--------|
| Driving | 120g/km | EPA |
| Phone charging | 8.5g/charge | ~10Wh battery × grid average |
| Tree absorption | 0.5g/hour | ~22kg CO₂/year per tree ÷ 8760 hours |
| Video streaming | 55g/hour | IEA |
| LED bulb | 5g/hour | 10W × 500g/kWh |
| Google search | 0.2g/search | Google sustainability reports |
| Flying (economy) | 255g/km | DEFRA aviation factors |
| CO₂ balloon | 10g/balloon | Volume calculation |

## Reference Values

### Global Average Emissions
- **Per person per year**: 6.6 tonnes (6,600,000g)
- **Per person per day**: ~18kg (18,000g)
- Source: Global Carbon Project, Our World in Data

### GWP Values (IPCC AR6, 2021)
| Gas | GWP₂₀ | GWP₁₀₀ | GWP₅₀₀ |
|-----|-------|--------|--------|
| CO₂ | 1 | 1 | 1 |
| CH₄ | 81.2 | 27.9 | 7.95 |
| N₂O | 273 | 273 | 130 |

## Key Sources

1. **IPCC AR6 (2021)** - Global Warming Potential values
2. **EPA** - US vehicle emissions data
3. **UK DEFRA** - Greenhouse gas conversion factors
4. **Carbon Trust** - Product carbon footprinting
5. **Energy Star** - Appliance energy use
6. **IEA** - Digital energy consumption
7. **Poore & Nemecek (2018)** - Food emissions (Science journal)
8. **Our World in Data** - Global emissions statistics

## Data Limitations

1. **Geographic variation**: Values based primarily on UK/US/EU averages
2. **Grid carbon intensity**: Varies by country (100-900g CO₂/kWh)
3. **Supply chain complexity**: Food values include production but may miss distribution
4. **Technology changes**: Digital emissions dropping with efficiency gains
5. **Measurement uncertainty**: Ranges provided to show variability

## Update Schedule

Data should be reviewed annually against:
- DEFRA conversion factors (updated yearly)
- IEA energy reports
- IPCC assessment reports (every ~7 years)
