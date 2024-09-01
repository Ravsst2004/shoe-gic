import { useContext, useState } from "react";
// import products from "../../data/products.json";
// import products from "../data/products.js";
import Layouts from "../components/layouts/Layouts";
import ProductCard from "../components/ui/Product/ProductCard";
import ProductModalCard from "../components/ui/Product/ProductModalCard";
import Modal from "../components/ui/Modal";
import { CartContext } from "../store/cartContext";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import Button from "../components/ui/Button";

// INI MANUAL IMPORT DARI JSON GAGAL UNTUK PERCOBAAN
import productImg1 from "../../public/image/products/product1.jpg";
import productImg2 from "../../public/image/products/product2.jpg";
import productImg3 from "../../public/image/products/product3.jpg";
import productImg4 from "../../public/image/products/product4.jpg";
import productImg5 from "../../public/image/products/product5.jpg";
import productImg6 from "../../public/image/products/product6.jpg";
import productImg7 from "../../public/image/products/product7.jpg";
import productImg8 from "../../public/image/products/product8.jpg";
import productImg9 from "../../public/image/products/product9.jpg";
import productImg10 from "../../public/image/products/product10.jpg";
import productImg11 from "../../public/image/products/product11.jpg";
import productImg12 from "../../public/image/products/product12.jpg";
import productImg13 from "../../public/image/products/product13.jpg";
import productImg14 from "../../public/image/products/product14.jpg";
import productImg15 from "../../public/image/products/product15.jpg";

export default function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [productsPageMode, setProductsPageMode] = useState("grid");
  const [showAccordion, setShowAccordion] = useState({
    categories: false,
    brands: false,
    sizes: false,
  });
  const { handleAddItemToCart } = useContext(CartContext);

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

  const productPageModeDesktop = (
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
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" className="cursor-pointer">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );

  const productPageModeMobile = (
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
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" className="cursor-pointer">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );

  const products = [
    {
      id: 1,
      title: "Casual",
      image: productImg1,
      price: 50,
      description:
        "A comfortable and stylish casual sneaker for everyday wear.",
    },
    {
      id: 2,
      title: "Schoolboy",
      image: productImg2,
      price: 40,
      description:
        "A classic and timeless sneaker perfect for school or casual outings.",
    },
    {
      id: 3,
      title: "Casual Running",
      image: productImg3,
      price: 60,
      description:
        "A versatile sneaker designed for both running and casual activities.",
    },
    {
      id: 4,
      title: "Forzed",
      image: productImg4,
      price: 55,
      description: "A stylish and modern sneaker with a bold design.",
    },
    {
      id: 5,
      title: "Casual zip",
      image: productImg5,
      price: 75,
      description: "A casual sneaker with a zipper detail for added style.",
    },
    {
      id: 6,
      title: "Party Van",
      image: productImg6,
      price: 65,
      description:
        "A fun and colorful sneaker perfect for parties or festivals.",
    },
    {
      id: 7,
      title: "Goliath",
      image: productImg7,
      price: 85,
      description: "A durable and high-performance sneaker for athletes.",
    },
    {
      id: 8,
      title: "Just gimme my money 🤫",
      image: productImg8,
      price: 45,
      description: "A budget-friendly sneaker with a stylish design.",
    },
    {
      id: 9,
      title: "Speedy",
      image: productImg9,
      price: 50,
      description:
        "A lightweight and comfortable sneaker perfect for running or walking.",
    },
    {
      id: 10,
      title: "Zippy Zip",
      image: productImg10,
      price: 70,
      description: "A stylish sneaker with a zipper detail for added flair.",
    },
    {
      id: 11,
      title: "Crazy School",
      image: productImg11,
      price: 55,
      description:
        "A fun and colorful sneaker perfect for school or casual outings.",
    },
    {
      id: 12,
      title: "Running Boost",
      image: productImg12,
      price: 55,
      description:
        "A high-performance sneaker designed for running and other athletic activities.",
    },
    {
      id: 13,
      title: "Good Vibes",
      image: productImg13,
      price: 55,
      description: "A positive and uplifting sneaker with a vibrant design.",
    },
    {
      id: 14,
      title: "Fly Fast",
      image: productImg14,
      price: 55,
      description:
        "A lightweight and breathable sneaker perfect for running or other high-intensity activities.",
    },
    {
      id: 15,
      title: "Redyred",
      image: productImg15,
      price: 55,
      description: "A bold and stylish sneaker in a vibrant red color.",
    },
    {
      id: 16,
      title: "Cutepancy",
      image: productImg16,
      price: 55,
      description: "A cute and girly sneaker perfect for casual outings.",
    },
  ];

  return (
    <Layouts>
      <section className="lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-10 lg:px-0">
        {productPageModeDesktop}

        <div className="flex flex-col md:flex-row gap-x-4">
          <div>
            <div>
              {productPageModeMobile}

              <div className="md:w-52 lg:w-60">
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
                    } font-light`}
                  >
                    <li className="cursor-pointer hover:text-red-600">
                      Mountain
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Hiking
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Running
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      School
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Casual
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
                    } font-light`}
                  >
                    <li className="cursor-pointer hover:text-red-600">Jr Dt</li>
                    <li className="cursor-pointer hover:text-red-600">
                      Jro Gede
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Dudung Pirate
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Ddng Bgst
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Mas Anus
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2 items-start justify-between px-4 border-2 rounded py-2 mt-4">
                  <div
                    onClick={() => handleShowAccordion("sizes")}
                    className="w-full font-medium cursor-pointer"
                  >
                    <h1>Size</h1>
                  </div>
                  <hr className="w-full" />
                  <ul
                    className={`${
                      showAccordion.sizes ? "" : "hidden md:block"
                    } font-light`}
                  >
                    <li className="cursor-pointer hover:text-red-600">
                      Small (S)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Medium (M)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Large (L)
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                      Extra Large (XL)
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
                  products={products}
                />
              ) : (
                <ListMode
                  handleOpenModal={handleOpenModal}
                  setShowModal={setShowModal}
                  showModal={showModal}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  handleAddItemToCart={handleAddItemToCart}
                  products={products}
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
  products,
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

function ListMode({
  handleOpenModal,
  setShowModal,
  showModal,
  selectedCard,
  setSelectedCard,
  handleAddItemToCart,
  products,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-2 rounded-lg md:flex items-center h-fit"
          >
            {/* <ProductCard shoe={product} handleOpenModal={handleOpenModal} /> */}
            <img
              src={product.image}
              alt=""
              className="w-full md:w-[42%] xl:w-[20%] h-full"
            />

            <div className="flex flex-col gap-y-1 p-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                {product.title}
              </h1>
              <p className="md:text-xl font-semibold">
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
              <p className="md:text-lg">{product.description}</p>
              <div className="flex gap-4">
                <Button
                  onClick={() => handleAddItemToCart(product.id)}
                  type="submit"
                  className="bg-slate-900 text-xs rounded w-fit border-slate-900 text-slate-100"
                >
                  ADD TO CART
                </Button>
                <Button onClick={() => handleOpenModal(product)}>
                  See Detail
                </Button>
              </div>
            </div>
          </div>
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
    </>
  );
}
