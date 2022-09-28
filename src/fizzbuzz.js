function generarFizzBuzzPara(numero) {
  if (esMultiploDe(numero, 3) && esMultiploDe(numero, 5)) return "FizzBuzz";
  if (esMultiploDe(numero, 3)) return "Fizz";
  if (esMultiploDe(numero, 5)) return "Buzz";
  return numero.toString();
}

function esMultiploDe(numero, multiplo) {
  return numero % multiplo === 0;
}

function fizzbuzz(n) {
  let aux = "";
  for (let i = 1; i <= n; i++) {
    aux += generarFizzBuzzPara(i);
    if (i != n) aux += ", ";
  }
  return aux;
}

export { generarFizzBuzzPara, fizzbuzz };
