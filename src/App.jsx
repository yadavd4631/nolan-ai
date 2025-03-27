
import Navbar from "./comonents/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {BrowserRouter,Router, Routes, Route } from "react-router";
import Home from './pages/Home' 
import Dashboard from './pages/Dashboard' 
import About from "./pages/About"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./comonents/ProtectedRoute";
import Aichat from "./comonents/Aichat";


function App() {
  return (
    <div className="bg-zinc-600 w-full h-screen text-white">
      <Navbar />
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/aichat" element={<Aichat />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
