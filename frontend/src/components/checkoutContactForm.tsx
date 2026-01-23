import { useState } from "react";


interface ContactFormProps {
  email: string;
  phone: string;
  onEmailChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  isLoading:boolean;
  onClose: () => void; 
  onSubmit: ()  => void; 
}

const CheckoutContactForm = ({
  email,
  phone,
  onEmailChange,
  onPhoneChange,
  isLoading = false,
  onClose,
  onSubmit,
}: ContactFormProps) => {
  const [error, setError] = useState<string>('')

  // handleClick 
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault(); 
    //clean and validate phone data
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.length != 13 || phone.length != 13 ){
        setError('Invalid phone number')
        return
    }
    setError('')  //clear error
    try {
      onSubmit();
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      console.log("submitted");
    }
  };

  return (
    
    <form onSubmit={handleClick} className="absolute inset-0 z-40 bg-(--nav-color)/60">
      <div className="flex justify-end items-end w-3/4 mx-auto">
        <button
          type="button" 
          className="flex justify-center items-center w-10 h-10 bg-gray-200 mt-40 right-0 rounded-full"
          onClick={onClose}
          disabled={isLoading}
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
            required
            type="email"
            placeholder="johndoes@gmail.com"
            value={email}
            className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
            onChange={(e) => onEmailChange(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col">
          <label>WhatsApp No:</label>
          <input
            required
            type="tel"
            placeholder="2347054974199"
            value={phone}
            className="h-8 rounded-xl p-2 border-1 border-(--primary-color)"
            onChange={(e) => onPhoneChange(e.target.value)}
            onFocus={()=>{setError('')}}
            disabled={isLoading}
          /> 
          {error && <small className="text-red-600">{error}</small> }
        </div>

        <button
          type="submit"
          className={`flex items-center justify-center rounded-xl mt-4 p-2 bg-(--primary-color) text-white ${
            isLoading
              ? " cursor-not-allowed"
              : "bg-(--primary-color)"
          }`}
          disabled={isLoading}
        >
          {isLoading && <div className="w-5 h-5 border-4 mx-2 border-white border-t-(--primary-color) rounded-full animate-spin"></div>}
          {isLoading ? "Order Processing..." : "Make Payment"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutContactForm;