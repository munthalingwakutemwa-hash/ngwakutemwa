
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  CONNECTIONS = 'CONNECTIONS',
  DATA_USAGE = 'DATA_USAGE',
  SECURITY = 'SECURITY',
  SETTINGS = 'SETTINGS',
  OPTIMIZATION = 'OPTIMIZATION'
}

export interface NetworkInterface {
  id: string;
  name: string;
  type: 'USB' | 'WiFi' | 'Bluetooth';
  status: 'connected' | 'connecting' | 'disconnected';
  signalStrength: number; // 0-100
  carrier?: string;
}

export interface AppDataUsage {
  id: string;
  name: string;
  usageBytes: number;
  icon: string;
}

// Fixed: Added Instance interface for InstanceManager component
export interface Instance {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'paused';
  osVersion: string;
  cpuCores: number;
  ramGB: number;
  resolution: string;
}

// Fixed: Added MobileApp interface for AppStore component
export interface MobileApp {
  id: string;
  name: string;
  category: string;
  rating: number;
  icon: string;
  installed: boolean;
}
