import blogComponents from "./blogComponents";
import { Button, Link, Typography } from "@/components";
import cn from "@/helpers/cn";

const Article = ({ metadata, MDXContent }) => {
  return (
    <article>
      <section className="pb-0 bg-primary">
        <div
          className={cn(
            "container grid",
            "lg:gap-x-16",
            "xl:grid-cols-[14rem_1fr_14rem]"
          )}
        >
          <div className="col-start-2">
            <Typography variant="h1" className="text-white">
              {metadata.title}
            </Typography>
            <Typography className="text-white mt-4">
              Written by {metadata.author}
            </Typography>
            {metadata.reviewdBy && (
              <Typography className="text-white">
                Reviewd by {metadata.reviewdBy}
              </Typography>
            )}
          </div>
        </div>
      </section>
      <section
        className={cn(
          "relative container grid",
          "lg:gap-x-16",
          "lg:grid-cols-[1fr_14rem]"
        )}
      >
        <div className={cn("grid xl:grid-cols-[14rem_1fr]", "lg:gap-x-16")}>
          <div>
            <div className="lg:sticky lg:top-4">
              <Typography className="font-bold">In this article</Typography>
              <div className="grid grid-cols-1 gap-2">
                {metadata.tableOfContents.map(
                  ({ heading, id }: { heading: string; id: string }) => {
                    //   console.log({ heading, id });
                    return <Link href={`#${id}`}>{heading}</Link>;
                  }
                )}
              </div>
            </div>
          </div>
          <div className={cn("mt-8", "xl:mt-0")}>
            {/* @ts-ignore:Unreachable code */}
            {MDXContent && <MDXContent components={{ ...blogComponents }} />}
          </div>
        </div>
        <div>
          <div className="lg:sticky lg:top-4">
            <Typography variant="h3" className="[&]:text-xl">
              Become a patient
            </Typography>
            <Typography className="[&]:text-base">
              Experience the Oak Street Health difference, and see what
              it&lsquo;s like to be treated by a care team who are experts at
              caring for older adults.
            </Typography>
            <Button
              className="mt-4"
              color="appointment"
              href="/request-an-appointment"
            >
              Request appointment
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Article;
