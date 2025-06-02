//Concatenar Arrays
//slice = fatiar/cortar

let numbers1 = [1, 2, 3, 4];
let strings1 = ["Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];

//Coloca strings1 dentro de numbers1
all = numbers1.concat(strings1); //JavaScript automaticamente criou a variável no escopo global, o que não é uma boa prática.

console.log(all);
//[1, 2, 3, 4, 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']

//Pegar uma porção da minha array e criar uma nova

//Pega o Index 3 e 4 e cria um novo Array
let half = all.slice(3, 5); //Passar inicio e antes do 5
console.log(half);
//[4, 'Cinco']

//Lidar com várias arrays, juntar elas e criar outra com a porção desejada
