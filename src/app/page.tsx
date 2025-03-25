"use client";

import { useEffect } from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import Skills from "./components/skilss";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Page() {
    useEffect(() => {
        const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

        const updateTheme = () => {
            if (matchDark.matches) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        };

        updateTheme();
        matchDark.addEventListener("change", updateTheme);

        return () => {
            matchDark.removeEventListener("change", updateTheme);
        };
    }, []);

    return (
        <div className="relative">
            <Nav />
            <Home />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}
