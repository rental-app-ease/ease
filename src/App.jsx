
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/homeFold'
import { RenterDashboard } from './assets/layouts/RenterDashboard'
import Listings from './Pages/renterDasboardFolder/Listings'
import { ReviewMessages } from './Pages/renterDasboardFolder/ReviewMessages'
import { UserDashboard } from './assets/layouts/UserDashboard'
import History from './Pages/userDashborardFolder/History'
import PendingRequest from './Pages/userDashborardFolder/PendingRequest'
import { Cart } from './Pages/userDashborardFolder/Cart'
import { ServicesDashboard } from './assets/layouts/ServicesDashboard'
import {SingleRoom } from './Pages/ServiceDashboardFolder/SingleRoom'
import AddProduct from './Pages/renterDasboardFolder/AddProduct'
import Log from './Pages/authForm/Log'
import SignIn from './Pages/authForm/Sign'
import UserDetails from './Pages/homeFold/UserDetails'
import Details from './Pages/renterDasboardFolder/Details'
import TwobedRoom from './Pages/ServiceDashboardFolder/TwobedRoom'
import Navbar from './components/Navbar'

function App() {
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
      path: "/nav",
      element: <Navbar/>
    },

    {
      path: "userdetails/:id",
      element: <UserDetails/>
    },

    {
      path: "/renterdash",
      element: <RenterDashboard />,
      children: [
        {
          path: "over",
          element: <Listings />
        },

        {
          index: true,
          element: <AddProduct />
        },

        {
          path: "products/:id",
          element: <Details/>
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
          index: true,
          element: <History />
        },

        {
          path: "pending-requests",
          element: <PendingRequest />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ]
    },

    {
      path: "/service-dash",
      element: <ServicesDashboard />,
      children: [
        {
          index: true,
          element: <SingleRoom/>
        },
        {
          path: "twobedroom",
          element: <TwobedRoom />
        },
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
