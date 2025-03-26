"use server";

import "dotenv/config";
import nodemailer from "nodemailer";

interface EmailParams {
    name: string;
    email: string;
    message: string;
}

const sendEmail = async ({
    name,
    email,
    message,
}: EmailParams): Promise<void> => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL_TO,
        subject: "Contato do portfolio",
        text: `Mensagem de ${name} (${email}):\n\n${message}`,
        html: `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email enviado: " + info.response);
    } catch (error) {
        console.error("Erro ao enviar email:", error);
    }
};

export default sendEmail;
