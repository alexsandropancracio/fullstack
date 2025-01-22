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

//De forma mais didática, podemos colocar a função dentro de uma varível e imprimir a função através dessa variável ou imprimir a dentro de um console.log() conforme acima e abaixo:

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

const meuNome = x => {return x}

console.log(meuNome("Alex"))

const adicionar = y => y + 10//Não preciso do return pra usar o valor da função

console.log(adicionar(10))

//Função Aninhada

const funAnin = (...totais) => {
    const somar = val => {
        let res = 0
        for(x of val){
            res += x
            return res
        }
    }
    return somar(totais)//A função funAnin retorna o retorno da função somar e isso é obrigatório retornar o retorno de outra função.
}

const funfun = (...retornandoFunctionAninhado)=>{
    return funAnin(retornandoFunctionAninhado)
}

console.log(funAnin(10,5,15))

//Funções Geradoras

//Uma função geradora tem o seu retorno adiado até o momento que precisamos desse retorno e elas são o pilar da programação assincrona dentro de JS.

function* cores(){//Pra criar uma função geradora usamos um asterístico
    yield 'Amarelho'
    yield 'Verde'
    yield 'Azul'
}

const iterator = cores()

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)//Se eu executar novamente, a função tem noção de onde parou e então vai para o próximo yield.

function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const hobbie = yield 'Qual o seu hobbie favorito?'//podemos colocar o yield dentro de uma variável também
    return 'seu nome é ' + nome + ' e seu esporte hobbie é ' + hobbie
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Alex').value)
console.log(itp.next('Dança').value)

function* contador(){
    let z = 0
    while(true){
        yield z++
    }
}

const itc = contador()
/*console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)//Quantas vezes eu chamar a função, é quantas vezes eu vou chamar o loop infinito.
*/

for(let x = 0; x < 10; x++){
    console.log(itc.next().value)
}

//Função MAP

//A função MAP tem funcionalidade de percorrer Arrays, percorrer coleções ou "iterar", diferente dos loops e quando eu precisar alterar por completo todos os elementos da coleção.

//O MAP também pode receber 3 parâmetros, o elemento, a posição e o próprio Array que ele vai iterar.

// let mapeamento = cursos.map((el,i)=>{ pra comentar tudo selecionado é ctrl + ponto e vírgula
//     return el
//     //console.log("Curso: " + el + " - Posição do curso: " + i)
// })

// let cursos = document.getElementsByTagName('div')
// cursos = [...cursos]//É necessário espalhar o elemento para que a função map possa ser usada.

// cursos.map((e,i)=>{
//     e.innerHTML = "Aprendendo Programação JS"
//     console.log(e.innerHTML)//assim eu trago os elementos HTML.
// })

//const val = Array.prototype.map.call(cursos,({innerHTML})=>innerHTML) //pra pegar a propriedade do elemento eu uso chaves.

//console.log(val)

const converterInt = (elemento) => parseInt(elemento)

let numero =['1','2','3','4','5'].map(converterInt)

console.log(numero)

//Operadro THIS em Funções

function aluno(nome,nota){
    this.nome = nome//pra que a distinção da variavel com o mesmo nome do parâmetro é necessário usar o operador THIS, que é como se fosse uma variável para a função aluno.
    this.nota = nota

    this.dados = function(){
        setTimeout(function(){
            //O THIS faz referencia a uma nova instância criada para o setTimeout, se usarmos a function normal, não funciona, mas para resolver esse problema, usamos o arrow function.
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow = function(){
        setTimeout(()=>{//Conseguimos obter o resultado porque o arrow function não usa o contexto lexico ou o contexto da execução atual, ele usa o contexto do root(contexto pai que é o "aluno(nome, nota)") e esse é o poder do arrow function na superioridade de execução em relação a função anônima tradicional.
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

}

const al1 = new aluno("Alex", 10)//sintaxe de classes de no contexto de programação orientada a objeto.
al1.dados()
al1.dados_arrow()




