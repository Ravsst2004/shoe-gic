import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MobileMenu({
  linkMenu,
  showMobileMenu,
  handleCloseMobileMenu,
}) {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseMobileMenu();
    }
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  return (
    <>
      {showMobileMenu && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
        ></div>
      )}
      <div
        className={`${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        } fixed h-screen top-0 left-0 z-50 bg-slate-950 lg:hidden transition-transform ease-linear duration-200`}
      >
        <div
          onClick={handleCloseMobileMenu}
          className="flex items-center justify-between uppercase font-semibold gap-x-32 md:gap-x-48 p-4 bg-red-500 text-white cursor-pointer"
        >
          Menu <span>{"<"}</span>
        </div>
        <Link to="">
          <div className="flex items-center gap-2 p-4 border-b border-opacity-20 border-slate-600/70 text-white text-sm cursor-pointer">
            <FaPhoneAlt className="text-red-600" />
            +84 123 456 789
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 p-4 border-b border-opacity-20 border-slate-600/70 text-white text-sm cursor-pointer">
            <MdEmail className="text-red-600" />
            shoegic@gmail.com
          </div>
        </Link>
        <Link to="/login">
          <div className="flex items-center gap-2 p-4 border-b border-opacity-20 border-slate-600/70 text-white text-sm cursor-pointer">
            <FaUser className="text-red-600" />
            account
          </div>
        </Link>
        {linkMenu.map((link, index) => (
          <Link to={link.link} key={index}>
            <div className="p-4 border-b border-opacity-20 border-slate-600/70 text-white text-sm cursor-pointer">
              {link.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
