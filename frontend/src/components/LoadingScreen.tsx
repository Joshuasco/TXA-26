import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type LoadingScreenProps = {
  isLoading: boolean;
};

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Slightly longer fade-out for smooth transition
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md transition-opacity duration-500 ${
        isLoading ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="flex flex-col items-center gap-4 ">
        <img
          src="/web-logo.png"
          alt="Logo"
          className="h-24 w-24 animate-pulse drop-shadow-lg"
        />
        <ClipLoader color="#ffffff" size={60} />
      </div>
    </div>
  );
}
