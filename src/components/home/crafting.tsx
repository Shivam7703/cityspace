"use client";
import { useState, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { crafting } from "@/data/homeData";
import { banner2 } from "@/assets";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Craft() {
  const [currImg, setCurrImg] = useState(banner2);
  const [prevImg, setPrevImg] = useState(banner2);

  const [animationKey, setAnimationKey] = useState(0);
  const uniqueId = "crft123";

  const handleImageChange = (newImage: any) => {
    if (newImage !== currImg) {
      setPrevImg(currImg);
      setCurrImg(newImage);
      setAnimationKey(prevKey => prevKey + 1); // Increment key to force re-render
    }
  };

  return (
    <section className="md:pt-20 sm:p-16 p-7 !pb-4 text-center relative slider1">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <Image
        src={prevImg}
            alt="Background Image"
            className="w-full h-full object-cover"
            layout="fill"
          />

        <div 
          key={animationKey} 
          className="w-full h-full absolute top-0 left-0 animate-expand-from-bottom"
        >
          <Image
            src={currImg}
            alt="Background Image"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>
      </div>
      
      <div className="absolute top-0 left-0 bg-[#0000008a] -z-10 h-full w-full">
      </div>

      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-20 md:mb-24">
        {crafting?.icon && (
          <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
            {crafting.icon}
          </div>
        )}
        {crafting?.title1 && (
          <h4 className="text-brown2 text-sm font-bold">
            {crafting.title1}
          </h4>
        )}
        {crafting?.title2 && (
          <h2 className="text-white text-3xl md:text-6xl max-w-xl">
            {crafting.title2}
          </h2>
        )}
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          140: { slidesPerView: 1 },
          508: { slidesPerView: 2 },
          824: { slidesPerView: 3 },
          1160: { slidesPerView: 4 },
        }}
        className={`mySwiper w-full max-w-fit mt-0 ${uniqueId}`}
      >
        {crafting?.slides?.map((card) => (
          <SwiperSlide
            key={card.id}
            onMouseOver={() => handleImageChange(card.img)}
            className="w-full group md:min-h-80 min-h-60 text-center float-end border-r border-zinc-500 relative"
          >
            <div className="w-full flex p-6 md:p-10 flex-col md:h-24 h-full absolute bottom-8 duration-500 overflow-hidden items-center z-20 group-hover:h-full">
              <h5 className="text-3xl font2 my-4 text-white">
                {card.heading}
              </h5>
              <p className="text-zinc-300 text-base mb-6">
                {card.text}
              </p>
              <Link href="/services">
                <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-5xl bg-white hover:rotate-45 duration-300" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      
    </section>
  );
}