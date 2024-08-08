import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import "./assets/ppo_thumbnail.png";

function App() {
  return (
    <div className="relative z-0 bg-metal">
      <NavBar />
      <IntroPage />
      <AboutPage />
      <WorkPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
