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

export default function Skills() {
    return (
        <section className="max-w-7xl m-auto p-4">
            <h2 className="text-center text-3xl mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-cyan-300">
                            <LuCode size={20} color="cyan" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Front-end</h4>
                            <p>React.js, Next.js, Ejs, Nunjucks</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Construindo interfaces de usuário responsivas e
                                interativas com recursos modernos do React e
                                Next.js para desempenho ideal, incluindo Ejs e
                                Nunjucks.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-green-500">
                            <LuServer size={20} color="green" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Back-end</h4>
                            <p>Node.js, Express, Python, PHP</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Criando aplicações robustas no lado do servidor
                                com foco em escalabilidade e arquitetura limpa.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-orange-400">
                            <LuDatabase size={20} color="orange" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Banco de dados</h4>
                            <p>MySQL, MongoDB, PostgreSQL</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Projetando e implementando esquemas de banco de
                                dados e consultas eficientes para uma gestão de
                                dados otimizada.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-cyan-400">
                            <LuPanelsTopLeft size={20} color="cyan" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Estilização</h4>
                            <p>Tailwind, Styled-components, Sass, Bootstrap</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Criando interfaces de usuário responsivas e
                                estilizadas com ferramentas como Tailwind CSS e
                                Styled-components.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="rounded-full p-3  border border-purple-900">
                            <FaCodeBranch size={20} color="purple" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Versionamento</h4>
                            <p>Git, GitHub</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Gerenciando versões de código de forma eficiente
                                com Git e colaborando de maneira eficaz através
                                do GitHub.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="rounded-full p-3  border border-cyan-500">
                            <FaTerminal size={20} color="cyan" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Linguagem</h4>
                            <p>Typescript, Javascript, PHP, Python</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Escrevendo código com tipagem segura para uma
                                melhor manutenibilidade e experiência do
                                desenvolvedor.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-purple-700">
                            <LuLayers size={20} color="purple" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Gerenciamento de estado</h4>
                            <p>Redux, Context API</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Gerenciando estados complexos de aplicação com
                                soluções modernas de gerenciamento de estado.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-white-500">
                            <GoCpu size={25} color="white" />
                        </div>
                        <div className="flex flex-col">
                            <h4>APIs</h4>
                            <p>REST, GraphQL</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Projetando e implementando APIs eficientes para
                                uma comunicação de dados fluida.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-green-500">
                            <LuCheck size={20} color="green" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Testes</h4>
                            <p>Jest</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Criando testes automatizados para garantir a
                                qualidade do código e evitar regressões.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-orange-400">
                            <CiGlobe size={20} color="orange" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Otimização</h4>
                            <p>Otimização, SEO</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Melhorando o desempenho da aplicação e
                                garantindo uma boa visibilidade nos motores de
                                busca.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex flex-col justify-baseline p-8 pb-2 border border-gray-800 dark:border-white  rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full p-3  border border-blue-800">
                            <LuWorkflow size={20} color="blue" />
                        </div>
                        <div className="flex flex-col">
                            <h4>Agile</h4>
                            <p>Scrum, Kanban</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver mais</AccordionTrigger>
                            <AccordionContent>
                                Trabalhando de forma eficiente em ambientes
                                ágeis com foco na entrega contínua.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
