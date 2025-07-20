//Function Declaration

function movie() {
    console.log("The Matrix")
}

movie()

//Function Expression

const car = function () {
    console.log('Lancer')
}

car()


//Hoisting
// Na função de declaração eu posso chamar a função antes da declaração pois o hoisting vai chamar ela primeiro, porém na função de expressão ela vai estar como undefined pois as variaveis nao não jogadas para cima como na de declaração


function calcularIdade(anoAtual, anoNascimento) {
    //Armazena o calculo
    let idade = anoAtual - anoNascimento
    //devolve o valor (idade calculada)
    return idade;
}

//Armazena o resultado da função em uma var
let resultado = calcularIdade(2025, 2000)
//mostra ela
console.log(resultado)

let calculo = 