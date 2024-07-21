import React from "react";
import ReviewCard from "../reviewcard/page";

const ReviewPage = () => {
  return (
    <>
      <div className="w-full md:h-[40vh] h-[60vh] flex flex-col justify-center items-center gap-4">
        <span className="tracking-wider">Testimonials</span>
        <h1 className="text-4xl text-center md:text-nowrap text-wrap">
          See what our clients tell <br className="md:block hidden" /> about{" "}
          <br className="md:hidden block" />
          <mark className="px-2">our service</mark>
        </h1>
      </div>
      <div className=" relative review-section bg-white">
        <div className="content-card flex justify-center items-center">
          <h1 className="text-[16vw] text-black/[0.2] font-semibold tracking-tight">
            Testimonial
          </h1>
        </div>
        <div className="w-full overflow-hidden absolute h-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] md:flex hidden justify-center items-center">
          <ReviewCard />
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
