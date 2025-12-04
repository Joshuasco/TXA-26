import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { Icon: FaInstagram, link: "https://instagram.com/yourpage" },
    { Icon: FaTiktok, link: "https://tiktok.com/@yourpage" },
    { Icon: FaYoutube, link: "https://youtube.com/yourchannel" },
    { Icon: FaXTwitter, link: "https://twitter.com/yourpage" },
    { Icon: FaFacebook, link: "https://facebook.com/yourpage" },
  ];

  return (
    <motion.footer
          className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-6 bg-white mt-2 mx-4 px-4 py-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >


        {/* Logo & Branding */}
        <div className="flex items-start justify-start w-full md:w-auto">
          <img
            src={"/txa-logo.png"}
            alt="Tech X Africa Logo"
            className="w-[180px] lg:w-[220px] h-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
  <div className="flex flex-wrap items-start gap-4 w-full md:w-auto justify-start md:justify-start">
          <Link
            to="/terms-of-service"
            className="cursor-pointer text-sm max-lg:text-xs hover:text-red-600 transition"
          >
            Terms of Service
          </Link>

          <Link
            to="/privacy-policy"
            className="cursor-pointer text-sm max-lg:text-xs hover:text-red-600 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/get-involved"
            className="cursor-pointer text-sm max-lg:text-xs hover:text-red-600 transition"
          >
            Get Involved
          </Link>
        </div>

        {/* Social Media Icons */}
          <div className="flex items-start md:items-center gap-4 md:gap-6 w-full md:w-auto justify-start md:justify-end">
          {socialLinks.map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-black hover:text-red-600 transition"
            >
              <Icon size={25} />
            </a>
          ))}
        </div>

  </motion.footer>
  );
}
