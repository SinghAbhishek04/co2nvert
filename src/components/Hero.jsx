import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          Convert actions
          <br />
          <span className="text-green-600">to impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          That morning latte = driving 2.8 km. Your commute = 340 phone charges.
          <span className="block mt-2">See the real climate cost of everyday choices.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-medium text-base hover:bg-slate-800 transition-colors duration-200 shadow-lg shadow-slate-900/10"
          >
            Start calculating
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Subtle gradient decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl opacity-60" />
      </div>
    </section>
  );
}
