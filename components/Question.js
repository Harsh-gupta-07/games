import React from "react";

const Question = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-gray-600">General Knowledge</span>
        <span className="font-medium">Question 1/2</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="h-full bg-primary rounded-full transition-all duration-500"></div>
      </div>
      <div className="border border-gray-500 text-card-foreground bg-[#131516] rounded-xl shadow-lg p-6 mb-6">
        <div className="p-0">
          <h3 className="font-nunito font-bold text-xl md:text-2xl mb-6">
            What is the capital city of Australia?
          </h3>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex justify-start bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
              <span className="inline-block w-8 h-8 bg-primary/10 text-primary font-nunito font-bold rounded-full text-center leading-8 mr-2">
                A
              </span>
              <span>Sydney</span>
            </button>
            <button className="flex justify-start bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
              <span className="inline-block w-8 h-8 bg-primary/10 text-primary font-nunito font-bold rounded-full text-center leading-8 mr-2">
                B
              </span>
              <span>Melbourne</span>
            </button>
            <button className="flex justify-start bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
              <span className="inline-block w-8 h-8 bg-primary/10 text-primary font-nunito font-bold rounded-full text-center leading-8 mr-2">
                C
              </span>
              <span>Canberra</span>
            </button>
            <button className="flex justify-start bg-[#060707] items-center border border-gray-500 p-4 rounded-lg hover:bg-[#242729] cursor-pointer ">
              <span className="inline-block w-8 h-8 bg-primary/10 text-primary font-nunito font-bold rounded-full text-center leading-8 mr-2">
                D
              </span>
              <span>Brisbane</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
