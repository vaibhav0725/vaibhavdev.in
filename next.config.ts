import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions:['ts','tsx','md','mdx','js','jsx'],
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com"
      }
    ]
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
