export type ConditionType = 'NEW' | 'USED';

export interface Caravan {
  id: string;
  title: string;
  slug: string;
  price: number;
  originalPrice?: number;
  condition: ConditionType;
  onSale?: boolean;
  bedrooms: number;
  length: number; // in feet
  width: number; // in feet
  dimensions: string; // e.g. "40×13"
  heating: 'Central Heating' | 'Electric Heating' | 'Electric Central Heating' | 'Gas Heating';
  glazing: 'Double Glazing' | 'Single Glazing';
  image: string;
  gallery: string[];
  location: 'Exeter' | 'West Sussex' | 'Taunton' | 'Turners Hill, West Sussex';
  description: string;
  features: string[];
  brand: string;
  year?: number;
  size?: string;
  stockNumber?: string;
  type?: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  shortName: string;
  address: string;
  town: string;
  county: string;
  postCode: string;
  phone: string;
  email: string;
  mapQuery: string;
  hours: {
    day: string;
    time: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  rating: number;
}
