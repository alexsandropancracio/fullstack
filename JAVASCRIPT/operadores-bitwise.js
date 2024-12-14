let n1 = 11
let n2 = 14

let res = n1 & n2//trás o retorno decimal conforme a equivalência binária.

console.log(res)

let n3 = 10
let n4 = 15

let resu = n1 | n2//onde eu tiver o bit 1 independente da equivalência, ele sempre será 1 com esse operador.

console.log(resu)

let n5 = 10
let n6 = 11

let total = n5 ^ n6//todo binário equivalente retorna 0, mas se houver o binário não equivalente, retorna o número 1.

console.log(total)

let n7 = 10
let n8 = 30

let bit = n7 << 1//quando eu faço uma operação de bitwise para a esquerda, eu estou dobrando o valor da variável.
let wise = n8 >>1//quando eu faço uma operação de bitwise para a direita, eu estou divindo o valor pela metado da variável.

console.log(bit)
console.log(wise)

/*operadores bitwise
& -> and
1, 1 = 1
1, 0 = 0
0, 1 = 0
0, 0 = 0

| -> or
1, 1 = 1
1, 0 = 1
0, 1 = 1
0, 0 = 0
*/