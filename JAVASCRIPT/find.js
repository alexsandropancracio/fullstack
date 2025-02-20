const array = document.querySelector('#array')
const pesquisar = document.querySelector('#pesquisar')
const resultado = document.querySelector('#resultado')
const txt = document.querySelector('#txt')


const numeros = [10,5,8,2,9,15,20]
const palavras = ['HTML', 'CSS', 'Javascript']

array.innerHTML = palavras

pesquisar.addEventListener('click', ()=>{
    palavras.find((elemento, indice, array)=>{
        if(elemento.toUpperCase() == txt.value.toUpperCase()){
            resultado.innerHTML = 'Valor ' + elemento + ' encontrado na posição ' + indice + ' do array.'
            return elemento
        }else{
            resultado.innerHTML = 'Valor não encontrado.'
    }})//O método find retorna o valor do primeiro elemento do array que está sendo iterado, o índice e o array.
    
})