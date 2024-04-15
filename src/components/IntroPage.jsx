import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FaGear } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const githubLink = "https://github.com/nvan21";
const linkedInLink = "https://www.linkedin.com/in/nathan-van-utrecht";

const IntroPage = () => {
  const barRef = useRef(null);
  const gearRef = useRef(null);
  const textRef = useRef(null);
  const devDisable = true;

  useGSAP(() => {
    if (devDisable) return;

    const bar = barRef.current;
    const gear = gearRef.current;
    const text = textRef.current;

    gsap.fromTo(
      bar,
      { height: 0, opacity: 0 },
      {
        height: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      gear,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      text,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );
  });

  const handleOnLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="relative flex w-full h-screen mx-auto justify-center items-center">
      <div className="max-w-7xl gap-5 flex items-start px-6 inset-0 sm:px-16 mx-auto">
        <div className="flex flex-col items-center">
          <div ref={gearRef}>
            <FaGear className="text-gold text-xl" />
          </div>
          <div className="w-1 h-40 bg-gradient-to-b from-gold" ref={barRef} />
        </div>
        <div className="flex flex-col gap-4" ref={textRef}>
          <h1 className="text-cream text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main items-center mt-2">
            Hello, I'm <span className="text-gold">Nathan Van Utrecht</span>
          </h1>
          <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
            Mechanical Engineering Student <br /> Artificial Intelligence
            Researcher <br /> Undergraduate at Iowa State University
          </p>
          <div className="flex flex-row gap-3 text-gold text-3xl">
            <button
              className="hover-default"
              onClick={() => handleOnLinkClick(githubLink)}
            >
              <IoLogoGithub />
            </button>
            <button
              className="hover-default"
              onClick={() => handleOnLinkClick(linkedInLink)}
            >
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
