import React from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import InputSearch from "../components/ui/InputSearch";
import useFetch from "../../hooks/useFetch";

export default function Products() {
  const { data: dataProducts } = useFetch(
    "https://api.escuelajs.co/api/v1/products/?offset=1&limit=10"
  );

  return (
    <div className="flex flex-col justify-center items-center mt-20 md:gap-y-8 md:mt-10">
      <div className="w-full">
        <InputSearch />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 mt-5 ">
        {dataProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={
              product.description.length > 50
                ? `${product.description.slice(0, 50)}...`
                : product.description
            }
            image={product.images[0]}
            customClassName="bg-slate-900 text-white"
            titleClassName="text-purple-500 font-bold pt-2 text-xl"
            descriptionClassName="text-gray-300"
            buttonClassName="mt-2 w-full bg-slate-50 text-slate-800 font-semibold hover:bg-transparent hover:text-slate-200 transition ease-in duration-150"
            buttonTitle="Add to cart"
          />
        ))}
      </div>
    </div>
  );
}
