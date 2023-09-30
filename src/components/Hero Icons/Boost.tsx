import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
export default function Boost() {
  return (
    <div className=" w-max h-max bg-white drop-shadow-xl shadow-2xl rounded-xl flex absolute items-center justify-center gap-5 p-1 lg:z-10 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 cursor z-20 scale-50 lg:scale-90 bottom-1/4 -translate-y-1/2 -left-[4rem]">
      <div className="bg-primary w-[5rem] h-[5rem] rounded-xl flex items-center justify-center p-3">
        <TbActivityHeartbeat className="text-4xl" />
      </div>

      <div className="flex flex-col items-start justify-center h-full w-full">
        <p className="p w-max text-gray-500 capitalize">Boost your business</p>
        <h1 className="h1">438</h1>
      </div>
    </div>
  );
}
