"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineMenuOpen, MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handelOpen = () => {
    setIsOpen(true);
  };

  const handelClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop navigation menu  */}
      <div className="w-full p-4 flex md:flex-row flex-col md:gap-0 gap-6 md:justify-between justify-center items-center">
        <div className="logo md:block hidden">
          <h1>Logo</h1>
        </div>
        <div className="nav-desk md:flex hidden gap-6">
          <span className="text-sm uppercase tracking-wider font-medium text-gray-500 hover:text-yellow-500">
            <Link href={"/"}>Home</Link>
          </span>
          <span className="text-sm uppercase tracking-wider font-medium text-gray-500 hover:text-yellow-500">
            <Link href={"/"}>About</Link>
          </span>
          <span className="text-sm uppercase tracking-wider font-medium text-gray-500 hover:text-yellow-500">
            <Link href={"/"}>Service</Link>
          </span>
          <span className="text-sm uppercase tracking-wider font-medium text-gray-500 hover:text-yellow-500">
            <Link href={"/"}>Contact</Link>
          </span>
        </div>
        <div className="md:hidden flex w-full justify-between align-middle">
          <div className="logo ">
            <h1>Logo</h1>
          </div>
          <div
            onClick={handelOpen}
            className="md:hidden block text-2xl cursor-pointer"
          >
            <MdOutlineMenuOpen />
          </div>
        </div>
        {isOpen && (
          <>
            <div className="nav-mobile md:hidden w-full flex gap-3 flex-col h-screen overflow-y-hidden">
              <div className="link flex flex-col w-full justify-center h-[60vh] items-center gap-14">
                <div
                  onClick={handelClose}
                  className="block text-2xl cursor-pointer"
                >
                  <MdOutlineClose />
                </div>
                <span>
                  <Link href={"/"}>Home</Link>
                </span>
                <span>
                  <Link href={"/"}>About</Link>
                </span>
                <span>
                  <Link href={"/"}>Service</Link>
                </span>
                <span>
                  <Link href={"/"}>Contact</Link>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
