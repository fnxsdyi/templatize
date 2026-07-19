import type { Metadata } from "next";
import Link from "next/link";
import { ScrollText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description:
    "Terms of use and disclaimer for Templatize Notion templates and this website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
          <ScrollText className="size-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms &amp; Disclaimer
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Last updated: July 19, 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Overview</h2>
          <p>
            By accessing templatize.vercel.app and purchasing or downloading any
            Templatize template, you agree to the following terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Templates provided &ldquo;as is&rdquo;
          </h2>
          <p>
            All templates are provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, whether express or
            implied. We do not warrant that a template will meet your specific
            requirements or produce any particular result.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Not affiliated with Notion
          </h2>
          <p>
            Templatize is an independent store and is not affiliated with,
            endorsed by, or sponsored by Notion Labs, Inc. &ldquo;Notion&rdquo;
            is a trademark of Notion Labs, Inc. Our templates are original works
            delivered through Notion&rsquo;s sharing feature.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            License, not ownership
          </h2>
          <p>
            Your purchase grants you a personal, non-exclusive,
            non-transferable license to use the template for your own individual
            or internal business purposes. You may not resell, redistribute,
            sublicense, or publicly share the template or its copies. The
            intellectual property in each template remains with Templatize.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            No guarantee of results
          </h2>
          <p>
            We are not responsible for any outcomes, decisions, or losses
            arising from how you use a template. You use each template at your
            own risk.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by law, Templatize shall not be
            liable for any indirect, incidental, or consequential damages
            arising out of your use of the templates or this site.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            External links
          </h2>
          <p>
            This site links to third-party services such as Gumroad and Notion.
            We are not responsible for the content, policies, or practices of
            those external sites.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Refunds</h2>
          <p>
            Because our products are digital goods delivered instantly, all
            sales are final. Refund requests are handled according to
            Gumroad&rsquo;s refund policy and the terms shown at checkout. If you
            received a broken or wrong link, contact us and we will fix the
            delivery.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Changes</h2>
          <p>
            We may update these Terms at any time. Continued use of the site
            after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a
              href="mailto:hello@kaki.llc"
              className="text-indigo-600 hover:underline"
            >
              hello@kaki.llc
            </a>{" "}
            or reach us through our Gumroad store (shoujiang.gumroad.com).
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          &larr; Back to Templates
        </Link>
      </div>
    </div>
  );
}
