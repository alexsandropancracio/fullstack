const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        const curso = evento.target
        curso.classList.toggle('selecionado')//O toglle adiciona e remove a classe ao selecionar um elemento HTML.

    })
})

btn.addEventListener('click',()=>{
    const selecionados = [...document.querySelectorAll('.selecionado')]
    selecionados.map((elemento)=>{
        caixa2.appendChild(elemento)//Esse método anexo um elemento "filho" do elemento HTML selenionado
    })
})

btn2.addEventListener('click', ()=>{
    const voltar = [...document.querySelectorAll('.curso:not(.selecionado)')]//Posso fazer a volta do elemento selecionado, mas esse é um modo de voltar um elemento não selecionado.
    voltar.map((elemento)=>{
        caixa1.appendChild(elemento)
    })
})