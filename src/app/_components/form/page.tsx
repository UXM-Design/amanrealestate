"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormPage = () => {
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

  const property = [
    {
      id: 1,
      type: "Construction",
    },
    {
      id: 2,
      type: "Exterior",
    },
    {
      id: 3,
      type: "Apartment",
    },
    {
      id: 4,
      type: "Apartment",
    },
    {
      id: 5,
      type: "Building",
    },
  ];

  const days = [
    {
      id: 1,
      days: "15 Days",
    },
    {
      id: 2,
      days: "25 Days",
    },
    {
      id: 3,
      days: "35 Days",
    },
    {
      id: 4,
      days: "45 Days",
    },
  ];

  const router = useRouter();

  // const handelClick = (e) => {
  //   // alert("From submited");
  //   e.preventdefault;
  //   router.push("/estimate");
  // };

  return (
    <>
      <div className="w-[430px] h-auto md:px-12 px-2 py-6 rounded-lg bg-white flex flex-col gap-3 drop-shadow-lg">
        <div className="form-title">
          <h1 className="text-2xl font-medium">
            Generate your project estimator <br /> within 5 Min
          </h1>
        </div>
        <form method="post" action={"/estimate"}>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-gray-500">
              Choose your service
            </label>
            <select
              required
              name="service"
              id="service"
              className="px-3 py-2 rounded-md border-[#6565650] placeholder:text-[#656565]"
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
          <br />
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-gray-500">
              Property Type
            </label>
            <select
              required
              name="service"
              id="service"
              className="px-2 py-2 rounded-md border-[#6565650] placeholder:text-[#656565]"
            >
              <option value="service" className="text-[#848484]">
                Select your porperty
              </option>
              {property.map((item) => (
                <option key={item.id} value="service">
                  {item.type}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-gray-500">
              Choose your service
            </label>
            <select
              required
              name="service"
              id="service"
              className="px-2 py-2 rounded-md border-[#6565650] placeholder:text-[#656565]"
            >
              <option value="service" className="text-[#848484]">
                Timeline
              </option>
              {days.map((item) => (
                <option key={item.id} value="service">
                  {item.days}
                </option>
              ))}
            </select>
          </div>
          <br />
          <input
            type="submit"
            className="w-[334px] h-[48px] bg-yellow-400 text-black rounded-md cursor-pointer"
            value="Get Service Estimating"
          />
        </form>
        <Link href="/" className="text-center mt-2 text-sm">
          Schedule A Call With Our Expert.{" "}
          <span className="text-blue-600">Click Here</span>
        </Link>
      </div>
    </>
  );
};

export default FormPage;
