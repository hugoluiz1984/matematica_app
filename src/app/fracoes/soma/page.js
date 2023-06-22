"use client";
import React, { useEffect, useState } from "react";
import { Resultados } from "@/utils/data";
import Fraction from "fraction.js";

export default function Fracoes() {
  const [expression, setExpression] = useState("");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [resp, setResp] = useState("");
  const [resultsScreen, setResultsScreen] = useState(false);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const Resultados = [];
    getNum();

    return () => {
      Resultados.splice(0, Resultados.length);
    };
  }, []);

  useEffect(() => {
    cont === 10 ? setResultsScreen(true) : setResultsScreen(false);
  }, [cont]);

  const getNum = () => {
    const num1 = getRandomIntInclusive(-10, 10);
    const num2 = getRandomIntInclusive(1, 10);
    const num3 = getRandomIntInclusive(-10, 10);
    const num4 = getRandomIntInclusive(1, 10);
    const operator = "+";
    setNumber1(num1);
    setNumber2(num2);
    setNumber3(num3);
    setNumber4(num4);
    setExpression(`${num1 / num2} ${operator} ${num3 / num4}`);
    setResp("");
  };

  function decimalToFraction(decimal) {
    const fraction = new Fraction(decimal);
    return fraction.toFraction(true);
  }

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const verificar = () => {
    if (resp !== "") {
      let val = number1 / number2 + number3 / number4;
      let tempExp;
      let fract = 0;
      if (!Number.isInteger(val)) {
        const decimal = val;
        const fraction = decimalToFraction(decimal);
        console.log(`${decimal} convertido para fração: ${fraction}`);
        fract = fraction;
        val = fraction;
      }
      console.log(`${val}`);
      tempExp = {
        expression: `(${number1})/(${number2}) + (${number3})/(${number4}) = ${val}`,
        resp: resp,
        value: val.toString(),
      };

      Resultados.push(tempExp);
      console.log(Resultados);
      getNum();
      setCont(cont + 1);
      setResp("");
    }
  };
  const handleChange = (e) => {
    setResp(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="text-3xl">Soma de Frações</h1>
      </div>
      <div className="text-center p-10 text-3xl">
        {`(${number1})/${number2} + (${number3})/${number4} = `}
        <input
          className="w-24 text-center "
          onChange={handleChange}
          value={resp}
        ></input>
      </div>
      <button
        onClick={verificar}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 rounded w-44"
      >
        Verificar
      </button>

      <div className="text-center p-10 text-2xl">
        {Resultados.map((item, index) => {
          return (
            <div key={index} className="flex ">
              <div className="p-1 w-100">{item.expression}</div>
              <div className="p-1">
                {item.value == item.resp ? " ✅" : " ❌"}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
