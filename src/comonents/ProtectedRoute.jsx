import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};

const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
