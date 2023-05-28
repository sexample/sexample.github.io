const logInBtn = document.querySelector(".header__logIn__btn");
const user = document.querySelector(".header__logIn__user");
const username = document.querySelector(".header__logIn__username");
const events = document.querySelectorAll(".my-events__item");
const share = document.querySelectorAll(".share");
const message = document.querySelector(".message");
const deleteBtn = document.querySelectorAll(".delete");
const change = document.querySelectorAll(".change");

const fadeM = (el, timeout, display) =>{
    el.style.opacity = 0;
    el.style.display = display;
    el.style.transition = `opacity ${timeout}ms`
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.opacity = 0;
    },timeout);
    
};

if(localStorage.getItem('isStudent') != 'true'){
    share.forEach(el => {
        el.style.display = 'none';
    })
    change.forEach(el => {
        el.style.display = 'flex';
    })
}

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

share.forEach(el => {
    el.addEventListener("click", function(){
        navigator.clipboard.writeText(window.location.href);
        fadeM(message, 1000, 'flex');
    })
})

deleteBtn.forEach(el => {
    el.addEventListener("click", function(){
        el.parentElement.parentElement.parentElement.style.display = 'none';
        localStorage.setItem('event' + (el.parentElement.parentElement.parentElement.id).toString(), false);
    })
})