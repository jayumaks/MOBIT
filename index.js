function toPage2(){
    window.location.href="index2.html";
}
function toPage1(){
    window.location.href="index.html";
}
function openForm(){
    document.querySelector('.report-form').style.visibility= 'visible';
}
function popupThankyou(){
    document.querySelector('.Thank-you-container').style.visibility= 'visible';
    document.querySelector('.report-form').style.visibility= 'hidden';
}
function popOut(){
    document.querySelector('.Thank-you-container').style.visibility= 'hidden';
}


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  