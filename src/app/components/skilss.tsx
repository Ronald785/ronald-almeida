"use client";

import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaCodeBranch, FaTerminal } from "react-icons/fa";
import { GoCpu } from "react-icons/go";
import {
    LuCheck,
    LuCode,
    LuDatabase,
    LuLayers,
    LuPanelsTopLeft,
    LuServer,
    LuWorkflow,
} from "react-icons/lu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const skills = [
    {
        title: "Front-end",
        icon: <LuCode size={20} color="cyan" />,
        description: "React.js, Next.js, Ejs, Nunjucks",
        details:
            "Construindo interfaces de usuário responsivas e interativas com recursos modernos do React e Next.js para desempenho ideal, incluindo Ejs e Nunjucks.",
    },
    {
        title: "Back-end",
        icon: <LuServer size={20} color="green" />,
        description: "Node.js, Express, Python, PHP",
        details:
            "Criando aplicações robustas no lado do servidor com foco em escalabilidade e arquitetura limpa.",
    },
    {
        title: "Banco de dados",
        icon: <LuDatabase size={20} color="orange" />,
        description: "MySQL, MongoDB, PostgreSQL",
        details:
            "Projetando e implementando esquemas de banco de dados e consultas eficientes para uma gestão de dados otimizada.",
    },
    {
        title: "Estilização",
        icon: <LuPanelsTopLeft size={20} color="cyan" />,
        description: "Tailwind, Styled-components, Sass, Bootstrap",
        details:
            "Criando interfaces de usuário responsivas e estilizadas com ferramentas como Tailwind CSS e Styled-components.",
    },
    {
        title: "Versionamento",
        icon: <FaCodeBranch size={20} color="purple" />,
        description: "Git, GitHub",
        details:
            "Gerenciando versões de código de forma eficiente com Git e colaborando de maneira eficaz através do GitHub.",
    },
    {
        title: "Linguagem",
        icon: <FaTerminal size={20} color="cyan" />,
        description: "Typescript, Javascript, PHP, Python",
        details:
            "Escrevendo código com tipagem segura para uma melhor manutenibilidade e experiência do desenvolvedor.",
    },
    {
        title: "Gerenciamento de estado",
        icon: <LuLayers size={20} color="purple" />,
        description: "Redux, Context API",
        details:
            "Gerenciando estados complexos de aplicação com soluções modernas de gerenciamento de estado.",
    },
    {
        title: "APIs",
        icon: <GoCpu size={25} color="white" />,
        description: "REST, GraphQL",
        details:
            "Projetando e implementando APIs eficientes para uma comunicação de dados fluida.",
    },
    {
        title: "Testes",
        icon: <LuCheck size={20} color="green" />,
        description: "Jest",
        details:
            "Criando testes automatizados para garantir a qualidade do código e evitar regressões.",
    },
    {
        title: "Otimização",
        icon: <CiGlobe size={20} color="orange" />,
        description: "Otimização, SEO",
        details:
            "Melhorando o desempenho da aplicação e garantindo uma boa visibilidade nos motores de busca.",
    },
    {
        title: "Agile",
        icon: <LuWorkflow size={20} color="blue" />,
        description: "Scrum, Kanban",
        details:
            "Trabalhando de forma eficiente em ambientes ágeis com foco na entrega contínua.",
    },
];

export default function Skills() {
    const [showAll, setShowAll] = useState(false);
    const visibleSkills = showAll ? skills : skills.slice(0, 3);

    return (
        <section id="skills" className="max-w-7xl m-auto p-4">
            <h2 className="text-center text-3xl mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-purple-600 rounded-2xl"
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-full p-3 border border-gray-500">
                                {skill.icon}
                            </div>
                            <div className="flex flex-col">
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>Ver mais</AccordionTrigger>
                                <AccordionContent>
                                    {skill.details}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 bg-chart-4 text-white rounded-lg opacity-90 hover:opacity-100 transition cursor-pointer"
                >
                    {showAll ? "Ver menos" : "Ver mais"}
                </button>
            </div>
        </section>
    );
}
