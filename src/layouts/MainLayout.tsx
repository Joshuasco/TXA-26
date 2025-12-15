import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemoryLane from "../components/MemoryLane";
import PastEvent from "../components/PastEvent";
import About from "../components/about";
import Speakers from "../components/Speakers";
import GetInvolved from "../components/GetInvolved";
import PartnersAndSponsors from "../components/PartnersAndSponsors";



function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />  {/* ← Page content goes here */}
      <div id="about">
        <About />
      </div>
      <Speakers />
      <GetInvolved />
      <div id="past-events">
        <PastEvent />
      </div>
      <PartnersAndSponsors />
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
        <MemoryLane />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout