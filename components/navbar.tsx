import Image from "next/image";
import React from "react";
import { Sidebar } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="bg-white  shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          className="object-contain h-24  py-2 w-28 "
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
      </div>
    </nav>
  );
};

export default Navbar;
