
import React from "react";

const Data = ({ data, openDash }) => {
  if (!data.length) {
    return (
      <div className="text-center mt-4">
        <p className="text-gray-600 text-lg">No data submitted yet.</p>
        <button 
          onClick={openDash} 
          className=" bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded shadow-md hover:scale-105 transition"
        >
          Add Data
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-10 w-full">

      
      <button
        onClick={openDash}
        className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg mb-6 shadow-md hover:scale-105 transition"
      >
        Add Data
      </button>

      <div className="w-full max-w-4xl h-[500px] overflow-y-auto space-y-6 pr-3">

        {data.map((item, i) => (
          <div 
            key={i}
            className="
              bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 
              shadow-xl rounded-xl p-6 
              transition transform hover:-translate-y-1 hover:shadow-2xl
            "
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">#{item.index}</h2>
              <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow">
                {item.subject}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-gray-800 text-lg">
              <p><strong>First:</strong> {item.firstname}</p>
              <p><strong>Last:</strong> {item.lastname}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.contact}</p>
              <p><strong>Gender:</strong> {item.gender}</p>
            </div>

            <div className="mt-3 bg-white bg-opacity-60 p-3 rounded-lg">
              <p className="font-semibold text-gray-700">About:</p>
              <p className="text-gray-800">{item.about}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Data;
