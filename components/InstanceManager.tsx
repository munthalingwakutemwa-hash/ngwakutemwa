
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Play, 
  Square, 
  Settings2, 
  Trash2, 
  Cpu, 
  HardDrive, 
  Monitor,
  Zap
} from 'lucide-react';
import { Instance } from '../types';

const INITIAL_INSTANCES: Instance[] = [
  { id: '1', name: 'Primary Work Env', status: 'running', osVersion: 'Android 13', cpuCores: 4, ramGB: 4, resolution: '1080x1920' },
  { id: '2', name: 'Mobile Gaming High-Perf', status: 'stopped', osVersion: 'Android 12', cpuCores: 8, ramGB: 12, resolution: '1440x2560' },
  { id: '3', name: 'Legacy Testing', status: 'paused', osVersion: 'Android 9', cpuCores: 2, ramGB: 2, resolution: '720x1280' },
];

const InstanceManager: React.FC = () => {
  const [instances, setInstances] = useState<Instance[]>(INITIAL_INSTANCES);
  const [search, setSearch] = useState('');

  const toggleStatus = (id: string) => {
    setInstances(prev => prev.map(inst => {
      if (inst.id === id) {
        const nextStatus = inst.status === 'running' ? 'stopped' : 'running';
        return { ...inst, status: nextStatus as any };
      }
      return inst;
    }));
  };

  const filteredInstances = instances.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Instance Manager</h2>
          <p className="text-gray-500 mt-1">Configure and manage virtual mobile environments</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-500/20 transition-all font-semibold">
          <Plus size={20} />
          Create New Container
        </button>
      </header>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search instances by name or version..."
            className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select className="px-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium">
          <option>Sort by Name</option>
          <option>Sort by Status</option>
          <option>Sort by CPU</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {filteredInstances.map((instance) => (
          <div key={instance.id} className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 hover:border-indigo-500/30 transition-all group overflow-hidden relative">
            {/* Status Glow Overlay */}
            {instance.status === 'running' && (
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/5 blur-[60px] pointer-events-none" />
            )}

            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl ${instance.status === 'running' ? 'bg-indigo-600/20' : 'bg-white/5'} transition-colors`}>
                  <Zap size={24} className={instance.status === 'running' ? 'text-indigo-400' : 'text-gray-600'} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{instance.name}</h4>
                  <p className="text-xs text-indigo-400 font-medium">{instance.osVersion}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-all text-gray-500">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 p-3 rounded-2xl flex flex-col items-center">
                <Cpu size={14} className="text-gray-500 mb-1" />
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Cores</span>
                <span className="text-sm font-bold">{instance.cpuCores}</span>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl flex flex-col items-center">
                <HardDrive size={14} className="text-gray-500 mb-1" />
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Memory</span>
                <span className="text-sm font-bold">{instance.ramGB}GB</span>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl flex flex-col items-center">
                <Monitor size={14} className="text-gray-500 mb-1" />
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Res</span>
                <span className="text-[10px] font-bold mt-1 leading-tight">{instance.resolution}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => toggleStatus(instance.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                  instance.status === 'running' 
                    ? 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20' 
                    : 'bg-emerald-500 text-black hover:bg-emerald-400'
                }`}
              >
                {instance.status === 'running' ? <Square size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                {instance.status === 'running' ? 'Stop' : 'Start'}
              </button>
              <button className="px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-gray-400">
                <Settings2 size={20} />
              </button>
              <button className="px-4 py-3 bg-white/5 hover:bg-rose-500/10 hover:text-rose-500 rounded-xl transition-all text-gray-400">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstanceManager;
