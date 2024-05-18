import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import design from '../assets/category/design.png';
import designIcon from '../assets/category/design.svg';
import marketing from '../assets/category/marketing.png';
import marketingIcon from '../assets/category/marketing.svg';
import medicalIcon from '../assets/category/medical.svg';
import medical from '../assets/category/medical_&_nurse.png';
import transportIcon from '../assets/category/transport.svg';
import transport from '../assets/category/transportation.png';
import company1 from '../assets/jobs/company-01.png';
import company2 from '../assets/jobs/company-02.png';
import company4 from '../assets/jobs/company-04.png';
import company3 from '../assets/jobs/company-05.png';

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

const jobsList = [
    {
        id: 2001,
        title: "Senior Receptionist",
        company: "Medico.co Ltd",
        logo: company1,
        salary: "$20K-$50K",
        deadline: "05 April, 2023",
        type: ["Full Time", "Part Time", "Remote"],
        experience: "1-2 Years",
        location: "Dhaka, Bangladesh",
        perMonth: true,
        perHour: false,
        perYear: false,
    },
    {
        id: 2002,
        title: "Senior PHP Developer",
        company: "Marko Land Conpany",
        logo: company2,
        salary: "$50K-$70K",
        deadline: "05 April, 2023",
        type: ["Full Time", "Part Time"],
        experience: "1-2 Years",
        location: "Dhaka, Bangladesh",
        perMonth: true,
        perHour: false,
        perYear: false,
    },
    {
        id: 2003,
        title: "Junior React Developer",
        company: "UI.UX Company",
        logo: company3,
        salary: "$30K-$50K",
        deadline: "06 April, 2023",
        type: ["Full Time", "Remote"],
        experience: "1-2 Years",
        location: "Dhaka, Bangladesh",
        perMonth: true,
        perHour: false,
        perYear: false,
    },
    {
        id: 2004,
        title: "Senior React Developer",
        company: "UI.UX Company",
        logo: company4,
        salary: "$20-$50",
        deadline: "05 April, 2023",
        type: ["Part Time", "Remote"],
        experience: "1-2 Years",
        location: "Dhaka, Bangladesh",
        perMonth: false,
        perHour: true,
        perYear: false,
    },
]

export {
    categoryList, jobsList, navLinks,
    socialIcons
};

