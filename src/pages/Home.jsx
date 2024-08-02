import React from "react";

export default function Home() {
  return (
    <>
      <section className=" w-full mt-10 md:mt-0">
        <div className="flex justify-center items-center flex-col mt-28 gap-y-6">
          <h1 className="text-5xl text-center font-extrabold font-urbanist tracking-tighter">
            Discover the{" "}
            <span className="text-purple-600 underline">Magic</span> in Every
            Product
          </h1>
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
    </>
  );
}
