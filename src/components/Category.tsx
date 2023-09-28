import React from "react";
import { ImGlass } from "react-icons/im";
interface Props {
  name: string;
}

const Category: React.FC<Props> = ({ name }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-none cursor-pointer hover:bg-primary hover:scale-105 transition min-w-min flex flex-col items-start gap-2 hover:drop-shadow  hover:border-dark-shade group h-[20rem] w-1/4 justify-evenly">
      <div className="bg-primary w-[3rem] h-[3rem] rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-white group-hover:text-primary transition ">
        <ImGlass />
      </div>
      <div>
        <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h3>
        <p className="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          dolorem alias rerum repudiandae dolores cumque amet nihil vitae
          repellendus consequatur. Tempore cumque rerum a alias vero in facilis
          officiis dolores?
        </p>
      </div>
    </div>
  );
};

export default Category;
