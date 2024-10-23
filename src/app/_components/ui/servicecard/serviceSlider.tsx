"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

import style from "@/app/style/serviceslider.module.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function ServiceSlider() {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className={style.swiper}
      >
        <div
          slot="container-start"
          className={style.parallaxbg}
          //   style={{
          //     backgroundImage:
          //       "https://new.downloader.la/images/AdobeStock-cg7rGpsuFX.jpg",
          //   }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className={style.swiperslide}>
          <div className="title" data-swiper-parallax="-300">
            01
          </div>
          <div className="subtitle text-4xl" data-swiper-parallax="-200">
            Machine Takeoff
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-sm font-regular md:w-[60vw] w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
            <br />
            <div className="">
              <Link
                href={"/contact"}
                className="text-lg font-medium px-8 py-3 bg-yellow-400 text-black rounded-md "
              >
                Schedule A Meeting
              </Link>
            </div>
            <div
              className="title mt-8 opacity-55 hover:opacity-100 ease-in duration-200"
              data-swiper-parallax="-300"
            >
              Swipe for more services
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <div className="title" data-swiper-parallax="-300">
            02
          </div>
          <div className="subtitle text-4xl" data-swiper-parallax="-200">
            Construction Takeoff
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-sm font-regular md:w-[60vw] w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
            <br />
            <div className="">
              <Link
                href={"/contact"}
                className="text-lg font-medium px-8 py-3 bg-yellow-400 text-black rounded-md "
              >
                Schedule A Meeting
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <div className="title" data-swiper-parallax="-300">
            03
          </div>
          <div className="subtitle text-4xl" data-swiper-parallax="-200">
            Electrical Takeoff
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-sm font-regular md:w-[60vw] w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
            <br />
            <div className="">
              <Link
                href={"/contact"}
                className="text-lg font-medium px-8 py-3 bg-yellow-400 text-black rounded-md "
              >
                Schedule A Meeting
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
