import type { Property, PropertyDetailCategory } from "@/types";

const DEFAULT_DETAILS: PropertyDetailCategory[] = [
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
];

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.123456789!2d150.9!3d-33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzEyLjAiUyAxNTDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890";

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Reservoir Road, Blacktown",
    imageSrc: "/images/property-1.jpg",
    location: "Australia",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    dropdownName: "51a Doonside Cres",
    dropdownImage: "/images/dropdown/dropdown-1.png",
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
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "2",
    title: "Ocean View Drive, Manly",
    imageSrc: "/images/property-2.jpg",
    location: "Australia",
    silProvider: "CareConnect",
    supportLevel: "Medium Physical Support",
    dropdownName: "24 Reservoir Rd",
    dropdownImage: "/images/dropdown/dropdown-2.png",
    images: [
      { src: "/images/property-2.jpg", alt: "Ocean View Drive main view" },
      { src: "/images/property-3.jpg", alt: "Ocean View Drive interior" },
      { src: "/images/property-1.jpg", alt: "Ocean View Drive bedroom" },
      { src: "/images/property-2.jpg", alt: "Ocean View Drive kitchen" },
      { src: "/images/property-3.jpg", alt: "Ocean View Drive bathroom" },
      { src: "/images/property-1.jpg", alt: "Ocean View Drive living area" },
      { src: "/images/property-2.jpg", alt: "Ocean View Drive exterior" },
    ],
    description:
      "24 Reservoir Rd, Manly is a premium SDA property offering modern accessible living. The property features spacious rooms, quality finishes, and is designed for individuals requiring medium physical support. Located in a vibrant coastal suburb with excellent transport links and local amenities.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 2", bedrooms: 2, bathrooms: 1 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "3",
    title: "Parkview Lane, Penrith",
    imageSrc: "/images/property-3.jpg",
    location: "Australia",
    silProvider: "CareConnect",
    supportLevel: "Medium Physical Support",
    dropdownName: "101 Wall Park Ave",
    dropdownImage: "/images/dropdown/dropdown-3.png",
    images: [
      { src: "/images/property-3.jpg", alt: "Parkview Lane main view" },
      { src: "/images/property-1.jpg", alt: "Parkview Lane interior" },
      { src: "/images/property-2.jpg", alt: "Parkview Lane bedroom" },
      { src: "/images/property-3.jpg", alt: "Parkview Lane kitchen" },
      { src: "/images/property-1.jpg", alt: "Parkview Lane bathroom" },
      { src: "/images/property-2.jpg", alt: "Parkview Lane living area" },
      { src: "/images/property-3.jpg", alt: "Parkview Lane exterior" },
    ],
    description:
      "101 Wall Park Ave, Penrith is a purpose-built SDA property featuring accessible design throughout. The home offers comfortable living spaces with modern amenities, located near parks, shopping centres, and medical facilities in Sydney's growing western corridor.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 4, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 2", bedrooms: 3, bathrooms: 1 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "4",
    title: "Hilltop Crescent, Liverpool",
    imageSrc: "/images/property-1.jpg",
    location: "Australia",
    silProvider: "AbilityCare",
    supportLevel: "Fully Accessible",
    dropdownName: "78 Newton Rd",
    dropdownImage: "/images/dropdown/dropdown-4.png",
    images: [
      { src: "/images/property-1.jpg", alt: "Hilltop Crescent main view" },
      { src: "/images/property-2.jpg", alt: "Hilltop Crescent interior" },
      { src: "/images/property-3.jpg", alt: "Hilltop Crescent bedroom" },
      { src: "/images/property-1.jpg", alt: "Hilltop Crescent kitchen" },
      { src: "/images/property-2.jpg", alt: "Hilltop Crescent bathroom" },
      { src: "/images/property-3.jpg", alt: "Hilltop Crescent living area" },
      { src: "/images/property-1.jpg", alt: "Hilltop Crescent exterior" },
    ],
    description:
      "78 Newton Rd, Liverpool is a fully accessible SDA property designed with the highest standards of accessibility. Featuring wide corridors, automated controls, and quality finishes throughout, this property provides safe and comfortable living near Liverpool's amenities and transport links.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 5, bathrooms: 3 },
      { name: "Villa", bedrooms: 4, bathrooms: 2 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "5",
    title: "Sunrise Boulevard, Parramatta",
    imageSrc: "/images/property-2.jpg",
    location: "Australia",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    dropdownName: "76 Duckmallois Ave",
    dropdownImage: "/images/dropdown/dropdown-5.png",
    images: [
      { src: "/images/property-2.jpg", alt: "Sunrise Boulevard main view" },
      { src: "/images/property-3.jpg", alt: "Sunrise Boulevard interior" },
      { src: "/images/property-1.jpg", alt: "Sunrise Boulevard bedroom" },
      { src: "/images/property-2.jpg", alt: "Sunrise Boulevard kitchen" },
      { src: "/images/property-3.jpg", alt: "Sunrise Boulevard bathroom" },
      { src: "/images/property-1.jpg", alt: "Sunrise Boulevard living area" },
      { src: "/images/property-2.jpg", alt: "Sunrise Boulevard exterior" },
    ],
    description:
      "76 Duckmallois Ave, Parramatta is a high-quality SDA property built for individuals with high physical support needs. Located in Sydney's second CBD, the property offers excellent access to Westmead Hospital, shopping centres, and public transport.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 2", bedrooms: 2, bathrooms: 1 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "6",
    title: "Meadow Ridge, Castle Hill",
    imageSrc: "/images/property-3.jpg",
    location: "Australia",
    silProvider: "CareConnect",
    supportLevel: "Medium Physical Support",
    dropdownName: "36 Ross St",
    dropdownImage: "/images/dropdown/dropdown-6.png",
    images: [
      { src: "/images/property-3.jpg", alt: "Meadow Ridge main view" },
      { src: "/images/property-1.jpg", alt: "Meadow Ridge interior" },
      { src: "/images/property-2.jpg", alt: "Meadow Ridge bedroom" },
      { src: "/images/property-3.jpg", alt: "Meadow Ridge kitchen" },
      { src: "/images/property-1.jpg", alt: "Meadow Ridge bathroom" },
      { src: "/images/property-2.jpg", alt: "Meadow Ridge living area" },
      { src: "/images/property-3.jpg", alt: "Meadow Ridge exterior" },
    ],
    description:
      "36 Ross St, Castle Hill is a beautifully designed SDA property in one of Sydney's most sought-after suburbs. The property features accessible living spaces, modern amenities, and is close to Castle Towers Shopping Centre and local parks.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 4, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 2", bedrooms: 3, bathrooms: 2 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "7",
    title: "Lakeside Avenue, Campbelltown",
    imageSrc: "/images/property-1.jpg",
    location: "Australia",
    silProvider: "AbilityCare",
    supportLevel: "Fully Accessible",
    dropdownName: "5 Raymond St",
    dropdownImage: "/images/dropdown/dropdown-7.png",
    images: [
      { src: "/images/property-1.jpg", alt: "Lakeside Avenue main view" },
      { src: "/images/property-2.jpg", alt: "Lakeside Avenue interior" },
      { src: "/images/property-3.jpg", alt: "Lakeside Avenue bedroom" },
      { src: "/images/property-1.jpg", alt: "Lakeside Avenue kitchen" },
      { src: "/images/property-2.jpg", alt: "Lakeside Avenue bathroom" },
      { src: "/images/property-3.jpg", alt: "Lakeside Avenue living area" },
      { src: "/images/property-1.jpg", alt: "Lakeside Avenue exterior" },
    ],
    description:
      "5 Raymond St, Campbelltown is a fully accessible SDA property offering quality living in Sydney's Macarthur region. The home features generous room sizes, ceiling hoists, and automated controls, with convenient access to Campbelltown Hospital and local services.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 5, bathrooms: 2 },
      { name: "Villa", bedrooms: 4, bathrooms: 2 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "8",
    title: "Harbour Street, Wollongong",
    imageSrc: "/images/property-2.jpg",
    location: "Australia",
    silProvider: "Thrive365",
    supportLevel: "Medium Physical Support",
    dropdownName: "64 Turner St",
    dropdownImage: "/images/dropdown/dropdown-8-219f54.png",
    images: [
      { src: "/images/property-2.jpg", alt: "Harbour Street main view" },
      { src: "/images/property-3.jpg", alt: "Harbour Street interior" },
      { src: "/images/property-1.jpg", alt: "Harbour Street bedroom" },
      { src: "/images/property-2.jpg", alt: "Harbour Street kitchen" },
      { src: "/images/property-3.jpg", alt: "Harbour Street bathroom" },
      { src: "/images/property-1.jpg", alt: "Harbour Street living area" },
      { src: "/images/property-2.jpg", alt: "Harbour Street exterior" },
    ],
    description:
      "64 Turner St, Wollongong is a modern SDA property located in the heart of the Illawarra region. The property offers accessible living with quality finishes, close to beaches, shopping, and Wollongong Hospital.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 2", bedrooms: 2, bathrooms: 1 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "9",
    title: "Valley View Road, Richmond",
    imageSrc: "/images/property-3.jpg",
    location: "Australia",
    silProvider: "CareConnect",
    supportLevel: "High Physical Support",
    dropdownName: "12 Valley View Rd",
    dropdownImage: "/images/dropdown/dropdown-3.png",
    images: [
      { src: "/images/property-3.jpg", alt: "Valley View Road main view" },
      { src: "/images/property-1.jpg", alt: "Valley View Road interior" },
      { src: "/images/property-2.jpg", alt: "Valley View Road bedroom" },
      { src: "/images/property-3.jpg", alt: "Valley View Road kitchen" },
      { src: "/images/property-1.jpg", alt: "Valley View Road bathroom" },
      { src: "/images/property-2.jpg", alt: "Valley View Road living area" },
      { src: "/images/property-3.jpg", alt: "Valley View Road exterior" },
    ],
    description:
      "12 Valley View Rd, Richmond is a purpose-built SDA property set in a peaceful semi-rural setting. The home offers generous living spaces with high-quality accessible features, close to Richmond's town centre and the Hawkesbury River precinct.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 4, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 2", bedrooms: 3, bathrooms: 1 },
    ],
    details: DEFAULT_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id);
}

export function getAllPropertyIds(): string[] {
  return PROPERTIES.map((p) => p.id);
}
