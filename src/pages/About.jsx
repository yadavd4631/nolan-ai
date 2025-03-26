import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const clickhandler = () => {
      navigate("/dashboard");
    };

  return (
    <div className="min-h-screen bg-zinc-600 text-white px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">About NolanAI 🎬</h1>
        <p className="text-lg text-gray-300">
          NolanAI is a cutting-edge film production web app designed to assist
          filmmakers in managing their projects from concept to production.
          Built with React.js, Firebase, React Router, and Tailwind CSS, our
          platform offers a seamless experience for filmmakers and teams.
        </p>
      </div>

      <div className="ml-[36%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="bg-zinc-700 p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold mb-4">🎯 Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🔐 Secure User Authentication (Firebase)</li>
            <li>🔒 Protected Routes & Access Control</li>
            <li>📽️ Integrated Video Player (React Player)</li>
            <li>🔔 Interactive Notifications (React Toastify)</li>
            <li>⚡ Smooth Navigation Experience</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold">💡 Why Choose NolanAI?</h2>
        <p className="text-lg text-gray-300 mt-4">
          With NolanAI, you get an all-in-one platform to streamline your
          filmmaking process. Our AI-powered collaborative suite helps you bring
          your vision to life with ease.
        </p>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={clickhandler}
          className="bg-sky-500 px-6 py-3 rounded-lg text-white font-semibold text-lg hover:bg-sky-600 transition"
        >
          Start Your Film Project 🚀
        </button>
      </div>
    </div>
  );
};

export default About;
