const logInBtn = document.querySelector(".header__logIn__btn");
const user = document.querySelector(".header__logIn__user");
const username = document.querySelector(".header__logIn__username");
const modalWindow = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__form__close");
const modalButtons = document.querySelectorAll(".modal__form__header__item");
const modalTitle = document.querySelector(".modal__form__title");
const modalButton = document.querySelector(".modal__form__btn");
const logOut = document.querySelector(".logOut");
const error = document.querySelector(".error");
let isStudent = true;

const fadeIn = (el, timeout, display) =>{
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

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
        el.style.display = 'none';
    },timeout);
    
};

const fadeOut = (el, timeout) =>{
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    },timeout);
};

if(localStorage.getItem('user') == 'true'){
    user.src = '/img/user.png';
    username.textContent = 'Василий';
    logInBtn.style.display = 'none';
}

logOut.addEventListener("click", function(){
    console.log(1);
    localStorage.setItem('user', false);
    user.src = '';
    username.textContent = '';
    logInBtn.style.display = 'block';
    location.reload();
})

logInBtn.addEventListener("click", function(){
    fadeIn(modalWindow, 1000);
})

modalCloseBtn.addEventListener("click", function(){
    fadeOut(modalWindow, 1000);
})

modalButtons[0].classList.add("activeleft");
let choosenElement = modalButtons[0];

modalButtons.forEach(el => {
    el.addEventListener("click", function(){
    if(el == modalButtons[0]){
        el.classList.add("activeleft");
        choosenElement.classList.remove("activeright"); 
        choosenElement = el;
        modalTitle.textContent = 'Студенту';
        isStudent = true;
    }else{
        choosenElement.classList.remove("activeleft");
        el.classList.add("activeright"); 
        choosenElement = el;
        modalTitle.textContent = 'Организатору';
        isStudent = false;
    }
    })
    
})

modalButton.addEventListener("click", function(){
    if(document.querySelector(".name").value == "Василий" && document.querySelector(".password").value == '12345678'){
        document.querySelector(".name").value = '';
        document.querySelector(".password").value = '';
        fadeOut(modalWindow);
        user.src = '/img/user.png';
        username.textContent = 'Василий';
        logInBtn.style.display = 'none';
        localStorage.setItem('user', true);
        if(isStudent){
            localStorage.setItem('isStudent', true);
        }else{
            localStorage.setItem('isStudent', false);

        }
    }else{
        fadeM(error, 1500, 'flex');
        document.querySelector(".name").value = '';
        document.querySelector(".password").value = '';
    }
})