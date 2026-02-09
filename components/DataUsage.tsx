
import React from 'react';
import { BarChart3, TrendingUp, AlertCircle, Calendar, ArrowRight } from 'lucide-react';

const DataUsage: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Data Management</h2>
          <p className="text-gray-500 mt-1">Monitor consumption and set limits to avoid overages</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-500 text-sm font-bold">
          <Calendar size={16} />
          Billing Cycle: 12 Days Left
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-cyan-400" />
              Usage by Application
            </h3>
            <div className="space-y-6">
              <UsageBar name="Chrome Browser" bytes="4.2 GB" percent={65} color="bg-cyan-500" />
              <UsageBar name="Discord (Voice/Video)" bytes="1.8 GB" percent={28} color="bg-blue-500" />
              <UsageBar name="System Updates" bytes="450 MB" percent={7} color="bg-indigo-500" />
              <UsageBar name="Spotify" bytes="120 MB" percent={2} color="bg-emerald-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
              <h4 className="font-bold text-sm mb-4">Today's Total</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">1.2</span>
                <span className="text-gray-500 font-bold">GB</span>
              </div>
              <p className="text-xs text-emerald-500 mt-2 font-medium flex items-center gap-1">
                <TrendingUp size={12} /> -12% vs yesterday
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
              <h4 className="font-bold text-sm mb-4">Estimated Monthly</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">24.5</span>
                <span className="text-gray-500 font-bold">GB</span>
              </div>
              <p className="text-xs text-yellow-500 mt-2 font-medium flex items-center gap-1">
                <AlertCircle size={12} /> Trending near limit
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
            <h4 className="font-bold mb-4">Usage Alerts</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-300">Hard Cap</span>
                  <span className="text-xs font-bold text-cyan-400">50 GB</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-4">Cut connection completely when reached.</p>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[25%]" />
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-300">Warning at</span>
                  <span className="text-xs font-bold text-yellow-500">40 GB</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-4">Show desktop notification when reached.</p>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[31%]" />
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              Reset Statistics
            </button>
          </div>

          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-6">
            <h4 className="font-bold text-indigo-400 text-sm mb-2 flex items-center gap-2">
              <BarChart3 size={16} />
              Optimization Tip
            </h4>
            <p className="text-[11px] text-indigo-400/80 leading-relaxed mb-4">
              Switching Chrome to 'Data Saver' mode via optimization settings can save up to 2.4 GB this month.
            </p>
            <button className="flex items-center gap-1 text-[11px] font-bold text-indigo-400 hover:underline">
              Go to Optimization <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UsageBar = ({ name, bytes, percent, color }: any) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs font-bold text-gray-400">{bytes}</span>
    </div>
    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
      <div className={`${color} h-full transition-all duration-1000`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

export default DataUsage;
