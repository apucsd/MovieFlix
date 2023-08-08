/* eslint-disable react/prop-types */

import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
      <Toaster />
    </div>
  );
};

export default MainLayout;
