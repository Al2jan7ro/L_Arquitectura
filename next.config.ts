import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    // Habilita la View Transition API
    viewTransition: true, 
  },
};

export default nextConfig;
