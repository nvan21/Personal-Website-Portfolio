import React, { useRef } from "react";

import content from "../assets/text_content.json";
import TimelineElement from "./TimelineElement";

const WorkPage = () => {
  let isLeft = true;

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
      <div className="flex flex-col mt-12 w-max-7xl items-center">
        {Object.keys(content.workPage).map((job, index) => {
          const jobData = content.workPage[job];
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
        {/* <TimelineElement
          title={content.workPage.csl.title}
          company={content.workPage.csl.company}
          experiences={content.workPage.csl.experiences}
          date={content.workPage.csl.date}
          skills={content.workPage.csl.skills}
          left={true}
        /> */}
        {/* <TimelineElement
          title={content.workPage.johnDeere.title}
          company={content.workPage.johnDeere.company}
          experiences={content.workPage.johnDeere.experiences}
          date={content.workPage.johnDeere.date}
          skills={content.workPage.johnDeere.skills}
          left={false}
        />
        <TimelineElement
          title={content.workPage.graceTechnologies.title}
          company={content.workPage.graceTechnologies.company}
          experiences={content.workPage.graceTechnologies.experiences}
          date={content.workPage.graceTechnologies.date}
          skills={content.workPage.graceTechnologies.skills}
          left={true} */}
      </div>
    </section>
  );
};

export default WorkPage;
