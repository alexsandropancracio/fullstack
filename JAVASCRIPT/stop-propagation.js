const caixa = document.querySelector('#caixa')
const box = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa.addEventListener('click', (evento)=>{
    console.log('Clicou!')
    console.log(evento)
})

// box.addEventListener('click', (evento)=>{//O stopPropagation é um método da classe addEventListener.
//     evento.stopPropagation()
// })

cursos.map((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        evento.stopPropagation()//Dessa forma resolvemos a questão de propagação do evento.
    }) 
})