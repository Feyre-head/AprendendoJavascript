//Selecionar Elementos
const formSelect = document.querySelector('form')
const formInput = document.querySelector('#inputList')
const formList = document.querySelector('.ulList')

//Criar evento do Formulário
formSelect.addEventListener('submit', function (e) {
    e.preventDefault() //Impede comportamento padrão do formulário

    //Pegar valor padrão do Input
    const task = formInput.value.trim()

    //Verificar se o campo está vazio
    if (task === '') {
        console.log('campo vazio')
    } else {
        //Criar elemento li
        const liElement = document.createElement('li')
        liElement.textContent = task

        //Adicionar Item na lista
        formList.appendChild(liElement)

        //Criar botão excluir
        const liExcluir = document.createElement('Button')
        liExcluir.textContent = 'X'

        //Função Excluir
        function excluirLi() {
            formList.removeChild(liElement)
        }

        //Adicionar o botão dentro da li
        liElement.appendChild(excluirLi)

        //Limpar campo Input
        formInput.value = ''


    }
})

//Melhorias opcionais
//Adicionar um botão de excluir tarefa dentro de cada <li>.

// Criar uma função para marcar como concluída, alterando o estilo (ex.: riscar a tarefa).

// Salvar as tarefas no localStorage, para que não se percam ao recarregar a página.

// Adicionar mensagens de erro mais visíveis (ex.: "Digite uma tarefa válida").

// Estilizar sua To Do List com CSS para deixá-la bonita e intuitiva.