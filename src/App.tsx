import Home from "./pages/Home";
import GetTicket from "./pages/GetTicket";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
// import Market from "./pages/Market";
import SwagOrder from "./pages/SwagOrder";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

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
          {/* <Route path="market" element={<Market />} /> */}
          <Route path="swag-order" element={<SwagOrder/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
