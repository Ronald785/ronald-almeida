import Link from "next/link";

export default function Nav() {
    return (
        <>
            <div className="h-28 flex justify-around text-center backdrop-blur-xl shadow-custom font-bold text-lg">
                <ul className="flex justify-center items-center">
                    <li className="cursor-pointer">
                        <Link href={"/"}>Ronald Almeida</Link>
                    </li>
                </ul>
                <ul className="flex items-center">
                    <li className="cursor-pointer mr-4">
                        <Link href={"#about"}>Sobre</Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"#experience"}>Experiência</Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"/projects"}>Projetos</Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"/projects"}>Skills</Link>
                    </li>
                    <li className="cursor-pointer mr-4">
                        <Link href={"/contact"}>Contato</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
