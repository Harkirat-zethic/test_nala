import type { NavLink, OfferItem, ValueItem, TimelineItem, WhyChooseItem } from "@/types";
import { ShieldCheck, HeartHandshake, Award } from "lucide-react";

export const SECTION_IMAGES = {
  heroSectionBg: { src: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/hero-section-bg.webp", width: 8192, height: 3908 },
  homepageBanner: { src: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/homepage-banner.webp", width: 8192, height: 3640 },
  sdaHouseBg:    { src: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/sda-house-bg.png",    width: 3842, height: 2162 },
  valuesBgHouse: { src: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/values-bg-house.webp", width: 4096, height: 1655 },
  valuesHouse:   { src: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/values-house.webp",    width: 4096, height: 4060 },
  whyChooseBg:   { src: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/why-choose-bg.webp",   width: 6000, height: 3375 },
} as const;

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
      "NALA homes offer newly built state-of-the-art features, specifically built to support individuals with complex physical and behavioral needs.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/offer-01.webp",
  },
  {
    number: "02",
    title: "Reliability and Care through our SIL Partners",
    description:
      "By partnering with industry leading and experienced SIL providers, NALA ensures its residents consistently receive the best possible care.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/offer-02.webp",
  },
  {
    number: "03",
    title: "Medium Term Accommodation (MTA)",
    description:
      "NALA offers NDIS participants with the option for MTA up to 90 days, while they select their SDA.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/offer-03.webp",
  },
  {
    number: "04",
    title: "Individually Tailored Villas",
    description:
      "NALA focuses on properties suitable to the needs of each individual. As such, NALA villas can be tailored during the construction process to suit individual requirements.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/offer-04.webp",
  },
];

export const VALUE_ITEMS: ValueItem[] = [
  {
    icon: ShieldCheck,
    title: "Act with Integrity",
    description:
      "We always do what is right, even when it is not the easiest option. Our decisions are guided by honesty, fairness, and strong ethical standards.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/value-1.webp",
  },
  {
    icon: HeartHandshake,
    title: "Residents Needs Come First",
    description:
      "The wellbeing, safety, and dignity of our residents are at the centre of everything we do. We listen, respond, and design our homes to support each person's individual needs.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/value-2.webp",
  },
  {
    icon: Award,
    title: "Take Pride in Our Work",
    description:
      "We care deeply about the quality of every home we create and manage. We aim for excellence, pay attention to detail, and stand behind everything we deliver.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/value-3.webp",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Focus on Dignity & Independence",
    description:
      "Our homes are designed to support confident, independent living, with a strong focus on privacy, comfort, and ease of movement.",
    imageSrc: "https://23bv6tj8cwugzz8l.public.blob.vercel-storage.com/why-choose-1.webp",
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

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    title: "NDIS Participant-Centred Living",
    text: "At NALA, every home is designed around the people who live in it. We create SDA homes that support independence, comfort and everyday routines, while providing safe and practical environments for participants and their support teams.\n\nOur homes are designed to offer accessible layouts, private living spaces, functional shared areas and features that support assistive technology and high-quality care. From location to design detail, we focus on helping residents feel secure, respected and genuinely at home.",
    textSide: "left",
  },
  {
    title: "Our Story and Operating Ethos",
    text: "NALA Properties began in 2019 with a clear purpose: to improve the standard of SDA through better design, careful construction and responsible long-term operation.\n\nAs both a development and construction entity and an SDA provider, NALA takes a hands-on approach to every home we deliver. We believe SDA housing should be built with care, operated with accountability and designed to meet the real needs of participants, families, support providers and the wider community. Our ethos is grounded in quality, integrity and long-term responsibility.",
    textSide: "right",
  },
  {
    title: "Development, Compliance, and Professional Capability",
    text: "NALA brings together property development, construction expertise and SDA provider experience under one model. This allows us to manage the full delivery process, from identifying suitable locations and designing purpose-built homes through to construction, certification, ongoing maintenance and tenancy management.\n\nOur homes are developed in line with applicable NDIS SDA Design Standards and NSW Access Standards. NALA has been a registered NDIS Provider since 2021, with HICAPS and CentrePay registrations as well.",
    textSide: "left",
  },
];

export const FOOTER_LINKS = NAV_LINKS;
