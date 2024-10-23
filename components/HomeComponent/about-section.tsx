import React from "react";
import { CarouselDemo } from "../carousel-about";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 max-md:py-10  relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-xl tracking-wide font-normal  leading-relaxed">
                  Tentang Kami
                </h6>
                <div
                  data-aos="fade-down"
                  className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-[#2C75B3] md:text-5xl text-4xl font-bold  leading-tight max-md:leading-tight lg:text-start text-center">
                    Bawa yang Terbaik, Cepat Sampai ke Seluruh Indonesia
                  </h2>
                  <p
                    data-aos="fade-down"
                    className="text-gray-500 text-base max-md:text-start font-normal lg:pt-3 leading-relaxed lg:text-start text-center">
                    Kami merupakan penyedia layanan pengiriman logistik/cargo
                    dalam jumlah yang banyak, kami mencangkup seluruh pengiriman
                    di Indonesia. dengan menawarkan kecepatan pengiriman yang
                    tidak pernah terpikirkan sebelumnya atau diluar nalar
                  </p>
                  <p
                    data-aos="fade-down"
                    className="text-gray-500 text-base font-normal lg:pt-3 max-md:text-start leading-relaxed lg:text-start text-center">
                    Sejak tahun 2020, kami telah berkembang dan kini hadir
                    dengan identitas baru sebagai Putra Dunia Cargo. Perubahan
                    ini dilakukan untuk memperkuat komitmen kami dalam
                    memberikan layanan yang lebih baik, terpercaya, serta
                    didukung oleh profesionalisme, keandalan, dan inovasi yang
                    terus ditingkatkan.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-[#2D74B3]" size={"lg"}>
              Read more
            </Button>
          </div>
          <div className="w-full  md:ml-28 lg:justify-start max-md:mt-40  justify-center items-center flex">
            <CarouselDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
