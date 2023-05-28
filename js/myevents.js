const logInBtn = document.querySelector(".header__logIn__btn");
const user = document.querySelector(".header__logIn__user");
const username = document.querySelector(".header__logIn__username");
const events = document.querySelectorAll(".my-events__item");

for(let i = 0; i < 8; i++){
    if(localStorage.getItem('event' + i.toString()) != 'true'){
        events[i].style.display = 'none';
    }
}
if(localStorage.getItem('user') == 'true'){
    user.src = '/img/user.png';
    username.textContent = 'Василий';
    logInBtn.textContent = '';
}