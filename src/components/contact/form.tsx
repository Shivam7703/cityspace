import { contactData } from '@/data/homeData'
import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import { LuCircleCheckBig } from 'react-icons/lu'

function Contactform() {
  return (
    <>
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
        <div className="md:w-[48%] md:sticky left-0 top-20 p-10 h-full  w-full  bg-blue1">
  <h4 className="text-yellow3 mb-2 text-sm font-bold">
  Let's Cooperate Together
          </h4>
          <h2 className="text-white text-3xl md:text-6xl max-w-xl">
          Contact Us Today!
          </h2>            
         <div className='w-full border  mt-3 mb-6'></div>
          <form className="flex flex-wrap gap-y-6 py-3 text-white justify-between">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-3 placeholder:text-zinc-300 px-4 bg-[#ffffff08] backdrop-blur-sm sm:w-[48%] "
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-3 placeholder:text-zinc-300 px-4 bg-[#ffffff08] backdrop-blur-sm sm:w-[48%] "
              required
            />
            <input
              type="phone"
              placeholder="Your Contact No."
              className="w-full placeholder:text-zinc-300 py-3 px-4 bg-[#ffffff08] backdrop-blur-sm sm:w-[48%] "
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-3 placeholder:text-zinc-300 px-4 bg-[#ffffff08] backdrop-blur-sm sm:w-[48%] "
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full py-3 placeholder:text-zinc-300 px-4 bg-[#ffffff08] backdrop-blur-sm  h-28 md:h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="flex shadow gap-2 p-2 mt-4 text-white font-bold  group relative border  overflow-hidden items-center flex-row h-full"
            >
              <p className="ml-6 mr-4 z-20">Submit Now</p>
              <AiFillRightCircle className="text-brown2 text-4xl bg-white group-hover:text-black duration-200 rounded-full z-20" />
              <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
            </button>
          </form>
        </div>
    </section>

    <section  className="border-zinc-300 sm:border-y max-sm:my-8">
      <div className="w-full px-4   sm:px-12 mx-auto flex flex-wrap sm:gap-y-12  justify-between">
        {contactData?.details?.map((counts: any) => (
          <div
            key={counts?.id}
            className=" max-md:px-3 py-6 flex max-sm:text-center gap-5 md:py-14 max-sm:flex-col max-sm:items-center border-zinc-300 group last:border-none lg:border-r sm:w-1/3 w-full md:px-8"
          >
            <div className='min-w-16 h-16  rounded-full flex items-center justify-center bg-brown2 group-hover:bg-blue1 duration-200 text-3xl text-white'>{counts?.icon}</div>
             <div>
            <h3
              className={`font-medium text-xl sm:text-[29px] sm:mb-3  text-black font2 `}
            >
              {counts?.para}
            </h3>
            <a href={counts?.slug1}> <p className="text-zinc-600 mb-1 text-base ">{counts?.text}</p></a>
            <a href={counts?.slug2}> <p className="text-zinc-600  text-base">{counts?.text2}</p></a>
            </div>
          </div>
        ))}
      </div>
    
    </section>
    </>
  )
}

export default Contactform
