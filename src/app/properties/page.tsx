import PropertiesListing from "@/components/sections/PropertiesListing";
import WhyChooseNala from "@/components/sections/WhyChooseNala";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Our Properties | NALA Properties",
  description:
    "Browse NALA Properties — purpose-built Specialist Disability Accommodation homes designed for comfort, accessibility, and independence.",
};

export default function PropertiesPage() {
  return (
    <main>
      <PropertiesListing />
      <WhyChooseNala />
      <ContactSection />
    </main>
  );
}
