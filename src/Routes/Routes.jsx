import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home/Home";
import AboutPage from "../components/AboutPage";
import ServicesPage from "../Pages/ServicesPage";

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
    ],
  },
]);
