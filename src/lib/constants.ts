import type { NavLink, OfferItem, ValueItem, WhyChooseItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Contact us", href: "/contact" },
];

export const OFFER_ITEMS: OfferItem[] = [
  {
    number: "01",
    title: "Purpose Built Specialist Disability Accommodation",
    description:
      "NALA specializes in properties that meet individual needs. NALA villas can be customized during construction to fit specific requirements.",
    imageSrc: "/images/offer-01.jpg",
  },
  {
    number: "02",
    title: "Reliability and Care through our SIL Partners",
    description:
      "By partnering with industry leading and experienced SIL providers, NALA ensures its residents consistently receive the best possible care.",
    imageSrc: "/images/offer-02.jpg",
  },
  {
    number: "03",
    title: "Medium Term Accommodation provides flexible housing.",
    description:
      "NALA provides NDIS participants with the valuable option for MTA lasting up to 90 days, allowing them to carefully select their preferred SDA.",
    imageSrc: "/images/offer-03.jpg",
  },
  {
    number: "04",
    title: "Individually Tailored Luxury Villas for You",
    description:
      "NALA specializes in properties that meet individual needs. NALA villas can be customized during construction to fit specific requirements.",
    imageSrc: "/images/offer-04.jpg",
  },
];

export const VALUE_ITEMS: ValueItem[] = [
  { number: "01", title: "Follow your ethics", imageSrc: "/images/value-1.jpg" },
  { number: "02", title: "Residents needs come first", imageSrc: "/images/value-2.jpg" },
  { number: "03", title: "Take pride in your work", imageSrc: "/images/value-3.jpg" },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Tailored Homes",
    description: "Spacious homes that strive for excellence and innovation",
    imageSrc: "/images/why-choose-1.png",
  },
  {
    title: "Convenient Locations",
    description: "Homes in accessible locations for family, friends, and caregivers.",
    imageSrc: "/images/why-choose-2.jpg",
  },
  {
    title: "20 years in Property",
    description: "Ensures functional, easily adaptable, comfortable and safe living",
    imageSrc: "/images/why-choose-3.jpg",
  },
];

export const PROPERTY_SLIDES = [
  {
    id: "slide-1",
    cards: [
      {
        id: "1",
        title: "Ocean View Drive, Manly",
        imageSrc: "/images/property-1.jpg",
        silProvider: "CareConnect",
        supportLevel: "Medium Physical Support",
      },
      {
        id: "2",
        title: "Ocean View Drive, Manly",
        imageSrc: "/images/property-2.jpg",
        villas: [
          { name: "Home", bedrooms: 3, bathrooms: 2 },
          { name: "Villa 1", bedrooms: 3, bathrooms: 2 },
          { name: "Villa 2", bedrooms: 2, bathrooms: 1 },
        ],
      },
      {
        id: "3",
        title: "Ocean View Drive, Manly",
        imageSrc: "/images/property-3.jpg",
        silProvider: "CareConnect",
        supportLevel: "Medium Physical Support",
      },
    ],
  },
];

export const COMPANY_INFO = {
  name: "NALA Properties",
  tagline: "SDA Properties by Nanak Accessible Living Australia",
  email: "info@nalaproperties.com.au",
  ndisProvider: "4-GMPNJSS",
  copyright: "Copyright © 2020. Nanak Accessible Living Australia All rights reserved.",
};

export const FOOTER_LINKS = NAV_LINKS;
