'use client'
import React from "react";
import ContactPage from "../_components/contact/page";
import FooterPage from "../_components/footer/page";
import ReviewPage from "../_components/ui/review/page";
import TextInput from "../_components/ui/TextInput";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculate } from "@/actions/calculate/calculate";

export interface IMaterial {
  description: string;
  grade: string;
  length: number;
  height: number;
  breadth: number;
}

interface IMaterialCalculate {
  name: string;
  email: string;
  mobile: string;
  materials: IMaterial[]
}

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

  const schema = yup
    .object({
      name: yup
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(20, "Name shouldn't be more than 20 characters")
        .required("Please enter your name"),
      email: yup.string().email("Invalid email").required("Email is Required"),
      mobile: yup.string().required("Mobile is Required"),
      materials: yup
        .array()
        .of(
          yup.object({
            description: yup
              .string()
              .required("Description is required"),
            grade: yup
              .string()
              .required("Grade is required"),
            length: yup
              .number()
              .required("Length is required")
              .positive("Length must be a positive number"),
            height: yup
              .number()
              .required("Height is required")
              .positive("Height must be a positive number"),
            breadth: yup
              .number()
              .required("Breadth is required")
              .positive("Breadth must be a positive number"),
          })
        )
        .required("Items array is required"),
    })
    .required();

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'materials',
  });

  const onSubmit = async (data: IMaterialCalculate) => {

    console.log('Cming')
    const response = await calculate(data.name, data.email, data.mobile, data.materials);

    if (response.status === 200) {
      alert('done')
    }

  };

  console.log(errors)
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4  w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {/*  <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="s"
                className="w-full px-3 py-2 rounded-md border-[1px] border-[#6565650] placeholder:text-[#656565]"
              />
            </div> */}
              <TextInput
                type="text"
                name="name"
                label="Full Name"
                id="name"
                placeholder="Eg: James"
                register={register}
                error={errors.name}
              />
              <TextInput
                type="email"
                name="email"
                label="Email Address"
                id="email"
                placeholder="Eg: james@example.com"
                register={register}
                error={errors.email}
              />

              <TextInput
                type="tel"
                name="mobile"
                label="Phone Number"
                id="mobile"
                placeholder="Eg: +919XXXXXXXX"
                register={register}
                error={errors.mobile}
              />
            </div>


            {fields.map((material, index: number) => (
              <div key={material.id} className="grid gap-4  w-full sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
                <TextInput
                  type="text"
                  name={`materials[${index}].description`}
                  label="Description"
                  id={`description-${index}`}
                  placeholder="Enter description"
                  register={register}
                  error={errors.materials?.[index]?.description}
                />
                <TextInput
                  type="text"
                  name={`materials[${index}].grade`}
                  label="grade"
                  id={`grade-${index}`}
                  placeholder="Enter Grade"
                  register={register}
                  error={errors.materials?.[index]?.grade}
                />
                <TextInput
                  type="number"
                  name={`materials[${index}].length`}
                  label="Length"
                  id={`length-${index}`}
                  placeholder="Enter length"
                  register={register}
                  error={errors.materials?.[index]?.length}
                />
                <TextInput
                  type="number"
                  name={`materials[${index}].height`}
                  label="Height"
                  id={`height-${index}`}
                  placeholder="Enter height"
                  register={register}
                  error={errors.materials?.[index]?.height}
                />
                <TextInput
                  type="number"
                  name={`materials[${index}].breadth`}
                  label="Breadth"
                  id={`breadth-${index}`}
                  placeholder="Enter breadth"
                  register={register}
                  error={errors.materials?.[index]?.breadth}

                />

                {/* Remove Item Button */}
                <button type="button" onClick={() => remove(index)}>Remove Item</button>

              </div>
            ))}

            {/* Add Item Button */}
            <button
              type="button"
              onClick={() => append({ description: '', grade: '', length: 0, height: 0, breadth: 0 })}
            >
              Add Item
            </button>

            {/* <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <label htmlFor="name" className="text-gray-500 text-sm">
                Description
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
            </div> */}
            <div className="text-center py-3 px-3 rounded-sm flex flex-col justify-center items-start gap-4">
              <input
                type="submit"
                className="w-[334px] h-[48px] bg-yellow-400 text-black rounded-md cursor-pointer"
                value="Get Service Estimating"
              />
            </div>
          </form>
        </div >
        <br />
        <div className="w-full min-h-screen py-6 bg-white">
          <ReviewPage />
        </div>
      </section >
      {/* <ContactPage /> */}
      < FooterPage />
    </>
  );
};

export default page;
