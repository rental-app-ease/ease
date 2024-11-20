
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/homeFold'
import { RenterDashboard } from './assets/layouts/RenterDashboard'
import Listings from './Pages/renterDasboardFolder/Listings'
import { ReviewMessages } from './Pages/renterDasboardFolder/ReviewMessages'
import { UserDashboard } from './assets/layouts/UserDashboard'
import PendingRequest from './Pages/userDashborardFolder/PendingRequest'
import { ServicesDashboard } from './assets/layouts/ServicesDashboard'
import { SingleRoom } from './Pages/ServiceDashboardFolder/SingleRoom'
import AddProduct from './Pages/renterDasboardFolder/AddProduct'
import Log from './Pages/authForm/Log'
import SignIn from './Pages/authForm/Sign'
import UserDetails from './Pages/homeFold/UserDetails'
import Details from './Pages/renterDasboardFolder/Details'
import TwobedRoom from './Pages/ServiceDashboardFolder/TwobedRoom'
import Navbar from './components/Navbar'
import Chamber from './Pages/ServiceDashboardFolder/Chamber'
import ThreebedRoom from './Pages/ServiceDashboardFolder/Threebedroom'
import { Aboutus } from './Pages/aboutfolder/Aboutus'
import { UserProvider } from './components/userContext'
import { useEffect } from 'react'
import { useUser } from './components/userContext'
import UserRoute from './routes/UserRoute'
import AllItems from './Pages/homeFold/AllListings'
import { Safty } from './Pages/Safty'



function App() {

  const { user, setUser } = useUser()

  useEffect(() => {
    // check if there is user informationd in the local storage
    // if there is, put it in state

    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"))
    }
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/login",
      element: <Log />

    },

    {
      path: "/signin",

      element: <SignIn />
    },

    {
     path: "/safety",
     element: <Safty/>
    },

    {
      path: "/userdetails/:id",
      element: <UserDetails />
    },

    {
      path: "about",
      element: <Aboutus />
    },

    {
      path: "/all-items",
      element: <AllItems/>
    },

    {
      path: "/renterdash",

      element: <UserRoute> <RenterDashboard /></UserRoute>,
      children: [
        {
          index: true,
          element: <Listings />
        },

        {
          path: "add",
          element: <AddProduct />
        },

        {
          path: "products/:id",
          element: <Details />
        },

        {
          path: "review-messages",
          element: <ReviewMessages />
        },

      ]
    },

    {
      path: "/userdash",
      element: <UserDashboard />,
      children: [

        {
          path: "pending-requests",
          element: <PendingRequest />
        },

      ]
    },

    {
      path: "/service-dash",
      element: <ServicesDashboard />,
      children: [
        {
          index: true,
          element: <SingleRoom />
        },
        {
          path: "twobedroom",
          element: <TwobedRoom />
        },
        {
          path: "chamber",
          element: <Chamber />
        },
        {
          path: "threebedroom",
          element: <ThreebedRoom />
        }
      ]
    }
  ])
  return (
    <>
      
        <RouterProvider router={router} />
      
    </>
  )
}

export default App
