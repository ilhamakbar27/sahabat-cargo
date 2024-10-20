"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section className="w-full  py-16">
      <div className="mx-auto lg:max-w-6xl px-3">
        <h2 className="sm:text-4xl pb-10 text-xl">
          Testimoni dari pelanggan kami
        </h2>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="shadow-sm">
                  <CardContent className="flex min-h-[500px] items-center justify-center p-6">
                    <div className="flex flex-col px-4 py-5 sm:p-6">
                      <div>
                        <Image
                          // loader={imageLoader}
                          className="h-[300px] w-[500px] rounded-xl   object-cover py-6"
                          height={700}
                          width={800}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </div>
                      <q className="flex-1 text-gray-600 dark:text-gray-300">
                        {testimonial.quote}
                      </q>
                      <div className="mt-6 flex gap-3">
                        <span className="inline-flex rounded-full">
                          <Image
                            // loader={imageLoader}
                            className="h-10 w-10 rounded-full"
                            height={40}
                            width={40}
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            loading="lazy"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] max-md:centered-rigth top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 max-md:centered-top -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}
