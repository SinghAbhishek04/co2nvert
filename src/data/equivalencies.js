// Equivalencies database for relatable comparisons
// All CO2 values in grams

export const EQUIVALENCIES = {
  driving: {
    id: 'driving',
    name: 'Driving',
    co2_per_unit: 120, // g CO2 per km
    unit: 'km',
    unit_plural: 'km',
    icon: 'Car',
    template: 'Driving {value} {unit}',
    min_threshold: 50,
    max_threshold: 50000,
    priority: 1
  },

  phone_charges: {
    id: 'phone_charges',
    name: 'Phone charging',
    co2_per_unit: 8.5, // g CO2 per full charge
    unit: 'charge',
    unit_plural: 'charges',
    icon: 'Smartphone',
    template: '{value} phone {unit}',
    min_threshold: 5,
    max_threshold: 5000,
    priority: 2
  },

  tree_hours: {
    id: 'tree_hours',
    name: 'Tree absorption',
    co2_per_unit: 0.5, // g CO2 absorbed per hour by one tree
    unit: 'tree-hour',
    unit_plural: 'tree-hours',
    icon: 'TreeDeciduous',
    template: '{value} {unit} to offset',
    min_threshold: 1,
    max_threshold: 200000,
    priority: 3
  },

  streaming_hours: {
    id: 'streaming_hours',
    name: 'Streaming video',
    co2_per_unit: 55, // g CO2 per hour
    unit: 'hour',
    unit_plural: 'hours',
    icon: 'Play',
    template: '{value} {unit} of streaming',
    min_threshold: 20,
    max_threshold: 10000,
    priority: 4
  },

  led_bulb_hours: {
    id: 'led_bulb_hours',
    name: 'LED bulb',
    co2_per_unit: 5, // g CO2 per hour (10W bulb, 500g/kWh grid)
    unit: 'hour',
    unit_plural: 'hours',
    icon: 'Lightbulb',
    template: '{value} {unit} of LED lighting',
    min_threshold: 10,
    max_threshold: 10000,
    priority: 5
  },

  google_searches: {
    id: 'google_searches',
    name: 'Google searches',
    co2_per_unit: 0.2, // g CO2 per search
    unit: 'search',
    unit_plural: 'searches',
    icon: 'Search',
    template: '{value} Google {unit}',
    min_threshold: 1,
    max_threshold: 500,
    priority: 6
  },

  flights_km: {
    id: 'flights_km',
    name: 'Flying',
    co2_per_unit: 255, // g CO2 per km (economy class)
    unit: 'km',
    unit_plural: 'km',
    icon: 'Plane',
    template: 'Flying {value} {unit}',
    min_threshold: 500,
    max_threshold: 500000,
    priority: 7
  },

  balloons: {
    id: 'balloons',
    name: 'Balloons of CO₂',
    co2_per_unit: 10, // 10g fills a standard balloon
    unit: 'balloon',
    unit_plural: 'balloons',
    icon: 'Circle',
    template: '{value} {unit} of CO₂',
    min_threshold: 1,
    max_threshold: 10000,
    priority: 8
  }
};

/**
 * Generate appropriate equivalencies for a given CO2 amount
 * @param {number} co2_grams - Amount of CO2 in grams
 * @param {number} count - Number of equivalencies to return (default 4)
 * @returns {Array} Array of equivalency objects with calculated values
 */
export const generateEquivalents = (co2_grams, count = 4) => {
  const results = [];

  Object.values(EQUIVALENCIES).forEach(equiv => {
    // Check if this equivalency is appropriate for the scale
    if (co2_grams < equiv.min_threshold || co2_grams > equiv.max_threshold) {
      return;
    }

    const rawValue = co2_grams / equiv.co2_per_unit;

    // Format the value nicely
    let displayValue;
    if (rawValue >= 100) {
      displayValue = Math.round(rawValue).toLocaleString();
    } else if (rawValue >= 10) {
      displayValue = Math.round(rawValue).toString();
    } else if (rawValue >= 1) {
      displayValue = rawValue.toFixed(1).replace(/\.0$/, '');
    } else {
      displayValue = rawValue.toFixed(2).replace(/\.?0+$/, '');
    }

    // Determine singular or plural
    const unit = rawValue === 1 ? equiv.unit : equiv.unit_plural;

    results.push({
      ...equiv,
      rawValue,
      displayValue,
      displayUnit: unit,
      text: equiv.template
        .replace('{value}', displayValue)
        .replace('{unit}', unit)
    });
  });

  // Sort by priority and return top N
  return results
    .sort((a, b) => a.priority - b.priority)
    .slice(0, count);
};

/**
 * Format CO2 value for display
 * @param {number} grams - CO2 in grams
 * @returns {object} Formatted value and unit
 */
export const formatCO2 = (grams) => {
  if (grams >= 1000000) {
    return {
      value: (grams / 1000000).toFixed(1).replace(/\.0$/, ''),
      unit: 'tonnes',
      fullUnit: 'CO₂-eq'
    };
  } else if (grams >= 1000) {
    return {
      value: (grams / 1000).toFixed(1).replace(/\.0$/, ''),
      unit: 'kg',
      fullUnit: 'CO₂-eq'
    };
  } else {
    return {
      value: Math.round(grams).toString(),
      unit: 'g',
      fullUnit: 'CO₂-eq'
    };
  }
};
