import React from "react";

const SkillCard = (props) => {
  return (
    <div className="bg-gray flex flex-col rounded-lg items-center gap-5 px-3 py-5 border-b-2 border-cream w-full shadow-xl hover:scale-105 duration-500 transition-all">
      {props.icon}
      <p className="text-cream font-bold text-xl">{props.text}</p>
      <div className="w-full bg-metal rounded-full h-2">
        <div
          className="bg-gold rounded-full h-full"
          style={{ width: `${props.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
