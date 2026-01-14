declare var FlutterwaveCheckout: any;

import axios from "axios";

interface PayNowProps {
  email: string;
  phone: string;
  price: number;
  orderId: string;
}

const payNow = async ({ email, phone, price, orderId }: PayNowProps) => {
  
  // Create order in backend
  await axios.post("http://localhost:8000/create-order", {
    orderId,
    type: "ticket",
    items: [
      {
        name: price === 15000 ? "VIP Ticket" : "Standard Ticket",
        price: price,
        quantity: 1,
      },
    ],
    email,
    phone,
    amount: price,
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });


  //  Open Flutterwave modal
  FlutterwaveCheckout({
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: orderId,
    amount: price,
    currency: "NGN",
    customer: {
      email,
      phone_number: phone,
      name: "Guest User",
    },
    customizations: {
      title: "TXA-26",
      description: "Ticket order",
    },
  onclose: () => {
    console.log("Flutterwave modal closed — staying on page");
  },
  });
};

export default payNow;