
"use client";

import { useEffect, useState } from "react";

type LearningTrackerProps = {
  skills: string[];
  roadmapSlug: string;
};

export default function LearningTracker({
  skills,
  roadmapSlug,
}: LearningTrackerProps) {
  const [completedSkills, setCompletedSkills] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const storageKey = `skillbridge-progress-${roadmapSlug}`;

  // Load saved progress from the browser
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(storageKey);

      if (savedProgress) {
        const parsedProgress: unknown = JSON.parse(savedProgress);

        if (
          Array.isArray(parsedProgress) &&
          parsedProgress.every((skill) => typeof skill === "string")
        ) {
          setCompletedSkills(
            parsedProgress.filter((skill) => skills.includes(skill))
          );
        }
      }
    } catch {
      console.error("Could not load saved learning progress.");
    } finally {
      setIsLoaded(true);
    }
  }, [storageKey, skills]);

  // Save progress whenever it changes
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(storageKey, JSON.stringify(completedSkills));
    } catch {
      console.error("Could not save learning progress.");
    }
  }, [completedSkills, storageKey, isLoaded]);

  function toggleSkill(skill: string) {
    setCompletedSkills((previous) =>
      previous.includes(skill)
        ? previous.filter((item) => item !== skill)
        : [...previous, skill]
    );
  }

  const percentage = skills.length
    ? Math.round((completedSkills.length / skills.length) * 100)
    : 0;

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">
        Your learning progress
      </h2>

      <p className="mt-2 text-slate-600">
        Mark each skill when you feel confident using it.
      </p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="font-medium text-slate-700">
          {completedSkills.length} of {skills.length} skills completed
        </span>
        <span className="font-bold text-indigo-600">{percentage}%</span>
      </div>

      <div
        className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-6 space-y-3">
        {skills.map((skill) => {
          const isCompleted = completedSkills.includes(skill);

          return (
            <label
              key={skill}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => toggleSkill(skill)}
                disabled={!isLoaded}
                className="h-5 w-5 accent-indigo-600"
              />

              <span
                className={
                  isCompleted
                    ? "font-medium text-slate-400 line-through"
                    : "font-medium text-slate-800"
                }
              >
                {skill}
              </span>
            </label>
          );
        })}
      </div>

      {percentage === 100 && isLoaded && (
        <p className="mt-6 rounded-xl bg-green-50 p-4 font-semibold text-green-700">
          🎉 Congratulations! You've completed this roadmap's skills checklist.
        </p>
      )}
    </section>
  );
}