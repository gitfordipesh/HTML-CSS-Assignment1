const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
})
// On Scroll Function
window.addEventListener("scroll", function () {
    let head = document.querySelector(".nav-menu")       
    let head2 = document.querySelector("header");
    if (window.scrollY >= 150) {
      head2.style.backgroundColor = "#3949ab";
      head.style.backgroundColor = "#3949ab";
      head2.style.padding = "0px";
      head.style.top = "50px";
      head2.style.transition = "0.3s";
    }
    else if (this.window.scrollY <= 150) {
      head2.style.backgroundColor = "transparent";
      head.style.backgroundColor = "transparent";
      head.style.top = "70px";
      head2.style.padding = "10px 0px";
    }
  })
  