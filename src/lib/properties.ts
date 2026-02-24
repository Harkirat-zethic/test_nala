import type { Property } from "@/types";

const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Reservoir Road, Blacktown",
    location: "Australia",
    silProvider: "Thrive365",
    designLevel: "High Physical Support",
    images: [
      { src: "/images/property-1.jpg", alt: "Reservoir Road main view" },
      { src: "/images/property-2.jpg", alt: "Reservoir Road interior" },
      { src: "/images/property-3.jpg", alt: "Reservoir Road bedroom" },
      { src: "/images/property-1.jpg", alt: "Reservoir Road kitchen" },
      { src: "/images/property-2.jpg", alt: "Reservoir Road bathroom" },
      { src: "/images/property-3.jpg", alt: "Reservoir Road living area" },
      { src: "/images/property-1.jpg", alt: "Reservoir Road exterior" },
    ],
    description:
      "51a Doonside Cres, Blacktown is a large, high-quality 3 bedroom home and 1 bedroom villa designed for individuals with High Physical Support needs. The property is in a great suburban location with easy access to the Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 6, bathrooms: 2 },
      { name: "Villa", bedrooms: 6, bathrooms: 2 },
    ],
    details: [
      {
        title: "Bedroom",
        features: [
          { label: "Feature 1", description: "Huge bedrooms", icon: "bedroom" },
          { label: "Feature 2", description: "Quality, accessible wardrobe.", icon: "wardrobe" },
          { label: "Feature 3", description: "Automatic windows and blinds", icon: "window" },
          { label: "Feature 4", description: "Ceiling hoists and safety features.", icon: "hoist" },
          { label: "Feature 5", description: "Air-conditioning in each room.", icon: "ac" },
        ],
      },
      {
        title: "Living Spaces",
        features: [
          { label: "Feature 1", description: "Living spaces, including a study.", icon: "living-room" },
          { label: "Feature 2", description: "Quality, accessible wardrobe.", icon: "park" },
          { label: "Feature 3", description: "Automatic windows and blinds", icon: "fence" },
        ],
      },
      {
        title: "Kitchen",
        features: [
          { label: "Feature 1", description: "Quality appliances and tapware", icon: "kitchen" },
          { label: "Feature 2", description: "Granite sink, side oven, key features", icon: "sink" },
        ],
      },
      {
        title: "Bathrooms",
        features: [
          { label: "Feature 1", description: "Accessible bathrooms for comfort", icon: "bathtub" },
          { label: "Feature 2", description: "Slip-resistant floors and hoists", icon: "floor-plan" },
          { label: "Feature 3", description: "Quality tapware", icon: "tapware" },
        ],
      },
      {
        title: "Utilities",
        features: [
          { label: "Feature 1", description: "Oversized laundry", icon: "laundry" },
          { label: "Feature 2", description: "24/7 Power Back-up during outages", icon: "battery" },
          { label: "Feature 3", description: "On-site Overnight Assistance", icon: "support" },
          { label: "Feature 4", description: "Fire safety equipment", icon: "fire-safety" },
        ],
      },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.123456789!2d150.9!3d-33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzEyLjAiUyAxNTDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890",
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id);
}

export function getAllPropertyIds(): string[] {
  return PROPERTIES.map((p) => p.id);
}
