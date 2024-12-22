'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images
import Foto from "@/app/images/ksdae.png";
import Foto2 from "@/app/images/gor.png";
import Foto3 from "@/app/images/krisbow.png";
import Foto4 from "@/app/images/kubota.png";

const companies = [
  { name: "KSDAE", logo: Foto },
  { name: "GOR", logo: Foto2 },
  { name: "Krisbow", logo: Foto3 },
  { name: "Kubota", logo: Foto4 },
];

const ListCompanies: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
            Klien yang Sudah Percaya Kami
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Bergabung dengan perusahaan terkemuka yang telah mempercayakan logistik mereka kepada kami
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-32 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={120}
                className="object-contain max-h-24"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Siap untuk bergabung dengan mereka? Percayakan logistik Anda kepada kami.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Hubungi Kami Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ListCompanies;

