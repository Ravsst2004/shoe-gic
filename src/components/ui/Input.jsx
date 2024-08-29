import React from "react";

export default function Input({ label, labelClassName, ...props }) {
  return (
    <div>
      {label && (
        <label className={`text-sm md:text-base ${labelClassName}`}>
          {label}
        </label>
      )}
      <input {...props} />
    </div>
  );
}
