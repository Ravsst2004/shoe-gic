import React from "react";

export default function Button({ children, customClassName }) {
  const baseClassName = `border-2 border-slate-700 cursor-pointer rounded-md p-2`;
  const buttonClassName = `${baseClassName} ${customClassName}`;
  return <button className={`${buttonClassName}`}>{children}</button>;
}
