// components/Layout.jsx

import { Outlet } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export const Layout = () => {
  
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
