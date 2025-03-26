"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoArrowDownCircleOutline, IoArrowDownCircleSharp, IoMenu, IoSearch } from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { MdDownloadForOffline, MdDownloading } from "react-icons/md";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { ul } from "motion/react-client";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Split the pathname and get the last part
    const lastSegment = pathname?.split("/").filter(Boolean).pop();

    let path = `/${lastSegment || "home"}`;
    // Store the last word (segment) in the state
    setActiveItem(path);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="h-20  w-full"></div>
      <header
        className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="hidden md:flex md:py-7 shadow-xl items-center justify-between bg-white h-24  px-5 py-3 lg:px-20">
          <Link href={header?.href || "/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-[12vw] max-h-16 my-2 w-min object-contain "
            />
          </Link>
          <Menu
            navItemsArray={navItems}
            activeItemId={activeItem}
            onTop={isAtTop}
            onItemClick={handleNavItemClick}
          />
          <RightSide onTop={isAtTop} />
        </div>

        {/* Mobile Section */}
        <div
          className={`flex md:hidden w-screen items-center  justify-between h-20 px-3 bg-white`}
        >
          <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
            <Link href={header?.href || "/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[110px] object-contain"
              />
            </Link>
            {isMobileMenuOpen ? (
              <VscChromeClose
                onClick={handleMobileMenu}
                className="text-black"
              />
            ) : (
              <IoMenu onClick={handleMobileMenu} className="text-black" />
            )}
          </div>
          {/* <RightSide /> */}
        </div>

        {/* Mobile Menu */}

        <div
          className={`fixed h-screen left-0 top-20  md:hidden bg-white overflow-x-hidden duration-300 transition-all ${isMobileMenuOpen ? "!w-[88%]" : "!w-0"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            // navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItem}
            onItemClick={handleNavItemClick}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

function RightSide(onTop: any) {
  return (
    <Link href={"/"} className="w-max">
           
    <div className="flex  gap-2 border p-2 text-black hover:text-white font-medium  group relative bg-white overflow-hidden items-center flex-row h-full">
      <p className="ml-3 mr-1 z-20">Download &nbsp;Brochure</p>
      <IoArrowDownCircleSharp  className="text-brown2 text-3xl bg-white group-hover:text-black duration-200  rounded-full z-20" />

      <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
    </div>
</Link>


    
  );
}
