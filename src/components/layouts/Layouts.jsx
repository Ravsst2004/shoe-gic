import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

export default function Layouts({ children }) {
  const currentUrl = window.location.pathname;
  const notUrl = ["/login", "/registration"];

  return (
    <div className="relative">
      <Navbar />
      <div>{children}</div>
      {/* {!notUrl.includes(currentUrl) && <Footer />} */}

      <Footer />
    </div>
  );
}
