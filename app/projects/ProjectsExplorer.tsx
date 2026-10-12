
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectsExplorer() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [technology, setTechnology] = useState("All");

  const technologies = useMemo(
    () => [...new Set(projects.flatMap((project) => project.technologies))].sort(),
    []
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        );

      const matchesDifficulty =
        difficulty === "All" || project.difficulty === difficulty;

      const matchesTechnology =
        technology === "All" || project.technologies.includes(technology);

      return matchesSearch && matchesDifficulty && matchesTechnology;
    });
  }, [search, difficulty, technology]);

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects or technologies..."
          aria-label="Search projects"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          aria-label="Filter by difficulty"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
        >
          <option value="All">All difficulty levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          value={technology}
          onChange={(event) => setTechnology(event.target.value)}
          aria-label="Filter by technology"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
        >
          <option value="All">All technologies</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-5 text-sm text-slate-600" aria-live="polite">
        {filteredProjects.length} project(s) found
      </p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {project.difficulty}
            </span>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              {project.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {project.description}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Estimated time: {project.duration}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-flex font-semibold text-indigo-600 hover:underline"
            >
              View project details →
            </Link>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <h2 className="text-lg font-semibold text-slate-900">
            No projects found
          </h2>
          <p className="mt-2 text-slate-600">
            Try changing your search or filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setDifficulty("All");
              setTechnology("All");
            }}
            className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
