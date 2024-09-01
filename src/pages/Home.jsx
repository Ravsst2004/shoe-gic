import { useEffect, useState } from "react";
import Layouts from "../components/layouts/Layouts";
import OnSales from "../components/ui/HomeSection/OnSales";
import Modal from "../components/ui/Modal";
import ProductModalCard from "../components/ui/Product/ProductModalCard";
import ProductCard from "../components/ui/Product/ProductCard";
// import products from "../../data/products.json";
import products from "../data/products.js";
import UniqueLoved from "../components/ui/HomeSection/UniqueLoved";
import ClientFeedback from "../components/ui/HomeSection/ClientFeedback";

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

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const bestSellersShoes = [
    productImg14,
    productImg12,
    productImg9,
    productImg15,
    productImg1,
    productImg5,
  ];

  const featuredShoes = [
    {
      id: 1,
      title: "Casual",
      image: "/public/image/products/product1.jpg",
      price: 50,
      description:
        "A comfortable and stylish casual sneaker for everyday wear.",
    },
    {
      id: 2,
      title: "Schoolboy",
      image: "/public/image/products/product2.jpg",
      price: 40,
      description:
        "A classic and timeless sneaker perfect for school or casual outings.",
    },
    {
      id: 3,
      title: "Casual Running",
      image: "/public/image/products/product3.jpg",
      price: 60,
      description:
        "A versatile sneaker designed for both running and casual activities.",
    },
    {
      id: 4,
      title: "Forzed",
      image: "/public/image/products/product4.jpg",
      price: 55,
      description: "A stylish and modern sneaker with a bold design.",
    },
    {
      id: 5,
      title: "Casual zip",
      image: "/public/image/products/product5.jpg",
      price: 75,
      description: "A casual sneaker with a zipper detail for added style.",
    },
    {
      id: 6,
      title: "Party Van",
      image: "/public/image/products/product6.jpg",
      price: 65,
      description:
        "A fun and colorful sneaker perfect for parties or festivals.",
    },
    {
      id: 7,
      title: "Goliath",
      image: "/public/image/products/product7.jpg",
      price: 85,
      description: "A durable and high-performance sneaker for athletes.",
    },
    {
      id: 8,
      title: "Just gimme my money 🤫",
      image: "/public/image/products/product8.jpg",
      price: 45,
      description: "A budget-friendly sneaker with a stylish design.",
    },
  ];

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
            Discover
            <span className="text-red-600 underline italic">Magic</span> in
            Every Shoes
          </h1>
          <p className="relative z-10 text-sm text-center md:text-lg xl:text-xl xl:px-72">
            With our curated selection of high-quality shoes, we invite you to
            experience the extraordinary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
            {featuredShoes.map((shoe, index) => {
              return (
                <ProductCard
                  key={index}
                  shoe={shoe}
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
