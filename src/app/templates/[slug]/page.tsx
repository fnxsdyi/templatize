import { notFound } from "next/navigation";
import { getTemplateBySlug } from "@/data/templates";
import type { Metadata } from "next";
import { categories } from "@/data/templates";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { PricingCard } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Not Found" };

  return {
    title: template.title,
    description: template.description,
    openGraph: {
      title: `${template.title} — Templatize`,
      description: template.description,
    },
  };
}

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const category = categories.find((c) => c.id === template.category);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/?category=${category.id}`}
                  className="hover:text-gray-700"
                >
                  {category.label}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900">{template.title}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Preview + Info */}
          <div>
            {/* Preview image placeholder */}
            <div className="mb-8 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-sm">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex size-20 items-center justify-center rounded-2xl bg-indigo-100 text-4xl">
                    {template.category === "ai-startup" && "🤖"}
                    {template.category === "solopreneur" && "🚀"}
                    {template.category === "content" && "📅"}
                    {template.category === "crm" && "🤝"}
                    {template.category === "knowledge" && "🧠"}
                  </div>
                  <p className="text-sm text-gray-400">Preview image</p>
                </div>
              </div>
            </div>

            {/* Preview thumbnails */}
            <div className="mb-8 flex gap-3">
              {template.previewImages.map((_, i) => (
                <div
                  key={i}
                  className={`aspect-[16/10] flex-1 rounded-lg ${
                    i === 0
                      ? "border-2 border-indigo-400 bg-indigo-50"
                      : "border border-gray-200 bg-gray-50"
                  } flex items-center justify-center`}
                >
                  <span className="text-lg opacity-40">
                    {template.category === "ai-startup" && "🤖"}
                    {template.category === "solopreneur" && "🚀"}
                    {template.category === "content" && "📅"}
                    {template.category === "crm" && "🤝"}
                    {template.category === "knowledge" && "🧠"}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                About This Template
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                {template.description}
              </p>

              {/* Features */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                What You Get
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {template.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-indigo-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pricing + Buy */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 flex items-center gap-2">
              {category && <Badge variant="category">{category.label}</Badge>}
              {template.originalPrice && <Badge variant="sale">LIMITED OFFER</Badge>}
            </div>

            <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
              {template.title}
            </h1>
            <p className="mb-4 text-lg text-gray-500">{template.subtitle}</p>

            <div className="mb-8">
              <StarRating
                rating={template.rating}
                reviewCount={template.reviewCount}
                size="md"
                showCount
              />
            </div>

            {/* Meta info */}
            <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="size-4" />
                {template.author}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="size-4" />
                Updated {template.updatedDate}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="size-4" />
                Instant download
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="size-4" />
                Lifetime updates
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Pricing Card */}
            <PricingCard
              price={template.price}
              originalPrice={template.originalPrice}
              features={template.features}
              whatsIncluded={template.whatsIncluded}
              cta={
                <a
                  href={template.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700"
                >
                  Buy Now — ${template.price}
                </a>
              }
              className="border-indigo-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
