import Hero from "../components/hero";
import MemoryLane from "../components/MemoryLane";
import PastEvent from "../components/PastEvent";
import About from "../components/about";
import Speakers from "../components/Speakers";
import GetInvolved from "../components/GetInvolved";
import PartnersAndSponsors from "../components/PartnersAndSponsors";
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>

    <SEO
        title="TECHX Africa 2026 | Nigeria's Premier Technology Conference"
        description="Join Africa's biggest tech event in 2026. Connect with 5000+ tech professionals, attend workshops, keynote sessions, and network with industry leaders in Lagos, Nigeria."
        url="/"
        image="/og-home.png"
        keywords="TECHX Africa, tech conference Nigeria, technology event Lagos, African tech summit, tech networking Nigeria, TECHX 2026"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "TECHX Africa 2026",
          "description": "Africa's premier technology conference featuring keynote speakers, workshops, networking sessions, and the latest in tech innovation.",
          "image": "https://techxafrica.com/og-home.png",
          "startDate": "2026-03-15",
          "endDate": "2026-03-17",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Tech Conference Center",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Event Venue Address",
              "addressLocality": "Lagos",
              "addressRegion": "Lagos",
              "postalCode": "100001",
              "addressCountry": "NG"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "TECHX Africa",
            "url": "https://techxafrica.com"
          }
        }}
      />
      <Hero />
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
    </>
  );
}
