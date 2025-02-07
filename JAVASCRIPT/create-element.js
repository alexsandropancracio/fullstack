const caixa = document.querySelector('#caixa')
const box = [...document.querySelectorAll('.curso')]
const cursos = ['HTML', 'CSS', 'PHP', 'React', 'MySQL', 'Java']

cursos.forEach((index, chave)=>{//Preciso iterar a array para atribuir os métodos e propriedades.
const element = document.createElement('div')//Esse método eu crio um novo elemento HTML.
element.setAttribute('id', 'c' + (chave + 1))//Aqui eu atribuo id e classe para o elemento HTML
element.setAttribute('class', 'curso c' + (chave + 1))
element.innerHTML = index//Aqui eu escrevo como texto pro html o que foi feito na array.
caixa.appendChild(element)//E anexo dessa forma todo o conteúdo criado para o parent element.
})

const novo = document.createElement('div')// a partir daqui, eu já tenho um novo elemento mas só que ele está na memória, então preciso anexar o elemento.
novo.innerHTML = 'Python'
novo.setAttribute('id', 'c7')
novo.setAttribute('class', 'curso c7')
caixa.appendChild(novo)

console.log(document.getElementById("caixa").childNodes);
const nodes = [...document.getElementById("caixa").childNodes].filter(node => node.nodeType !== 3);
console.log(nodes); // Mostra apenas o comentário