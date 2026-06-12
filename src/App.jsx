import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "../src/pages/Landing.jsx";
import Login from "../src/pages/auth/Login.jsx";
import Register from "../src/pages/auth/Register.jsx";
import BrowseProduct from "../src/pages/Browse-prod.jsx";

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
    path:"/browse",
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
