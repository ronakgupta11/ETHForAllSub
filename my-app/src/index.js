import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home';
import { Review } from "./routes/Review";
import { Account } from "./routes/Account";
import Buy from './routes/Buy';
import { Upload } from './routes/Upload';
import {ProductCard} from "./components/ProductCard"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  
  {
    path: "/",
    element:<App/>,
    children:[
      {index:true,element:<Home/>},
      {
        path:"/buy",
        element:<Buy/>
      },
      {
        path:"/review",
        element:<Review/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/account/upload",
        element:<Upload/>
      },
      {
        path:"/buy/:productId",
        element:<ProductCard/>
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
