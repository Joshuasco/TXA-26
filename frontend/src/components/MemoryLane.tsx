import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

function MemoryLane() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full relative overflow-hidden min-h-[370px] bg-(--primary-color) py-20 px-6 mt-5"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col  mx-auto gap-16 text-center ">
        <div className="flex flex-col gap-4  text-white text-center  ">
          <h2 className="text-4xl font-bold ">
            Let Us Take You Down Memory Lane
          </h2>
          <div className="">
            TECHX Africa26 was an unforgettable experience. A time was
            thoroughly had <br></br>and no be by cho cho cho, we have receipts.
          </div>
        </div>
        <a
          href="https://www.youtube.com/yourchannel/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex flex-row  mx-auto justify-center align-middle bg-white border-black hover:text-(--primary-color) cursor-pointer border-4 gap-4 p-4 "
        >
          <FaYoutube size={24} color="red" />
          <span>Watch 2025 Recap Here</span>
        </a>
      </div>
    </motion.div>
  );
}

export default MemoryLane;
