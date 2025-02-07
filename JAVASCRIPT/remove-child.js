const caixa = document.querySelector('#caixa')
const elementos = ['HTML', 'CSS', 'Javascript', 'React', 'PHP', 'MySQL']

elementos.map((elemento, chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + (chave + 1))
    novoElemento.setAttribute('class', 'curso c' + (chave + 1))
    novoElemento.innerHTML = elemento

    const lixeira = document.createElement('img')
    lixeira.setAttribute('src', './imagens/lixeira-ico.png')
    lixeira.setAttribute('class', 'lixeira')
    
    // lixeira.addEventListener('click', (evento)=> {//para remover o elemento, eu tenho que programar com o método eventListener nos elementos html. Além disso eu não preciso me preocupar com a propagação em cada elemento HTML, pois estou colocando o método diretamente na div criada na variável novoElemento. Se houvesse outros elementos dentros da div, então eu teria que me preocupar com o stopPropagation.
    //     //console.log(evento.target)//pra saber se deu certo eu uso o console.log com a propriedade target.
    //     caixa.removeChild(evento.target.parentNode)//A partir do parent element que aplico o método de remover o child element. Percebemos também que a imagem é filho da variável novoElemento e não filho da variável caixa, então consequentemente vai dar um erro. Para solucionar esse erro usamos o parâmetro parentNode.
    // }) DESSA FORMA COMO É APLICADO O EVENTO EM CADA DIV, ISSO CONSOME MAIS MEMÓRIA E DESEMPENHO DO CÓDIGO.
    caixa.appendChild(novoElemento)
    novoElemento.appendChild(lixeira)
})

caixa.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('lixeira')) {
        evento.target.parentNode.remove()
    }
})//Dessa forma é melhor, pois preciso colocar só um um único event listener para vários elementos dinâmicos e usa menos carga de memória melhorando assim o desempenho. Isso é conhecido como Event Delegation.