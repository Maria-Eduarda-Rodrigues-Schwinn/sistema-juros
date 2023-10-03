import entradaDados from 'readline-sync';

console.log("\nAplicação de Juros:")

let valorDivida = entradaDados.question('\nInforme o valor devido: ');

if (valorDivida <= 0) {
    console.log("\nO valor da dívida deve ser maior que 0!")
} else {
    let diasAtrasados = entradaDados.question('\nInforme quantos dias se passaram desde o vencimentos do boleto: ')

    if (diasAtrasados <=  15 && diasAtrasados > 0) {
        let juros = 5

        let valor = Number(valorDivida) + ((Number(valorDivida) / 100) * juros)

        console.log("\n\nValor original da dívida: R$ " + valorDivida)
        console.log("Dias atrasados: " + diasAtrasados)
        console.log("Taxa de Juros: " + juros + "%")
        console.log("Valor total com juros: R$ " + valor)
    } else if(diasAtrasados > 15) {
        let juros = 10

        let valor = Number(valorDivida) + ((Number(valorDivida) / 100) * juros)

        console.log("\n\nValor original da dívida: R$ " + valorDivida)
        console.log("Dias atrasados: " + diasAtrasados)
        console.log("Taxa de Juros: " + juros + "%")
        console.log("Valor total com juros: R$ " + valor)
    } else {
        console.log("\n\nVocê está em dia!")
    }
}

