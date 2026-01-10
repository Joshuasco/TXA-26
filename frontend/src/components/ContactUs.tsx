import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key":
            (globalThis as any).process?.env?.REACT_APP_BREVO_API_KEY || "",
        },
        body: JSON.stringify({
          email: email,
          listIds: [3],
          attributes: {
            NAME: name,
            MESSAGE: message,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to subscribe");
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : String(err) || "An error occurred. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="w-full relative overflow-hidden min-h-[370px] py-12 px-6 border-black border-t-4 border-b-2 my-10"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Full-width background gradient */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(132.4deg,#F63A0A_0%,#FF7C5A_81.76%)]"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(#00000040_1px,transparent_1px),linear-gradient(90deg,#00000040_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      <div className="relative z-10 w-[50%] max-lg:w-full mx-auto flex flex-col gap-8 text-center">
        <h3 className="text-3xl text-white font-semibold tracking-wide leading-relaxed">
          Connect with Us
        </h3>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white border-4 border-black p-6 h-[70px] shadow-[8px_8px_0px_black] placeholder-[#727272] font-semibold text-xl"
            placeholder="Name"
            required
          />

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-4 border-black p-6 text-xl h-[70px] shadow-[8px_8px_0px_black] placeholder-[#727272] font-semibold"
            placeholder="Email"
            required
          />

          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white border-4 border-black p-6 text-xl h-[160px] max-lg:h-[180px] shadow-[8px_8px_0px_black] placeholder-[#727272] font-semibold"
            placeholder="Message"
            required
          />

          {error && <p className="text-red-200">{error}</p>}
          {isSuccess && (
            <p className="text-green-200">Subscription successful!</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full max-w-[200px] px-10 py-4 text-xl text-white bg-[#F63A0A] border-2 border-black shadow-[8px_8px_0px_black]  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
