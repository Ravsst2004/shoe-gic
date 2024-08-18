import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ onHover, setOnHover }) {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center mt-56 gap-y-6 md:gap-y-8">
        <h1 className="text-5xl font-extrabold tracking-tighter text-center md:text-6xl md:px-2 font-urbanist">
          Discover the{" "}
          <span className="text-red-600 underline italic">Magic</span> in Every
          Shoes
        </h1>
        <div className="relative">
          <p className="relative z-10 px-10 text-lg text-center md:text-xl xl:px-72">
            With our curated selection of high-quality shoes, we invite you to
            experience the extraordinary. At our store, each shoe is handpicked
            to bring a touch of magic into your life.
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
  );
}
