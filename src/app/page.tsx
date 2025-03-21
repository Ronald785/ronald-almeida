import Nav from "./components/nav";
import Home from "./components/home";
import Skills from "./components/skilss";
import Projects from "./components/projects";
import Experience from "./components/experience";

export default function Page() {
    return (
        <div className="relative">
            <Nav />
            <Home />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
}
