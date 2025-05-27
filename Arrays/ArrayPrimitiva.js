//Localizando uma Array Primitiva (procurar por um item dentro de uma Array)

const num1 = [6, 7, 8, 9];

// Perguntar se um numero está dentro da minha Array
console.log(num1.indexOf(6));
//Retorna a posição do número 6

//Se eu colocar um número que não está no meu array, retorna -1 (nao tem index -1)

console.log(num1.includes(6));
//Retornar True || False
