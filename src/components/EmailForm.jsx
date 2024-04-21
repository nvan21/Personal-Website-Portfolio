import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service ID, template ID, and public key
    const serviceID = "service_eq9myv4";
    const templateID = "template_29qovrd";
    const publicKey = "4VyN11h5DLqWeE6wm";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Nathan Van Utrecht",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-1/2 bg-gray p-5 rounded-lg mt-12"
    >
      <h1 className="text-3xl text-gold font-bold">Name</h1>
      <input
        className="rounded-lg px-3 bg-cream text-metal w-full font-medium placeholder-metal placeholder:italic placeholder:font-normal shadow-xl"
        type="text"
        id="name"
        autoComplete="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1 className="text-3xl text-gold font-bold mt-3">Email</h1>
      <input
        className="rounded-lg px-3 bg-cream text-metal w-full font-medium placeholder-metal placeholder:italic placeholder:font-normal shadow-xl"
        type="email"
        id="email"
        autoComplete="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h1 className="text-3xl text-gold font-bold">Message</h1>
      <textarea
        className="rounded-lg px-3 bg-cream text-metal w-full font-medium placeholder-metal placeholder:italic placeholder:font-normal shadow-xl"
        cols="30"
        rows="10"
        id="message"
        value={message}
        placeholder="Your Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-gold w-1/2 mx-auto rounded-lg text-cream font-bold text-xl p-2 shadow-xl mt-3"
        type="submit"
      >
        Send Email
      </button>
    </form>
  );
};

export default EmailForm;
