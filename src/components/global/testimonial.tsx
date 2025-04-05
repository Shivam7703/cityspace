"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
  const uniqueId = "test123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
      },

      924: {
        slidesPerView: 2,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <section className=" lg:px-28 md:p-20 sm:p-14 p-6 relative ">
      <div className="w-full flex flex-wrap justify-between items-end !gap-y-4 mb-10 md:mb-16">
        <div className="max-w-[760px] space-y-7">
          {testimonialData?.title1 && (
            <h4 className=" border text-brown2  pl-2 pr-5 font-bold text-sm rounded-full py-2 w-max">
              ● &nbsp; {testimonialData?.title1}
            </h4>
          )}
          {testimonialData?.title2 && (
            <h2 className="text-black font-medium  text-4xl md:text-6xl ">
              {testimonialData?.title2}
            </h2>
          )}
        </div>
        <div className="flex gap-4">
          <div
            className={`${uniqueId}-prev bg-white p-3 border hover:bg-brown2 hover:text-white text-black `}
          >
            <FaArrowLeftLong className="!text-xl font-bold" />
          </div>
          <div
            className={`${uniqueId}-next  p-3 bg-white border hover:bg-brown2 hover:text-white text-black `}
          >
            <FaArrowRightLong className="!text-xl font-bold" />
          </div>
        </div>
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full  mx-auto p-5 ${uniqueId}`}
      >
        {" "}
        {testimonialData?.testimonials?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left p-4 sm:p-10 rounded-3xl border border-zinc-400 shadow-sm"
          >
            <div className=" w-full  h-full overflow-hidden  group  ">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
              ★★★★★
              </h3>
              <p className="font-medium text-base text-zinc-600 !leading-normal pb-5 border-b border-zinc-400">
                "{cards.text}"
              </p>

              <div className="flex gap-3 w-max items-center mt-5">
                <div className="relative overflow-hidden h-16 w-16 rounded-full">
                  <Image
                    src={cards.img}
                    alt=""
                    className=" transition-all duration-500 w-full h-full rounded-full object-cover group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-xl  font-semibold font2  text-brown2">
                    {cards.title}
                  </h3>
                  <p className="text-zinc-600 text-sm">Happy Client</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </section>
  );
}
