import React, { useContext, useState } from "react";
import Select from "./Select";
import Button from "./Button";
import { CartContext } from "../../store/cartContext";

export default function Form({ productId }) {
  const { handleAddItemToCart, handleUpdateItemQuantity } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemToCart(productId);
    handleUpdateItemQuantity(productId, quantity - 1);
  };

  const incrementDecrementButtonCard = (
    <div className="flex border-2 w-fit border-slate-200 px-1">
      <button type="button" onClick={decrementQuantity}>
        -
      </button>
      <input
        type="text"
        inputMode="numeric"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-10 text-center"
      />
      <button type="button" onClick={incrementQuantity}>
        +
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-4">
        <Select
          label="Size: "
          className="w-full text-sm md:text-lg border-slate-200 border-2 text"
        >
          <option value="7">7</option>
          <option value="8">8</option>
        </Select>
        <Select
          label="Color: "
          className="w-full text-sm md:text-lg border-slate-200 border-2 text"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
        </Select>

        <div className="flex gap-x-6 text-sm">
          {incrementDecrementButtonCard}
          <Button
            type="submit"
            className="bg-slate-900  w-fit border-slate-900 text-slate-100"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </form>
  );
}
