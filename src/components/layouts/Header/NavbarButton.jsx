import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function NavbarButton({ showMenu, handleOpenMenu }) {
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
