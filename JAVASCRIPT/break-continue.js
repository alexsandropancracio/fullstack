//O Continue serve pra parar a iteração atual e prossegue para a próxima.
//O Break serve para parar a iteração total e segue a continuação do código.

let z = 0
let y = 1000
let x = 0


/*while(z < y){
    console.log("Cursando Javascript - " + z)
    if(z>10){
        break
    }
    z++//condição para não ter um looping infinito
}*/

console.log('Fim do Programa.')

for(let w = z; w < y; w++){
    //console.log('Total: ' + w)
    if(w % 2 != 0){
        continue
    }
    x++
}

console.log('Quantidade de ímpares: ' + x)
console.log('Fim do Programa.')