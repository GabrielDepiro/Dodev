let escolha = Number(prompt('1 - Gasolina/ 2 - Álcool/ 3 - Calibrar os pneus: '))
let valor = 0
let litrosGasolina = 0
let litrosAlcool = 0

switch(escolha){
    case 1:
        valor = Number(prompt('Digite o valor desejado: R$'))
        litrosGasolina = valor / 5
        console.log('Litros abastecidos: ' + litrosGasolina + ' litros')
        break
    case 2:
        valor = Number(prompt('Digite o valor desejado: R$'))
        litrosAlcool = valor / 3
        console.log('Litros abastecidos: ' + litrosAlcool + ' litros')
        break
    case 3:
        console.log('Pneus calibrados com sucesso.')

}       