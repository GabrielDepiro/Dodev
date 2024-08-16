let num = Number(prompt("Digite um número: "))

for (let i = num; i <= num + 2; i++){
    console.log('tabuada do número: ' + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + ' x ' + j + ' = ' + (i*j))
    }        
}