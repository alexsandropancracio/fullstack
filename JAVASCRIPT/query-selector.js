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

console.log(dc1)//pra imprimir a tag mais o elemento HTML.
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
//console.log(colecaoHTML)

const cursoTodos = [...document.getElementsByClassName('curso')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso')[0]//Dessa forma selecionamos o índice de uma array.

const queryDiv = document.querySelector('div')//O querySecetor ele pega o primeiro elemento que encontrar da chave que foi especificada.

const queryTodasDiv = [...document.querySelectorAll('div')]//Já o querySelectorAll retorna uma coleção de todas os elementos especificados, além disso, nos retorna um NodeList que é um padrão mais antigo que browsers não reconhece isso e que é quase a mesma coisa que um HTMLcolection, então para isso transformamos em um array com o operador spreed.

const queryClass = document.querySelectorAll('.curso')//Para pegarmos a classe no do elemento HTML, no queryselector é somente colocarmos um ponto antes do elemento na chave.

const queryID = document.querySelectorAll('#c1')//Assim eu pego um elemento do HTML pelo ID.

const queryDoisElementos = document.querySelector('div, p')//Dessa forma, usando a vírgula, pegamos dois elementos ou mais do HTML. Como da mesma forma isso serve pra tag HTML, Classes e ID.

const queryAtributo = document.querySelector('div[class]')//dessa forma obtemos todos os elementos do HTML conforme solicitado na chave, mas somente os que contém uma classe.

const queryElementoDeElemento = document.querySelector('div > p')//Assim obtemos todos os elementos 'p' dentro do elemento 'div' que é o parent(elemento pai), ou seja, assim só obtemos os elementos chield(elementos filho).

console.log(queryDiv)
console.log(queryTodasDiv)

/*cursoC1.map((el)=>{
    el.classList.add('destaque')
})*/
