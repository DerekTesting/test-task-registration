const signIn = document.querySelector('.login--tab');
const reg = document.querySelector('.registration--tab');
const nameField = document.querySelector('.form__name');
const phoneField = document.querySelector('.form__phone');
const passField = document.querySelector('.form__pass');
const regBtn = document.querySelector('.registration--btn');
const loginBtn = document.querySelector('.login--btn');

signIn.addEventListener('click', function (evt) {
    nameField.classList.add('hidden');
    phoneField.classList.add('hidden');
    passField.classList.remove('hidden');
    regBtn.classList.remove('reg__margin--btn');
    reg.classList.remove('tab--active');
    loginBtn.classList.add('reg__margin--btn');
    signIn.classList.add('tab--active');
    regBtn.style.order = '2'; // reg button last
});

reg.addEventListener('click', function(evt) {
    nameField.classList.remove('hidden');
    phoneField.classList.remove('hidden');
    passField.classList.add('hidden');
    loginBtn.classList.remove('reg__margin--btn');
    regBtn.classList.add('reg__margin--btn');
    signIn.classList.remove('tab--active');
    reg.classList.add('tab--active');
    regBtn.style.order = '0'; //reg button first
})