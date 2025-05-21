import React from "react";

const Difficulty = () => {
  return (
    <div className="border border-gray-500 text-card-foreground bg-[#131516] rounded-xl shadow-lg p-6 mb-8">
      <div className="p-0">
        <h3 className="font-bold text-2xl text-[#33a1f4] mb-2">
          Choose Difficulty
        </h3>
        <p className="text-gray-400 mb-6">Category: General Knowledge</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex justify-center bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
            <span className="block font-medium text-lg mb-1">Easy</span>
          </button>
          <button className="flex justify-center bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
            <span className="block font-medium text-lg mb-1">Medium</span>
          </button>
          <button className="flex justify-center bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
            <span className="block font-medium text-lg mb-1">Hard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Difficulty;
