$(document).ready(function(){
    // toggle menu/navbar script
 

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontent Developer", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

const ham = document.querySelector('.ham');
const ul = document.querySelector('.menu');
const a = document.querySelectorAll(' .menu li a');
ham.addEventListener('click',()=>{
    ham.classList.toggle('active');
    ul.classList.toggle('active');
})
a.forEach((item)=>{
    item.addEventListener('click',()=>{
        ham.classList.toggle('active');
        ul.classList.toggle('active');
    });
});