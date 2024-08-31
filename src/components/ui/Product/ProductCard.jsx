import { useContext } from "react";
import {
  FaArrowsUpDownLeftRight,
  FaCartShopping,
} from "react-icons/fa6";
import { CartContext } from "../../../store/cartContext";

export default function ProductCard({
  shoe,
  handleOpenModal,
  discountedPrice,
  discount = false,
}) {
  const { handleAddItemToCart } = useContext(CartContext);
  // console.log(shoe);

  return (
    <div className="w-full relative">
      {discount && (
        <div className="absolute top-2 left-2 cursor-default p-2 rounded-lg text-sm h-fit bg-red-600 text-slate-100">
          -50%
        </div>
      )}

      <div className="absolute top-2 right-2 flex flex-col gap-y-4 text-white text-lg ">
        <div
          onClick={() => handleAddItemToCart(shoe.id)}
          className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in"
        >
          <FaCartShopping />
        </div>
        <div
          onClick={() =>
            handleOpenModal({
              id: shoe.id,
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
        className="w-full lg:w-[22rem] h-full object-cover rounded-md"
        alt=""
      />
    </div>
  );
}
