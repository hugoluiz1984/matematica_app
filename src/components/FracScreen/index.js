import React from "react";

const FracScreen = (props) => {
  const {
    num1,
    num2,
    num3,
    num4,
    operator,
    respNum,
    setRespNum,
    respDen,
    setRespDen,
  } = props;

  const handleChangeNum = (e) => {
    setRespNum(e.target.value);
  };
  const handleChangeDen = (e) => {
    setRespDen(e.target.value);
  };
  return (
    <div className="flex p-4">
      <div className="fraction-input-container fraction-num">
        <div className="fraction-num">{num1}</div>
        <div className="fraction-bar"></div>
        <div className="fraction-num">{num2}</div>
      </div>
      <div className="fraction-input-container fraction-num">
        <div className="fraction-num">{operator}</div>
      </div>
      <div className="fraction-input-container fraction-num">
        <div className="fraction-num">{num3}</div>
        <div className="fraction-bar"></div>
        <div className="fraction-num">{num4}</div>
      </div>
      <div className="fraction-input-container fraction-num">
        <div className="fraction-num">=</div>
      </div>
      <div className="fraction-input-container">
        <input
          className="fraction-input"
          type="text"
          value={respNum}
          onChange={handleChangeNum}
        />
        <div className="fraction-bar"></div>
        <input
          className="fraction-input"
          type="text"
          value={respDen}
          onChange={handleChangeDen}
        />
      </div>
    </div>
  );
};

export default FracScreen;
