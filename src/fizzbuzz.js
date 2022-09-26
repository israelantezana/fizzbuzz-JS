function fizzbuzz(n) {
  let fb = "";
  if (n % 3 === 0 && n % 5 === 0) {
    fb = "FizzBuzz";
  } else {
    if (n % 3 === 0) {
      fb = "Fizz";
    } else {
      if (n % 5 === 0) {
        fb = "Buzz";
      } else {
        fb = n.toString();
      }
    }
  }
  return fb;
}

function fizzbuzzHasta(n) {
  let aux = "";
  for (let i = 1; i <= n; i++) {
    aux += fizzbuzz(i);
    if (i != n) aux += ", ";
  }
  return aux;
}

export { fizzbuzz, fizzbuzzHasta };
