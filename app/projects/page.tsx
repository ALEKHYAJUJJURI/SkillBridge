
import Link from "next/link";
import ProjectsExplorer from "./ProjectsExplorer";

export default function ProjectsPage() {
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
          Explore projects
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Turn your knowledge into practical experience with projects
          designed for different skill levels.
        </p>

        <ProjectsExplorer />
      </div>
    </main>
  );
}
