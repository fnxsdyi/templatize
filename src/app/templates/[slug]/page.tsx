import { notFound } from "next/navigation";
import { getTemplateBySlug } from "@/data/templates";
import type { Metadata } from "next";
import { categories } from "@/data/templates";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { PricingCard } from "@/components/ui/PricingCard";
import {
  CheckCircle,
  Clock,
  User,
  Calendar,
  Bot,
  Rocket,
  CalendarDays,
  Users,
  Brain,
  FolderKanban,
  DollarSign,
  BarChart3,
  GraduationCap,
  Target,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ReactNode> = {
  "ai-startup": <Bot className="size-8" />,
  solopreneur: <Rocket className="size-8" />,
  content: <CalendarDays className="size-8" />,
  crm: <Users className="size-8" />,
  knowledge: <Brain className="size-8" />,
  project: <FolderKanban className="size-8" />,
  finance: <DollarSign className="size-8" />,
  saas: <BarChart3 className="size-8" />,
  student: <GraduationCap className="size-8" />,
  habits: <Target className="size-8" />,
  guide: <BookOpen className="size-8" />,
};

const gradientMap: Record<string, string> = {
  "ai-startup": "from-violet-500 to-indigo-600",
  solopreneur: "from-amber-500 to-orange-600",
  content: "from-emerald-500 to-teal-600",
  crm: "from-rose-500 to-pink-600",
  knowledge: "from-sky-500 to-blue-600",
  project: "from-cyan-500 to-blue-600",
  finance: "from-green-500 to-emerald-600",
  saas: "from-purple-500 to-fuchsia-600",
  student: "from-yellow-500 to-orange-600",
  habits: "from-red-500 to-rose-600",
  guide: "from-teal-500 to-cyan-600",
};

const bgMap: Record<string, string> = {
  "ai-startup": "from-violet-50 to-indigo-100",
  solopreneur: "from-amber-50 to-orange-100",
  content: "from-emerald-50 to-teal-100",
  crm: "from-rose-50 to-pink-100",
  knowledge: "from-sky-50 to-blue-100",
  project: "from-cyan-50 to-blue-100",
  finance: "from-green-50 to-emerald-100",
  saas: "from-purple-50 to-fuchsia-100",
  student: "from-yellow-50 to-orange-100",
  habits: "from-red-50 to-rose-100",
  guide: "from-teal-50 to-cyan-100",
};

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
  const icon = iconMap[template.category] ?? <Rocket className="size-8" />;
  const gradient = gradientMap[template.category] ?? "from-indigo-500 to-purple-600";
  const bg = bgMap[template.category] ?? "from-indigo-50 to-purple-100";

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
            {/* Preview image area */}
            <div
              className={`mb-8 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${bg} shadow-sm`}
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute -right-6 -top-6 size-32 rounded-full bg-white/60 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 size-40 rounded-full bg-white/40 blur-3xl" />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center gap-4">
                <div
                  className={`flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-xl shadow-current/25`}
                >
                  {icon}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {template.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Notion Template Preview
                  </p>
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
                  <div
                    className={`flex size-8 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white shadow-sm`}
                  >
                    {iconMap[template.category]}
                  </div>
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
              {template.originalPrice && (
                <Badge variant="sale">LIMITED OFFER</Badge>
              )}
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
                  {template.price === 0 ? "Get It Free" : `Buy Now — $${template.price}`}
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
