const array = document.querySelector('#array')
const pesquisar = document.querySelector('#reduzir')
const resultado = document.querySelector('#resultado')

const numeros = [1,2,3,4,5]
let antes = []
let total = []
array.innerHTML = "[" + numeros + "]"

pesquisar.addEventListener('click', (evento)=>{
        resultado.innerHTML = numeros.reduce((anterior,atual,posicao)=>{
            antes.push(anterior)
            total.push(atual)

            return atual + anterior //1+2=3 3(anterior)+3(atual)=6 6(anterior)+4(atual)=10 10+5=15
        })
        resultado.innerHTML += "<br/>" + antes
        resultado.innerHTML += "<br/>" + total
})