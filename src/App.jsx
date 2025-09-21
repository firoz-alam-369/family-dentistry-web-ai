import "./App.css";
import AppointmentSection from "./components/AppointmentSection";
import Banner from "./components/Banner";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import DoctorsSection from "./components/DoctorsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";

function App() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <TrustSection />
      <Footer />
    </>
  );
}

export default App;
