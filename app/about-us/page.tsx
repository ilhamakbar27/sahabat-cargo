import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import ship from "../images/ship-bg.jpg";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1  mt-6 sm:hidden lg:block">
              <Image
                src={ship}
                width={2000}
                height={600}
                className="rounded-xl "
                alt="Background image"
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-indigo-600 text-xl tracking-tighter font-semibold">
                Tentang kami
              </h3>
              <p className="text-gray-800 tracking-tight text-3xl max-w-lg font-semibold sm:text-4xl">
                Solusi Logistik Terbaik Bersama Putra Dunia Cargo
              </p>
              <p className="mt-3 text-gray-600">
                Kami menyediakan layanan pengiriman barang yang handal dan
                efisien untuk kebutuhan logistik Anda. Dengan pengalaman
                bertahun-tahun, kami berkomitmen untuk memberikan kepuasan
                pelanggan melalui solusi pengiriman yang cepat, aman, dan
                terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
