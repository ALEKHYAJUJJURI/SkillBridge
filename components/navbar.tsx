
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Skill<span className="text-indigo-600">Bridge</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          <Link href="#features" className="hover:text-indigo-600">
            Features
          </Link>
          <Link href="#roadmaps" className="hover:text-indigo-600">
            Learning paths
          </Link>
          <Link href="/resources">Resources</Link>
          <Link href="/projects">Projects</Link>
        </div>

        <Link
          href="#roadmaps"
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
}