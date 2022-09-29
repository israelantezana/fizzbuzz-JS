import { Fizzbuzz } from "./fizzbuzz";

describe("Fizzbuzz de un numero", () => {
  let fizzbuzz = null 
  beforeEach(()=>{
      fizzbuzz = new Fizzbuzz();
  })
  it("Numero sin regla", () => {
    expect(fizzbuzz.generarPara(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    expect(fizzbuzz.generarPara(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    expect(fizzbuzz.generarPara(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para multiplos de 3", () => {
    expect(fizzbuzz.generarPara(6)).toEqual("Fizz");
    expect(fizzbuzz.generarPara(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para multiplos de 5", () => {
    expect(fizzbuzz.generarPara(10)).toEqual("Buzz");
    expect(fizzbuzz.generarPara(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para multiplos de 3 y 5", () => {
    expect(fizzbuzz.generarPara(15)).toEqual("FizzBuzz");
    expect(fizzbuzz.generarPara(30)).toEqual("FizzBuzz");
  });

  describe("Fizzbuzz de una secuencia", () => {
    it("Genera la secuencia hasta el numero especificado", () => {
      expect(fizzbuzz.generarHasta(3)).toEqual("1, 2, Fizz");
      expect(fizzbuzz.generarHasta(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
