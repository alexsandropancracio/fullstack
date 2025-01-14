//Os loops, podemos classificar como definidos e indefinidos.
/*Ou seja, loops que eu sei a quantidade de vezes que preciso repetir e loops quando eu não sei ao certo a quantidade de vezes que preciso repetir.

O loop definidos é o FOR(Inicialização da variável de controle; Condição de execução; Variável de Controle + ou - e segue a mesma lógica do IF) e o indefinido é o WHILE e DO WHILE*/

for(let i = 0; i < 100; i++){
    //A expressão quando retorna falso, ele para o loop.
    //Cuidado com o for pra entrar no loop infinito.
    if(i % 2){
        console.log(i + ' é par.')
    } else {
        console.log(i + ' é impar.')
    }
}

console.log('Fim do Programa')

//Existem também duas variações do loop for, que é o FOR IN e o FOR OF


const obj = document.getElementsByTagName('div')

let num = [10, 20, 30, 40, 50]

for(let x = 0; x < num.length; x++){//O length é a quantidade de elementos que tenho dentro de uma variável ou objeto e uso pra percorrer a coleção.
    console.log(num[x])//Se repararmos, a relação não está direta, não foi impressa exatamente o que está dentro da array.
    //Então temos que que colocar o elemento e determinar com a posição do índice do loop e assim temos o elemento da condição.
}

for(z in num){
    console.log(num[z].innerHTML = 'Alex')//Com esse loop for in, percebemos que ele imprime a o índice e não os elementos de um array.
    //Para imprimir os elementos do FOR IN ao invés de imprimir os índices, eu preciso determinar a varíavel/array e depois o índice.
    //O "undefined" vem do retorno da propriedade do elemento e isso não é um elemento do HTML em si.
}

for(w of num){
    console.log(w.innerHTML = 'Alex')//O FOR OF itera diretamente os elementos dos índices.
}
