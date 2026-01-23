import { Plus, Minus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CheckoutContactForm from "./checkoutContactForm";
import payNow from "../payment/Flutterwave";
import createOrder,  {type OrderProps } from "../api/creatOrder";


interface ContactFormProps {
    email: string,
    phone: string,
}

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  quantity: number;
};

type ShoppingCartProps = {
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onBackToSwag: () => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ShoppingCart({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onBackToSwag,
}: ShoppingCartProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState<Boolean>(false);
  const [contactForm, setContactForm] = useState<ContactFormProps>({
    email: "",
    phone: "",
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  //  Handles payment
     const handleMakePayment = async () => {
      const order: OrderProps = {
        order_id: `ORD-${Date.now()}`,
        type: "Swag Order",
        email: contactForm.email,
        phone: contactForm.phone,
        amount: totalPrice,
        items: cart,
      };
     setIsLoading(true)
    try{
      //create Order request on the backend
      const create_order = await createOrder(order);
      console.log('created order status = ', create_order)
      setIsLoading(false)
      //call flutterwavecheckout payment
      payNow(order)
      } catch(error){
        alert(`Payment initialization failed,  ${error}`)
        setIsLoading(false)
      }
    }


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
    >
      <div className="flex items-center justify-center">
        <h2 className="text-3xl md:text-[44px] font-bold">Shopping Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-2 text-lg md:text-xl font-bold uppercase">
                    Product ({cart.length})
                  </th>
                  <th className="text-center py-4 px-2 text-lg md:text-xl font-bold uppercase ">
                    Quantity
                  </th>
                  <th className="text-right py-4 px-2 text-lg md:text-xl font-bold uppercase">
                    Price
                  </th>
                  <th className="w-16"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-6 px-2">
                      <div className="flex items-center gap-2 w-max">
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          className="w-20 h-20 md:w-24 md:h-24 object-cover bg-[#EBEAEB] border-2"
                        />
                        <div>
                          <p className="font-bold text-lg">{item.name}</p>
                          <p className="text-gray-600 text-sm truncate w-[100px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className=" w-max ml-2">
                      <div className="relative">
                        <div className="absolute top-2 left-1 -bottom-1 bg-[#F63A0A] -z-10 w-full" />
                        <div className="bg-white border-3 shadow-lg  flex items-center justify-center gap-3 z-1000">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center  hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-lg font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center  hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-2 text-right ml-2">
                      <p className="text-xl font-bold">
                        NGN {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </td>
                    <td className="py-6 px-2 text-center">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-black hover:text-red-800 p-2"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="block md:flex items-center justify-between">
            <div className="flex items-center gap-2 pt-6  border-gray-300">
              <p className="text-2xl font-bold uppercase">SubTotal:</p>
              <p className="text-3xl font-bold text-black">
                NGN {totalPrice.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className=" pt-4">
                <button
                  onClick={onBackToSwag}
                  className="text-sm text-black px-6 py-3 hover:underline bg-[#F5F5F5]"
                >
                 Add more Swag
                </button>
              </div>
              <div className=" pt-4">
                <button
                className="bg-[#F63A0A] text-white text-xl px-6 py-2 hover:bg-[#d63308] transition-colors"
                onClick={()=>setShowContactForm(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* Contact Form */}
            {showContactForm && (
              <CheckoutContactForm
                email={contactForm.email}
                phone={contactForm.phone}
                onEmailChange={(email) =>
                  setContactForm((prev) => ({ ...prev, email }))
                }
                onPhoneChange={(phone) =>
                  setContactForm((prev) => ({ ...prev, phone }))
                }
                isLoading = {isLoading}
                onSubmit={handleMakePayment}
                onClose={() => setShowContactForm(false)}
              />
            )}

          </div>
        </>
      )}
    </motion.div>
  );
}

export type { CartItem };
