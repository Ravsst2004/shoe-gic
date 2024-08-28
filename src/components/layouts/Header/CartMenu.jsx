import React, { useContext } from "react";
import Button from "../../ui/Button";
import { CartContext } from "../../../store/cartContext";
import { TiDelete } from "react-icons/ti";

export default function CartMenu({ handleCloseCartMenu, showCartMenu }) {
  const { items, handleUpdateItemQuantity, handleRemoveItemFromCart } =
    useContext(CartContext);

  const subTotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseCartMenu();
    }
  };

  const ItemsBox = (
    <div className="flex flex-col items-center justify-center gap-y-4 w-30 md:w-full ">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-full shadow rounded gap-x-4 "
          >
            <div className="flex gap-x-4">
              <img src={item.image} alt="" className="w-[5rem] rounded-l" />
              <div className="flex flex-col">
                <p className="">{item.title} shoes</p>
                <p>${item.price}</p>
                <div className="flex gap-x-2 w-fit">
                  <button
                    onClick={() => handleUpdateItemQuantity(item.id, -1)}
                    className="border-2 border-slate-200 px-1"
                  >
                    -
                  </button>
                  <p className="border-y-2 border-slate-200">{item.quantity}</p>
                  <button
                    onClick={() => handleUpdateItemQuantity(item.id, +1)}
                    className="border-2 border-slate-200 px-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <TiDelete
                  className="text-2xl cursor-pointer"
                  onClick={() => handleRemoveItemFromCart(item.id)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}

      <div className="flex justify-between w-full">
        <p>Subtotal:</p>
        <p>${subTotal}</p>
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
