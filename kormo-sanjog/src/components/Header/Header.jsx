import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../contexts";
import HeaderTop from "./HeaderTop";
export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <header>
      <HeaderTop />

      <div>
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
      </div>
    </header>
  );
}
