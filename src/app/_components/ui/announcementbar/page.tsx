import React from "react";
import Link from "next/link";

const AnnouncementBar = () => {
  const items = [
    {
      id: 1,
      title: "Electrical Takeoff",
    },
    {
      id: 2,
      title: "Mechanical Takeoff",
    },
    {
      id: 3,
      title: "Plumbing Takeoff",
    },
    {
      id: 4,
      title: "Furnishing Takeoff",
    },
    {
      id: 5,
      title: "Equipment Takeoff",
    },
    // {
    //   id: 6,
    //   title: "Exterior Improvement Takeoff",
    // },
  ];

  return (
    <>
      <div className="w-full text-[#d2d2d2] bg-[#353535] overflow-x-hidden py-3 text-sm px-2 uppercase tracking-wider">
        <div className=" announcement-scroll-container flex justify-center items-center gap-8 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="scroll-wrapper text-sm hover:animate-pulse hover:text-white"
            >
              <Link href="" className="scrollLink">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnnouncementBar;
