import React from "react";

export default function Button({ children, className }) {
  return (
    <button className={`border-2 cursor-pointer p-2 ${className}`}>
      {children}
    </button>
  );
}
