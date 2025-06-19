import React from "react";

const AddSeller = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">
          📦 Add Seller Details
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Store Name</label>
            <input
              type="text"
              placeholder="Enter store name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-800 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            ➕ Add Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
