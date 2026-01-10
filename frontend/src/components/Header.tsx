import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import TXA_logo from "../assets/images/TXA_logo.png";

const Header = () => {
  const [openTab, setOpenTab] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navList = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/speakers", label: "Speakers" },
    { to: "/#", label: "Get Involved" },
    { to: "/past-events", label: "Past Events" },
    { to: "/faq", label: "FAQs" },
    {to: "/swag-order", label: "Swag Order"}
  ];
  const dropDownList = [
    {
      href: "https://bit.ly/txavolunteer2025",
      label: "Apply to Volunteer",
    },
    {
      href: "/TXA 25 Official Proposal.pdf",
      label: "Become a Sponsor",
    },
    {
      href: "https://wa.me/+2348123051357",
      label: "Become a Partner",
    },
  ];

  return (
    <nav className="py-4 w-full">
      <div className=" container w-full  z-50 bg-white  transition-all">
        {/* Header Top */}
        <div className="flex items-center justify-between px-2 md:px  w-full ">
          {/* Logo */}
          <NavLink to="/" end className="z-50 ">
            <LazyLoadImage
              src={TXA_logo}
              alt="Logo"
              effect="blur"
              className="w-28 object-contain"
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-between w-full text-(--nav-color)">
            {/* Center Nav Links */}
            <div className="flex flex-1 justify-center items-center gap-10 ">
              {navList.map(({ to, label }) =>
                label == "Get Involved" ? (
                  // dropDown
                  <div key={label} className="px-4 py-2 relative group">
                    {/* Trigger */}
                    <span className="font-normal flex items-center gap-1 cursor-pointer hover:text-(--primary-color)">
                      Get Involved
                      <FiChevronDown size={14} className="group-hover:hidden" />
                      <FiChevronUp
                        size={14}
                        className="hidden group-hover:inline-block"
                      />
                    </span>

                    {/* Dropdown */}
                    <div
                      className="absolute left-0 mt-2 flex flex-col gap-2 bg-white
                                    opacity-0 translate-y-2 whitespace-nowrap
                                    group-hover:opacity-100 group-hover:translate-y-0
                                    transition-all duration-300 
                                    pointer-events-none group-hover:pointer-events-auto z-50"
                    >
                      {dropDownList.map(({ href, label }) =>
                        label === "Become a Sponsor" ? (
                          <a
                            key={href}
                            href={href}
                            download
                            className="px-4 py-2 hover:text-(--primary-color) transition-all duration-300"
                          >
                            {label}
                          </a>
                        ) : (
                          <a
                            key={href}
                            href={href}
                            target= "_blank"
                            rel= "noopener noreferrer"
                            className="px-4 py-2 hover:text-(--primary-color) transition-all duration-300"
                          >
                            {label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={to}
                    to={to}
                    className="hover:text-(--primary-color) transition duration-300"
                  >
                    {label}
                  </NavLink>
                ),
              )}
            </div>

            {/* Right Button */}
            <NavLink
              to="/get-your-ticket"
              className="hover:text-(--primary-color) transition duration-300"
            >
              <span className="bg-(--primary-color) text-white px-8 py-3">
                Get Your Ticket
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex justify-end  items-center gap-4 lg:hidden">
            {!openTab ? (
              <GiHamburgerMenu
                size={25}
                className="cursor-pointer text-(--nav-color)"
                onClick={() => setOpenTab(true)}
              />
            ) : (
              <FaX
                size={25}
                className="cursor-pointer text-(--nav-color)"
                onClick={() => setOpenTab(false)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu - Pushes content down */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            openTab ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-4 text-(--nav-color) bg-white shadow-md">
            {navList.map(({ to, label }) =>
              label == "Get Involved" ? (
                //  Dropdown
                <div>
                  <span
                    onClick={() => setDropDown(!dropDown)}
                    className="px-4 py-2 rounded-lg hover:bg-(--primary-color) hover:text-white 
                transition-all duration-300 flex items-center gap-1 cursor-pointer "
                  >
                    Get Involved
                    {dropDown ? (
                      <FiChevronUp size={14} />
                    ) : (
                      <FiChevronDown size={14} />
                    )}
                  </span>

                  {dropDown && (
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {dropDownList.map(({ href, label }) =>
                        label == "Become a Sponsor" ? (
                          <a
                            key={href}
                            href={href}
                            download
                            className="px-4 py-2  rounded-lg hover:bg-(--primary-color) hover:text-white transition-all duration-300"
                          >
                            {label}
                          </a>
                        ) : (
                          <a
                            key={href}
                            href={href}
                            target= "_blank"
                            rel= "noopener noreferrer"
                            className="px-4 py-2 rounded-lg hover:bg-(--primary-color) hover:text-white transition-all duration-300"
                          >
                            {label}
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpenTab(false)}
                  className="px-4 py-2 rounded-lg hover:bg-(--primary-color) hover:text-white transition-all duration-300"
                >
                  {label}
                </NavLink>
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
