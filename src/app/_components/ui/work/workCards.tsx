import React from "react";
import Image from "next/image";
import Link from "next/link";
import { url } from "inspector";
import imageone from "/machinework.avif";
import imagetwo from "/electricwork.avif";

const WorkCards = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-start items-center">
        <div className="w-full flex flex-col justify-center items-start px-4 h-[50vh]">
          <span className="uppercase tracking-widest font-semibold ">
            Our Work
          </span>
          <h2 className="my-3 md:text-6xl text-2xl font-semibold selection:bg-yellow-400 ">
            Some Of Our Work that helped <br className="md:block hidden" /> our
            clients win more{" "}
          </h2>
        </div>
        <WorkContainer />
      </div>
    </>
  );
};

export default WorkCards;

// Work Container Area
const works = [
  {
    id: 1,
    service: "Machine TakeOff",
    title: "Machine Estimating for Mac Bilders",
    year: "2023",
    image: imageone,
    altimage: "People discusing",
  },
  {
    id: 2,
    service: "Electrical TakeOff",
    title: "How we saved BVO Construction in Electical Works",
    year: "2024",
    image: imagetwo,
    altimage: "Electrical poll",
  },
  {
    id: 3,
    service: "Electrical TakeOff",
    title: "How we saved BVO Construction in Electical Works",
    year: "2024",
    image: imagetwo,
    altimage: "Electrical poll",
  },
  {
    id: 4,
    service: "Electrical TakeOff",
    title: "How we saved BVO Construction in Electical Works",
    year: "2024",
    image: imagetwo,
    altimage: "Electrical poll",
  },
];

export function WorkContainer() {
  return (
    <>
      <div className="w-full h-auto grid overflow-hidden md:grid-cols-2 grid-cols-1 px-4 gap-3">
        {works.map((work) => (
          <div key={work.id} className="relative w-full h-auto  ">
            <Image
              src={work.image}
              alt={work.altimage}
              width={1000}
              height={800}
              className="w-full h-full overflow-hidden object-cover object-center"
            />
            <div className="absolute text-white bottom-0 left-0 flex justify-start items-end bg-black/75  w-full h-full">
              <div className="md:px-10 px-4 py-8">
                <span className="uppercase tracking-wider">{work.service}</span>
                <h2 className="text-2xl my-4">{work.title}</h2>
                <div className="flex gap-10">
                  <p>{work.year}</p>
                  <Link
                    className="text-yellow-300 font-normal text-sm"
                    href={"/work"}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
