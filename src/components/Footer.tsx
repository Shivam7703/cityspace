"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import { logo } from "@/assets";

export default function Footer({ footer }: any) {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      {/* WhatsApp Button */}
      <a className="w-max fixed bottom-8 z-50 right-3 rounded-full bg-white" href="#">
        <RiWhatsappFill className="text-5xl text-green-600" />
      </a>

      {/* Book Site Visit Button */}
      <div
        style={{
          padding: "7px 10px 23px",
          transform: "rotate(-90deg)",
          right: "10px",
          top: "35vh",
          zIndex: 40,
          width: "200px",
          transformOrigin: "right center",
        }}
        className="cursor-pointer rounded-lg  text-white hover:bg-black fixed text-center bg-brown2 font-medium text-lg"
        onClick={toggleForm}
      >
        Book A Site Visit
      </div>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed top-0 left-0 z-[230] flex flex-col items-center justify-center bg-black/70"
          style={{ width: "100vw", height: "104vh" }}
        >
          <div
            className="text-white mb-2 cursor-pointer border-2 border-white rounded-full px-3 py-1"
            onClick={toggleForm}
          >
            ✕
          </div>
          <form
            className="bg-zinc-100 p-7 rounded-lg shadow-lg w-[90vw] max-w-[600px]"
            action="submit.php"
            method="POST"
          >
            <div className="flex items-center justify-between mb-5">
              <Image src={logo} alt="City Space" width={150} height={80} className="mr-3 w-[25vw] max-w-[100px]" />
              <h2 className="text-xl sm:text-2xl text-brown2 font-bold w-max">Book A Site Visit</h2>
            </div>

            <div className="w-full flex flex-wrap gap-y-3 justify-between">
              <input
                type="text"
                required
                name="name"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Name"
              />
              <input
                type="email"
                required
                name="email"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Email"
              />
              <input
                type="number"
                required
                name="phone"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Contact No."
              />
              <textarea
                rows={3}
                name="query"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Query"
              ></textarea>
              <button
                type="submit"
                className="bg-brown2 hover:bg-black transition duration-300 text-white font-bold py-3 px-6 rounded-lg mt-2"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer Section */}
      <footer className="md:px-20 sm:p-16 sm:pb-8 p-6 w-full z-20 text-white bg-blue1 relative">
        <div className="grid grid-cols-3 pb-5 sm:grid-cols-6 gap-8 lg:grid-cols-12">
          {/* Logo and About */}
          <div className="col-span-3 md:px-5 pb-4">
            <Image
              src={footer?.logo}
              alt="logo"
              className="max-w-44 w-[80vw] object-contain"
              width={150}
              height={50}
            />
            <p className="w-full text-base mt-3 text-white">{footer?.text}</p>

            {/* Social Links */}
            {footer?.socials && (
              <div className="flex gap-3 md:gap-x-4 mt-4 md:mt-8 text-xl text-white">
                {footer?.socials?.facebook && (
                  <FaFacebook className="hover:text-brown2 duration-300" onClick={() => window.open(footer?.socials?.facebook, "_blank")} />
                )}
                {footer?.socials?.instagram && (
                  <AiFillInstagram className="hover:text-brown2 duration-300" onClick={() => window.open(footer?.socials?.instagram, "_blank")} />
                )}
                {footer?.socials?.linkedin && (
                  <FaLinkedinIn className="hover:text-brown2 duration-300" onClick={() => window.open(footer?.socials?.linkedin, "_blank")} />
                )}
                {footer?.socials?.youtube && (
                  <TbBrandYoutubeFilled className="hover:text-brown2 duration-300" onClick={() => window.open(footer?.socials?.youtube, "_blank")} />
                )}
                {footer?.socials?.twitter && (
                  <FaXTwitter className="hover:text-brown2 duration-300" onClick={() => window.open(footer?.socials?.twitter, "_blank")} />
                )}
              </div>
            )}
          </div>

          {/* Link Sections */}
          {[footer?.list1, footer?.list2].map((list, idx) => (
            <div key={idx} className="col-span-3 md:px-5 flex flex-col gap-y-3">
              <h4 className="my-2 text-base border-b pb-2 font-semibold">{list?.title}</h4>
              <ul className="space-y-2">
                {list?.links?.map((d: any, i: number) => (
                  <li key={i}>
                    <Link href={`/${d?.href?.replace(/^\/+/, '')}`} className="text-base text-white hover:text-brown2 duration-300">
                      - {d?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-3 md:px-5 flex flex-col space-y-3">
            <h4 className="my-2 text-base border-b pb-2 font-semibold">Contact Us</h4>
            <p className="text-base text-white"><strong>Phone: </strong> <a href="tel:+919667622285">+91 9667622285
            </a></p>
            <p className="text-base text-white"><strong>E-mail: </strong> <a href="mailto:info@cityspace.construction">info@cityspace.construction</a></p>
            <p className="text-base text-white capitalize leading-relaxed"><strong>Address: </strong><a href="https://www.google.com/maps/place/Cityspace/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">2nd Floor, M Block Market, Greater Kailash 2, M 32, W Block Rd, New Delhi, Delhi 110048</a></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex border-t max-sm:mt-4 border-white sm:pt-9 pt-5 text-center">
          <p className="w-max mx-auto text-sm">
            {footer?.copyrightText}{" "}
            <span className="hover:text-brown2 transition-all font-semibold cursor-pointer">
            <a href="https://shivam-s-port-v2zr.vercel.app/">Shivam Kumar Goyal</a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
