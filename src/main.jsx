import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact.jsx'
// import Team, { teamLoader } from "./routes/team";

//https://reactrouter.com/en/main/start/tutorial
//45-1 What Is SPA, Routing And React Router Setup
//45-2 Explain Nested Route Concepts
//45-3 (Recap) Nested Route And Use Link, Outlet

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Components/Users/Users.jsx'

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
    // element: <div>hello world from react router</div>
    element: <Home></Home>,
    // loader: rootLoader,
    children : [
      {
        path:"/about",
        element:<About/>,
        // loader: teamLoader,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/users",
        element : <Users></Users>
      }
    ],
  },

  {
    path:"/header",
    element:<Header></Header>
  },
  {
    path:"/about",
    element:<div>now I am in about page</div>

  },
  {
    path:"/contact",
    element:<div>Call me right now</div>
  }

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
