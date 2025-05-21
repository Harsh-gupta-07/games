"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuizCategory from "@/components/QuizCategory";
import Difficulty from "@/components/Difficulty";

const page = () => {
  //   useEffect(() => {
  //     async function fn() {
  //       let f = await fetch("https://opentdb.com/api.php?amount=10");
  //       let data = await f.json();
  //       console.log(data);
  //     }
  //     fn();
  //   }, []);
  
  function mixed(){
    return 0
  }

  const router = useRouter();
  const [category,setCategory] = useState(0)
  const categoryList = {9:"category", 10: "Entertainment: books"}
  return (
    <div className="h-screen w-screen flex justify-center p-5 bg-[#1c1e1f]">
      <div className="flex flex-col w-4xl gap-3">
        <button
          onClick={() => router.push("/")}
          className="flex text-[#33a1f4] items-center text-sm font-bold h-10 w-45 rounded cursor-pointer active:opacity-70 px-4 py-2 hover:bg-black justify-center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Games
        </button>
        <Difficulty />
      </div>
    </div>
  );
};

export default page;
