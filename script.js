
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
          document.querySelectorAll(".column-product")[0].classList.add("fadeInLeft");
          document.querySelectorAll(".column-product")[1].classList.add("fadeInTop");
          document.querySelectorAll(".column-product")[2].classList.add("fadeInRight");
      }
  })
})

observer.observe(document.querySelector(".container-product"));

/* navbar */

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}