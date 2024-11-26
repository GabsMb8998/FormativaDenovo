import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import App from './App.jsx'
import './index.css'
import UploadSensores from "./pages/UploadSensores.jsx"
import Cadaster from './pages/Cadaster.jsx'
import TableDados from './pages/TableDados.jsx'
import { Update } from './pages/Update.jsx'
import { Home } from './pages/Home.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { AddSensores } from './pages/AddSensores.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/sensoresUpload",
    element: <UploadSensores/>
  },
  {
    path: "/Cadaster",
    element: <Cadaster/>
  },
  {
    path: "/tabledados",
    element: <TableDados/>
  },
  {
    path: "/update",
    element: <Update/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/addSensores",
    element: <AddSensores/>
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
