
export type LearningResource = {
  id: number;
  title: string;
  skill: string;
  type: "Documentation" | "Tutorial" | "Video";
  description: string;
  url: string;
};

export const resources: LearningResource[] = [
  {
    id: 1,
    title: "HTML — MDN Web Docs",
    skill: "HTML",
    type: "Documentation",
    description: "Learn HTML elements, forms, semantic markup, and page structure.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 2,
    title: "CSS — MDN Web Docs",
    skill: "CSS",
    type: "Documentation",
    description: "Understand styling, layouts, Flexbox, Grid, and responsive design.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 3,
    title: "JavaScript Guide",
    skill: "JavaScript",
    type: "Documentation",
    description: "Learn JavaScript fundamentals, functions, objects, and asynchronous code.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    id: 4,
    title: "JavaScript Tutorial — freeCodeCamp",
    skill: "JavaScript",
    type: "Tutorial",
    description: "Practice programming concepts with beginner-friendly lessons.",
    url: "https://www.freecodecamp.org/learn/",
  },
  {
    id: 5,
    title: "React — Official Documentation",
    skill: "React",
    type: "Documentation",
    description: "Learn components, props, state, events, and hooks.",
    url: "https://react.dev/learn",
  },
  {
    id: 6,
    title: "React Course — freeCodeCamp",
    skill: "React",
    type: "Video",
    description: "Explore practical React lessons and build your understanding.",
    url: "https://www.youtube.com/@freecodecamp",
  },
  {
    id: 7,
    title: "Next.js — Official Documentation",
    skill: "Next.js",
    type: "Documentation",
    description: "Learn App Router, layouts, pages, navigation, and rendering.",
    url: "https://nextjs.org/docs",
  },
  {
    id: 8,
    title: "Next.js Learn",
    skill: "Next.js",
    type: "Tutorial",
    description: "Follow a hands-on tutorial to build a full-stack Next.js application.",
    url: "https://nextjs.org/learn",
  },
];