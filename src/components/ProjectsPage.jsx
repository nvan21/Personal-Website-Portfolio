import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import content from "../assets/text_content.json";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const projectsIntroRef = useRef(null);
  const projectCardsRef = useRef(null);

  useGSAP(
    () => {
      const projectsIntro = projectsIntroRef.current;

      gsap.fromTo(
        projectsIntro,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: projectsIntro,
            toggleActions: "play none none reset",
          },
        }
      );
    },
    { scope: projectsIntroRef }
  );

  useGSAP(
    () => {
      const projectCards = projectCardsRef.current;

      gsap.fromTo(
        projectCards,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: projectCards,
            toggleActions: "play none none reset",
          },
        }
      );
    },
    { scope: projectCardsRef }
  );

  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal"
      id="projects"
    >
      <div className="flex flex-col gap-1">
        <div ref={projectsIntroRef}>
          <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
            My projects
          </p>
          <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-gold mt-2">
            Personal Projects.
          </h1>
          <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main mt-2">
            The following is a showcase of my personal projects. Clicking on a
            card will show more information about the project like pictures,
            code, etc.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 gap-9" ref={projectCardsRef}>
          <ProjectCard
            title={content.projectPage.ppoImplementation.title}
            description={content.projectPage.ppoImplementation.description}
            motivation={content.projectPage.ppoImplementation.motivation}
            lessons={content.projectPage.ppoImplementation.lessons}
            roadblocks={content.projectPage.ppoImplementation.roadblocks}
            extra={content.projectPage.ppoImplementation.extra}
            skills={content.projectPage.ppoImplementation.skills}
          />
          <ProjectCard
            title={content.projectPage.portfolioWebsite.title}
            thumbnail={content.projectPage.portfolioWebsite.thumbnail}
            description={content.projectPage.portfolioWebsite.description}
            motivation={content.projectPage.portfolioWebsite.motivation}
            lessons={content.projectPage.portfolioWebsite.lessons}
            roadblocks={content.projectPage.portfolioWebsite.roadblocks}
            extra={content.projectPage.portfolioWebsite.extra}
            skills={content.projectPage.portfolioWebsite.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
