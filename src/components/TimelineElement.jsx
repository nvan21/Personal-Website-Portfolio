import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaGear } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TimelineElement = (props) => {
  const title = props.title;
  const company = props.company;
  const experiences = props.experiences;
  const skills = props.skills;
  const date = props.date;
  const left = props.left;

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const iconRef = useRef(null);
  const parentRef = useRef(null);

  useGSAP(
    () => {
      const left = leftRef.current;
      const right = rightRef.current;
      const icon = iconRef.current;
      const parent = parentRef.current;

      const startingX = 0.7 * parent.clientWidth;

      gsap.fromTo(
        left,
        { x: "-70%", opacity: 0 }, // Start state
        {
          x: "0%", // End position (on-screen)
          opacity: 1,
          duration: 0.75, // Animation duration
          ease: "power4.out", // Easing function for smooth animation
          scrollTrigger: {
            start: "top 80%",
            end: "bottom 20%",
            trigger: right,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        right,
        { x: "70%", opacity: 0 }, // Start state
        {
          x: "0%", // End position (on-screen)
          opacity: 1,
          duration: 0.75, // Animation duration
          ease: "power4.out", // Easing function for smooth animation
          scrollTrigger: {
            start: "top 80%",
            end: "bottom 20%",
            trigger: right,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        icon,
        { opacity: 0, rotation: 0 },
        {
          opacity: 1,
          duration: 0.75,
          rotation: 360,
          ease: "power4.out",
          scrollTrigger: {
            start: "top 80%",
            end: "bottom 20%",
            trigger: right,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
    // { scope: [leftRef, rightRef, iconRef] }
  );

  return (
    <div className="w-full">
      {left ? (
        // Left timeline element
        <div
          className="flex flex-row gap-5 w-full overflow-hidden"
          ref={parentRef}
        >
          <div className="hidden sm:block sm:w-[45%]">
            <div className="flex min-h-80 items-center justify-center">
              <div
                className="items-start bg-gray rounded-lg border-cream border-b-2 p-5 flex flex-col gap-3 shadow-xl w-[90%]"
                ref={leftRef}
              >
                <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
                  {company}
                </h2>
                <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main italic">
                  {title}
                </p>
                <ul className="list-disc pl-4">
                  {experiences.map((experience, index) => (
                    <li
                      key={index}
                      className="text-cream text-base md:text-xl sm:text-l font-medium font-main p-1"
                    >
                      {experience}
                    </li>
                  ))}
                </ul>
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
            <div className="w-1.5 h-[50%] bg-gold" />
            <div className="h-[50px] aspect-square rounded-full bg-gold flex items-center justify-center">
              <div ref={iconRef}>
                <FaGear className="text-3xl text-gray" />
              </div>
            </div>
            <div className="w-1.5 h-[50%] bg-gold" />
          </div>
          <div className="w-[70%] sm:w-[45%]" ref={rightRef}>
            <div className="sm:hidden flex flex-col min-h-80 gap-2 justify-center items-start sm:items-center">
              <div className="items-start bg-gray rounded-lg border-cream border-b-2 p-5 flex flex-col gap-3 shadow-xl w-[90%]">
                <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
                  {company}
                </h2>
                <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main italic">
                  {title}
                </p>
                <ul className="list-disc pl-4">
                  {experiences.map((experience, index) => (
                    <li
                      key={index}
                      className="text-cream text-base md:text-xl sm:text-l font-medium font-main p-1"
                    >
                      {experience}
                    </li>
                  ))}
                </ul>
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
            <div className="hidden sm:flex flex-col h-full gap-2 justify-center items-start">
              <p className="text-cream text-xl font-medium">{date}</p>
            </div>
          </div>
        </div>
      ) : (
        // Right timeline element
        <div
          className="flex flex-row gap-5 w-full overflow-hidden"
          ref={parentRef}
        >
          <div
            className="hidden w-0 sm:flex sm:w-[45%] sm:flex-col sm:min-h-80 sm:gap-2 sm:justify-center sm:items-end"
            ref={leftRef}
          >
            <p className="text-cream text-xl font-medium shadow-xl">{date}</p>
          </div>
          <div className="flex flex-col w-[10%] items-center">
            <div className="w-1.5 h-[50%] bg-gold" />
            <div className="h-[50px] aspect-square rounded-full bg-gold flex items-center justify-center ">
              <div ref={iconRef}>
                <FaGear className="text-3xl text-gray" />
              </div>
            </div>
            <div className="w-1.5 h-[50%] bg-gold" />
          </div>
          <div className="w-[70%] sm:w-[45%]">
            <div
              className="flex flex-col min-h-80 gap-2 justify-center items-start sm:items-center"
              ref={rightRef}
            >
              <div className="items-start bg-gray rounded-lg border-cream border-b-2 p-5 flex flex-col gap-3 shadow-xl w-[90%]">
                <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
                  {company}
                </h2>
                <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main italic">
                  {title}
                </p>
                <ul className="list-disc pl-4">
                  {experiences.map((experience, index) => (
                    <li
                      key={index}
                      className="text-cream text-base md:text-xl sm:text-l font-medium font-main p-1"
                    >
                      {experience}
                    </li>
                  ))}
                </ul>
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
