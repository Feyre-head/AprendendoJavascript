# 📌 Tipos de Funções em JavaScript

Neste documento, vamos entender os principais tipos de funções em JavaScript: **Function Declaration**, **Function Expression** e **Arrow Function**.

---

## ✅ 1. Function Declaration (Declaração de Função)

### Características:

- Possui nome.
- Pode ser chamada antes da sua declaração (hoisting).

### Exemplo:

```javascript
function movie() {
  console.log('The Matrix')
}

movie()
```

✅ 2. Function Expression (Expressão de Função)
📍 Características:
Função anônima (sem nome) atribuída a uma variável.

Não pode ser chamada antes da declaração (não sofre hoisting).

Muito usada em funções como argumentos, callbacks e funções dinâmicas.

📍 Exemplo:

const car = function() {
console.log('Tesla');
};

car(); // Saída: Tesla

📍 Exemplo com função como argumento:

function executar(func) {
func();
}

executar(function() {
console.log('Executando uma Function Expression!');
});

✅ 3. Arrow Function (Função de Seta)
📍 Características:
Sintaxe mais curta e moderna.

Não tem o seu próprio this, arguments, super ou new.target.

Não pode ser usada como função construtora.

Não sofre hoisting (só pode ser usada após a declaração).

📍 Exemplo:
const animal = () => {
console.log('Gato');
};

animal(); // Saída: Gato

📍 Exemplo com parâmetros:
const somar = (a, b) => {
return a + b;
};

console.log(somar(2, 3)); // Saída: 5

📍 Exemplo com return implícito (quando tem só uma linha):
const dobro = x => x \* 2;

console.log(dobro(4)); // Saída: 8

✅ Quando usar cada uma?
Situação Tipo de Função Ideal
Funções simples e rápidas Arrow Function
Funções que precisam ser chamadas antes da declaração Function Declaration
Funções que serão passadas como argumento ou guardadas em variável Function Expression ou Arrow Function (dependendo do caso)
Quando precisa de controle sobre o this Function Declaration ou Expression

✅ Conclusão:
Dominar os três tipos de funções vai te ajudar a escrever código mais limpo, eficiente e adequado a cada situação.

✅ Use Declaration quando precisar de hoisting.

✅ Use Expression quando quiser controlar melhor o fluxo ou usar como argumento.

✅ Use Arrow Functions para callbacks curtos, map, filter, etc.
