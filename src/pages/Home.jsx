import { useEffect, useState } from "react";
import Layouts from "../components/layouts/Layouts";
import OnSales from "../components/ui/HomeSection/OnSales";
import Modal from "../components/ui/Modal";
import ProductModalCard from "../components/ui/Product/ProductModalCard";
import ProductCard from "../components/ui/Product/ProductCard";
import products from "../../data/products.json";
import UniqueLoved from "../components/ui/HomeSection/UniqueLoved";
import ClientFeedback from "../components/ui/HomeSection/ClientFeedback";

import productImg1 from "../../public/image/products/product1.jpg";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const bestSellersShoes = [
    "/public/image/products/product (14).jpg",
    "/public/image/products/product (12).jpg",
    "/public/image/products/product (9).jpg",
    "/public/image/products/product (15).jpg",
    productImg1,
    "/public/image/products/product (5).jpg",
  ];

  const featuredShoes = products.slice(0, 8);

  const handleOpenModal = (items) => {
    setShowModal(true);
    setSelectedCard(items);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <Layouts>
      <OnSales />

      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mt-20 px-4 sm:px-10 md:gap-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center md:px-2 font-urbanist">
            Discover{" "}
            <span className="text-red-600 underline italic">Magic</span> in
            Every Shoes
          </h1>
          <p className="relative z-10 text-sm text-center md:text-lg xl:text-xl xl:px-72">
            With our curated selection of high-quality shoes, we invite you to
            experience the extraordinary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
            {featuredShoes.map((shoe, index) => {
              const discountedPrice = shoe.price * (1 - 0.5);

              return (
                <ProductCard
                  key={index}
                  shoe={shoe}
                  discountedPrice={discountedPrice}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}

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
      </section>

      <UniqueLoved
        bestSellersShoes={bestSellersShoes}
        setActiveSlide={setActiveSlide}
      />

      <ClientFeedback />
    </Layouts>
  );
}
