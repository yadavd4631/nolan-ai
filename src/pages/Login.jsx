import React, { useState } from "react";
import { auth } from "../context/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("loggedIn", "true"); 
      toast.success("Login successful! 🎉");;
      navigate("/home"); 
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <img className="p-4" src="logo.png" alt="Logo" />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] h-auto p-8 border-none bg-zinc-300 rounded-2xl shadow-md">
          <h1 className="flex font-bold items-center justify-center text-3xl text-black">
            Login
          </h1>

          <div className="mt-6 text-black">
            <label className="block text-gray-700 mt-4">Email ID</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter your email"
            />

            <label className="block text-gray-700 mt-4">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={loginUser}
            disabled={loading}
            className={`bg-sky-500 p-3 rounded-lg w-full mt-6 text-white font-semibold hover:bg-sky-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-gray-600 text-center mt-4">
            <p>OR</p>
            <p
              className="text-sky-500 hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Create a new account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
