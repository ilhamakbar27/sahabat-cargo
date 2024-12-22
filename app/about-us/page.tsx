"use client";

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "./components/hero-section";
import CtaSection from "./components/cta-section";
import AboutUsSection from "./components/about-us";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-gray-50 to-white">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />

        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

const ServicesSection = () => (
  <section className="py-16">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Layanan Kami
        </h2>
        <p className="mt-3 text-gray-600">
          Kami menawarkan berbagai layanan logistik untuk memenuhi kebutuhan
          bisnis Anda.
        </p>
      </motion.div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Pengiriman Laut",
          "Pengiriman Darat",
          "Pergudangan",
          "Pengurusan Bea Cukai",
          "Pengiriman Ekspres",
          "Logistik E-commerce",
        ].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service}
                </h3>
                <Button variant="link" className="mt-2 p-0">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);




export default AboutPage;
