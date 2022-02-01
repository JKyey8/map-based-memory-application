const deviceHeight = window.innerHeight;


window.addEventListener("resize", (e) => {

if(document.getElementById("nav-searchbar") === document.activeElement)

{
document.getElementById("mobile-nav").style.display = "none";

 } else if(window.innerHeight == deviceHeight) {
document.getElementById("mobile-nav").style.display = "flex";


}


      });


window.addEventListener("click", () => {
document.getElementById("mobile-nav").style.display = "flex";


})


