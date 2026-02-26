import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPropertyById, getAllPropertyIds } from "@/lib/properties";
import PropertyHero from "@/components/sections/property-detail/PropertyHero";
import PropertyDetails from "@/components/sections/property-detail/PropertyDetails";
import PropertyLocation from "@/components/sections/property-detail/PropertyLocation";
import OurProperties from "@/components/sections/OurProperties";
import WhyChooseNala from "@/components/sections/WhyChooseNala";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllPropertyIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.title} | NALA Properties`,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();

  return (
    <main>
      <PropertyHero property={property} />
      <PropertyDetails details={property.details} />
      <PropertyLocation mapEmbedUrl={property.mapEmbedUrl} />
      <div className="[&>section]:bg-white">
        <OurProperties />
      </div>
      <WhyChooseNala />
    </main>
  );
}
