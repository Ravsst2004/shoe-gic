import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCart from "./pages/ShopCart";
import CartContextProvider from "./store/cartContext";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Contact from "./pages/Contact";
import NotFound404 from "./pages/NotFound404";
import Reviews from "./pages/Reviews";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound404 />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop-cart",
    element: <ShopCart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
