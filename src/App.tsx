import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("fonts" in document) {
      document.fonts.ready.then(() => {
        setIsLoading(false);
      });
    } else {
      // Fallback timer
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="font-nexa md:px-12 md:py-12">
      <LoadingScreen isLoading={isLoading} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
