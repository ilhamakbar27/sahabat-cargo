"use client";

import Image from "next/image";
import poto from "./images/cargo.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import ChatWhatsapp from "@/lib/ChatWhatsapp";
import { PhoneCall } from "lucide-react";
import Footer from "@/components/footer";
import warehouse from "./images/warehouse.png";
import ship from "./images/ship.png";
import time from "./images/time.png";
import Marquee from "react-fast-marquee";
import AboutSection from "@/components/HomeComponent/about-section";
import { PriceList } from "@/components/HomeComponent/price-list";
import TestimonialSliderCard from "@/components/testimoni";
import ListCompanies from "@/components/HomeComponent/list-companies";

const testimonials = [
  {
    quote:
      "Pengalaman saya menggunakan layanan kargo laut sangat memuaskan! Pengiriman tepat waktu, barang tiba aman tanpa kerusakan, dan biaya kompetitif. Tim customer service juga responsif dan informatif. Sangat direkomendasikan untuk pengiriman barang via laut",
    name: "Pemerintah Provinsi",
    role: "Kepala dinas",
    imgSrc:
      "https://utfs.io/f/1T6lrtsFpELwjuaqWqRG6pHwE9BicKAC7UvqV4MmXbWLtQnx",
  },
  {
    quote:
      "Pengalaman saya menggunakan layanan kargo laut sangat memuaskan! Pengiriman tepat waktu, barang tiba aman tanpa kerusakan, dan biaya kompetitif. Tim customer service juga responsif dan informatif. Sangat direkomendasikan untuk pengiriman barang via laut",
    name: "Unit Penyelamatan Satwa",
    role: "Ditjen KSDAE",
    imgSrc:
      "https://utfs.io/f/1T6lrtsFpELwGa6EcDUJkc2CGBXfg3rFtuK6054jqeSHML91",
  },
  {
    quote:
      "Pengalaman saya menggunakan layanan kargo laut sangat memuaskan! Pengiriman tepat waktu, barang tiba aman tanpa kerusakan, dan biaya kompetitif. Tim customer service juga responsif dan informatif. Sangat direkomendasikan untuk pengiriman barang via laut",
    name: "Pemerintah Provinsi",
    role: "Kepala dinas",
    imgSrc:
      "https://utfs.io/f/1T6lrtsFpELwjuaqWqRG6pHwE9BicKAC7UvqV4MmXbWLtQnx",
  },
  {
    quote:
      "Pengalaman saya menggunakan layanan kargo laut sangat memuaskan! Pengiriman tepat waktu, barang tiba aman tanpa kerusakan, dan biaya kompetitif. Tim customer service juga responsif dan informatif. Sangat direkomendasikan untuk pengiriman barang via laut",
    name: "Unit Penyelamatan Satwa",
    role: "Ditjen KSDAE",
    imgSrc:
      "https://utfs.io/f/1T6lrtsFpELwGa6EcDUJkc2CGBXfg3rFtuK6054jqeSHML91",
  },
];
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  // AOS.init();
  return (
    <div className="flex flex-col relative min-h-screen  bg-gray-100">
      <section className="relative flex justify-between max-md:flex-col max-md:gap-12 max-md:min-h-[1000px] min-h-screen bg-gray-200 pt-20">
        <Image
          src={poto}
          alt="Cargo Truck"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="flex justify-between absolute inset-0 max-md:flex-col bg-black bg-opacity-50">
          <div className="w-[60%] max-md:w-full max-md:mt-44 px-20 max-md:items-center max-md:px-5 max-md:gap-5 flex flex-col items-start justify-center  max-md:justify-center text-center">
            <h2
              data-aos="fade-down"
              className="text-5xl max-w-3xl max-md:text-3xl max-md:max-w-lg text-start text-white font-bold">
              Bingung kirim barang-barang besar solusinya hanya disini, kirim
              barang tanpa harus ribet dan mahal
            </h2>
            <ChatWhatsapp
              phone="+6281313130765"
              message="Hi, Saya Tertarik untuk memesan cargo disini 👋🏻">
              <button
                data-aos="fade-down"
                className="mt-6 px-10 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
                <div className="flex gap-4 items-center">
                  <PhoneCall className="size-5" />
                  <p className="text-lg tracking-tight font-[800]">
                    Harga spesial Buat bos
                  </p>
                </div>
              </button>
            </ChatWhatsapp>
            <div className="md:hidden  mt-10 flex justify-start  items-start">
              <PriceList />
            </div>
          </div>
          <div className="w-[40%] max-md:hidden max-md:mt-0 flex justify-center items-center">
            <PriceList />
          </div>
        </div>
      </section>
      <h3 className="py-4 font-[600] p-3 text-center  text-gray-900 tracking-tight text-4xl  mt-12 max-md:text-2xl ">
        Mengapa harus kami?
      </h3>
      <main
        id="services"
        // style={{
        //   backgroundImage: `url(${bgship})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="container mx-auto p-10  max-md:p-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 ">
        <div
          data-aos="fade-down"
          className="bg-white p-8 flex items-center lg:max-h-[400px] flex-col rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">
          <Image
            src={warehouse}
            alt="Gudang"
            width={500}
            height={300}
            className="rounded-lg max-md:size-40 lg:w-3/4 max-h-[200px]   object-cover"
          />
          <h3 className="text-2xl font-bold mt-5 text-gray-800">
            Jaringan Gudang Luas
          </h3>
          <p className="mt-3 text-gray-600">
            Jaringan gudang kami tersebar di seluruh Indonesia untuk memastikan
            pengiriman cepat dan aman.
          </p>
        </div>
        {/* Service 3 */}
        <div
          data-aos="fade-down"
          className="bg-white p-8 flex items-center lg:max-h-[400px] flex-col rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">
          <Image
            src={time}
            alt="Pengiriman Udara"
            width={500}
            height={300}
            className="rounded-lg max-md:size-48 lg:w-full max-h-[200px]   object-cover"
          />
          <h3 className="text-2xl font-bold mt-5 text-gray-800">
            Harga Termurah dan cepat
          </h3>
          <p className="mt-3 text-gray-600">
            Pengiriman termurah se Indonesia dengan layanan terbaik dan tercepat
          </p>
        </div>
        {/* Service 2 */}
        <div
          data-aos="fade-down"
          className="bg-white p-8 flex items-center lg:max-h-[400px] flex-col rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">
          <Image
            src={ship}
            alt="Pengiriman Kapal"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-2xl font-bold mt-2 text-gray-800">
            Pengiriman Kapal
          </h3>
          <p className="mt-3 text-gray-600">
            Pengiriman melalui laut dengan armada modern yang menjangkau wilayah
            kepulauan di Indonesia.
          </p>
        </div>
        {/* Service 3 */}
      </main>
      <div className="min-h-screen max-md:mb-20">
        <AboutSection />
      </div>
      {/* Call to Action */}
      <section
        data-aos="fade-down"
        className="bg-[#2A75B3] text-white py-16 text-center"
        id="contact">
        <h2 className="text-4xl font-bold">Sudah siap kirim barang, bos?</h2>
        <ChatWhatsapp
          phone="+6281313130765"
          message="Hi, Saya Tertarik untuk memesan cargo disini 👋🏻">
          <button
            data-aos="fade-down"
            className="mt-6 px-10 py-3  bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
            <div className="flex gap-4 items-center">
              <p className=" text-lg tracking-tight font-[800]">
                Harga spesial Buat bos
              </p>
            </div>
          </button>
        </ChatWhatsapp>
      </section>
     
        <ListCompanies />
      
      <TestimonialSliderCard testimonials={testimonials} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
