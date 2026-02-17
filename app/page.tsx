import AboutStatsSection from "./components/homepage/AboutStatsSection";
import BusinessPartners from "./components/homepage/BusinessPartners";
import ClientTestimonials from "./components/homepage/Clients";
import Hero from "./components/homepage/Hero";
import LeadForm from "./components/homepage/LeadForm";
import WhatWeDoSnapshots from "./components/homepage/WhatWeDoSnapshots";
import WhyChooseUs from "./components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSnapshots />
      <AboutStatsSection />
      <BusinessPartners />
      <WhyChooseUs />
      <ClientTestimonials />
      <LeadForm />
    </>
  );
}
