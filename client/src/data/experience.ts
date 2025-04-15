export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  color: string;
  position: "left" | "right";
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Full-Stack Developer",
    company: "TechVista Solutions",
    period: "2022 - Present",
    description: "Leading development of responsive web applications using React and Node.js. Integrating AI services and implementing voice assistant features.",
    color: "border-primary-500",
    position: "left"
  },
  {
    id: "exp2",
    title: "Frontend Developer",
    company: "Digital Innovators Inc.",
    period: "2020 - 2022",
    description: "Developed responsive user interfaces using React.js and Tailwind CSS. Collaborated with design team to implement modern UI/UX solutions.",
    color: "border-secondary-500",
    position: "left"
  },
  {
    id: "exp3",
    title: "Web Development Intern",
    company: "CodeCraft Labs",
    period: "2019 - 2020",
    description: "Assisted in building websites using HTML, CSS, and JavaScript. Gained experience with version control systems and deployment workflows.",
    color: "border-accent-500",
    position: "left"
  }
];
