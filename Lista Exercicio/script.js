console.log('Script carregou!');

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnLogin = document.querySelector('.btnLogin')
const iconClose = document.querySelector('.icon-close')

// → Acessa a lista de classes do elemento wrapper 
//      wrapper.classList.add('active')
// → O método.add('active') adiciona a classe chamada "active" a esse elemento.
// → Se a classe "active" estiver associada, a alguma regra CSS, pode alterar a aparência, visibilidade, animação ou qualquer outro comportamento do elemento.

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})