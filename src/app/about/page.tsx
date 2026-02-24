import AboutHero from "@/components/sections/AboutHero";
import AboutTimeline from "@/components/sections/AboutTimeline";

export const metadata = {
  title: "About Us | NALA Properties",
  description:
    "Learn about NALA Properties — modern, functional and safe SDA homes for NDIS participants built to the highest design standards.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutTimeline />
    </main>
  );
}
