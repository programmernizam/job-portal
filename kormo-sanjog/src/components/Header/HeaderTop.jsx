import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaTwitter,
} from "react-icons/fa";

export default function HeaderTop() {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex justify-between items-center bg-slate-200 dark:bg-primary py-3 px-[7%]">
      <div>
        <p className="font-worksans">
          Welcome Our Job Portal! <span className="font-semibold text-primary">Save Jobs</span>
        </p>
      </div>
      <div className="flex items-center gap-[15px]">
        <a
          href="#"
          className="bg-none border border-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-primary transition duration-300"
        >
          <FaFacebookF className="text-[16px] text-primary group-hover:text-white font-[16px]" />
        </a>
        <a
          href="#"
          className="bg-none border border-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-primary transition duration-300"
        >
          <FaTwitter className="text-[16px] text-primary group-hover:text-white font-[16px]" />
        </a>
        <a
          href="#"
          className="bg-none border border-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-primary transition duration-300"
        >
          <FaInstagram className="text-[16px] text-primary group-hover:text-white font-[16px]" />
        </a>
        <a
          href="#"
          className="bg-none border border-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-primary transition duration-300"
        >
          <FaLinkedinIn className="text-[16px] text-primary group-hover:text-white font-[16px]" />
        </a>
        <a
          href="#"
          className="bg-none border border-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-primary transition duration-300"
          onClick={() => setDark(!dark)}
        >
          {dark ? (
            <FaSun className="text-[16px] text-primary group-hover:text-white font-[16px]" />
          ) : (
            <FaMoon className="text-[16px] text-primary group-hover:text-white font-[16px]" />
          )}
        </a>
      </div>
    </div>
  );
}
