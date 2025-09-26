import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" shadow-md bg-[#191919] ">
      <div className="flex max-w-[1410px] h-[90px] mx-auto items-center justify-between px-4  ">
        <div>
          <ul className="flex justify-start items-center  h-[58px] font-semibold text-[#D2D2D2] gap-[30px]">
            <li className="">
              <a
                href="#"
                className="hover:text-orange-500 transition flex items-center justify-between gap-1"
              >
                Home <FaChevronDown />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition ">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 transition flex items-center justify-between gap-2"
              >
                Pages <FaChevronDown />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 transition flex items-center justify-between gap-2"
              >
                Blog <FaChevronDown />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition flex ">
                Contact Us{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-[#1B1B1B] text-[#D2D2D2] text-xs font-medium px-6 py-2 flex justify-end gap-8">
          <div className="flex items-center gap-3 w-[160px] h-[70px] text-[#D2D2D2] font-[Montserrat]">
            <div className="flex-shrink-0">
              <img
                src="https://gramentheme.com/html/odor/assets/images/flag/picking.png"
                width={43}
                height={42}
                alt="Picking Flag"
              />
            </div>

            <div className="flex flex-col justify-center leading-tight gap-[6px]">
              <span className="text-base font-medium text-[#D2D2D2]">
                Picking Up?
              </span>
              <div className="flex items-center gap-1 text-white">
                <span className="text-[15px] font-bold">Select Store</span>
                <FaChevronDown className="text-[12px]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-[223px] h-[70px] text-[#D2D2D2] font-[Montserrat]">
            <div className="flex-shrink-0">
              <img
                src="https://gramentheme.com/html/odor/assets/images/flag/shipping.png"
                width={43}
                height={42}
                alt="Picking Flag"
              />
            </div>
            <div className="flex flex-col justify-center  text-white ">
              <span className="text-base">Free Shipping</span>
              <span className="text-base">
                On Order <span className="text-lg font-bold ">Over $100</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
