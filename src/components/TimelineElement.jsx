import React from "react";

import { FaGear } from "react-icons/fa6";

const TimelineElement = (props) => {
  const title = props.title;
  const company = props.company;
  const experiences = props.experiences;
  const skills = props.skills;
  const date = props.date;
  const logo = props.logo;
  const left = props.left;

  return (
    <div className="w-full">
      {left ? (
        // Left timeline element
        <div className="flex flex-row gap-5 w-full">
          <div className="hidden sm:block sm:w-[45%]">
            <div className="flex min-h-80 items-center justify-center">
              <div className="items-start bg-gray rounded-lg border-cream border-b-2 p-5 flex flex-col gap-3 shadow-xl">
                <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
                  {company}
                </h2>
                <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main italic">
                  {title}
                </p>
                <div>
                  {experiences.map((experience, index) => (
                    <li
                      key={index}
                      className="text-cream text-base md:text-xl sm:text-l font-medium font-main"
                    >
                      {experience}
                    </li>
                  ))}
                </div>
                <div className="flex gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-light_gold text-base md:text-xl sm:text-l font-medium font-main"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[10%] items-center">
            <div className="w-1.5 h-[42.5%] bg-gold" />
            <div className="h-[15%] aspect-square rounded-full bg-gold flex items-center justify-center">
              <FaGear className="text-3xl text-gray" />
            </div>
            <div className="w-1.5 h-[42.5%] bg-gold" />
          </div>
          <div className="w-[70%] sm:w-[45%]">
            <div className="sm:hidden flex flex-col min-h-80 gap-2 justify-center items-start sm:items-center">
              <div className="items-start bg-gray rounded-lg border-cream border-b-2 p-5 flex flex-col gap-3 shadow-xl">
                <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
                  {company}
                </h2>
                <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main italic">
                  {title}
                </p>
                <div>
                  {experiences.map((experience, index) => (
                    <li
                      key={index}
                      className="text-cream text-base md:text-xl sm:text-l font-medium font-main"
                    >
                      {experience}
                    </li>
                  ))}
                </div>
                <p className="text-cream text-xl font-medium shadow-xl">
                  {date}
                </p>
                <div className="flex gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-light_gold text-base md:text-xl sm:text-l font-medium font-main"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col min-h-80 gap-2 justify-center items-start">
              <p className="text-cream text-xl font-medium">{date}</p>
            </div>
          </div>
        </div>
      ) : (
        // Right timeline element
        <div className="flex flex-row gap-5 w-full">
          <div className="hidden w-0 sm:flex sm:w-[45%] sm:flex-col sm:min-h-80 sm:gap-2 sm:justify-center sm:items-end">
            <p className="text-cream text-xl font-medium shadow-xl">{date}</p>
          </div>
          <div className="flex flex-col w-[10%] items-center">
            <div className="w-1.5 h-[42.5%] bg-gold" />
            <div className="h-[15%] aspect-square rounded-full bg-gold flex items-center justify-center ">
              <FaGear className="text-3xl text-gray" />
            </div>
            <div className="w-1.5 h-[42.5%] bg-gold" />
          </div>
          <div className="w-[70%] sm:w-[45%]">
            <div className="flex flex-col min-h-80 gap-2 justify-center items-start sm:items-center">
              <div className="items-start bg-gray rounded-lg border-cream border-b-2 p-5 flex flex-col gap-3 shadow-xl">
                <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
                  {company}
                </h2>
                <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main italic">
                  {title}
                </p>
                <div>
                  {experiences.map((experience, index) => (
                    <li
                      key={index}
                      className="text-cream text-base md:text-xl sm:text-l font-medium font-main"
                    >
                      {experience}
                    </li>
                  ))}
                </div>
                <p className="block sm:hidden text-cream text-xl font-medium">
                  {date}
                </p>
                <div className="flex gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-light_gold text-base md:text-xl sm:text-l font-medium font-main"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineElement;
