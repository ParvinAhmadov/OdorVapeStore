"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PromoBanner from "../PromoBanner/PromoBanner";

const slides = [
  {
    image:
      "https://gramentheme.com/html/odor/assets/images/banner/banner-two-image3.jpg",
    title: "Find Everything For Vaping",
    description:
      "Sell Globally In Minutes With Localized Currencies, Languages, And Expertise In Every Market. Only A Variety Of Vaping Products",
    price: "$99.00",
  },
  {
    image:
      "https://gramentheme.com/html/odor/assets/images/banner/banner-two-image2.jpg",
    title: "Best Vape Collections",
    description:
      "Get the premium vape kits and accessories with top quality and affordable price range.",
    price: "$129.00",
  },
  {
    image:
      "https://gramentheme.com/html/odor/assets/images/banner/banner-two-image1.jpg",
    title: "New Arrivals For You",
    description:
      "Discover the latest designs and trends for vaping. Limited time offer, don’t miss out!",
    price: "$149.00",
  },
];

const HeroSlide = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[800px] overflow-hidden">
      {slides.map((slide, index) => {
        const isCurrent = index === current;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isCurrent ? 1 : 0 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              zIndex: isCurrent ? 10 : 0,
            }}
          />
        );
      })}

      <motion.div
        key={current + "-banner"}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="relative z-20"
      >
        <PromoBanner
          title={slides[current].title}
          description={slides[current].description}
          price={slides[current].price}
        />
      </motion.div>

      <div className="absolute right-6 top-1/2 flex flex-col gap-4 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-[#FA4F09] transition ease-in-out duration-300"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlide;
