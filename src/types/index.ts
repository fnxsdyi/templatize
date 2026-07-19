export interface Template {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: TemplateCategory;
  tags: string[];
  features: string[];
  previewImages: string[];
  gumroadUrl: string;
  notionUrl?: string;
  whatsIncluded: string[];
  rating: number;
  reviewCount: number;
  author: string;
  authorAvatar?: string;
  publishDate: string;
  updatedDate: string;
}

export type TemplateCategory =
  | "ai-startup"
  | "solopreneur"
  | "content"
  | "crm"
  | "knowledge"
  | "project"
  | "finance"
  | "saas"
  | "student"
  | "habits"
  | "guide";

export interface CategoryInfo {
  id: TemplateCategory;
  label: string;
  slug: string;
  description: string;
}
