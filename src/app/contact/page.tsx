import ContactSection from "@/components/sections/ContactSection";
import WhyChooseNala from "@/components/sections/WhyChooseNala";

export const metadata = {
  title: "Contact Us | NALA Properties",
  description:
    "Get in touch with NALA Properties. We're here to guide you every step of the way in buying, selling, or investing in property.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
      <WhyChooseNala />
    </main>
  );
}
