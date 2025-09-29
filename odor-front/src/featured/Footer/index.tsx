"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full text-white bg-[url('https://gramentheme.com/html/odor/assets/images/footer/footer-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-[1410px] h-[500px] mx-auto px-6 py-12 grid grid-cols-4 items-center md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-[18px] font-semibold text-white mb-4 tracking-wide">
            Customer Service
          </h3>
          <ul className="text-[15px] text-gray-400 space-y-2 leading-relaxed">
            <li className="hover:text-white transition cursor-pointer">
              Help Portal
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Delivery Information
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Click And Collect
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Refunds And Returns
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[18px] font-semibold text-white mb-4 tracking-wide">
            Get To Know Us
          </h3>
          <ul className="text-[15px] text-gray-400 space-y-2 leading-relaxed">
            <li className="hover:text-white transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              News & Blog
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Careers
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Investors
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[18px] font-semibold text-white mb-4 tracking-wide">
            Vapes New Collections
          </h3>
          <ul className="text-[15px] text-gray-400 space-y-2 leading-relaxed">
            <li className="hover:text-white transition cursor-pointer">
              E-Cigarettes
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Vape Pens
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Pod Systems
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Disposable Vapes
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Nicotine Salt Devices
            </li>
          </ul>
        </div>

        <div>
          <div className="flex gap-4 mt-6">
            <div>
              <div>
                <div className="w-full max-w-md  p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Get Newsletter
                  </h3>

                  <div className="flex items-center bg-[#191919]/60 rounded-full overflow-hidden border border-[#191919] py-[5px] px-[10px] mt-[4%]">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="flex-1 px-6 py-3  text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="bg-[#FA4F09] w-12 h-12 rounded-full hover:bg-orange-600 transition flex items-center justify-center">
                      <FaPaperPlane className="text-white text-base" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 mt-[10%]">
                  <div className="w-10 h-10  flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-[#FA4F09] transition ease-in-out duration-300">
                    <FaFacebookF className="text-white text-sm" />
                  </div>
                  <div className="w-10 h-10  flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-[#FA4F09] transition ease-in-out duration-300">
                    <FaTwitter className="text-white text-sm" />
                  </div>
                  <div className="w-10 h-10  flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-[#FA4F09] transition ease-in-out duration-300">
                    <FaLinkedinIn className="text-white text-sm" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-[#FA4F09] transition ease-in-out duration-300">
                    <FaYoutube className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-700 pt-6 pb-8 text-center text-sm text-gray-400 flex justify-between items-center h-16 max-w-[1410px] mx-auto px-6">
        <div>
          <Image
            src="https://gramentheme.com/html/odor/assets/images/logo/logo.svg"
            alt="Odor Logo"
            width={120}
            height={40}
          />
        </div>
        <p>
          © {new Date().getFullYear()} © Copyright 2023 odor All Rights Reserved
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <picture>
            <img
              src="https://gramentheme.com/html/odor/assets/images/icon/payment.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
