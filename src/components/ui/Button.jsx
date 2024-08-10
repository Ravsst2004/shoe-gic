import React from "react";

export default function Button({ children, className }) {
  return (
    <button
      className={`border-2 border-slate-700 cursor-pointer rounded-md p-2 ${className}`}
    >
      {children}
    </button>
  );
}
