import { useState} from "react";
import TicketCard from "../components/TicketCard";
import CheckoutContactForm from "../components/checkoutContactForm";
import type { OrderProps } from "../api/creatOrder";
import createOrder from "../api/creatOrder";
import payNow from "../payment/Flutterwave";
import SEO from "../components/SEO"


export interface ContactForm {
  email: string;
  phone: string;
  price: number;
}

const GetTicket = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [form, setForm] = useState<ContactForm>({
    email: "",
    phone: "",
    price: 5000,
  });

  //  Handles payment
   const handleMakePayment = async () => {
    const order: OrderProps = {
      order_id: `ORD-${Date.now()}`,
      type: "ticket",
      email: form.email,
      phone: form.phone,
      amount: form.price,
      items: [
        {
          name: form.price === 15000 ? "VIP Ticket" : "Standard Ticket",
          price: form.price,
          quantity: 1,
        },
      ],
    };
    setIsLoading(true)
    try{
    //create Order request on the backend
    const create_order = await createOrder(order);
    console.log('created order status = ', create_order)
    setIsLoading(false)
    //call flutterwavecheckout payment
    payNow(order)
    } catch(error){
      alert(`Payment initialization failed,  ${error}`)
      setIsLoading(false)
    }


  }

  return (
    <> <SEO
        title="Get Your Ticket"
        description="Secure your spot at TECHX Africa 2026! Purchase your ticket now for Nigeria's premier technology conference. Early bird pricing available. Don't miss out on this incredible tech event."
        url="/tickets"
        image="/og-tickets.png"
        keywords="buy TECHX ticket, tech conference tickets Nigeria, TECHX Africa 2026 registration, early bird tickets, tech event tickets Lagos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "TECHX Africa 2026",
          "startDate": "2026-03-15",
          "endDate": "2026-03-17",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Lagos, Nigeria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressRegion": "Lagos",
              "addressCountry": "NG"
            }
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Standard",
              "url": "https://techxafrica.com/tickets",
              "price": "5000",
              "priceCurrency": "NGN",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "validThrough": "2026-02-15"
            },
            {
              "@type": "Offer",
              "name": "VIP",
              "url": "https://techxafrica.com/tickets",
              "price": "15000",
              "priceCurrency": "NGN",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-02-16"
            }

          ],
          "performer": {
            "@type": "Organization",
            "name": "TECHX Africa"
          }
        }}
      />
    <div className="py-10 md:py-12 mx-4">
      <div className="flex flex-col items-center text-center px-2 gap-2 mb-10">
        <h1 className="font-extrabold text-3xl">
          Secure your Spot at Tech X Africa 2026
        </h1>
        <span>
          Seats are limited! Secure your spot before they sell out and miss out
          on this year’s biggest lineup
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <TicketCard
          title="STANDARD"
          price="{NGN 5,000}"
          bgColor="bg-[#FFD6B0]"
          description="Your gateway to the core Tech X Africa 2026 experience – learn, connect, and grow."
          benefits={[
            "Access to all keynote sessions",
            "Entry into all 7 learning tracks",
            "Event materials & digital resources",
            "Access to panel discussions & fireside chats",
          ]}
          onButtonClick={() => {
            setForm((prev) => ({ ...prev, price: 5000 }));
            setShowForm(true);
          }}
        />

        <TicketCard
          title="VIP"
          price="{NGN 15,000}"
          bgColor="bg-[#EAD6D3]"
          description="Go beyond the standard – enjoy the ultimate Tech X Africa experience with VIP privileges."
          benefits={[
            "All Standard Ticket benefits",
            "Front-row seating at keynote sessions",
            "Meet-and-greet access speakers",
            "Premium welcome package & event merch",
          ]}
          onButtonClick={() => {
            setForm((prev) => ({ ...prev, price: 15000 }));
            setShowForm(true);
          }}
        />
      </div>

      {/* Contact Form */}
      {showForm && (
        <CheckoutContactForm
          email={form.email}
          phone={form.phone}
          onEmailChange={(email) =>
            setForm((prev) => ({ ...prev, email }))
          }
          onPhoneChange={(phone) =>
            setForm((prev) => ({ ...prev, phone }))
          }
          isLoading = {isLoading}
          onSubmit={handleMakePayment}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
    </>
  );
};

export default GetTicket;
