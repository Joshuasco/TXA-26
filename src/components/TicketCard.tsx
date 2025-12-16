import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TXA_logo from "../assets/images/TXA_logo.png";
import { FaScissors } from "react-icons/fa6"; // ✅ ADDED

export interface TicketCardProps {
  title: string;
  price: string;
  description: string;
  benefits: string[];
  bgColor?: string;
  onButtonClick?: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  price,
  description,
  benefits,
  bgColor = "bg-[#FFD6B0]",
  onButtonClick,
}) => {
      const ref = useRef(null);
      const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 60 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`
    relative w-[360px] rounded-t-2xl py-6 px-3 flex flex-col justify-between 
    ${bgColor}
    mask-ticket-sides mask-ticket-bottom
    `}
    >
      {/* ✅ Scissors Icon */}
      <FaScissors
        className="
          absolute right-[3px] top-[410px] rotate-[115deg]
           text-black/70 z-20
        "
        size={18}
      />

      {/* Top Section */}
      <div>
        {/* Logo */}
        <img
          src={TXA_logo}
          alt="Tech X Africa"
          className="h-10 mb-5"
        />

        {/* Title */}
        <h2 className="text-xl font-bold mb-2">
          {title}{" "}
          <span>
            ({price})
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm mb-6">
          {description}
        </p>

        {/* Benefits */}
        <ul className="space-y-3 mb-8">
          {benefits.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm"
            >
              <span>→</span>
              <span className="font-extrabold">{item}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          type="button"
          onClick={onButtonClick}
          className="bg-(--primary-color) text-white py-2 px-4 hover:opacity-90 transition"
        >
          Buy Ticket
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        {/* Perforation */}
        <div className="border-t border-dashed border-black my-5" />

        {/* Barcode */}
        <div className="h-10 w-full bg-[repeating-linear-gradient(90deg,#000,#000_2px,transparent_2px,transparent_4px)] mb-2" />

        <p className="text-xs text-black">
          Tech X Africa.com
        </p>
      </div>
    </motion.div>
  );
};

export default TicketCard;
