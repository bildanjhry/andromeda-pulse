import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "@/pages/Landing.jsx";
import Login from "@/pages/auth/Login.jsx";
import Register from "@/pages/auth/Register.jsx";
import BrowseProduct from "@/pages/Browse-prod.jsx";

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
    path:"/browse-product",
    element: <BrowseProduct/>
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
