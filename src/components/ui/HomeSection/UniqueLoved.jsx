import Slider from "react-slick";
import Modal from "../Modal";
import Card from "../Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

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

export default function UniqueLoved({
  showModal,
  setShowModal,
  activeSlide,
  setActiveSlide,
  cardContents,
  bestSellersShoes,
  selectedCard,
  handleOpenModal,
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // customPaging: (i) => {
    //   return (
    //     <div
    //       className={`${
    //         i === activeSlide ? "bg-slate-800" : "bg-slate-700"
    //       } border-2 border-slate-700 rounded-full mt-3 w-4 h-4`}
    //     ></div>
    //   );
    // },
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full md:gap-y-5 bg-slate-900 text-slate-200 px-6 md:px-14 lg:px-24 xl:px-44 my-28 md:my-32 py-16">
      <div>
        <div className="flex flex-col gap-y-6 w-full">
          <div className="text-center lg:text-start">
            <h1 className="text-3xl font-semibold md:text-4xl mb-2">
              The <span className="text-purple-600 italic">Unique</span> Edge
            </h1>
            <p className="text-lg md:text-xl">
              Explore what makes our shoes unique and discover what sets them
              apart.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full lg:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-fit">
              {cardContents.map(
                (content, index) =>
                  content !== null && (
                    <Card
                      key={index}
                      title={content.title}
                      description={content.description.slice(0, 50) + " ...."}
                      image={content.image}
                      onClick={() =>
                        handleOpenModal(
                          content.title,
                          content.description,
                          content.image
                        )
                      }
                      className="group lg:w-full hover:bg-slate-800 transition-colors ease-in duration-200"
                      titleClassName={`text-xl font-semibold`}
                      imageClassName="object-contain h-40 md:h-52 "
                    />
                  )
              )}
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
              {selectedCard && (
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-xl font-bold text-purple-400">
                    {selectedCard.title}
                  </h1>
                  <p className="font-normal text-justify">
                    {selectedCard.description}
                  </p>
                  <hr />
                </div>
              )}
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-y-6 py-20 overflow-hidden">
        <div className="text-center lg:text-end ">
          <h1 className="text-3xl font-semibold md:text-4xl mb-2">
            Highly <span className="text-purple-600 italic">Loved</span> Picks
          </h1>
          <p className="text-lg md:text-xl">
            Discover our top-selling items and see what makes them customer
            favorites
          </p>
        </div>

        {/* Mobile Best Sellers */}
        <Slider {...settings} className="w-full sm:hidden cursor-pointer">
          {bestSellersShoes.map((shoe, index) => (
            <img
              key={index}
              src={shoe}
              className="w-full object-cover md:object-fill h-[30rem] md:h-[40rem] rounded-xl"
            />
          ))}
        </Slider>

        {/* Desktop Best Sellers */}
        <div className="hidden sm:grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center">
          {bestSellersShoes.map((shoe, index) => (
            <img
              key={index}
              src={shoe}
              className="w-full object-cover h-[30rem] rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
