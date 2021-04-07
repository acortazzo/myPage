const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a');
const header = document.querySelector('.header.container');


hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});

document.querySelector('.contact-whap').addEventListener('click', function() {
     window.open("https://api.whatsapp.com/send?phone=541123611111","_blank");
}, false);

document.querySelector('.contact-mail').addEventListener('click', function() {
    window.open("mailto: alejandro.cortazzo@gmail.com","_blank");
}, false);

document.querySelector('.contact-location').addEventListener('click', function() {
    window.open("https://www.google.com/maps/place/Caballito,+Buenos+Aires","_blank");
}, false);