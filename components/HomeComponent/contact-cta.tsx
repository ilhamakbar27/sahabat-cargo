"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon as WhatsappIcon } from "lucide-react";

interface ChatWhatsappProps {
  phone: string;
  message: string;
  children: React.ReactNode;
}

const ChatWhatsapp: React.FC<ChatWhatsappProps> = ({
  phone,
  message,
  children,
}) => {
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return <div onClick={handleClick}>{children}</div>;
};

const ContactSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0">
        <svg
          className="absolute left-0 top-0 h-full w-48 text-white/10 transform -translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Sudah siap kirim barang, bos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-xl text-blue-100">
          Dapatkan penawaran terbaik untuk pengiriman kargo Anda sekarang!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10">
          <ChatWhatsapp
            phone="+6285121033818"
            message="Hi, Saya tertarik untuk memesan cargo di sini 👋🏻">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300">
              <WhatsappIcon className="w-6 h-6 mr-2" />
              <span className="font-extrabold tracking-wide">
                Harga Spesial Buat Bos
              </span>
            </motion.button>
          </ChatWhatsapp>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center text-sm text-blue-100">
        <p>Layanan pelanggan tersedia 24/7. Kami siap membantu Anda!</p>
      </motion.div>

      <div className="absolute right-0 bottom-0 h-full w-48">
        <svg
          className="h-full w-full text-white/10 transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
