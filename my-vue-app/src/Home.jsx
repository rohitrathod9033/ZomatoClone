import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 font-sans">
    
      <div className="flex flex-col md:flex-row items-center p-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://img.freepik.com/free-photo/high-protein-meal-with-smartphone-arrangement_23-2149089685.jpg"
            alt="Zomato App"
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left space-y-4 px-4">
          <h2 className="text-4xl font-bold text-brown-800">
            <span className="text-5xl font-extrabold text-red-800">Welcome</span> <br />
            <span className="text-indigo-800 font-medium">To Ultimate</span> <br />
            <span className="text-xl font-semibold text-red-600">Food Delivery App — Parul-Zomato</span>
          </h2>
          <p className="italic text-gray-700">“Good Food with Good Mindset” 🍽️</p>
          <button className="mt-4 px-6 py-2 bg-indigo-800 text-white rounded-full shadow hover:bg-purple-700 transition-all">
            Explore Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;