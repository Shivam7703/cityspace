import { banner, banner2 } from "@/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { ourService } from "@/data/homeData";

function Aside({title}:{title :string}) {
  return (
    <>
     <div className="border-2 font-medium  border-brown2 p-5 md:p-9 rounded-2xl ">
<h3 className="md:text-3xl text-xl border-b pb-3 text-black font2">Our Services</h3>
<ul className="space-y-2 mt-4 ">
{ourService?.cards?.map((service) => (
  <li
    key={service?.id}
    className={service?.heading === title ? "text-brown2" : "hover:text-brown2 text-zinc-700"}
  >
    <Link href={`/services/${encodeURIComponent(service?.heading || '')}`}>{service?.heading}</Link>
  </li>
))}
</ul>
     </div>

{/* 2nd part */}
     <div   className="lg:h-[420px]  relative md:h-96 h-72 w-full group rounded-3xl overflow-hidden"
                 >
                   <Image
                     src={banner}
                     alt=""
                     className="w-full h-full object-cover absolute z-10 top-0 left-0 group-hover:scale-110 duration-300"
                   />
                   <div className="absolute z-20 w-full group-hover:backdrop-blur-none backdrop-blur-sm p-10 flex  text-white items-end h-full bg-gradient-to-t from-black to-black/0 top-0 left-0 transition-all">
                     <div>
                       <h4 className=" text-sm font-extrabold text-brown2">modern & luxurious
                       </h4>
                       <h2 className=" sm:text-4xl text-3xl  mt-2 font-medium">{title}</h2>
                     </div>
                    
                   </div>
                 </div>


{/* 3rd section */}
                 <div   className="lg:h-[520px]  relative md:h-96 h-72 w-full group rounded-3xl overflow-hidden"
                 >
                   <Image
                     src={banner2}
                     alt=""
                     className="w-full h-full object-cover absolute z-10 top-0 left-0 group-hover:scale-110 duration-300"
                   />
                   <div className="absolute z-20 w-full group-hover:backdrop-blur-none backdrop-blur-sm p-10 flex  text-white items-end h-full bg-gradient-to-t from-black via-black/50 to-black/0 top-0 left-0 ">
                     <div>
                       <h4 className=" text-sm font-extrabold text-brown2">Download now!
                       </h4>
                       <h2 className=" sm:text-4xl text-3xl  mt-3 font-medium">Download Brochure</h2>
                       <p className="text-sm mt-4 mb-5 !leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum officiis sint?</p>
                    
                       <Link href={"/"} className="max-w-fit">
           
           <div className="flex  gap-2 p-2 max-w-fit rounded-3xl text-black hover:text-white font-medium  group/btn relative bg-white overflow-hidden items-center flex-row h-full">
             <p className="ml-4 mr-1 font-semibold text-sm z-20">DOWNLOAD </p>
             <IoArrowDownCircleSharp  className="text-brown2 text-3xl bg-white group-hover/btn:text-black duration-200 rounded-full z-20" />
       
             <div className="group-hover/btn:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
           </div>
       </Link>

    </div>
                   </div>
                 </div>
    </>
  );
}

export default Aside;
