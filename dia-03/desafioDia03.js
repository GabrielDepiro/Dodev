let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
let altura = Number(prompt('Digite sua altura: '));
let peso = Number(prompt('Digite seu peso: '));

let anoNascimento = Number(2023 - idade);
let IMC = peso / (altura * altura)

console.log('Olá, ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNascimento + 
            ', tem ' + altura + ' de altura, pesa ' + peso + 'kg seu IMC é ' + IMC + ' Kg/m²')
