import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//https://reactrouter.com/en/main/start/tutorial
//45-1 What Is SPA, Routing And React Router Setup

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path:"/",
    // element: <p>hello world</p>
    element: <div>hello world from react router</div>
  },
  {
    path:"/about",
    element:<div>now I am in about page</div>

  },
  {
    path:"/contact",
    element:<div>Call me right now</div>
  }
])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
