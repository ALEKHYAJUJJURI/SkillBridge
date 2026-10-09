
"use client";

import { useState } from "react";
import Link from "next/link";
import { roadmaps } from "../lib/roadmaps";

export default function RoadmapsExplorer() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      roadmap.title.toLowerCase().includes(query) ||
      roadmap.description.toLowerCase().includes(query) ||
      roadmap.skills.some((skill) =>
        skill.toLowerCase().includes(query)
      );

    const matchesLevel =
      level === "All" || roadmap.level === level;

    return matchesSearch && matchesLevel;
  });

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search careers or skills..."
          aria-label="Search careers or skills"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <select
          value={level}
          onChange={(event) => setLevel(event.target.value)}
          aria-label="Filter by skill level"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
        >
          <option value="All">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
        </select>
      </div>

      <p className="mt-5 text-sm text-slate-500" aria-live="polite">
        {filteredRoadmaps.length} roadmap(s) found
      </p>

      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRoadmaps.map((roadmap) => (
          <article
            key={roadmap.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {roadmap.level}
            </span>

            <h2 className="">
              {roadmap.title}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {roadmap.description}
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Duration: {roadmap.duration}
            </p>

            <Link
              href={`/roadmaps/${roadmap.slug}`}
              className="mt-6 inline-block font-semibold text-indigo-600 hover:underline"
            >
              View roadmap →
            </Link>
          </article>
        ))}
      </div>

      {filteredRoadmaps.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <h2 className="text-lg font-semibold">
            No roadmaps found
          </h2>
          <p className="mt-2 text-slate-500">
            Try another keyword or change the skill level.
          </p>
        </div>
      )}
    </>
  );
}