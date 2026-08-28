import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname, // Tells Turbopack the workspace root is the current folder
  },
  // turbopackFileSystemCacheForDev: true,
};

export default nextConfig;
