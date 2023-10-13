import { Link, Typography } from "@/components";
import Image from "next/image";

const blogComponents = {
  h2: ({ children, ...props }) => {
    return (
      <Typography variant="h2" className="mb-8 mt-12" {...props}>
        {children}
      </Typography>
    );
  },
  H2: ({ children, ...props }) => {
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
};

export default blogComponents;
