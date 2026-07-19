import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Copy,
  AlertTriangle,
  CheckCircle2,
  UserPlus,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Guide",
  description:
    "Learn how to duplicate a Templatize Notion template into your own workspace in minutes — even if you have never used Notion before. Avoid the 'Free Trial' ad button trap and fix login or duplicate issues.",
};

const steps = [
  {
    n: 1,
    title: "Open the template link",
    body: "After your purchase (or from the free Universal Installation Guide), you receive a Notion share link. Click it — the template opens in your browser. No login needed to view the content.",
  },
  {
    n: 2,
    title: "Click the small Copy icon at the top-right",
    body: "On the published page you will see a row of small icons at the top-right. Click the small “Copy / 📋” icon (not the big “Free Trial” button — see the warning below). This starts the duplication process.",
  },
  {
    n: 3,
    title: "Log in or sign up for a free Notion account",
    body: "Notion requires a (free) account to copy a template into your own workspace. If you are not logged in, you will be asked to log in or create a free account. This is normal and expected — every Notion template seller works this way.",
  },
  {
    n: 4,
    title: "Choose where to add it",
    body: "A popup appears: “Where do you want to add [Template Name]?” Pick your workspace and select “Add to Private section” (or your workspace). The template is now copied into your own Notion — fully yours to edit.",
  },
  {
    n: 5,
    title: "Start using it",
    body: "Open the template from your own Notion workspace. Fill in your data, rename sections, and customize colors. It is detached from the store — you own your copy.",
  },
];

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
          <BookOpen className="size-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to Use Your Template
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Duplicate any Templatize Notion template into your own workspace in
          under 5 minutes — even if you have never used Notion before.
        </p>
      </div>

      {/* Warning */}
      <div className="mb-10 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <AlertTriangle className="mt-0.5 size-6 shrink-0 text-amber-500" />
        <div>
          <p className="font-semibold text-amber-800">
            ⚠️ Ignore the big “Free Trial” button
          </p>
          <p className="mt-1 text-sm leading-relaxed text-amber-700">
            Notion places its own “Free Trial” ad button on published pages.
            That button promotes <strong>Notion’s paid plan</strong> — it is{" "}
            <strong>not</strong> how you get your template. To receive your
            template, click the small <Copy className="inline size-4" />{" "}
            <strong>Copy icon at the top-right</strong> of the page instead.
          </p>
        </div>
      </div>

      {/* Steps */}
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Step-by-step: Duplicate your template
      </h2>
      <ol className="space-y-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              {s.n}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* FAQ */}
      <h2 className="mb-6 mt-12 text-xl font-semibold text-gray-900">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-semibold text-gray-900">
            Why am I asked to log in when I click Copy?
          </p>
          <p className="mt-1 flex gap-2 text-sm leading-relaxed text-gray-600">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
            <span>
              Notion must copy the template into <em>some</em> account, so it
              asks you to sign in first. Create a free Notion account (no credit
              card) and continue. This is how all Notion templates work.
            </span>
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-semibold text-gray-900">
            I only see “Free Trial”, no Copy button — what now?
          </p>
          <p className="mt-1 flex gap-2 text-sm leading-relaxed text-gray-600">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
            <span>
              Look at the very top-right corner of the page. Next to the search
              and share icons there is a small <Copy className="inline size-4" />{" "}
              Copy icon. That is the real duplicate button. The large “Free
              Trial” is just Notion’s advertisement.
            </span>
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-semibold text-gray-900">
            The page looks empty / won’t open.
          </p>
          <p className="mt-1 flex gap-2 text-sm leading-relaxed text-gray-600">
            <UserPlus className="mt-0.5 size-4 shrink-0 text-indigo-500" />
            <span>
              Make sure you are logged into Notion in that browser. If the share
              link looks broken, copy it again from your Gumroad receipt or the
              Universal Installation Guide and try an incognito window.
            </span>
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-semibold text-gray-900">
            Can I edit the template after duplicating?
          </p>
          <p className="mt-1 flex gap-2 text-sm leading-relaxed text-gray-600">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-teal-500" />
            <span>
              Yes. Once duplicated, the template is fully yours. Rename pages,
              delete sections, change colors, and fill in your own data. It is
              completely detached from the store.
            </span>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-teal-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Ready to set up your system?
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Grab the free Universal Installation Guide, or browse all templates.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/templates/universal-installation-guide"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Free Setup Guide
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </div>
  );
}
