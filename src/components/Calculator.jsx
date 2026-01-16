import { RotateCcw } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';
import ActivityDropdown from './ActivityDropdown';
import QuantityInput from './QuantityInput';

export default function Calculator({
  selectedActivity,
  quantity,
  onActivitySelect,
  onQuantityChange,
  onReset
}) {
  const activity = selectedActivity ? ACTIVITIES[selectedActivity] : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Select an activity
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Choose from everyday activities to see their carbon footprint
        </p>
      </div>

      <ActivityDropdown
        selectedActivity={selectedActivity}
        onSelect={(activity) => onActivitySelect(activity.id)}
      />

      {activity && (
        <QuantityInput
          activity={activity}
          quantity={quantity}
          onChange={onQuantityChange}
        />
      )}

      {selectedActivity && (
        <button
          onClick={onReset}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      )}
    </div>
  );
}
