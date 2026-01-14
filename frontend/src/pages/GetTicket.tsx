import { useState, useEffect } from "react";
import TicketCard from "../components/TicketCard";
// import payNow from "../components/payment/flutterwave";
import CheckoutContactForm from "../components/checkoutContactForm";
import type { OrderProps } from "../api/creatOrder";
import createOrder from "../api/creatOrder";
import payNow from "../payment/Flutterwave";


export interface ContactForm {
  email: string;
  phone: string;
  price: number;
}

const GetTicket = () => {
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [form, setForm] = useState<ContactForm>({
    email: "",
    phone: "",
    price: 5000,
  });

  // 🔹 Debug price change (keep as-is)
  useEffect(() => {
    console.log("Price changed to:", form.price);
  }, [form.price]);



  

  // 🔹 Handles payment start
   const handlePayment = async () => {
    const order: OrderProps = {
      order_id: `ORD-${Date.now()}`,
      type: "ticket",
      email: form.email,
      phone: form.phone,
      amount: form.price,
      items: [
        {
          name: form.price === 15000 ? "VIP Ticket" : "Standard Ticket",
          price: form.price,
          quantity: 1,
        },
      ],
    };
//create Order request on the backend
    const create_order = createOrder(order)
    console.log('created order status = ', create_order)

    //call flutterwavecheckout payment
    payNow(order)
  }
  // const handlePayment = () => {
  //   const order_id = `ORD-${Date.now()}`;

  //   console.log("form uploaded details:", form);
  //   // Save to localStorage so it survives a reload
  //   localStorage.setItem("pendingorder_id", order_id);
  //   // setCurrentorder_id(order_id);
    

  //   payNow({
  //     ...form,
  //     order_id, // passed to flutterwave + backend
  //     status:"pending"
  //   });
  // };

  return (
    <div className="my-10 mx-4">
      <div className="flex flex-col items-center text-center px-2 gap-2 mb-10">
        <h1 className="font-extrabold text-3xl">
          Secure your Spot at Tech X Africa 2026
        </h1>
        <span>
          Seats are limited! Secure your spot before they sell out and miss out
          on this year’s biggest lineup
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <TicketCard
          title="STANDARD"
          price="{NGN 5,000}"
          bgColor="bg-[#FFD6B0]"
          description="Your gateway to the core Tech X Africa 2026 experience – learn, connect, and grow."
          benefits={[
            "Access to all keynote sessions",
            "Entry into all 7 learning tracks",
            "Event materials & digital resources",
            "Access to panel discussions & fireside chats",
          ]}
          onButtonClick={() => {
            setForm((prev) => ({ ...prev, price: 5000 }));
            setShowForm(true);
          }}
        />

        <TicketCard
          title="VIP"
          price="{NGN 15,000}"
          bgColor="bg-[#EAD6D3]"
          description="Go beyond the standard – enjoy the ultimate Tech X Africa experience with VIP privileges."
          benefits={[
            "All Standard Ticket benefits",
            "Front-row seating at keynote sessions",
            "Meet-and-greet access speakers",
            "Premium welcome package & event merch",
          ]}
          onButtonClick={() => {
            setForm((prev) => ({ ...prev, price: 15000 }));
            setShowForm(true);
          }}
        />
      </div>

      {/* Contact Form */}
     {/* 🔹 Extracted Contact Form */}
      {showForm && (
        <CheckoutContactForm
          email={form.email}
          phone={form.phone}
          onEmailChange={(email) =>
            setForm((prev) => ({ ...prev, email }))
          }
          onPhoneChange={(phone) =>
            setForm((prev) => ({ ...prev, phone }))
          }
          onSubmit={handlePayment}
          onClose={() => setShowForm(false)}
        />
      )}//end form

    </div>
  );
};

export default GetTicket;
