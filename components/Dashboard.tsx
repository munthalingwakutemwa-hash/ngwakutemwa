
import React from 'react';
import { 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Signal, 
  Wifi, 
  Zap, 
  Shield, 
  Clock,
  Globe
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const liveData = Array.from({ length: 20 }, (_, i) => ({
  time: i,
  down: Math.random() * 50 + 20,
  up: Math.random() * 10 + 2,
}));

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Live Network Monitor</h2>
          <p className="text-gray-500 mt-1">Real-time throughput and connection health via USB Bridge</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-sm font-bold">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active: Verizon 5G
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<ArrowDownCircle size={20} className="text-cyan-400" />} 
          label="Download Speed" 
          value="48.2 Mbps" 
          trend="Peak 65.0"
        />
        <StatCard 
          icon={<ArrowUpCircle size={20} className="text-blue-400" />} 
          label="Upload Speed" 
          value="8.4 Mbps" 
          trend="Stable"
        />
        <StatCard 
          icon={<Clock size={20} className="text-purple-400" />} 
          label="Latency (Ping)" 
          value="24 ms" 
          trend="Jitter: 2ms"
        />
        <StatCard 
          icon={<Signal size={20} className="text-yellow-400" />} 
          label="Signal Strength" 
          value="-84 dBm" 
          trend="Excellent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Zap size={18} className="text-cyan-400" />
              Bandwidth Throughput (Mbps)
            </h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={liveData}>
                <defs>
                  <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis hide />
                <YAxis stroke="#ffffff30" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="down" stroke="#22d3ee" fillOpacity={1} fill="url(#colorDown)" strokeWidth={2} />
                <Area type="monotone" dataKey="up" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUp)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Globe size={18} className="text-indigo-400" />
            Connection Summary
          </h3>
          <div className="space-y-4">
            <InfoItem label="Provider" value="Verizon Wireless" />
            <InfoItem label="IP Address" value="172.16.254.1" />
            <InfoItem label="MAC Address" value="00:1A:2B:3C:4D:5E" />
            <InfoItem label="Data Mode" value="Metered High-Speed" />
            <InfoItem label="DNS" value="Secure (Google)" />
            <div className="pt-4 mt-4 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Security Rating</span>
                <span className="text-xs text-emerald-400 font-bold uppercase">Optimal</span>
              </div>
              <div className="flex gap-1">
                <div className="flex-1 h-1 bg-emerald-500 rounded-full"></div>
                <div className="flex-1 h-1 bg-emerald-500 rounded-full"></div>
                <div className="flex-1 h-1 bg-emerald-500 rounded-full"></div>
                <div className="flex-1 h-1 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend }: any) => (
  <div className="bg-white/[0.02] border border-white/10 p-6 rounded-3xl group hover:border-cyan-500/30 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-cyan-500/10 transition-all">
        {icon}
      </div>
      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/5 text-gray-400">
        {trend}
      </span>
    </div>
    <p className="text-gray-500 text-sm font-medium">{label}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-300 font-medium">{value}</span>
  </div>
);

export default Dashboard;
