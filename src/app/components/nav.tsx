import { useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

const navLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Seção para telas grandes */}
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
                        {navLinks.map(({ label, href }) => (
                            <li className="cursor-pointer mr-4" key={href}>
                                <Link href={href} className="font-bold">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <IoMenu
                        size={30}
                        className="md:hidden cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </section>

            {/* Seção para telas pequenas */}
            <section
                className={`fixed w-full h-full top-0 backdrop-blur-3xl shadow-custom z-1 transition-all duration-300 ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <div className="max-w-7xl m-auto p-4 h-full flex flex-col justify-center items-center gap-8 text-center text-lg relative">
                    <ul className="flex justify-center items-center">
                        <li className="cursor-pointer title">
                            <Link href={"#home"} className="font-extrabold">
                                Ronald Almeida
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col items-center gap-8">
                        {navLinks.map(({ label, href }) => (
                            <li
                                className="cursor-pointer mr-4"
                                onClick={toggleMenu}
                                key={href}
                            >
                                <Link href={href} className="font-bold">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <IoClose
                        size={30}
                        className="absolute top-8 right-4 cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </section>
        </>
    );
}
