import React from "react";
import CompanyLogoOne from "@/../public/assets/company-logo-one.svg";
import Image from "next/image";
import cn from "@/helpers/cn";
import { Typography } from "@/components";

const AssociatesSection = () => {
  return (
    <section>
      <div
        className={cn("container flex flex-col justify-between", "lg:flex-row")}
      >
        <div className="max-w-lg">
          <Typography variant="h2">
            We accept Medicare and most Medicare Advantage plans.
          </Typography>
          <Typography className="mt-8">
            We accept most major insurances, including Medicare and Medicare
            Advantage plans from these leading insurance brands.
          </Typography>
        </div>
        <div className="mt-8 max-w-lg flex flex-row flex-wrap gap-10 lg:justify-center lg:mt-0">
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          <Image
            src={CompanyLogoOne}
            alt="company's logo"
            className="h-10 w-fit snap-center"
          />
          {/* <CompanyLogoOne /> */}
        </div>
      </div>
    </section>
  );
};

export default AssociatesSection;
