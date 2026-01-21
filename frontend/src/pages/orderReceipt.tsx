import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore"; 
import type { OrderProps } from "../api/creatOrder";
import { useSearchParams } from "react-router-dom";

const OrderReceipt = () => {
  const [orderData, setOrderData] = useState<OrderProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams]=useSearchParams()

  useEffect(() => {
    const order_id = searchParams.get("tx_ref");
    
    if (!order_id) {
      setLoading(false);
      setError("Opps, are you sure you made this payemnt? if yes contact the TXA team");
      return;
    }

    console.log("Listening for Order:", order_id);

    //  Create a real-time listener
    const docRef = doc(db, "orders", order_id);
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as OrderProps;
        setOrderData(data);
        setLoading(false); // Stop loading once data arrives
      } 
    }, (err) => {
      console.error("Firestore error:", err);
      setLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="p-10 md:py-12 text-center flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-(--primary-color) rounded-full animate-spin"></div>
        <p>Confirming your payment details...</p>
      </div>
    );
  }

  if (error || !orderData) {
    return <div className="p-10 md:py-12 text-center text-red-500">{error || "Order not found."}</div>;
  }

  return (
    <div className="my-10 md:py-12 mx-4 md:mx-auto max-w-md p-6 border-0.5 border-(--primary-color) rounded-2xl shadow-xl bg-white">
      {orderData.status === "success" ? (
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl font-bold text-green-600">✅ Paid!</h1>
          <div className="bg-gray-50 p-6 rounded-xl text-left">
             <p className="text-sm text-gray-500 uppercase font-bold mb-2">Details</p>
             <p><strong>Order ID:</strong> {orderData.order_id}</p>
             <p><strong>Email:</strong> {orderData.email}</p>
             
             {orderData.wa_link && (
               <a 
                href={orderData.wa_link} 
                target="_blank" 
                className="mt-6 block w-full bg-(--primary-color) text-white text-center py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
               >
                 Get Receipt on WhatsApp
               </a>
             )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--primary-color)">Status: {orderData.status}</h1>
          <p className="text-gray-600 mt-2">We are processing your payment. Please wait or refresh.</p>
        </div>
      )}
    </div>
  );
};

export default OrderReceipt;
