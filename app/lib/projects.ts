
export type Project = {
  slug: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  technologies: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "Build a responsive website to showcase your skills, projects, and experience.",
    difficulty: "Beginner",
    duration: "3–5 days",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "About and skills sections",
      "Responsive project cards",
      "Contact form UI",
      "Mobile-friendly navigation",
    ],
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "Create a task management app with status tracking and persistent data.",
    difficulty: "Beginner",
    duration: "5–7 days",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Add, edit, and delete tasks",
      "Filter tasks by status",
      "Mark tasks as completed",
      "Save tasks in localStorage",
    ],
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Build a dashboard that fetches weather information from an external API.",
    difficulty: "Intermediate",
    duration: "4–6 days",
    technologies: ["React", "REST APIs", "CSS"],
    features: [
      "Search for a city",
      "Display current weather",
      "Handle loading and error states",
      "Show temperature and conditions",
    ],
  },
  {
    slug: "ecommerce-app",
    title: "E-commerce App",
    description:
      "Build a shopping experience with products, a cart, and order management.",
    difficulty: "Intermediate",
    duration: "1–2 weeks",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Product listing and search",
      "Shopping cart and wishlist",
      "User authentication",
      "Order history",
    ],
  },
  {
    slug: "career-roadmap-app",
    title: "Career Roadmap App",
    description:
      "Create a learning platform where users explore career paths and track their progress.",
    difficulty: "Advanced",
    duration: "2–3 weeks",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic career roadmap pages",
      "Searchable learning resources",
      "Learning progress tracker",
      "Responsive dashboard",
    ],
  },
];
