/** @type {import('next').NextConfig} */

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve.fallback = {
  //       fs: false,
  //     };
  //   }

  //   return config;
  // },
};

export default withMDX(
  withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(nextConfig)
);
