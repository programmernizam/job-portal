import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import DarkLogo from "../../assets/header1-logo.svg";
import WhiteLogo from "../../assets/header2-logo.svg";
import { navLinks, socialIcons } from "../../constant/constant";
import { ThemeContext } from "../../contexts";
export default function Sidebar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex flex-col w-64 md:w-80 h-screen px-5 py-8 overflow-y-auto bg-white border-r dark:border-r-darkMode dark:bg-darkMode gap-6">
      <a href="#">
        <img className="w-[120px]" src={!darkMode ? DarkLogo : WhiteLogo} alt="Logo" />
      </a>
      <ul className="flex flex-col justify-start gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="font-worksans py-3 text-[18px]">
              {link.display}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="flex items-center justify-center gap-2 border rounded px-[28px] py-[9px] text-[17px] font-medium font-worksans group hover:bg-primary transition duration-500 hover:border-primary"
      >
        <FaRegUserCircle className="group-hover:text-white" />
        <span className="group-hover:text-white">Sign In</span>
      </a>
      <a
        href="#"
        className="flex items-center justify-center bg-primary gap-2 rounded px-[28px] py-[9px] text-[17px] font-medium font-worksans group hover:bg-darkMode border hover:border-white border-primary  transition duration-500"
      >
        <span className="text-white">Post Job</span>
        <IoBriefcaseOutline className="text-white" />
      </a>
      <div className="flex items-center justify-center gap-[15px]">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="bg-none border border-primary bg-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-transparent hover:border-primary transition duration-300"
          >
            <span className="text-[16px] text-white group-hover:text-primary font-[16px]">
              <item.icon />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
