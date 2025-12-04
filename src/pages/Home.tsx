import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
