
"use client";

import { useMemo, useState } from "react";
import { resources } from "../lib/resources";

export default function ResourcesExplorer() {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const skills = useMemo(
    () => [...new Set(resources.map((resource) => resource.skill))].sort(),
    []
  );

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.skill.toLowerCase().includes(query);

      const matchesSkill =
        selectedSkill === "All" || resource.skill === selectedSkill;

      const matchesType =
        selectedType === "All" || resource.type === selectedType;

      return matchesSearch && matchesSkill && matchesType;
    });
  }, [search, selectedSkill, selectedType]);

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search resources or skills..."
          aria-label="Search resources or skills"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <select
          value={selectedSkill}
          onChange={(event) => setSelectedSkill(event.target.value)}
          aria-label="Filter by skill"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
        >
          <option value="All">All skills</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          aria-label="Filter by resource type"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
        >
          <option value="All">All resource types</option>
          <option value="Documentation">Documentation</option>
          <option value="Tutorial">Tutorial</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <p className="mt-5 text-sm text-slate-600" aria-live="polite">
        {filteredResources.length} resource(s) found
      </p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <article
            key={resource.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {resource.type}
            </span>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
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

      {filteredResources.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <h2 className="text-lg font-semibold text-slate-900">
            No resources found
          </h2>
          <p className="mt-2 text-slate-600">
            Try another search term or change your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedSkill("All");
              setSelectedType("All");
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
