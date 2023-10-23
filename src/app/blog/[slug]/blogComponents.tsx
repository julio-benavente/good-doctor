import { Link, Typography } from "@/components";
import Image from "next/image";

const blogComponents = {
  h2: ({ children, ...props }) => {
    return (
      <Typography
        variant="h2"
        className="mb-6 mt-12 [&:first-of-type]:mt-0"
        {...props}
      >
        {children}
      </Typography>
    );
  },
  h3: ({ children, ...props }) => {
    return (
      <Typography variant="h3" className="mt-6 text-lg" {...props}>
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
  ul: ({ children }) => {
    return <ul className="pl-4 mt-4">{children}</ul>;
  },
  li: ({ children }) => {
    return (
      <li className="list-disc text-lg [&::marker]:text-2xl [&::marker]:text-primary mb-2">
        {children}
      </li>
    );
  },
  Planet: () => "Neptune",
  img: ({ ...props }) => {
    return (
      <span className="relative w-full aspect-video block image my-12">
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
};

export default blogComponents;
