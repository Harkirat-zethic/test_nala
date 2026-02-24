export interface NavLink {
  label: string;
  href: string;
}

export interface OfferItem {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface ValueItem {
  number: string;
  title: string;
  imageSrc: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  imageSrc: string;
}

export interface PropertyVilla {
  name: string;
  bedrooms: number;
  bathrooms: number;
}

export interface PropertyCardData {
  id: string;
  title: string;
  imageSrc: string;
  silProvider?: string;
  supportLevel?: string;
  villas?: PropertyVilla[];
}

export interface PropertySlide {
  id: string;
  cards: PropertyCardData[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterColumn {
  title: string;
  links?: { label: string; href: string }[];
  content?: React.ReactNode;
}
