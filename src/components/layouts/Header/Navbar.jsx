import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./Menu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className=" text-slate-200 fixed top-0 left-0 w-full z-50 md:border-b-2">
        <div className="relative w-full bg-white py-6 px-4 md:py-4 md:px-28 lg:px-60 z-20">
          <div className="flex justify-center md:justify-between items-center ">
            {" "}
            <h1 className="text-3xl text-slate-950 font-bold text-center md:text-start">
              ShoeGic.
            </h1>
            <div className="hidden md:block">
              <NavbarMenu />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white transition-transform duration-500 md:hidden ${
            showMenu ? "translate-y-0" : "-translate-y-[9.5rem]"
          } z-10 overflow-y-hidden`}
        >
          <NavbarMenu />
          <NavbarButton showMenu={showMenu} handleOpenMenu={handleOpenMenu} />
        </div>

        {/* {!showMenu && (
          <Button showMenu={showMenu} handleOpenMenu={handleOpenMenu} />
        )} */}
      </nav>
    </>
  );
}
