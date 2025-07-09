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
    element:<Protected><Layout /></Protected> ,
    children: [
      {
        index: true,
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path:"products",
        // index: true,
        element: (
          <Protected>
            <Products />
          </Protected>
        ),
      },


      {
        path: "dashboard",
        element: (
          <Protected>
            <Shopping />
          </Protected>
        ),
      },
      {
        path: "shop",
        element: (
          <Protected>
            <Shopping />
          </Protected>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Protected>
            <ProductDetails/>
          </Protected>
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