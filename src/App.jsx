import { useState } from "react";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import VideoBG from "./components/VideoBG";
import Modals from "./components/Modals";
import Projects from "./components/Projects";

export default function App() {
  const [popup, setPopup] = useState(null);

  return (
    <div className="app-container">
      <VideoBG />
      <Introduction />

      <div className="overlay">
        <button onClick={() => setPopup("skills")}>Skills</button>
        <button onClick={() => setPopup("experience")}>Experience</button>
        <button onClick={() => setPopup("projects")}>Projects</button>
        <button onClick={() => setPopup("contact")}>Contact</button>
      </div>

      {popup && (
        <Modals onClose={() => setPopup(null)}>
          {popup === "skills" && <Skills />}
          {popup === "experience" && <Experience />}
          {popup === "projects" && <Projects />}
          {popup === "contact" && <Contact />}
        </Modals>
      )}
    </div>
  );
}
