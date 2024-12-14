let num1, num2 = 10
//vemos que nesse código acima, teve um resultado undefined, isso é devido não ter defido um valor na primeira variável.
//veremos exemplo abaixo de como resolver isso.

console.log(num1)
console.log(num2)

let num3 = 5, num4 = 10

console.log(num3)
console.log(num4)

let num5, num6, num7

num5 = num6 = num7 = 10

console.log(num5)
console.log(num6)
console.log(num7)

//soma

let res = num2 + num3

console.log(res)

//subtração

//Posso fazer também a conta no console.
console.log(num4 - num3)

//ordem de precedência

let precedencia = (num6 + num7) * 2//o parênteses tem precedência sobre todos os outros operadores igual a ordem de precedência da matemática.

console.log(precedencia)

//divisão e resto da divisão

let div = 15
div/=2

console.log(div)
console.log(div%2)

//incremento

let num8 = 10
num8++
num8+=1
console.log(num8)

//decremento

let num9 = 10
num9--
num9-=1//pode ser qualquer valor.
console.log(num9)

/*Operadores Aritméticos
+
-
/
*
%
++
--
+=
-=
*/