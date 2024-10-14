import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // Assuming you're using Next.js

export function CarouselDemo() {
  const cargoHistorySlides = [
    {
      title: "Pendirian Perusahaan Kargo Kami",
      content:
        "Pada tahun 2018, perusahaan kargo kami didirikan dengan misi menyediakan layanan pengiriman yang andal ke Indonesia bagian timur.",
      imageUrl:
        "https://utfs.io/f/1T6lrtsFpELwXUk1Jme09zCRefFKrAWgHYTI5s84B6GMqdaO", // Example image path
    },

    {
      title: "Pengenalan Layanan ke Sumatera",
      content:
        "Pada tahun 2022 kami memperkenalkan layanan pengiriman ke Sumatera, memperluas jangkauan kami ke pulau lainnya di Indonesia",
      imageUrl:
        "https://utfs.io/f/1T6lrtsFpELwXUk1Jme09zCRefFKrAWgHYTI5s84B6GMqdaO",
    },
    {
      title: "Inisiatif Keberlanjutan",
      content:
        "Pada tahun 2024, kami memperkenalkan inisiatif keberlanjutan, mengurangi jejak karbon kami dan memimpin industri dalam pengiriman yang ramah lingkungan.",
      imageUrl:
        "https://utfs.io/f/1T6lrtsFpELwXUk1Jme09zCRefFKrAWgHYTI5s84B6GMqdaO",
    },
  ];

  return (
    <Carousel className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
      <CarouselContent>
        {cargoHistorySlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative max-h-[620px] ">
              <Card className="bg-gray-700  text-white">
                <div className="relative h-64 w-full">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="flex flex-col items-center justify-center min-h-[300px] p-6 bg-[#1c5d95]">
                  <h2 className="text-3xl font-bold mb-7 text-center">
                    {slide.title}
                  </h2>
                  <p className="text-center text-lg">{slide.content}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 top-1/3 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-gray-800 bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full">
        &lt;
      </CarouselPrevious>
      <CarouselNext className="absolute right-10 top-1/3 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-gray-800 bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full">
        &gt;
      </CarouselNext>
    </Carousel>
  );
}
