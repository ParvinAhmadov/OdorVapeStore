"use client";
import { motion } from "framer-motion";

const HeroSlide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute inset-0 h-[800px] bg-cover bg-center -z-10"
      style={{
        backgroundImage:
          "url('https://gramentheme.com/html/odor/assets/images/banner/banner-two-image3.jpg')",
      }}
    />
  );
};

export default HeroSlide;
