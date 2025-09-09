import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[{hostname:'aceternity.com'}]
  },
  pageExtensions: ['js','jsx','ts','tsx','md','mdx','pdf'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMdx = createMDX({
  extension: /\.(md|mdx)$/,
})
export default withMdx(nextConfig);
