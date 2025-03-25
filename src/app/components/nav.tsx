import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
    return (
        <section className="fixed w-full top-0 backdrop-blur-xl shadow-custom z-1">
            <div className="max-w-7xl m-auto p-4 h-24 flex justify-between items-center text-center text-lg">
                <ul className="flex justify-center items-center">
                    <li className="cursor-pointer title">
                        <Link href={"#home"} className="font-extrabold">
                            Ronald Almeida
                        </Link>
                    </li>
                </ul>
                <ul className="hidden md:flex items-center">
                    <li className="cursor-pointer mr-4">
                        <Link href={"#about"} className="font-bold">
                            Sobre
                        </Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"#experience"} className="font-bold">
                            Experiência
                        </Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"#projects"} className="font-bold">
                            Projetos
                        </Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"#skills"} className="font-bold">
                            Skills
                        </Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"#contact"} className="font-bold">
                            Contato
                        </Link>
                    </li>
                </ul>
                <IoMenu size={30} className="md:hidden cursor-pointer" />
            </div>
        </section>
    );
}
