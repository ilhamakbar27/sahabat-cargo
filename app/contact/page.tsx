"use client";

// import Footer from "@/components/footer";
import ContactForm from "@/components/form/ContactForm";
import Navbar from "@/components/navbar";
import React from "react";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="py-12 flex-1 lg:flex pt-32 lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl  tracking-tight font-semibold sm:text-4xl">
              Hubungi Kami
            </h3>
            <p className="mt-3">
              Kami siap membantu kebutuhan kargo Anda! Silakan isi formulir di
              bawah ini.
            </p>
          </div>
          <ContactForm />
        </div>
        {/* <Footer /> */}
      </div>
    </main>
    </>
  );
};

export default Contact;
