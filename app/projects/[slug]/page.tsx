
import { Suspense } from "react";
import { projects } from "../../lib/projects";
import ProjectDetailContent from "./ProjectDetailContent";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50 px-6 py-16">
          <div className="mx-auto max-w-4xl animate-pulse rounded-3xl bg-white p-10">
            <div className="h-8 w-2/3 rounded bg-slate-200" />
            <div className="mt-6 h-20 rounded bg-slate-100" />
          </div>
        </main>
      }
    >
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}
