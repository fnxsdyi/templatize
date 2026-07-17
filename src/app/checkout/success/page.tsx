"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { templates } from "@/data/templates";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Download, Mail, Loader2 } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const template = slug ? templates.find((t) => t.slug === slug) : null;

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="size-8 text-green-600" />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Payment Successful! 🎉
        </h1>
        <p className="mb-8 text-gray-500">
          Thank you for your purchase
          {template ? ` of ${template.title}` : ""}.
        </p>

        <div className="mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6 text-left">
          <div className="mb-4 flex items-center gap-3">
            <Mail className="size-5 text-indigo-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Check your email
              </p>
              <p className="text-xs text-gray-500">
                Gumroad sent the download link to your email address
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Download className="size-5 text-indigo-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Download your template
              </p>
              <p className="text-xs text-gray-500">
                The download link is also available in your Gumroad library
              </p>
            </div>
          </div>
        </div>

        <Link href="/">
          <Button variant="primary" size="lg" className="w-full">
            Browse More Templates
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <Loader2 className="size-8 animate-spin text-indigo-600" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
