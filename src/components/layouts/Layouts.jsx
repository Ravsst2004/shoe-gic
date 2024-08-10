import React from "react";
import Navbar from "./Header/Navbar";

export default function Layouts({ children }) {
  return (
    <div className="mt-44 md:mt-36">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
