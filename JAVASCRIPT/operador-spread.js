let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1,...n2]//o spread pega os elemenos de uma array e retorna elemento por elemento.

const jogador1 = {nome: "Alex", energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: "Sandro", energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}//consigo fazer a concatenação dos objetos utilizando o operador spread

const objs1 = document.getElementsByTagName("div")//isso retorna uma coleção de elementos que é diferente de uma array.
const objs2 = [...document.getElementsByTagName("div")]

/*
Quando eu tenho um HTMLcolection, essa coleção só recebe elementos html. 
Mas quando eu tenho uma array, eu posso adicionar outros tipos de elementos que não é html,
como valores, strings, métodos e etc...

Por exemplo:
*/

/*objs1.forEach (element => {
    console.log(objs1)
}) esse código apresenta erro por ser um HTMLcolection.  */

objs2.forEach (element => {
    console.log(objs2)
})

console.log(objs1)//o node não conhece o document, que é uma emplementação do DOM algo pro frontside, pois o node é serverside.
console.log(objs2)

const soma = (v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [1,5,4]

console.log(soma(...valores))//com o operador spread eu espalho cada valor de um objeto para cada propriedade de uma função.

console.log(jogador3)

//console.log('n1: ' + n1)
//console.log('n2: ' + n2)
console.log('n3: ' + n3)
console.log("Tipo de n3: " + typeof(n3))
