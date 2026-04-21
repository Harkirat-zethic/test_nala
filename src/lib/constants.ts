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
    imageSrc: "/images/offer-01.webp",
  },
  {
    number: "02",
    title: "Reliability and Care through our SIL Partners",
    description:
      "By partnering with industry leading and experienced SIL providers, NALA ensures its residents consistently receive the best possible care.",
    imageSrc: "/images/offer-02.webp",
  },
  {
    number: "03",
    title: "Medium Term Accommodation provides flexible housing.",
    description:
      "NALA provides NDIS participants with the valuable option for MTA lasting up to 90 days, allowing them to carefully select their preferred SDA.",
    imageSrc: "/images/offer-03.webp",
  },
  {
    number: "04",
    title: "Individually Tailored Luxury Villas for You",
    description:
      "NALA specializes in properties that meet individual needs. NALA villas can be customized during construction to fit specific requirements.",
    imageSrc: "/images/offer-04.webp",
  },
];

export const VALUE_ITEMS: ValueItem[] = [
  {
    number: "01",
    title: "Act with Integrity",
    description:
      "We always do what is right, even when it is not the easiest option. Our decisions are guided by honesty, fairness, and strong ethical standards.",
    imageSrc: "/images/value-1.webp",
  },
  {
    number: "02",
    title: "Residents Needs Come First",
    description:
      "The wellbeing, safety, and dignity of our residents are at the centre of everything we do. We listen, respond, and design our homes to support each person's individual needs.",
    imageSrc: "/images/value-2.webp",
  },
  {
    number: "03",
    title: "Take Pride in Our Work",
    description:
      "We care deeply about the quality of every home we create and manage. We aim for excellence, pay attention to detail, and stand behind everything we deliver.",
    imageSrc: "/images/value-3.webp",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Focus on Dignity & Independence",
    description:
      "Our homes are designed to support confident, independent living, with a strong focus on privacy, comfort, and ease of movement.",
    imageSrc: "/images/why-choose-1.webp",
  },
  {
    title: "Designed with Purpose",
    description:
      "Every detail is thoughtfully considered to enhance safety, usability, and long term comfort, going beyond minimum standards.",
    imageSrc: "/images/why-choose-2.webp",
  },
  {
    title: "Built for Trust",
    description:
      "We build lasting relationships through clear communication, transparency, and consistently high quality delivery.",
    imageSrc: "/images/why-choose-3.webp",
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
