import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './css/Global.css';
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
