import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import db from "../firebase/firebaseConfig";

export const useOrderListener = (
  orderId: string | null,
  onSuccess: () => void,
  onFailure: () => void
) => {
  useEffect(() => {
    if (!orderId) return;

    const ref = doc(db, "orders", orderId);

    const unsubscribe = onSnapshot(ref, (snap) => {
      if (!snap.exists()) return;

      const { status } = snap.data();

      if (status === "success") {
        onSuccess();
        unsubscribe();
      }

      if (status === "failed") {
        onFailure();
        unsubscribe();
      }
    });

    return () => unsubscribe();
  }, [orderId]);
};
