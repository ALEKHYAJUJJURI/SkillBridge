
import Link from "next/link";
import ResourcesExplorer from "./ResourcesExplorer";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          Learning resources
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Explore useful documentation, tutorials, and videos for the skills
          in your career roadmap.
        </p>

        <ResourcesExplorer />
      </div>
    </main>
  );
}
