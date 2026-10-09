
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
          Your future starts with one skill
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Learn skills.
          <br />
          Build projects.
          <br />
          <span className="text-indigo-600">
            Grow your career.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
          Discover what to learn, practice with real-world projects,
          and take your next step toward your dream career.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/roadmaps"
            className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
          >
            Explore learning paths →
          </Link>

          <Link
            href="#features"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold transition hover:bg-slate-50"
          >
            Learn more
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Learn at your own pace. Build skills with purpose.
        </p>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-xl shadow-indigo-100/50 sm:p-8">
        <p className="text-sm font-medium text-slate-500">
          Start learning
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Popular career paths
        </h2>

        <div className="mt-7 space-y-4">
          {[
            {
              title: "Frontend Developer",
              skills: "HTML · CSS · JavaScript · React",
              icon: "💻",
            },
            {
              title: "Backend Developer",
              skills: "Node.js · APIs · Databases",
              icon: "⚙️",
            },
            {
              title: "Full Stack Developer",
              skills: "Frontend · Backend · Deployment",
              icon: "🚀",
            },
          ].map((path) => (
            <div
              key={path.title}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                {path.icon}
              </div>

              <div>
                <h3 className="font-semibold">{path.title}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {path.skills}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          More learning paths coming soon.
        </p>
      </div>
    </section>
  );
}