import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Templatize handles your data across this site, Gumroad payments, and Notion delivery.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
          <ShieldCheck className="size-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Last updated: July 19, 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Overview</h2>
          <p>
            Templatize (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            operates this website (templatize.vercel.app), an online store that
            sells digital Notion templates. This Privacy Policy explains what
            data is involved when you browse or buy from this site.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            What we do not collect
          </h2>
          <p>
            This website does not require an account, does not run a newsletter
            sign-up, and does not collect personal information through forms.
            Simply browsing the site leaves no personal data with us.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Third-party services
          </h2>
          <p className="mb-3">
            Because we are a lightweight storefront, several functions are
            handled by trusted third parties:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong>Gumroad (payments).</strong> When you purchase a template
              you are redirected to Gumroad (shoujiang.gumroad.com) to complete
              checkout. Gumroad collects and processes your payment details
              (such as card or PayPal information) under its own Privacy Policy.
              We never receive or store your raw payment information.
            </li>
            <li>
              <strong>Notion (delivery).</strong> Templates are delivered as
              Notion share links that you duplicate into your own Notion
              workspace. Notion is a separate product operated by Notion Labs,
              Inc.; your use of Notion is governed by Notion&rsquo;s own Privacy
              Policy and Terms.
            </li>
            <li>
              <strong>Vercel (hosting).</strong> This site is hosted on Vercel,
              which may process standard technical logs (such as IP address,
              browser type, and access time) to keep the site running.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Cookies and analytics
          </h2>
          <p>
            This storefront itself does not set advertising or tracking
            cookies. The third-party services above may use their own cookies
            when you interact with them (for example, during Gumroad checkout).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Your rights
          </h2>
          <p>
            Depending on where you live, you may have rights to access, correct,
            or delete personal data that a third party holds about you (for
            example under the GDPR or CCPA). To exercise these rights with us,
            or if you have any privacy question, contact us at{" "}
            <a
              href="mailto:hello@kaki.llc"
              className="text-indigo-600 hover:underline"
            >
              hello@kaki.llc
            </a>
            . For data held by Gumroad or Notion, please contact those
            providers directly.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by the &ldquo;Last updated&rdquo; date
            above.
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
