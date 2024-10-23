"use client";
import React from "react";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import ServiceCard from "../_components/ui/servicecard/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ContactPage from "../_components/contact/page";
import FooterPage from "../_components/footer/page";
import ServiceSlider from "../_components/ui/servicecard/serviceSlider";
import ReviewPage from "../_components/ui/review/page";
import WorkCards from "../_components/ui/work/workCards";

const Service = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    {
      id: 1,
      name: "Equipment takeoff",
      shortdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deseruntcum ad beatae molestiae architecto ipsum placeat sapiente animicorrupti accusantium",
      linkTo: "/services/equipment-takeoff",
    },
    {
      id: 2,
      name: "Mechanical takeoff",
      shortdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deseruntcum ad beatae molestiae architecto ipsum placeat sapiente animicorrupti accusantium",
      linkTo: "/services/mechanical-takeoff",
    },
    {
      id: 3,
      name: "Electrical takeoff",
      shortdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deseruntcum ad beatae molestiae architecto ipsum placeat sapiente animicorrupti accusantium",
      linkTo: "/services/electrical-takeoff",
    },
    {
      id: 4,
      name: "Electrical takeoff",
      shortdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deseruntcum ad beatae molestiae architecto ipsum placeat sapiente animicorrupti accusantium",
      linkTo: "/services/electrical-takeoff",
    },
    {
      id: 5,
      name: "Electrical takeoff",
      shortdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deseruntcum ad beatae molestiae architecto ipsum placeat sapiente animicorrupti accusantium",
      linkTo: "/services/electrical-takeoff",
    },
    {
      id: 6,
      name: "Electrical takeoff",
      shortdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deseruntcum ad beatae molestiae architecto ipsum placeat sapiente animicorrupti accusantium",
      linkTo: "/services/electrical-takeoff",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen  flex flex-col justify-center items-center">
        <div className="servicebg w-full h-screen flex flex-col justify-evenly gap-4 items-center">
          <div className=" w-full flex flex-col space-y-3 justify-center items-center">
            <span className="text-base uppercase">Our Services</span>
            <h1 className="text-4xl text-center font-semibold">
              Build better with our perfect estimation{" "}
            </h1>
            <p className="text-wrap whitespace-pre-wrap text-center md:w-1/2 w-auto md:px-0 px-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus voluptatum doloribus nostrum veniam omnis,
              corporis odio, provident, illo vero in? Autem eveniet ipsum cum
              laudantium voluptatem non necessitatibus earum deleniti est.
              Molestiae quae, hic voluptates accusamus pariatur nemo
              necessitatibus!
            </p>
            <br />
            <div className="flex gap-10 md:flex-row flex-col justify-center items-center">
              <Link
                href="/enquiry"
                className="px-12 py-3 bg-black  text-white rounded-md hover:shadow-lg ease-in duration-300 hover:-translate-y-3"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-yellow-500  text-yellow-500 rounded-md hover:shadow-lg ease-in duration-300 hover:-translate-y-3"
              >
                Schedule A Call
              </Link>
            </div>
          </div>
          <span className="text-black hover:text-yellow-500 w-full flex justify-center items-center">
            <MdKeyboardDoubleArrowDown className="text-4xl animate-pulse" />
          </span>
        </div>
        <div className="w-full h-screen flex justify-center  items-center bg-white">
          <ServiceSlider />
        </div>
        <WorkCards />
        <ContactPage />
        <FooterPage />
      </section>
    </>
  );
};

export default Service;
