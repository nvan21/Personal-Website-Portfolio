import React from "react";

const SkillCard = (props) => {
  return (
    <div className="bg-secondary flex flex-col rounded-lg items-center gap-5 px-3 py-5 border-b-2 border-primary_text w-full shadow-xl hover:scale-105 duration-500 transition-all">
      {props.icon}
      <p className="text-primary_text font-bold text-xl">{props.text}</p>
      <div className="w-full bg-primary rounded-full h-2">
        <div
          className="bg-tertiary rounded-full h-full"
          style={{ width: `${props.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
