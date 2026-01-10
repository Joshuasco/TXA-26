import { useEffect, useState } from "react";
import zelda from "../assets/images/zelda.png";
// import "@splidejs/splide/css";
import "@splidejs/splide/dist/css/splide.min.css";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";

import { motion, wrap } from "framer-motion";

import Splide, { Splide as SplideType } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link, Links } from "react-router-dom";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6];

const Hero = () => {
  const [page, setPage] = useState(0);
  const slideIndex = wrap(0, slides.length, page);

  const partnerLogo: string[] = Array(9).fill(zelda);

  useEffect(() => {
    const splide: SplideType = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 5,
      gap: "5rem",
      breakpoints: {
        1024: {
          perPage: 7,
          gap: "1.5rem",
        },
        768: {
          perPage: 4,
          gap: "1.5rem",
        },
        640: {
          perPage: 2,
          gap: "1rem",
        },
      },
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount({ AutoScroll });
    return () => {
      splide.destroy(true); //cleanup
    };
  }, []);

  // background image slider useEffect to auto - advance every
  // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => prevPage + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Image Slider */}
      <div className=" relative flex justify-start items-center w-full overflow-hidden h-[100vh] md:h-[60vh] lg:h-[100vh] md:rounded-xl">
        <motion.div
          key={slideIndex}
          className="absolute w-full h-full inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img
            src={slides[slideIndex]}
            className="w-full h-full object-cover object-center"
            alt="Hero Slide"
          />
        </motion.div>
        <div className="absolute inset-0 z-[1] bg-black/50"></div>

        {/* Hero Conten */}
        <div className="flex flex-col items-center md:items-start justify-beteen md:justify-center lg:justify-between text-center md:text-left h-[60vh] px-12 absolute z-[2]">
          <div className="flex flex-col gap-8 text-white">
            <p className="font-normal text-2xl "> Tech X Africa 2026 </p>

            <h2 className="font-bold text-5xl md:text-5xl md:w-xl">
              BEYOND THE BOX, INNOVATION AND CREATIVITY
            </h2>
            {/* <button className="bg-[#F63A0A] w-full md:w-[40%] py-3 md:py-4 px-8 flex items-center justify-center cursor-pointer text-white hover:bg-[#e63500] transition">
              Get Your Ticket{" "}
            </button> */}
            <Link className="bg-[#F63A0A] w-full md:w-[40%] py-3 md:py-4 px-8 flex items-center justify-center cursor-pointer text-white hover:bg-[#e63500] transition"
             to="/get-your-ticket" >Get Your Ticket</Link>
          </div>

          <div className="mt-20 md:mt-12">
            <p className="text-white">
              Sat 9th May, 2026 . International Conference Center UI
            </p>
          </div>
        </div>
      </div>

      <div className="flex py-12">
        <div className="bg-[#FFB901] md:py-2 md:px-8 w-full md:w-[17%] flex items-center justify-center">
          <h3 className="text-black font-bold text-sm py-3 w-full">
            Our 2026 Sponsors
          </h3>
        </div>

        {/* Splider Slider */}
        <div className="splide flex items-center justify-center w-[80%]">
          <div className="splide__track">
            <div className="splide__list">
              {partnerLogo.map((logo, index) => (
                <div className="splide__slide flex" key={index}>
                  <img
                    src={logo}
                    alt={`Sponsor logo ${index}`}
                    className="h-16 object-contain space-x-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
