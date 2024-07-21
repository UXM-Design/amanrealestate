import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const FooterPage = () => {
  return (
    <>
      <div className="w-full md:h-[60vh] h-auto flex md:flex-row flex-col xmd:justify-between justify-center items-center">
        <div className="w-full flex justify-center items-center flex-col md:py-0 py-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Get In Touch</h1>
            <p>+91 900 900 9000</p>
            <p>info@company.com</p>
          </div>
          <br />
          <div className="flex gap-6 py-2 justify-start">
            <FaFacebook className="text-xl text-yellow-400" />
            <FaInstagram className="text-xl text-yellow-400" />
            <FaTwitter className="text-xl text-yellow-400" />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-14 justify-center items-center md:py-0 py-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-700 font-semibold text-xl">Common</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>About</Link>
              </li>
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Service</Link>
              </li>
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-700 font-semibold text-xl">Company</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Blogs</Link>
              </li>
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Careers</Link>
              </li>
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Company policy</Link>
              </li>
              <li className="text-gray-500 hover:text-yellow-500">
                <Link href={"/"}>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full py-6 flex justify-center items-center bg-yellow-400 text-black">
        <span>All Rights Reserved By {"company"}. 2024 </span>
      </div>
    </>
  );
};

export default FooterPage;
