import React, { useEffect } from "react";

import ship from "../images/ship-bg.jpg";
import Image from "next/image";
import HeroService from "./components/header-service";
import ContentService from "./components/content-service";


const ServicePage = () => {





  return (
    <div className="min-h-screen mb-12">
      <HeroService />
      <ContentService />
    </div>
  );
};

export default ServicePage;
