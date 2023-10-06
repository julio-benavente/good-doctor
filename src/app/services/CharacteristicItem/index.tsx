import { Button, Typography } from "@/components";
import cn from "@/helpers/cn";
import Image, { StaticImageData } from "next/image";

export interface CharacteristicItemProps {
  type?: "main" | "regular";
  direction?: "ltr" | "rtl"; // text determines the origin
  title: string;
  content: string;
  learnMoreLink: string;
  image: StaticImageData;
}
const CharacteristicItem = ({
  type = "regular",
  direction = "ltr",
  ...props
}: CharacteristicItemProps) => {
  return (
    <section
      className={cn(
        type === "main" && "bg-terciary",
        type === "regular" && "bg-white"
      )}
    >
      <div
        className={cn(
          "container grid grid-cols-1 mx-auto",
          "lg:grid-cols-12 lg:gap-x-16 lg:py-0",
          type === "regular" && "lg:py-12"
        )}
      >
        <div
          className={cn(
            "pt-8 self-center order-2",
            "lg:col-span-5 lg:order-1 lg:py-12",
            direction === "rtl" && "lg:order-2"
          )}
        >
          <Typography variant={type === "main" ? "h1" : "h2"}>
            {props.title}
          </Typography>
          <Typography className="mt-4 lg:mt-8">{props.content}</Typography>
          {type === "regular" && <Button className="mt-8">Learn more</Button>}
        </div>

        <div
          className={cn(
            "order-1",
            "lg:col-span-7 lg:order-2",
            type === "regular" && "self-center lg:px-8 xl:px-16",
            direction === "rtl" && "lg:order-1"
          )}
        >
          <div
            className={cn(
              "w-full h-full"
              //   type === "regular" && "aspect-video"
            )}
          >
            <Image
              src={props.image}
              alt="doctor greeting"
              className={cn(
                "rounded w-full h-full object-cover object-center lg:rounded-none",
                type === "regular" && "aspect-video rounded h-auto m-auto"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacteristicItem;
