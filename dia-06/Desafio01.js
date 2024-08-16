let num = Number(prompt("Digite um número: "))

if (num >= 0){
    for(let cont = 0; cont <= num; cont++)
        console.log(cont)
}else{
    console.log('Número inválido')
}