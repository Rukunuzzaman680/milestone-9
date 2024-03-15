import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Layout/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Checkout from './Components/Checkout/Checkout';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';
import App from './App';
import GrandPa from './Components/GrandPa/GrandPa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('shirts.json'),
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'grandpa',
        element: <GrandPa></GrandPa>,
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>,
      },
      {
        path: 'review',
        element: <ReviewOrder></ReviewOrder>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
