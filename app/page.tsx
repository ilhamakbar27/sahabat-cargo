"use client";

import Image from "next/image";
import poto from "./images/cargo.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

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
      <nav className="bg-white py-5 shadow-lg fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600">
            Sahabat Baru cargo
          </h1>
          <ul className="flex space-x-8">
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
          <h2 data-aos="fade-down" className="text-5xl text-white font-extrabold">
            Logistik Terpercaya di Indonesia
          </h2>
          <p data-aos="fade-down" className="text-lg text-gray-300 mt-3">
            Kami hadir untuk memberikan solusi pengiriman terbaik bagi bisnis
            Anda
          </p>
          <a
            data-aos="fade-down"
            href="#services"
            className="mt-6 px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
            Lihat Layanan Kami
          </a>
        </div>
      </section>

      {/* Services Section */}
      <main
        id="services"
        className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Service 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">
          <Image
            src="https://source.unsplash.com/500x300/?warehouse"
            alt="Gudang"
            width={500}
            height={300}
            className="rounded-lg"
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
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">
          <Image
            src="https://source.unsplash.com/500x300/?cargo,ship"
            alt="Pengiriman Kapal"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-2xl font-bold mt-5 text-gray-800">
            Pengiriman Kapal
          </h3>
          <p className="mt-3 text-gray-600">
            Pengiriman melalui laut dengan armada modern yang menjangkau wilayah
            kepulauan di Indonesia.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">
          <Image
            src="https://source.unsplash.com/500x300/?cargo,plane"
            alt="Pengiriman Udara"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-2xl font-bold mt-5 text-gray-800">
            Pengiriman Udara
          </h3>
          <p className="mt-3 text-gray-600">
            Pengiriman cepat dan handal melalui udara, ideal untuk barang
            berharga dan mendesak.
          </p>
        </div>
      </main>

      {/* Call to Action */}
      <section
        className="bg-blue-600 text-white py-16 text-center"
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
      <footer className="py-5 bg-gray-900 text-gray-400 text-center">
        <p>© 2024 Cargo Kami. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
