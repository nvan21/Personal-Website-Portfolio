import React, { useRef } from "react";
import EmailForm from "./EmailForm";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const contactIntroRef = useRef(null);
  const contactFormRef = useRef(null);

  useGSAP(
    () => {
      const contactIntro = contactIntroRef.current;

      gsap.fromTo(
        contactIntro,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: contactIntro,
            toggleActions: "play none none reset",
          },
        }
      );
    },
    { scope: contactIntroRef }
  );

  useGSAP(
    () => {
      const contactForm = contactFormRef.current;

      gsap.fromTo(
        contactForm,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: contactForm,
            toggleActions: "play none none reset",
          },
        }
      );
    },
    { scope: contactFormRef }
  );

  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal"
      id="contact"
    >
      <div className="flex flex-col gap-1">
        <div ref={contactIntroRef}>
          <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
            Contact me
          </p>
          <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-gold mt-2">
            My Contact Information.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5" ref={contactFormRef}>
          <EmailForm />
          <div className="flex w-3/5 md:w-2/5 mx-auto items-center justify-center">
            <img
              src="/astronaut.png"
              alt="Cartoon astronaut waving on a rocket."
              title="Image by catalyst stuff on Freepik"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
