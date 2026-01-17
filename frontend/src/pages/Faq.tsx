import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface faqData {
  question: string;
  answers: string;
  id: number;
}

const faqQuestions: faqData[] = [
  {
    id: 1,
    question: "What is Tech X Africa26?",
    answers: `TECHX Africa is more than just a conference—it's the definitive movement for empowering the next wave of African tech leaders. As a catalyst for the continent's digital transformation, we are building the most electrifying and impactful tech event in Africa.`,
  },
  {
    id: 2,
    question: `When & where will TECHX Africa26 take place?`,
    answers: `TECHX Africa26  will be held between 8th -9th May 2025, with each day's session kickstarting by 9:00 AM prompt at the International Conference University of Ibadan`,
  },
  {
    id: 3,
    question: `What should I expect at TECHX Africa 2026?`,
    answers: `TECHX Africa is elevating its experience, promising to be bigger and better than ever! While still featuring key learning opportunities—connecting with industry experts, networking with peers, and gaining insights into the latest tech trends—this year also offers an unforgettable experience, packed with fun, relaxation, and memories to last a lifetime.`,
  },
  {
    id: 4,
    question: `What if I register and can't attend any more?`,
    answers: `Tickets are non-refundable for TechX Africa26 and not transferable. Each ticket is tied to a specific attendee and cannot be transferred to another person.`,
  },
  {
    id: 5,
    question: `Is there a code of conduct for event attendees?`,
    answers: `Yes. All attendees are required to adhere to our Community Conduct Guidelines. We are dedicated to maintaining a safe, inclusive, and respectful environment for everyone. Please ensure you review the full guidelines here: \n [Community Guidelines - https://bit.ly/atcafricacodeofconduct`,
  },
  {
    id: 6,
    question: `What types of sessions will be featured at TECHX Africa?`,
    answers: `The summit will host engaging sessions covering key areas in technology, including Open Source, Building for Web3, Creative Design, Women in Tech,  Community & Collaboration.`,
  },
  {
    id: 7,
    question: `How can I get updates and announcements about TECHX Africa26?`,
    answers: `To get updates and announcements about TECHX Africa26, follow our official social media channels and regularly check the event website. You can also subscribe to our newsletter for the latest details on speakers, sessions, and the event itself. Find us on social media using the handle @ATC AfricaHq.`,
  },
  {
    id: 8,
    question: `Can I buy tickets for other people?`,
    answers: `Absolutely! You can purchase tickets for others, but keep in mind they will need to register for the event separately to claim their tickets.`,
  },
  {
    id: 9,
    question: `Hotel & Reservation`,
    answers: `Can i reserve accommodation for TECHX Africa in Ibadan \n Sure you can, if you need accommodation TECHX Africa26, you can send us a message on +234 907 902 1044`,
  },
];

const Faq = () => {
  const [isOpenId, setIsOpenId] = useState<number | null>(null);

  const openFaq = (id: number) => {
    setIsOpenId(isOpenId === id ? null : id);
  };
  return (
    <div className="py-12 md:py-12 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 md:gap-1 items-center">
          <h3 className="font-black text-center">FAQs</h3>
          <h1 className="font-black text-3xl md:text-4xl text-center">
            {" "}
            Got Questions? We've Got Answers
          </h1>
          <p className="text-center">
            {" "}
            Find quick, clear answers to the most common questions about
            attending Tech X Africa
          </p>
        </div>

        {/* The Questions Section */}
        <div className="flex flex-col items-center ">
          {faqQuestions.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col bg-[#F63A0A] w-full md:w-[80%] my-2 md:my-4 border-r-transparent border-t-transparent border-b-transparent rounded-tl-xl rounded-bl-xl pl-2"
            >
              <div
                onClick={() => openFaq(item.id)}
                className="bg-[#F5F5F5] w-full h-full py-8 px-4 rounded-tl-lg rounded-bl-lg"
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h1 className="font-bold md:text-xl">{item.question}</h1>

                  <button
                    onClick={() => openFaq(item.id)}
                    className="bg-[#F63A0A] rounded-full p-1"
                  >
                    <motion.div
                      animate={{ rotate: isOpenId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <MdOutlineKeyboardArrowDown color="white" size={25} />
                    </motion.div>
                  </button>
                </div>
                <AnimatePresence>
                  {isOpenId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {item.answers}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
