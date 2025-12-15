import { useState, useEffect } from "react";
import Home from "./pages/Home";
// uncomment each of the import once page is created
// import About from "./pages/About";
import Speakers from "./pages/Speakers";
// import Faq from "./pages/Faq";
// import Market from "./pages/Market";

import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./layouts/MainLayout";

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
    <div className="font-nexa md:px-12">
      <LoadingScreen isLoading={isLoading} />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* uncomment each of the route once page is created */}
          {/* <Route path="about" element={<About />} /> */}
          <Route path="speakers" element={<Speakers />} />
          {/* <Route path="faq" element={<Faq />} /> */}
          {/* <Route path="market" element={<Market />} /> */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
