import React from "react";
import "../style/global.css";
interface Props {
  name: string;
}

const NewsCard: React.FC<Props> = ({ name }) => {
  return (
    <div className=" cursor-pointer  transition-all min-w-min flex flex-col gap-2  group  w-1/3 h-2/3 justify-between border  bg-white rounded hover:drop-shadow-lg hover:border-[5px]  hover:bg-primary overflow-hidden border-white drop-shadow">
      <div className="w-full h-2/3 flex">
        <img
          src={"/assets/banner-1.webp"}
          alt="hero img"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex gap-1 flex-col items-start p-3 overflow-hidden h-1/3">
        <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h3>
        <p className="p">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          dolorem alias rerum repudiandae
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
