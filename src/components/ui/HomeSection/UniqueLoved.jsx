import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import SlidingContent from "../SlidingText";

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute z-20 top-1/2 right-0 bg-slate-200 rounded-full text-slate-800 w-6 h-6 mx-6 md:mx-8 flex items-center justify-center transform -translate-y-1/2 hover:text-slate-200 hover:bg-slate-800"
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute z-20 top-1/2 left-0 bg-slate-200 rounded-full text-slate-800 w-6 h-6 mx-6 md:mx-8 flex items-center justify-center transform -translate-y-1/2 hover:text-slate-200 hover:bg-slate-800"
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
}

export default function UniqueLoved({ setActiveSlide, bestSellersShoes }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full md:gap-y-5 bg-gray-200/80 text-slate-200 my-28 md:my-32 py-16">
      <div className="flex flex-col justify-center gap-y-6 overflow-hidden max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-y-2 text-center text-slate-950 lg:text-end ">
          <SlidingContent above>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center md:px-2 font-urbanist">
              Highly{" "}
              <span className="text-red-600 underline italic">Loved</span> Picks
            </h1>
            <p className="text-sm text-center md:text-lg xl:text-xl xl:px-72">
              Discover the products that have captured the hearts of our
              customers
            </p>
          </SlidingContent>
        </div>

        {/* Mobile Best Sellers */}
        <Slider {...settings} className="w-full sm:hidden cursor-pointer">
          {bestSellersShoes.map((shoe, index) => (
            <img
              key={index}
              src={shoe}
              alt="Best Sellers"
              className="w-full object-cover md:object-fill h-[30rem] md:h-[40rem] rounded-xl"
            />
          ))}
        </Slider>

        {/* Desktop Best Sellers */}
        <div className="hidden sm:grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center">
          {bestSellersShoes.map((shoe, index) => (
            <SlidingContent
              left={index % 2 === 0}
              right={index % 2 !== 0}
              key={index}
            >
              <img
                src={shoe}
                className="w-full object-cover h-[30rem] rounded-xl"
                alt="Best Sellers"
              />
            </SlidingContent>
          ))}
        </div>
      </div>
    </section>
  );
}
