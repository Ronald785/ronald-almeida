export default function Experience() {
    return (
        <section id="experience" className="max-w-7xl m-auto p-4">
            <h2 className="text-center text-3xl font-bold mb-8">Experiência</h2>

            <div className="grid grid-cols-1 gap-y-4 max-w-3xl m-auto">
                <div className="p-6 rounded-lg shadow-lg border-2 border-purple-600">
                    <h3 className="text-xl font-semibold">
                        Desenvolvedor Full Stack
                    </h3>
                    <p className="text-gray-400">
                        ERA | Maio 2024 - Atualmente
                    </p>

                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                        <li>
                            Desenvolvimento e manutenção de APIs escaláveis com
                            Node.js e Express.
                        </li>
                        <li>
                            Criação e otimização de microsserviços para alta
                            performance.
                        </li>
                        <li>Interfaces responsivas e acessíveis.</li>
                        <li>
                            Modelagem e otimização de bancos de dados (MySQL e
                            MongoDB).
                        </li>
                        <li>Testes unitários e de integração com Jest.</li>
                        <li>
                            Refatoração de código legado para maior eficiência.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 gap-y-4 max-w-3xl m-auto">
                <div className="p-6 rounded-lg shadow-lg border-2 border-purple-600">
                    <h3 className="text-xl font-semibold">
                        Desenvolvedor Full Stack
                    </h3>
                    <p className="text-gray-400">
                        UC2B | Junho 2021 - Maio 2024
                    </p>

                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                        <li>
                            Desenvolvimento de APIs RESTful eficientes com
                            Node.js e Express.
                        </li>
                        <li>Manutenção e escalabilidade de microsserviços.</li>
                        <li>Criação de interfaces otimizadas.</li>
                        <li>
                            Otimização de bancos de dados MySQL, PostgreSQL e
                            MongoDB.
                        </li>
                        <li>
                            Testes automatizados e integração contínua (Jest,
                            CI/CD).
                        </li>
                        <li>
                            Refatoração de código e melhoria de performance.
                        </li>
                        <li>
                            Implementação segura de autenticação e autorização
                            (JWT).
                        </li>
                        <li>Colaboração com equipes multidisciplinares.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 gap-y-4 max-w-3xl m-auto">
                <div className="p-6 rounded-lg shadow-lg border-2 border-purple-600">
                    <h3 className="text-xl font-semibold">
                        Desenvolvedor Front-end
                    </h3>
                    <p className="text-gray-400">Freelancer | 2020</p>

                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                        <li>
                            Desenvolvimento de protótipos de UI com HTML, CSS e
                            JavaScript.
                        </li>
                        <li>Hospedagem e configuração em Netlify e Vercel.</li>
                        <li>Criação de interfaces responsivas e acessíveis.</li>
                        <li>
                            Implementação de testes unitários para garantir
                            qualidade.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
