
import React from 'react';
import { Shield, ShieldCheck, Lock, Globe, EyeOff, Terminal, WifiOff } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold">Security & Privacy</h2>
        <p className="text-gray-500 mt-1">Ensure your mobile bridge is encrypted and protected</p>
      </header>

      <div className="space-y-6">
        <SecurityCard 
          icon={<ShieldCheck size={24} className="text-emerald-400" />}
          title="Connection Encryption"
          description="Traffic between your PC and smartphone is encrypted using AES-256 via the USB bridge."
          status="Active"
          statusColor="text-emerald-400"
        />

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/10 rounded-2xl">
                <Globe size={20} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold">Encrypted DNS (DoH)</h4>
                <p className="text-xs text-gray-500">Protects your browsing history from carrier snooping.</p>
              </div>
            </div>
            <Toggle active />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/10 rounded-2xl">
                <Lock size={20} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold">Bridge VPN Tunnel</h4>
                <p className="text-xs text-gray-500">Reroute all traffic through an external secure node.</p>
              </div>
            </div>
            <Toggle active={false} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-600/10 rounded-2xl">
                <WifiOff size={20} className="text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold">Kill Switch</h4>
                <p className="text-xs text-gray-500">Disconnect internet if the mobile link drops unexpectedly.</p>
              </div>
            </div>
            <Toggle active />
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Terminal size={18} className="text-gray-500" />
            Security Log
          </h4>
          <div className="space-y-3 font-mono text-[10px]">
            <LogEntry time="12:44:10" msg="USB Bridge initialized with hardware handshake." color="text-emerald-500" />
            <LogEntry time="12:44:11" msg="DHCP assigned: 172.16.254.1" color="text-gray-400" />
            <LogEntry time="12:45:02" msg="Blocked tracking attempt from carrier-analytics.net" color="text-yellow-500" />
            <LogEntry time="12:50:33" msg="DNS cache flushed automatically." color="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SecurityCard = ({ icon, title, description, status, statusColor }: any) => (
  <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex items-start gap-6">
    <div className="p-4 bg-white/5 rounded-2xl">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-bold">{title}</h4>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${statusColor}`}>{status}</span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Toggle = ({ active }: { active: boolean }) => (
  <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${active ? 'bg-cyan-600' : 'bg-white/10'}`}>
    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${active ? 'right-1' : 'left-1'}`} />
  </div>
);

const LogEntry = ({ time, msg, color }: any) => (
  <div className="flex gap-4">
    <span className="text-gray-600">{time}</span>
    <span className={color}>{msg}</span>
  </div>
);

export default Security;
