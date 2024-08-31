import React, { useContext, useState } from "react";
import products from "../../data/products.json";
import Layouts from "../components/layouts/Layouts";
import ProductCard from "../components/ui/Product/ProductCard";
import ProductModalCard from "../components/ui/Product/ProductModalCard";
import Modal from "../components/ui/Modal";
import { CartContext } from "../store/cartContext";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import Form from "../components/ui/Form";

export default function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [productsPageMode, setProductsPageMode] = useState("grid");
  const [showAccordion, setShowAccordion] = useState({
    categories: false,
    brands: false,
  });

  const handleShowAccordion = (accordionName) => {
    setShowAccordion({
      ...showAccordion,
      [accordionName]: !showAccordion[accordionName],
    });
  };

  const handleOpenModal = (items) => {
    setShowModal(true);
    setSelectedCard(items);
  };

  const paginationNumber = [1, 2, 3];

  return (
    <Layouts>
      <section className="lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-10 lg:px-0">
        {/* products page mode desktop */}
        <div className="hidden md:flex gap-2 flex-col sm:flex-row items-center justify-between px-4 border-2 rounded py-2 mt-4">
          <div className="flex gap-4">
            <BsFillGrid3X3GapFill
              onClick={() => setProductsPageMode("grid")}
              className={`${
                productsPageMode === "grid" ? "text-red-600" : ""
              } cursor-pointer`}
            />
            <FaList
              onClick={() => setProductsPageMode("list")}
              className={`${
                productsPageMode === "list" ? "text-red-600" : ""
              } cursor-pointer`}
            />
          </div>
          <div className=" flex justify-center items-center gap-x-2">
            <h1>Sort By:</h1>
            <select className="cursor-pointer">
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-4">
          <div>
            <div>
              {/* products page mode mobile */}
              <div className="flex md:hidden gap-2 flex-col sm:flex-row items-center justify-between px-4 border-2 rounded py-2 mt-4">
                <div className="flex gap-4">
                  <BsFillGrid3X3GapFill
                    onClick={() => setProductsPageMode("grid")}
                    className={`${
                      productsPageMode === "grid" ? "text-red-600" : ""
                    } cursor-pointer`}
                  />
                  <FaList
                    onClick={() => setProductsPageMode("list")}
                    className={`${
                      productsPageMode === "list" ? "text-red-600" : ""
                    } cursor-pointer`}
                  />
                </div>
                <div className=" flex justify-center items-center gap-x-2">
                  <h1>Sort By:</h1>
                  <select className="cursor-pointer">
                    <option value="popularity">Popularity</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>

              <div className="md:w-52 lg:w-72">
                <div className="flex flex-col gap-2 items-start justify-between px-4 border-2 rounded py-2 mt-4">
                  <div
                    onClick={() => handleShowAccordion("categories")}
                    className="w-full font-medium cursor-pointer"
                  >
                    <h1>Top Categories</h1>
                  </div>
                  <hr className="w-full" />
                  <ul
                    className={`${
                      showAccordion.categories ? "" : "hidden md:block"
                    }`}
                  >
                    <li className="cursor-pointer hover:text-red-600">
                      Mountain (4)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Hiking (5)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Running (3)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      School (6)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Casual (7)
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2 items-start justify-between px-4 border-2 rounded py-2 mt-4">
                  <div
                    onClick={() => handleShowAccordion("brands")}
                    className="w-full font-medium cursor-pointer"
                  >
                    <h1>Brand</h1>
                  </div>
                  <hr className="w-full" />
                  <ul
                    className={`${
                      showAccordion.brands ? "" : "hidden md:block"
                    }`}
                  >
                    <li className="cursor-pointer hover:text-red-600">
                      Jr Dt (4)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Jro Gede (5)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Dudung Pirate (3)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Ddng Bgst (6)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Mas Anus (7)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4">
              {productsPageMode === "grid" ? (
                <GridMode
                  handleOpenModal={handleOpenModal}
                  setShowModal={setShowModal}
                  showModal={showModal}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                />
              ) : (
                <ListMode
                  handleOpenModal={handleOpenModal}
                  showModal={showModal}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                />
              )}
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-center md:justify-end">
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
        </div>
      </section>
    </Layouts>
  );
}

function GridMode({
  handleOpenModal,
  setShowModal,
  showModal,
  selectedCard,
  setSelectedCard,
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:gap-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </>
  );
}

function ListMode({ handleOpenModal, showModal, selectedCard }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-4">
        {products.map((product, index) => (
          <div key={index} className="border-2">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-2 lg:p-6">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-md object-cover sm:max-w-52 xl:max-w-96 h-full"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl md:text-2xl font-semibold">
                  {product.title} shoes
                </h1>
                <p className="md:text-lg font-semibold">
                  {" "}
                  <span
                    className={`${
                      product.discountedPrice ? "line-through" : ""
                    } pr-2`}
                  >
                    ${product.price}
                  </span>
                  {product.discountedPrice && (
                    <span className="text-red-600">
                      ${product.discountedPrice}
                    </span>
                  )}
                </p>
                <p className="text-sm md:text-base">{product.description}</p>

                <Form productId={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
