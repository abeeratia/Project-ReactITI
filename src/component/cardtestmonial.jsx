import React from "react";

function CardTestmonial({ key, title, description, image }) {
  return (
    <div className="space-y-4 shadow-lg p-10 rounded-4 " key={key}>
      <img className="w-full h-50" src={image} alt={title} />
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
      <button className="bg-amber-500 text-white px-10 py-2">read more</button>
    </div>
  );
}

export default CardTestmonial;
