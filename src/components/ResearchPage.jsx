import React from "react";

import content from "../assets/text_content.json";
import TimelineElement from "./TimelineElement";

const ResearchPage = () => {
  let isLeft = true;

  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-primary"
      id="work"
    >
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main">
          My research
        </p>
        <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-tertiary mt-2">
          Research Experiences.
        </h1>
      </div>
      <div className="flex flex-col mt-12 w-max-7xl items-center">
        {Object.keys(content.researchPage).map((job, index) => {
          const jobData = content.researchPage[job];
          const element = (
            <TimelineElement
              key={index}
              title={jobData.title}
              company={jobData.company}
              experiences={jobData.experiences}
              date={jobData.date}
              skills={jobData.skills}
              left={isLeft}
            />
          );

          // Toggle the isLeft variable for the next iteration
          isLeft = !isLeft;

          return element;
        })}
      </div>
    </section>
  );
};

export default ResearchPage;
