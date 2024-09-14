"use client";

import Image from "next/image";
import poto from "./images/cargo.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import ChatWhatsapp from "@/lib/ChatWhatsapp";
import { PhoneCall } from "lucide-react";
import Footer from "@/components/footer";
import warehouse from "./images/warehouse.png";
import ship from "./images/ship.png";
import time from "./images/time.png";
import bgship from "./images/ship-bg.jpg";
import AboutSection from "@/components/HomeComponent/about-section";
// ..Pho

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      // once: true,
    });
  }, []);
  // AOS.init();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white  shadow-lg fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            className="object-cover size-20"
            width={600}
            height={400}
            src={
              "https://utfs.io/f/cccd5361-35ac-4f74-92bf-9775c21b59a4-5nw59t.png"
            }
            alt=""
          />
          <div className="  md:hidden">
            <Sidebar />
          </div>
          <ul className="flex max-md:hidden space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300">
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition duration-300">
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition duration-300">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gray-200 pt-20">
        <Image
          src={poto}
          alt="Cargo Truck"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-5">
          <h2
            data-aos="fade-down"
            className="text-5xl text-white font-extrabold">
            Logistik Terpercaya di Indonesia
          </h2>
          <p data-aos="fade-down" className="text-lg text-gray-300 mt-3">
            Kami hadir untuk memberikan solusi pengiriman terbaik bagi bisnis
            Anda
          </p>
          <ChatWhatsapp
            phone="+6282393933313"
            message="Hi, Saya Tertarik untuk memesan cargo disini 👋🏻">
            <button
              data-aos="fade-down"
              className="mt-6 px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
              <div className="flex gap-4 items-center">
                <PhoneCall className="size-5" />
                <p className=" text-lg tracking-tight font-[800]">
                  Dapatkan Promo Sekarang
                </p>
              </div>
            </button>
          </ChatWhatsapp>
        </div>
      </section>
      <div className="min-h-screen max-md:mb-20">
        <AboutSection />
      </div>
      {/* Services Section */}
      <main
        id="services"
        style={{
          backgroundImage: `url(${bgship})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="container mx-auto p-10  max-md:p-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-16">
        {/* Service 1 */}
        {/* <Image src={bgship} width={500} height={400} alt="jefkqg" /> */}
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
      </main>

      {/* Call to Action */}
      <section
        data-aos="fade-down"
        className="bg-[#2A75B3] text-white py-16 text-center"
        id="contact">
        <h2 className="text-4xl font-bold">Siap Mengirimkan Barang Anda?</h2>
        <p className="mt-4 text-lg">
          Hubungi kami sekarang dan dapatkan penawaran terbaik untuk bisnis
          Anda!
        </p>
        <button className="mt-8 px-10 py-4 bg-yellow-400 text-blue-600 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Kontak Kami
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
