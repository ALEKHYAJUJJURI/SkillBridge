
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Learning paths", href: "/#roadmaps" },
  { label: "Resources", href: "/resources" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        {/* SkillBridge logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Skill<span className="text-indigo-600">Bridge</span>
        </Link>

        {/* Main navigation links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Authentication links */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
