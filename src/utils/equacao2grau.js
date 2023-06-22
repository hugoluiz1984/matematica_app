export const equa2 = (num1, num2, num3) => {
  let a = num1;
  let b = num2;
  let c = num3;

  let delta = b * b - 4 * a * c;
  console.log(a, b, c, "delta", delta);

  if (delta > 0) {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { raiz1: raiz1.toFixed(2), raiz2: raiz2.toFixed(2) };
  } else {
    if (delta == 0) {
      let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
      return { raiz1: raiz1.toFixed(2), raiz2: raiz1.toFixed(2) };
    } else {
      let real = -b / (2 * a);
      let x1 = Math.sqrt(-delta) / (2 * a);
      let x2 = -Math.sqrt(-delta) / (2 * a);
      return {
        raiz1: `${real.toFixed(2)} + ${x1.toFixed(2)}i`,
        raiz2: `${real.toFixed(2)} + ${x2.toFixed(2)}i`,
      };
    }
  }
};
