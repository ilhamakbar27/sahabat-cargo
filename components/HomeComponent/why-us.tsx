"use client";

import { motion } from "framer-motion";
import { Warehouse, Clock, Anchor, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const features = [
  {
    title: "Jaringan Gudang Luas",
    description:
      "Jaringan gudang kami tersebar di seluruh Indonesia untuk memastikan pengiriman cepat dan aman.",
    icon: Warehouse,
    color: "from-amber-500 to-orange-600",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Harga Termurah dan cepat",
    description:
      "Pengiriman termurah se Indonesia dengan layanan terbaik dan tercepat",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Pengiriman Kapal",
    description:
      "Pengiriman melalui laut dengan armada modern yang menjangkau wilayah kepulauan di Indonesia.",
    icon: Anchor,
    color: "from-emerald-500 to-teal-600",
    image: "/placeholder.svg?height=400&width=400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function WhyUs() {
  return (
    <section className="mx-auto pt-20  pb-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12">
          <div className="text-center space-y-4">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={itemVariants}>
              Mengapa harus kami?
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed"
              variants={itemVariants}>
              Kami menyediakan solusi logistik terbaik dengan jaringan luas,
              harga kompetitif, dan armada modern.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="relative overflow-hidden group h-full">
                  <CardContent className="p-6">
                    <div className="relative z-10 space-y-4">
                      <div
                        className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-br ${feature.color}`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium text-blue-600">
                      Pelajari lebih lanjut
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>

                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${feature.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
