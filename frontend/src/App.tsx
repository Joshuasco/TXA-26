import { useState, useEffect } from "react";
import Home from "./pages/Home";
import GetTicket from "./pages/GetTicket";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import SwagOrder from "./pages/SwagOrder";

import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./layouts/MainLayout";
import OrderReceipt from "./pages/orderReceipt";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("fonts" in document) {
      document.fonts.ready.then(() => {
        setIsLoading(false);
      });
    } else {
      // Fallback timer
      const timer = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="font-nexa md:px-12">
      <LoadingScreen isLoading={isLoading} />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="get-your-ticket" element={<GetTicket />} />
          <Route path="swag-order" element={<SwagOrder/>} />
          <Route path="receipt" element={<OrderReceipt/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
