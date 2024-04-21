import React from "react";
import EmailForm from "./EmailForm";

const ContactPage = () => {
  return (
    <section
      className="px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal"
      id="contact"
    >
      <div className="flex flex-col gap-1">
        <p className="text-cream text-l md:text-2xl sm:text-xl font-medium font-main">
          Contact me
        </p>
        <h1 className="text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-gold mt-2">
          My Contact Information.
        </h1>
        <EmailForm />
      </div>
    </section>
  );
};

export default ContactPage;
