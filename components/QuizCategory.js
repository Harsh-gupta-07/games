import React from "react";
import GradientText from "@/utils/GradientText";


const QuizCategory = () => {
  return (
    <div className="border border-gray-500 text-card-foreground bg-[#131516] rounded-xl shadow-lg p-6 mb-8">
      <div className="p-0">
        <h3 className="font-nunito font-bold text-2xl text-[#33a1f4] mb-6">
          Choose a Category
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex justify-center items-center border border-gray-500 p-4 rounded-lg bg-[#060707] hover:bg-[#242729] cursor-pointer">
            <span className="block">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class font-bold"
              >
                Mixed
              </GradientText>
            </span>
          </button>
          <button className="flex justify-center items-center border border-gray-500 p-4 rounded-lg bg-[#060707] hover:bg-[#242729] cursor-pointer ">
            <span className="block font-bold">Random Category</span>
          </button>
          <button className="flex justify-center items-center border border-gray-500 p-4 rounded-lg bg-[#060707] hover:bg-[#242729] cursor-pointer ">
            <span className="block font-bold">General knowledge</span>
          </button>
          <button className="flex justify-center items-center border border-gray-500 p-4 rounded-lg bg-[#060707] hover:bg-[#242729] cursor-pointer ">
            <span className="block font-bold">Entertainment</span>
          </button>
          <button className="flex justify-center items-center border border-gray-500 p-4 rounded-lg bg-[#060707] hover:bg-[#242729] cursor-pointer ">
            <span className="block font-bold">Science</span>
          </button>
          <button className="flex justify-center items-center border border-gray-500 p-4 rounded-lg bg-[#060707] hover:bg-[#242729] cursor-pointer ">
            <span className="block font-bold">Others</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCategory;
