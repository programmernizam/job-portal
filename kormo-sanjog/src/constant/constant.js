import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const navLinks = [
    {
        path: "/",
        display: "Home",
    },
    {
        path: "/jobs",
        display: "Find Jobs",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const socialIcons = [
    {
        link: "#",
        icon: FaFacebookF
    },
    {
        link: "#",
        icon: FaTwitter
    },
    {
        link: "#",
        icon: FaInstagram
    },
    {
        link: "#",
        icon: FaLinkedinIn
    },
]

export {
    navLinks,
    socialIcons
};

