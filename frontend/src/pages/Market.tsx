// import { motion } from "framer-motion";
// import SwagCard from "../components/SwagCard";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const swagItems = [
//   {
//     id: 1,
//     name: "Tech X Classic Tee",
//     price: "NGN 3,000",
//     imageSrc: "/swag-shirt.png",
//   },
//   {
//     id: 2,
//     name: "Tech X Hoodie",
//     price: "NGN 10,000",
//      imageSrc: "/swag-bag.png",
//   },
//   {
//     id: 3,
//     name: "CodeMug cup",
//     price: "NGN 2,500",
//     imageSrc: "/swag-cup.png",
//   },
//   {
//     id: 4,
//     name: "Power sip Bottle",
//     price: "NGN 2,500",
//     imageSrc: "/swag-bottlewater.png",
//   },
//   {
//     id: 5,
//     name: "The Afro Tech Cap",
//     price: "NGN 1,800",
//     imageSrc: "/swag-cap.png",
//   },
//   {
//     id: 6,
//     name: "Devpack Drawstring Bag",
//     price: "NGN 800",
//     imageSrc: "/swag-bag.png",
//   },
// ];

// export default function Market() {
//   return (
//     <section className="w-full py-10 md:py-16">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         transition={{ duration: 0.6 }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
//       >
//         <div className="flex flex-col gap-2">
//           <h2 className="text-3xl md:text-[44px] font-bold text-center">
//             Swag Order
//           </h2>
//           <p className="text-lg md:text-2xl text-center font-normal">
//             Rep the Tech X spirit with exclusive merch, order your favorites
//             here.
//           </p>
//         </div>

//         {/* Swag Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {swagItems.map((item) => (
//             <SwagCard
//               key={item.id}
//               imageSrc={item.imageSrc}
//               name={item.name}
//               price={item.price}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
