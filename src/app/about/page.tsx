import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import TeamCard from "../_components/teamcard";
import ReviewPage from "../_components/ui/review/page";
import ContactPage from "@/app/_components/contact/page";
import FooterPage from "../_components/footer/page";

const page = () => {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col gap-3 justify-center items-center">
        <div className="flex h-screen flex-col gap-3 justify-center align-middle text-center">
          <h1 className="text-[12vh] font-semibold selection:text-yellow-500 leading-tight">
            About us
          </h1>
          <span className="text-sm text-gray-700 uppercase tracking-wider">
            Build better with our perfect estimation
          </span>
          <br />
          <span className="text-black hover:text-yellow-500 w-full flex justify-center items-center">
            <MdKeyboardDoubleArrowDown className="text-4xl animate-pulse" />
          </span>
        </div>
        <div className="second-section-about w-full min-h-screen flex flex-col gap-3 justify-center items-center">
          <div className="w-1/2">
            <h2 className="text-[3.4rem] text-wrap leading-tight selection:text-white">
              We’re commited to fostering and estimating better quotes that fits
              everyone
            </h2>
          </div>
        </div>
        <div className="w-full min-h-screen flex md:flex-row flex-col gap-3 md:justify-between justify-center items-center">
          <div
            className="w-full flex justify-center items-center
            "
          >
            <div>
              <h2 className="text-4xl font-semibold">Vision</h2>
              <p className="text-sm md:w-1/2 w-full py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, amet!
              </p>
              <br />
              <hr />
              <br />
              <ol className="text-sm space-y-2">
                <li className="py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                  01. Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                  02. Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                  03. Lorem ipsum dolor sit amet consectetur.
                </li>
              </ol>
            </div>
          </div>
          <div
            className="w-full h-screen bg-black text-yellow-500  flex justify-center items-center
            "
          >
            <h1 className="text-[2.5vw] selection:text-white selection:border-b-2 border-gray-800">
              Providing value for <br /> better{" "}
              <span className="text-white">wining</span>
            </h1>
          </div>
        </div>
        <div className="w-full min-h-screen flex md:flex-row flex-col gap-3 md:justify-between justify-center items-center">
          <div
            className="w-full h-screen bg-slate-100 text-yellow-500  flex justify-center items-center
            "
          >
            <h1 className="text-[2.5vw] selection:text-black selection:border-b-2 border-gray-800">
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
              <p className="text-sm md:w-1/2 w-full py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, amet!
              </p>
              <br />
              <hr />
              <br />
              <ol className="text-sm space-y-2">
                <li className="py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                  01. Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                  02. Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                  03. Lorem ipsum dolor sit amet consectetur.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <section className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="md:py-6 py-3 text-4xl font-semibold">
            Our Team Members
          </h1>
          <br />
          <div className="">
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
