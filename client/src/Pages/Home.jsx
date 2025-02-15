import React from "react";
import OurClient from "../Componets/Home/Ourclients/OurClinet";
import OurPatners from "../Componets/Home/OurPatners";
import WhyChooseUs from "../Componets/Home/WhyChooseUs";

import HeroSection from "../Componets/Home/Herosection/HeroSection";
import OurPortfolioScrollRight from "../Componets/Home/Portfolio/OurPortfolioScrollRight";
import ScrolingCard from "../Componets/Home/Ourservices/ScrolingCard";
import FAQ from "../Componets/Home/Faq";
import HeroSec from "../Componets/Home/heroSec/HeroSec";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <HeroSec /> */}
      <OurClient />
      <ScrolingCard />
      <OurPortfolioScrollRight />
      <WhyChooseUs />
      <OurPatners />
      {/* <ClientTestimonials /> */}
      <FAQ />
    </div>
  );
}
