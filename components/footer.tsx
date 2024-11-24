import Image from "next/image";
import React from "react";

import { Instagram } from "lucide-react";

import { FacebookIcon } from "lucide-react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <Image
            className="object-contain size-32"
            width={600}
            height={400}
            src={
              "https://utfs.io/f/1T6lrtsFpELwp8Ez1IqMzy29cVnXes5bCQBAuUZFYgTrtvEG"
            }
            alt="Company Logo"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-3 max-md:col-span-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Pengiriman Kargo Terpercaya
                </h2>
                <div className="col-span-1">
                  <p className="mt-4  text-gray-500">
                    Kami memastikan barang Anda tiba dengan aman dan tepat waktu
                    ke berbagai tujuan di seluruh indonesia Percayakan logistik
                    Anda kepada kami.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex pt-3 justify-end col-span-6 gap-4 items-end  text-black font-bold ">
              <Link
                target="_blank"
                className="hover:scale-125 hover:-translate-y-0.5 transition-all duration-300"
                href={"https://www.instagram.com/pd.cargo/"}>
                <Instagram size={40} />
              </Link>
              <Link
                target="_blank"
                className="hover:scale-125 hover:-translate-y-0.5 transition-all duration-300"
                href={
                  "https://www.facebook.com/people/Putraduniacargo/61568261789599/?mibextid=LQQJ4d&rdid=kO0r9n9hRTgz5XeY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12AswCdwR1F%2F%3Fmibextid%3DLQQJ4d"
                }>
                <FacebookIcon size={40} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-12 flex-col gap-1">
          <p className=" text-sm text-gray-500">
            Jl. KH Mas Mansyur No. 25 Kompleks Said Naum Kebon Kacang Tanah
            Abang Jakarta pusat
          </p>
          <p className="text-sm text-gray-500">
            &copy; 2024 Putra Dunia Cargo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
