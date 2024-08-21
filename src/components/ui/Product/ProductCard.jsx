import React from "react";
import {
  FaArrowsUpDownLeftRight,
  FaCartShopping,
  FaHeart,
} from "react-icons/fa6";

export default function ProductCard({
  shoe,
  handleOpenModal,
  discountedPrice,
}) {
  return (
    <div className="w-full relative">
      <div className="absolute top-2 left-2 cursor-default p-2 rounded-lg text-sm h-fit bg-red-600 text-slate-100">
        -50%
      </div>

      <div className="absolute top-2 right-2 flex flex-col gap-y-4 text-white text-lg">
        <div className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in">
          <FaHeart />
        </div>
        <div className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in">
          <FaCartShopping />
        </div>
        <div
          onClick={() =>
            handleOpenModal({
              title: shoe.title,
              description: shoe.description,
              image: shoe.image,
              price: shoe.price,
              discountedPrice: discountedPrice,
            })
          }
          className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in"
        >
          <FaArrowsUpDownLeftRight />
        </div>
      </div>

      {/* Image */}
      <img
        src={shoe.image}
        className="w-full h-full object-cover rounded-md"
        alt=""
      />
    </div>
  );
}
