import blogComponents from "./blogComponents";
import { Typography } from "@/components";
import cn from "@/helpers/cn";

const Article = ({ metadata, MDXContent }) => {
  return (
    <article>
      <section className="pb-0 bg-primary">
        <div className={cn("container grid xl:grid-cols-[14rem_1fr_14rem]")}>
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
        className={cn("container pt-0 grid xl:grid-cols-[14rem_1fr_14rem]")}
      >
        <div></div>
        <div className="">
          {/* @ts-ignore:Unreachable code */}
          {MDXContent && <MDXContent components={{ ...blogComponents }} />}
        </div>
        <div></div>
      </section>
    </article>
  );
};

export default Article;
