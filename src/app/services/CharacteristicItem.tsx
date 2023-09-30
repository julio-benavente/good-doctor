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
          "container grid grid-cols-12 gap-16 mx-auto",
          type === "regular" && "py-12"
        )}
      >
        <div
          className={cn(
            "py-12 col-span-5 self-center order-1",
            direction === "rtl" && "order-2"
          )}
        >
          <Typography variant={type === "main" ? "h1" : "h2"}>
            {props.title}
          </Typography>
          <Typography className="mt-8">{props.content}</Typography>
          {type === "regular" && <Button className="mt-8">Learn more</Button>}
        </div>
        <div
          className={cn(
            "col-span-7 order-2",
            type === "regular" && "px-16 self-center",
            direction === "rtl" && "order-1"
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
                "w-full h-full object-cover object-center",
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
