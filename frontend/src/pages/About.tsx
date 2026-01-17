import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <section className="w-full py-8 md:py-15">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center px-6 space-y-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          About Tech X Africa
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          Everything you need to know about Tech X Africa, from our goals to the
          impact we are creating across Africa’s tech ecosystem.
        </p>
      </motion.div>

      {/* Content Blocks */}
      <div className="mt-16 space-y-20">
        {/* Block 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto px-6"
        >
          {/* Accent Background — RIGHT & BELOW */}
          <div className="absolute top-4 -bottom-4 right-1  rounded-lg bg-[#F63A0A] -z-10 w-[85%] md:w-[95%] border-4" />

          {/* Card */}
          <div className="bg-white rounded-xl border-3 shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="/about-page-img1.png"
                alt="What we are about"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10 space-y-4">
              <p className="uppercase text-sm font-semibold text-gray-500 tracking-wider">
                What We Are About
              </p>
              <p className="text-gray-700 leading-relaxed">
                TECHX Africa is more than just a conference—it is the definitive
                movement for empowering the next wave of African tech leaders.
                As a catalyst for the continent's digital transformation, we are
                building one of the most impactful tech events in Africa. TechX
                Africa strengthens the resilience and growth of Africa's entire
                tech landscape.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto px-6"
        >
          {/* Accent Background — RIGHT & BELOW */}
          <div className="absolute top-4 -bottom-4 right-1 rounded-lg bg-[#F63A0A] -z-10 w-[85%] md:w-[95%] border-4" />

          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col-reverse md:flex-row border-3">
            <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10 space-y-4">
              <p className="uppercase text-sm font-semibold text-gray-500 tracking-wider">
                Our Vision
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be the premier platform where the future of
                technology across every niche is debated, defined, and
                accelerated. We equip African talent with the insights and
                capacity to innovate at the pace of global technological
                advancement—celebrating value-driven solutions across diverse
                sectors.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="/about-page-img2.jpg"
                alt="Our vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
