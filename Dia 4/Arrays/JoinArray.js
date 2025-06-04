let clients = ['Inara', 'Jorge', 'Nivon']
console.log(clients)

let clientsJoin = clients.join('1')
console.log(clientsJoin)

//Serve para adicionar algo que voce queira em itens da array

//Convertendo a primeira letra de cada palavra pra maiúsculo com JOIN
const arrayList = ['arroz', 'feijão', 'batata'] //Array de Strings

//Aqui usamos o método .map(), que percorre cada item do array.
// Para cada item (que é uma string como "ola mundo"), executamos uma função.
// Essa função retorna uma nova string com a primeira palavra modificada.

const toUpperCase = arrayList.map(item => {
    const palavras = item.split(' ')
    // O método .split(" ") divide a string onde houver espaço.
    // Exemplo: "ola mundo" vira ["ola", "mundo"].

    //Pega a primeira letra na posição 0 transforma em maiúscula / pega o restante da palavras começando no indice 1
    palavras[0] = palavras[0].charAt(0).toUpperCase() + palavras[0].slice(1)

    // junta as palavras separadas de volta em uma string, separadas por espaço.
    return palavras.join(' ')
})

console.log(toUpperCase)