import Image from "next/image";
import { Button, Link, Typography } from "@/components";
import CardImage from "@/../public/assets/hero-image.jpg";
import cn from "@/helpers/cn";
import { HtmlHTMLAttributes } from "react";

interface CharacteristicBannerProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

const CharacteristicBanner = ({
  className,
  ...props
}: CharacteristicBannerProps) => {
  return (
    <div className={cn(className)} {...props}>
      <div
        className={cn(
          "grid bg-teal-50 rounded-lg p-6",
          "md:p-8",
          "lg:grid-cols-2 lg:py-12 lg:pr-20 lg:gap-16 lg:ml-20 lg:rounded-xl"
        )}
      >
        <div className="flex">
          <div className={cn("flex flex-1 relative", "lg:flex-1 lg:-ml-28")}>
            <Image
              src={CardImage}
              alt="image of patients"
              className={cn("rounded-lg object-cover h-full")}
            />
          </div>
        </div>

        <div className={cn("self-center", "mt-8", "lg:mt-0")}>
          <Typography variant="h2">Approved by AARP</Typography>
          <Typography className="mt-8">
            Oak Street Health was selected by AARP as a trusted primary care
            provider because of its dedication to high-quality healthcare for
            all Medicare-eligible adults - the only primary care provider to
            have that distinction.{" "}
            <Link href="/" type="standard">
              Find a provider
            </Link>{" "}
            who cares for AARP members like you.
          </Typography>
          <Button className="mt-8">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicBanner;
