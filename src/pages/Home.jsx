import { useEffect, useState } from "react";
import Layouts from "../components/layouts/Layouts";
import premiumQualitySvg from "../assets/svg/premium-quality.svg";
import exceptionalDesignsSvg from "../assets/svg/exceptional-designs.svg";
import affordableLuxurySvg from "../assets/svg/affordable-luxury.svg";
import ecoFriendlySvg from "../assets/svg/eco-friendly.svg";
import OnSales from "../components/ui/HomeSection/OnSales";
import Modal from "../components/ui/Modal";
import ProductModalCard from "../components/ui/Product/ProductModalCard";
import ProductCard from "../components/ui/Product/ProductCard";
import products from "../../data/products.json";
import UniqueLoved from "../components/ui/HomeSection/UniqueLoved";
import ClientFeedback from "../components/ui/HomeSection/ClientFeedback";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const cardContents = [
    {
      title: "Premium Quality",
      description:
        "Built with top-tier materials for exceptional durability and performance. Every detail is crafted with care to ensure long-lasting reliability.",
      image: premiumQualitySvg,
    },
    {
      title: "Exceptional Designs",
      description:
        "Explore unique designs that blend style and functionality, offering both comfort and a distinctive look for any occasion.",
      image: exceptionalDesignsSvg,
    },
    {
      title: "Affordable Luxury",
      description:
        "Enjoy high-end quality at a price you can afford. Luxury shouldn't come at a premium, and with us, it doesn't have to.",
      image: affordableLuxurySvg,
    },
    {
      title: "Eco-Friendly",
      description:
        "Choose sustainable products made with the planet in mind. Our eco-friendly options help you make responsible choices without compromise.",
      image: ecoFriendlySvg,
    },
  ];

  const bestSellersShoes = [
    "/public/image/products/product (14).jpg",
    "/public/image/products/product (12).jpg",
    "/public/image/products/product (9).jpg",
    "/public/image/products/product (15).jpg",
    "/public/image/products/product (2).jpg",
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

      {/* <section className="max-w-7xl mx-auto my-20 px-4 sm:px-10">
          <div
            className="rounded bg-opacity-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-semibold py-6 px-10 gap-y-4 text-4xl"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1579492450119-80542d516179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          >
            <div className="flex items-center lg:justify-center gap-x-2 ">
              <TbTruckDelivery />
              <p className="text-lg">Free Shipping</p>
            </div>
            <div className="flex items-center lg:justify-center gap-x-2">
              <RiSecurePaymentFill />
              <p className="text-lg">Secure Payment</p>
            </div>
            <div className="flex items-center lg:justify-center gap-x-2">
              <RiDiscountPercentLine />
              <p className="text-lg">Discount Up To 50%</p>
            </div>
            <div className="flex items-center lg:justify-center gap-x-2">
              <RiCustomerService2Line />
              <p className="text-lg">24/7 Support</p>
            </div>
          </div>
        </section> */}

      {/* <section className="flex flex-col md:flex-row my-24 justify-center md:justify-between items-center bg-gray-400/10 h-[30rem]">
          <div className="text-center md:text-start p-10 md:pl-44">
            <h3 className="text-red-600 text-xl md:text-3xl">Saving 50%</h3>
            <h1 className="text-3xl font-bold md:text-5xl">All Online Store</h1>
            <p className="text-sm md:text-base mb-6">
              OFFER AVAILABLE ALL SHOES
            </p>
            <a
              href=""
              className="lg:text-2xl lg:w-64 text-slate-100 py-2 px-6 bg-red-600 transition-colors ease-linear duration-200"
            >
              Find your online store
            </a>
          </div>

          <div className="relative flex justify-center">
            <img
              src={products[0].image}
              alt=""
              className="md:hidden w-full sm:w-96 md:w-full object-cover "
            />
            <img
              src={products[0].image}
              alt=""
              className="hidden md:block w-full sm:w-96 md:w-[30rem] object-cover "
              style={{
                clipPath: "polygon(30% 0, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </section> */}

      {/* <section
          className="object-cover bg-cover bg-center bg-no-repeat md:flex-row my-24 h-[30rem]"
          style={{
            backgroundImage: `url('/public/image/products/product (10).jpg')`,
          }}
        >
          {" "}
          <div className="flex flex-col justify-center items-center text-center md:text-start p-10 md:pl-44">
            <h3 className="text-red-600 text-xl font-medium md:text-3xl">
              Saving 50%
            </h3>
            <h1 className="text-white text-3xl font-bold md:text-5xl">
              All Online Store
            </h1>
            <p className="text-white text-sm md:text-base mb-6">
              OFFER AVAILABLE ALL SHOES
            </p>
            <a
              href=""
              className="lg:text-2xl lg:w-64 text-slate-100 py-2 px-6 bg-red-600 transition-colors ease-linear duration-200"
            >
              Find your online store
            </a>

 
          </div>
        </section> */}

      <UniqueLoved
        bestSellersShoes={bestSellersShoes}
        setActiveSlide={setActiveSlide}
      />

      <ClientFeedback />
    </Layouts>
  );
}
