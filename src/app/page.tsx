import { templates } from "@/data/templates";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { categories } from "@/data/templates";
import { Badge } from "@/components/ui/Badge";
import { Bot, Rocket, CalendarDays, Users, Brain, FolderKanban, DollarSign, BarChart3, GraduationCap, Target, BookOpen } from "lucide-react";

const categoryIconMap: Record<string, React.ReactNode> = {
  "ai-startup": <Bot className="size-5" />,
  solopreneur: <Rocket className="size-5" />,
  content: <CalendarDays className="size-5" />,
  crm: <Users className="size-5" />,
  knowledge: <Brain className="size-5" />,
  project: <FolderKanban className="size-5" />,
  finance: <DollarSign className="size-5" />,
  saas: <BarChart3 className="size-5" />,
  student: <GraduationCap className="size-5" />,
  habits: <Target className="size-5" />,
  guide: <BookOpen className="size-5" />,
};

const categoryGradientMap: Record<string, string> = {
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

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" className="mb-4">
              🎉 10 templates + 1 free guide
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Faster with{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Premium Templates
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-lg text-gray-500">
              Professional Notion templates for AI entrepreneurs, solopreneurs,
              and creators. Start with a proven system, not a blank page.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="border-b border-gray-100 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${categoryGradientMap[cat.id] ?? "from-indigo-500 to-purple-600"} text-white`}
                >
                  {categoryIconMap[cat.id]}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                  {cat.label}
                </h3>
                <p className="text-xs text-gray-400">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            All Templates
          </h2>
            <p className="mb-10 text-gray-500">
              Choose from {templates.length} templates &amp; guides to jumpstart your
              workflow.
            </p>
          <TemplateGrid templates={templates} />
        </div>
      </section>
    </div>
  );
}
