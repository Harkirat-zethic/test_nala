import type { Property, PropertyDetailCategory } from "@/types";
import { text } from "stream/consumers";

const DEFAULT_HPS_DETAILS: PropertyDetailCategory[] = [
  {
    title: "Bedroom",
    features: [
      { label: "Feature 1", description: "Huge bedrooms", icon: "bedroom" },
      { label: "Feature 2", description: "High-quality and accessible wardrobes", icon: "wardrobe" },
      { label: "Feature 3", description: "Automatic windows and blinds", icon: "window" },
      { label: "Feature 4", description: "Individual air-conditioning in each room", icon: "ac" },
      { label: "Feature 5", description: "Provisions for ceiling hoists and other safety features", icon: "hoist" },
    ],
  },
  {
    title: "Living Spaces",
    features: [
      { label: "Feature 1", description: "Multiple living spaces, including a study", icon: "living-room" },
      { label: "Feature 2", description: "Beautiful outdoor deck area", icon: "park" },
      { label: "Feature 3", description: "Huge, welcoming backyard with plenty of open space and greenery", icon: "fence" },
    ],
  },
  {
    title: "Kitchen",
    features: [
      { label: "Feature 1", description: "High-quality kitchen appliances and tapware, tailored for complete accessibility", icon: "kitchen" },
      { label: "Feature 2", description: "Stone benchtops with height adjustability, granite sink, side-opening oven and other industry leading features", icon: "sink" },
    ],
  },
  {
    title: "Bathrooms",
    features: [
      { label: "Feature 1", description: "Spacious accessible bathrooms ensuring a comfortable experience", icon: "bathtub" },
      { label: "Feature 2", description: "Slip resistant floors and provision for ceiling hoists and other safety features", icon: "floor-plan" },
      { label: "Feature 3", description: "Quality tapware", icon: "tapware" },
    ],
  },
  {
    title: "Utilities",
    features: [
      { label: "Feature 1", description: "24/7 Power Back-up in case of power outage", icon: "battery" },
      { label: "Feature 2", description: "On-site Overnight Assistance", icon: "support" },
      { label: "Feature 3", description: "Class 3 Fire Safety Systems including Fire Sprinklers", icon: "fire-safety" },
    ],
  },
];

const DOONSIDE_DETAILS: PropertyDetailCategory[] = [
  ...DEFAULT_HPS_DETAILS.slice(0, 4),
  {
    title: "Utilities",
    features: [
      { label: "Feature 1", description: "Oversized laundry", icon: "laundry" },
      { label: "Feature 2", description: "24/7 Power Back-up in case of power outage", icon: "battery" },
      { label: "Feature 3", description: "On-site Overnight Assistance", icon: "support" },
      { label: "Feature 4", description: "Class 3 Fire Safety Systems including Fire Sprinklers", icon: "fire-safety" },
    ],
  },
];

const RESERVOIR_DETAILS: PropertyDetailCategory[] = [
  {
    title: "Bedroom",
    features: [
      { label: "Feature 1", description: "Large ensuite bathrooms", icon: "bathtub" },
      { label: "Feature 2", description: "Huge bedrooms", icon: "bedroom" },
      { label: "Feature 3", description: "High-quality and accessible wardrobes", icon: "wardrobe" },
      { label: "Feature 4", description: "Automatic windows and blinds", icon: "window" },
      { label: "Feature 5", description: "Individual air-conditioning controls in each room", icon: "ac" },
      { label: "Feature 6", description: "Provisions for ceiling hoists and other safety features", icon: "hoist" },
    ],
  },
  {
    title: "Living Spaces",
    features: [
      { label: "Feature 1", description: "Multiple living spaces, including a rumpus room", icon: "living-room" },
      { label: "Feature 2", description: "Beautiful outdoor deck area", icon: "park" },
      { label: "Feature 3", description: "Welcoming backyard with plenty of open space and greenery", icon: "fence" },
    ],
  },
  ...DEFAULT_HPS_DETAILS.slice(2, 4),
  {
    title: "Utilities",
    features: [
      { label: "Feature 1", description: "24/7 Power Back-up in case of power outage", icon: "battery" },
      { label: "Feature 2", description: "Accessible laundry", icon: "laundry" },
      { label: "Feature 3", description: "On-site Overnight Assistance", icon: "support" },
      { label: "Feature 4", description: "Class 3 Fire Safety Systems including Fire Sprinklers", icon: "fire-safety" },
    ],
  },
];

