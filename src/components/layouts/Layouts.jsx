import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

export default function Layouts({ children }) {
  return (
    <div className="mt-44 md:mt-20">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
