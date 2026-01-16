import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function EquivalencyCard({ equivalency, index }) {
  // Get icon component dynamically
  const Icon = LucideIcons[equivalency.icon] || LucideIcons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200">
        <Icon className="w-6 h-6 text-slate-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-lg font-semibold text-slate-900">
          {equivalency.displayValue} {equivalency.displayUnit}
        </div>
        <div className="text-sm text-slate-500">
          {equivalency.name}
        </div>
      </div>
    </motion.div>
  );
}
