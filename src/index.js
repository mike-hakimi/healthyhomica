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

const AppLayout = () => {
  return (
    <>
      <Navbar />
      {/* <img src={process.env.PUBLIC_URL + '/images/main.png'} alt="window 9 5" />
      <Services />
     <GoogleMap />   
     <Contact />
    <Footer/>  */}
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





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Outlet, Router } from 'react-router-dom';

// import { createRoot } from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link
// } from "react-router-dom";
// import Home from './Routes/Home';
// import About from './Routes/About';
// import Contact from './Routes/Contact';
// import Navbar from './component/Navbar';
// import services from './Routes/Services';
// import Footer from './Routes/Footer'
// import GoogleMap from './Routes/GoogleMap';

// const AppLayout = () => {
//   return (
//     <>
//     <Navbar/>
//     <img src={process.env.PUBLIC_URL + '/images/main.png'} alt="window 9 5" />
//     <services />
//     <GoogleMap />
//     <Contact />
//     <Footer/>

//     </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     element: <AppLayout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <about/>
//       },
//       {
//         path:"contact",
//         element: <contact />
//       },
//       {
//         path:"services",
//         element: <services />
//       },
//       {
//         path:"footer",
//         element: <footer />
//       },

//     ]
//   },
  
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// )










// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Outlet, Router } from 'react-router-dom';

// import { createRoot } from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link
// } from "react-router-dom";
// import Home from './Routes/Home';
// import About from './Routes/About';
// import Navbar from './component/Navbar';

// const AppLayout = () => {
//   return (
//     <>
//     <Navbar/>
//     <Outlet />
//     </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     element: <AppLayout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About />
//       },

//     ]
//   },
  
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// )

