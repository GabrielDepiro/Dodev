let opcao = 's'
let cont = 0
let media = 0
let nota = 0
let soma = 0
let sexoM = 0
let sexoF = 0
let maiorM = 0

while(opcao == 's'){
    nota = Number(prompt('Digite a nota: '))
    let sexo = prompt('Digite o sexo [m/f]: ')
    console.log('Nota: ' +  nota  + '\nSexo: ' + sexo)
    if(sexo == 'm'){
        sexoM += 1
        if(nota > maiorM)
            maiorM = nota
    }
    if(sexo == 'f' && nota > 7){
        sexoF += 1
    }
    cont += 1
    soma += nota
    opcao = prompt('Deseja continuar [s/n]: ')
}
media = soma / cont
console.log('A média geral dos alunos: ' + media)
console.log('Quantidade de homens que enviaram as notas: ' + sexoM)
console.log('Mulheres que tiveram nota acima de 7: ' + sexoF)
console.log('A maior nota entre os homens é: ' + maiorM)