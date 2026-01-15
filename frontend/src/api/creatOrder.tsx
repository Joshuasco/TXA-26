import axios  from "axios";

export interface Item {
    name:string;
    price: number;
    quantity:number;
}

export interface OrderProps{
    order_id: string;
    type: string;
    items:Item[];
    amount:number;
    phone:string;
    email:string;
    status?:string,
    wa_link?: string,
}


// Create order api request in backend
const createOrder = async (order:OrderProps) => {
  const  create_order_url = import.meta.env.VITE_CREATE_ORDER_URL
  const res = await axios.post(create_order_url, 
    order, {
    headers: { "Content-Type": "application/json" }
  });
  return res.data;
}
export default createOrder;
