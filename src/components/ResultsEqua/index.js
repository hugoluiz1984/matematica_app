import React from "react";

const Results = (props) => {
  const { Resultados } = props;
  return (
    <div className="d-flex justify-content-center ">
      <div className="">
        {Resultados.map((item, index) => {
          return (
            <div key={index} className="d-flex">
              <div className="p-1 w-100">{item.expression}</div>
              <div className="p-1 w-100">X = {item.value}</div>
              <div className="p-1 w-100">
                {item.fraction != 0 ? item.fraction : ""}
              </div>
              <div className="p-1">
                {item.value == item.resp ? " ✅" : " ❌"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center">
        <a href="../" className="btn btn-outline-primary mt-2 me-2">
          Restart
        </a>
      </div>
    </div>
  );
};

export default Results;
