import React from 'react';
import { createRoot } from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link
} from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Navbar from './component/Navbar';
import Contact from './Routes/Contact';
import Services from './Routes/Services';
import Footer from './Routes/Footer';
import GoogleMap from './Routes/GoogleMap';
import ScrollToTop from './Routes/ScrollToTop';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      {/* <img src={process.env.PUBLIC_URL + '/images/main.png'} alt="window 9 5" />
      <Services />
     <GoogleMap />   
     <Contact />
    <Footer/>  */}
    {/* <ScrollToTop /> */}
    <Outlet />
    
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
        
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/footer',
        element: <Footer />
      },
      {
        path: '/google-map',
        element: <GoogleMap />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);




