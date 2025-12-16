import TicketCard from "../components/TicketCard";

const GetTicket = () => {
  return (
    <div className="mb-10"> 
        <div className="flex flex-col items-center text-center px-2 gap-2 mb-10">
            <h1 className="font-extrabold text-3xl">
                Secure your Spot at Tech X Africa  2026
            </h1>
            <span>
                Seats are limited! Secure your spot before they sell out and miss out on this year’s biggest lineup
            </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            <TicketCard
                title="STANDARD"
                price="NGN 5,000"
                bgColor="bg-[#FFD6B0]"
                description="Your gateway to the core Tech X Africa 2026 experience – learn, connect, and grow."
                benefits={[
                "Access to all keynote sessions",
                "Entry into all 7 learning tracks",
                "Event materials & digital resources",
                "Access to panel discussions & fireside chats",
                ]}
                onButtonClick={() => console.log("Standard Ticket")}
            />

            <TicketCard
                title="VIP"
                price="NGN 15,000"
                bgColor="bg-[#EAD6D3]"
                description="Go beyond the standard – enjoy the ultimate Tech X Africa experience with VIP privileges."
                benefits={[
                "All Standard Ticket benefits",
                "Front-row seating at keynote sessions",
                "Meet-and-greet access speakers",
                "Premium welcome package & event merch",
                ]}
                onButtonClick={() => console.log("VIP Ticket")}
            />
        </div>
    </div>
  );
};

export default GetTicket;
