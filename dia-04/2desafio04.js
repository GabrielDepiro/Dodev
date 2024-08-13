let nome = prompt('Nome: ')
let idade = Number(prompt('Idade: '))
let carteira = prompt('Tem carteira de motorista? ')
let carro = prompt('Tem carro? ')

if(idade < 18 || carteira == 'nao'){
    console.log(nome + ', você não pode dirigir')
} else if (idade >= 18 && carteira == 'sim' && carro == 'nao'){
    console.log(nome + ', você pode dirigir mas não tem carro')
}else if (idade >= 18 && carteira == 'sim' && carro == 'sim'){
    console.log(nome + ', você será o motorista')
}
