
import React from 'react';
// Fixed: Replaced non-existent ArrowDownWideZap with ZapOff
import { Zap, Gauge, Play, ZapOff, Cpu, Settings2 } from 'lucide-react';

const Optimization: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold">Network Optimizer</h2>
        <p className="text-gray-500 mt-1">Fine-tune your mobile connection for performance or efficiency</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-cyan-600/10 border border-cyan-500/20 rounded-3xl p-6 group hover:bg-cyan-600/20 transition-all cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-cyan-600/20 rounded-2xl group-hover:scale-110 transition-transform">
              <Zap size={24} className="text-cyan-400" />
            </div>
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
          </div>
          <h4 className="font-bold mb-1">Gamer Mode (Low Latency)</h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Prioritizes UDP traffic and disables background updates to ensure minimum ping.
          </p>
          <div className="flex gap-1">
            <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-500 text-[10px] font-bold rounded uppercase">Ping+</span>
            <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-500 text-[10px] font-bold rounded uppercase">No-Update</span>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 group hover:border-white/20 transition-all cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
              {/* Fixed: Replaced ArrowDownWideZap with ZapOff */}
              <ZapOff size={24} className="text-gray-400" />
            </div>
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <h4 className="font-bold mb-1">Data Saver (Travel Mode)</h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Compresses images and restricts video streams to 480p to conserve mobile data.
          </p>
          <div className="flex gap-1">
            <span className="px-2 py-0.5 bg-white/5 text-gray-500 text-[10px] font-bold rounded uppercase">Saving-On</span>
          </div>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 space-y-8">
        <h3 className="font-bold flex items-center gap-2">
          <Settings2 size={18} className="text-cyan-400" />
          Advanced Bandwidth Control
        </h3>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-bold">Total Bandwidth Limit (Download)</label>
              <span className="text-sm text-cyan-400 font-bold">Unlimited</span>
            </div>
            <input type="range" className="w-full accent-cyan-500" defaultValue={100} />
            <div className="flex justify-between text-[10px] text-gray-500 mt-2">
              <span>512 Kbps</span>
              <span>10 Mbps</span>
              <span>50 Mbps</span>
              <span>Unlimited</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Throttling</h4>
              <OptToggle label="Block OS Updates" active />
              <OptToggle label="Compress Assets" active={false} />
              <OptToggle label="Limit Media Bitrate" active />
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Priority Apps</h4>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Steam (Gaming)</span>
                <span className="text-[10px] font-bold text-cyan-400">HIGH</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Zoom Meetings</span>
                <span className="text-[10px] font-bold text-cyan-400">HIGH</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Windows Explorer</span>
                <span className="text-[10px] font-bold text-gray-600">NORMAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OptToggle = ({ label, active }: { label: string, active: boolean }) => (
  <div className="flex items-center justify-between text-sm">
    <span>{label}</span>
    <div className={`w-10 h-5 rounded-full relative transition-all cursor-pointer ${active ? 'bg-cyan-600' : 'bg-white/10'}`}>
      <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${active ? 'right-1' : 'left-1'}`} />
    </div>
  </div>
);

export default Optimization;
