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
    <div className="">
      <div>
        <p>
          Welcome Our Job Portal! <span>Save Jobs</span>
        </p>
      </div>
      <div>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#" onClick={() => setDark(!dark)}>
          {dark ? <FaSun /> : <FaMoon />}
        </a>
      </div>
    </div>
  );
}
