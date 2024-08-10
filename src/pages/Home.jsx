import React, { useRef, useState } from "react";
import { BiDownArrowAlt, BiLineChartDown } from "react-icons/bi";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";
import Layouts from "../components/layouts/Layouts";
import Modal from "../components/ui/Modal";

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
  const [selectedCard, setSelectedCard] = useState(cardContents[0] || {});

  const handleOpenModal = (title, description, image) => {
    setShowModal(true);
    setSelectedCard({
      title,
      description,
      image,
    });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layouts>
      <section className="w-full">
        <div className="flex justify-center items-center flex-col mt-28 gap-y-6 md:gap-y-8">
          <h1 className="text-5xl md:text-6xl md:px-2 text-center font-extrabold font-urbanist tracking-tighter">
            Discover the{" "}
            <span className="text-purple-600 underline">Magic</span> in Every
            Shoes
          </h1>
          <div className="relative">
            <p className="relative z-10 text-center text-lg md:text-xl px-10 xl:px-72">
              With our curated selection of high-quality shoes, we invite you to
              experience the extraordinary. At our store, each shoe is
              handpicked to bring a touch of magic into your life.
            </p>
          </div>

          <Link
            to={"/products"}
            className="group text-xl cursor-pointer p-4 text-gray-200 bg-slate-900 font-semibold rounded-xl group  "
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
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="w-full md:gap-y-5 bg-slate-900 text-slate-200 md:px-14 lg:px-24 xl:px-56 my-14 py-6 md:my-32">
        <div className="flex flex-col">
          <p className="text-center px-6 md:text-xl mb-8">
            Explore what makes our shoes unique and discover what sets them
            apart. Here’s what you might enjoy.
          </p>

          <div className="w-full flex flex-col lg:flex-row lg:gap-x-10 justify-center items-center">
            <div className="lg:w-[50%] grid grid-cols-1 gap-y-4">
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
                  className={`group mx-4 lg:w-full xl:w-[38rem] ${
                    selectedCard.title === content.title
                      ? "bg-slate-700 bg-opacity-60"
                      : "hover:bg-slate-700 bg-opacity-60 transition-colors duration-200 ease-in"
                  }`}
                  titleClassName={` transition-colors duration-200 ease-in text-xl font-semibold ${
                    selectedCard.title === content.title
                      ? "text-purple-500"
                      : ""
                  }`}
                />
              ))}
            </div>

            <div className="lg:w-[50%] border-y-2 mt-10 lg:mt-0 flex justify-center items-center mx-4">
              <img
                src={selectedCard.image}
                alt=""
                className="transition-all ease-in-out duration-200 w-full md:w-[30rem] lg:w-[22rem] xl:w-[30rem] object-cover"
              />
            </div>
          </div>
        </div>

        {/* <hr className="my-16 mx-4" /> */}

        <div className="w-full flex justify-center ">
          <div className="w-[65%]">{/* <Card /> */}</div>
          <div className="w-[35%]"></div>
        </div>
      </section>
    </Layouts>
  );
}
