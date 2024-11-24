"use client";
import React from "react";

import HeroService from "./components/header-service";
import ContentService from "./components/content-service";
import Footer from "@/components/footer";

const ServicePage = () => {
  return (
    <div className="min-h-screen mb-12">
      <HeroService />
      <ContentService />
      <Footer />
    </div>
  );
};

export default ServicePage;
