"use client";
import React, { useEffect, useState } from "react";
import { Resultados } from "@/utils/data";
import Fraction from "fraction.js";
import FracScreen from "@/components/FracScreen";
import FracScreenResp from "@/components/FracScreenResp";
import Level from "@/components/Level";

export default function Fracoes() {
  const [expression, setExpression] = useState("");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [resp, setResp] = useState("");
  const [respNum, setRespNum] = useState("");
  const [respDen, setRespDen] = useState("");
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
    const operator = "0";
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
    respNum != "" || respDen != "" ? setResp(respNum / respDen) : setResp("");
    if (resp !== "") {
      let val = number1 / number2 - number3 / number4;
      let tempExp;
      let fract = 0;
      let newResp = 0;
      val = eFracao(val, fract);
      console.log(val);
      newResp = eFracao(resp, fract);
      console.log(`${val}`);
      tempExp = {
        num1: number1,
        num2: number2,
        num3: number3,
        num4: number4,
        operator: "x",
        expression: `(${number1})/${number2} - (${number3})/${number4} = ${val}`,
        resp: newResp,
        value: val,
      };

      Resultados.push(tempExp);
      console.log(Resultados);
      getNum();
      setCont(cont + 1);
      setResp("");
      setRespNum("");
      setRespDen("");
    }
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
  const verificarNivel = () => {
    getNum();
    setResp("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="text-3xl">Subtração de Frações</h1>
        <Level level={""} setLevel={""} verificarNivel={verificarNivel} />
      </div>
      <FracScreen
        num1={number1}
        num2={number2}
        num3={number3}
        num4={number4}
        operator={"-"}
        respNum={respNum}
        setRespNum={setRespNum}
        respDen={respDen}
        setRespDen={setRespDen}
      />
      <button
        onClick={verificar}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 rounded w-44"
      >
        Verificar
      </button>

      <div className="text-center p-10 text-2xl">
        {Resultados && <FracScreenResp Resultados={Resultados} />}
      </div>
    </main>
  );
}
