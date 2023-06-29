import React from "react";

const AddScreen = (props) => {
  const { num1, num2, operator, respNum, setRespNum } = props;

  const handleChangeNum = (e) => {
    setRespNum(e.target.value);
  };
  return (
    <div className="flex p-4">
      <div className="fraction-input-container">
        <div className="Add-num">{num1}</div>
        <div className="Add-num">{`${operator} ${num2}`}</div>
        <div className="Add-bar"></div>
        <div className="">
          <input
            className="w-24"
            type="text"
            value={respNum}
            onChange={handleChangeNum}
          />
        </div>
      </div>
    </div>
  );
};

export default AddScreen;
