import { useState } from "react";

interface Props {
  email: string;
  phone: string;
  onEmailChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  onSubmit: () => Promise<void> | void;
  onClose: () => void;
}

const CheckoutContactForm = ({
  email,
  phone,
  onEmailChange,
  onPhoneChange,
  onSubmit,
  onClose,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onSubmit();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 z-40">
      <div className="flex justify-end items-end w-3/4 mx-auto">
        <button
          className="flex justify-center items-center w-10 h-10 bg-gray-200 mt-48 right-0 rounded-full"
          onClick={onClose}
          disabled={loading}
        >
          x
        </button>
      </div>

      <div className="flex flex-col mt-4 bg-white border-2 gap-4 rounded-2xl p-4 w-3/4 mx-auto border-(--primary-color)">
        <div>
          Kindly fill in your details below to complete your order
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-col">
          <label>Email:</label>
          <input
            type="text"
            placeholder="johndoes@gmail.com"
            value={email}
            className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
            onChange={(e) => onEmailChange(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="flex flex-col">
          <label>WhatsApp No:</label>
          <input
            type="text"
            placeholder="2347054974199"
            value={phone}
            className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
            onChange={(e) => onPhoneChange(e.target.value)}
            disabled={loading}
          />
        </div>

        <button
          className={`rounded-xl p-2 text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-(--primary-color)"
          }`}
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? "Processing..." : "Make Payment"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutContactForm;
