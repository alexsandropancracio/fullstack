const dc1 = document.getElementById('c1')//aqui eu chamo o HTML através do ID.
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]//podemos armazenar os elementos dentro de uma array e desta maneira podemos usar diversos métodos.

// for(x of arrayElementos){
//     x.innerHTML = 'Curso de Javascript'
// }

//arrayElementos.map((e)=>{
    //e.innerHTML = "Curso de Javascript"
    //console.log(e)
//})podemos operar todos os elementos da array com o map e para percorrer, iterar e modificar os elementos de uma array, de preferência usamos o método map que é mais simples e mais moderna.

console.log(dc1)//pra imprimir o a tag mais o elemento HTML.
console.log(dc1.id)//pra imprimir o id do elemento.
console.log(dc1.innerHTML)//pra imprimir o elemento HTML.

//dc1.innerHTML = "Curso de JS"//posso também mudar o elemento do HTML.

const colecaoHTML = [...document.getElementsByTagName('div')]//peguei o retorno do HTMLcolection e expalhei com o método spreed de uma forma menos direta.
//Mas eu poderia transformar a constante em um variável let e fazer da segunte maneira:

/*

let colecaoHTML = document.getElementsByTagName('div')
colecaoHTML = [...colecaoHTML]

*/


//console.log(arrayElementos)
console.log(colecaoHTML)