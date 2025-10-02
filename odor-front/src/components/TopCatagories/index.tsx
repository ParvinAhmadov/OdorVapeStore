"use client";

import { motion } from "framer-motion";

const TopCategories = () => {
  const categories = [
    {
      label: "Best Tank",
      img: "https://gramentheme.com/html/odor/assets/images/category/category-icon4.png",
    },
    {
      label: "Best Mod",
      img: "https://gramentheme.com/html/odor/assets/images/category/category-icon1.png",
    },
    {
      label: "Best Pen",
      img: "https://gramentheme.com/html/odor/assets/images/category/category-icon6.png",
    },
    {
      label: "Best Pod",
      img: "https://gramentheme.com/html/odor/assets/images/category/category-icon3.png",
    },
    {
      label: "Best Vaps",
      img: "https://gramentheme.com/html/odor/assets/images/category/category-icon2.png",
    },
    {
      label: "Best E-Juice",
      img: "https://gramentheme.com/html/odor/assets/images/category/category-icon6.png",
    },
  ];

  const loopCategories = [...categories, ...categories];

  return (
    <div className="pt-[100px] pb-[100px] bg-black text-white overflow-hidden">
      <div className="max-w-[1410px] mx-auto flex flex-col justify-center h-full gap-10">
        <div className="flex justify-center items-center gap-4 relative h-[36px] ">
          <div className="relative w-[40px] h-[40px]">
            <span className="absolute top-[25%] left-0 w-[20px] h-[20px] rounded-full bg-black border-2 border-[#FA4F09] animate-slideRight" />
            <span className="absolute top-[25%] left-[10px] w-[20px] h-[20px] rounded-full bg-[#FA4F09] opacity-60 animate-slideLeft" />
          </div>
          <h3 className="text-[24px] font-bold z-10 font-prosto ">
            Our Top Categories
          </h3>
          <div className="relative w-[40px] h-[40px] ">
            <span className="absolute top-[25%] left-0 w-[20px] h-[20px] rounded-full bg-black border-2 border-[#FA4F09] animate-slideRight" />
            <span className="absolute top-[25%] left-[10px] w-[20px] h-[20px] rounded-full bg-[#FA4F09] opacity-60 animate-slideLeft" />
          </div>
        </div>

        <div className="overflow-hidden w-full py-[80px] bg-black text-white">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopCategories.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-6 min-w-[240px]"
              >
                <div className="w-[180px] h-[180px] rounded-full border border-[#232323] flex items-center justify-center">
                  <div className="w-[140px] h-[140px] rounded-full bg-[#111] flex items-center justify-center overflow-hidden">
                    <picture>
                      <img
                        src={cat.img}
                        alt={cat.label}
                        className="w-[80px] h-[80px] object-contain"
                      />
                    </picture>
                  </div>
                </div>
                <span className="text-[18px] font-bold">{cat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
