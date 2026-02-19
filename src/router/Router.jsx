// router/index.js
import { createBrowserRouter } from "react-router-dom";

import { Protected } from "../components/Resuable/Protected";
import { Layout } from "../Layout";
import Home from "../pages/Home";
import Login from "../pages/login";
import Shopping from "../pages/ShopGrid";
import Products from "../components/cards/ProductCard";
import ProductDetails from "../pages/ProductDetail";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Layout /></Protected>,
    children: [
      {
        index: true,
        element: (
            <Home />
        ),
      },
      {
        path:"products",
        // index: true,
        element: (
            <Products />
        ),
      },


      {
        path: "dashboard",
        element: (
        
            <Shopping />
          
        ),
      },
      {
        path: "shop",
        element: (
        
            <Shopping />
          
        ),
      },
      {
        path: "product/",
        element: (
          
            <ProductDetails/>
          
        ),
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);