export const createOrder = async (order: OrderPayload) => {
  return fetch("http://localhost:8000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
};
