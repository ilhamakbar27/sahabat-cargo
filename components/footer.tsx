"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/pd.cargo/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/people/Putraduniacargo/61568261789599/?mibextid=LQQJ4d&rdid=kO0r9n9hRTgz5XeY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12AswCdwR1F%2F%3Fmibextid%3DLQQJ4d",
    label: "Facebook",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Jl. KH Mas Mansyur No. 25 Kompleks Said Naum Kebon Kacang Tanah Abang Jakarta pusat",
  },
  { icon: Phone, text: "+62 123 456 7890" },
  { icon: Mail, text: "info@putraduniacargo.com" },
];

const services = [
  "Pengiriman Darat",
  "Pengiriman Laut",
  "Pengiriman Udara",
  "Logistik Terpadu",
];

const companyLinks = ["Tentang Kami", "Karir", "Berita", "Kebijakan Privasi"];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <Image
                className="w-48 h-auto"
                width={192}
                height={96}
                src="https://utfs.io/f/1T6lrtsFpELwp8Ez1IqMzy29cVnXes5bCQBAuUZFYgTrtvEG"
                alt="Putra Dunia Cargo Logo"
              />
            </motion.div>
            <motion.p
              className="mt-4 max-w-xs text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Kami memastikan barang Anda tiba dengan aman dan tepat waktu ke
              berbagai tujuan di seluruh Indonesia. Percayakan logistik Anda
              kepada kami.
            </motion.p>
            <motion.ul
              className="mt-8 flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-blue-500 hover:scale-110 transform">
                    <span className="sr-only">{link.label}</span>
                    <link.icon className="h-6 w-6" />
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <p className="font-medium text-lg text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
                Layanan
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-blue-500 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}>
              <p className="font-medium text-lg text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
                Perusahaan
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:text-blue-500 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}>
              <p className="font-medium text-lg text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
                Kontak
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}>
                    <info.icon className="h-5 w-5 flex-shrink-0 text-blue-500 mt-1" />
                    <span className="text-gray-700">{info.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}>
          <p className="text-xs text-gray-500">
            &copy; 2024 Putra Dunia Cargo. Hak Cipta Dilindungi.
          </p>
          <div className="mt-4 sm:mt-0">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-blue-500 transition">
              Syarat & Ketentuan
            </a>
            <span className="mx-2 text-gray-300">|</span>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-blue-500 transition">
              Peta Situs
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
