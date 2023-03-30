import Admin from "./page/Admin"
import Crud from "./page/Crud"
import Home from "./page/Home"
import Login from "./page/Login"
import P404 from "./page/P404"
import Register from "./page/Register"
import Movie from "./page/Movie"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/crud" element={<Crud/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<P404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
