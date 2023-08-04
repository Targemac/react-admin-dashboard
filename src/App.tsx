import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import './styles/global.scss'

import Home from "./pages/Home/Home"
import Users from './pages/Users/Users'
import Products from './pages/Products/Products'
import Login from "./pages/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

function App() {


  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        }
      ]
    },
    {
      path: '/login', 
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={ router } />
  )
}

export default App
