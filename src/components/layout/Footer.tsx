import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
              T
            </div>
            <span className="text-sm font-medium text-gray-600">Templatize</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/guide"
              className="text-sm text-gray-400 transition-colors hover:text-gray-700"
            >
              How to Use Guide
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Templatize. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
