"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "@/app/style/slider.module.css";

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    centerMode: true,
    // variableWidth: true,
    fade: true,
    cssEase: "linear",
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      id: 1,
      image: "/bannerone.jpg",
      title: "Construction TakeOFF",
    },
    {
      id: 2,
      image: "/bannertwo.jpg",
      title: "Project TakeOFF",
    },
  ];

  return (
    <>
      <div className=" w-full md:h-full h-auto md:py-12 py-0 flex justify-center items-center">
        <Slider
          {...settings}
          className="w-[800px] h-[450px] py-8 flex justify-center items-center"
        >
          <div className="flex relative px-0 w-full h-full">
            <Image
              src={"/bannerone.jpg"}
              width={800}
              height={800}
              alt="Banner"
              className=" w-full h-full md:object-cover object-cover"
            />
            <div className="w-full h-44  flex flex-col justify-center items-center absolute bottom-0 left-0 translate-[-50%, -%50] bg-black/30 text-white">
              <h3 className="text-3xl font-medium">Construction TakeOFF</h3>
            </div>
          </div>
          <div className="flex relative px-0 w-full h-full">
            <Image
              src={"/bannertwo.jpg"}
              width={800}
              height={400}
              alt="Banner"
              className=" w-full h-[400px] md:object-cover object-cover"
            />
            <div className="w-full h-44 flex flex-col justify-center items-center absolute bottom-0 left-0 translate-[-50%, -%50] bg-black/30 text-white">
              <h3 className="text-3xl font-medium">Construction TakeOFF</h3>
            </div>
          </div>
          <div className="flex relative px-0 w-full h-full">
            <Image
              src={"/bannerone.jpg"}
              width={800}
              height={400}
              alt="Banner"
              className=" w-full h-[400px] md:object-cover object-cover"
            />
            <div className="w-full h-44  flex flex-col justify-center items-center absolute bottom-0 left-0 translate-[-50%, -%50] bg-black/30 text-white">
              <h3 className="text-3xl font-medium">Construction TakeOFF</h3>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderPage;
