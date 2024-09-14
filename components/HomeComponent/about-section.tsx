import bgship from "@/app/images/ship-bg.jpg";
import Image from "next/image";
import React from "react";

interface AboutSectionProps {
  id: string;
  title: string;
  desription: string;
}

const dataAboutSection: AboutSectionProps[] = [
  {
    id: "about",
    title: "10+ Years",
    desription: "Experience in Global Shipping",
  },
  {
    id: "about-2",
    title: "5000+ Shipments",
    desription: " Successfully Delivered Across Indonesia",
  },
  {
    id: "about-3",
    title: "50+ Awards",
    desription: "Recognized for Service Excellence",
  },
  {
    id: "about-4",
    title: "98% Client Satisfaction",
    desription: "Committed to Delivering on Promises",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 max-md:py-10  relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-xl font-normal leading-relaxed">
                  About Us
                </h6>
                <div
                  data-aos="fade-down"
                  className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-[#2C75B3] md:text-5xl text-4xl font-bold font-manrope leading-tight max-md:leading-tight lg:text-start text-center">
                    Delivering Excellence Across Indonesia
                  </h2>
                  <p
                    data-aos="fade-down"
                    className="text-gray-500 text-base font-normal lg:pt-3 leading-relaxed lg:text-start text-center">
                    With decades of experience in global shipping, we ensure
                    that your cargo reaches its destination on time, every time.
                    Our story is built on trust, reliability, and unparalleled
                    service in the logistics industry.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 max-md:gap-y-4 grid md:grid-cols-2 grid-cols-1">
                  {dataAboutSection.map((data) => (
                    <div
                      key={data.id}
                      data-aos="fade-down"
                      className="w-full  h-full p-4 tracking-tight rounded-xl border border-gray-200 bg-[#FED65F] hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-snug">
                        {data?.title}
                      </h4>
                      <p className="text-gray-800  font-[500] text-base  leading-tight">
                        {data?.desription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="sm:w-fit max-md:hidden w-full group px-3.5 py-2  bg-blue-50 hover:bg-blue-100 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-blue-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
            </button>
          </div>
          <div className="w-full lg:justify-start max-md:mt-40 justify-center items-start flex">
            <div
              data-aos="fade-down"
              className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <Image
                width={600}
                height={500}
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src={bgship}
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
