//Existe o método MAP que cria uma nova array e itera os elementos da array e temos a coleção MAP que é totalmente diferente.
//As características diferentes da coleção MAP é que ela tem chave e valor.
const box = document.querySelector('#caixa')

let mapa = new Map()//Assim declaramos o operador e reservamos na memória pronta pra gente trabalhar.

//Como podemos adicionar elementos dentro do map:

mapa.set('Curso','Javascript')
mapa.set(10, 'Engenharia de Software')
mapa.set('YouTube', 100)
mapa.set(100, 1)

console.log(mapa)

//E Como podemos verificar se uma chave existe na minha coleção ou não?

if(mapa.has('YouTube')){//É necessário o método has na condição pra verificar se existe uma chave na coleção MAP.
    console.log('A chave existe na coleção.') 
}else{
    console.log('A chave não está an coleção.')
}

//Além de usar o nome da chave como identificardor, posso usar uma variável como chave para o idenficador também.
let curso = 'Curso'

if(mapa.has(curso)){
    console.log('A chave existe na coleção com o valor: ' + mapa.get(curso))
} else {
    console.log('A chave NÃO existe na coleção.')
}

//Assim chamamos o valor da chave individualmente.
caixa.innerHTML = mapa.get('Curso')

//De uma forma mais elegante é usarmos variáveis para a condição:

let selecionado = 10
let txt = ""

if(mapa.has(selecionado)){
    txt = 'A chave é existente na coleção e seu valor é: ' + mapa.get(selecionado)
    txt += '<br> E o tamanho da coleção é: ' + mapa.size 
}else{
    txt = 'A chave não existe na coleção.'
}

caixa.innerHTML= txt

mapa.forEach((elemento)=>{
    console.log(elemento)
})

//E nessa coleção bem dinâminca e podemos adicionar ou remover os elementos por um método diferente ao invés de índices.