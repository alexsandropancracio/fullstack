const valores = [10,8,9,2]
const iterador = valores[Symbol.iterator]()

const texto = 'YouTube'
const iterando = texto[Symbol.iterator]()

console.log(valores)
console.log(iterador)
console.log(iterador.next().value)
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())//O primeiro valor é sobre a primeira índice da array. O done é informando até onde a iteração chegou, quando false, não chegou até o final e quando é done true é que chegou até o final da iteração dos elementos.

console.log(texto)
console.log(iterando)
console.log(iterando.next().value)
console.log(iterando.next())
console.log(iterando.next())
console.log(iterando.next())
console.log(iterando.next())
console.log(iterando.next())
console.log(iterando.next())
console.log(iterando.next())

//Coleções Iteráveis:
//More
//Find
//Filter
//Arrays
//String
//Map
//Sets
//etc...
