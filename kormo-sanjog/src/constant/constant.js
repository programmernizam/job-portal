import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import design from '../assets/category/design.png';
import designIcon from '../assets/category/design.svg';
import marketing from '../assets/category/marketing.png';
import marketingIcon from '../assets/category/marketing.svg';
import medicalIcon from '../assets/category/medical.svg';
import medical from '../assets/category/medical_&_nurse.png';
import transportIcon from '../assets/category/transport.svg';
import transport from '../assets/category/transportation.png';

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

const categoryList = [
    {
        id: 1001,
        title: "Medical & Nurse",
        icon: medicalIcon,
        img: medical,
        popular: true,
        trending: false,
        jobs: 500
    },
    {
        id: 1002,
        title: "Transportation job",
        icon: transportIcon,
        img: transport,
        popular: false,
        trending: false,
        jobs: 340
    },
    {
        id: 1003,
        title: "Designing Jobs",
        icon: designIcon,
        img: design,
        popular: false,
        trending: true,
        jobs: 230
    },
    {
        id: 1003,
        title: "Marketing & Sales",
        icon: marketingIcon,
        img: marketing,
        popular: false,
        trending: true,
        jobs: 500
    },
]

export {
    categoryList, navLinks,
    socialIcons
};