const INTERCOM_HPS_DETAILS: PropertyDetailCategory[] = [
  ...DEFAULT_HPS_DETAILS.slice(0, 4),
  {
    title: "Utilities",
    features: [
      { label: "Feature 1", description: "Hard-wired intercom audio/video system, between bedrooms and care office", icon: "intercom" },
      { label: "Feature 2", description: "24/7 Power Back-up in case of power outage", icon: "battery" },
      { label: "Feature 3", description: "On-site Overnight Assistance", icon: "support" },
      { label: "Feature 4", description: "Leading Fire Safety Systems", icon: "fire-safety" },
    ],
  },
];

const ROBUST_DETAILS: PropertyDetailCategory[] = [
  {
    title: "Robust Features",
    features: [
      { label: "Feature 1", description: "Commercial construction with durable materials", icon: "construction" },
      { label: "Feature 2", description: "Customisable villas to suit the unique needs of each resident", icon: "customize" },
      { label: "Feature 3", description: "Reinforced walls", icon: "wall" },
      { label: "Feature 4", description: "Shatter proof glass", icon: "glass" },
      { label: "Feature 5", description: "Lock secured draws and cupboards", icon: "lock" },
      { label: "Feature 6", description: "Inter-dwelling noise isolation and engineer designed auditory management", icon: "noise" },
      { label: "Feature 7", description: "24/7 Power Back-up in case of power outage", icon: "battery" },
      { label: "Feature 8", description: "Multiple On-site Overnight Assistance (OOA) Spaces", icon: "support" },
      { label: "Feature 9", description: "Intercom system hard-wired to the OOA from resident bedroom and bathroom", icon: "intercom" },
      { label: "Feature 10", description: "Class 3 Fire Safety Systems including Fire Sprinklers", icon: "fire-safety" },
    ],
  },
  ...DEFAULT_HPS_DETAILS.slice(0, 4),
];

const MAP_URLS = {
  doonside:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6633.669101718997!2d150.890352!3d-33.764941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1299098929b68b%3A0xc2c0fcbd0500279a!2s51A%20Doonside%20Cres%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174673690!5m2!1sen!2sin",
  reservoir:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6632.586627793489!2d150.900865!3d-33.778923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1299ae103070cd%3A0x4df0a7b20c3846b3!2s24%20Reservoir%20Rd%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174642538!5m2!1sen!2sin",
  wallpark:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6632.842146452423!2d150.921349!3d-33.775623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12985865e88e47%3A0xe8c0f7537f9e2d18!2s101%20Wall%20Park%20Ave%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174589628!5m2!1sen!2sin",
  newton:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6633.041745417371!2d150.899056!3d-33.773045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1299a921634f4b%3A0x340118fe32d4252!2s78%20Newton%20Rd%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174553354!5m2!1sen!2sin",
  duckmallois:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6632.228167724363!2d150.909785!3d-33.783552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12984d0dd7520b%3A0x1c97457244b98ba8!2s76%20Duckmallois%20Ave%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174510999!5m2!1sen!2sin",
  ross:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6630.355248003922!2d151.00767!3d-33.807729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31b462c3b21%3A0x8700d2cbd89ca2d9!2s36%20Ross%20St%2C%20North%20Parramatta%20NSW%202151%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174268656!5m2!1sen!2sin",
  raymond:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6634.75156748258!2d150.918624!3d-33.750954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298dcd638dd33%3A0x76efbaee195ebc1d!2s5%20Raymond%20St%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174240498!5m2!1sen!2sin",
  turner:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6634.491570320174!2d150.92151!3d-33.754314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298c28270a583%3A0xc574fc23b8f3d5fd!2s64%20Turner%20St%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1772174177561!5m2!1sen!2sin",
};

