import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); 
    toast.info("Logged out successfully! 👋");
    navigate("/login"); 
  };

  if (!isLoggedIn) return null; 

  return (
    <div className="flex justify-between items-center">
      <img className="p-4" src="logo.png" alt="Logo" />

      <div>
        <nav>
          <ul className="flex gap-10">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "text-white"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "text-white"
              }
            >
              <li>Dashboard</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "text-white"
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/aichat"
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "text-white"
              }
            >
              <li>Chat bot</li>
            </NavLink>
          </ul>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mr-20 bg-red-400 p-4 rounded-full"
      >
        Log out
      </button>
    </div>
  );
};

export default Navbar;
