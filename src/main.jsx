import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css"
import Error from './pages/Error';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([{path:"/", element:<HomePage/>},{path:"*", element:<Error/>}])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
