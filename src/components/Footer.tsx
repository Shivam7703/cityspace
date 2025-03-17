"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

export default function Footer({ footer }: any) {
  return (
    <>
      <footer className="md:px-20 sm:p-16 p-6  w-full z-20  text-white bg-[#2B3C3E]  relative">
        {/* NewsLetter Section  */}

        {/* Footer links section  */}
        <div className="grid grid-cols-3 pb-5 sm:grid-cols-6 gap-8 lg:grid-cols-12">
          <div className="col-span-3 md:px-5 pb-4">
            <Image
              src={footer?.logo}
              alt="logo"
              className="max-w-44 w-[80vw] object-contain"
            />
            <p className=" w-full text-base mt-3 text-white  ">
              {footer?.text}
            </p>
            {/* Socials  */}
            {footer?.socials && (
              <div className="flex  gap-3 md:gap-x-4 md:mt-8 mt-4  text-xl text-white">
                {footer?.socials?.facebook && (
                  <FaFacebook
                    className=" hover:text-brown2  duration-300 "
                    onClick={() =>
                      window.open(footer?.socials?.facebook, "_blank")
                    }
                  />
                )}
                {footer?.socials?.instagram && (
                  <AiFillInstagram
                    className="hover:text-brown2  duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.instagram, "_blank")
                    }
                  />
                )}
                {footer?.socials?.linkedin && (
                  <FaLinkedinIn
                    className="hover:text-brown2  duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.linkedin, "_blank")
                    }
                  />
                )}
                {footer?.socials?.youtube && (
                  <TbBrandYoutubeFilled
                    className="hover:text-brown2  duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.youtube, "_blank")
                    }
                  />
                )}
                {footer?.socials?.twitter && (
                  <FaXTwitter
                    className="hover:text-brown2  duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.twitter, "_blank")
                    }
                  />
                )}
              </div>
            )}
          </div>
          <div className="col-span-3 md:px-5  flex flex-col gap-y-3">
            <h4 className="my-2 text-base border-b pb-2 font-semibold">
              {footer?.list2?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list2?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-white duration-300 hover:text-brown2 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 md:px-5  flex flex-col gap-y-3">
            <h4 className="my-2 text-base border-b pb-2   font-semibold">
              {footer?.list1?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list1?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-white duration-300 hover:text-brown2 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col space-y-3  col-span-3 md:px-5 ">
            <h4 className="my-2 text-base border-b pb-2  font-semibold">
              {footer?.newLetter?.title}
            </h4>
            <p className=" transition:all text-base text-white ">
              <strong>Phone: </strong>&nbsp;+91 1234567890
            </p>
            <p className=" transition:all text-base text-white duration-300 hover: hover:text-main ">
              <strong>E-mail: </strong>&nbsp;info@cityspace.in
            </p>
            <p className="capitalize transition:all text-base !leading-[1.7] text-white duration-300 hover: hover:text-main ">
              <strong>Address: </strong>&nbsp;a-60, sector-58, noida, up-201301,
              uttar pradesh
            </p>
          </div>
        </div>
        {/* copyright  */}
        <div className="flex border-t max-sm:mt-4 border-white sm:pt-12 pt-5 text-center">
          <p className="w-max mx-auto text-sm">
            {footer?.copyrightText}{" "}
            <span className="hover:text-brown2  transition-all font-semibold cursor-pointer">
              Lorem.
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
