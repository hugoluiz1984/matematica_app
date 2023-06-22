import Fraction from "fraction.js";
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Soma", path: "/soma" },
  { label: "Subtração", path: "/subtracao" },
  { label: "Multiplicação", path: "/multi" },
  { label: "Divisão", path: "/divisao" },
  { label: "Frações", path: "/fracoes" },
  { label: "Equações do 1º Grau", path: "/equacoes1" },
  { label: "Equações do 2º Grau", path: "/equacoes2" },
];

export const ButtonsLinks = [
  { label: "Soma", path: "/soma" },
  { label: "Subtração", path: "/subtracao" },
  { label: "Multiplicação", path: "/multi" },
  { label: "Divisão", path: "/divisao" },
  { label: "Frações", path: "/fracoes" },
  { label: "Equações do 1º Grau", path: "/equacoes1" },
  { label: "Equações do 2º Grau", path: "/equacoes2" },
];

export const FracoesButtonsLinks = [
  { label: "Soma", path: "/fracoes/soma" },
  { label: "Subtração", path: "/fracoes/subtracao" },
  { label: "Multiplicação", path: "/fracoes/multi" },
  { label: "Divisão", path: "/fracoes/divisao" },
];
export const operators = ["+", "-", "x", "÷"];

export const comparators = [">", "=", "<"];

export const Resultados = [];

export const Permitidos = (event) => {
  const charCode = event.which ? event.which : event.keyCode;
  const char = String.fromCharCode(charCode);
  const allowedChars = /[0-9+-./b]/; // Permite apenas números
  //const permitodosC = [96,97,98,99,100,101,102,103,104,105,49,50,51,52,53,54,55,56,57,48,189,49]
  if (!allowedChars.test(char)) {
    event.preventDefault();
  }
};

export const eFracao = (resp, fract) => {
  if (!Number.isInteger(resp)) {
    const decimal = resp;
    const fraction = decimalToFraction(decimal);
    console.log(`${decimal} convertido para fração: ${fraction}`);
    fract = fraction;
    const RespEmFracao = fraction;
    return RespEmFracao;
  }
};
function decimalToFraction(decimal) {
  const fraction = new Fraction(decimal);
  return fraction.toFraction(true);
}
