import EventSessionCard from "./EventSessionCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="flex flex-col mx-4 md:mx-auto max-w-full overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.section
        className="flex flex-col items-center justify-center md:justify-start py-3 md:py-5 gap-10 relative h-auto md:h-[695px] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-sm md:text-xl font-normal md:w-[680px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Welcome to Tech X Africa , an annual event that empowers young African
          tech talent by fostering knowledge exchange and capacity building in
          Africa By connecting professionals and novices from across the
          continent, TechX Africa strengthens the resilience and growth of
          Africa's entire tech landscape
        </motion.h2>
        <motion.img
          src="/about-img.png"
          alt="about image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        {/* Bounce animated images */}
        <motion.div
          className="absolute w-[130px] h-[130px] top-10 left-0 hidden md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <img src="/about-event-img1.png" alt="About event image" />
        </motion.div>
        <motion.div
          className="absolute w-[130px] h-[130px] bottom-10 right-20 hidden md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <img src="/about-event-img2.png" alt="About event image" />
        </motion.div>
        <motion.div
          className="absolute w-[130px] h-[130px] top-20 right-10 hidden md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <img src="/about-event-img3.png" alt="About event image" />
        </motion.div>
        <motion.div
          className="absolute w-[130px] h-[130px] bottom-5 left-20 hidden md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img src="/about-event-img4.png" alt="About event image" />
        </motion.div>
      </motion.section>
      <motion.section
        className="flex flex-col items-start justify-center md:justify-start py-3 md:py-5 gap-10 relative h-auto md:h-[695px] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex flex-col gap-8 w-full max-w-[1274px] mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="hidden md:block"></div>
            <h2 className="font-semibold text-center text-4xl">
              {" "}
              What to expect at Tech X Africa 2026
            </h2>
            <div className="flex items-center gap-2">
              <img src="prev-btn.png" alt="previous btn" />
              <img src="next-btn.png" alt="next button" />
            </div>
          </div>

          {/* Card Row: Only this scrolls horizontally */}
          <div className="flex flex-row gap-8 overflow-x-auto overflow-y-hidden hide-scrollbar w-full max-w-full">
            <EventSessionCard
              heading={" Break-Out Session"}
              description={
                " Attend Different Session on  different Learning Track"
              }
              color={"#FF8C0F"}
              imageSrc={"/event-session-img-1.jpg"}
            />
            <EventSessionCard
              heading={" Keynotes"}
              description={
                "Focus on future tech trends (Blockchain, Web3)"
              }
              color={"#FFB901"}
              imageSrc={"/event-session-img-2.jpg"}
            />
            <EventSessionCard
              heading={"Networking"}
              description={
                " Highlight opportunities to connect with others"
              }
              color={"#3B0100"}
              imageSrc={"/event-session-img-3.jpg"}
            />
            <EventSessionCard
              heading={" Game and Picture Sesion"}
              description={
                "Highlight opportunities to connect with others"
              }
              color={"#D93429"}
              imageSrc={"/event-session-img-3.jpg"}
            />
          </div>

          <div></div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[1274px] mx-auto h-[685px]">
          <h2 className="font-semibold text-center text-4xl">
            7 Learning Tracks
          </h2>
        </div>
  </motion.section>
    </motion.section>
  );
}

export default About;
