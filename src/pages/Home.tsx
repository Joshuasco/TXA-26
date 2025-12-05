import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import PartnersAndSponsors from "../components/PartnersAndSponsors";
import Speakers from "../components/Speakers";
import GetInvolved from "../components/GetInvolved";
import PastEvent from "../components/PastEvent";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Speakers />
      <GetInvolved />
      <PastEvent />
      <PartnersAndSponsors />
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
