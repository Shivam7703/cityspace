import { contactData } from '@/data/homeData'
import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import { LuCircleCheckBig } from 'react-icons/lu'

function Contactform() {
  return (
    <section className='lg:px-28 md:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex items-stretch flex-wrap justify-between gap-y-7'>
        <div className='md:w-[49%] w-full'>
  {contactData?.title && (
          <h2 className="text-black font-medium text-3xl md:text-5xl ">
            {contactData?.title}
          </h2>
        )}
        <ul className='space-y-4 mt-6'>
            {contactData?.points?.map((point)=>(
                <li key={point.id} className='flex group font-medium border-b pb-2 text-lg text-zinc-700 gap-3 sm:gap-4'><LuCircleCheckBig className='text-brown2 group-hover:animate-bounce sm:min-w-8 min-w-6 mt-2 text-3xl'/>
{point?.text}</li>
            ))}
        </ul>
        </div>
        <div className="md:w-[48%] md:sticky left-0 top-20 px-7 h-full py-10 w-full rounded-xl">
          <h4 className="text-green1 mb-3 font-bold text-sm rounded-lg w-max">
            Let's Cooperate Together
          </h4>
          <h2 className="text-zinc-900 mb-6 text-3xl md:text-5xl font-bold">
            Contact Us Today!
          </h2>
          <p className="text-zinc-600 mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            temporibus dicta delectus, et nemo fuga!
          </p>
          <form className="flex flex-wrap gap-y-6 py-3 justify-between">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="phone"
              placeholder="Your Contact No."
              className="w-full placeholder:text-zinc-500 py-3 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm rounded-3xl h-28 md:h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="flex shadow gap-2 p-2 mt-4 text-white font-bold rounded-[29px] group relative bg-green1 overflow-hidden items-center flex-row h-full"
            >
              <p className="ml-6 mr-4 z-20">Submit Now</p>
              <AiFillRightCircle className="text-yellow3 text-4xl bg-white group-hover:text-black duration-200 rounded-full z-20" />
              <div className="group-hover:w-full duration-300 h-full bg-yellow3 absolute z-10 w-0 top-0 right-0"></div>
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contactform
