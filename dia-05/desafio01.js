let num1 = Number(prompt('Primeiro número: '))
let num2 = Number(prompt('Segundo número: '))

let opcao = prompt('Qual operação: ')

switch(opcao){
    case 'mais':
        resp = num1 + num2
        console.log(num1 + " + " + num2 + " = " + resp)
        break
    case 'menos':
        resp = num1 - num2
        console.log(num1 + " - " + num2 + " = " + resp)
        break
    case 'vezes':
        resp = num1 * num2
        console.log(num1 + " * " + num2 + " = " + resp)
        break
    case 'divisão':
        resp = num1 / num2
        console.log(num1 + " / " + num2 + " = " + resp)
        break
}