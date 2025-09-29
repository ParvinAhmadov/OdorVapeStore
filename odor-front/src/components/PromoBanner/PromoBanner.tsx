"use client";

import { motion, Variants } from "framer-motion";

interface PromoBannerProps {
  title?: string;
  description?: string;
  price?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const PromoBanner: React.FC<PromoBannerProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-[1410px] mx-auto px-6 text-white flex flex-col justify-center h-full mt-[17%] gap-4"
    >
      <motion.h1
        variants={itemVariants}
        className="text-xl font-bold flex items-center gap-2"
      >
        <picture>
          {" "}
          <img
            src="https://gramentheme.com/html/odor/assets/images/icon/fire.svg"
            alt=""
          />
        </picture>
        GET <span className="text-orange-500">25% OFF</span> NOW
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[80px] font-bold leading-tight text-white/70"
      >
        Find Everything <br />
        For <span className="text-[#FA4F09]/90">Vaping</span>
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-[16px] text-[#D2D2D2]/80 mb-4 max-w-[600px]"
      >
        Sell Globally In Minutes With Localized Currencies, Languages, And{" "}
        <br />
        Expertise In Every Market. Only A Variety Of Vaping Products
      </motion.p>

      <motion.p variants={itemVariants} className="text-xl mb-6">
        <span className="text-neutral-300/60">Starting Price</span> <br />{" "}
        <span className="text-[30px]">$99.00</span>
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <button className="bg-[#FA4F09] px-[15px] py-[13px] rounded-full flex items-center justify-center gap-3 font-medium tracking-wide leading-none hover:bg-orange-600 transition">
          Shop Now
        </button>
        <button className="bg-white text-black px-[15px] py-[13px] rounded-full font-medium tracking-wide leading-none hover:bg-gray-200 transition">
          View Details
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PromoBanner;
