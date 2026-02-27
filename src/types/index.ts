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

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface PropertyFeature {
  label: string;
  description: string;
  icon: string;
}

export interface PropertyDetailCategory {
  title: string;
  features: PropertyFeature[];
}

export interface PropertyStaff {
  text: string;
}

export interface Property {
  id: string;
  title: string;
  address: string;
  imageSrc: string;
  location: string;
  silProvider?: string;
  supportLevel?: string;
  designStandard?: string;
  propertySubtitle?: string;
  staffRooms?: number;
  images: PropertyImage[];
  description: string;
  brochureUrl?: string;
  villas: PropertyVilla[];
  staff?: PropertyStaff[];
  details: PropertyDetailCategory[];
  mapEmbedUrl: string;
  dropdownName: string;
  dropdownImage: string;
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
