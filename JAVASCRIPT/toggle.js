const box = document.querySelectorAll('#estrutura > div')
const select = document.querySelector('#selecionado')
const txt = document.querySelector('#txt')
const create = document.querySelector('#adicionar')
const caixa = document.querySelector('#estrutura')
const remove = document.querySelector('#remover')

box.forEach((element) => {
    element.setAttribute('id', 'info')
    element.setAttribute('class', 'info')
});

caixa.addEventListener('click', (evento)=>{//Essa função é chamada de event delegation. Ao invés de iteramos elemento por elemento pra aplicar uma função em cada um, simplesmente criamos a função pro elemento pai, qualquer novo elemento que for adicionado depois também será reconhecido sem precisar de código extra.
    const info = evento.target.closest('.info')
    if(info){
        if(info.classList.contains('selecionado')){
            info.classList.remove('selecionado')
        } else {
            tirarSelecao()
            info.classList.toggle('selecionado')
        }
    }
})

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.forEach((elemento)=>{
        elemento.classList.remove('selecionado')
    })
}

const novoCurso = ()=>{
    const campo = document.querySelector('#txt').value
    if(campo){
        const node = document.createElement('div')
        node.setAttribute('id','info')
        node.setAttribute('class','info')

        const prg = document.createElement('p')
        prg.textContent = campo
        
        node.appendChild(prg)
        caixa.appendChild(node)
    } else {
        alert('Escreva um curso novo.')
    }
}

create.addEventListener('click', ()=>{
    novoCurso()
})

const textoHTML = ()=>{
    const txt = [...document.querySelectorAll('.selecionado')]
    return txt[0]
}

select.addEventListener('click', ()=>{
    try{
        alert(`Curso selecionado: ${textoHTML().innerText}`)
    }catch(erro){
        alert('Selecione um curso.')
    }
})

remove.addEventListener('click', (evento)=>{
    const selecionado = document.querySelector('.selecionado')
    if(selecionado){
        selecionado.remove()
    } else {
        alert('Nenhum campo selecionado. Por favor, selecione um campo.')
    }
})