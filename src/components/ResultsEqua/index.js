import React from "react";

const Results = (props) => {
  const { Resultados } = props;
  return (
    <div className="flex">
      <div className="">
        {Resultados.map((item, index) => {
          return (
            <div key={index} className="flex">
              <div className="p-2 ">{item.expression}</div>
              <div className="p-2 ">X = {item.value}</div>
              <div className="p-2">
                {item.fraction != 0 ? item.fraction : ""}
              </div>
              <div className="p-2">
                {item.value == item.resp ? " ✅" : " ❌"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
