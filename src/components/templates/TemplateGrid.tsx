"use client";

import type { Template } from "@/types";
import { Card } from "./Card";
import { useMemo, useState } from "react";
import { categories } from "@/data/templates";
import type { TemplateCategory } from "@/types";
import { cn } from "@/lib/utils";

interface TemplateGridProps {
  templates: Template[];
}

export function TemplateGrid({ templates }: TemplateGridProps) {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return templates;
    return templates.filter((t) => t.category === activeCategory);
  }, [templates, activeCategory]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all",
            activeCategory === "all"
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          All Templates
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeCategory === cat.id
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-gray-400">
          No templates in this category yet.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((template) => (
            <Card key={template.id} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
