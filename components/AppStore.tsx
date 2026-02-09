
import React, { useState } from 'react';
import { Download, Search, Star, Filter, ShieldCheck } from 'lucide-react';
import { MobileApp } from '../types';

const APPS: MobileApp[] = [
  { id: '1', name: 'Genshin Impact', category: 'Action RPG', rating: 4.8, icon: 'https://picsum.photos/id/1/200/200', installed: false },
  { id: '2', name: 'Slack', category: 'Communication', rating: 4.5, icon: 'https://picsum.photos/id/10/200/200', installed: true },
  { id: '3', name: 'TikTok', category: 'Entertainment', rating: 4.2, icon: 'https://picsum.photos/id/20/200/200', installed: false },
  { id: '4', name: 'Instagram', category: 'Social', rating: 4.6, icon: 'https://picsum.photos/id/30/200/200', installed: false },
  { id: '5', name: 'Spotify', category: 'Music', rating: 4.9, icon: 'https://picsum.photos/id/40/200/200', installed: true },
  { id: '6', name: 'Zoom', category: 'Business', rating: 4.4, icon: 'https://picsum.photos/id/50/200/200', installed: false },
  { id: '7', name: 'Discord', category: 'Communication', rating: 4.7, icon: 'https://picsum.photos/id/60/200/200', installed: true },
  { id: '8', name: 'Call of Duty: Mobile', category: 'Action', rating: 4.8, icon: 'https://picsum.photos/id/70/200/200', installed: false },
];

const AppStore: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = APPS.filter(app => app.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">App Store</h2>
          <p className="text-gray-500 mt-1">Deploy optimized Android apps to your virtual instances</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">All Apps Security Verified</span>
        </div>
      </header>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Find games, productivity tools, and social apps..."
            className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center gap-2 text-sm font-medium transition-all">
          <Filter size={18} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {filtered.map(app => (
          <div key={app.id} className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 hover:bg-white/[0.04] transition-all group">
            <div className="flex gap-4 mb-4">
              <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
              <div className="flex-1">
                <h4 className="font-bold text-lg group-hover:text-indigo-400 transition-colors truncate">{app.name}</h4>
                <p className="text-xs text-gray-500 mb-1">{app.category}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold">{app.rating}</span>
                </div>
              </div>
            </div>
            
            <button 
              className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                app.installed 
                  ? 'bg-white/5 text-gray-500 cursor-default' 
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
              }`}
            >
              {app.installed ? (
                'Installed'
              ) : (
                <>
                  <Download size={16} />
                  Install App
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppStore;
