import { motion } from "framer-motion";

function PastEvent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col mx-4 md:mx-auto max-w-[1300px] overflow-hidden pt-12 md:pt-30 md:h-[750px]"
    >
      {/* TEXT CONTENT */}
      <div className="flex flex-col gap-3 max-w-xl z-30">
        <h3 className="text-3xl font-semibold">2025 RECAP</h3>
        <p className="font-light text-lg">
          From bold ideas to groundbreaking innovations, here’s what went down
          at Tech X Africa 2025. A look back at the insights and impact shaping
          Africa’s tech future.
        </p>

        <button className="bg-[#F63A0A] text-white text-sm px-6 py-3 mt-4 w-max border">
          View Event Highlights
        </button>
      </div>

      {/* DESKTOP IMAGE COLLAGE */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
          },
        }}
        className="hidden lg:block"
      >
        {/* IMAGE 1 */}
        <motion.img
          variants={{ hidden: { y: 60 }, show: { y: 0 } }}
          src="/past-events-img-1.jpg"
          alt="Past event"
          className="absolute top-15 right-32 w-[360px] h-[280px] object-cover rounded-xl border-4 rotate-[8deg] shadow-xl z-30"
        />

        {/* IMAGE 2 */}
        <motion.img
          variants={{ hidden: { y: 60 }, show: { y: 0 } }}
          src="/past-events-img-2.jpg"
          alt="Past event"
          className="absolute top-[350px] right-24 w-[360px] h-[280px] object-cover rounded-xl border-4 rotate-[10deg] shadow-xl z-20"
        />

        {/* IMAGE 3 */}
        <motion.img
          variants={{ hidden: { y: 60 }, show: { y: 0 } }}
          src="/past-events-img-3.jpg"
          alt="Past event"
          className="absolute bottom-30 left-106 w-[360px] h-[280px] object-cover rounded-xl border-4 rotate-[-10deg] shadow-xl z-10"
        />

        {/* IMAGE 4 */}
        <motion.img
          variants={{ hidden: { y: 60 }, show: { y: 0 } }}
          src="/past-events-img-4.jpg"
          alt="Past event"
          className="absolute bottom-25 left-10 w-[360px] h-[280px] object-cover rounded-xl border-4 rotate-[12deg] shadow-xl"
        />
      </motion.div>

      {/* MOBILE & TABLET VERSION - DIAGONAL STACK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:hidden flex items-center justify-center mt-10 relative h-[420px]"
      >
        {/* Mobile images stack diagonally */}
        <img
          src="/past-events-img-1.jpg"
          className="absolute  w-56 md:w-64 h-40 md:h-48  object-cover rounded-lg border-4 rotate-[-8deg] shadow-lg top-4 left-10 md:rotate-[4deg] md:top-6 md:left-10"
        />
        <img
          src="/past-events-img-2.jpg"
          className="absolute w-56 md:w-64 h-40 md:h-48 object-cover rounded-lg border-4 rotate-[12deg] shadow-lg top-24 right-6 md:rotate-[4deg] md:top-0 md:right-6"
        />
        <img
          src="/past-events-img-3.jpg"
          className="absolute  w-56 md:w-64 h-40 md:h-48  object-cover rounded-lg border-4 rotate-[-12deg] shadow-lg bottom-10 left-5 md:bottom-5 md:left-45"
        />
        <img
          src="/past-events-img-4.jpg"
          className="absolute  w-56 md:w-64 h-40 md:h-48  object-cover rounded-lg border-4 rotate-[10deg] shadow-lg bottom-0 right-8 md:bottom-5 md:right-8"
        />
      </motion.div>
    </motion.div>
  );
}

export default PastEvent;
