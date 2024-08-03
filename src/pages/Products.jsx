import React from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import InputSearch from "../components/ui/InputSearch";

export default function Products() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 md:gap-y-8 md:mt-10">
      <div className="w-full">
        <InputSearch />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 mt-5 ">
        <Card
          title="Product 1"
          description="Description 1"
          image="https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5946.jpg?auto=webp&quality=75&width=1024"
          customClassName="bg-slate-900 text-white"
          titleClassName="text-red-500 font-bold pt-2"
          descriptionClassName="text-gray-300 font-semibold"
          buttonClassName="mt-2 w-full bg-slate-50 text-slate-800 font-semibold hover:bg-transparent hover:text-slate-200 transition ease-in duration-150"
          buttonTitle="Add to cart"
        />
      </div>
    </div>
  );
}
