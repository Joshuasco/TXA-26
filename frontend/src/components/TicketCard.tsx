import React from "react";
import { useRef } from "react";
import Barcode from "react-barcode";
import { motion, useInView } from "framer-motion";
import TXA_logo from "../assets/images/TXA_logo.png";
import { FaScissors } from "react-icons/fa6"; 
import { HiArrowLongRight } from "react-icons/hi2";

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
    relative w-[360px] rounded-t-2xl py-6 px-4 flex flex-col justify-between 
    ${bgColor}

    `}
    >
      {/* ✅ Scissors Icon */}
      <FaScissors
        className="
          absolute right-[3px] top-[405px] rotate-[125deg]
           text-black/70 z-20
        "
        size={22}
      />
      {/* sides semi-circle cut */}
    <div className="absolute top-[400px] left-[-22px] bg-white h-10 w-10 rounded-full"></div>
    <div className="absolute top-[400px] right-[-22px] bg-white h-10 w-10 rounded-full"></div>
        {/* bttom semi-circle cut */}
    <div className="flex absolute bottom-[-10px] gap-3 left-[10px] ">
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
        <div className=" bg-white h-5 w-5 rounded-full"></div>
    </div>

      {/* Top Section */}
      <div>
        {/* Logo */}
        <img
          src={TXA_logo}
          alt="Tech X Africa"
          className="h-10 mb-5"
        />

        {/* Title */}
        <h2 className="text-xl font-extrabold mb-2">
          {title}{" "}
          <span>
            {price}
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
              className="flex items-start  text-sm"
            ><div className="flex items-center gap-2">
              <span><HiArrowLongRight size={22}/></span>
              <span className="font-extrabold">{item}</span>
            </div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          type="button"
          onClick={onButtonClick}
          className="bg-(--primary-color) text-white  md:mt-0 py-2 px-4 hover:opacity-90 transition"
        >
          Buy Ticket
        </button>
      </div>

      {/* Footer */}
      <div className="  mt-6 text-center px-3">
        {/* Perforation */}
        <div className=" border-t border-dashed border-black mt-4.5 mb-3" />

        {/* Barcode */}
        <div 
        className="flex  justify-center text-sm">
        <Barcode
        value="https://txa-26.vercel.app/"
        format="CODE128"
        renderer="svg"
        width={0.6}
        height={45}
        background="transparent"
        lineColor="#000"
        displayValue={false}
      />
      </div>
        <p className="text-xs mt-[-10px]  text-black">
          Tech X Africa.com
        </p>
      </div>
    </motion.div>
  );
};

export default TicketCard;
