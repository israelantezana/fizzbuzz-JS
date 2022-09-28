import { generarFizzBuzzPara, fizzbuzz } from "./fizzbuzz";

describe("Fizzbuzz de un numero", () => {
  it("Numero sin regla", () => {
    expect(generarFizzBuzzPara(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    expect(generarFizzBuzzPara(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    expect(generarFizzBuzzPara(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para multiplos de 3", () => {
    expect(generarFizzBuzzPara(6)).toEqual("Fizz");
    expect(generarFizzBuzzPara(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para multiplos de 5", () => {
    expect(generarFizzBuzzPara(10)).toEqual("Buzz");
    expect(generarFizzBuzzPara(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para multiplos de 3 y 5", () => {
    expect(generarFizzBuzzPara(15)).toEqual("FizzBuzz");
    expect(generarFizzBuzzPara(30)).toEqual("FizzBuzz");
  });

  describe("Fizzbuzz de una secuencia", () => {
    it("Genera la secuencia hasta el numero especificado", () => {
      expect(fizzbuzz(3)).toEqual("1, 2, Fizz");
      expect(fizzbuzz(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
