import React from "react";
import CompanyLogoOne from "@/../public/assets/company-logo-one.svg";
import Image from "next/image";

const AssociatesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="max-w-lg">
          <h2 className="h1">
            We accept Medicare and most Medicare Advantage plans.
          </h2>
          <p className="mt-4 h4 font-normal">
            We accept most major insurances, including Medicare and Medicare
            Advantage plans from these leading insurance brands.
          </p>
        </div>
        <div className="max-w-lg flex flex-row flex-wrap gap-10 justify-center">
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
