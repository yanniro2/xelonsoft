import React from "react";
import { ImGlass } from "react-icons/im";
interface Props {
  name: string;
}

const Card: React.FC<Props> = ({ name }) => {
  return (
    <div className=" p-8 hover:rounded-xl cursor-pointer hover:bg-primary hover:scale-105 transition-all min-w-min flex flex-col items-start gap-2 hover:drop-shadow  hover:border-dark-shade group  w-full justify-evenly even:border-[1px] even:border-y-gray-500 ">
      <div className="flex gap-1 flex-col items-start">
        <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h3>
        <p className="p">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          dolorem alias rerum repudiandae dolores cumque amet nihil vitae
          repellendus consequatur. Tempore cumque rerum a alias vero in facilis
          officiis dolores?"
        </p>
      </div>
    </div>
  );
};

export default Card;
