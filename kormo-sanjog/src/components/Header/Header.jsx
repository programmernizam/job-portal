import { useContext, useState } from "react";
import { FaMoon, FaRegUserCircle, FaSun } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import DarkLogo from "../../assets/header1-logo.svg";
import WhiteLogo from "../../assets/header2-logo.svg";
import { navLinks } from "../../constant/constant";
import { ThemeContext } from "../../contexts";
import HeaderTop from "./HeaderTop";
import Sidebar from "./Sidebar";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <HeaderTop />
      <nav className="px-[7%] py-4 flex justify-between items-center dark:bg-[#020B0D]">
        {/* Header Logo */}
        <a href="#">
          <img className="w-[120px] lg:w-full" src={!darkMode ? DarkLogo : WhiteLogo} alt="Logo" />
        </a>
        {/* Header Right (for large screens) */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex item-center gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="font-worksans px-5 py-3 text-[18px]"
                >
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className={`${
              darkMode
                ? "bg-primary hover:bg-gray-300"
                : "bg-gray-300 hover:bg-primary"
            } h-[30px] w-[30px] flex justify-center items-center rounded-full group  transition duration-300`}
            onClick={() => setDarkMode((darkMode) => !darkMode)}
          >
            {darkMode ? (
              <FaSun className="text-[16px] text-white group-hover:text-primary font-[16px]" />
            ) : (
              <FaMoon className="text-[16px] text-primary group-hover:text-white font-[16px]" />
            )}
          </a>
          <a
            href="#"
            className="flex items-center justify-between gap-2 border rounded px-[28px] py-[9px] text-[17px] font-medium font-worksans group hover:bg-primary transition duration-500 hover:border-primary"
          >
            <FaRegUserCircle className="group-hover:text-white" />
            <span className="group-hover:text-white">Sign In</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between bg-primary gap-2 rounded px-[28px] py-[9px] text-[17px] font-medium font-worksans group hover:bg-darkMode transition duration-500"
          >
            <span className="text-white">Post Job</span>
            <IoBriefcaseOutline className="text-white" />
          </a>
        </div>
        {/* Mobile Menu (for small screens) */}
        <div className="flex items-center gap-6 lg:hidden">
          <a
            href="#"
            className={`${
              darkMode
                ? "bg-primary hover:bg-gray-300"
                : "bg-gray-300 hover:bg-primary"
            } h-[30px] w-[30px] flex justify-center items-center rounded-full group  transition duration-300`}
            onClick={() => setDarkMode((darkMode) => !darkMode)}
          >
            {darkMode ? (
              <FaSun className="text-[16px] text-white group-hover:text-primary font-[16px]" />
            ) : (
              <FaMoon className="text-[16px] text-primary group-hover:text-white font-[16px]" />
            )}
          </a>
          <button onClick={toggleDrawer}>
            {isOpen ? (
              <RiCloseFill className="text-[30px]" />
            ) : (
              <RiMenu3Fill className="text-[30px]" />
            )}
          </button>

          <div
            className={`${isOpen ? "block" : "hidden"} fixed inset-0`}
            onClick={toggleDrawer}
          >
            <Sidebar />
          </div>
        </div>
      </nav>
    </header>
  );
}
