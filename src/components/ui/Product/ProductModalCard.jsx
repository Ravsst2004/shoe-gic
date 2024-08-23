import React, { useContext } from "react";
import Form from "../Form";
import { CartContext } from "../../../store/cartContext";

export default function ProductModalCard({ selectedCard, setSelectedCard }) {
  console.log(selectedCard);
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg p-2 lg:p-6">
      <div className="md:w-[40rem]">
        <img
          src={selectedCard.image}
          alt={setSelectedCard.title}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl md:text-2xl font-semibold">
          {selectedCard.title} shoes
        </h1>
        <p className="md:text-lg font-semibold">
          {" "}
          <span className="line-through pr-2">${selectedCard.price}</span>
          <span className="text-red-600">${selectedCard.discountedPrice}</span>
        </p>
        <p className="text-sm md:text-base">{selectedCard.description}</p>

        <Form productId={selectedCard.id} />
      </div>
    </div>
  );
}
