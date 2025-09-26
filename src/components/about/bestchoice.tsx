import React from "react";
import { AiFillOpenAI } from "react-icons/ai";
import Marquee from "react-fast-marquee";
function Bestchoice() {
  return (
    <section className="static-bg  md:py-16 sm:py-12 py-7 ">
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-9 md:mb-14">
        <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
          <AiFillOpenAI />
        </div>
        <h4 className="text-brown2 text-sm font-bold">Your Best Choice</h4>
      </div>
      <Marquee
          className="w-full h-full"
          speed={120}
          pauseOnHover={true}
       
        >
         <h2 className="text-7xl sm:!text-[135px] !font-thin text-white !uppercase">
         Cityspace&nbsp; Contracts&nbsp; is&nbsp; Creating&nbsp; Modern, &nbsp; Innovative,&nbsp; Purposeful&nbsp; &&nbsp; Comfortable&nbsp; Spaces.&nbsp;
         </h2>
        </Marquee>
    </section>
  );
}

export default Bestchoice;
