"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Ship, Plane, Truck, LeafyGreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimatedCard = motion(Card);

const services = [
  { icon: Ship, label: "Pengiriman Laut" },
  { icon: Plane, label: "Pengiriman Udara" },
  { icon: Truck, label: "Pengiriman Darat" },
];

const slides = [
  {
    image: "/placeholder.svg?height=600&width=800",
    alt: "Cargo ship at port",
    title: "Inisiatif Keberlanjutan",
    description:
      "Pada tahun 2024, kami memperkenalkan inisiatif keberlanjutan, mengurangi jejak karbon kami dan memimpin industri dalam pengiriman yang ramah lingkungan.",
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    alt: "Airplane cargo loading",
    title: "Pengiriman Udara Cepat",
    description:
      "Layanan pengiriman udara kami menjangkau seluruh Indonesia dengan kecepatan dan efisiensi tinggi.",
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    alt: "Truck fleet",
    title: "Jaringan Darat Terluas",
    description:
      "Armada truk kami menjangkau setiap sudut Indonesia, memastikan pengiriman tepat waktu ke seluruh pelosok negeri.",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 1000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  const ServiceCard = useMemo(
    () =>
      function serviceName({
        icon: Icon,
        label,
      }: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        label: string;
      }) {
        return (
          <AnimatedCard
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-2" />
              <p className="text-xs sm:text-sm font-medium text-center">
                {label}
              </p>
            </CardContent>
          </AnimatedCard>
        );
      },
    []
  );

  return (
    <section
      className="min-h-screen bg-gradient-to-b max-md:max-w-lg from-white to-gray-50 py-12 sm:py-16 lg:py-20"
      aria-labelledby="about-section-title">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerChildren}
            ref={ref}>
            <motion.div
              variants={fadeIn}
              className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-600">
              Tentang Kami
            </motion.div>
            <motion.h1
              id="about-section-title"
              variants={fadeIn}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Bawa yang Terbaik, Cepat Sampai ke Seluruh Indonesia
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-gray-600">
              Kami merupakan penyedia layanan pengiriman logistik/cargo dalam
              jumlah yang banyak, mencangkup seluruh pengiriman di Indonesia
              dengan kecepatan pengiriman yang luar biasa.
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-gray-600">
              Sejak 2020, kami berkembang menjadi Putra Dunia Cargo, memperkuat
              komitmen kami dalam memberikan layanan terpercaya dengan
              profesionalisme, keandalan, dan inovasi yang terus ditingkatkan.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium w-full sm:w-auto">
                Pelajari Lebih Lanjut
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium w-full sm:w-auto">
                Hubungi Kami
              </Button>
            </motion.div>
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-8"
              variants={staggerChildren}>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <Carousel className="w-full max-md:hidden">
              <CarouselContent>
                <AnimatePresence mode="wait">
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <motion.div
                        className="relative overflow-hidden rounded-xl aspect-[4/3]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentSlide === index ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          width={800}
                          height={600}
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/20 p-4 sm:p-6 lg:p-8 flex flex-col justify-end">
                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                              {slide.title}
                            </h3>
                            <p className="text-sm sm:text-base text-white/90">
                              {slide.description}
                            </p>
                            <div className="flex items-center gap-2 text-white/90">
                              <LeafyGreen className="h-4 w-4 sm:h-5 sm:w-5" />
                              <span className="text-xs sm:text-sm font-medium">
                                Ramah Lingkungan
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </AnimatePresence>
              </CarouselContent>
              <CarouselPrevious
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2"
              />
              <CarouselNext
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2"
              />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
