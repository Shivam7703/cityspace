"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {  sliderText } from "@/utils/motion";
import { sliderContent } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong, FaCircleChevronRight } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { GoStarFill } from "react-icons/go";

export default function HomeBanner() {
  const uniqueId = "banner123";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay,  EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section  className="swiperstyle1 relative">
      <Swiper {...swiperOptions} className="mySwiper ">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden ">
            <HomeBannerCard
              img={item?.img}
              title={item?.title}
              welcome={item?.welcome}
              btntext={item?.btntext}
              para={item?.para}
              key={currentSlide} // Re-trigger animation when slide changes
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next absolute z-30 p-3 bg-white hover:bg-brown2 hover:text-white text-black !right-20 !bottom-24  max-md:!hidden`}
      >
        <FaArrowRightLong className="!text-xl font-bold"/>
      </div>
      <div
        className={`${uniqueId}-prev absolute z-20 bg-white p-3 hover:bg-brown2 hover:text-white text-black !right-32 !bottom-24  max-md:!hidden`}
      >
        <FaArrowLeftLong className="!text-xl font-bold"/>
      </div>
    </section>
  );
}

function HomeBannerCard({
  img, 
  title,
  para,
  welcome,
  btntext,
}: any) {
  return (
    <div className="relative w-full overflow-hidden  text-white md:h-[105vh] min-h-[520px]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />
 

      <div className="absolute top-0 left-0 items-center justify-center w-full h-full z-10 bg-[#00000078] grid grid-cols-2 max-md:pb-10 md:grid-cols-3   gap-y-10   lg:p-24 sm:p-12 px-7 pt-12 pb-11">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, delay: 0.2 }}
          className="col-span-2 flex h-full w-full flex-col max-w-[890px] max-md:text-center justify-center gap-6 md:px-11 max-md:items-center"
        ><div className="flex items-center"><GoStarFill  className="animate-x1 p-3 text-5xl text-white rounded-full bg-brown2"/>

          <h4 className="text-white text-xs sm:!text-sm px-4 py-2 rounded-full border ">{welcome}</h4></div>
          <h1 className="inline-block !leading-[1.1] text-4xl font-medium md:text-[88px] ">
            {title} 
          </h1>
          <p className="-mt-1 !mb-4 md:text-xl text-zinc-100 font-medium ">{para}</p>
          <Link href={"/contact-us"} className="w-max">
           
                 <div className="flex  gap-2 p-2 text-black hover:text-white font-bold rounded-[29px] group relative bg-white overflow-hidden items-center flex-row h-full">
                   <p className="ml-5 mr-3 z-20">{btntext}</p>
                   <FaCircleChevronRight className="text-brown2 text-4xl bg-white group-hover:text-black duration-200  rounded-full z-20" />
           
                   <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
                 </div>
          </Link>
        </motion.div>
      
      </div>
    </div>
  );
}

