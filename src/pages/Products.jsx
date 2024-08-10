import React from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import InputSearch from "../components/ui/InputSearch";
import useFetch from "../../hooks/useFetch";
import data_products from "../../data/products.json";
import Layouts from "../components/layouts/Layouts";

export default function Products() {
  const products = Object.values(data_products);

  return (
    <Layouts>
      <div className="flex flex-col justify-center items-center mt-20 md:gap-y-8 md:mt-10">
        <div className="w-full">
          <InputSearch />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 mt-5 ">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.imageURL}
              className="bg-slate-900 text-white transition-all ease-in-out duration-300"
              titleClassName="text-purple-500 font-bold pt-2 text-xl"
              descriptionClassName="text-gray-300"
              buttonClassName="mt-2 w-full bg-slate-50 text-slate-800 font-semibold hover:bg-transparent hover:text-slate-200 transition ease-in duration-150"
              buttonTitle="Add to cart"
            />
          ))}
        </div>
      </div>
    </Layouts>
  );
}
