import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import AboutPage from "./components/AboutPage";
import ResearchPage from "./components/ResearchPage";
import WorkPage from "./components/WorkPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <NavBar />
      <IntroPage />
      <AboutPage />
      <ResearchPage />
      <WorkPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
