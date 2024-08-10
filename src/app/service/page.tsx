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
            <h1 className="text-4xl font-semibold">
              Build better with our perfect estimation{" "}
            </h1>
            <p className="text-wrap whitespace-pre-wrap text-center w-1/2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus voluptatum doloribus nostrum veniam omnis,
              corporis odio, provident, illo vero in? Autem eveniet ipsum cum
              laudantium voluptatem non necessitatibus earum deleniti est.
              Molestiae quae, hic voluptates accusamus pariatur nemo
              necessitatibus!
            </p>
          </div>
          <span className="text-black hover:text-yellow-500 w-full flex justify-center items-center">
            <MdKeyboardDoubleArrowDown className="text-4xl animate-pulse" />
          </span>
        </div>
        <div className="w-full h-screen flex justify-center  items-center bg-white">
          {/* {services.map((service) => (
            <div
              key={service.id}
              className="w-[340px] h-auto  flex flex-col bg-white hover:scale-110 border-slate-700 border-2  text-center hover:drop-shadow-md gap-4  justify-center flex-wrap p-6 rounded-lg items-start text-black"
            >
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p className="w-auto text-wrap text-left text-sm">
                {service.shortdescription}
              </p>
              <Link href={service.linkTo} className="text-black">
                Learn More
              </Link>
            </div>
          ))} */}
          <div className="bg-white w-[100%] h-screen flex px-4 justify-center items-center">
            <Slider {...settings} className="Slider">
              {services.map((service) => (
                <div key={service.id} className="SliderSli">
                  <div className="flex drop-shadow-sm hover:scale-105 transition-all cursor-pointer rounded-md justify-center gap-6 items-center flex-col w-[100%] md:h-[420px] h-[330px] bg-white">
                    <div className="flex flex-col justify-center items-start gap-2 md:px-6 px-4 md:py-4">
                      <h3 className="md:text-lg text-base uppercase text-left tracking-wider">
                        {service.name}
                      </h3>
                      <p className="md:text-sm text-[10px]">
                        {service.shortdescription}
                      </p>
                      <Link
                        href={service.linkTo}
                        className="text-left text-yellow-500 text-sm"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <ContactPage />
        <FooterPage />
      </section>
    </>
  );
};

export default Service;
