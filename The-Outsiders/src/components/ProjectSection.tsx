import React from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Papacity AI",
    description: "AI-powered assistant focused on automation and intelligence.",
    tech: ["TypeScript", "AI", "Node.js"],
    link: "https://github.com/team-outsiders",
  },
  {
    title: "GenAI Platform",
    description: "Unified platform for building and deploying GPT-based apps.",
    tech: ["TypeScript", "API", "ML"],
    link: "https://github.com/your-repo/team-outsiders",
  },
  {
    title: "Automation Suite",
    description: "Smart automation tools for productivity and workflows.",
    tech: ["TypeScript", "Automation", "Backend"],
    link: "https://github.com/your-repo/team-outsiders",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="relative w-full bg-neutral text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-8xl font-semibold tracking-tight mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-neutral-900 border border-neutral-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-700 hover:shadow-2xl"
            >
              <h3 className="text-xl font-medium mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs rounded-full bg-neutral-800 px-3 py-1 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300"
              >
                View Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-white" />
    </section>
  );
};

export default ProjectSection;
