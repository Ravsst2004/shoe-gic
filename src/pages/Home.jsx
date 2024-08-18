import { useState } from "react";
import Layouts from "../components/layouts/Layouts";
import premiumQualitySvg from "../assets/svg/premium-quality.svg";
import exceptionalDesignsSvg from "../assets/svg/exceptional-designs.svg";
import affordableLuxurySvg from "../assets/svg/affordable-luxury.svg";
import ecoFriendlySvg from "../assets/svg/eco-friendly.svg";
import UniqueLoved from "../components/ui/HomeSection/UniqueLoved";
import Hero from "../components/ui/HomeSection/Hero";
import OnSales from "../components/ui/HomeSection/OnSales";

export default function Home() {
  const [onHover, setOnHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const cardContents = [
    {
      title: "Premium Quality",
      description:
        "Built with top-tier materials for exceptional durability and performance. Every detail is crafted with care to ensure long-lasting reliability.",
      image: premiumQualitySvg,
    },
    {
      title: "Exceptional Designs",
      description:
        "Explore unique designs that blend style and functionality, offering both comfort and a distinctive look for any occasion.",
      image: exceptionalDesignsSvg,
    },
    {
      title: "Affordable Luxury",
      description:
        "Enjoy high-end quality at a price you can afford. Luxury shouldn't come at a premium, and with us, it doesn't have to.",
      image: affordableLuxurySvg,
    },
    {
      title: "Eco-Friendly",
      description:
        "Choose sustainable products made with the planet in mind. Our eco-friendly options help you make responsible choices without compromise.",
      image: ecoFriendlySvg,
    },
  ];

  const bestSellersShoes = [
    "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608229751021-ed4bd8677753?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1619521440807-ba72afd67b12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  ];

  const handleOpenModal = (title, description, image) => {
    setShowModal(true);
    setSelectedCard({
      title,
      description,
      image,
    });
  };

  return (
    <Layouts>
      {" "}
      <OnSales />
      <Hero
        onHover={onHover}
        setOnHover={setOnHover}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <UniqueLoved
        showModal={showModal}
        setShowModal={setShowModal}
        cardContents={cardContents}
        bestSellersShoes={bestSellersShoes}
        selectedCard={selectedCard}
        handleOpenModal={handleOpenModal}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </Layouts>
  );
}
