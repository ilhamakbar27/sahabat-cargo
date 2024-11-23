"use client";
import Image from "next/image";
import React from "react";

import ship from "../../images/ship-bg.jpg";

const HeroService = () => {
  return (
    <div className="w-full    mx-auto  ">
      <div className=" object-cover relative group ">
        <Image
          className=" w-full  md:h-[330px] h-[200px] object-cover"
          src={ship}
          width={800}
          height={500}
          placeholder="blur"
          alt="Background image"
        />
        <div className="w-full flex justify-center pt-20 flex-col gap-5 max-md:gap-1 text-white font-semibold text-5xl  md:text-6xl lg:px-20 opacity-100 transition-all duration-300 bg-black/40  absolute h-full top-0 ">
          <p
            className="tracking-tighter max-md:text-2xl 
            text-4xl max-md:px-5 max  font-bold">
            Produk dan layanan
          </p>
          <h1 className="text-[24px]    transition-all ease-in animate-in fade-in duration-700  font-[700] max-md:px-5     max-md:text-3xl font-200">
            Berbagai produk dan layanan kami siap mempermudah Anda dalam
            mengirimkan barang.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
