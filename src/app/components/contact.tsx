import { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import sendEmail from "@/services/nodemailer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }

        try {
            await sendEmail({ name, email, message });

            toast.success("E-mail enviado com sucesso!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.log(error);

            toast.error("Ocorreu um erro ao enviar a mensagem.");
        }
    };

    return (
        <>
            <section id="contact" className="max-w-7xl m-auto p-4 md:mb-16">
                <h2 className="text-center text-3xl font-bold mb-8">Contato</h2>
                <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 justify-center max-w-3xl m-auto">
                    <div className="">
                        <h3 className="text-2xl mb-4">Vamos nos conectar</h3>
                        <div className="grid gap-4">
                            <Link
                                href={"mailto:ronaldmateus785@gmail.com"}
                                target="_blank"
                                aria-label="Enviar email para ronaldmateus785@gmail.com"
                            >
                                <div className="flex items-center gap-4 border border-chart-4 p-2 pl-4 rounded-lg">
                                    <MdOutlineEmail
                                        size={25}
                                        aria-hidden="true"
                                    />
                                    <div className="h-8 w-0.5 rounded-lg bg-chart-4"></div>
                                    <div>
                                        <p>Email</p>
                                        <p>ronaldmateus785@gmail.com</p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href={"https://www.linkedin.com/in/ronald785/"}
                                target="_blank"
                                aria-label="Perfil no LinkedIn de Ronald Almeida"
                            >
                                <div className="flex items-center gap-4 border border-chart-4 p-2 pl-4 rounded-lg">
                                    <FaLinkedinIn
                                        size={25}
                                        aria-hidden="true"
                                    />
                                    <div className="h-8 w-0.5 rounded-lg bg-chart-4"></div>
                                    <div>
                                        <p>Linkedin</p>
                                        linkedin.com/in/ronald785
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href={"https://github.com/Ronald785"}
                                target="_blank"
                                aria-label="Perfil no GitHub de Ronald Almeida"
                            >
                                <div className="flex items-center gap-4 border border-chart-4 p-2 pl-4 rounded-lg">
                                    <FiGithub size={25} aria-hidden="true" />
                                    <div className="h-8 w-0.5 rounded-lg bg-chart-4"></div>
                                    <div>
                                        <p>GitHub</p>
                                        github.com/Ronald785
                                    </div>
                                </div>
                            </Link>

                            <div className="flex items-center gap-4 border border-chart-4 p-2 pl-4 rounded-lg">
                                <MdLocationOn size={25} aria-hidden="true" />
                                <div className="h-8 w-0.5 rounded-lg bg-chart-4"></div>
                                <div>
                                    <p>Localização</p>
                                    Campinas, SP, Brasil
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-4">Envie uma mensagem</h3>
                        <form
                            onSubmit={handleSubmit}
                            className="border-2 border-chart-4 p-6 rounded-lg"
                        >
                            <div className="grid gap-1 mb-2">
                                <label htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="p-2 border-2 rounded-lg focus:outline-chart-4 focus:outline-2"
                                    placeholder="Seu nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-1 mb-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="p-2 border-2 rounded-lg focus:outline-chart-4 focus:outline-2"
                                    placeholder="Seu email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-1 mb-2">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="p-2 border-2 rounded-lg resize-none focus:outline-chart-4 focus:outline-2"
                                    placeholder="Sua mensagem"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="flex gap-0 items-center justify-center w-full rounded-lg bg-chart-4 mt-2 p-2 cursor-pointer font-bold hover:opacity-90"
                            >
                                <IoIosSend size={20} />
                                <p>Enviar</p>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}
