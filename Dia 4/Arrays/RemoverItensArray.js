const numeros1 = [2, 3, 4, 5, 6, 7, 8, 10];

//Remover Inicio
const removerInicio = numeros1.shift();

//Remover Meio
const removerMeio = numeros1.splice(2, 1);
//Passar index e quantos itens remover

//Remover Final
const removerFinal = numeros1.pop();

console.log(numeros1);
// console.log(removerInicio);
// console.log(removerMeio);
console.log(removerFinal);
