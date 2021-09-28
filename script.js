let menuBtn = document.getElementById("menuButton");
menuBtn.addEventListener("click", function() {
   document.querySelector("nav").classList.toggle("expanded");
})

let navLink = document.querySelectorAll(".navlink");
for (let i=0; i<navLink.length; i++) {
   navLink[i].onclick = function() {
      let j = 0;
      while(j < navLink.length) {
         navLink[j++].className = "list";
      }
      navLink[i].className = "list active";
   }
}