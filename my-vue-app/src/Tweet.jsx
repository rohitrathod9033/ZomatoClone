import React, { useState } from "react";

const Tweet = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const limit = 240;


  
  const handleDelete = (id) => {
    setTweets(tweets.filter((t) => t.id !== id));
  };


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Tweet Box
      </h2>

      <textarea
        rows={5}
        value={tweet}
        onChange={(e) => {
          if (e.target.value.length <= limit) {
            setTweet(e.target.value);
          }
        }}
        placeholder="Enter text..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-500">
          {limit - tweet.length} characters remaining
        </p>
        <button
          onClick={handleSubmit}
          disabled={tweet.trim().length === 0}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            tweet.trim().length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Go
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Tweet List:
        </h3>
        <ul className="space-y-4">
          {tweets.map((t) => (
            <li
              key={t.id}
              className="p-3 border border-gray-200 rounded-md shadow-sm bg-gray-50"
            >
              {t.isEditing ? (
                <div>
                  <textarea
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() => handleUpdate(t.id)}
                      className="px-3 py-1"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleCancel(t.id)}
                      className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <p className="text-gray-800">{t.text}</p>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(t.id, t.text)}
                      className="px-2 py-1 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="px-2 py-1 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tweet;
