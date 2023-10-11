import React from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

const BlogItem = ({ ...mdxSource }: MDXRemoteProps) => {
  return <MDXRemote {...mdxSource} />;
};

export default BlogItem;
