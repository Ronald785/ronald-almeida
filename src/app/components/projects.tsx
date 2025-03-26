"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const projects = [
    {
        title: "Trancista Mariana",
        description:
            "Especialista em tranças nagô e box braids, com mais de 5 anos de experiência. Transformando cabelos em arte.",
        image: "/assets/images/portfolio/trancista.png",
        technologies: ["React", "Next", "Typescript"],
        link: "https://trancistacampinas-mariana.com.br",
    },
    {
        title: "vox2Text API",
        description:
            "Transforme áudio em texto com uma API extremamente rápida e de fácil configuração.",
        image: "/assets/images/portfolio/vox2text-api.png",
        technologies: ["Node", "Javascript", "Openai"],
        link: "https://github.com/Ronald785/vox2text-api",
    },
    {
        title: "CetSales",
        description:
            "Uma empresa de consultoria e treinamento focada em estratégias de vendas para impulsionar os lucros.",
        image: "/assets/images/portfolio/cet-sales.png",
        technologies: ["HTML", "Javascript", "Bootstrap"],
    },
    {
        title: "Kindmap",
        description:
            "Ajudando a encontrar o centro de doação mais próximo em um país com 8,7 milhões de passando fome.",
        image: "/assets/images/portfolio/kindmap.png",
        technologies: ["React", "Next", "OpenLayers"],
    },
    {
        title: "Next Tech Blog",
        description:
            "Meu blog pessoal com dicas de código, novidades em tecnologia, automações e inovações em IA..",
        image: "/assets/images/portfolio/next-tech-blog.png",
        technologies: ["React", "Next"],
    },
    {
        title: "Landing page",
        description: "Uma página  web para converter visitantes em cliente",
        image: "/assets/images/portfolio/landing-page.png",
        technologies: ["HTML", "CSS"],
        link: "https://ronald785-landingpage.netlify.app",
    },
];

const technologies = [
    "React",
    "Next",
    "Typescript",
    "Javascript",
    "HTML",
    "Bootstrap",
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
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {technologies.map((tech, index) => (
                    <button
                        key={index}
                        onClick={() => toggleTechnology(tech)}
                        className={`rounded-sm text-sm pt-1 pb-1 pl-2 pr-2 cursor-pointer transition-all ${
                            selectedTechnologies.includes(tech)
                                ? "bg-chart-4"
                                : "bg-sidebar-accent"
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
                        className="rounded-lg border-2 border-accent overflow-hidden"
                    >
                        <div className="relative h-36 w-full">
                            {project.link ? (
                                <Link href={project.link} target="_blank">
                                    <Image
                                        fill={true}
                                        src={project.image}
                                        alt={`Image ${project.title} Webpage`}
                                        className="object-cover"
                                    />
                                </Link>
                            ) : (
                                <Image
                                    fill={true}
                                    src={project.image}
                                    alt={`Image ${project.title} Webpage`}
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <div className="pr-4 pl-4 pt-4 pb-4">
                            <h4 className="font-bold text-lg">
                                {project.title}
                            </h4>
                            <p className="mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 items-center mt-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs bg-sidebar-accent rounded-sm pt-1 pb-1 pl-2 pr-2"
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
