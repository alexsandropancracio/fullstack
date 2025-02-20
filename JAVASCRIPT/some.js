const array = document.querySelector('#array')
const pesquisar = document.querySelector('#pesquisar')
const resultado = document.querySelector('#resultado')

const numeros = [16,12,10,17,15,13,11]
array.innerHTML = "["+numeros+"]"

pesquisar.addEventListener('click', ()=>{
    const retorno = numeros.some((elemento,indice)=>{
        //O some vai me dar um ok quando pelo menos 1 elemento do array coincidir e não será necessário equivaler.
        if(elemento < 18){
            resultado.innerHTML = "Array não conforme na posição " + indice
        }
        return elemento >= 18
    })
    if(retorno){
        resultado.innerHTML = "Ok"
    }
})