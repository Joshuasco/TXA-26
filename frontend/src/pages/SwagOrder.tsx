import { motion } from "framer-motion";
import { useState } from "react";
import SwagCard from "../components/SwagCard";
import ShoppingCart, { type CartItem } from "../components/ShoppingCart";
import SEO from "../components/SEO"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const swagItems = [
  {
    id: 1,
    name: "Tech X Classic Tee",
    description: "Premium cotton t-shirt with Tech X logo",
    price: 3000,
    imageSrc: "/swag-shirt.png",
  },
  {
    id: 2,
    name: "Tech X Hoodie",
    description: "Cozy hoodie perfect for coding sessions",
    price: 10000,
    imageSrc: "/swag-bag.png",
  },
  {
    id: 3,
    name: "CodeMug cup",
    description: "Ceramic mug for your favorite beverage",
    price: 2500,
    imageSrc: "/swag-cup.png",
  },
  {
    id: 4,
    name: "Power sip Bottle",
    description: "Insulated water bottle to stay hydrated",
    price: 2500,
    imageSrc: "/swag-bottlewater.png",
  },
  {
    id: 5,
    name: "The Afro Tech Cap",
    description: "Stylish cap with embroidered logo",
    price: 1800,
    imageSrc: "/swag-cap.png",
  },
  {
    id: 6,
    name: "Devpack Drawstring Bag",
    description: "Lightweight bag for your essentials",
    price: 800,
    imageSrc: "/swag-bag.png",
  },
];

export default function SwagOrder() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item: typeof swagItems[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
    setShowCart(true);
  };

  const handleOrderNow = (item: typeof swagItems[0]) => {
    setCart([{ ...item, quantity: 1 }]);
    setShowCart(true);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleBackToSwag = () => {
    setShowCart(false);
  };

  return (
    <><SEO
        title="Swag Order"
        description="Rep the TECHX spirit with exclusive merchandise! Order hoodies, t-shirts, caps, mugs, water bottles, and more. Show your tech pride with official TECHX Africa 2026 swag."
        url="/swag"
        image="/og-swag.png"
        keywords="TECHX merchandise, tech conference swag, buy TECHX hoodie, TECHX t-shirt, tech event merchandise Nigeria"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "TECHX Africa Swag Store",
          "description": "Official TECHX Africa 2026 merchandise store",
          "url": "https://techxafrica.com/swag",
          "image": "https://techxafrica.com/og-swag.png",
          "priceRange": "NGN 800 - NGN 10000"
        }}
      />
    <section className="w-full py-10 md:py-16">
      {!showCart ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-3xl md:text-[44px] font-bold text-center">
                  Swag Order
                </h2>
                <p className="text-lg md:text-2xl text-center font-normal">
                  Rep the Tech X spirit with exclusive merch, order your favorites here.
                </p>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={() => setShowCart(true)}
                  className="ml-4 relative bg-[#F63A0A] text-white px-6 py-2 hover:bg-[#d63308] transition-colors"
                >
                  View Cart
                  <span className="absolute -top-2 -right-2 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                    {cart.length}
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {swagItems.map((item) => (
              <SwagCard
                key={item.id}
                imageSrc={item.imageSrc}
                name={item.name}
                price={item.price}
                onAddToCart={() => handleAddToCart(item)}
                onOrderNow={() => handleOrderNow(item)}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <ShoppingCart
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onBackToSwag={handleBackToSwag}
        />
      )}
    </section>
    </>
  );
}
