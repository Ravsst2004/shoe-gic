import React, { useState } from "react";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";
import Layouts from "../components/layouts/Layouts";
import Slider from "react-slick";

export default function Home() {
  const cardContents = [
    {
      title: "Premium Quality",
      description:
        "Crafted with top-notch materials for unmatched durability and performance.",
      image: "../../public/image/home-1.png",
    },
    {
      title: "Exceptional Designs",
      description:
        "Discover our unique and stylish designs that make a statement.",
      image: "../../public/image/home-2.png",
    },
    {
      title: "Affordable Luxury",
      description: "Experience high-end quality without the high-end price.",
      image: "../../public/image/home-3.png",
    },
  ];

  const [onHover, setOnHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(cardContents[0]);
  const [activeSlide, setActiveSlide] = useState(0);

  const bestSellersShoes = [
    "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608229751021-ed4bd8677753?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => {
      return (
        <div
          className={`${
            i === activeSlide ? "bg-slate-800" : "bg-slate-700"
          } border-2 border-slate-700 rounded-full w-4 h-4`}
        ></div>
      );
    },
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  const handleOpenModal = (title, description, image) => {
    setShowModal(true);
    setSelectedCard({
      title,
      description,
      image,
    });
  };

  return (
    <Layouts>
      {/* FIRST SECTION */}
      <section className="w-full">
        <div className="flex flex-col items-center justify-center mt-56 gap-y-6 md:gap-y-8">
          <h1 className="text-5xl font-extrabold tracking-tighter text-center md:text-6xl md:px-2 font-urbanist">
            Discover the{" "}
            <span className="text-purple-600 underline">Magic</span> in Every
            Shoes
          </h1>
          <div className="relative">
            <p className="relative z-10 px-10 text-lg text-center md:text-xl xl:px-72">
              With our curated selection of high-quality shoes, we invite you to
              experience the extraordinary. At our store, each shoe is
              handpicked to bring a touch of magic into your life.
            </p>
          </div>

          <Link
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
          </Link>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="w-full md:gap-y-5 bg-slate-900 text-slate-200 md:px-14 lg:px-24 xl:px-32 my-28 md:my-32 py-10">
        <div>
          <div className="flex flex-col gap-y-12">
            <p className="px-6 text-lg text-center md:text-xl">
              Explore what makes our shoes unique and discover what sets them
              apart. Here’s what you might enjoy.
            </p>

            <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:gap-x-10 2xl:px-32 px-4">
              <div className="lg:w-[50%] grid grid-cols-1 gap-y-4 ">
                {cardContents.map((content, index) => (
                  <Card
                    key={index}
                    title={content.title}
                    description={content.description}
                    onClick={() =>
                      handleOpenModal(
                        content.title,
                        content.description,
                        content.image
                      )
                    }
                    className={`group lg:w-full xl:w-full ${
                      selectedCard.title === content.title
                        ? "bg-slate-700 bg-opacity-60"
                        : "hover:bg-slate-700 bg-opacity-60 transition-colors duration-200 ease-in"
                    }`}
                    titleClassName={`transition-colors duration-200 ease-in text-xl font-semibold ${
                      selectedCard.title === content.title
                        ? "text-purple-500"
                        : ""
                    }`}
                  />
                ))}
              </div>

              <div className="lg:w-[50%] border-y-2 lg:border-y-0 mt-10 lg:mt-0 flex justify-center max-w-lg items-center">
                <img
                  src={selectedCard.image}
                  alt=""
                  className="transition-all ease-in-out duration-200 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* <hr className="mx-4 my-16" /> */}

          <div className="flex justify-center w-full ">
            <div className="w-[65%]">{/* <Card /> */}</div>
            <div className="w-[35%]"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-6 items-center py-20 overflow-hidden">
          <p className="px-6 text-lg text-center md:text-xl">
            Discover our top-selling items and see what makes them customer
            favorites
          </p>

          <Slider {...settings} className="w-full lg:hidden cursor-pointer">
            {bestSellersShoes.map((shoe, index) => (
              <div key={index} className="w-full">
                <img
                  src={shoe}
                  className="w-full object-cover h-[30rem] rounded-xl"
                />
              </div>
            ))}
          </Slider>

          <div className="hidden lg:grid w-full grid-cols-3 gap-x-2">
            {bestSellersShoes.map((shoe, index) => (
              <div key={index} className="w-full">
                <img
                  src={shoe}
                  className="w-[30rem] object-cover h-[30rem] rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layouts>
  );
}
