import React, { useEffect } from "react";

const Level = (props) => {
  const { level, setLevel } = props;

  const handleChangeLevel = (level) => {
    setLevel(level);
  };

  return (
    <div className="absolute top-20 right-2 lg:right-20 ">
      Nível:
      <div className="flex gap-1 text-white text-center">
        <button
          className=" rounded-full bg-sky-700  hover:bg-blue-700 w-8 h-8"
          onClick={() => {
            handleChangeLevel(0);
          }}
        >
          1
        </button>
        <button
          className=" rounded-full bg-sky-700  hover:bg-blue-700 w-8 h-8"
          onClick={() => {
            handleChangeLevel(1);
          }}
        >
          2
        </button>
        <button
          className=" rounded-full bg-sky-700  hover:bg-blue-700 w-8 h-8"
          onClick={() => {
            handleChangeLevel(2);
          }}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default Level;
