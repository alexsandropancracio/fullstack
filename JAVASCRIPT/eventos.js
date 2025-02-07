const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const cursos = [...document.querySelectorAll('.c2')]

function msg(){
    alert('Clicou!')
}

c1.addEventListener('click', msg)//Aqui não sou obrigado a colocar os parênteses na função.

c2.addEventListener('click', ()=>{
    alert('Clicou!')//Podemos usar também uma arrow function ou chamar uma função dentro da arrow function.
})

//Um ponto importante é que ao executar um evento de um determinado elemento HTML, eu posso capturar o evento que foi ocorrido e no evento eu posso saber quem disparou esse evento.

c3.addEventListener('click', (evento)=>{
    const elemento = evento.target
    elemento.classList.add('destaque')
    
})

cursos.map((evento)=>{//É necessário eu usar o map para que haja a iteração de cada elemento e assim eu possa aplicar a função sobre cada elemento.
    evento.addEventListener('click', (elemento)=>{
        const evento = elemento.target
        evento.classList.add('destaque')
        console.log('Você selecionou o elemento ' + evento.innerHTML + ' e o ID desse elemento é ' + evento.id)
    })
})

