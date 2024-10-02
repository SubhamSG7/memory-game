import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gradient-to-r from-stone-500 to-stone-700">
      <h2 className="text-slate-50 text-center mt-10 text-2xl font-bold">Memory Test</h2>
      <div className="p-4 bg-white rounded shadow-lg max-w-md mx-auto mt-4">
        <p className="mb-4">
          Challenge your memory skills by finding matching pairs of cards. 
          Flip the cards to reveal images and try to remember their positions!
        </p>
        <p className="mb-4">
          Perfect for all ages, this game offers a fun way to enhance cognitive skills 
          while having a blast with family and friends.
        </p>
        <p className="text-center font-semibold">Are you ready to play?</p>
      </div>
      <div className="flex-grow flex items-center justify-center"> 
        <Link to="/Game">
          <button className="text-slate-50 text-2xl p-1 border-r-2 border-b-2 bg-green-800 hover:bg-gray-600 italic">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
