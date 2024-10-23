import React from "react";
import Image from "next/image";
import FormPage from "../form/page";
import { FaPhone } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-auto md:py-12 flex justify-center items-center flex-col relative">
        <div className="bg-red-300 rounded-lg w-[90vw] md:h-[70vh] h-[90vh] flex justify-center items-center relative">
          <Image
            src={"/herobgone.png"}
            alt="Consuction Elevation Image"
            className="w-full h-full object-cover bg-no-repeat bg-center  rounded-lg"
            width={800}
            height={400}
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black/65 rounded-lg text-white flex md:justify-between justify-center md:flex-row flex-col md:gap-0 gap-6 items-center px-6 py-4 ">
            <div className="w-full pt-32">
              <span className="px-6 py-3 rounded-full bg-black/40">
                Web Elevation
              </span>
              <h1 className="md:text-4xl text-3xl m-0 my-6 font-bold tracking-tight text-white">
                Win more projects with <br /> right estimation
              </h1>
              <p className="text-sm md:w-[40vw] w-full m-0 text-gray-200">
                From project evaluation, takeoff and estimating, to construction
                and closeout, contractors use STACK’s cloud-based software to
                help run their businesses and maximize profits.
              </p>
            </div>
            <div className="px-4 py-4 md:w-[450px] w-[360px] rounded-lg bg-white flex justify-center items-center">
              <ShortForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

export function ShortForm() {
  return (
    <>
      <div className="flex flex-col text-black relative">
        <h2 className="">
          Have question? <br />
          Schedule a call with us
        </h2>
        <div className="absolute md:block hidden -top-10 right-5 p-6 rounded-full bg-yellow-400 shadow-md">
          <FaPhone className="text-black" />
        </div>
        <br />
        <form className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-[320px] h-[54px] border border-gray-400 rounded-md"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-[320px] h-[54px] border border-gray-400 rounded-md"
          />
          <input
            type="datetime-local"
            name="date"
            id="date"
            placeholder="Select your date"
            className="w-[320px] h-[54px] border border-gray-400 rounded-md"
          />
          <input
            type="submit"
            name="button"
            id="button"
            value={"Schedule Meeting"}
            className="w-[320px] h-[54px] border-none bg-yellow-500 text-black rounded-md"
          />
        </form>
      </div>
    </>
  );
}
