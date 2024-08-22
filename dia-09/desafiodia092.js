let nome = ''
let idade = 0
let salarioAtual = 0
let resp = ' '
let aumento = 0.015
let ano = 2024

while (resp != 's'){
    nome = prompt('Nome: ')
    idade = Number(prompt('Idade: '))
    salarioAtual = Number(prompt('Salário: R$'))
    console.log('Nome: ' + nome + '\nIdade: ' + idade + '\nSalário: R$' + salarioAtual)
    resp = prompt('Todas as informações estão corretas: [s/n] ')
}

for(let c = 0; c <= 10; c++){
  salarioAtual += salarioAtual * aumento
  console.log(ano + ' - R$' + salarioAtual.toFixed(2))
  ano++
  aumento *= 2
}

//let aumento = 0.015
//console.log('Previsão salarial para os próximos 10 anos: ')

//for(let ano = 1; ano <= 10; ano++){
    //salarioAtual += salarioAtual * aumento
    //aumento *= 2

    //console.log((2023 + ano) + ' = R$' + salarioAtual.toFixed(2))
//}
