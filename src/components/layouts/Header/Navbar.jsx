import { useContext, useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import InputSearch from "../../ui/InputSearch";
import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import CartMenu from "./CartMenu";
import { CartContext } from "../../../store/cartContext";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { items } = useContext(CartContext);

  // console.log(items);
  const totalItemInCart = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  // console.log(totalItemInCart);

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
        <div className="relative z-10 flex justify-between items-center p-4 border-b-2">
          <Link to="/" className="text-3xl text-slate-950 font-bold">
            ShoeGic.
          </Link>
          <div className="flex justify-center items-center gap-x-3 text-2xl">
            <CiSearch onClick={handleShowSearch} className="cursor-pointer" />
            <div onClick={handleShowCart} className="relative cursor-pointer">
              {totalItemInCart > 0 && (
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {totalItemInCart}
                  </p>
                </div>
              )}
              <CiShoppingCart />
            </div>
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
      <nav className="hidden lg:block border-b-2 border-slate-200/30">
        <div className="bg-slate-500 bg-opacity-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
            <h1 className="">Free shipping for orders over $100</h1>

            <div className="flex text-center gap-x-4">
              <Link to="">
                <div className="flex items-center gap-1 hover:text-red-600 text-sm cursor-pointer">
                  <FaPhoneAlt className="text-red-600" />
                  +84 123 456 789
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-1 hover:text-red-600 text-sm cursor-pointer">
                  <MdEmail className="text-red-600" />
                  shoegic@gmail.com
                </div>
              </Link>
              <Link to="/login">
                <div className="flex items-center gap-1 hover:text-red-600 text-sm cursor-pointer">
                  <FaUser className="text-red-600" />
                  account
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col z-10 pt-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-center lg:px-4 xl:px-0">
            <Link to="/" className="text-3xl text-slate-950 font-bold">
              ShoeGic.
            </Link>
            <div className="flex items-center gap-x-2">
              <InputSearch />
              <div onClick={handleShowCart} className="relative cursor-pointer">
                {totalItemInCart > 0 && (
                  <div className="t-0 absolute left-4">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      {totalItemInCart}
                    </p>
                  </div>
                )}
                <CiShoppingCart className="text-3xl" />
              </div>
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
