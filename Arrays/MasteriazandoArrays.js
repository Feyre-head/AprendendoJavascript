//Masterizando Arrays

// Solução para adicionar vários valores a uma única var

// Array nao alterável
const friends = ["Marcos", "Ana", "Marcela"]; //Array String
const num = [1, 2, 3, 4, true]; //Array Number / boolean

//Mostrar console
console.log(friends);

// Adicionar valores a uma Array (Inicio Fim Meio)

const num1 = [7, 8, 9];

// Adicionar temporariamente nao diretamente na VAR num1

num1.push(10); //Add no Final do Array

num1.unshift(4); //Add no Inicio do Array

num1.splice(1, 0, 5, 6); //Passar o inicio(index), se precisa deletar, o numero que quer add

console.log(num1);
