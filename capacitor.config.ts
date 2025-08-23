import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.de61e02cfde447599690bbc93364135b',
  appName: 'azsoft-glassmorphism-site',
  webDir: 'dist',
  server: {
    url: 'https://de61e02c-fde4-4759-9690-bbc93364135b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#1a1a1a",
      showSpinner: false
    }
  }
};

export default config;