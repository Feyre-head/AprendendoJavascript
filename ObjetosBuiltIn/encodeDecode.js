//Infinity
let soma = 1 / 0;
console.log(soma);

//NaN
console.log("a" * 2);

//Undefined
let x;
console.log(x);

//FUNÇÕES GLOBAIS

//transformar string em int
console.log(parseInt("42"));

//transformar string em float
console.log(parseFloat("30"));

//isNaN
console.log(isNaN("abc"));

//isFinite
console.log(isFinite(100));

// encodeURIComponent(mensagem);  Codifica a mensagem que contem espaços para que seja entendida
const mensagem = "Oi João & Maria!";
const mensagemSegura = encodeURIComponent(mensagem);

console.log(mensagemSegura);
// Saída: Oi%20Jo%C3%A3o%20%26%20Maria%21

//decodeURIComponent; Reverso do encodeURIComponent
const codificado = "Oi%20Jo%C3%A3o%20%26%20Maria%21";
const original = decodeURIComponent(codificado);
console.log(original);

//Fundamental objects
