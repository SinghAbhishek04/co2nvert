// Activities database with CO2 equivalents
// All values in grams of CO2-equivalent per unit

export const ACTIVITIES = {
  // Transportation
  elevator: {
    id: 'elevator',
    name: 'Elevator ride',
    category: 'transportation',
    icon: 'ArrowUpDown',
    co2_per_unit: 5,
    co2_range_per_unit: [3, 8],
    unit: 'floor',
    unit_plural: 'floors',
    default_quantity: 1,
    min_quantity: 1,
    max_quantity: 50,
    step: 1,
    source: {
      title: 'Energy use estimation',
      year: 2023,
      note: 'Based on avg elevator 0.005 kWh per floor'
    }
  },

  car_drive: {
    id: 'car_drive',
    name: 'Driving',
    category: 'transportation',
    icon: 'Car',
    co2_per_unit: 120,
    co2_range_per_unit: [80, 200],
    unit: 'km',
    unit_plural: 'km',
    default_quantity: 10,
    min_quantity: 1,
    max_quantity: 500,
    step: 1,
    source: {
      title: 'EPA Average Vehicle Emissions',
      year: 2023,
      note: 'Average passenger vehicle'
    }
  },

  metro: {
    id: 'metro',
    name: 'Metro/Subway',
    category: 'transportation',
    icon: 'Train',
    co2_per_unit: 14,
    co2_range_per_unit: [10, 20],
    unit: 'km',
    unit_plural: 'km',
    default_quantity: 5,
    min_quantity: 1,
    max_quantity: 100,
    step: 1,
    source: {
      title: 'UK DEFRA Conversion Factors',
      year: 2023,
      note: 'Underground rail, average occupancy'
    }
  },

  // Food & Drink
  coffee_black: {
    id: 'coffee_black',
    name: 'Black coffee',
    category: 'food',
    icon: 'Coffee',
    co2_per_unit: 21,
    co2_range_per_unit: [15, 40],
    unit: 'cup',
    unit_plural: 'cups',
    default_quantity: 1,
    min_quantity: 1,
    max_quantity: 10,
    step: 1,
    source: {
      title: 'Hassard et al.',
      year: 2014,
      note: 'Int J Life Cycle Assess'
    }
  },

  coffee_latte: {
    id: 'coffee_latte',
    name: 'Latte (dairy)',
    category: 'food',
    icon: 'Coffee',
    co2_per_unit: 340,
    co2_range_per_unit: [250, 500],
    unit: 'cup',
    unit_plural: 'cups',
    default_quantity: 1,
    min_quantity: 1,
    max_quantity: 10,
    step: 1,
    source: {
      title: 'Carbon Trust',
      year: 2022,
      note: 'Milk contributes 80-90% of footprint'
    }
  },

  beef_burger: {
    id: 'beef_burger',
    name: 'Beef burger',
    category: 'food',
    icon: 'Beef',
    co2_per_unit: 3500,
    co2_range_per_unit: [2500, 5000],
    unit: 'burger',
    unit_plural: 'burgers',
    default_quantity: 1,
    min_quantity: 1,
    max_quantity: 5,
    step: 1,
    source: {
      title: 'Poore & Nemecek',
      year: 2018,
      note: 'Science journal, includes full supply chain'
    }
  },

  vegetarian_meal: {
    id: 'vegetarian_meal',
    name: 'Vegetarian meal',
    category: 'food',
    icon: 'Salad',
    co2_per_unit: 450,
    co2_range_per_unit: [300, 700],
    unit: 'meal',
    unit_plural: 'meals',
    default_quantity: 1,
    min_quantity: 1,
    max_quantity: 5,
    step: 1,
    source: {
      title: 'Our World in Data',
      year: 2022,
      note: 'Average plant-based meal'
    }
  },

  // Home Energy
  boil_water_kettle: {
    id: 'boil_water_kettle',
    name: 'Boiling water',
    category: 'home',
    icon: 'Flame',
    co2_per_unit: 35,
    co2_range_per_unit: [25, 50],
    unit: 'liter',
    unit_plural: 'liters',
    default_quantity: 1,
    min_quantity: 0.5,
    max_quantity: 5,
    step: 0.5,
    source: {
      title: 'Energy calculations',
      year: 2023,
      note: 'Electric kettle, avg grid'
    }
  },

  dishwasher_cycle: {
    id: 'dishwasher_cycle',
    name: 'Dishwasher',
    category: 'home',
    icon: 'Droplets',
    co2_per_unit: 770,
    co2_range_per_unit: [500, 1200],
    unit: 'cycle',
    unit_plural: 'cycles',
    default_quantity: 1,
    min_quantity: 1,
    max_quantity: 10,
    step: 1,
    source: {
      title: 'Energy Star',
      year: 2023,
      note: 'Standard cycle, includes heating'
    }
  },

  // Digital
  streaming: {
    id: 'streaming',
    name: 'Video streaming',
    category: 'digital',
    icon: 'Play',
    co2_per_unit: 55,
    co2_range_per_unit: [36, 100],
    unit: 'hour',
    unit_plural: 'hours',
    default_quantity: 1,
    min_quantity: 0.5,
    max_quantity: 12,
    step: 0.5,
    source: {
      title: 'IEA / Carbon Trust',
      year: 2022,
      note: 'HD streaming, includes data centers'
    }
  }
};

// Categories for organization
export const CATEGORIES = {
  transportation: {
    id: 'transportation',
    name: 'Transportation',
    icon: 'Car',
    color: 'blue'
  },
  food: {
    id: 'food',
    name: 'Food & Drink',
    icon: 'UtensilsCrossed',
    color: 'green'
  },
  home: {
    id: 'home',
    name: 'Home Energy',
    icon: 'Home',
    color: 'amber'
  },
  digital: {
    id: 'digital',
    name: 'Digital',
    icon: 'Wifi',
    color: 'purple'
  }
};

// Calculate CO2 for an activity with quantity
export const calculateCO2 = (activityId, quantity) => {
  const activity = ACTIVITIES[activityId];
  if (!activity) return 0;
  return activity.co2_per_unit * quantity;
};

// Get CO2 range for an activity with quantity
export const calculateCO2Range = (activityId, quantity) => {
  const activity = ACTIVITIES[activityId];
  if (!activity) return [0, 0];
  return [
    activity.co2_range_per_unit[0] * quantity,
    activity.co2_range_per_unit[1] * quantity
  ];
};

// Helper to get activities by category
export const getActivitiesByCategory = () => {
  const grouped = {};
  Object.values(ACTIVITIES).forEach(activity => {
    if (!grouped[activity.category]) {
      grouped[activity.category] = [];
    }
    grouped[activity.category].push(activity);
  });
  return grouped;
};

// Get all activities as array
export const getActivitiesArray = () => Object.values(ACTIVITIES);
