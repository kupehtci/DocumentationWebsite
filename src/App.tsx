import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
// import reactLogo from './assets/react.svg'
// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
