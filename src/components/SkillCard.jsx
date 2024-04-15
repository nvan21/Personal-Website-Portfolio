import React, { useState } from "react";

const SkillCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button className="bg-gray flex flex-col rounded-lg items-center gap-5 px-3 py-5 border-2 border-gold w-full shadow-xl hover:scale-105 duration-500 transition-all hover:border-cream">
      {props.icon}
      <p className="text-cream font-bold text-xl">{props.text}</p>
      <div className="w-full bg-metal rounded-full h-2">
        <div
          className="bg-gold rounded-full h-full"
          style={{ width: `${props.level}%` }}
        ></div>
      </div>
    </button>
  );
};

export default SkillCard;
