function fizzBuzz(numero: number):string {

// Verifica se o número é divisível por 3 e 5
if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
}
// Verifica se o número é divisível somente por 3
else if (numero % 3 === 0) {
    return "Fizz";
}
// Verifica se o número é divisível somente por 5
else if (numero % 5 === 0) {
    return "Buzz";
}
// Se não for divisível nem por 3 nem por 5, retorna o número como texto
else {
    return String(numero);
}

}
module.exports = fizzBuzz;