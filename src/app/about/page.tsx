import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import TeamCard from "../_components/teamcard";
import ReviewPage from "../_components/ui/review/page";
import ContactPage from "@/app/_components/contact/page";
import FooterPage from "../_components/footer/page";

const page = () => {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col gap-3 justify-center items-center overflow-hidden">
        <div className="flex h-screen flex-col gap-3 justify-center align-middle text-center">
          <h1 className="text-[12vh] font-semibold selection:text-yellow-500 leading-tight">
            About us
          </h1>
          <span className="text-sm text-center text-gray-700 uppercase tracking-wider">
            Build better with our perfect estimation
          </span>
          <br />
          <span className="text-black hover:text-yellow-500 w-full flex justify-center items-center">
            <MdKeyboardDoubleArrowDown className="text-4xl animate-pulse" />
          </span>
        </div>
        <div className="second-section-about w-full min-h-screen flex flex-col gap-3 justify-center items-center">
          <div className="md:w-1/2 w-auto md:px-0 px-6">
            <h2 className="text-[3.4rem] text-wrap leading-tight selection:text-white">
              We’re commited to fostering and estimating better quotes that fits
              everyone
            </h2>
          </div>
        </div>
        <div className="w-full md:min-h-screen h-auto md:py-0 py-12 md:px-0 px-4 flex md:flex-row flex-col gap-8 md:justify-between justify-center items-center">
          <div
            className="w-full flex justify-center items-center
            "
          >
            <div className="flex flex-col justify-center items-center md:px-8">
              <h2 className="text-4xl font-semibold text-left w-full">
                Vision
              </h2>
              <br />
              <p className="text-sm w-full  py-2">
                Our vision is to become a leading force in the construction
                industry by continuously innovating the way projects are
                estimated and designed.
              </p>
              <p className="text-sm w-full  py-2">
                We strive to empower our clients with the most accurate data and
                creative designs that not only meet the functional needs of
                their projects but also enhance the quality and sustainability
                of their investments.
              </p>
              <p className="text-sm w-full  py-2">
                We envision a future where every construction project—large or
                small—benefits from transparent cost forecasting, cutting-edge
                design solutions, and seamless execution.
              </p>
            </div>
          </div>
          <div
            className="w-full md:h-screen h-[30vh] bg-black text-yellow-500  flex justify-center items-center
            "
          >
            <h1 className="md:text-[2.5vw] text-3xl  selection:text-white selection:border-b-2 border-gray-800">
              Providing value for <br /> better{" "}
              <span className="text-white">wining</span>
            </h1>
          </div>
        </div>
        <div className="w-full md:min-h-screen h-auto md:py-0 py-12 md:px-0 px-4 flex md:flex-row flex-col gap-8 md:justify-between justify-center items-center">
          <div
            className="w-full md:h-screen h-[30vh] bg-slate-100 text-black  flex justify-center items-center
            "
          >
            <h1 className="md:text-[2.5vw] text-3xl selection:text-black selection:border-b-2 border-gray-800">
              To provide scalable
              <br /> and{" "}
              <span className="text-black font-serif">profitable quotaion</span>
            </h1>
          </div>
          <div
            className="w-full flex justify-center items-center
            "
          >
            <div>
              <h2 className="text-4xl font-semibold">Mission</h2>
              <p className="text-sm md:w-2/3 w-full py-2">
                Our mission is to deliver exceptional construction estimating
                and design services that foster trust, transparency, and value.
                We aim to support our clients through every phase of their
                projects by providing precise, timely, and cost-effective
                solutions. By combining our expertise with the latest industry
                tools and a deep understanding of each client’s unique
                requirements, we ensure the highest level of service and
                satisfaction.
              </p>
              {/* <p className="text-sm md:w-2/3 w-full py-2">
                We are dedicated to maintaining the integrity of our work,
                helping our clients make informed decisions, and bringing their
                construction visions to life with quality, efficiency, and
                reliability.
              </p>
              <p className="text-sm md:w-2/3 w-full py-2">
                Our main aim is to make the project win for our client to
                provide their estimate without waiting for long to quotes.
              </p> */}
            </div>
          </div>
        </div>
        <section className="w-full md:h-screen h-auto md:py-0 py-12 flex flex-col justify-center items-center">
          <h1 className="md:py-6 py-3 text-4xl font-semibold">
            Our Team Members
          </h1>
          <br />
          <div className="h-auto flex md:flex-col flex-row justify-center items-center ">
            <TeamCard />
          </div>
        </section>
        <section className="w-full md:h-screen h-auto md:block">
          <ReviewPage />
        </section>
        <ContactPage />
        <FooterPage />
      </main>
    </>
  );
};

export default page;
