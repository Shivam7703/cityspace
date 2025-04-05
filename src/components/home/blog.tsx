"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Blogs() {
 

  const uniqueId = "blog123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className=" lg:px-28 md:p-20 sm:p-12 p-7 relative slider1 flex flex-col items-center">
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-7 md:mb-14">
              {blogData?.icon && (
                <div className="text-brown2 text-5xl p-3 rounded-full border-2 border-brown2 w-max">
                  {blogData.icon}
                </div>
              )}
              {blogData?.title1 && (
                <h4 className="text-brown2 text-sm font-bold">
                  {blogData.title1}
                </h4>
              )}
              {blogData?.title2 && (
                <h2 className="text-black text-3xl font-medium  md:text-6xl max-w-3xl">
                  {blogData.title2}
                </h2>
              )}
            </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 !mt-0 ${uniqueId}`}
      >
        {" "}
        {blogData?.blogs?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full p-3 "
          >
            <div className=" w-full h-full bg-white rounded-xl">
              <div className="relative rounded-3xl overflow-hidden w-full h-60">
                <Image
                  src={cards.img}
                  alt=""
                  className=" transition-all duration-500 w-full h-60 object-cover group-hover:scale-110  z-10"
                />
              </div>
              <div className="text-zinc-500 text-sm mt-2 font-medium">
                Published on: {cards.date}
              </div>
              <h3 className="text-xl font2 font-medium sm:text-2xl my-4 text-zinc-800 ">
                {cards.title}
              </h3>
              <p className="text-zinc-600 text-base !tracking-wide border-b pb-4">{cards.text.slice(0,160)}....</p><br />
              <Link href={`blogs/${encodeURIComponent(cards?.title)}`} className="flex items-center gap-x-2 group/link">
              <p className="text-sm text-black sm:font-extrabold">READ MORE</p> 
              <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl bg-white group-hover/link:rotate-45 duration-300" />
            </Link>
              </div>
          </SwiperSlide>
        ))}
     
      </Swiper>

     
    </section>
  );
}
