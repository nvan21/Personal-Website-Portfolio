import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { IoCloseSharp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

gsap.registerPlugin(useGSAP);

const ProjectCard = (props) => {
  const title = props.title;
  const thumbnail = props.thumbnail;
  const skills = props.skills;
  const description = props.description;
  const motivation = props.motivation;
  const lessons = props.lessons;
  const roadblocks = props.roadblocks;
  const extra = props.extra;

  const string_skills = skills.map(skill => `#${skill}`).join('     ')

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExpanded]);

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={`${isExpanded ? "overflow-hidden" : ""}`}>
      {isExpanded ? (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-lg">
          <div className="w-5/6 h-2/3 relative overflow-auto flex flex-col xl:flex-row rounded-lg bg-gray">
            <div className="flex xl:hidden justify-end items-end sticky top-0 p-2">
              <button
                className="hover:scale-110 transition-all duration-500"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <IoCloseSharp className="text-3xl text-black xl:text-gray" />
              </button>
            </div>

            <div className="flex flex-col w-full xl:w-2/5 h-fill gap-5 p-10 xl:p-7 justify-center xl:sticky xl:overflow-hidden">
              <h2 className="text-3xl md:text-5xl sm:text-4xl font-extrabold font-main text-gold flex flex-wrap">
                {title}
              </h2>
              <img src={thumbnail} className="rounded-lg" />
              <div className="flex gap-3 flex-wrap">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-light_gold text-base md:text-2xl sm:text-xl font-medium font-main"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-row w-full h-max xl:h-full xl:w-3/5 bg-cream p-10 xl:p-7 xl:overflow-auto">
              <div className="flex flex-col gap-3">
                <h1 className="font-main text-gray font-bold text-3xl mt-3">
                  Introduction
                </h1>
                <p className="font-main text-lg font-light text-metal">
                  {description}
                </p>
                <h1 className="font-main text-gray font-bold text-3xl mt-3">
                  Motivation
                </h1>
                <p className="font-main text-lg font-light text-metal">
                  {motivation}
                </p>
                <h1 className="font-main text-gray font-bold text-3xl mt-3">
                  Roadblocks
                </h1>
                <p className="font-main text-lg font-light text-metal">
                  {roadblocks}
                </p>
                <h1 className="font-main text-gray font-bold text-3xl mt-3">
                  What I Learned
                </h1>
                <p className="font-main text-lg font-light text-metal">
                  {lessons}
                </p>
                <h1 className="font-main text-gray font-bold text-3xl mt-3">
                  Extra Information
                </h1>
                <div className="flex flex-row gap-4">
                  {extra.github && (
                    <button onClick={() => openLink(extra.github)}>
                      <IoLogoGithub className="text-5xl text-gold hover:scale-110 duration-500 transition-all" />
                    </button>
                  )}
                </div>
              </div>
              <div className="hidden xl:flex h-fill justify-end items-start sticky top-0">
                <button
                  className="hover:scale-110 transition-all duration-500"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <IoCloseSharp className="text-3xl text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="w-full sm:max-w-[350px] bg-gray rounded-lg shadow-xl border-cream border-b-2 p-5 hover-default flex flex-col gap-5 text-left"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
            {title}
          </h2>
          <img src={thumbnail} className="rounded-lg" />
          <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-x-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-light_gold text-base md:text-xl sm:text-l font-medium font-main"
              >
                #{skill}
              </span>
            ))}
          </div>
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
