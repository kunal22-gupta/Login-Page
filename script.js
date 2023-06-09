const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const popup = document.querySelector('.btn-login');
const close = document.querySelector('.close-btn');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    document.getElementsByTagName('form')[0].reset();
    wrapper.classList.remove('active');
})

popup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

close.addEventListener('click', () => {
    document.getElementsByTagName('form')[0].reset();
    wrapper.classList.remove('active-popup');
})