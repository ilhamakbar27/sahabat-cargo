"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialSliderCardProps {
  testimonials: Testimonial[];
}

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
};

export default function TestimonialSliderCard({
  testimonials,
}: TestimonialSliderCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimoni dari Pelanggan Kami
        </motion.h2>
        <Carousel className="relative">
          <CarouselContent>
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/2 relative">
                            <Image
                              className="h-64 md:h-full w-full object-cover"
                              height={400}
                              width={600}
                              alt={testimonial.name}
                              src={testimonial.imgSrc}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white">
                            <div>
                              <Quote className="text-blue-500 mb-4 h-8 w-8" />
                              <p className="text-gray-700 text-lg mb-6 italic">
                              &ldquo{testimonial.quote}&ldquo
                              </p>
                            </div>
                            <div className="flex items-center">
                              <Image
                                className="h-12 w-12 rounded-full mr-4 border-2 border-blue-500"
                                height={48}
                                width={48}
                                alt={testimonial.name}
                                src={testimonial.imgSrc}
                                loading="lazy"
                              />
                              <div>
                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
        </Carousel>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

