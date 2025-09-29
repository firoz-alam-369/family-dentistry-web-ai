import "./App.css";
import AppointmentSection from "./components/AppointmentSection";
import Banner from "./components/Banner";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import ChamberSection from "./components/ChamberSection";
import ContactSection from "./components/ContactSection";
import DoctorsSection from "./components/DoctorsSection";
import DoctorsSectionTwo from "./components/DoctorsSectionTwo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavigationBar from "./components/NavigationBar";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";

function App() {
  return (
    <>
      <NavigationBar className="fixed" />
      <BannerSection />
      <ServicesSection />
      <ChamberSection />
      <DoctorsSectionTwo />
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
