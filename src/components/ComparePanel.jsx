import { motion } from 'framer-motion';
import { X, ArrowRight, RotateCcw } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { ACTIVITIES, CATEGORIES, calculateCO2 } from '../data/activities';
import { formatCO2 } from '../data/equivalencies';
import ActivityDropdown from './ActivityDropdown';
import QuantityInput from './QuantityInput';

export default function ComparePanel({
  activity1,
  quantity1,
  activity2,
  quantity2,
  onActivity1Select,
  onQuantity1Change,
  onActivity2Select,
  onQuantity2Change,
  onExitCompare,
  onReset
}) {
  const act1 = activity1 ? ACTIVITIES[activity1] : null;
  const act2 = activity2 ? ACTIVITIES[activity2] : null;

  const co2_1 = activity1 ? calculateCO2(activity1, quantity1) : 0;
  const co2_2 = activity2 ? calculateCO2(activity2, quantity2) : 0;

  const formatted1 = formatCO2(co2_1);
  const formatted2 = formatCO2(co2_2);

  // Calculate comparison
  const difference = Math.abs(co2_1 - co2_2);
  const formattedDiff = formatCO2(difference);
  const percentDiff = co2_1 > 0 && co2_2 > 0
    ? Math.round(Math.abs((co2_1 - co2_2) / Math.max(co2_1, co2_2) * 100))
    : 0;

  const getIcon = (iconName, className = "w-5 h-5") => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  const CompareCard = ({ activity, activityData, quantity, co2, formatted, onSelect, onQuantityChange, label, isWinner }) => (
    <div className={`bg-white rounded-2xl border-2 p-6 shadow-sm transition-all ${
      isWinner ? 'border-green-300 bg-green-50/30' : 'border-slate-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
        {isWinner && activity && (
          <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
            Lower impact
          </span>
        )}
      </div>

      <ActivityDropdown
        selectedActivity={activity}
        onSelect={(act) => onSelect(act.id)}
      />

      {activityData && (
        <>
          <QuantityInput
            activity={activityData}
            quantity={quantity}
            onChange={onQuantityChange}
          />

          <motion.div
            key={`${activity}-${quantity}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl text-center"
          >
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold text-slate-900">{formatted.value}</span>
              <span className="text-xl font-medium text-slate-500">{formatted.unit}</span>
            </div>
            <div className="mt-1 text-sm text-slate-500">{formatted.fullUnit}</div>
          </motion.div>
        </>
      )}
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Compare Activities</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={onExitCompare}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
            Exit compare
          </button>
        </div>
      </div>

      {/* Compare Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <CompareCard
          activity={activity1}
          activityData={act1}
          quantity={quantity1}
          co2={co2_1}
          formatted={formatted1}
          onSelect={onActivity1Select}
          onQuantityChange={onQuantity1Change}
          label="Activity 1"
          isWinner={activity1 && activity2 && co2_1 < co2_2}
        />

        <CompareCard
          activity={activity2}
          activityData={act2}
          quantity={quantity2}
          co2={co2_2}
          formatted={formatted2}
          onSelect={onActivity2Select}
          onQuantityChange={onQuantity2Change}
          label="Activity 2"
          isWinner={activity1 && activity2 && co2_2 < co2_1}
        />
      </div>

      {/* Comparison Summary */}
      {activity1 && activity2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Comparison Summary</h3>

          {/* Visual Bar Comparison */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">{act1.name}</span>
                <span className="text-sm text-slate-500">{formatted1.value} {formatted1.unit}</span>
              </div>
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((co2_1 / Math.max(co2_1, co2_2)) * 100, 100)}%` }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`h-full rounded-full ${co2_1 <= co2_2 ? 'bg-green-500' : 'bg-slate-400'}`}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">{act2.name}</span>
                <span className="text-sm text-slate-500">{formatted2.value} {formatted2.unit}</span>
              </div>
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((co2_2 / Math.max(co2_1, co2_2)) * 100, 100)}%` }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={`h-full rounded-full ${co2_2 <= co2_1 ? 'bg-green-500' : 'bg-slate-400'}`}
                />
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>
              <div>
                {co2_1 === co2_2 ? (
                  <p className="text-slate-700">
                    <span className="font-semibold">These activities have equal impact</span>
                    {' '}— both emit {formatted1.value} {formatted1.unit} of CO₂-eq.
                  </p>
                ) : (
                  <p className="text-slate-700">
                    <span className="font-semibold text-green-700">
                      {co2_1 < co2_2 ? act1.name : act2.name}
                    </span>
                    {' '}emits{' '}
                    <span className="font-semibold">{percentDiff}% less</span>
                    {' '}carbon ({formattedDiff.value} {formattedDiff.unit} difference).
                    {co2_1 < co2_2 ? (
                      <span className="block mt-1 text-sm text-slate-500">
                        You'd need {(co2_2 / co2_1).toFixed(1)}× more {act1.name.toLowerCase()} to match the impact.
                      </span>
                    ) : (
                      <span className="block mt-1 text-sm text-slate-500">
                        You'd need {(co2_1 / co2_2).toFixed(1)}× more {act2.name.toLowerCase()} to match the impact.
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
