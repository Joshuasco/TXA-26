import { useState, useEffect } from "react";
import TicketCard from "../components/TicketCard";
import payNow from "../components/payment/flutterwave";

import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig"; 

export interface ContactForm {
  email: string;
  phone: string;
  price: number;
}

const GetTicket = () => {
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);

  const [form, setForm] = useState<ContactForm>({
    email: "",
    phone: "",
    price: 5000,
  });

  // 🔹 Debug price change (keep as-is)
  useEffect(() => {
    console.log("Price changed to:", form.price);
  }, [form.price]);


//   useEffect(() => {
//   const savedId = localStorage.getItem("pendingOrderId");
//     if (savedId) {
//         console.log("Restoring session for order:", savedId);
//         setCurrentOrderId(savedId);
//     }
//     }, []);


  // 🔹  Listen for backend-verified payment
  useEffect(() => {
  if (!currentOrderId) return;

  const ref = doc(db, "orders", currentOrderId);
  const unsubscribe = onSnapshot(ref, (snap) => {
    // if (!snap.exists()) return;
    if (!snap.exists()) {
      console.log("Waiting for backend to create order document...");
      return;
    }

    const data = snap.data();
    console.log("Current Firestore Data:", data);
    if (data.status === "success") {
      alert("Payment successful! Click OK to open your receipt on WhatsApp.");
      if (data.wa_link) window.open(data.wa_link, "_blank");
      unsubscribe()
    }
    if (data.status === "failed") {
        alert("Payment failed ❌! Click OK to open your receipt on WhatsApp.");
        if (data.wa_link) window.open(data.wa_link, "_blank");
        setCurrentOrderId(null);
        unsubscribe()
      }

  });

  return () => 
        // CLEAN UP: Clear storage and state so the alert doesn't keep popping up
        // localStorage.removeItem("pendingOrderId");
        unsubscribe();
}, [currentOrderId]);


  

  // 🔹 Handles payment start
  const handlePayment = () => {
    const orderId = `ORD-${Date.now()}`;

    console.log("form uploaded details:", form);
    // Save to localStorage so it survives a reload
    // localStorage.setItem("pendingOrderId", orderId);
    setCurrentOrderId(orderId);

    payNow({
      ...form,
      orderId, // passed to flutterwave + backend
    });
  };

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
      {showForm && (
        <div className="absolute inset-0">
          <div className="flex justify-end items-end w-3/4 mx-auto">
            <button
              className="flex justify-center items-center w-10 h-10 bg-gray-200 mt-48 right-0 rounded-full"
              onClick={() => setShowForm(false)}
            >
              x
            </button>
          </div>

          <div className="flex flex-col mt-4 bg-white border-2 gap-4 rounded-2xl p-4 w-3/4 mx-auto border-(--primary-color)">
            <div>
              Kindly fill in your details below to complete your order
            </div>

            <hr className="border-gray-200" />

            <div className="flex flex-col">
              <label>Email:</label>
              <input
                type="text"
                placeholder="johndoes@gmail.com"
                value={form.email}
                className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label>WhatsApp No:</label>
              <input
                type="text"
                placeholder="2347054974199"
                value={form.phone}
                className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

            <button
              className="bg-(--primary-color) rounded-xl p-2 text-white"
              onClick={handlePayment}
            >
              Make Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetTicket;
