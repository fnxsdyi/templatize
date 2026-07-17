import type { Template } from "@/types";
import Link from "next/link";
import { StarRating } from "../ui/StarRating";
import { Badge } from "../ui/Badge";
import { categories, formatPrice } from "@/data/templates";
import { ArrowRight } from "lucide-react";

interface CardProps {
  template: Template;
}

export function Card({ template }: CardProps) {
  const category = categories.find((c) => c.id === template.category);

  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Preview image placeholder */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-2 flex size-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
                {template.category === "ai-startup" && "🤖"}
                {template.category === "solopreneur" && "🚀"}
                {template.category === "content" && "📅"}
                {template.category === "crm" && "🤝"}
                {template.category === "knowledge" && "🧠"}
              </div>
            </div>
          </div>
          {template.originalPrice && (
            <div className="absolute right-3 top-3">
              <Badge variant="sale">SALE</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2">
            {category && (
              <Badge variant="category">{category.label}</Badge>
            )}
          </div>

          <h3 className="mb-1 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {template.title}
          </h3>
          <p className="mb-3 text-sm text-gray-500 line-clamp-2">
            {template.subtitle}
          </p>

          <StarRating rating={template.rating} reviewCount={template.reviewCount} />

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(template.price)}
              </span>
              {template.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(template.originalPrice)}
                </span>
              )}
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
              View Details <ArrowRight className="size-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
