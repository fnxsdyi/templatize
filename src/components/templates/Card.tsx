import type { Template } from "@/types";
import Link from "next/link";
import { StarRating } from "../ui/StarRating";
import { Badge } from "../ui/Badge";
import { categories, formatPrice } from "@/data/templates";
import {
  ArrowRight,
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

interface CardProps {
  template: Template;
}

const iconMap: Record<string, React.ReactNode> = {
  "ai-startup": <Bot className="size-7" />,
  solopreneur: <Rocket className="size-7" />,
  content: <CalendarDays className="size-7" />,
  crm: <Users className="size-7" />,
  knowledge: <Brain className="size-7" />,
  project: <FolderKanban className="size-7" />,
  finance: <DollarSign className="size-7" />,
  saas: <BarChart3 className="size-7" />,
  student: <GraduationCap className="size-7" />,
  habits: <Target className="size-7" />,
  guide: <BookOpen className="size-7" />,
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

export function Card({ template }: CardProps) {
  const category = categories.find((c) => c.id === template.category);
  const icon = iconMap[template.category] ?? <Rocket className="size-7" />;
  const gradient = gradientMap[template.category] ?? "from-indigo-500 to-purple-600";
  const bg = bgMap[template.category] ?? "from-indigo-50 to-purple-100";

  return (
    <Link href={`/templates/${template.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Preview image area */}
        <div
          className={`relative aspect-[16/10] bg-gradient-to-br ${bg}`}
        >
          {/* Background decorative pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-6 -top-6 size-32 rounded-full bg-white/60 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 size-40 rounded-full bg-white/40 blur-3xl" />
          </div>

          {/* Gradient icon circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div
              className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-current/25`}
            >
              {icon}
            </div>
            <span className="text-xs font-medium tracking-wide text-gray-400 uppercase">
              {category?.label}
            </span>
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
            {category && <Badge variant="category">{category.label}</Badge>}
          </div>

          <h3 className="mb-1 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {template.title}
          </h3>
          <p className="mb-3 text-sm text-gray-500 line-clamp-2">
            {template.subtitle}
          </p>

          <StarRating
            rating={template.rating}
            reviewCount={template.reviewCount}
          />

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
