import React, { useRef } from "react";
import { BiDownArrowAlt, BiLineChartDown } from "react-icons/bi";
import Card from "../components/ui/Card";

export default function Home() {
  const cardContents = [
    {
      title: "High Quality",
      description:
        "Made with premium materials for durability and performance.",
    },
    {
      title: "Affordable Prices",
      description: "Great value without compromising on quality.",
    },
    {
      title: "Unique Designs",
      description: "Stand out with our exclusive and stylish options.",
    },
    {
      title: "Eco-Friendly",
      description: "Designed with sustainability in mind.",
    },
  ];

  return (
    <>
      <section className="w-full mt-16 md:mt-0">
        <div className="flex justify-center items-center flex-col mt-28 gap-y-6 md:gap-y-8">
          <h1 className="text-5xl md:text-6xl text-center font-extrabold font-urbanist tracking-tighter">
            Discover the{" "}
            <span className="text-purple-600 underline">Magic</span> in Every
            Product
          </h1>
          <div className="relative">
            <p className="relative z-10 text-center text-lg md:text-xl px-10 xl:px-48">
              With our curated selection of high-quality items, we invite you to
              experience the extraordinary. At our store, each product is
              handpicked to bring a touch of magic into your life, making every
              purchase a delightful discovery.
            </p>
          </div>

          <h1 className="text-xl cursor-pointer p-4 bg-slate-900 font-semibold rounded-xl group text-gray-200 hover:text-purple-600 transition ease-in-out duration-200">
            Dress your style{" "}
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </h1>
        </div>
      </section>

      <section className="w-full md:gap-y-5 bg-slate-900 text-slate-200 md:px-16 my-14 py-6 md:py-12 md:my-32">
        <div className="flex flex-col">
          <p className="text-center px-6 md:text-xl mb-6">
            Explore what makes our products unique and find out what sets them
            apart. Here’s what you might enjoy
          </p>
          {/* <div className="flex justify-center items-center cursor-pointer">
          <BiDownArrowAlt className="relative text-7xl hover:text-8xl transition-all duration-300 md:hidden" />
        </div> */}
          {/* <div className="absolute h-4 w-full bg-slate-700"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardContents.map((content, index) => (
              <Card key={index} {...content} />
            ))}
          </div>
        </div>

        <hr className="my-16 mx-4" />

        <div className="w-full flex justify-center ">
          <div className="w-[65%]">
            <Card />
          </div>
          <div className="w-[35%]"></div>
        </div>
      </section>
    </>
  );
}
