import React, { useContext, useState } from "react";
import Select from "./Select";
import Button from "./Button";

export default function Form({ handleAddItemToCart }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemToCart({ quantity: quantity });
  };

  const incrementDecrementButtonCard = (
    <div className="flex border-2 w-fit border-slate-200 px-1">
      <button onClick={decrementQuantity}>-</button>
      <input
        type="text"
        value={quantity}
        onChange={() => setQuantity(Number(e.target.value))}
        className="w-10 text-center"
      />
      <button onClick={incrementQuantity}>+</button>
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

        <div className="flex gap-x-6 text-sm ">
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
