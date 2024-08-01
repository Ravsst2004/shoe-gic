import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="relative text-slate-200">
        <div className="w-full bg-slate-900">
          <h1 className="text-3xl font-bold text-center py-6 px-4 md:py-4 md:px-8 md:text-start">
            notAstore
          </h1>
        </div>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-slate-900 transition-transform duration-500 ${
            showMenu ? "translate-y-0" : "-translate-y-[9.5rem]"
          } -z-20 overflow-y-hidden`}
        >
          <Menu />
          <Button showMenu={showMenu} handleOpenMenu={handleOpenMenu} />
        </div>

        {/* {!showMenu && (
          <Button showMenu={showMenu} handleOpenMenu={handleOpenMenu} />
        )} */}
      </nav>
    </>
  );
}

function Menu() {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
  ];
  const currentPath = window.location.pathname;

  return (
    <ul className="font-medium flex flex-col md:items-center p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
      {menuLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.path}
            className={`${
              currentPath === link.path
                ? "bg-orange-500 text-slate-200 md:text-orange-500"
                : "text-slate-800"
            } block py-2 px-3 rounded md:bg-transparent md:p-0`}
            aria-current="page"
          >
            {link.name}
          </a>
        </li>
      ))}
      {/* Uncomment if needed */}
      {/* <li>
        <a
          href="#"
          className="block py-2 px-3 rounded md:px-2 md:py-1 text-slate-800 md:text-white md:bg-yellow-500 md:hover:bg-yellow-600"
        >
          Login
        </a>
      </li> */}
    </ul>
  );
}

function Button({ showMenu, handleOpenMenu }) {
  return (
    <button
      onClick={handleOpenMenu}
      className={`w-full bg-slate-900 py-3 flex justify-center border-t-2 border-slate-600 md:hidden`}
    >
      {showMenu ? (
        <FaChevronUp className="text-slate-200" />
      ) : (
        <FaChevronDown className="text-slate-200" />
      )}
    </button>
  );
}
