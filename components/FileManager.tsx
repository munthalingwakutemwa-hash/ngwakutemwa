
import React, { useState } from 'react';
import { 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Music, 
  Download, 
  Search, 
  MoreVertical,
  ChevronRight,
  HardDrive,
  Cloud,
  ArrowUpRight
} from 'lucide-react';

const FileManager: React.FC = () => {
  const [selectedDrive, setSelectedDrive] = useState<'virtual' | 'cloud' | 'local'>('virtual');

  return (
    <div className="p-8 h-full flex flex-col animate-in fade-in duration-500">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold">Explorer</h2>
          <p className="text-gray-500 mt-1">Cross-platform file sharing and bridge manager</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all font-semibold">
          <ArrowUpRight size={18} className="text-indigo-400" />
          Mount Local Drive
        </button>
      </header>

      <div className="flex gap-8 flex-1 overflow-hidden">
        {/* Sidebar Mini */}
        <div className="w-56 space-y-1">
          <DriveButton 
            active={selectedDrive === 'virtual'} 
            onClick={() => setSelectedDrive('virtual')}
            icon={<HardDrive size={18} />} 
            label="Virtual Internal" 
            sub="32GB / 128GB"
          />
          <DriveButton 
            active={selectedDrive === 'cloud'} 
            onClick={() => setSelectedDrive('cloud')}
            icon={<Cloud size={18} />} 
            label="Cloud Storage" 
            sub="Google Drive"
          />
          <DriveButton 
            active={selectedDrive === 'local'} 
            onClick={() => setSelectedDrive('local')}
            icon={<Folder size={18} />} 
            label="Host Bridge" 
            sub="C:/Users/Downloads"
          />

          <div className="pt-8 px-4">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">Categories</p>
            <div className="space-y-3">
              <CategoryItem icon={<ImageIcon size={14} />} label="Images" />
              <CategoryItem icon={<Video size={14} />} label="Videos" />
              <CategoryItem icon={<Music size={14} />} label="Music" />
              <CategoryItem icon={<FileText size={14} />} label="Documents" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Home</span>
              <ChevronRight size={14} />
              <span>Emulated</span>
              <ChevronRight size={14} />
              <span className="text-gray-200 font-medium">Internal Storage</span>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
              <input 
                type="text" 
                placeholder="Search storage..."
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs focus:outline-none focus:border-indigo-500/50"
              />
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="pb-3 px-2 font-bold">Name</th>
                  <th className="pb-3 px-2 font-bold">Date Modified</th>
                  <th className="pb-3 px-2 font-bold">Size</th>
                  <th className="pb-3 px-2 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                <FileRow icon={<Folder className="text-indigo-400" size={18} />} name="Android" date="Oct 12, 2023" size="--" />
                <FileRow icon={<Folder className="text-indigo-400" size={18} />} name="DCIM" date="Oct 14, 2023" size="--" />
                <FileRow icon={<Folder className="text-indigo-400" size={18} />} name="Download" date="Just now" size="--" />
                <FileRow icon={<ImageIcon className="text-blue-400" size={18} />} name="Screen_Capture_001.png" date="Yesterday" size="2.4 MB" />
                <FileRow icon={<Video className="text-rose-400" size={18} />} name="Gameplay_Rec.mp4" date="2 days ago" size="145 MB" />
                <FileRow icon={<FileText className="text-emerald-400" size={18} />} name="Config_backup.json" date="Oct 10, 2023" size="12 KB" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const DriveButton = ({ icon, label, sub, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all border ${active ? 'bg-indigo-600/10 border-indigo-500/20' : 'bg-transparent border-transparent hover:bg-white/5'}`}
  >
    <div className={`p-2 rounded-xl ${active ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-500'}`}>
      {icon}
    </div>
    <div className="text-left">
      <p className={`text-sm font-bold ${active ? 'text-indigo-400' : 'text-gray-300'}`}>{label}</p>
      <p className="text-[10px] text-gray-500">{sub}</p>
    </div>
  </button>
);

const CategoryItem = ({ icon, label }: any) => (
  <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors group">
    <div className="text-gray-600 group-hover:text-indigo-400 transition-colors">
      {icon}
    </div>
    <span>{label}</span>
  </div>
);

const FileRow = ({ icon, name, date, size }: any) => (
  <tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
    <td className="py-4 px-2">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{name}</span>
      </div>
    </td>
    <td className="py-4 px-2 text-sm text-gray-500">{date}</td>
    <td className="py-4 px-2 text-sm text-gray-500">{size}</td>
    <td className="py-4 px-2 text-right">
      <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-white/5 rounded-lg transition-all text-gray-500">
        <MoreVertical size={16} />
      </button>
    </td>
  </tr>
);

export default FileManager;
