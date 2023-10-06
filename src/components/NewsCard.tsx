import React from "react";
import "../style/global.css";
interface Props {
  name: string;
}

// const NewsCard: React.FC<Props> = ({ name }) => {
  function NewsCard(){
  return (
    <div className=" cursor-pointer  transition-all min-w-min flex flex-col gap-2  group  lg:w-1/3 lg:h-2/3 justify-between border  bg-white rounded hover:drop-shadow-lg hover:border-[5px]  hover:bg-primary overflow-hidden border-white drop-shadow w-full h-1/3">
      <div className="w-full h-2/3 flex">
        <img
          src={"/assets/banner-1.webp"}
          alt="newcard img"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex gap-1 flex-col items-start p-3 overflow-hidden h-1/3">
        <h2 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h2>
        <p className="p">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
