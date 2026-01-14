


// const userContactForm = ()=>{
// return(
//     <div className="absolute inset-0">
//           <div className="flex justify-end items-end w-3/4 mx-auto">
//             <button
//               className="flex justify-center items-center w-10 h-10 bg-gray-200 mt-48 right-0 rounded-full"
//               onClick={() => setShowForm(false)}
//             >
//               x
//             </button>
//           </div>

//           <div className="flex flex-col mt-4 bg-white border-2 gap-4 rounded-2xl p-4 w-3/4 mx-auto border-(--primary-color)">
//             <div>
//               Kindly fill in your details below to complete your order
//             </div>

//             <hr className="border-gray-200" />

//             <div className="flex flex-col">
//               <label>Email:</label>
//               <input
//                 type="text"
//                 placeholder="johndoes@gmail.com"
//                 value={form.email}
//                 className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
//                 onChange={(e) =>
//                   setForm({ ...form, email: e.target.value })
//                 }
//               />
//             </div>

//             <div className="flex flex-col">
//               <label>WhatsApp No:</label>
//               <input
//                 type="text"
//                 placeholder="2347054974199"
//                 value={form.phone}
//                 className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//               />
//             </div>

//             <button
//               className="bg-(--primary-color) rounded-xl p-2 text-white"
//               onClick={handlePayment}
//             >
//               Make Payment
//             </button>
//           </div>
//         </div>
// )
// }

// export default userContactForm;