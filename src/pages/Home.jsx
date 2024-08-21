import { useEffect, useState } from "react";
import Layouts from "../components/layouts/Layouts";
import premiumQualitySvg from "../assets/svg/premium-quality.svg";
import exceptionalDesignsSvg from "../assets/svg/exceptional-designs.svg";
import affordableLuxurySvg from "../assets/svg/affordable-luxury.svg";
import ecoFriendlySvg from "../assets/svg/eco-friendly.svg";
import OnSales from "../components/ui/HomeSection/OnSales";
import Modal from "../components/ui/Modal";
import {
  FaArrowsUpDownLeftRight,
  FaCartShopping,
  FaHeart,
} from "react-icons/fa6";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
export default function Home() {
  const [onHover, setOnHover] = useState(false);
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
    "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608229751021-ed4bd8677753?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1619521440807-ba72afd67b12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  ];

  const featuredShoes = [
    {
      title: "Casual",
      image: "../../public/image/featuredItems/featured (1).jpg",
      price: 50,
      description:
        "Perfect for everyday wear, these casual shoes blend style and comfort.",
    },
    {
      title: "Party van",
      image: "../../public/image/featuredItems/featured (2).jpg",
      price: 40,
      description:
        "Stand out at any event with these bold and vibrant party shoes.",
    },
    {
      title: "Goliath",
      image: "../../public/image/featuredItems/featured (3).jpg",
      price: 60,
      description:
        "Unleash your strength with Goliath – powerful shoes built for endurance.",
    },
    {
      title: "Training",
      image: "../../public/image/featuredItems/featured (4).jpg",
      price: 55,
      description:
        "Designed for athletes, these training shoes provide support during workouts.",
    },
    {
      title: "Schoolboy",
      image: "../../public/image/featuredItems/featured (5).jpg",
      price: 75,
      description: "Classic and stylish, perfect for school or casual outings.",
    },
    {
      title: "Casual zip",
      image: "../../public/image/featuredItems/featured (6).jpg",
      price: 65,
      description:
        "Easy to slip on and off, these casual shoes offer convenience with style.",
    },
    {
      title: "Mamen",
      image: "../../public/image/featuredItems/featured (7).jpg",
      price: 85,
      description:
        "Luxury meets comfort with Mamen, perfect for those who demand the best.",
    },
    {
      title: "Just gimme my money 🤫",
      image: "../../public/image/featuredItems/featured (8).jpg",
      price: 45,
      description:
        "Make a statement with these unique shoes that are all about confidence and flair.",
    },
  ];

  const handleOpenModal = (items) => {
    setShowModal(true);
    setSelectedCard(items);
  };

  const incrementDecrementButtonCard = (
    <div className="flex border-2 w-fit border-slate-200 px-1">
      <button>-</button>
      <input type="text" defaultValue={1} className="w-10 text-center" />
      <button>+</button>
    </div>
  );

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
      {" "}
      <OnSales />
      <section className="w-full">
        <div className="flex flex-col items-center justify-center mt-16 px-4 sm:px-10 md:gap-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center md:px-2 font-urbanist">
            Discover{" "}
            <span className="text-red-600 underline italic">Magic</span> in
            Every Shoes
          </h1>
          <div className="relative">
            <p className="relative z-10 text-sm text-center md:text-lg xl:text-xl xl:px-72">
              With our curated selection of high-quality shoes, we invite you to
              experience the extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-5 lg:px-10">
            {featuredShoes.map((shoe, index) => {
              const discountedPrice = shoe.price * (1 - 0.5);

              return (
                <div key={index} className="w-full relative">
                  <div className="absolute top-2 left-2 cursor-default p-2 rounded-lg text-sm h-fit bg-red-600 text-slate-100">
                    -50%
                  </div>

                  <div className="absolute top-2 right-2 flex flex-col gap-y-4 text-white text-lg">
                    <div className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in">
                      <FaHeart />
                    </div>
                    <div className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in">
                      <FaCartShopping />
                    </div>
                    <div
                      onClick={() =>
                        handleOpenModal({
                          title: shoe.title,
                          description: shoe.description,
                          image: shoe.image,
                          price: shoe.price,
                          discountedPrice: discountedPrice,
                        })
                      }
                      className="cursor-pointer bg-slate-100 bg-opacity-15 border-2 rounded p-2 hover:bg-red-600 transition-colors ease-in"
                    >
                      <FaArrowsUpDownLeftRight />
                    </div>
                  </div>

                  {/* Image */}
                  <img
                    src={shoe.image}
                    className="w-full h-full object-cover rounded-md"
                    alt=""
                  />
                </div>
              );
            })}

            <Modal onClose={() => setShowModal(false)} show={showModal}>
              {selectedCard && (
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
                    <p className="md:text-lg">
                      {" "}
                      <span className="line-through pr-2">
                        ${selectedCard.price}
                      </span>
                      <span className="text-red-600">
                        ${selectedCard.discountedPrice}
                      </span>
                    </p>
                    <p className="text-sm md:text-base">
                      {selectedCard.description}
                    </p>

                    <form action="">
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
                          <Button className="bg-slate-900  w-fit border-slate-900 text-slate-100">
                            ADD TO CART
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Modal>
          </div>

          {/* <Link
            to={"/products"}
            className="p-4 text-xl font-semibold text-gray-200 cursor-pointer group bg-slate-900 rounded-xl "
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            Find Your{" "}
            <span
              className={`${
                onHover ? "text-purple-500" : ""
              } transition-all ease-in-out duration-200`}
            >
              {onHover ? "Magic" : "Style"}
            </span>{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-in-out translate-x-0 group-hover:translate-x-1"
            >
              →
            </span>
          </Link> */}
        </div>
      </section>
      {/* <UniqueLoved
        showModal={showModal}
        setShowModal={setShowModal}
        cardContents={cardContents}
        bestSellersShoes={bestSellersShoes}
        selectedCard={selectedCard}
        handleOpenModal={handleOpenModal}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      /> */}
    </Layouts>
  );
}
