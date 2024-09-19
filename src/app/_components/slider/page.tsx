"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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

  const reviews = [
    {
      id: 1,
      image: "/bannerone.jpg",
    },
    {
      id: 2,
      image: "/bannertwo.jpg",
    },
  ];

  return (
    <>
      <div className=" w-full h-full flex justify-center items-center">
        <Slider {...settings} className="Slider">
          {reviews.map((review) => (
            <div key={review.id} className="SliderSli w-full h-[350px]">
              <Image
                src={review.image}
                className=" w-full h-full object-cover"
                alt="banner"
                width={300}
                height={300}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderPage;
