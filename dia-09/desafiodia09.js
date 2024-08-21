let nome = prompt('Nome: ')
let idade = Number(prompt('Idade: '))
let peso = Number(prompt('Peso: '))
let altura = Number(prompt('Altura: '))
let profissao = prompt('Profissão: ')

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'Kg')

if (idade >= 18){
    console.log('Está liberado para tomar umas geladas')
}else{
    console.log('Sem gelada pra você')
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log('Sua idade em semanas é: ' + semanas)
console.log('Sua idade em meses é: ' + meses)
console.log('Sua idade em dias é: ' + dias)

let imc = peso / (altura * altura)
console.log('IMC: ' + imc.toFixed(2) + 'kg/m²')
if(imc < 18.5){
    console.log('Magreza')
}else if(imc >= 18.5 && imc < 24.9){
    console.log('Normal')
}else if(imc >= 24.9 && imc <= 30){
    console.log('Sobrepeso')
}else{
    console.log('Obesidade')
}
let anoAtual = 2024
let anoNasc = anoAtual - idade
console.log('Você nasceu no ano de ' + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade')
    idadeAtual++
}

