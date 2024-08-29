import React, { useContext, useState } from "react";
import products from "../../data/products.json";
import Layouts from "../components/layouts/Layouts";
import ProductCard from "../components/ui/Product/ProductCard";
import ProductModalCard from "../components/ui/Product/ProductModalCard";
import Modal from "../components/ui/Modal";
import { CartContext } from "../store/cartContext";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";

export default function Shop() {
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleOpenModal = (items) => {
    setShowModal(true);
    setSelectedCard(items);
  };

  const paginationNumber = [1, 2, 3];

  return (
    <Layouts>
      <section className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex gap-2 flex-col sm:flex-row items-center justify-between px-4 border-2 rounded py-2 mt-4">
          <div className="flex gap-4">
            <BsFillGrid3X3GapFill className="text-red-600" />
            <FaList />
          </div>
          <div className=" flex justify-center items-center gap-x-2">
            <h1>Sort By:</h1>
            <select className="cursor-pointer">
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:gap-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                shoe={product}
                handleOpenModal={handleOpenModal}
              />
            ))}

            <Modal onClose={() => setShowModal(false)} show={showModal}>
              {selectedCard && (
                <ProductModalCard
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                />
              )}
            </Modal>
          </div>
        </div>

        <section className="my-8 flex justify-center md:justify-end">
          <ul className="inline-flex -space-x-px text-sm md:text-base lg:text-xl">
            {paginationNumber.map((number) => (
              <li key={number}>
                <a
                  href=""
                  className="flex items-center justify-center px-3 h-8 leading-tight text-slate-950 bg-white border border-slate-600 hover:bg-gray-100 "
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layouts>
  );
}
