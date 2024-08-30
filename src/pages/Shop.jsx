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
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [productsPageMode, setProductsPageMode] = useState("grid");

  const handleChangeProductsPageModeGrid = () => {
    setProductsPageMode("grid");
  };

  const handleChangeProductsPageModeList = () => {
    setProductsPageMode("list");
  };

  const handleOpenModal = (items) => {
    setShowModal(true);
    setSelectedCard(items);
  };

  const paginationNumber = [1, 2, 3];

  return (
    <Layouts>
      <section className="lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-10 lg:px-0">
        <div className="flex gap-2 flex-col sm:flex-row items-center justify-between px-4 border-2 rounded py-2 mt-4">
          <div className="flex gap-4">
            <BsFillGrid3X3GapFill
              onClick={handleChangeProductsPageModeGrid}
              className={`${
                productsPageMode === "grid" ? "text-red-600" : ""
              } cursor-pointer`}
            />
            <FaList
              onClick={handleChangeProductsPageModeList}
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
    </>
  );
}

function ListMode({ handleOpenModal, showModal, selectedCard }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-4 lg:max-w-4xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="border-2">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-2 lg:p-6">
              <div className="">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-md object-cover sm:max-w-96 h-full"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                  {product.title} shoes
                </h1>
                <p className="md:text-lg lg:text-2xl font-semibold">
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
                <p className="text-sm md:text-base lg:text-xl">
                  {product.description}
                </p>

                <Form productId={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
// <div key={index} className="border-2 max-h-96">
//   <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg p-2 lg:p-6">
//     <div className="md:w-72">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="rounded-md object-cover"
//       />
//     </div>
//     <div className="flex flex-col gap-y-2">
//       <h1 className="text-xl md:text-2xl font-semibold">
//         {product.title} shoes
//       </h1>
//       <p className="md:text-lg font-semibold">
//         {" "}
//         <span
//           className={`${product.discountedPrice ? "line-through" : ""} pr-2`}
//         >
//           ${product.price}
//         </span>
//         {product.discountedPrice && (
//           <span className="text-red-600">${product.discountedPrice}</span>
//         )}
//       </p>
//       <p className="text-sm md:text-base">{product.description}</p>

//       <Form productId={product.id} />
//     </div>
//   </div>
// </div>;
