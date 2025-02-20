const box = document.querySelector('#caixa')

let musicas = new Set(['musica', 'musica boa', 'musica ruim'])//Na coleção map ou na coleção set, podemos já adicionar elementos no próprio construtor.

musicas.add('musica muito legal')
musicas.add('musica1')
musicas.add('musica1')//O set não permite entradas duplicadas, e essa coleção é o que usamos para não ter uma duplicada em array.
musicas.delete('musica1')


musicas.forEach((elemento)=>{
    box.innerHTML += elemento + '</br>'
})

for(let bandas of musicas){
    console.log(bandas)
}//Usamos as duas formas para iterar, percorrer os elemento de uma coleção.