export const PROPERTIES: Property[] = [
  {
    id: "doonside-cres",
    title: "Doonside Cres, Blacktown",
    address: "51a Doonside Crescent, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/1.webp",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    designStandard: "2021 NDIS SDA Design Standard",
    dropdownName: "51a Doonside Cres",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/1.webp", alt: "Doonside Cres front view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/2.webp", alt: "Doonside Cres entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/3.webp", alt: "Doonside Cres interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/4.webp", alt: "Doonside Cres kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/5.webp", alt: "Doonside Cres living area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/6.webp", alt: "Doonside Cres bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/7.webp", alt: "Doonside Cres bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/8.webp", alt: "Doonside Cres laundry" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/9.webp", alt: "Doonside Cres backyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/doonside/10.webp", alt: "Doonside Cres exterior" },
    ],
    description:
      "51a Doonside Cres, Blacktown is a large, high-quality 3 bedroom home and 1 bedroom villa designed for individuals with High Physical Support needs. The property is in a great suburban location with easy access to the Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 3, bathrooms: 2 },
      { name: "Villa", bedrooms: 1, bathrooms: 1 },
      { name: "Villa 2", bedrooms: 1, bathrooms: 1 },
    ],
    details: DOONSIDE_DETAILS,
    mapEmbedUrl: MAP_URLS.doonside,
  },
  {
    id: "reservoir-rd",
    title: "Reservoir Rd, Blacktown",
    address: "24 Reservoir Road, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/1.webp",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    dropdownName: "24 Reservoir Rd",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/1.webp", alt: "Reservoir Road front view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/2.webp", alt: "Reservoir Road entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/3.webp", alt: "Reservoir Road interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/4.webp", alt: "Reservoir Road living area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/5.webp", alt: "Reservoir Road kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/6.webp", alt: "Reservoir Road bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/7.webp", alt: "Reservoir Road bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/8.webp", alt: "Reservoir Road ensuite" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/9.webp", alt: "Reservoir Road deck" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/10.webp", alt: "Reservoir Road backyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/11.webp", alt: "Reservoir Road villa exterior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/12.webp", alt: "Reservoir Road villa interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/reservoir/13.webp", alt: "Reservoir Road laundry" },
    ],
    description:
      "24 Reservoir Rd, Blacktown is a beautiful, newly built 3 bedroom house and 2 bedroom villa designed for residents with High Physical Support needs. This suburban home offers high-quality living with oversized bedrooms, large ensuite bathrooms, multiple living spaces and a variety of automated features. Centrally located within Blacktown, the property has easy access to Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 3, bathrooms: 4 },
      { name: "Villa", bedrooms: 2, bathrooms: 1 },
    ],
    details: RESERVOIR_DETAILS,
    mapEmbedUrl: MAP_URLS.reservoir,
  },
  {
    id: "wall-park-ave",
    title: "Wall Park Ave, Blacktown",
    address: "101 Wall Park Avenue, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/1.webp",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    dropdownName: "101 Wall Park Ave",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/1.webp", alt: "Wall Park Avenue front view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/2.webp", alt: "Wall Park Avenue entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/3.webp", alt: "Wall Park Avenue living area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/4.webp", alt: "Wall Park Avenue kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/5.webp", alt: "Wall Park Avenue deck" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/6.webp", alt: "Wall Park Avenue exterior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/7.webp", alt: "Wall Park Avenue bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/8.webp", alt: "Wall Park Avenue bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/9.webp", alt: "Wall Park Avenue villa" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/10.webp", alt: "Wall Park Avenue backyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/11.webp", alt: "Wall Park Avenue villa interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/wallpark/12.webp", alt: "Wall Park Avenue outdoor deck" },
    ],
    description:
      "101 Wall Park Ave, Blacktown is an innovative housing model, offering a 3 bedroom house, 2 bedroom villa and 1 bedroom villa designed for residents with High Physical Support needs. The newly-built property provides residents with modern, suburban living with large bedrooms, high-quality finishing's and a variety of automated features. Centrally located within Blacktown, the property is minutes away from Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "House", bedrooms: 3, bathrooms: 2 },
      { name: "Villa 1", bedrooms: 2, bathrooms: 1 },
      { name: "Villa 2", bedrooms: 1, bathrooms: 1 },
    ],
    details: RESERVOIR_DETAILS,
    mapEmbedUrl: MAP_URLS.wallpark,
  },
  {
    id: "newton-rd",
    title: "Newton Rd, Blacktown",
    address: "78 Newton Road, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/1.webp",
    location: "Blacktown, NSW",
    silProvider: "Bare Care",
    supportLevel: "High Physical Support",
    propertySubtitle: "Five villas",
    dropdownName: "78 Newton Rd",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/1.webp", alt: "Newton Road front view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/2.webp", alt: "Newton Road exterior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/3.webp", alt: "Newton Road living area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/4.webp", alt: "Newton Road kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/5.webp", alt: "Newton Road bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/6.webp", alt: "Newton Road bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/7.webp", alt: "Newton Road villa entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/8.webp", alt: "Newton Road villa interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/9.webp", alt: "Newton Road villa bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/10.webp", alt: "Newton Road villa bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/11.webp", alt: "Newton Road outdoor area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/12.webp", alt: "Newton Road garden" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/13.webp", alt: "Newton Road care room" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/14.webp", alt: "Newton Road deck" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/newton/15.webp", alt: "Newton Road backyard" },
    ],
    description:
      "78 Newton Road, Blacktown is a series of five 1 bedroom 1 bathroom villas designed for residents with High Physical Support needs. The property has enjoyable outdoor spaces and contains a large connected on-site care room. The villa configuration is designed to suit industry demand, providing a private, yet socially available lifestyle. The newly-built property provides residents with modern, suburban living with large bedrooms, high-quality finishing's and a variety of automated features. Centrally located within Blacktown, the property is minutes away from Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Villa 1", bedrooms: 1, bathrooms: 1 },
      { name: "Villa 2", bedrooms: 2, bathrooms: 1 },
      { name: "Villa 3", bedrooms: 1, bathrooms: 1 },
      { name: "Villa 4", bedrooms: 1, bathrooms: 1 },
      { name: "Villa 5", bedrooms: 1, bathrooms: 1 },
    ],
    details: INTERCOM_HPS_DETAILS,
    mapEmbedUrl: MAP_URLS.newton,
  },
  {
    id: "duckmallois-ave",
    title: "Duckmallois Ave, Blacktown",
    address: "76 Duckmallois Avenue, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/1.webp",
    location: "Blacktown, NSW",
    silProvider: "My Guardian",
    supportLevel: "Robust",
    propertySubtitle: "Two villas",
    dropdownName: "76 Duckmallois Ave",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/1.webp", alt: "Duckmallois Avenue front view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/2.webp", alt: "Duckmallois Avenue front entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/3.webp", alt: "Duckmallois Avenue front exterior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/4.webp", alt: "Duckmallois Avenue backyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/5.webp", alt: "Duckmallois Avenue back garden" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/6.webp", alt: "Duckmallois Avenue outdoor area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/7.webp", alt: "Duckmallois Avenue back patio" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/8.webp", alt: "Duckmallois Avenue rear view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/9.webp", alt: "Duckmallois Avenue living area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/10.webp", alt: "Duckmallois Avenue lounge room" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/11.webp", alt: "Duckmallois Avenue living room" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/12.webp", alt: "Duckmallois Avenue kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/13.webp", alt: "Duckmallois Avenue dining area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/14.webp", alt: "Duckmallois Avenue open plan living" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/15.webp", alt: "Duckmallois Avenue bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/16.webp", alt: "Duckmallois Avenue bedroom 2" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/17.webp", alt: "Duckmallois Avenue bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/18.webp", alt: "Duckmallois Avenue ensuite" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/duckmallois/19.webp", alt: "Duckmallois Avenue laundry" },
    ],
    description:
      "76 Duckmallois Ave, Blacktown is a property hosting two 2 bedroom 2 bathroom Robust villas on a 1470sqm block of land. The property has expansive outdoor space with huge beautiful trees and large garden spaces. Residents enjoy privacy and comfort in their self-contained villas which can be customised to each individuals needs during the construction process. The villa configuration is designed in consultation with the SIL Provider to suit industry demand, providing a private, yet socially available lifestyle. The property is built with durable commercial grade construction materials intended to meet the rigorous demands of Robust residents. Including reinforced walls, shatterproof glass, panic buttons, secured cupboards/cabinets, engineer designed noise isolation and Class 3 Fire Safety Systems. Centrally located within Blacktown, the property is minutes away from Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Villa", bedrooms: 2, bathrooms: 2 },
    ],
    details: ROBUST_DETAILS,
    mapEmbedUrl: MAP_URLS.duckmallois,
  },
  {
    id: "ross-st",
    title: "Ross St, North Parramatta",
    address: "36 Ross Street, North Parramatta NSW 2151",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/1.webp",
    location: "North Parramatta, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    propertySubtitle: "Five villas",
    dropdownName: "36 Ross St",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/1.webp", alt: "Ross Street front view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/2.webp", alt: "Ross Street entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/3.webp", alt: "Ross Street exterior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/4.webp", alt: "Ross Street villa entrance" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/5.webp", alt: "Ross Street living area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/6.webp", alt: "Ross Street kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/7.webp", alt: "Ross Street bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/8.webp", alt: "Ross Street bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/9.webp", alt: "Ross Street villa interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/10.webp", alt: "Ross Street backyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/11.webp", alt: "Ross Street outdoor area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/12.webp", alt: "Ross Street garden" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/ross/13.webp", alt: "Ross Street deck" },
    ],
    description:
      "36 Ross St, North Parramatta is a series of five self-contained 1 bedroom 1 bathroom villas designed for residents with High Physical Support needs. The villa configuration is designed to suit industry demand, providing a private, yet socially available lifestyle. The newly-built property provides residents with modern accessible living with large bedrooms, high-quality finishing's and a variety of automated features catering resident needs. The property has excellent location within Parramatta. Minutes away from Parramatta river, Victoria Park and Church Street. The property is within 100m of the new Parramatta light rail and can easily access the best of Parramatta's amenities.",
    brochureUrl: "#",
    villas: [
      { name: "Villa", bedrooms: 1, bathrooms: 1 },
    ],
    details: INTERCOM_HPS_DETAILS,
    mapEmbedUrl: MAP_URLS.ross,
  },
  {
    id: "raymond-st",
    title: "5 Raymond St, Blacktown",
    address: "5 Raymond Street, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%201.webp",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    designStandard: "2025 NDIS SDA Design Standard",
    propertySubtitle: "Two Houses",
    staffRooms: 2,
    dropdownName: "5 Raymond St",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Front%20View%20Render%20-%205%20Raymond%20St%2C%20Blacktown%20.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%20Dusk.webp", alt: "Raymond Street frontyard at dusk" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Front%20View%20Render%20-%205%20Raymond%20St%2C%20Blacktown%20.webp", alt: "Raymond Street front view render" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%201.webp", alt: "Raymond Street frontyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%205.webp", alt: "Raymond Street frontyard view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%206.webp", alt: "Raymond Street frontyard angle" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%207.webp", alt: "Raymond Street frontyard exterior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Frontyard%209.webp", alt: "Raymond Street frontyard wide" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Aerial%201.webp", alt: "Raymond Street aerial view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Aerial%204.webp", alt: "Raymond Street aerial angle" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Aerial%207.webp", alt: "Raymond Street aerial wide" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Livingroom%201.webp", alt: "Raymond Street living room" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Livingroom%202.webp", alt: "Raymond Street living room view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Livingroom%203.webp", alt: "Raymond Street living room angle" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Livingroom%204.webp", alt: "Raymond Street living room wide" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Livingroom%205.webp", alt: "Raymond Street living room detail" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Livingroom%207.webp", alt: "Raymond Street living room interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Kitchen%201.webp", alt: "Raymond Street kitchen" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Kitchen%202.webp", alt: "Raymond Street kitchen view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Dining%201.webp", alt: "Raymond Street dining area" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Dining%202.webp", alt: "Raymond Street dining view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Dining%205.webp", alt: "Raymond Street dining angle" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Bedroom%202.webp", alt: "Raymond Street bedroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Bedroom%203.webp", alt: "Raymond Street bedroom view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Bedroom%204.webp", alt: "Raymond Street bedroom angle" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Bedroom%205.webp", alt: "Raymond Street bedroom wide" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Bedroom%207.webp", alt: "Raymond Street bedroom interior" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Toilet%201.webp", alt: "Raymond Street bathroom" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Toilet%202.webp", alt: "Raymond Street bathroom view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Corridor%201.webp", alt: "Raymond Street corridor" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Laundry%201.webp", alt: "Raymond Street laundry" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Laundry%202.webp", alt: "Raymond Street laundry view" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Backyard%205.webp", alt: "Raymond Street backyard" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/raymond/Backyard%207.webp", alt: "Raymond Street backyard view" },
    ],
    description:
      "5 Raymond Street, Blacktown is a newly completed 2025 development by NALA Properties, purpose-built for residents with High Physical Support needs. Nestled in a quiet suburban pocket of Blacktown, the property offers a peaceful lifestyle surrounded by leafy parks and calm residential streets. Comprising two beautifully appointed homes, the property delivers modern, accessible living with large bedrooms, premium finishes, and advanced home automation. Designed to balance privacy with comfort, each home provides spacious indoor living alongside inviting outdoor spaces. Conveniently located just five minutes from Westpoint Shopping Centre and Blacktown Hospital, 5 Raymond Street ensures family, friends, and healthcare professionals can easily visit and stay connected.",
    brochureUrl: "#",
    villas: [
      { name: "Houses", bedrooms: 2, bathrooms: 2 },
    ],
    details: INTERCOM_HPS_DETAILS,
    mapEmbedUrl: MAP_URLS.raymond,
  },
  {
    id: "turner-st",
    title: "64 Turner St, Blacktown",
    address: "64 Turner Street, Blacktown NSW 2148",
    imageSrc: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/1.webp",
    location: "Blacktown, NSW",
    silProvider: "TBC",
    supportLevel: "High Physical Support",
    designStandard: "2025 NDIS SDA Design Standard",
    propertySubtitle: "Nine Villas",
    staffRooms: 2,
    dropdownName: "64 Turner St",
    dropdownImage: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/1.webp",
    images: [
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/1.webp", alt: "Turner Street front view render" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/2.webp", alt: "Turner Street living room render" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/3.webp", alt: "Turner Street bedroom and terrace render" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/4.webp", alt: "Turner Street corridor render" },
      { src: "https://tuyaogwcltqm1dzs.public.blob.vercel-storage.com/properties/turner/5.webp", alt: "Turner Street bathroom interior" },
    ],
    description:
      "64 Turner Street, Blacktown offers a premium collection of nine brand-new 1 bedroom 1 bathroom villas, purpose-built for residents with High Physical Support needs. Designed to foster both independence and community, the property features thoughtfully landscaped gardens, multiple outdoor patios, and dedicated BBQ areas — perfect for social connection and relaxation. Residents can enjoy an on-site accessible swimming pool and a spacious on-site communal hub, with overnight staff offices to ensure continuous support. Each villa combines privacy with a modern, suburban lifestyle — featuring large bedrooms, high-quality finishes, and smart home automation. Located in the heart of Blacktown, 64 Turner Street is minutes from Westpoint Shopping Centre, Blacktown Showground Precinct, and Blacktown Hospital. Its central location offers convenient access for family, friends, and medical professionals alike.",
    brochureUrl: "#",
    villas: [
      { name: "Villa", bedrooms: 1, bathrooms: 1 },
    ],
    staff:[
      {text: "Two Overnight Staff Rooms"}
    ],
    details: INTERCOM_HPS_DETAILS,
    mapEmbedUrl: MAP_URLS.turner,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id);
}

export function getAllPropertyIds(): string[] {
  return PROPERTIES.map((p) => p.id);
}
