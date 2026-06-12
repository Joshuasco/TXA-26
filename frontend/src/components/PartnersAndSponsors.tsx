import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; //newly added
import image1 from "../assets/partnersAndSponsors/pouchers.png";
import image2 from "../assets/partnersAndSponsors/cleva.jpg";
import image3 from "../assets/partnersAndSponsors/enforca.jpg";
import image4 from "../assets/partnersAndSponsors/cartwey.png";
import image5 from "../assets/partnersAndSponsors/1app.png";
import image6 from "../assets/partnersAndSponsors/microsoft.png";
import image7 from "../assets/partnersAndSponsors/vaultify.jpg";
import image8 from "../assets/partnersAndSponsors/Hacktales.png";
import image9 from "../assets/partnersAndSponsors/stallion.jpg";
import image10 from "../assets/partnersAndSponsors/cgchub.jpg";
import image11 from "../assets/partnersAndSponsors/success.png";
import image12 from "../assets/partnersAndSponsors/dfm.png";

const sponsors = [
  { id: 1, image: image1, alt: "pouchers" },
  { id: 2, image: image2, alt: "cleva" },
  { id: 3, image: image3, alt: "Enforca" },
  { id: 4, image: image4, alt: "cartwey" },
  { id: 5, image: image5, alt: "1app" },
  { id: 6, image: image6, alt: "microsoft" },
  { id: 7, image: image7, alt: "vaultify" },
  { id: 8, image: image8, alt: "hacktales" },
  { id: 9, image: image9, alt: "stallion" },
  { id: 10, image: image10, alt: "cgchub" },
  { id: 11, image: image11, alt: "success" },
  { id: 12, image: image12, alt: "dfm" },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const item: Variants = {
  //added varaints type for ease animation
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.58, 1],
    },
  },
};

const titleAnimation: Variants = {
  //added varaints type for ease animation
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0, 0, 0.58, 1],
    },
  },
};

export default function PartnersAndSponsors() {
  return (
    <motion.div
      className="flex flex-col items-center py-12 md:py-20 bg-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Section Title */}
        <motion.h2
          variants={titleAnimation}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900"
        >
          Our Previous Partners and Sponsors
        </motion.h2>

        {/* Sponsors Grid */}
        <div className="w-full">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 bg-[#F5F5F5]"
            variants={container}
          >
            {sponsors.map((sponsor, idx) => {
              let borderClasses = " box-border overflow-hidden";
              // Responsive border logic
              // sm: 2 columns, so border-r on first col, border-b except last row
              // md/lg: 3/4 columns, border-r on all but last col, border-b except last row
              const cols =
                window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4;
              const rows = Math.ceil(sponsors.length / cols);
              const row = Math.floor(idx / cols);
              const col = idx % cols;
              // Border-right: only on first col for sm, all but last col for md/lg
              if (cols === 2) {
                if (col === 0) borderClasses += " border-r";
              } else {
                if (col < cols - 1) borderClasses += " border-r ";
              }
              // Border-bottom: all but last row
              if (row < rows - 1) borderClasses += " border-b";
              return (
                <motion.div
                  key={sponsor.id}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center p-4 md:p-6 bg-[#F5F5F5]${borderClasses}`}
                >
                  <motion.img
                    src={sponsor.image}
                    alt={sponsor.alt}
                    className="w-full h-auto max-h-16 object-contain"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
