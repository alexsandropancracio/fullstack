//no WHILE, enquanto a condição for verdadeira, eu executo o código e primeiro executamos o teste lógico.
//no DO WHILE a primeira coisa que eu faço é a condição dos comandos pra depois o teste lógico.

/*No WHILE a condição do bloco sendo falsa, não tenho a garantia de execução do código,
diferente do DO WHILE que tenho a garantia de pelo menos o código ser executado uma vez 
mesmo a expressão do código sendo FALSE.*/

let n = 10

while(n < 10){
    console.log("Curso JS")
    n++
}

console.log("Fim do programa.")

do{
    console.log("Testando DO WHILE")
    n++
}while(n<10)

console.log("Fim do programa.")