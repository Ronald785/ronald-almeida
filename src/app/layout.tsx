import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"; // Usando "/" para referenciar arquivos locais

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ronald Almeida | Desenvolvedor Full Stack",
    description:
        "Ronald Almeida - Desenvolvedor Full Stack transformando ideias em soluções digitais eficientes e inovadoras...",
    applicationName: "Ronald Almeida | Desenvolvedor Full Stack",
    generator: "Next.js",
    creator: "Ronald Almeida",
    publisher: "Vercel",
    keywords:
        "Desenvolvedor Full Stack, React, Node.js, TypeScript, JavaScript, Next.js...",
    authors: [{ name: "Ronald Almeida", url: "https://ronald-almeida.com" }],
    icons: {
        icon: "https://ronald-almeida.com/favicon.svg",
        apple: "https://ronald-almeida.com/apple-icon.png",
    },
    openGraph: {
        title: "Ronald Almeida | Desenvolvedor Full Stack",
        description:
            "Portfólio de Ronald Almeida, especializado em tecnologias modernas.",
        url: "https://ronald-almeida.com/assets/images/og-image.webp",
        type: "website",
        images: [
            {
                url: "https://ronald-almeida.com/assets/images/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Ronald Almeida - Desenvolvedor Full Stack",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ronald Almeida | Desenvolvedor Full Stack",
        description:
            "Portfólio de Ronald Almeida, especializado em tecnologias modernas.",
        images: ["/assets/images/og-image.webp"],
    },
    metadataBase: new URL("https://ronald-almeida.com"),
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const schemaJsonLd = {
        "@context": "http://schema.org",
        "@type": "Person",
        name: "Ronald Almeida",
        url: "https://ronald-almeida.com",
        sameAs: [
            "https://www.linkedin.com/in/ronald785",
            "https://github.com/ronald785",
        ],
        jobTitle: "Desenvolvedor Full Stack",
        image: "https://ronald-almeida.com/assets/images/ronald.webp",
        worksFor: {
            "@type": "Organization",
            name: "Freelancer",
            url: "https://ronald-almeida.com",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "ronaldmateus785@gmail.com",
            areaServed: "BR",
            availableLanguage: "Portuguese",
        },
        mainEntityOfPage: "https://ronald-almeida.com",
    };

    return (
        <html lang="pt-BR">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="canonical" href="https://ronald-almeida.com/" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaJsonLd),
                    }}
                />
            </head>
            <body
                className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
