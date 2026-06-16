import { createBrowserRouter, RouterProvider } from "react-router";

//auth
import Login from "@/pages/auth/Login.jsx";
import Register from "@/pages/auth/Register.jsx";
import ForgotPass from "@/pages/auth/ForgotPass.jsx";

// products
import BrowseProduct from "@/pages/Browse-prod.jsx";
import ProductDetails from "@/pages/details/ProductDetails.jsx"

// profiles
import Orders from "@/pages/profiles/Orders.jsx";
import Address from "@/pages/profiles/Address.jsx"
import Wishlist from "@/pages/profiles/Wishlist.jsx"
import ProfileSettings from "@/pages/profiles/ProfileSettings.jsx";
import PaymentMethod from "@/pages/profiles/Payment-method.jsx";

// core
import Cart from "@/pages/core/Cart";
import CheckoutDelivery from "@/pages/core/checkout/Deliver.jsx"

import Landing from "@/pages/Landing.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Landing/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/forgot-pass",
    element: <ForgotPass/>
  },
  {
    path:"/browse-product/:id",
    element: <BrowseProduct/>
  },
  {
    path:"/details/:id",
    element: <ProductDetails/>
  },
  {
    path:"/my-profiles",
    element: <Orders/>
  },
  {
    path:"/my-address",
    element: <Address/>
  },
  {
    path:"/wishlist",
    element: <Wishlist/>
  },
  {
    path:"/profile-settings",
    element: <ProfileSettings/>
  },
  {
    path:"/payment-method",
    element: <PaymentMethod/>
  },
  {
    path:"/cart",
    element: <Cart/>
  },
  {
    path:"/checkout",
    element: <CheckoutDelivery/>
  },  
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
