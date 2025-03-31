import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ronald Almeida | Desenvolvedor Full Stack",
        short_name: "Ronald Almeida | Desenvolvedor",
        description:
            "Ronald Almeida - Desenvolvedor Full Stack transformando ideias em soluções digitais eficientes e inovadoras. Com experiência em React, Node.js, TypeScript e diversas tecnologias modernas, crio sistemas, sites e aplicativos escaláveis e de alto desempenho. Meu objetivo é desenvolver aplicações acessíveis, responsivas e otimizadas, sempre buscando a melhor experiência para o usuário. Vamos construir algo incrível juntos?",
        start_url: "/",
        display: "standalone",
        background_color: "#030712",
        theme_color: "#030712",
        icons: [
            {
                src: "/code.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
