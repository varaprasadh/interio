import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Visualizer from './components/Visualizer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Visualizer/>
    </div>
  )
}

export default App
