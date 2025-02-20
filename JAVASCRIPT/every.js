const array = document.querySelector('#array')
const pesquisar = document.querySelector('#pesquisar')
const resultado = document.querySelector('#resultado')
const txt = document.querySelector('#txt')

const numeros = [10,5,8,2,9,15,20]
array.innerHTML = "["+numeros+"]"

pesquisar.addEventListener('click',(evento)=>{
    const retorno = numeros.every((elemento,indice,array)=>{//A questão que every ele só identifica um elemento não conforme na iteração da array.
        if(elemento < 18){
            resultado.innerHTML = `Elemento ${elemento} na posição ${indice} está não conforme com a array.`
        }
        return elemento >= 18
    })
    if(retorno){
        resultado.innerHTML = "Array em conformidade."
    }
    console.log(retorno)
})
