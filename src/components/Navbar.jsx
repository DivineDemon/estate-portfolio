import Logo from "../assets/img/logo/l3.png";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full flex flex-row items-center justify-around bg-[#14533B] text-white shadow-xl p-5">
      <img src={Logo} alt="logo" className="w-10 cursor-pointer" />
      <ul className="flex flex-1 flex-row items-center justify-center space-x-24 list-none text-lg">
        <li>
          <a
            href="#about"
            className="hover:bg-white hover:text-[#14533B] hover:font-bold p-3 rounded-lg transition-all">
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:bg-white hover:text-[#14533B] hover:font-bold p-3 rounded-lg transition-all">
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:bg-white hover:text-[#14533B] hover:font-bold p-3 rounded-lg transition-all">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-center">
        <FaTelegram className="w-12 h-12 hover:text-[#14533B] hover:bg-white rounded-full p-2 transition-all cursor-pointer" />
        <FaWhatsapp className="w-12 h-12 hover:text-[#14533B] hover:bg-white rounded-full p-2 transition-all cursor-pointer" />
        <FaInstagram className="w-12 h-12 hover:text-[#14533B] hover:bg-white rounded-full p-2 transition-all cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
