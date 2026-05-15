import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pm-portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
