function contadorDeOcorrencia(texto: string, letra: string): number {
    let contador: number = 0; 
    for (let i = 0; i < texto.length; i++) { //O loop começa no índice 0 e vai até o comprimento total do texto (texto.length).
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
}

module.exports = contadorDeOcorrencia;
