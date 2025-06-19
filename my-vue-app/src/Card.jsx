import React from "react";

const Card = ({ imageurl, dishName, hotelName, buttonText }) => {
  return (
    <>  
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="bg-white border rounded shadow p-4 w-72">
            <img
              src={imageurl}
              alt="Card 1"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{dishName}</h2>
            <p className="text-gray-600">{hotelName}</p>
            <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded hover:bg-blue-600">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
