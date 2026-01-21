import Home from "./pages/Home";
import GetTicket from "./pages/GetTicket";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import SwagOrder from "./pages/SwagOrder";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import OrderReceipt from "./pages/orderReceipt";

function App() {

  return (
    <div className="font-nexa md:px-12">

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="get-your-ticket" element={<GetTicket />} />
          <Route path="swag-order" element={<SwagOrder/>} />
          <Route path="order-receipt" element={<OrderReceipt/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
