import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
function Review() {
  return (
    <div className="bg-black w-[20rem] h-[15rem]  drop-shadow-xl shadow-2xl rounded-xl flex absolute items-start justify-center p-5 flex-col gap-5 bottom-5 right-0 z-30 cursor cursor">
      <p className="p text-white w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo
        quas aspernatur doloremque reiciendis! Dolore quasi culpa praesentium
        voluptates eos.
      </p>

      <p className="p text-gray-400 italic"> - Lorem, ipsum.</p>

      <div className="text-2xl text-primary flex items-center justify-start gap-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
    </div>
  );
}

export default Review;
