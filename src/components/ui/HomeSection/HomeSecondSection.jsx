import Slider from "react-slick";
import Modal from "../Modal";
import Card from "../Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute z-50 top-1/2 right-0 bg-slate-200 rounded-full text-slate-800 w-6 h-6 mx-2 flex items-center justify-center transform -translate-y-1/2 hover:text-slate-200 hover:bg-slate-800"
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute z-50 top-1/2 left-0 bg-slate-200 rounded-full text-slate-800 w-6 h-6 mx-2 flex items-center justify-center transform -translate-y-1/2 hover:text-slate-200 hover:bg-slate-800"
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
}

export default function HomeSecondSection({
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => {
      return (
        <div
          className={`${
            i === activeSlide ? "bg-slate-800" : "bg-slate-700"
          } border-2 border-slate-700 rounded-full mt-3 w-4 h-4`}
        ></div>
      );
    },
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full md:gap-y-5 bg-slate-900 text-slate-200 md:px-14 lg:px-24 xl:px-20 my-28 md:my-32 py-16">
      <div>
        <div className="flex flex-col gap-y-12">
          <p className="px-6 text-lg text-center md:text-xl">
            Explore what makes our shoes unique and discover what sets them
            apart. Here’s what you might enjoy.
          </p>

          <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:gap-x-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-fit">
              {cardContents.map(
                (content, index) =>
                  content !== null && (
                    <Card
                      key={index}
                      title={content.title}
                      description={content.description.slice(0, 50) + " ...."}
                      onClick={() =>
                        handleOpenModal(
                          content.title,
                          content.description,
                          content.image
                        )
                      }
                      className="group lg:w-full xl:w-full"
                      titleClassName={`transition-colors duration-200 ease-in text-xl font-semibold text-purple-500 group-hover:text-slate-200`}
                    />
                  )
              )}
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
              {selectedCard && (
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-xl font-bold">{selectedCard.title}</h1>
                  <p className="font-normal text-justify">
                    {selectedCard.description}
                  </p>
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title + " image"}
                    className="transition-all ease-in-out duration-200 w-full h-full xl:w-[80%] xl:h-[80%] object-contain"
                  />
                  <hr />
                </div>
              )}
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-y-6 items-center py-20 overflow-hidden px-6">
        <p className="text-lg text-center md:text-xl">
          Discover our top-selling items and see what makes them customer
          favorites
        </p>

        <Slider {...settings} className="w-full lg:hidden cursor-pointer">
          {bestSellersShoes.map((shoe, index) => (
            <img
              key={index}
              src={shoe}
              className="w-full object-cover h-[25rem] rounded-xl"
            />
          ))}
        </Slider>

        <div className="hidden lg:grid w-full grid-cols-3 gap-x-4">
          {bestSellersShoes.map((shoe, index) => (
            <div key={index} className="w-full">
              <img
                src={shoe}
                className="w-[30rem] object-cover h-[30rem] rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
