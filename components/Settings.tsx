
import React from 'react';
import { Monitor, Cpu, Globe, Bell, Laptop, Cloud } from 'lucide-react';

const SettingSection = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
  <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-white/5 rounded-xl">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const SettingToggle = ({ label, description, defaultChecked }: { label: string, description: string, defaultChecked?: boolean }) => (
  <div className="flex items-center justify-between gap-6">
    <div className="flex-1">
      <p className="text-sm font-bold">{label}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
    <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${defaultChecked ? 'bg-cyan-600' : 'bg-white/10'}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${defaultChecked ? 'right-1' : 'left-1'}`} />
    </div>
  </div>
);

const Settings: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold">Preferences</h2>
        <p className="text-gray-500 mt-1">Global system and networking bridge configuration</p>
      </header>

      <div className="space-y-6">
        <SettingSection title="Network Integration" icon={<Globe size={20} className="text-cyan-400" />}>
          <SettingToggle label="Auto-Connect on Plugin" description="Start data bridge immediately when USB phone is detected." defaultChecked />
          <SettingToggle label="Override System Default" description="Set mobile bridge as the primary gateway for all Windows traffic." defaultChecked />
          <div className="pt-4 border-t border-white/5">
            <label className="text-sm font-medium block mb-2">Bridge Protocol</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50">
              <option>NDIS (Standard)</option>
              <option>RNDIS (Legacy Support)</option>
              <option>Wired over CDC-ECM</option>
            </select>
          </div>
        </SettingSection>

        <SettingSection title="System Resources" icon={<Cpu size={20} className="text-blue-400" />}>
          <SettingToggle label="Hardware Acceleration" description="Use GPU for real-time packet processing and decompression." defaultChecked />
          <SettingToggle label="Run in System Tray" description="Close to tray to maintain background connectivity." defaultChecked />
        </SettingSection>

        <SettingSection title="Notifications" icon={<Bell size={20} className="text-indigo-400" />}>
          <SettingToggle label="Connection Alerts" description="Notify when signal strength drops below -100 dBm." defaultChecked />
          <SettingToggle label="Usage Milestones" description="Alert at 25%, 50%, and 75% of your data cap." defaultChecked />
        </SettingSection>

        <div className="bg-rose-500/5 border border-rose-500/10 rounded-3xl p-6">
          <h4 className="text-rose-500 font-bold mb-2">Danger Zone</h4>
          <p className="text-sm text-gray-500 mb-4">Resetting the network cache will drop all active connections and clear logs.</p>
          <button className="px-6 py-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white rounded-xl text-sm font-bold transition-all border border-rose-500/20">
            Flush Bridge Cache
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
