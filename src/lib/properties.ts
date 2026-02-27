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

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.123456789!2d150.9!3d-33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzEyLjAiUyAxNTDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890";

export const PROPERTIES: Property[] = [
  {
    id: "doonside-cres",
    title: "Doonside Cres, Blacktown",
    address: "51a Doonside Crescent, Blacktown NSW 2148",
    imageSrc: "/images/properties/doonside/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    designStandard: "2021 NDIS SDA Design Standard",
    dropdownName: "51a Doonside Cres",
    dropdownImage: "/images/properties/doonside/1.jpg",
    images: [
      { src: "/images/properties/doonside/1.jpg", alt: "Doonside Cres front view" },
      { src: "/images/properties/doonside/2.jpg", alt: "Doonside Cres entrance" },
      { src: "/images/properties/doonside/3.jpg", alt: "Doonside Cres interior" },
      { src: "/images/properties/doonside/4.jpg", alt: "Doonside Cres kitchen" },
      { src: "/images/properties/doonside/5.jpg", alt: "Doonside Cres living area" },
      { src: "/images/properties/doonside/6.jpg", alt: "Doonside Cres bedroom" },
      { src: "/images/properties/doonside/7.jpg", alt: "Doonside Cres bathroom" },
      { src: "/images/properties/doonside/8.jpg", alt: "Doonside Cres laundry" },
      { src: "/images/properties/doonside/9.jpg", alt: "Doonside Cres backyard" },
      { src: "/images/properties/doonside/10.jpg", alt: "Doonside Cres exterior" },
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
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "reservoir-rd",
    title: "Reservoir Road, Blacktown",
    address: "24 Reservoir Road, Blacktown NSW 2148",
    imageSrc: "/images/properties/reservoir/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    dropdownName: "24 Reservoir Rd",
    dropdownImage: "/images/properties/reservoir/1.jpg",
    images: [
      { src: "/images/properties/reservoir/1.jpg", alt: "Reservoir Road front view" },
      { src: "/images/properties/reservoir/2.jpg", alt: "Reservoir Road entrance" },
      { src: "/images/properties/reservoir/3.jpg", alt: "Reservoir Road interior" },
      { src: "/images/properties/reservoir/4.jpg", alt: "Reservoir Road living area" },
      { src: "/images/properties/reservoir/5.jpg", alt: "Reservoir Road kitchen" },
      { src: "/images/properties/reservoir/6.jpg", alt: "Reservoir Road bedroom" },
      { src: "/images/properties/reservoir/7.jpg", alt: "Reservoir Road bathroom" },
      { src: "/images/properties/reservoir/8.jpg", alt: "Reservoir Road ensuite" },
      { src: "/images/properties/reservoir/9.jpg", alt: "Reservoir Road deck" },
      { src: "/images/properties/reservoir/10.jpg", alt: "Reservoir Road backyard" },
      { src: "/images/properties/reservoir/11.jpg", alt: "Reservoir Road villa exterior" },
      { src: "/images/properties/reservoir/12.jpg", alt: "Reservoir Road villa interior" },
      { src: "/images/properties/reservoir/13.jpg", alt: "Reservoir Road laundry" },
    ],
    description:
      "24 Reservoir Rd, Blacktown is a beautiful, newly built 3 bedroom house and 2 bedroom villa designed for residents with High Physical Support needs. This suburban home offers high-quality living with oversized bedrooms, large ensuite bathrooms, multiple living spaces and a variety of automated features. Centrally located within Blacktown, the property has easy access to Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Home", bedrooms: 3, bathrooms: 4 },
      { name: "Villa", bedrooms: 2, bathrooms: 1 },
    ],
    details: RESERVOIR_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "wall-park-ave",
    title: "Wall Park Avenue, Blacktown",
    address: "101 Wall Park Avenue, Blacktown NSW 2148",
    imageSrc: "/images/properties/wallpark/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    dropdownName: "101 Wall Park Ave",
    dropdownImage: "/images/properties/wallpark/1.jpg",
    images: [
      { src: "/images/properties/wallpark/1.jpg", alt: "Wall Park Avenue front view" },
      { src: "/images/properties/wallpark/2.jpg", alt: "Wall Park Avenue entrance" },
      { src: "/images/properties/wallpark/3.jpg", alt: "Wall Park Avenue living area" },
      { src: "/images/properties/wallpark/4.jpg", alt: "Wall Park Avenue kitchen" },
      { src: "/images/properties/wallpark/5.jpg", alt: "Wall Park Avenue deck" },
      { src: "/images/properties/wallpark/6.jpg", alt: "Wall Park Avenue exterior" },
      { src: "/images/properties/wallpark/7.jpg", alt: "Wall Park Avenue bedroom" },
      { src: "/images/properties/wallpark/8.jpg", alt: "Wall Park Avenue bathroom" },
      { src: "/images/properties/wallpark/9.jpg", alt: "Wall Park Avenue villa" },
      { src: "/images/properties/wallpark/10.jpg", alt: "Wall Park Avenue backyard" },
      { src: "/images/properties/wallpark/11.jpg", alt: "Wall Park Avenue villa interior" },
      { src: "/images/properties/wallpark/12.jpg", alt: "Wall Park Avenue outdoor deck" },
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
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "newton-rd",
    title: "Newton Road, Blacktown",
    address: "78 Newton Road, Blacktown NSW 2148",
    imageSrc: "/images/properties/newton/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "Bare Care",
    supportLevel: "High Physical Support",
    propertySubtitle: "Five villas",
    dropdownName: "78 Newton Rd",
    dropdownImage: "/images/properties/newton/1.jpg",
    images: [
      { src: "/images/properties/newton/1.jpg", alt: "Newton Road front view" },
      { src: "/images/properties/newton/2.jpg", alt: "Newton Road exterior" },
      { src: "/images/properties/newton/3.jpg", alt: "Newton Road living area" },
      { src: "/images/properties/newton/4.jpg", alt: "Newton Road kitchen" },
      { src: "/images/properties/newton/5.jpg", alt: "Newton Road bedroom" },
      { src: "/images/properties/newton/6.jpg", alt: "Newton Road bathroom" },
      { src: "/images/properties/newton/7.jpg", alt: "Newton Road villa entrance" },
      { src: "/images/properties/newton/8.jpg", alt: "Newton Road villa interior" },
      { src: "/images/properties/newton/9.jpg", alt: "Newton Road villa bedroom" },
      { src: "/images/properties/newton/10.jpg", alt: "Newton Road villa bathroom" },
      { src: "/images/properties/newton/11.jpg", alt: "Newton Road outdoor area" },
      { src: "/images/properties/newton/12.jpg", alt: "Newton Road garden" },
      { src: "/images/properties/newton/13.jpg", alt: "Newton Road care room" },
      { src: "/images/properties/newton/14.jpg", alt: "Newton Road deck" },
      { src: "/images/properties/newton/15.jpg", alt: "Newton Road backyard" },
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
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "duckmallois-ave",
    title: "Duckmallois Avenue, Blacktown",
    address: "76 Duckmallois Avenue, Blacktown NSW 2148",
    imageSrc: "/images/properties/duckmallois/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "My Guardian",
    supportLevel: "Robust",
    propertySubtitle: "Two villas",
    dropdownName: "76 Duckmallois Ave",
    dropdownImage: "/images/properties/duckmallois/1.jpg",
    images: [
      { src: "/images/properties/duckmallois/1.jpg", alt: "Duckmallois Avenue front view" },
      { src: "/images/properties/duckmallois/2.jpg", alt: "Duckmallois Avenue front entrance" },
      { src: "/images/properties/duckmallois/3.jpg", alt: "Duckmallois Avenue front exterior" },
      { src: "/images/properties/duckmallois/4.jpg", alt: "Duckmallois Avenue backyard" },
      { src: "/images/properties/duckmallois/5.jpg", alt: "Duckmallois Avenue back garden" },
      { src: "/images/properties/duckmallois/6.jpg", alt: "Duckmallois Avenue outdoor area" },
      { src: "/images/properties/duckmallois/7.jpg", alt: "Duckmallois Avenue back patio" },
      { src: "/images/properties/duckmallois/8.jpg", alt: "Duckmallois Avenue rear view" },
      { src: "/images/properties/duckmallois/9.jpg", alt: "Duckmallois Avenue living area" },
      { src: "/images/properties/duckmallois/10.jpg", alt: "Duckmallois Avenue lounge room" },
      { src: "/images/properties/duckmallois/11.jpg", alt: "Duckmallois Avenue living room" },
      { src: "/images/properties/duckmallois/12.jpg", alt: "Duckmallois Avenue kitchen" },
      { src: "/images/properties/duckmallois/13.jpg", alt: "Duckmallois Avenue dining area" },
      { src: "/images/properties/duckmallois/14.jpg", alt: "Duckmallois Avenue open plan living" },
      { src: "/images/properties/duckmallois/15.jpg", alt: "Duckmallois Avenue bedroom" },
      { src: "/images/properties/duckmallois/16.jpg", alt: "Duckmallois Avenue bedroom 2" },
      { src: "/images/properties/duckmallois/17.jpg", alt: "Duckmallois Avenue bathroom" },
      { src: "/images/properties/duckmallois/18.jpg", alt: "Duckmallois Avenue ensuite" },
      { src: "/images/properties/duckmallois/19.jpg", alt: "Duckmallois Avenue laundry" },
    ],
    description:
      "76 Duckmallois Ave, Blacktown is a property hosting two 2 bedroom 2 bathroom Robust villas on a 1470sqm block of land. The property has expansive outdoor space with huge beautiful trees and large garden spaces. Residents enjoy privacy and comfort in their self-contained villas which can be customised to each individuals needs during the construction process. The villa configuration is designed in consultation with the SIL Provider to suit industry demand, providing a private, yet socially available lifestyle. The property is built with durable commercial grade construction materials intended to meet the rigorous demands of Robust residents. Including reinforced walls, shatterproof glass, panic buttons, secured cupboards/cabinets, engineer designed noise isolation and Class 3 Fire Safety Systems. Centrally located within Blacktown, the property is minutes away from Westpoint Shopping Centre, Blacktown Showground Precinct and Blacktown Hospital. As Blacktown is centrally located within Sydney's western suburbs, any family, friends or medical staff visiting residents can easily access the property.",
    brochureUrl: "#",
    villas: [
      { name: "Villa", bedrooms: 2, bathrooms: 2 },
    ],
    details: ROBUST_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "ross-st",
    title: "Ross Street, North Parramatta",
    address: "36 Ross Street, North Parramatta NSW 2151",
    imageSrc: "/images/properties/ross/1.jpg",
    location: "North Parramatta, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    propertySubtitle: "Five villas",
    dropdownName: "36 Ross St",
    dropdownImage: "/images/properties/ross/1.jpg",
    images: [
      { src: "/images/properties/ross/1.jpg", alt: "Ross Street front view" },
      { src: "/images/properties/ross/2.jpg", alt: "Ross Street entrance" },
      { src: "/images/properties/ross/3.jpg", alt: "Ross Street exterior" },
      { src: "/images/properties/ross/4.jpg", alt: "Ross Street villa entrance" },
      { src: "/images/properties/ross/5.jpg", alt: "Ross Street living area" },
      { src: "/images/properties/ross/6.jpg", alt: "Ross Street kitchen" },
      { src: "/images/properties/ross/7.jpg", alt: "Ross Street bedroom" },
      { src: "/images/properties/ross/8.jpg", alt: "Ross Street bathroom" },
      { src: "/images/properties/ross/9.jpg", alt: "Ross Street villa interior" },
      { src: "/images/properties/ross/10.jpg", alt: "Ross Street backyard" },
      { src: "/images/properties/ross/11.jpg", alt: "Ross Street outdoor area" },
      { src: "/images/properties/ross/12.jpg", alt: "Ross Street garden" },
      { src: "/images/properties/ross/13.jpg", alt: "Ross Street deck" },
    ],
    description:
      "36 Ross St, North Parramatta is a series of five self-contained 1 bedroom 1 bathroom villas designed for residents with High Physical Support needs. The villa configuration is designed to suit industry demand, providing a private, yet socially available lifestyle. The newly-built property provides residents with modern accessible living with large bedrooms, high-quality finishing's and a variety of automated features catering resident needs. The property has excellent location within Parramatta. Minutes away from Parramatta river, Victoria Park and Church Street. The property is within 100m of the new Parramatta light rail and can easily access the best of Parramatta's amenities.",
    brochureUrl: "#",
    villas: [
      { name: "Villa", bedrooms: 1, bathrooms: 1 },
    ],
    details: INTERCOM_HPS_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "raymond-st",
    title: "5 Raymond St, Blacktown",
    address: "5 Raymond Street, Blacktown NSW 2148",
    imageSrc: "/images/properties/raymond/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "Thrive365",
    supportLevel: "High Physical Support",
    designStandard: "2025 NDIS SDA Design Standard",
    propertySubtitle: "Two Houses",
    staffRooms: 2,
    dropdownName: "5 Raymond St",
    dropdownImage: "/images/properties/raymond/1.jpg",
    images: [
      { src: "/images/properties/raymond/1.jpg", alt: "Raymond Street front view render" },
    ],
    description:
      "5 Raymond Street, Blacktown is a newly completed 2025 development by NALA Properties, purpose-built for residents with High Physical Support needs. Nestled in a quiet suburban pocket of Blacktown, the property offers a peaceful lifestyle surrounded by leafy parks and calm residential streets. Comprising two beautifully appointed homes, the property delivers modern, accessible living with large bedrooms, premium finishes, and advanced home automation. Designed to balance privacy with comfort, each home provides spacious indoor living alongside inviting outdoor spaces. Conveniently located just five minutes from Westpoint Shopping Centre and Blacktown Hospital, 5 Raymond Street ensures family, friends, and healthcare professionals can easily visit and stay connected.",
    brochureUrl: "#",
    villas: [
      { name: "Houses", bedrooms: 2, bathrooms: 2 },
    ],
    details: INTERCOM_HPS_DETAILS,
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
  {
    id: "turner-st",
    title: "64 Turner St, Blacktown",
    address: "64 Turner Street, Blacktown NSW 2148",
    imageSrc: "/images/properties/turner/1.jpg",
    location: "Blacktown, NSW",
    silProvider: "TBC",
    supportLevel: "High Physical Support",
    designStandard: "2025 NDIS SDA Design Standard",
    propertySubtitle: "Nine Villas",
    staffRooms: 2,
    dropdownName: "64 Turner St",
    dropdownImage: "/images/properties/turner/1.jpg",
    images: [
      { src: "/images/properties/turner/1.jpg", alt: "Turner Street front view render" },
      { src: "/images/properties/turner/2.jpg", alt: "Turner Street living room render" },
      { src: "/images/properties/turner/3.jpg", alt: "Turner Street bedroom and terrace render" },
      { src: "/images/properties/turner/4.jpg", alt: "Turner Street corridor render" },
      { src: "/images/properties/turner/5.jpg", alt: "Turner Street bathroom interior" },
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
    mapEmbedUrl: DEFAULT_MAP_URL,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id);
}

export function getAllPropertyIds(): string[] {
  return PROPERTIES.map((p) => p.id);
}
