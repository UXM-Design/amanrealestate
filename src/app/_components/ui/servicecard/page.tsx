"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ServiceCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const services = [
    {
      id: 1,
      image: "/mechnical.png",
      title: "Mechanical Takeoff",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
      linkTo: "/service",
    },
    {
      id: 2,
      image: "/mechnical.png",
      title: "Mechanical Takeoff",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
      linkTo: "/service",
    },
    {
      id: 3,
      image: "/mechnical.png",
      title: "Mechanical Takeoff",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
      linkTo: "/service",
    },
    {
      id: 4,
      image: "/mechnical.png",
      title: "Mechanical Takeoff",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
      linkTo: "/service",
    },
    {
      id: 5,
      image: "/mechnical.png",
      title: "Mechanical Takeoff",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
      linkTo: "/service",
    },
  ];

  return (
    <>
      <div className="md:w-[800px] w-auto h-auto flex justify-center items-center md:py-0 py-8">
        <Slider {...settings} className="Slider">
          {services.map((service) => (
            <div key={service.id} className="SliderSli">
              <div className="flex drop-shadow-sm hover:scale-105 transition-all cursor-pointer rounded-md justify-center gap-6 items-center flex-col w-[100%] md:h-[420px] h-[330px] bg-white">
                <Image
                  src={service.image}
                  width={180}
                  height={180}
                  alt="service image"
                  className="rounded-full sm:w-[180px] w-[80px] sm:h-[180px] h-[80px]"
                />
                <div className="flex flex-col justify-center items-start gap-2 md:px-6 px-4 md:py-4">
                  <h3 className="md:text-lg text-base uppercase text-left tracking-wider">
                    {service.title}
                  </h3>
                  <p className="md:text-sm text-[10px]">
                    {service.description}
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
    </>
  );
};

export default ServiceCard;
