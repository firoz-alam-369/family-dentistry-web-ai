import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home/Home";
import AboutPage from "../components/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import DoctorsSectionTwo from "../components/DoctorsSectionTwo";
import AppointmentSection from "../components/AppointmentSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/services",
        Component: ServicesPage,
      },
      {
        path: "/doctors",
        Component: DoctorsSectionTwo,
      },
      {
        path: "/appointment",
        Component: AppointmentSection,
      },
      {
        path: "/blog",
        Component: BlogSection,
      },
      {
        path: "contact",
        Component: ContactSection,
      },
    ],
  },
]);
