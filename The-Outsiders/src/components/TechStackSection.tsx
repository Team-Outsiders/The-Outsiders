"use client";

import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGraphql,
  SiTensorflow,
  SiRust,
  SiGo,
} from "react-icons/si";
import { IconType } from "react-icons";

type Technology = {
  name: string;
  icon: IconType;
  category: string;
};

const TechStackSection: React.FC = () => {
  const technologies: Technology[] = [
    { name: "React", icon: SiReact, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Language" },
    { name: "Node.js", icon: SiNodedotjs, category: "Runtime" },
    { name: "Python", icon: SiPython, category: "Backend" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
    { name: "Docker", icon: SiDocker, category: "DevOps" },
    { name: "Kubernetes", icon: SiKubernetes, category: "Orchestration" },
    { name: "AWS", icon: SiAmazon, category: "Cloud" },
    { name: "GraphQL", icon: SiGraphql, category: "API" },
    { name: "TensorFlow", icon: SiTensorflow, category: "AI / ML" },
    { name: "Rust", icon: SiRust, category: "Systems" },
    { name: "Go", icon: SiGo, category: "Backend" },
  ];

  return (
    <section
      id="tech-stack"
      className="relative w-full bg-neutral-950 text-white py-24 px-4 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Our Arsenal
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            We use modern, scalable, and battle-tested technologies to build
            high-quality products.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group relative p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <Icon className="mx-auto text-4xl mb-3 text-neutral-400 group-hover:text-indigo-400 transition-colors duration-300" />

                <h3 className="font-semibold text-sm">
                  {tech.name}
                </h3>

                <span className="text-xs text-neutral-500">
                  {tech.category}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-center text-neutral-500">
          …and many more technologies evolving with us.
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;
