function somaDobrada(umValor: number, outroValor: number):number { // :number = o valor que a função vai retornar também será um número. 

// Regra 1: Se algum dos dois números for menor que 1, retorna -1 | Quando a entrada for "3" e "-3", a saida deve ser "-1"
if (umValor < 1 || outroValor < 1) { // || é um operador que significa "ou". Ele é usado para verificar se pelo menos uma das condições é verdadeira.
    return -1;
}

// Regra 2: Se os dois números forem iguais, retorna o dobro da soma
if (umValor === outroValor) { //=== é um operador que significa "igual a". Ele é usado para verificar se dois valores são exatamente iguais.
    return 2 * (umValor + outroValor);//Quando a entrada for "7" e "7", a saida deve ser "28"
}

// Regra 3: Caso contrário, retorna a soma dos dois números
return umValor + outroValor;
}


module.exports = somaDobrada;