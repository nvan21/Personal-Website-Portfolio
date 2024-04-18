import React from "react";

import content from "../assets/text_content.json";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal"
      id="projects"
    >
      <div className="flex flex-col gap-1">
        <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
          My projects
        </p>
        <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-gold mt-2">
          Personal Projects.
        </h1>
        <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main mt-2">
          The following is a showcase of my personal projects. Clicking on a
          card will show more information about the project like pictures, code,
          etc.
        </p>
        <div className="flex flex-wrap mt-12 gap-9">
          <ProjectCard
            title={content.projectPage.ppoImplementation.title}
            description={content.projectPage.ppoImplementation.description}
            skills={content.projectPage.ppoImplementation.skills}
          />
          <ProjectCard
            title={content.projectPage.ppoImplementation.title}
            description={content.projectPage.ppoImplementation.description}
            skills={content.projectPage.ppoImplementation.skills}
          />
          <ProjectCard
            title={content.projectPage.ppoImplementation.title}
            description={content.projectPage.ppoImplementation.description}
            skills={content.projectPage.ppoImplementation.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
