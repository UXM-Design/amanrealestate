"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

const ReviewPage = () => {
  return (
    <>
      <div className="w-full md:h-screen h-auto md:py-0 py-12 flex justify-center flex-col items-center bg-yellow-100">
        <div className="md:h-full h-auto w-full flex justify-center items-center flex-col">
          <span className="text-lg uppercase tracking-wider">Testimonial</span>
          <h2 className="text-center text-4xl font-semibold ">
            See what our clints have <br className="md:block hidden " /> to say
            about us
          </h2>
        </div>

        {/* review slider  */}
        <ReviewSlider />
      </div>
    </>
  );
};

export default ReviewPage;

function ReviewSlider() {
  return (
    <>
      <div className="w-full md:h-full h-auto md:py-0 py-6 flex justify-center items-center">
        <Swiper
          className=" flex justify-center items-center w-[400px] h-auto px-0 py-2"
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="w-auto h-full flex justify-center items-center rounded-lg md:px-0 px-0 ">
            <div className="w-full h-full flex justify-center items-center  rounded-md relative bg-yellow-400 overflow-hidden ">
              <ReviewCard
                logo="KI"
                position="Builder & CEO"
                name="Kia Iris"
                message="We are happy to get your services"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto h-full flex justify-center items-center rounded-lg md:px-0 px-0 ">
            <div className="w-auto h-full flex justify-center items-center  rounded-md relative bg-yellow-400 overflow-hidden ">
              <ReviewCard
                logo="M"
                position="Managing Director"
                name="Maya Kumari"
                message="I recently used Archolnfra for their real-estate estimating services, and I must say, I was thoroughly impressed. From start to finish, the experience was professional and efficient."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto h-full flex justify-center items-center rounded-lg md:px-0 px-0 ">
            <div className="w-auto h-full flex justify-center items-center  rounded-md relative bg-yellow-400 overflow-hidden ">
              <ReviewCard
                logo="MK"
                position="Project Manager"
                name="Manoj Kumar"
                message="I recently used the services of Archolnfra for a construction project, and I must say, I was highly impressed. Their team provided accurate estimations on construction, labor, machinery, mechanics, and other takeoffs. The level of detail and precision in their work was commendable."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto h-full flex justify-center items-center rounded-lg md:px-0 px-0 ">
            <div className="w-auto h-full flex justify-center items-center  rounded-md relative bg-yellow-400 overflow-hidden ">
              <ReviewCard
                logo="DE"
                position="Builder"
                name="Jay Deshet"
                message="Their team prepared detailed estimations on construction, labor, machines, mechanics, and other takeoffs that were accurate and well-researched. This saved me a lot of time and hassle in preparing my own estimates."
              />
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}

interface ReviewCardProps {
  logo: string;
  name: string;
  position: string;
  message: string;
}

function ReviewCard({ logo, name, message, position }: ReviewCardProps) {
  return (
    <>
      <div className="w-[380px] px-6 py- h-[320px] bg-white rounded-md hover:shadow-lg border flex justify-center items-center">
        <div>
          <div className="logo w-[48px] h-[48px] flex justify-center items-center bg-yellow-200 text-black rounded-full">
            <div className="profileLogo">{logo}</div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl mt-2">{name}</p>
            <p className="my-2">{position}</p>
            <hr />
            <p className="w-[320px] text-sm mt-3">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import ReviewCard from "../reviewcard/page";

// const ReviewPage = () => {
//   return (
//     <>
//       <div className="w-full md:h-[40vh] h-[60vh] flex flex-col justify-center items-center gap-4">
//         <span className="tracking-wider">Testimonials</span>
//         <h1 className="text-4xl text-center md:text-nowrap text-wrap">
//           See what our clients tell <br className="md:block hidden" /> about{" "}
//           <br className="md:hidden block" />
//           <mark className="px-2">our service</mark>
//         </h1>
//       </div>
//       <div className=" relative review-section bg-white">
//         <div className="content-card flex justify-center items-center">
//           <h1 className="text-[16vw] text-black/[0.1] font-semibold tracking-tight">
//             Testimonial
//           </h1>
//         </div>
//         <div className="w-full overflow-hidden absolute h-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] md:flex  justify-center items-center">
//           <ReviewCard />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReviewPage;
