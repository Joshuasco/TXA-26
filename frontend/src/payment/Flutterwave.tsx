import type { OrderProps } from "../api/creatOrder";

//Opens flutterwave payment modal
const payNow = ({ order_id, amount, email, phone }: OrderProps) => {
  // @ts-ignore
  FlutterwaveCheckout({
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: order_id,
    amount,
    currency: "NGN",
    customer: {
      email,
      phone_number: phone,
      name: "Guest User",
    },
    redirect_url:  import.meta.env.VITE_REDIRECT_URL,
    customizations: {
      title: "TXA-26",
      description: "Checkout",
    },
    // onclose: () => {},
  });
};

export default payNow;
