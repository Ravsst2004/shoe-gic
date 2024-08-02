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
      <nav className="relative text-slate-200">
        <div className="w-full bg-slate-900 py-6 px-4 md:py-4 md:px-8">
          <div className="flex justify-center md:justify-between items-center">
            {" "}
            <h1 className="text-3xl font-bold text-center md:text-start">
              notAstore
            </h1>
            <div className="hidden md:block">
              <NavbarMenu />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-slate-900 transition-transform duration-500 md:hidden ${
            showMenu ? "translate-y-0" : "-translate-y-[9.5rem]"
          } -z-20 overflow-y-hidden`}
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
