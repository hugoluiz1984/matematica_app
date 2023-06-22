"use client";
import React, { useEffect, useState } from "react";
import { Resultados } from "@/utils/data";
import Fraction from "fraction.js";
import ResultsEqua2 from "@/components/ResultsEqua2";
import { equa2 } from "@/utils/equacao2grau";

export default function Fracoes() {
  const [expression, setExpression] = useState("");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [resp, setResp] = useState("");
  const [resp1, setResp1] = useState("");
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
    const num2 = getRandomIntInclusive(-10, 10);
    const num3 = getRandomIntInclusive(-10, 10);

    setNumber1(num1);
    setNumber2(num2);
    setNumber3(num3);
    setExpression(`(${number1})X²+(${number2})X +(${number3}) = 0`);
    setResp("");
  };
  const eFracao = (resp, fract) => {
    if (!Number.isInteger(resp)) {
      const decimal = resp;
      const fraction = decimalToFraction(decimal);
      console.log(`${decimal} convertido para fração: ${fraction}`);
      fract = fraction;
      const RespEmFracao = fraction;
      return RespEmFracao;
    }
    return resp;
  };

  function decimalToFraction(decimal) {
    const fraction = new Fraction(decimal);
    return fraction.toFraction(true);
  }

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const verificar = () => {
    if (resp !== "" || resp1 !== "") {
      const equa = equa2(number1, number2, number3);
      console.log(equa);
      let val = equa;
      let tempExp;
      let fract = 0;
      let newResp = 0;
      let newResp1 = 0;
      //val = eFracao(val, fract);
      newResp = eFracao(resp, fract);
      newResp1 = eFracao(resp1, fract);
      tempExp = {
        expression: `(${number1})X²+(${number2})X +(${number3}) = 0`,
        resp: resp,
        resp1: resp1,
        value: equa,
      };
      Resultados.push(tempExp);
      getNum();
      setCont(cont + 1);
      setResp("");
      setResp1("");
    }
  };
  const handleChange = (e) => {
    setResp(e.target.value);
  };
  const handleChange1 = (e) => {
    setResp1(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="text-3xl">Equações do 2º Grau</h1>
      </div>
      <div className="text-center p-10 text-3xl">
        {`(${number1})X² + (${number2})X + (${number3}) = 0`}
        <div>
          X1 =
          <input
            className="w-24 text-center "
            onChange={handleChange}
            value={resp}
          ></input>
        </div>
        <div>
          X2 =
          <input
            className="w-24 text-center "
            onChange={handleChange1}
            value={resp1}
          ></input>
        </div>
      </div>
      <button
        onClick={verificar}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 rounded w-44"
      >
        Verificar
      </button>

      <div className="text-center p-10 text-2xl">
        <ResultsEqua2 Resultados={Resultados} />
      </div>
    </main>
  );
}
