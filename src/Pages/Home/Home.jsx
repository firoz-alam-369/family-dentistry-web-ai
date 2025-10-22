import React from "react";
import BannerSection from "../../components/BannerSection";
import ServicesSection from "../../components/ServicesSection";
import ChamberSection from "../../components/ChamberSection";
import DoctorsSectionTwo from "../../components/DoctorsSectionTwo";
import AppointmentSection from "../../components/AppointmentSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import BlogSection from "../../components/BlogSection";
import ContactSection from "../../components/ContactSection";
import TrustSection from "../../components/TrustSection";
import HeroBanner from "../../components/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ServicesSection />
      <ChamberSection />
      <DoctorsSectionTwo />
      <AppointmentSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <TrustSection />
    </div>
  );
};

export default Home;
