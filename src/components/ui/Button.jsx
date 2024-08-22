import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={`border-2 cursor-pointer p-2 ${className}`}>
      {children}
    </button>
  );
}
