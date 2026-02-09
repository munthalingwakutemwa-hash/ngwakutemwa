
import React, { useState } from 'react';
import { 
  Usb, 
  Wifi, 
  Bluetooth, 
  RefreshCcw, 
  ArrowRight, 
  CheckCircle2,
  AlertTriangle,
  Link2
} from 'lucide-react';

const Connections: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'USB' | 'WIFI' | 'BT'>('USB');

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold">Connection Bridge</h2>
        <p className="text-gray-500 mt-1">Select your tethering method to initiate the mobile data link</p>
      </header>

      <div className="flex gap-1 bg-white/5 p-1 rounded-2xl w-fit">
        <TabButton icon={<Usb size={16} />} label="USB" active={activeTab === 'USB'} onClick={() => setActiveTab('USB')} />
        <TabButton icon={<Wifi size={16} />} label="Wi-Fi" active={activeTab === 'WIFI'} onClick={() => setActiveTab('WIFI')} />
        <TabButton icon={<Bluetooth size={16} />} label="Bluetooth" active={activeTab === 'BT'} onClick={() => setActiveTab('BT')} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-cyan-600/10 rounded-full flex items-center justify-center">
              {activeTab === 'USB' && <Usb size={40} className="text-cyan-400" />}
              {activeTab === 'WIFI' && <Wifi size={40} className="text-cyan-400" />}
              {activeTab === 'BT' && <Bluetooth size={40} className="text-cyan-400" />}
            </div>
            
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">
                {activeTab === 'USB' ? 'USB High-Speed Bridge' : activeTab === 'WIFI' ? 'Wireless Hotspot Link' : 'Bluetooth Low-Energy'}
              </h3>
              <p className="text-sm text-gray-500">
                {activeTab === 'USB' 
                  ? 'The fastest and most stable connection. Plug your device in and enable USB Tethering in settings.' 
                  : 'Wireless convenience. Search for the CellBridge Hotspot on your smartphone and connect.'}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-cyan-600/20 flex items-center gap-3">
                <Link2 size={20} />
                Connect Now
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                <RefreshCcw size={14} />
                Scan for devices
              </button>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-cyan-400" />
              Pre-flight Checklist
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CheckItem label="USB Tethering Enabled" completed />
              <CheckItem label="Mobile Data On" completed />
              <CheckItem label="Hotspot Configured" completed={false} />
              <CheckItem label="PC Driver Status" completed />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
            <h4 className="font-bold mb-4">Saved Devices</h4>
            <div className="space-y-4">
              <SavedDevice name="Pixel 7 Pro (My Phone)" type="USB" lastSeen="Today" active />
              <SavedDevice name="iPad Air" type="WiFi" lastSeen="Yesterday" />
              <SavedDevice name="Netgear M6 Pro" type="USB" lastSeen="Oct 12" />
            </div>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-3xl p-6 flex gap-4">
            <AlertTriangle size={24} className="text-yellow-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1">Carrier Warning</p>
              <p className="text-[11px] text-yellow-500/70 leading-relaxed">
                Some carriers may throttle tethering data after reaching specific thresholds. Enable 'Data Optimization' to save bandwidth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${active ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
  >
    {icon}
    {label}
  </button>
);

const CheckItem = ({ label, completed }: { label: string, completed: boolean }) => (
  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${completed ? 'bg-cyan-500/20 text-cyan-500' : 'bg-white/5 text-gray-700'}`}>
      <CheckCircle2 size={12} fill={completed ? "currentColor" : "none"} />
    </div>
    <span className={`text-xs ${completed ? 'text-gray-300' : 'text-gray-600'}`}>{label}</span>
  </div>
);

const SavedDevice = ({ name, type, lastSeen, active }: any) => (
  <div className={`p-4 rounded-2xl border transition-all ${active ? 'bg-cyan-600/5 border-cyan-500/20' : 'bg-white/5 border-transparent hover:border-white/10'}`}>
    <div className="flex justify-between items-start mb-2">
      <p className="text-sm font-bold">{name}</p>
      <span className="text-[10px] uppercase font-bold text-gray-500">{type}</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-[10px] text-gray-500">Last: {lastSeen}</span>
      {active ? (
        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Active</span>
      ) : (
        <button className="text-[10px] text-indigo-400 font-bold uppercase hover:underline">Connect</button>
      )}
    </div>
  </div>
);

export default Connections;
