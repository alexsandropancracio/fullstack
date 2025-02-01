//Relação dos elementos DOM

const caixa = document.querySelector('#caixa')
const box = [...document.querySelectorAll('.curso')]

console.log(caixa.children)//Quando é uma propriedade, não precisa do parênteses, quando é um método, precisa ser usado o parênteses. Dessa forma também, eu consigo pegar o "elemento filho" da variável que armazena a div do id caixa.

console.log(caixa.children[0])//Além disso, indico qual elemento eu posso pegar usando os colchetes.

console.log(caixa.firstElementChild)//Assim como vemos no console, o firtElementChild serve pra pegar o primeiro elemento do parent element.

console.log(caixa.children[caixa.children.length-1])//De forma específica, fazemos assim para apontar o último elemento dentro do parent element.

console.log(caixa.lastElementChild)//Diretamente, podemos também dessa forma pegar o último elemento do parent element.

console.log(caixa.getRootNode())//Assim, além de termos o parent element, podemos saber também qual é o elemento raiz do parent element, ou seja, o rootNode

console.log(caixa.hasChildNodes())//Com esse método eu verifico se o elemento possiu "filhos".

console.log(box[0].hasChildNodes())//Dessa forma que verifico também se um conjunto de elementos tem filhos.

if(box[0].childNodes.length > 0){
    console.log('Possui elementos!')
} else {
    console.log('Não possui elementos.')
}

if(box[0].children.length > 0){
    console.log('Possui elementos HTML!')
} else {
    console.log('Não possui elementos HTML.')
}

if(caixa.childNodes.length > 0){
    console.log('Possui filhos!')
} else {
    console.log('Não possui filhos.')
}

console.log(caixa.children[1].innerHTML)//Da mesma forma que determino o índice com a array do box, assim faço também com a div.

console.log(box[0].childNodes)//Assim verificamos o que há dentro da tag, seja um elemento HTML, seja um comentário, seja um texto ou qualquer outra coisa.

console.log(box[0].children)//Dessa forma verificamos se há somente elementos HTML.

box.forEach((element)=>{
    console.log(element)
})

for(const index of box){//Desse forma como acima, iteramos um um array.
    console.log(index)
}


