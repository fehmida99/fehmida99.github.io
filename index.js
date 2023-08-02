const header = document.querySelector("header");
window.addEventListener("scroll", function(){

    header.classList.toggle("sticky", this.window.scrollY >100);
});

let menu=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
};


  // typing text animation script
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Java Backend Developer", "Coder","Software Engineer","Biotechnologist","Food Technologist", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // var typed = new Typed(".typing-2", {
  //   strings: ["Java Backend Developer", "Coder","Biotechnologist","Food Technologist", "YouTuber"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });





