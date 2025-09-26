import Link from "next/link";
import Image from "next/image";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div className="pt-[30px] pb-[30px]">
          <div className="max-w-[1410px] mx-auto  flex items-center justify-between px-4 ">
            <Link href="/" className="flex items-center">
              <Image
                src="https://gramentheme.com/html/odor/assets/images/logo/logo.svg"
                width={158}
                height={58}
                alt="Odor Logo"
                priority
              />
            </Link>

            <div className="flex items-center gap-4 bg-white w-[600px] h-[60px] rounded-[40px] px-6 shadow-md p-[20px]">
              <FaSearch className="text-orange-500 text-xl" />
              <input
                className="flex-1 bg-transparent outline-none text-black placeholder-gray-500"
                type="text"
                placeholder="Search Now"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="flex w-[156px] h-[50px] rounded-[40px] overflow-hidden shadow-md">
                <div className="flex items-center justify-center bg-[#FA4F09]  w-[58px] h-full">
                  <FaUser className="text-white text-sm" />
                </div>

                <div className="flex items-center justify-center bg-white flex-1">
                  <span className="text-black text-sm font-medium">
                    My Account
                  </span>
                </div>
              </button>

              <button className="flex items-center w-[174px] h-[58px] rounded-[40px] overflow-hidden  bg-[#ffffffff]">
                <div className="flex items-center justify-center w-[58px] h-full">
                  <FaShoppingCart className="text-orange-500 text-xl" />
                </div>

                <div className="flex items-center justify-center w-[76px] h-full">
                  <span className="text-black text-[16px] font-medium font-[Montserrat]">
                    $0.00
                  </span>
                </div>

                <div className="w-[40px] h-full bg-[#191919] rounded-r-full flex items-center justify-center px-2">
                  <span className="text-white text-sm font-medium font-[Montserrat]">
                    0
                  </span>
                </div>
              </button>

              <button className="flex items-center justify-between bg-[#ffffff] w-[119px] h-[42px] rounded-[40px] px-3 shadow-md p-[10px]">
                <div className="w-[34px] h-[34px] bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1200px-United-states_flag_icon_round.svg.png"
                    alt="USA Flag"
                    width={34}
                    height={34}
                  />
                </div>
                <span className="text-black font-medium text-sm">USA</span>
                <FaChevronDown className="text-gray-500 text-sm" />
              </button>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
