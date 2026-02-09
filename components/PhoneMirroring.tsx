
import React, { useState, useEffect } from 'react';
import { Cast, Smartphone, Wifi, Usb, AlertCircle, RefreshCcw, Maximize2, MousePointer2, Keyboard } from 'lucide-react';

const PhoneMirroring: React.FC = () => {
  const [connectionType, setConnectionType] = useState<'usb' | 'wifi'>('usb');
  const [isConnected, setIsConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setIsConnected(true);
      setConnecting(false);
    }, 2000);
  };

  return (
    <div className="p-8 h-full flex flex-col animate-in fade-in duration-500">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Phone Mirroring</h2>
        <p className="text-gray-500 mt-1">Control your physical device with zero-latency mirroring</p>
      </header>

      {!isConnected ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full bg-white/[0.02] border border-white/10 rounded-3xl p-10 text-center space-y-8">
            <div className="relative mx-auto w-24 h-24 bg-indigo-600/10 rounded-full flex items-center justify-center">
              <Smartphone size={48} className="text-indigo-400" />
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-2 border-4 border-[#0f0f0f]">
                {connectionType === 'usb' ? <Usb size={20} className="text-white" /> : <Wifi size={20} className="text-white" />}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Connect Your Device</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Plug in your phone via USB for maximum performance or connect via Wi-Fi for wireless convenience.
              </p>
            </div>

            <div className="flex bg-white/5 p-1 rounded-2xl">
              <button 
                onClick={() => setConnectionType('usb')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${connectionType === 'usb' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              >
                <Usb size={16} /> USB Wired
              </button>
              <button 
                onClick={() => setConnectionType('wifi')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${connectionType === 'wifi' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              >
                <Wifi size={16} /> Wi-Fi Sync
              </button>
            </div>

            <button 
              onClick={handleConnect}
              disabled={connecting}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-600/20"
            >
              {connecting ? (
                <>
                  <RefreshCcw size={20} className="animate-spin" />
                  Searching for devices...
                </>
              ) : (
                <>
                  <Cast size={20} />
                  Initiate Mirroring
                </>
              )}
            </button>

            <div className="flex items-center gap-3 p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl text-left">
              <AlertCircle size={20} className="text-yellow-500 flex-shrink-0" />
              <p className="text-[10px] text-yellow-500/80 leading-tight uppercase font-bold tracking-wider">
                Note: USB Debugging must be enabled in Developer Options on your Android device.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-hidden">
          <div className="lg:col-span-3 bg-black rounded-3xl relative overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl">
             {/* Device Frame Simulation */}
             <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[40px] border-[12px] border-gray-800 shadow-2xl flex flex-col">
                <div className="h-6 w-full flex justify-center items-center">
                  <div className="w-16 h-1 bg-gray-700 rounded-full" />
                </div>
                <div className="flex-1 bg-[#1a1a1a] flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <Cast size={64} className="mx-auto mb-4 opacity-10" />
                    <p className="font-bold opacity-30">Device Stream Active</p>
                    <p className="text-[10px] opacity-20">1080p @ 60 FPS</p>
                  </div>
                </div>
                <div className="h-10 w-full flex justify-around items-center px-8">
                  <div className="w-2 h-2 rounded-full bg-gray-700" />
                  <div className="w-8 h-8 rounded-full border-2 border-gray-700" />
                  <div className="w-2 h-2 rounded bg-gray-700" />
                </div>
             </div>

             <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-lg border border-emerald-500/20 text-xs font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Connected via {connectionType.toUpperCase()}
                </div>
                <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400">
                  Latency: 1.2ms
                </div>
             </div>

             <div className="absolute bottom-6 right-6 flex gap-2">
               <MirrorControlBtn icon={<Maximize2 size={18} />} label="Fullscreen" />
               <MirrorControlBtn icon={<MousePointer2 size={18} />} label="Mouse Mapping" />
               <MirrorControlBtn icon={<Keyboard size={18} />} label="Keyboard Input" />
             </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
              <h4 className="font-bold mb-4">Device Info</h4>
              <div className="space-y-3">
                <InfoRow label="Model" value="Pixel 7 Pro" />
                <InfoRow label="Serial" value="2A941FDE88" />
                <InfoRow label="OS" value="Android 14 (Beta)" />
                <InfoRow label="Battery" value="88% (Charging)" />
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
              <h4 className="font-bold mb-4">Streaming Settings</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 block mb-2 font-bold uppercase tracking-wider">Bitrate (Mbps)</label>
                  <input type="range" className="w-full accent-indigo-500" defaultValue={20} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Hardware Acceleration</span>
                  <div className="w-10 h-5 bg-indigo-600 rounded-full relative px-1 flex items-center justify-end">
                    <div className="w-3.5 h-3.5 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsConnected(false)}
              className="w-full py-3 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white rounded-2xl font-bold transition-all border border-rose-500/20"
            >
              Terminate Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-200 font-medium">{value}</span>
  </div>
);

const MirrorControlBtn = ({ icon, label }: { icon: any, label: string }) => (
  <button className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all group relative">
    {icon}
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {label}
    </div>
  </button>
);

export default PhoneMirroring;
