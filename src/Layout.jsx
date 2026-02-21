// components/Layout.jsx

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



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
