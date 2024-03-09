import Navbar from "./components/navbar/Navbar"
import Home from "../src/pages/home/Home"
import Gig from "../src/pages/gig/Gig"
import Gigs from "../src/pages/gigs/Gigs"
import AddGig from "../src/pages/addgig/AddGig"
import MyGigs from "../src/pages/myGigs/MyGigs"
import Orders from "../src/pages/orders/Orders"
import Message from "../src/pages/message/Message"
import Messages from "../src/pages/messages/Messages"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {

  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
        {
          path:"/addgig",
          element:<AddGig/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
