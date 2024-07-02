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
import Landing from './pages/Landing/Landing';
const router = createBrowserRouter([{path:"/", element:<Landing/>},{path:"*", element:<Error/>}])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
