import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Visualizer from './components/Visualizer'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import InitScreen from "./components/InitScreen/Index";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <InitScreen/>
    },
    {
      path: "/scenes",
      element: <div>Scenes</div>
    },
    {
      path: "/visualizer",
      element: <Visualizer/>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
