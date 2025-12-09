import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import { Navbar } from "./components";
import './App.css'

function App() {

  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes></Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
