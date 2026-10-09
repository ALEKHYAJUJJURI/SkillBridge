
export type Roadmap = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate";
  skills: string[];
};

export const roadmaps: Roadmap[] = [
  {
    slug: "frontend",
    title: "Frontend Developer",
    description:
      "Build responsive websites and interactive user interfaces.",
    duration: "8–12 weeks",
    level: "Beginner",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    slug: "backend",
    title: "Backend Developer",
    description:
      "Build APIs, manage databases, and implement authentication.",
    duration: "10–14 weeks",
    level: "Beginner",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
  },
  {
    slug: "full-stack",
    title: "Full Stack Developer",
    description:
      "Learn to build complete applications from UI to database.",
    duration: "12–16 weeks",
    level: "Intermediate",
    skills: ["React", "Next.js", "Node.js", "Databases"],
  },
];