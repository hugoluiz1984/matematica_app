import React from "react";

const Results = (props) => {
  const { Resultados } = props;
  return (
    <div className="flex">
      <div className="">
        {Resultados.map((item, index) => {
          console.log(item);
          return (
            <div key={index} className="flex">
              <div className="p-2 ">{item.expression}</div>
              <div className="p-2 ">
                X1 = {item.value.raiz1}{" "}
                {item.value == item.resp.raiz1 ? " ✅" : " ❌"}
              </div>
              <div className="p-2 ">
                X2 = {item.value.raiz2}
                {item.value == item.resp.raiz2 ? " ✅" : " ❌"}
              </div>
              <div className="p-2">
                {item.fraction != 0 ? item.fraction : ""}
              </div>
              <div className="p-2"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
