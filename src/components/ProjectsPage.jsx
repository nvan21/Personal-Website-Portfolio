import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import content from "../assets/text_content.json";
import basketballThumbnail from "../assets/ppo_thumbnail.png";
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
            card will show more information about the project with links to
            code/documents at the bottom of each card.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 gap-9" ref={projectCardsRef}>
          <ProjectCard
            key={index}
            title={content.projectPage.basketballShotTracker.title}
            thumbnail={basketballThumbnail}
            introduction={
              content.projectPage.basketballShotTracker.introduction
            }
            description={content.projectPage.basketballShotTracker.description}
            motivation={content.projectPage.basketballShotTracker.motivation}
            lessons={content.projectPage.basketballShotTracker.lessons}
            roadblocks={content.projectPage.basketballShotTracker.roadblocks}
            extra={content.projectPage.basketballShotTracker.extra}
            skills={content.projectPage.basketballShotTracker.skills}
          />
          {Object.keys(content.projectPage).map((project, index) => {
            const projectData = content.projectPage[project];
            const element = (
              <ProjectCard
                key={index}
                title={projectData.title}
                thumbnail={projectData.thumbnail}
                introduction={projectData.introduction}
                description={projectData.description}
                motivation={projectData.motivation}
                lessons={projectData.lessons}
                roadblocks={projectData.roadblocks}
                extra={projectData.extra}
                skills={projectData.skills}
              />
            );

            return element;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
