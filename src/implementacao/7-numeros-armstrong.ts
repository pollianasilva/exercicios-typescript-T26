function numerosArmstrong(numero: number): string {
    // Converter o número em uma string para pegar os dígitos
    let numeroStr = numero.toString();
    
    // Determinar o número de dígitos
    let numDigitos = numeroStr.length;

    // Inicializar a soma
    let soma = 0;

    // Percorrer cada dígito do número
    for (let i = 0; i < numDigitos; i++) {
        // Obter o dígito como número inteiro
        let digito = parseInt(numeroStr[i]);

        // Elevar o dígito à potência do número de dígitos e adicionar à soma
        soma += Math.pow(digito, numDigitos);
    }

    // Verificar se a soma é igual ao número original
    if (soma === numero) {
        return 'Este eh um numero de Armstrong!';
    } else {
        return 'Este nao eh um numero de Armstrong!';
    }
}

module.exports = numerosArmstrong;
