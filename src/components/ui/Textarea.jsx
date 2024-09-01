import React from "react";

export default function Textarea({ label, labelClassName, ...props }) {
  return (
    <div>
      {label && (
        <label className={`text-sm md:text-base ${labelClassName}`}>
          {label}
        </label>
      )}
      <textarea {...props}></textarea>
    </div>
  );
}
