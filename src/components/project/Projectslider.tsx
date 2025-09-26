"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Projectslider() {
     const uniqueId = "pro123";

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

      524: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
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
    <section className=" lg:px-28 md:px-20 sm:px-14 p-6 relative ">
         <div className="w-full flex flex-wrap justify-between items-end !gap-y-4 mb-10 md:mb-16">
           <div className="max-w-[760px] space-y-7">
             {projectData?.title1 && (
               <h4 className=" border text-brown2  pl-2 pr-5 font-bold text-sm rounded-full py-2 w-max">
                 ● &nbsp; OTHER PROJECTS
               </h4>
             )}
             {projectData?.title2 && (
               <h2 className="text-black font-medium  text-4xl md:text-6xl ">
                 {projectData?.title2}
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
           className={`mySwiper w-full sm:mb-12 mx-auto p-5 ${uniqueId}`}
         >
           {" "}
           {projectData?.projects?.map((pro: any) => (
             <SwiperSlide
               key={pro.id}
               className="w-full text-left rounded-3xl border border-zinc-400 shadow-sm"
             >
               <Link
                    href={"/projects/detail"}
             >
              <div  className=" relative md:h-80 h-64 w-full group rounded-3xl overflow-hidden">
              <Image
                src={pro?.img}
                alt=""
                className="w-full object-cover h-full absolute z-10 top-0 left-0 group-hover:scale-110 duration-300"
              />
              <div className="absolute z-20 w-full sm:p-8 p-6 flex justify-between text-white items-end h-full bg-gradient-to-t from-[#000000ce] to-transparent top-0 left-0 ">
              
                <div>
                  <div
                    className="flex gap-2 w-full justify-between items-center group/link"
                  >
                                      <h2 className="sm:text-3xl text-2xl">{pro.title}</h2>

                    <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl sm:text-3xl bg-white group-hover/link:rotate-45 duration-300" />
                  </div>
                </div>
              </div>
              </div>
            </Link>
             </SwiperSlide>
           ))}
         </Swiper>    
       </section>
  )
}

export default Projectslider
