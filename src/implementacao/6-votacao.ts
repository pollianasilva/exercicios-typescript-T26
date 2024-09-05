function apuraVotacao(votos: Array<number>) {
    // Inicializamos as variáveis para contar os votos
    let votos1 = 0;
    let votos2 = 0;
    let votos3 = 0;

    // Percorremos o array de votos para contar quantos votos cada número recebeu
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 1) {
            votos1++;  // Incrementa a contagem de votos para o candidato 1
        } else if (votos[i] === 2) {
            votos2++;  // Incrementa a contagem de votos para o candidato 2
        } else if (votos[i] === 3) {
            votos3++;  // Incrementa a contagem de votos para o candidato 3
        }
    }

    // Comparar as contagens e decidir o vencedor
    if (votos1 > votos2 && votos1 > votos3) {
        return "Vencedor: 1";  // O candidato 1 teve mais votos
    } else if (votos2 > votos1 && votos2 > votos3) {
        return "Vencedor: 2";  // O candidato 2 teve mais votos
    } else if (votos3 > votos1 && votos3 > votos2) {
        return "Vencedor: 3";  // O candidato 3 teve mais votos
    } else {
        return "Empate";  // Houve um empate
    }
}

module.exports = apuraVotacao;
