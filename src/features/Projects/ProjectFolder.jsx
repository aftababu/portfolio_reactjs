import React, { useState } from "react";
import folder1 from "/folder1.svg";
import folder2 from "/folder2.svg";
import { useSearchParams } from "react-router-dom";

const ProjectFolder = ({ projects }) => {
  const [searchParams,setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setOpen(index);
  };

  return (
    <div>
      <div className="flex gap-5 flex-wrap justify-center sm:justify-start items-center">
        {projects.map((item, index) => (
          <div
            className={`flex flex-col justify-center items-center p-2 hover:bg-green-400/50 cursor-pointer ${
              open === index ? "active bg-green-400/50 rounded-md " : ""
            }`}
            onClick={() => handleClick(index)}
            key={index}
            onDoubleClick={() => {
              searchParams.set("category", item.value);
              setSearchParams(searchParams);
            }}
          >
            <img src={open===index ? folder2 : folder1} alt="" className="w-24 sm:w-28 md:w-32" /> 
            <p className="text-green-950 font-medium sm:text-base text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFolder;
