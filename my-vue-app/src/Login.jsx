import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">🔐 Welcome Back</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 text-sm">Email Address</label>
          <input
            type="text"
            placeholder="you@example.com"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 text-sm">Password</label>
          <input
            type="password"
            placeholder="*******"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#" className="text-indigo-800 hover:underline">Forgot password?</a>
        </div>

        <button className="w-full bg-indigo-800 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
          🚀 Login
        </button>

        <p className="text-center text-sm mt-5 text-gray-600">
          Don’t have an account?{' '}
          <a href="#" className="text-indigo-800 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
