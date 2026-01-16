import { Minus, Plus } from 'lucide-react';

export default function QuantityInput({ activity, quantity, onChange }) {
  const handleSliderChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      onChange(Math.min(Math.max(value, activity.min_quantity), activity.max_quantity));
    }
  };

  const increment = () => {
    const newValue = Math.min(quantity + activity.step, activity.max_quantity);
    onChange(newValue);
  };

  const decrement = () => {
    const newValue = Math.max(quantity - activity.step, activity.min_quantity);
    onChange(newValue);
  };

  const unitLabel = quantity === 1 ? activity.unit : activity.unit_plural;

  return (
    <div className="mt-6 p-4 bg-slate-50 rounded-xl">
      <label className="block text-sm font-medium text-slate-700 mb-3">
        How many {activity.unit_plural}?
      </label>

      {/* Number input with +/- buttons */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={decrement}
          disabled={quantity <= activity.min_quantity}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="flex-1 flex items-center gap-2">
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min={activity.min_quantity}
            max={activity.max_quantity}
            step={activity.step}
            className="w-20 px-3 py-2 text-center text-lg font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
          />
          <span className="text-slate-600 font-medium">{unitLabel}</span>
        </div>

        <button
          onClick={increment}
          disabled={quantity >= activity.max_quantity}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          value={quantity}
          onChange={handleSliderChange}
          min={activity.min_quantity}
          max={activity.max_quantity}
          step={activity.step}
          className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-5
                     [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-slate-900
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:shadow-md
                     [&::-webkit-slider-thumb]:transition-transform
                     [&::-webkit-slider-thumb]:hover:scale-110
                     [&::-moz-range-thumb]:w-5
                     [&::-moz-range-thumb]:h-5
                     [&::-moz-range-thumb]:rounded-full
                     [&::-moz-range-thumb]:bg-slate-900
                     [&::-moz-range-thumb]:border-0
                     [&::-moz-range-thumb]:cursor-pointer"
        />
        <div className="flex justify-between mt-1 text-xs text-slate-400">
          <span>{activity.min_quantity}</span>
          <span>{activity.max_quantity}</span>
        </div>
      </div>
    </div>
  );
}
