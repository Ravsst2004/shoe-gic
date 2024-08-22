import React, { useRef, useState } from "react";
import {
  CiHeart,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";
import InputSearch from "../../ui/InputSearch";
import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import CartMenu from "./CartMenu";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // const menuRef = useRef(null);

  const handleShowSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  const handleShowMobileMenu = () => {
    showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
  };

  const handleShowCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const linkMenu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Reviews",
      link: "/reviews",
    },
  ];

  return (
    <>
      {/* Navbar Mobile*/}
      <nav className="relative md:px-10 lg:hidden">
        <div className="relative z-10 flex justify-between items-center p-4 ">
          <h1 className="text-3xl text-slate-950 font-bold">ShoeGic.</h1>
          <div className="flex justify-center items-center gap-x-3 text-2xl">
            <CiSearch onClick={handleShowSearch} className="cursor-pointer" />
            <CiHeart />
            <CiShoppingCart
              className="cursor-pointer"
              onClick={handleShowCart}
            />
            <IoMenuOutline
              className="cursor-pointer"
              onClick={handleShowMobileMenu}
            />
          </div>
        </div>

        {/* Input Search */}
        <div
          className={`${
            showSearch ? "translate-y-0" : "-translate-y-full"
          } absolute flex mx-auto bg-white top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out lg:hidden`}
        >
          <InputSearch
            handleCloseSearch={handleShowSearch}
            closeButton={true}
          />
        </div>

        <div>
          <MobileMenu
            linkMenu={linkMenu}
            showMobileMenu={showMobileMenu}
            handleCloseMobileMenu={handleShowMobileMenu}
          />
        </div>
      </nav>

      {/* Navbar Desktop */}
      <nav className="hidden lg:block">
        <div className="relative flex flex-col z-10 pt-4 px-14 xl:px-40">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-slate-950 font-bold">ShoeGic.</h1>
            <div className="flex items-center gap-x-2">
              <InputSearch />
              <CiHeart className="text-3xl" />
              <CiShoppingCart
                className="text-3xl cursor-pointer"
                onClick={handleShowCart}
              />
            </div>
          </div>

          <div>
            <DesktopMenu linkMenu={linkMenu} />
          </div>
        </div>
      </nav>

      {/* Cart Menu */}
      <div>
        <CartMenu
          handleCloseCartMenu={handleShowCart}
          showCartMenu={showCart}
        />
      </div>
    </>
  );
}
