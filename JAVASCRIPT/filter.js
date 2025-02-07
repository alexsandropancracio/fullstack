const container = document.querySelector('#container')
const estrutura = document.querySelector('#estrutura')
const box = document.querySelectorAll('#estrutura > p')
const info = document.querySelectorAll('#estrutura > div')
const select = document.querySelector('#selecionado')
const remove = document.querySelector('#remover')
const txt = document.querySelector('#txt')
const add =  document.querySelector('#adicionar')
const idades = [15,21,30,17,18,44,12,50]

const maior = idades.filter((valor,índice,array)=>{//Por padrão o filter passa pra função que tá operando com o valor, posição e o array mas não sou obrigado a trabalhar com todos.
    if (valor > 18){
        return valor
    }
})

const menor = idades.filter((valor)=>{
    if(valor < 18){
        return valor
    }
})


let indice = 0

const novoCurso = ()=>{
    const campo = document.querySelector('#txt').value
    if(campo){
    const node = document.createElement('div')
    node.setAttribute('id', 'info')
    node.setAttribute('class', 'info')

    const prg = document.createElement('p')
    prg.textContent = campo
    
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'curso')
    
    node.appendChild(prg)
    node.appendChild(radio)
    estrutura.appendChild(node)
    return estrutura
    }else{
        alert('O campo precisa ser preenchido.')
    }
}

box.forEach((child, index) => {
        child.setAttribute('id', 'txt' + (index + 1));
        child.setAttribute('class', 'deco');
    });

info.forEach((element)=>{
    element.setAttribute('id', 'info')
    element.setAttribute('class', 'info')
})

select.addEventListener('click', ()=>{
    const curso = radioSelecionado()

    try{
    const selecionado = curso.parentNode.firstChild.nextSibling.textContent
    alert('Você selecionou o curso: '+ selecionado)
    }catch(erro){
        alert('Nenhum campo selecionado.')
    }
})

const radioSelecionado = ()=>{
    const radios = [...document.querySelectorAll('input[type=radio]')]

    const filtro = radios.filter((valor)=>{
        return valor.checked
    })
    return filtro[0]
}

remove.addEventListener('click', ()=>{
    const curso = radioSelecionado()

    if (curso){
        //curso.removeChild(curso.parentNode)
        curso.parentNode.remove()
    } else {
        alert('Nenhum campo selecionado.')
    }
})

add.addEventListener('click',()=>{
    novoCurso()
})


//filter
// const idades = [15, 21, 30, 17, 18, 44, 12, 50]


// const filtro = (valor)=>{//Por padrão o filter passa pra função que tá operando com o valor, posição e o array mas não sou obrigado a trabalhar com todos.
//     if(valor >= 18){
//         return valor
//     }
// }

// const maior = idades.filter(filtro)//Eu posso ter uma função dos elementos que operam o filter separado.

// console.log(idades)
// console.log(maior)