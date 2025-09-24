import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
