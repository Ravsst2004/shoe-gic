import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div>
      {label && <label className="text-sm md:text-base">{label}</label>}
      <input {...props} />
    </div>
  );
}
