import React from "react";

const FracScreenResp = (props) => {
  const { Resultados } = props;

  const handleChangeNum = (e) => {
    setRespNum(e.target.value);
  };
  const handleChangeDen = (e) => {
    setRespDen(e.target.value);
  };
  return (
    <>
      {Resultados.map((item, index) => {
        return (
          <div className="flex p-4" key={index}>
            <div className="fraction-input-container fraction-num ">
              <div className="fraction-num">{item.num1}</div>
              <div className="fraction-bar"></div>
              <div className="fraction-num">{item.num2}</div>
            </div>
            <div className="fraction-input-container fraction-num ">
              <div className="fraction-num">{item.operator}</div>
            </div>
            <div className="fraction-input-container fraction-num ">
              <div className="fraction-num">{item.num3}</div>
              <div className="fraction-bar"></div>
              <div className="fraction-num">{item.num4}</div>
            </div>
            <div className="fraction-input-container fraction-num ">
              <div className="fraction-num">=</div>
            </div>
            <div className="fraction-input-container fraction-num ">
              <div>{item.value}</div>
            </div>
            <div className="fraction-num ">
              {item.value == item.resp ? " ✅" : " ❌"}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FracScreenResp;
