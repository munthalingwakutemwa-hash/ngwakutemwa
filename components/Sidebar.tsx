
import React from 'react';
import { 
  Activity, 
  Link2, 
  BarChart3, 
  ShieldCheck, 
  Settings as SettingsIcon, 
  Zap,
  Network
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: ViewType.DASHBOARD, label: 'Live Monitor', icon: Activity },
    { id: ViewType.CONNECTIONS, label: 'Connections', icon: Link2 },
    { id: ViewType.DATA_USAGE, label: 'Data Usage', icon: BarChart3 },
    { id: ViewType.OPTIMIZATION, label: 'Optimization', icon: Zap },
    { id: ViewType.SECURITY, label: 'Security', icon: ShieldCheck },
    { id: ViewType.SETTINGS, label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <aside className="w-64 bg-[#0a0a0a] flex flex-col border-r border-white/5">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Network className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            CellBridge
          </h1>
          <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">Ultra Low Latency</span>
        </div>
      </div>

      <nav className="flex-1 px-4 mt-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-cyan-600/10 text-cyan-400 font-medium' 
                    : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-cyan-400' : 'group-hover:text-gray-200'} />
                <span>{item.label}</span>
                {isActive && <div className="ml-auto w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-4 rounded-2xl border border-cyan-500/10">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={14} className="text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Bridge Status</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Signal (LTE+)</span>
              <span className="text-cyan-300">Strong</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-cyan-500 h-full w-[85%]" />
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Monthly Cap</span>
              <span className="text-gray-300">12.4 / 50 GB</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[25%]" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
