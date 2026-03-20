import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
