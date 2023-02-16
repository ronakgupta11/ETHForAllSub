import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Stake from './routes/Stake';
import Swap from './routes/Swap';
import Lend from './routes/Lend';
import Borrow from './routes/Borrow';
import Bridge from './routes/bridge';


const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
  errorElement:<ErrorPage/>,
  children:[{
    path:"/borrow",
    element:<Borrow/>
  },
  {
    path:"/stake",
    element:<Stake/>
  },
  {
    path:"/lend",
    element:<Lend/>
  },
  {
    path:"/bridge",
    element:<Bridge/>
  },
  {
    path:"/swap",
    element:<Swap/>
  },
  

]},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
