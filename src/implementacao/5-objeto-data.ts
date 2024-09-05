function criaObjeto(data: string) {
    // Divida a string usando '/' como separador
    const partes = data.split('/');

    // Verifique se a string tem o formato esperado
    if (partes.length === 3) { //Verifica se o array partes contém exatamente 3 elementos. Isso é feito para garantir que a string de entrada está no formato esperado (dd/mm/aaaa).
        const dia = partes[0];
        const mes = partes[1];
        const ano = partes[2];

        // Retorne o objeto com as partes extraídas
        return {
            dia: dia,
            mes: mes,
            ano: ano
        };
    }

    // Caso o formato não esteja correto, retorne um objeto vazio ou lance um erro
    return {
        dia: '',
        mes: '',
        ano: ''
    };
}

module.exports = criaObjeto;
