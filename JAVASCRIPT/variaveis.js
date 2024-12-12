"use strict"

function teste(){
    let idade = 27
    if(true) {
        var nome = "Alex"
        console.log('Dentro do IF do teste: '+ idade)    
    }
    console.log("Dentro do teste: " + nome)
}

const naturalidade = "Brasil"

teste()

/*
Entendemos que a variável "var" serve para escopo global.
A variável "let" serve somente para o escopo local.
E a variável "const" serve para o escopo local e o elemento dentro dela é imutável.
*/

//Não é necessário o casting para o js.