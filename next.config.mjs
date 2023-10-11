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
};

export default withMDX(withBundleAnalyzer(nextConfig));
