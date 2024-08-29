import React, { useContext } from "react";
import Layouts from "../components/layouts/Layouts";
import CartContextProvider, { CartContext } from "../store/cartContext";
import countries from "../../data/countries.json";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function ShopCart() {
  const { items, handleUpdateItemQuantity, handleRemoveItemFromCart } =
    useContext(CartContext);

  const subTotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Layouts>
      <div className="max-w-7xl mx-auto overflow-y-auto lg:mt-10">
        {items && items.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100 text-left text-xs font-semibold">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <h1>{item.title}</h1>
                  </td>
                  <td className="px-4 py-2 w-32 border-b border-gray-200">
                    <img src={item.image} alt="" className="w-full" />
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    ${item.price}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <div className="flex gap-x-2 w-fit">
                      <button
                        onClick={() => handleUpdateItemQuantity(item.id, -1)}
                        className="border border-gray-200 px-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                      >
                        -
                      </button>
                      <p className="border border-gray-200 px-2 py-1 rounded-md text-center">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() => handleUpdateItemQuantity(item.id, +1)}
                        className="border border-gray-200 px-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">Cart is empty</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-y-1 my-10 max-w-7xl mx-auto">
        <h1 className="text-xl text-center">Total: ${subTotal}</h1>

        <div className="flex flex-col md:flex-row">
          <Link
            to="/shop"
            className="border-2 p-2 text-center uppercase bg-black text-white"
          >
            Continue Shopping
          </Link>
          {items && items.length > 0 && (
            <Link
              to="/checkout"
              className="border-2 p-2 text-center uppercase bg-black text-white"
            >
              Proceed to checkout
            </Link>
          )}
        </div>
      </div>
      {items.length === 0 && (
        <div className="hidden lg:block md:mt-[15.7rem]"></div>
      )}
    </Layouts>
  );
}
