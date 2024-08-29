import React from "react";
import { FaRegUser } from "react-icons/fa6";
import Slider from "react-slick";

export default function ClientFeedback() {
  const reviews = [
    {
      name: "Jane Cooper",
      feedback:
        "These shoes are incredibly comfortable and provide excellent support, making them perfect for long walks or hikes.",
    },
    {
      name: "Jenny Wilson",
      feedback:
        "I've been wearing these shoes for months now, and they've held up remarkably well. The quality is exceptional!",
    },
    {
      name: "John Doe",
      feedback:
        "The stylish design of these shoes caught my eye, and I'm so glad I bought them. They're not only fashionable but also very comfortable to wear.",
    },
    {
      name: "Sarah Smith",
      feedback:
        "I was looking for a pair of shoes that could handle both casual and more formal occasions, and these fit the bill perfectly. They're versatile and stylish.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-28 sm:px-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          <span className="text-red-600 underline italic">Client</span> Feedback
        </h1>
        <p className="text-sm md:text-lg xl:text-xl">
          Hear what our satisfied customers have to say.
        </p>
      </div>

      {/* Mobile */}
      <div className="flex flex-col my-4 md:flex-row gap-4 md:gap-10 md:hidden">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <figure
              key={index}
              className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
            >
              <svg
                aria-hidden="true"
                width="105"
                height="78"
                className="absolute left-6 top-6 fill-slate-100"
              >
                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">
                  {review.feedback}
                </p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">
                    {review.name}
                  </div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <FaRegUser className="h-14 w-14 p-4" />
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>

      {/* Desktop */}
      <div className="md:grid grid-cols-2 my-4 md:flex-row gap-4 md:gap-10 hidden">
        {reviews.map((review, index) => (
          <figure
            key={index}
            className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
          >
            <svg
              aria-hidden="true"
              width="105"
              height="78"
              className="absolute left-6 top-6 fill-red-100"
            >
              <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
            </svg>
            <blockquote className="relative">
              <p className="text-lg tracking-tight text-slate-900">
                {review.feedback}
              </p>
            </blockquote>
            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-base text-red-600">
                  {review.name}
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-slate-50">
                <FaRegUser className="h-14 w-14 p-4" />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
