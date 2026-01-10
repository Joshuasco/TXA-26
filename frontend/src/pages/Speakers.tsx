import { motion } from "framer-motion";
import SpeakerCard from "../components/SpeakerCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const speakers = [
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },
  { name: "AKINTUNDE SULTAN", role: "Co-Founder, ALT School Africa", imageSrc: "/speakers.jpg" },

  // Add more speakers here
];

export default function SpeakersPage() {
  return (
    <section className="w-full py-8 md:py-15">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Meet our 2026 speakers
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageSrc={speaker.imageSrc}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
