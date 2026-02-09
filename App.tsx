
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Connections from './components/Connections';
import DataUsage from './components/DataUsage';
import Security from './components/Security';
import Settings from './components/Settings';
import Optimization from './components/Optimization';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>(ViewType.DASHBOARD);

  const renderView = () => {
    switch (activeView) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.CONNECTIONS:
        return <Connections />;
      case ViewType.DATA_USAGE:
        return <DataUsage />;
      case ViewType.SECURITY:
        return <Security />;
      case ViewType.OPTIMIZATION:
        return <Optimization />;
      case ViewType.SETTINGS:
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-200 overflow-hidden">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 overflow-auto relative bg-[#0f0f0f] border-l border-white/5">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
