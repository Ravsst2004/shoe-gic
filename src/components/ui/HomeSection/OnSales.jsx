import sportShoes from "../../../../public/image/onSalesProducts/Sport Shoes.jpg";
import newArrivals from "../../../../public/image/onSalesProducts/New Arrivals.jpg";
import bestSellers from "../../../../public/image/onSalesProducts/Best Sellers.jpg";
import exclusiveNewShoes from "../../../../public/image/onSalesProducts/Exclusive New Shoes.jpg";
import { Link } from "react-router-dom";

export default function OnSales() {
  const onSalesProductsByCategories = [
    {
      title: "Sport Shoes",
      image: sportShoes,
    },
    {
      title: "New Arrivals",
      image: newArrivals,
    },
    {
      title: "Best Sellers",
      image: bestSellers,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div
          className="relative min-h-96 lg:min-h-[40rem] bg-cover bg-no-repeat bg-center flex items-center justify-center lg:justify-start lg:px-36"
          style={{
            backgroundImage: `url('${exclusiveNewShoes}')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="flex flex-col gap-y-3 text-center lg:text-start absolute text-slate-100">
            <h1 className="uppercase relative md:text-xl lg:text-3xl">
              Up to 20% off
            </h1>
            <h1 className="uppercase font-light text-3xl md:text-5xl lg:text-7xl">
              Exclusive
              <br />
              <span className="font-semibold lg:text-8xl">New Shoes</span>
            </h1>
            <Link
              to="/shop"
              className="bg-transparent text-center border-2 cursor-pointer p-2 border-slate-200 lg:text-2xl lg:w-64 font-semibold hover:bg-red-600 hover:border-red-600 transition-colors ease-linear duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-4">
          {onSalesProductsByCategories.map((product, index) => (
            <div
              key={index}
              className="relative group md:h-[30rem] rounded-lg cursor-pointer min-h-96 bg-cover bg-center flex items-center justify-center "
              style={{
                backgroundImage: `url('${product.image}')`,
              }}
            >
              <div className="absolute inset-0 rounded-lg bg-black opacity-30"></div>
              <div className="flex flex-col gap-y-3 text-center absolute text-slate-100 border bg-stone-600 bg-opacity-40 p-2 transition-all ease-linear duration-200">
                <h1 className="uppercase relative md:text-lg">Up to 50% off</h1>
                <h1 className="uppercase font-semibold text-3xl">
                  {product.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
