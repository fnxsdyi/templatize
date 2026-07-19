import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            T
          </div>
          <span className="text-lg font-semibold text-gray-900">Templatize</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Templates
          </Link>
          <Link
            href="/#categories"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Categories
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Guide
          </Link>
        </nav>
        <div />
      </div>
    </header>
  );
}
