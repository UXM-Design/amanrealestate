"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      id: 1,
      image: "/client-image.jpg",
      name: "Anirud K",
      title: "Builder",
      message:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
    },
    {
      id: 2,
      image: "/client-image.jpg",
      name: "Anamika BS",
      title: "Project Manager",
      message:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
    },
    {
      id: 3,
      image: "/client-image.jpg",
      name: "Manoj tiwari",
      title: "Founder",
      message:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
    },
    {
      id: 4,
      image: "/client-image.jpg",
      name: "Carol Bish",
      title: "Project Manager",
      message:
        "Lorem ipsum dolor sit amet consectetur. Et suspendisse nibh purus urna commodo.",
    },
  ];

  return (
    <>
      <div className="md:w-[800px] w-[600px] h-auto flex justify-center items-center">
        <Slider {...settings} className="Slider">
          {reviews.map((review) => (
            <div key={review.id} className="SliderSli md:w-[340px] w-auto">
              <div className="bg-yellow-400 h-[400px] rounded-lg flex flex-col justify-center items-center gap-4">
                <Image
                  src={review.image}
                  className="rounded-full"
                  alt="client"
                  width={130}
                  height={130}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="text-2xl">{review.name}</h3>
                  <span className="text-sm uppercase tracking-wider">
                    {review.title}
                  </span>
                  <p className="px-1 text-wrap text-sm text-center">
                    {review.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ReviewCard;
