import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

export default function Home() {
    return (
        <header
            id="home"
            className="mt-36 max-w-3xl m-auto bg-1 grid grid-cols-1 md:grid-cols-1 gap-1 stars p-4 mb-12"
            role="banner"
        >
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    Ronald Almeida
                </h1>
                <h3 className="text-2xl mt-4">Desenvolvedor Full Stack</h3>
                <p className="mt-4 text-center">
                    Transformando ideias em realidade. Especializado em
                    construir sistemas, sites e aplicativos usando React,
                    Node.js, TypeScript e Javascript.
                </p>
                <div className="mt-4 flex gap-3">
                    <Link
                        href={"/assets/archives/cv_ronald_almeida.pdf"}
                        target="_blank"
                        aria-label="Baixar currículo de Ronald Almeida (PDF)"
                    >
                        <div className="border-2 border-chart-4 rounded-lg p-2 opacity-80 hover:opacity-90 flex justify-center items-center">
                            <TbFileCv
                                size={20}
                                className="text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-hidden="true"
                            />
                        </div>
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/ronald785/"}
                        target="_blank"
                        aria-label="Perfil no LinkedIn de Ronald Almeida"
                    >
                        <div className="border-2 border-chart-4 rounded-lg p-2 opacity-80 hover:opacity-90 flex justify-center items-center">
                            <FaLinkedinIn
                                size={20}
                                className="text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-hidden="true"
                            />
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Ronald785"}
                        target="_blank"
                        aria-label="Perfil no GitHub de Ronald Almeida"
                    >
                        <div className="border-2 border-chart-4 rounded-lg p-2 opacity-80 hover:opacity-90 flex justify-center items-center">
                            <LuGithub
                                size={20}
                                className="text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-hidden="true"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
