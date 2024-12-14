let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 1

console.log(!(n4<n1))

console.log((n1>n2)&&(n1>n4))
console.log((n1>n2)&&(n1<n4))
console.log((n2>n3)&&!(n1<n2))
console.log(!(n4<n3)&&(n4<n2))

console.log((n1>n2)||(n4<n3))
console.log((n3<n4)||(n3>n1))
console.log((n2>n4)||!(n1>n4))
console.log(!(n4<n2)||(n1>n3))

if(n1>n2){//true
    console.log(n1 + " é maior que " + n2)
}else{//false
    console.log(n1 + " é menor que " + n2)
}

if((n1>n2)&&(n3>n4)){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

if((n1>n2)||(n3<n4)){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

/* operadores lógicos
&& -> and;
v, v = v
v, f = f
f, v = f
f, f = f

|| -> or;
v, v = v
f , v = v
v , f = v
f, f = f
*/

/* operadores lógicos
&& -> and e
|| -> or ou
! -> not não
*/