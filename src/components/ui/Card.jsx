import React from "react";

export default function Card({ title, description, image }) {
  return (
    <div
      className={`group border-2 border-slate-700 hover:bg-slate-800 cursor-pointer transition-all ease-in-out duration-300 rounded-md mx-4 p-2`}
    >
      <h1 className="group-hover:text-purple-400 transition-colors duration-200 ease-in text-xl font-semibold">
        {title}
      </h1>
      <p className="pt-1">{description}</p>
    </div>
  );
}
