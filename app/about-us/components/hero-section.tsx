import Image from "next/image";
import { motion } from "framer-motion";
import shipImage from "@/app/images/ship-bg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative py-20 pt-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={shipImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Cargo ship background"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate">
            Solusi Logistik Terbaik
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate">
            Kami menyediakan layanan pengiriman barang yang handal dan efisien
            untuk kebutuhan logistik Anda.
          </motion.p>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white">
              Pelajari Lebih Lanjut
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
