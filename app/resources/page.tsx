
import Link from "next/link";
import { resources } from "../lib/resources";


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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                {resource.type}
              </span>

              <h2 className="mt-5 text-xl font-bold">
                {resource.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {resource.description}
              </p>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Skill: {resource.skill}
              </p>

              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-semibold text-indigo-600 hover:underline"
              >
                Start learning ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}