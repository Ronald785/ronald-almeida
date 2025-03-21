"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "Trancista Mariana",
        description: "Uma landing page responsiva construída em Next.js",
        image: "/assets/images/portfolio/trancista.png",
        technologies: ["React", "Next"],
    },
    {
        title: "Happy",
        description: "Encontre o centro de doação mais próximo de você",
        image: "/assets/images/portfolio/happy.png",
        technologies: ["React", "Next"],
    },
    {
        title: "Podcastr",
        description: "Seu próprio podcast na palma da sua mão",
        image: "/assets/images/portfolio/podcastr.png",
        technologies: ["React", "Next"],
    },
    {
        title: "DevBlog",
        description: "Meu Blog",
        image: "/assets/images/portfolio/podcastr.png",
        technologies: ["React", "Next", "Typescript", "Styled-components"],
    },
    {
        title: "TechVision",
        description:
            "TechVision, uma empresa inovadora no setor de tecnologia e desenvolvimento web.",
        image: "/assets/images/portfolio/podcastr.png",
        technologies: ["HTML", "CSS"],
    },
    {
        title: "Podcastr",
        description: "Seu próprio podcast na palma da sua mão",
        image: "/assets/images/portfolio/podcastr.png",
        technologies: ["React", "Next"],
    },
];

const technologies = [
    "React",
    "Next",
    "Typescript",
    "Javascript",
    "HTML",
    "Bootstrap",
    "Styled-components",
    "Redux",
];

export default function Projects() {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
        []
    );

    const toggleTechnology = (tech: string) => {
        setSelectedTechnologies((prev) =>
            prev.includes(tech)
                ? prev.filter((t) => t !== tech)
                : [...prev, tech]
        );
    };

    const filteredProjects =
        selectedTechnologies.length === 0
            ? projects
            : projects.filter((project) =>
                  project.technologies.some((tech) =>
                      selectedTechnologies.includes(tech)
                  )
              );

    return (
        <section id="projects" className="max-w-7xl m-auto p-4">
            <h2 className="text-center text-3xl mb-8">Projetos</h2>
            <h3 className="text-center text-lg mb-8">
                Alguns dos meus projetos pessoais
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {technologies.map((tech, index) => (
                    <button
                        key={index}
                        onClick={() => toggleTechnology(tech)}
                        className={`rounded-lg pt-1 pb-1 pl-2 pr-2 cursor-pointer transition-all ${
                            selectedTechnologies.includes(tech)
                                ? "bg-purple-800"
                                : "bg-gray-800"
                        }`}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-accent"
                    >
                        <div className="relative h-40 w-full">
                            <Image
                                fill={true}
                                src={project.image}
                                alt={`Image ${project.title} Webpage`}
                                className="object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="pr-8 pl-8 pt-4 pb-4">
                            <h4 className="font-bold text-lg">
                                {project.title}
                            </h4>
                            <p className="mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-gray-800 rounded-lg pt-1 pb-1 pl-2 pr-2"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
