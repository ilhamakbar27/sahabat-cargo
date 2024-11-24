"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./ui/sidebar";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 15) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "flex justify-between fixed lg:w-full shadow-md  max-md:gap-14 z-20 xl:z-[60] px-4  py-1 md:px-12 items-center",
        isScroll
          ? "bg-white shadow-md w-full transition-all ease-in-out duration-300"
          : "bg-white w-full"
      )}>
      <div className="flex text-center  justify-center items-center flex-col ">
        <Link href={"/"} passHref>
          <Image
            className="object-contain h-24  py-2 w-32 "
            width={600}
            height={400}
            src={
              "https://utfs.io/f/1T6lrtsFpELwp8Ez1IqMzy29cVnXes5bCQBAuUZFYgTrtvEG"
            }
            alt=""
          />
        </Link>
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
      <NavigationMenu className="lg:flex  hidden">
        <NavigationMenuList className="flex-justify-end  items-end ">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-[600]`}>
                <p className="font-[600]  tracking-tight  text-lg">Beranda</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/services" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-[600]`}>
                <p className="font-[600]  tracking-tight  text-lg">Layanan</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-[600]`}>
                <p className="font-[600]  tracking-tight text-lg">
                  Tentang kami{" "}
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuItem className="  flex items-end justify-end">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="text-white hover:text-[#174D99] hover:border-[#174D99]  hover:bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out font-bold  bg-[#164C9D] p-3 ">
              Hubungi Kami
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
      {/* <div className="container mx-auto flex justify-between items-center">
        <Image
          className="object-contain h-24  py-2 w-32 "
          width={600}
          height={400}
          src={
            "https://utfs.io/f/1T6lrtsFpELwp8Ez1IqMzy29cVnXes5bCQBAuUZFYgTrtvEG"
          }
          alt=""
        />
        <div className=" md:hidden">
          <Sidebar />
        </div>
        <ul className="flex max-md:hidden space-x-8">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300">
              Beranda
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition duration-300">
              Layanan
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300">
              Kontak
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
