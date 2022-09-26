import { fizzbuzz, fizzbuzzHasta } from "./fizzbuzz";

describe("Fizzbuzz de un numero", () => {
  it("Numero sin regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para multiplos de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
    expect(fizzbuzz(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para multiplos de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
    expect(fizzbuzz(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para multiplos de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });

  describe("Fizzbuzz de una secuencia", () => {
    it("Genera la secuencia hasta el numero especificado", () => {
      expect(fizzbuzzHasta(3)).toEqual("1, 2, Fizz");
      expect(fizzbuzzHasta(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
