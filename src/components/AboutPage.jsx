import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import SkillCard from "./SkillCard";

import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBlender } from "react-icons/si";
import { PiCubeBold } from "react-icons/pi";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const aboutRef = useRef(null);
  const birthDate = new Date(2002, 10, 2, 0, 0, 0, 0);
  const currentDate = new Date();

  const getAge = () => {
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    const day = currentDate.getDate() - birthDate.getDate();

    if (month < 0 || (month == 0 && day < 0)) {
      age -= 1;
    }

    return <span>{age}</span>;
  };

  useGSAP(() => {
    const about = aboutRef.current;

    gsap.fromTo(
      about,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: about,
          toggleActions: "play none none reset",
        },
      }
    );
  });
  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal"
      id="about"
    >
      <div className="flex flex-col gap-1" ref={aboutRef}>
        <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
          Overview
        </p>
        <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-gold mt-2">
          About Me.
        </h1>
        <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main mt-2">
          I am a {getAge()} year old mechanical engineering student with a
          passion for everything from machine learning to advanced 3D modeling.
          I am a quick learner and a meticulous worker. This blend of quick
          learning and attention to detail, coupled with my intrinsic desire to
          excel, helps me consistently deliver great results.
        </p>
        <div className="flex flex-wrap mt-12 gap-9">
          <div className="sm:w-[250px] w-full">
            <SkillCard
              icon={<PiCubeBold className="text-gold text-9xl" />}
              text="Solidworks"
              level={90}
            />
          </div>
          <div className="sm:w-[250px] w-full">
            <SkillCard
              icon={<FaPython className="text-gold text-9xl" />}
              text="Python"
              level={90}
            />
          </div>
          <div className="sm:w-[250px] w-full">
            <SkillCard
              icon={<SiPytorch className="text-gold text-9xl" />}
              text="PyTorch"
              level={65}
            />
          </div>
          <div className="sm:w-[250px] w-full">
            <SkillCard
              icon={<IoLogoJavascript className="text-gold text-9xl" />}
              text="JavaScript"
              level={50}
            />
          </div>
          <div className="sm:w-[250px] w-full">
            <SkillCard
              icon={<SiBlender className="text-gold text-9xl" />}
              text="Blender"
              level={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;