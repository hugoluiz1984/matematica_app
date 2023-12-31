"use client";
import React, { useEffect, useState } from "react";
import { Resultados } from "@/utils/data";
import AddScreen from "@/components/AddScreen";
import Level from "@/components/Level";
//import { Button, Link } from "@nextui-org/react";

export default function Soma() {
  const [expression, setExpression] = useState("");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [resp, setResp] = useState("");
  const [resultsScreen, setResultsScreen] = useState(false);
  const [cont, setCont] = useState(0);
  const [nivel, setNivel] = useState(0);

  useEffect(() => {
    const Resultados = [];
    getNum(0, 9);

    return () => {
      Resultados.splice(0, Resultados.length);
    };
  }, []);

  useEffect(() => {
    verificarNivel();
  }, [nivel]);

  const verificarNivel = () => {
    if (nivel === 0) {
      getNum(0, 9);
    } else if (nivel === 1) {
      getNum(0, 99);
    } else {
      getNum(0, 999);
    }
  };

  useEffect(() => {
    cont === 10 ? setResultsScreen(true) : setResultsScreen(false);
  }, [cont]);

  const getNum = (min, max) => {
    const num1 = getRandomIntInclusive(min, max);
    const num2 = getRandomIntInclusive(min, max);
    const operator = "-";

    setNumber1(num1);
    setNumber2(num2);
    setExpression(`${num1} ${operator} ${num2}`);
    setResp("");
  };

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const verificar = () => {
    if (resp !== "") {
      let val = number1 - number2;
      let tempExp;

      tempExp = {
        expression: `(${number1}) - (${number2}) = ${number1 - number2}`,
        resp: resp,
        value: val.toString(),
      };

      Resultados.push(tempExp);
      console.log(Resultados);
      verificarNivel();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="text-3xl">Subtração</h1>
        <Level
          level={nivel}
          setLevel={setNivel}
          verificarNivel={verificarNivel}
        />
      </div>
      <AddScreen
        num1={number1}
        num2={number2}
        operator={"-"}
        respNum={resp}
        setRespNum={setResp}
      />{" "}
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
