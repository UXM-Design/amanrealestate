import React from "react";
import Link from "next/link";
import { WorkContainer } from "../_components/ui/work/workCards";
import ReviewPage from "../_components/ui/review/page";
import ContactPage from "../contact/page";
import FooterPage from "../_components/footer/page";

const page = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="flex w-full md:justify-between justify-center md:gap-0 gap-6 items-center md:flex-row flex-col md:px-6 px-4 md:h-[60vh] h-[30vh]">
          <h2 className="md:text-6xl text-3xl font-semibold">
            Explore our work <br className="md:block hidden" /> & projects
          </h2>
          <div className="flex flex-col gap-3 md:w-auto w-full">
            <p className="w-full">
              Showcasing our estimating projects{" "}
              <br className="md:block hidden" />
              that helped our clients
            </p>
            <Link
              className="md:px-4 px-2 py-4 w-auto bg-yellow-500 text-black rounded-md text-center"
              href={"/enquiry"}
            >
              Get Quote
            </Link>
          </div>
        </div>
        <WorkContainer />
        <ReviewPage />
        <ContactPage />
        <FooterPage />
      </div>
    </>
  );
};

export default page;
