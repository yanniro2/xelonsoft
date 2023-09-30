import React from "react";
import { HiChartBar } from "react-icons/hi";
function Chart() {
  return (
    <div className=" w-max h-max bg-primary drop-shadow-xl shadow-2xl rounded-xl flex  absolute items-center justify-center gap-5 p-1 lg:top-[8rem] -right-[4rem] z-30 cursor lg:scale-90 scale-50 top-[4rem]">
      <div className="bg-white w-[5rem] h-[5rem] rounded-xl flex items-center justify-center p-3">
        <HiChartBar className="text-4xl text-primary" />
      </div>

      <div className="flex flex-col items-start justify-center h-full w-full">
        <h1 className="h1 text-white">100%</h1>
        <p className="p w-max font-semibold capitalize">
          performance increased
        </p>
      </div>
    </div>
  );
}

export default Chart;
