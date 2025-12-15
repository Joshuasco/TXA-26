import { motion } from "framer-motion";
import GetInvolvedCard from "./GetInvolvedCard";
import MediaOpinionCard from "./MediaOpinionCard";

function GetInvolved() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center md:items-start md:justify-between gap-8 md:gap-16 px-4 md:px-0 pt-12 md:pt-24"
    >
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-4 md:gap-8 w-full">

        {/* IMAGE CONTAINER (same height as right content) */}
        <div className="flex max-w-[782px] h-auto md:max-h-[588px] ">
          <img
            src="/get-involved.jpg"
            alt="Get involved"
            className="w-full h-full object-cover "
          />
        </div>

        {/* CONTENT COLUMN */}
        <div className="flex flex-col gap-2 lg:max-w-md">
          <h2 className="font-semibold text-3xl">How to get Involved</h2>

          <div className="flex flex-col gap-2">
            <GetInvolvedCard
              title={"Become a Sponsor"}
              description={
                "Boost your brand's visibility and connect with top tech leaders by sponsoring Tech X Africa. Gain prime exposure and network with key industry players"
              }
              button={"Become a Sponsor"}
            />

            <GetInvolvedCard
              title={"Become a Partner"}
              description={
                "Partner with Tech X Africa to showcase your expertise and influence the future of African tech. Collaborate with us to drive innovation across the continent"
              }
              button={"Partner with Us"}
            />

            <GetInvolvedCard
              title={"Through Community Partnership"}
              description={
                "Support local talent and make a lasting impact by becoming a community partner. Help shape the future of tech in Africa"
              }
              button={"Join Our Community"}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col gap-8 w-full max-w-[1274px] mx-auto">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold text-center text-4xl">
            What the Media is saying about Tech X Africa
          </h2>

          <div className="hidden md:flex items-center gap-2">
            <img src="prev-btn.png" alt="previous btn" />
            <img src="next-btn.png" alt="next button" />
          </div>
        </div>

        <div className="flex flex-row gap-8 overflow-x-auto overflow-y-hidden hide-scrollbar w-full max-w-full">
          <MediaOpinionCard
            heading={"Techcabal"}
            description={
              "ATC Africa Global Conference (TECHX Africa-The Future of Technology Africa Conference)"
            }
            color={"#FF8C0F"}
            text={"Media outlet"}
          />

          <MediaOpinionCard
            heading={"Techconomy"}
            description={
              "TechX Africa 2025: ATC Africa Leads Dialogue on Homegrown Solutions for Digital Growth"
            }
            color={"#FFB901"}
            text={"Media Partner"}
          />

          <MediaOpinionCard
            heading={"Dominion Television"}
            description={
              "ATC Africa Global Conference (TECHX Africa-The Future of Technology Africa Conference)"
            }
            color={"#3B0100"}
            text={"Media outlet"}
          />

          <MediaOpinionCard
            heading={"Dominion Television"}
            description={
              "ATC Africa Global Conference (TECHX Africa-The Future of Technology Africa Conference)"
            }
            color={"#3B0100"}
            text={"Media outlet"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default GetInvolved;
