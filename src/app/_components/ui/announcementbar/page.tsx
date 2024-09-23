import React from "react";
import Link from "next/link";

const AnnouncementBar = () => {
  return (
    <>
      <div className="w-full text-white bg-black  py-3 text-sm px-2 uppercase flex justify-center items-center tracking-wider">
        <span className="text-center">30% OFF on first order</span>
      </div>
    </>
  );
};

export default AnnouncementBar;
