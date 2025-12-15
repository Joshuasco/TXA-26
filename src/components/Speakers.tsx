import { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SpeakerSlider from "./SpeakerSlider";
import SpeakerImageSlide from "./SpeakerImageSlide";
import { motion } from "framer-motion";

const Speakers = () => {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const speakerSlides = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    component: <SpeakerSlider />,
  }));

  const detailSlides = Array.from({ length: 5 }, () => ({
    img: "/speaker.jpg",
    name: "Joyce Abraham",
    desc: "Senior product designer at Cleava",
  }));

  const [activeDot, setActiveDot] = useState(0);

  // Initialize SPLIDE
  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: false,

        // Responsive breakpoints
        perPage: 5,
        breakpoints: {
          1024: { perPage: 3 }, // md
          640: { perPage: 2 }, // sm
        },
      });

      splide.mount();
    }
  }, []);

  // Handle scroll position for dots
  const handleScroll = () => {
    if (!detailsRef.current) return;

    const scrollLeft = detailsRef.current.scrollLeft;
    const width = detailsRef.current.clientWidth;

    const index = Math.round(scrollLeft / width);
    setActiveDot(index);
  };

  return (
    <motion.div
      className="flex flex-col gap-6 w-full max-w-[1274px] mx-auto mt-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* SPLIDE SLIDER */}
      <div className="splide w-full px-4 md:px-0" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {speakerSlides.map((slide) => (
              <li
                className="splide__slide flex items-center justify-center"
                key={slide.id}
              >
                {slide.component}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SPEAKER DETAILS SCROLL SECTION */}
      <div
        ref={detailsRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto hide-scrollbar flex-nowrap w-full snap-x snap-mandatory"
      >
        {detailSlides.map((speaker, index) => (
          <div className="shrink-0 snap-center" key={index}>
            <SpeakerImageSlide
              imageSrc={speaker.img}
              name={speaker.name}
              description={speaker.desc}
            />
          </div>
        ))}
      </div>

      {/* DOTS FOR SPEAKER DETAILS */}
      <div className="flex flex-col md:flex-row self-center justify-center md:justify-between items-center w-full px-4 md:px-0 gap-3">

        {/* Left placeholder for md screens */}
        <div className="hidden md:flex"></div>

        {/* Center dots */}
        <div className="flex items-center justify-center gap-2">
          {detailSlides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeDot ? "bg-[#F63A0A]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>

        {/* Next / Prev images (md and up only) */}
        <div className="hidden md:flex justify-end gap-2">
          <img src="/next-btn.png" alt="next button" />
          <img src="/prev-btn.png" alt="previous button" />
        </div>
      </div>
    </motion.div>
  );
};

export default Speakers;
