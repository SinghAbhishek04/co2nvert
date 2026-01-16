import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Data Sources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Data Sources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm text-slate-600">IPCC AR6 Report</span>
              </li>
              <li>
                <span className="text-sm text-slate-600">EPA GHG Equivalencies</span>
              </li>
              <li>
                <span className="text-sm text-slate-600">UK DEFRA Conversion Factors</span>
              </li>
              <li>
                <span className="text-sm text-slate-600">Carbon Trust Reports</span>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              About
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              This calculator uses CO₂-equivalent values to compare the climate impact
              of everyday activities. All values are estimates based on published research
              and may vary based on location and specific circumstances.
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Methodology
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              CO₂-equivalent (CO₂-eq) accounts for all greenhouse gases, weighted by their
              global warming potential over 100 years (GWP₁₀₀). This allows comparison
              across different types of emissions.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for the planet
          </p>
        </div>
      </div>
    </footer>
  );
}
