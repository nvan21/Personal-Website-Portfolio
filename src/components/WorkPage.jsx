import React from "react";

import content from "../assets/text_content.json";
import TimelineElement from "./TimelineElement";

const WorkPage = () => {
  const numTimelineElements = 3;

  const populateTimeline = () => {
    return <div></div>;
  };

  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal"
      id="work"
    >
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
          Work experience
        </p>
        <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-gold mt-2">
          Professional Experiences.
        </h1>
      </div>
      <div className="flex flex-col mt-4 w-max-7xl items-center">
        <TimelineElement
          title={content.workPage.csl.title}
          company={content.workPage.csl.company}
          experiences={content.workPage.csl.experiences}
          date={content.workPage.csl.date}
          skills={content.workPage.csl.skills}
          left={true}
        />
        <TimelineElement
          title={content.workPage.johnDeere.title}
          company={content.workPage.johnDeere.company}
          experiences={content.workPage.johnDeere.experiences}
          date={content.workPage.johnDeere.date}
          skills={content.workPage.johnDeere.skills}
          left={false}
        />
      </div>
    </section>
  );
};

export default WorkPage;
