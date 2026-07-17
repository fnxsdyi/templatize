import { templates } from "@/data/templates";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { categories } from "@/data/templates";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" className="mb-4">
              🎉 5 premium templates available
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
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  {cat.id === "ai-startup" && "🤖"}
                  {cat.id === "solopreneur" && "🚀"}
                  {cat.id === "content" && "📅"}
                  {cat.id === "crm" && "🤝"}
                  {cat.id === "knowledge" && "🧠"}
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
          <h2 className="mb-2 text-2xl font-bold text-gray-900">All Templates</h2>
          <p className="mb-10 text-gray-500">
            Choose from {templates.length} premium templates to jumpstart your workflow.
          </p>
          <TemplateGrid templates={templates} />
        </div>
      </section>
    </div>
  );
}
