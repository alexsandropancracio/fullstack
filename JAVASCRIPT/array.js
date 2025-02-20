//O Array é uma coleção de dados, de variáveis, ou seja ai invés de criar variáveis separadas, eu crio um array e nesse array eu vou adicionando valores da maneira que eu quiser.
//Em linguagens tradicionais de bases de programação, criamos um array de um determinado tipo e armazeno somento esse tipo de dado dentro da array, contrário do javascript que armazena e trata por de trás dos bastidares por ser uma linguagem interpretata, ela cuida disso podendo armazenar qualquer coisa e não somente objeto do mesmo tipo.

const box = document.querySelector('#caixa')

let cores = ['Azul','Verde','Vermelho',['Claro','Escuro']]
let cursos = ['HTML','CSS', 'Javascript', cores]//Quando temos um array dentro de outro array, chamamos isso de matrizes.
let valores = [1,2,3]

console.log(cursos[3][3][0])//Dessa forma que acesso meu conjunto de dados.
console.log(cursos[3][1])

//pra trabalhar elemento por elemento, eis as possibilidades;
//console.log(cursos[0])

// //cursos[0] = 0//Assim eu consigo atribuir um elemento na posição zero.
// cursos.push('React')//Esse método acrescenta um elemento no final do array.
// cursos.pop()//Nesse método retira o último elemento do array.
// cursos.unshift('Python')//Um método permite adicionar um elemento no início do Array.
// cursos.shift()//É um método que tira o elemento no inicio do array.

cursos.map((elemento)=>{//percorro e cruio uma nova array com método map.
    let div = document.createElement('div')//crio a tag html pra receber os elementos do array.
    div.innerHTML = elemento//escrevo os elementos em html.
    caixa.appendChild(div)//insiro os elementos como filho da div id='caixa'.
})

const operacao = [
    (valor)=>{
        let total = 0
        for(res of valor){//Uma função pra fazer a soma de valores.
            total += res
        }
        return total
    },
    (valor)=>{
        let total = 1
        for(res of valor){
            total *= res
        }
        return total
    },
    (valor)=>{
        for(res of valor){
            console.log(res)//Já que eu uso o console.log aqui, não preciso usar o console.log ao chamar a operação como no exemplo abaixo.
        }
    }
]

console.log(operacao[1](valores))

operacao[2](valores)