
import Link from "next/link";
import RoadmapsExplorer from "./RoadmapsExplorer";

export default function RoadmapsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          Explore career roadmaps
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-700">
          Choose a career path, understand the skills you need, and start
          learning step by step.
        </p>

        <RoadmapsExplorer />
      </div>
    </main>
  );
}