"use client";
import Image from "next/image";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="bg-[#181a1b] w-full h-full p-5 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="font-extrabold text-[#33a1f4] text-3xl md:text-4xl mb-2">
          Welcome to PlayMind!
        </h2>
        <p className="text-lg text-gray-500">Choose a game to start playing</p>
      </div>
      <div className="w-4xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="border border-gray-500 text-card-foreground bg-[#181a1b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-secondary relative overflow-hidden">
            <img
              src="./quiz.jpg"
              alt="Trivia Quiz concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent flex items-end">
              <h3 className="text-white text-shadow-lg text-shadow-black font-nunito font-bold text-2xl p-4">
                Trivia Quiz
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4">
              Test your knowledge across various categories and score points!
            </p>
            <ul className="mb-6 text-sm">
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Multiple categories</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Timed questions</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Three difficulty levels</span>
              </li>
            </ul>

            <button
              onClick={() => {
                router.push("/quiz");
              }}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-full bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Play Trivia Quiz
            </button>
          </div>
        </div>

        {/*  */}
        <div className="border border-gray-500 text-card-foreground bg-[#181a1b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-secondary relative overflow-hidden">
            <img
              src="./memory.jpg"
              alt="Trivia Quiz concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent flex items-end">
              <h3 className="text-white text-shadow-lg text-shadow-black font-nunito font-bold text-2xl p-4">
                Memory Game
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4">
              Match pairs of cards by flipping them over. Test your memory!
            </p>
            <ul className="mb-6 text-sm">
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Fun card-flipping action</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Multiple difficulty levels</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Track attempts and time</span>
              </li>
            </ul>

            <button
              onClick={() => {
                router.push("/memory");
              }}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-full bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Play Memory Game
            </button>
          </div>
        </div>

        <div className="border border-gray-500 text-card-foreground bg-[#181a1b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-secondary relative overflow-hidden">
            <img
              src="./word.jpg"
              alt="Trivia Quiz concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent flex items-end">
              <h3 className="text-white  text-shadow-lg text-shadow-black font-nunito font-bold text-2xl p-4">
                Word Scramble
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4">
              Unscramble letters to form correct words against the clock!
            </p>
            <ul className="mb-6 text-sm">
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Various word categories</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Adjustable difficulty</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Hint system for tough words</span>
              </li>
            </ul>

            <button
              onClick={() => {
                router.push("/wordScramble");
              }}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-full bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Play Word Scramble
            </button>
          </div>
        </div>

        <div className="border border-gray-500 text-card-foreground bg-[#181a1b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-secondary relative overflow-hidden">
            <img
              src="./reaction.webp"
              alt="Trivia Quiz concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent flex items-end">
              <h3 className="text-white text-shadow-lg text-shadow-black font-nunito font-bold text-2xl p-4">
                Reaction Test
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4">
              Test your reflexes by clicking targets as fast as possible!
            </p>
            <ul className="mb-6 text-sm">
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Track reaction time</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Compete for fastest times</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" text-accent mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Multiple game modes</span>
              </li>
            </ul>

            <button
              onClick={() => {
                router.push("/reaction");
              }}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-full bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Play Reaction Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
