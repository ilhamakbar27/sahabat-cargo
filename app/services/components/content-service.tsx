// "use client";

import React from "react";
import { FaShip } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";
import { PiTruckTrailerFill } from "react-icons/pi";
// import AOS from "aos";
// import "aos/dist/aos.css";

const dataService = [
  {
    id: 3,
    serviceName: "Jasa Cargo Darat",
    description:
      "Jasa pengiriman barang yang cepat dengan menggunakan jalur darat yang menjangkau seluruh Indonesia dengan berbiaya murah.",
    category: "Cargo",
    transportationMode: "Darat",
    priceRange: "Murah",
    icon: <FaShippingFast />,
    coverage: "Seluruh Indonesia",
  },
  {
    id: 2,
    serviceName: "Jasa Cargo Udara",
    description:
      "Jasa pengiriman barang yang cepat dengan menggunakan jalur udara yang menjangkau seluruh Indonesia dengan berbiaya murah.",
    category: "Cargo",
    transportationMode: "Udara",
    icon: <BsAirplaneFill />,
    priceRange: "Murah",
  },
  {
    id: 1,
    serviceName: "Jasa Cargo Laut",
    description:
      "Jasa pengiriman barang yang cepat dengan menggunakan jalur laut yang menjangkau seluruh Indonesia dengan berbiaya murah.",
    category: "Cargo",
    transportationMode: "Laut",
    icon: <FaShip />,
    priceRange: "Murah",
    coverage: "Seluruh Indonesia",
  },
  {
    id: 4,
    serviceName: "Jasa Kirim Kendaraan",
    description:
      "Jasa pengiriman kendaraan roda dua dan empat ke seluruh Indonesia dengan berbiaya murah.",
    category: "Kendaraan",
    transportationMode: "Darat",
    priceRange: "Murah",
    icon: <MdLocalShipping />,
    coverage: "Seluruh Indonesia",
  },
  {
    id: 5,
    serviceName: "Jasa Kirim Alat Berat",
    description:
      "Jasa pengiriman alat berat yang menjangkau ke seluruh Indonesia dengan berbiaya murah.",
    category: "Alat Berat",
    transportationMode: "Darat/Laut",
    priceRange: "Murah",
    icon: <PiShippingContainerBold />,
    coverage: "Seluruh Indonesia",
  },
  {
    id: 6,
    serviceName: "Jasa Full Trucking",
    description:
      "Menyediakan sewa truck untuk memudahkan pengiriman barang dalam partai besar.",
    category: "Full Trucking",
    transportationMode: "Darat",
    priceRange: "Murah",
    icon: <PiTruckTrailerFill />,
    coverage: "Seluruh Indonesia",
  },
];

const ContentService = () => {
  return (
    <div className="mt-10 flex flex-col gap-5 ">
      <h2 className="max-md:text-xl  text-center tracking-tighter text-4xl">
        Produk dan Layanan
      </h2>
      <div className="grid grid-cols-3 transition-all ease-in animate-in fade-in duration-700  max-md:grid-cols-1 mt-6 md:mx-16 gap-4">
        {dataService.map((service) => (
          <article
            key={service.id}
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <div className="inline-block rounded bg-[#1D5D95] p-2 text-white">
              {service.icon}
            </div>
            <a href="#">
              <h3 className="mt-0.5 max-md:text-lg  text-xl font-bold tracking-tight text-gray-900">
                {service.serviceName}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ContentService;
