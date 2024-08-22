import React, { useContext } from "react";
import Button from "../../ui/Button";
import { CartContext } from "../../../store/cartContext";
import { TiDelete } from "react-icons/ti";

export default function CartMenu({ handleCloseCartMenu, showCartMenu }) {
  const { items } = useContext(CartContext);
  console.log(items);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseCartMenu();
    }
  };

  const ItemsBox = (
    <div className="flex flex-col items-center justify-center gap-y-4">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full shadow rounded"
          >
            <img src={item.image} alt="" className="w-[5rem]" />
            <div className="flex flex-col">
              <p>{item.title} shoes</p>
              <p>
                {item.quantity} X ${item.price}
              </p>
            </div>
            <div className="text-2xl cursor-pointer">
              <TiDelete />
            </div>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}

      <div className="flex justify-between w-full">
        <p>Subtotal:</p>
        <p>$0.00</p>
      </div>
    </div>
  );

  return (
    <>
      {showCartMenu && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
        ></div>
      )}
      <div
        className={`${
          showCartMenu ? "translate-x-0" : "translate-x-full"
        } fixed h-screen top-0 right-0 z-50 bg-slate-100 transition-transform ease-linear duration-200`}
      >
        <div
          onClick={handleCloseCartMenu}
          className="flex items-center justify-between uppercase font-semibold gap-x-16 md:gap-x-36 xl:gap-x-64 p-4 bg-slate-200 text-slate-950 cursor-pointer"
        >
          Shopping Cart <span>{">"}</span>
        </div>

        <div className="mt-6 mx-6">
          {ItemsBox}
          <div className="flex flex-col mt-4 gap-y-2 text-white">
            <Button className="bg-slate-950 hover:bg-red-600 transition-colors ease-linear duration-200 font-medium">
              VIEW CART
            </Button>
            <Button className="bg-slate-950 hover:bg-red-600 transition-colors ease-linear duration-200 font-medium">
              CHECKOUT
            </Button>
          </div>
        </div>

        <div></div>
        {/* {linkMenu.map((link, index) => (
          <Link to={link.link} key={index}>
            <div className="p-4 border-b-[1px] border-opacity-55 text-white text-sm cursor-pointer">
              {link.title}
            </div>
          </Link>
        ))} */}
      </div>
    </>
  );
}
