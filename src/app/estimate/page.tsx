import React from "react";
import ContactPage from "../_components/contact/page";
import FooterPage from "../_components/footer/page";
import ReviewPage from "../_components/ui/review/page";

const page = () => {
  const services = [
    {
      id: 1,
      title: "Electrical takeoff",
    },
    {
      id: 2,
      title: "Exterior Improvement Takeoff",
    },
    {
      id: 3,
      title: "Mechanical Takeoff",
    },
    {
      id: 4,
      title: "Plumbing Takeoff",
    },
    {
      id: 5,
      title: "Furnishing Takeoff",
    },
    {
      id: 6,
      title: "Equipment Takeoff",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center flex-col bg-[#f3f3f3]">
        <div className="w-full md:py-6 py-3 flex flex-col justify-center items-center gap-0 h-[40vh] ">
          <h1 className="text-center text-4xl font-semibold">
            Take off estimating 10x faster.
            <br />
            Win more work
          </h1>
          <p className="text-center text-base text-wrap w-[45vw] py-3">
            Meet deadlines and focus on the specification by spending less time
            tediously counting symbols.
          </p>
        </div>
        <div className="md:px-8 px-4 md:py-8 py-3 bg-white w-[80vw] h-auto rounded-xl">
          <div className="form-header">
            <h2 className="text-2xl font-semibold">Requirement</h2>
            <p>
              Fill and submit your form and get your estimate in less tha 48hrs
            </p>
          </div>
          <br />
          <form className="grid gap-4  w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="eg. James"
                className="w-full px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              />
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="eg. James@exmaple.com"
                className="w-full px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              />
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Phone Number
              </label>
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="eg. +91 "
                className="w-full px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              />
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Company Name
              </label>
              <input
                type="text"
                name="businessname"
                id="businessname"
                placeholder="eg. Ama Pvt Ltd "
                className="w-full px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              />
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500">
                Choose your service
              </label>
              <select
                required
                name="service"
                id="service"
                className="px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              >
                <option value="service" className="text-[#848484]">
                  Select your service
                </option>
                {services.map((item) => (
                  <option key={item.id} value="service">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500">
                Choose your service
              </label>
              <select
                required
                name="service"
                id="service"
                className="px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              >
                <option value="service" className="text-[#848484]">
                  Select your service
                </option>
                {services.map((item) => (
                  <option key={item.id} value="service">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500">
                Choose your service
              </label>
              <select
                required
                name="service"
                id="service"
                className="px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              >
                <option value="service" className="text-[#848484]">
                  Select your service
                </option>
                {services.map((item) => (
                  <option key={item.id} value="service">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500">
                Choose your service
              </label>
              <select
                required
                name="service"
                id="service"
                className="px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              >
                <option value="service" className="text-[#848484]">
                  Select your service
                </option>
                {services.map((item) => (
                  <option key={item.id} value="service">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500">
                Choose your service
              </label>
              <select
                required
                name="service"
                id="service"
                className="px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              >
                <option value="service" className="text-[#848484]">
                  Select your service
                </option>
                {services.map((item) => (
                  <option key={item.id} value="service">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <input
                type="submit"
                className="w-[334px] h-[48px] bg-yellow-400 text-black rounded-md cursor-pointer"
                value="Get Service Estimating"
              />
            </div>
          </form>
        </div>
        <br />
        <div className="w-full min-h-screen py-6 bg-white">
          <ReviewPage />
        </div>
      </section>
      {/* <ContactPage /> */}
      <FooterPage />
    </>
  );
};

export default page;
