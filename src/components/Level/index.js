import React from "react";

const Level = (props) => {
  const { level, setLevel, verificarNivel } = props;

  const handleChangeLevel = (level) => {
    setLevel(level);
  };

  const handleRestart = () => {
    verificarNivel();
  };

  return (
    <div>
      {level === "" ? (
        ""
      ) : (
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
      )}
      <div className="absolute top-20 left-2 lg:left-20 text-white text-2xl">
        <button
          className=" rounded bg-sky-700  hover:bg-blue-700 px-2 m-2 "
          onClick={() => {
            handleRestart(level);
          }}
        >
          ↻
        </button>
      </div>
    </div>
  );
};

export default Level;
