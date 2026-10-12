
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="font-medium text-indigo-600 hover:underline"
        >
          ← All projects
        </Link>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
            {project.difficulty}
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Estimated duration</p>
            <p className="mt-1 font-semibold">{project.duration}</p>
          </div>

          <h2 className="mt-8 text-xl font-bold">Technologies to use</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700"
              >
                {technology}
              </span>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-bold">Features to build</h2>

          <ul className="mt-4 space-y-3">
            {project.features.map((feature, index) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-indigo-50 p-6">
            <h2 className="text-lg font-bold text-indigo-950">
              Ready to start building?
            </h2>
            <p className="mt-2 leading-7 text-indigo-900">
              Work through each feature one at a time. Test your implementation
              and add improvements as you learn.
            </p>
            <Link
              href="/resources"
              className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore learning resources →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
