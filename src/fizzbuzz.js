class Fizzbuzz {
  generarHasta(limite) {
    let resultado = "";
    for (let actual = 1; actual <= limite; actual++) {
      resultado += this.generarPara(actual);
      if (actual != limite) resultado += ", ";
    }
    return resultado; 
  }

  generarPara(numero) {
    if (this.esMultiploDe(numero, 3) && this.esMultiploDe(numero, 5)) return "FizzBuzz";
    if (this.esMultiploDe(numero, 3)) return "Fizz";
    if (this.esMultiploDe(numero, 5)) return "Buzz";
    return numero.toString();
  }

  esMultiploDe(numero, multiplo) {
    return numero % multiplo === 0;
  }
  
}


export { Fizzbuzz };
