import React from "react";

const ProjectCard = (props) => {
  const title = props.title;
  const thumbnail = props.thumbnail;
  const description = props.description;
  const skills = props.skills;

  return (
    <div className="w-full sm:max-w-[350px] bg-gray rounded-lg shadow-xl border-cream border-b-2 p-5 hover-default flex flex-col gap-2">
      <h2 className="text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-gold">
        {title}
      </h2>
      <img src={thumbnail}></img>
      <p className="text-cream text-base md:text-xl sm:text-l font-medium font-main">
        {description}
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
  );
};

export default ProjectCard;
