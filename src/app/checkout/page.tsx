"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { templates } from "@/data/templates";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Loader2, ExternalLink } from "lucide-react";
import Link from "next/link";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = searchParams.get("slug");
  const template = slug ? templates.find((t) => t.slug === slug) : null;

  const gumroadUrl = template?.gumroadUrl;

  useEffect(() => {
    if (gumroadUrl) {
      // Redirect to Gumroad immediately
      window.location.href = gumroadUrl;
    }
  }, [gumroadUrl]);

  if (!slug || !template) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="mb-4 text-gray-500">No product selected.</p>
        <Link href="/">
          <Button variant="primary">Browse Templates</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <Link
        href={`/templates/${slug}`}
        className="mb-8 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="size-4" />
        Back to {template.title}
      </Link>

      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">
            {template.category === "ai-startup" && "🤖"}
            {template.category === "solopreneur" && "🚀"}
            {template.category === "content" && "📅"}
            {template.category === "crm" && "🤝"}
            {template.category === "knowledge" && "🧠"}
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            {template.title}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            ${template.price} — One-time purchase
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 py-8">
          <Loader2 className="size-8 animate-spin text-indigo-600" />
          <p className="text-sm text-gray-500">Redirecting to Gumroad checkout...</p>
          <a
            href={gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            <ExternalLink className="size-4" />
            Open checkout manually
          </a>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        Secure payment powered by Gumroad. Your purchase is protected.
      </p>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <Loader2 className="size-8 animate-spin text-indigo-600" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
