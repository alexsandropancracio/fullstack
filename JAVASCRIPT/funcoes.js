function nome(){//Usamos parâmetros para a função operar, assim chamamos isso de função parametrizada.
    console.log("Alex")//Declaração da função.
}

nome()//Chamada da função.

//Podemos colocar a função dentro de um looping?

for(let x = 0; x <= 10; x++){
    function contagem(){
        console.log("O total da contagem é: " + x)
        
    }
    soma()//Posso chamar também uma função dentro de outra função ou um looping.
    contagem()
}

function soma(){
    let x = 10
    let y = 0
    total = x + y
    console.log(total)
}

function mudarTexto(){//Função sendo chamada no HTML.
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML = "Curso"
    d2.innerHTML = "Javascript"
    d3.innerHTML = "Desenvolvimento"
}

function curso(){
    return "Javascript"//já que eu retorno um valor, que é uma string.
}

console.log(curso())//eu retorno esse valor no console ou no innerHTML.

function mult(){
    let x = 10
    let y = 10
    res = y * x
    total = y * x
    if(res % 2 == 0){
        return res + " é Par"
    } else{
        return res + " é Ímpar"
    }//Sempre que uma função executa um return, ela para e retorna pra continuação da estrutura do código.
}

let num = mult()

console.log(num)

//Função parametrizada significa que eu quero entrar com valores pra dentro da função operar.
function subtrair(p1 = 0, p2 = 0){//Caso eu não coloque nenhum valor, o parâmetro vai assumir o valor padrão de forma que eu determine isso no parâmetro.
    return p1 - p2 //Quando usamos return, a função não imprime ou retorna o que queremos, por isso é necessário imprimir no console ou na página.
}

subtrair(5,1)//O JS realiza o typecast(se é str ou number) automático.

console.log(subtrair(10, 5))

//De forma mais didática, podemos colocar a função dentro de uma varível e imprimir a função através dessa variável:

let sub = subtrair(10-10)
console.log(sub)

//Da mesma forma, podemos usar variáveis dentro dos parâmetros.

let valor = 5

function add(total){
    return valor + total
}

console.log(add(10))


//Parâmetros rest é uma função usando o tipo de dados spread, ou seja, sem valores determinados.
function somar(...valores){//Sei que valores é uma array
    let tam = valores.length
    let res = 0
    for(let i = 0; i < tam; i++){//O tratamento muda um pouco
        res+=valores[i]
    }
    return res
}

console.log(somar(5, 3))

function subtraindo(...sub){
    let res = 0
    for(let x of sub){//A variável x recebe o que está dentro de valores e itera.
        res -= x
    }
    return res
}

console.log(subtraindo(5, 1))

//Funções Anônimas

/*
Funções anônimas são funções que ela não possue um nome assossiado ao seu conteúdo,
ela só é criada no momento da execução. Ela funciona como uma função padrão mas tem
características de não está instanciada, será craida somente no momento da execução
da função.
*/

let fun = function(v1,v2){
    return v1 * v2
}

console.log(fun(5,5))

const fct = new Function("a1","a2", "return v1 * v2")//Função construtor com operador new e é função anônima e tem que ser tudo com aspas


//Arrow Function ou Função Lâmbida

const arrow = (valor1, valor2)=>{ return valor1 + valor2}//É uma forma de leitura dinâmica e muito mais simples do que o modo normal.

console.log(arrow(10,5))

const nome = x => {return x}

console.log(nome("Alex"))

const adicionar = y => y + 10//Não preciso do return pra usar o valor da função

console.log(adicionar(10))

//Função Aninhada

const funAnin = (...totais) => {
    const somar = val => {
        let res = 0
        for(x of val){
            res += v
            return res
        }
    }
    return somar(valores)//A função funAnin retorna o retorno da função somar e isso é obrigatório retornar o retorno de outra função.
}

const funfun = (...retornandoFunctionAninhado)=>{
    return funAnin(retornandoFunctionAninhado)
}

console.log(funAnin(10,5,15))
