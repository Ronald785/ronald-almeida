import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

export default function Home() {
    return (
        <section
            id="home"
            className="mt-24 max-w-7xl m-auto bg-1 grid grid-cols-1 md:grid-cols-2 gap-1 stars p-4"
        >
            <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    Ronald Almeida
                </h1>
                <h3 className="text-2xl mt-4">Desenvolvedor Full Stack</h3>
                <p className="mt-4 text-center md:text-start">
                    Criando sonhos com as tecnologias mais modernas.
                    Especializado em construir sistemas, sites e aplicativos
                    usando React, Node.js, TypeScript e Javascript.
                </p>
                <div className="mt-4 flex gap-3">
                    <Link href={"https://github.com/Ronald785"} target="_blank">
                        <div className="border-2 border-chart-4 rounded-lg p-2 opacity-80 hover:opacity-90 flex justify-center items-center">
                            <TbFileCv
                                size={20}
                                className="text-black dark:text-white"
                            />
                        </div>
                    </Link>
                    <Link href={"https://github.com/Ronald785"} target="_blank">
                        <div className="border-2 border-chart-4 rounded-lg p-2 opacity-80 hover:opacity-90 flex justify-center items-center">
                            <FaLinkedinIn
                                size={20}
                                className="text-black dark:text-white"
                            />
                        </div>
                    </Link>
                    <Link href={"https://github.com/Ronald785"} target="_blank">
                        <div className="border-2 border-chart-4 rounded-lg p-2 opacity-80 hover:opacity-90 flex justify-center items-center">
                            <LuGithub
                                size={20}
                                className="text-black dark:text-white"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="div"></div>
        </section>
    );
}
