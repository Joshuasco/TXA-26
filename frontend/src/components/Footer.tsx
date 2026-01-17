import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TXA_logo from "../assets/images/TXA_logo.png";

export default function Footer() {
  const navList = [
    { to: "/#about", label: "About TECHX Africa" },
    { to: "/code-of-conduct", label: "Code of Conduct" },
    { to: "/end-of-dp", label: "End of DP" },
    { to: "/join-our-community", label: "Join Our Community" },
  ];
  const socialLinks = [
    { Icon: FaInstagram, link: "https://instagram.com/yourpage" },
    { Icon: FaTiktok, link: "https://tiktok.com/@yourpage" },
    { Icon: FaYoutube, link: "https://youtube.com/yourchannel" },
    { Icon: FaXTwitter, link: "https://twitter.com/yourpage" },
    { Icon: FaFacebook, link: "https://facebook.com/yourpage" },
  ];

  return (
    <motion.footer
      className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-6 bg-white mx-4 my-4 "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* Logo & Branding */}
      <div className="flex  lg:items-center lg:justify-center w-full  lg:w-auto">
        <div className="flex flex-col lg:items-center lg:justify-center">
          <LazyLoadImage
            src={TXA_logo}
            alt="Logo"
            effect="blur"
            className="w-28 object-contain"
          />
          <span className="text-sm text-center">Powered by ATC Africa</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col  items-start gap-4 w-full justify-start lg:flex-row lg:flex-wrap lg:w-auto lg:justify-center lg:align-middle">
        {navList.map(({ to, label }, index) => (
          <Link
            key={index}
            to={to}
            className="cursor-pointer text-sm max-lg:text-xs hover:text-[#FFB901] transition"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-col md:justify-center md:items-center">
        <span className="text-sm md:text-center">
          Follow us on Social Media
        </span>
        <div className="flex items-start md:items-center gap-4 md:gap-4 w-full md:w-auto justify-start md:justify-end">
          {socialLinks.map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-(nav-color) hover:text-[#FFB901] transition"
            >
              <Icon size={25} />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
