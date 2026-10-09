import { roadmaps } from "@/app/lib/roadmaps";
import Link from "next/link";
import { notFound } from "next/navigation";
import LearningTracker from "@/components/LearningTracker";
type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return roadmaps.map((roadmap) => ({
    slug: roadmap.slug,
  }));
}

export default async function RoadmapDetailPage({ params }: Props) {
  const { slug } = await params;
  const roadmap = roadmaps.find((item) => item.slug === slug);

  if (!roadmap) notFound();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/roadmaps"
          className="font-medium text-indigo-600 hover:underline"
        >
          ← All roadmaps
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            {roadmap.level}
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            {roadmap.title}
          </h1>

          <p className="mt-4 leading-7 text-slate-700">{roadmap.description}</p>

          <p className="mt-5 text-sm text-slate-600">
            Estimated duration: {roadmap.duration}
          </p>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            Skills to learn
          </h2>

          <ul className="mt-4 space-y-3">
            {roadmap.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-800"
              >
                <span className="font-bold text-indigo-600">✓</span>
                <span className="font-medium">{skill}</span>
              </li>
            ))}
          </ul>
          <LearningTracker skills={roadmap.skills} roadmapSlug={roadmap.slug} />
        </div>
      </div>
    </main>
  );
}
