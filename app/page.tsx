import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Discover your path",
    description:
      "Explore career paths and understand the skills employers look for.",
    icon: "🧭",
  },
  {
    number: "02",
    title: "Learn by building",
    description:
      "Practice your skills with practical projects and learning roadmaps.",
    icon: "🛠️",
  },
  {
    number: "03",
    title: "Track your progress",
    description:
      "Keep track of completed topics and celebrate your learning milestones.",
    icon: "📈",
  },
];


export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<main className="min-h-screen  bg-[#f8fafc] text-slate-900">
  <header className="border-b border-slate-200 bg-white">
<Navbar/>
  </header>
 <Hero/>
   <section id="features" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">
              YOUR LEARNING JOURNEY
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Turn your ambition into action
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A clear path from learning new skills to building a portfolio
              you can confidently share with employers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-indigo-600">
                  {feature.number}
                </p>
                <div className="mt-5 text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
       <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
         <p>
  © 2026 SkillBridge. Built for your next step.
</p>
          <p>Learn with purpose. Grow with confidence.</p>
        </div>
      </footer>
</main>
  
  );
}
