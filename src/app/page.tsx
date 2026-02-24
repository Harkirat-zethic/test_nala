import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SDAProperties from "@/components/sections/SDAProperties";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import NalaValues from "@/components/sections/NalaValues";
import OurProperties from "@/components/sections/OurProperties";
import WhyChooseNala from "@/components/sections/WhyChooseNala";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SDAProperties />
        <WhatWeOffer />
        <NalaValues />
        <OurProperties />
        <WhyChooseNala />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
