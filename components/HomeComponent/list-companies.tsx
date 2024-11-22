import React from "react";
import Foto from "@/app/images/ksdae.png";
import Foto2 from "@/app/images/gor.png";
import Foto3 from "@/app/images/krisbow.png";
import Foto4 from "@/app/images/kubota.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ListCompanies = () => {
  return (
    <div className="py-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-3xl tracking-tight text-[#2B75B3] text-center">
          Klien yang sudah percaya kami
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {/* LOGO 1 */}
            <Marquee speed={100}>
              <li>
                <Image
                  src={Foto}
                  className="size-20"
                  width={600}
                  height={600}
                  alt="Foto"
                />
              </li>
              {/* LOGO 2 */}
              <li>
                <Image
                  src={Foto2}
                  className="size-32 object-contain"
                  width={600}
                  height={600}
                  alt="Foto"
                />
              </li>
              <li>
                <Image
                  src={Foto3}
                  className="size-32 object-contain"
                  width={600}
                  height={600}
                  alt="Foto"
                />
              </li>
              <li>
                <Image
                  src={Foto4}
                  className="size-32 object-contain"
                  width={600}
                  height={600}
                  alt="Foto"
                />
              </li>
            </Marquee>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListCompanies;
