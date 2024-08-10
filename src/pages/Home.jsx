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
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Exceptional Designs",
      description:
        "Discover our unique and stylish designs that make a statement.",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Affordable Luxury",
      description: "Experience high-end quality without the high-end price.",
      image:
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
  ];

  const [onHover, setOnHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

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

      <section className="w-full md:gap-y-5 bg-slate-900 text-slate-200 md:px-52 my-14 py-6 md:my-32">
        <div className="flex flex-col">
          <p className="text-center px-6 md:text-xl mb-8">
            Explore what makes our shoes unique and discover what sets them
            apart. Here’s what you might enjoy.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                className="group mx-4"
                titleClassName="group-hover:text-purple-400 transition-colors duration-200 ease-in text-xl font-semibold"
              />
            ))}

            <Modal show={showModal} onClose={handleCloseModal}>
              <div className="flex flex-col gap-y-2">
                <img
                  className="object-cover h-96 w-full"
                  src={selectedCard.image}
                  alt={selectedCard.title}
                />
                <h1 className="text-xl font-bold">{selectedCard.title}</h1>
                <p>{selectedCard.description}</p>
              </div>
            </Modal>
          </div>
        </div>

        <hr className="my-16 mx-4" />

        <div className="w-full flex justify-center ">
          <div className="w-[65%]">{/* <Card /> */}</div>
          <div className="w-[35%]"></div>
        </div>
      </section>
    </Layouts>
  );
}
