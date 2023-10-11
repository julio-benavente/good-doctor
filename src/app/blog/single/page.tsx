// "use client";
import Image from "next/image";
import Blog from "./blog.mdx";
import { metadata } from "./blog.mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Link, Typography } from "@/components";
import { Suspense, useEffect, useRef, useState } from "react";
import TableOfContents from "./TableOfContents";
import cn from "@/helpers/cn";

const SingleBlogPage = () => {
  // const response = await fetch("http://localhost:1337/api/single-post");
  // const data = await response.json();
  // const markdown = data?.data?.attributes?.markdown;
  // // console.log(markdown);

  return (
    <article id="single-blog">
      <div className="container max-w-4xl mx-auto">
        <div>
          {metadata.title && (
            <Typography variant="h1">{metadata.title}</Typography>
          )}
        </div>
        {/* 
        <MDXRemote
          source={markdown}
          components={{
            Marco: ({ ...props }) => {
              console.log(props);
              return <Typography {...props} />;
            },
          }}
        /> */}
        {/* <TableOfContents data={metadata?.tableOfContents} /> */}
        <div
          className={cn(
            "[&>span.image-portrait>span]:aspect-square", // image
            ""
          )}
        >
          <Blog
            components={{
              h2: ({ children, ...props }) => {
                return (
                  <Typography variant="h2" className="mb-8 mt-12" {...props}>
                    {children}
                  </Typography>
                );
              },
              H2: ({ children, ...props }) => {
                // console.log(children.props);
                return (
                  <Typography variant="h2" className="mb-8 mt-12" {...props}>
                    {children}
                  </Typography>
                );
              },
              a: ({ children, ...props }) => {
                return <Link {...props}>{children}</Link>;
              },
              p: ({ children, ...props }) => {
                return (
                  <Typography className="mt-4" {...props}>
                    {children}
                  </Typography>
                );
              },
              li: ({ children }) => {
                return <li className="list-disc text-lg">{children}</li>;
              },
              Planet: () => "Neptune",
              img: ({ ...props }) => {
                return (
                  <span className="relative w-full aspect-video block image">
                    <Image
                      className="object-cover object-center w-full h-full rounded-lg"
                      alt="doctor image"
                      src=""
                      {...props}
                      fill
                    />
                  </span>
                );
              },
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default SingleBlogPage;
